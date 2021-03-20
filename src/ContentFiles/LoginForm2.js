import React from "react";
import "./FormPopup.css";
import { Button, TextField } from "@material-ui/core";

function LoginForm2() {
  return (
    <>
      <div className="form">
        <div className="form_heading">Sign In</div>
        <TextField color="secondary" id="standard-basic" label="UserName" />
        <TextField
          color="secondary"
          id="standard-basic"
          label="Password"
          type="password"
        />
        <Button className="login_btn" color="secondary" variant="contained">
          Sign In
        </Button>
      </div>
    </>
  );
}

export default LoginForm2;
