import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import "../styles/login.css"; // Import custom styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container className="login-container">
      <Box className="login-box">
        <Typography variant="h4" className="login-title">Login</Typography>
        {error && <Typography className="error">{error}</Typography>}
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            margin="normal"
            className="input-field"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />
          <Button type="submit" variant="contained" className="login-button" fullWidth>
            Login
          </Button>
        </form>
        <Typography variant="body2" className="signup-link">
  Don't have an account?        <Link to="/signup">Sign Up</Link>
</Typography>

      </Box>
    </Container>
  );
};

export default Login;
