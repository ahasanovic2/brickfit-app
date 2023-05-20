import * as React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const user = {
      email: email,
      password: password,
    };
  
    try {
      const response = await axios.post('http://localhost:8080/auth/signin', user);
      // If status is 200, redirect to new page
      if(response.status === 200) {
        navigate('/newpage');
      }
    } catch (error) {
      if(error.response && error.response.status === 403) {
        setError('Incorrect email or password');
      } else {
        console.error("An error occurred while logging in:", error);
        // Handle other errors
      }
    }
  };

  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'100px', bgcolor: '#ffffff' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        User Login
      </Typography>
      {error && <Typography variant="body2" color="error" sx={{ marginBottom: 2 }}>{error}</Typography>}
      <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>
        <TextField 
          label="Username/Email" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }}
          value={email}
          onChange={handleEmailChange}
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          type="password" 
          fullWidth 
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={handlePasswordChange}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 2 }} type="submit">
          Login
        </Button>
        <Box textAlign="right">
          <Button color="primary">
            Forgot password?
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;