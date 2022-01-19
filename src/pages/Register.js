import axios from "axios";
import { useState } from "react";
import { API_URL } from "../components/API";
import { Button, Form, FormLink, Input, Label, Span } from "../components/FormElements";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/local/register`, {
        firstname,
        lastname,
        username,
        email,
        password,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <div className="md:flex justify-center">
      <Form handleSubmit={handleSubmit}>
        <Label>
          <Span text="First name" />
          <Input
            type="text"
            placeholder="firstname"
            value={firstname}
            setValue={setFirstname}
          />
        </Label>
        <Label>
          <Span text="Last name" />
          <Input
            type="text"
            placeholder="lastname"
            value={lastname}
            setValue={setLastname}
          />
        </Label>
        <Label>
          <Span text="Username" />
          <Input
            type="text"
            placeholder="username"
            value={username}
            setValue={setUsername}
          />
        </Label>
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
        <Button text="Register" />
        <FormLink text='Log In here.' href='/login'/>
      </Form>
    </div>
  );
}
