import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Box, Typography } from "@mui/material";
import "../styles/Auth.css"; // Importing custom styles

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    address: "",
    age: "",
    dob: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-page">
      <Container maxWidth="xs">
        <Box className="auth-container">
          <Typography variant="h4" component="h2" className="auth-title">
            Sign Up
          </Typography>
          {error && <Typography className="error-message">{error}</Typography>}
          <form onSubmit={handleSignup}>
            <TextField fullWidth label="Full Name" name="name" variant="outlined" className="input-field"
              value={formData.name} onChange={handleChange} InputLabelProps={{ shrink: true }} required sx={{ mb: 2 }} />
            
            <TextField fullWidth label="Mobile Number" name="mobile" variant="outlined" className="input-field"
              value={formData.mobile} onChange={handleChange} InputLabelProps={{ shrink: true }} required sx={{ mb: 2 }} />
            
            <TextField fullWidth label="Address" name="address" variant="outlined" className="input-field"
              value={formData.address} onChange={handleChange} InputLabelProps={{ shrink: true }} required sx={{ mb: 2 }} />
            
            <TextField fullWidth type="number" label="Age" name="age" variant="outlined" className="input-field"
              value={formData.age} onChange={handleChange} InputLabelProps={{ shrink: true }} required sx={{ mb: 2 }} />
            
            <TextField fullWidth type="date" label="Date of Birth" name="dob" InputLabelProps={{ shrink: true }}
              variant="outlined" className="input-field" value={formData.dob} onChange={handleChange} required sx={{ mb: 2 }} />
            
            <TextField fullWidth label="Email" name="email" variant="outlined" className="input-field"
              value={formData.email} onChange={handleChange} required sx={{ mb: 2 }} />
            
            <TextField fullWidth type="password" label="Password" name="password" variant="outlined"
              className="input-field" value={formData.password} onChange={handleChange} required sx={{ mb: 2 }} />

            <Button type="submit" fullWidth variant="contained" className="auth-button">
              Sign Up
            </Button>
          </form>
          <Typography className="auth-footer">
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Signup;
