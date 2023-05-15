import * as React from 'react';
import { Container, TextField, Button, Typography, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function AdminSignup() {
  return (
    <Container maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop:'50px', bgcolor: '#ffffff' }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Admin Sign Up
      </Typography>
      <Box component="form" sx={{ width: '100%' }}>
        <TextField 
          label="First Name" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Last Name" 
          variant="outlined" 
          fullWidth 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Phone Number" 
          variant="outlined"
          fullWidth 
          sx={{ marginBottom: 2 }}
        />
        <TextField 
          label="Email" 
          variant="outlined" 
          type="email" 
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
        <FormControl fullWidth variant="outlined" sx={{ marginBottom: 2 }}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            label="Gender"
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
        <TextField 
          label="Date of Birth" 
          variant="outlined" 
          type="date" 
          fullWidth 
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 2 }}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default AdminSignup;
