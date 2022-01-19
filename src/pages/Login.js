import { useState, useContext } from "react";
import {
  Button,
  Form,
  FormLink,
  Input,
  Label,
  Span,
} from "../components/FormElements";
import axios from "axios";
import { API_URL } from "../components/API";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const { setToken } = useContext(AuthContext);

  function handleSubmit(e) {
    setErrMsg("");
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/local`, {
        identifier: email,
        password,
      })
      .then((res) => {
        const refresh = res.data.refresh;
        const jwt = res.data.jwt;
        setToken(jwt);
        localStorage.setItem("refresh", refresh);
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.log(err.response.data);
        const errId = err.response.data.data[0].messages[0].id;
        if (errId === "Auth.form.error.invalid") {
          return setErrMsg("Invalid Credentials");
        }
        if  (
          errId === "Auth.form.error.email.provide" ||
          errId === "Auth.form.error.password.provide"
        ) {
          return setErrMsg("Please provide all credentials");
        } else {
          setErrMsg("something went wrong, try again later.");
        }
      });
    setPassword("");
  }
  return (
    <div className="md:flex justify-center">
      <Form handleSubmit={handleSubmit}>
        <Label>
          <Span text="Email" />
          <Input
            type="email"
            placeholder="email"
            value={email}
            setValue={setEmail}
          />
        </Label>
        <Label>
          <Span text="Password" />
          <Input
            type="password"
            placeholder="password"
            value={password}
            setValue={setPassword}
          />
        </Label>
        <Button text="log in" />
        {errMsg && (
          <div className="rounded-sm text-red-400 text-center text-md py-6 bg-green-100 ">
            {errMsg}
          </div>
        )}
        <FormLink text="Create an Account." href="/register" />
        <FormLink text="Forget Password?" href="/reset-password" />
      </Form>
    </div>
  );
}
