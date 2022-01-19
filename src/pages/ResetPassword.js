import axios from "axios";
import { useState} from "react";
import { API_URL } from "../components/API";
import { Button, Form, Input, Label, Span } from "../components/FormElements";


export default function ResetPassword() {
 const [code, setCode] = useState('')
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  
  const url = window.location.href;

  const urlParams = new URLSearchParams(new URL(url).search)
//   const code = urlParams.get("code")

  function handleSubmit(e) {
   setCode(urlParams.get("code"));
    e.preventDefault();
    axios
      .post(`${API_URL}/auth/reset-password`, {
        code, // code contained in the reset link of step 3.
        password: newPassword,
        passwordConfirmation: confirmPassword,
      })
      .then((res) => {
          setCode('')
      })
      .catch((err) => console.log(err.response));
  }
  return (
    <div className="md:flex justify-center">
      <Form handleSubmit={handleSubmit}>
        <Label>
          <Span text="New Password" />
          <Input
            type="password"
            placeholder="new password"
            value={newPassword}
            setValue={setNewPassword}
          />
        </Label>
        <Label>
          <Span text="Confirm Password" />
          <Input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </Label>
        <Button text="change password" />
      </Form>
    </div>
  );
}
