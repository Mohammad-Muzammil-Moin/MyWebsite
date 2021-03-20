import React from "react";
import "./FormPopup.css";
import { Button, TextField } from "@material-ui/core";

function LoginForm() {
  return (
    <>
      <div className="form">
        <TextField color="secondary" id="standard-basic" label="UserName" />
        <TextField color="secondary" id="standard-basic" label="E-mail" />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Password"
          type="password"
        />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Repeat password"
          type="password"
        />
        <Button className="login_btn" color="secondary" variant="contained">
          Sign Up
        </Button>
      </div>
    </>
  );
}

export default LoginForm;
