import axios from "axios";
import { useState } from "react";
import { API_URL } from "../components/API";
import { Button, Form, Input, Label, Span } from "../components/FormElements";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/forgot-password`, {
        email,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));

    setEmail("");
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
        <Button text="Send reset link" />
      </Form>
    </div>
  );
}
