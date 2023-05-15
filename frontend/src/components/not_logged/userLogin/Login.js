import * as React from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'100px', bgcolor: '#ffffff' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        User Login
      </Typography>
      <Box component="form" sx={{ width: '100%' }}>
        <TextField 
          label="Username/Email" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Password" 
          variant="outlined" 
          type="password" 
          fullWidth 
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 2 }}>
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
