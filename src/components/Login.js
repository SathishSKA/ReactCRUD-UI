import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <Box className="login">
          <h2 className="login-head">Login to Your Account</h2>
          <TextField type={"email"} id="standard-basic" label="Email" variant="standard" />
          <TextField type={"password"} id="standard-basic" label="Password" variant="standard" />
          <Button className="login-button" varient="contained">Login</Button>
        </Box>
      </div>
    </div>
  );
};
