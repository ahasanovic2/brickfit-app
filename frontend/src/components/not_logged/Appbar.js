import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Appbar() {
  const [loginAnchorEl, setLoginAnchorEl] = React.useState(null);
  const [signupAnchorEl, setSignupAnchorEl] = React.useState(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState(null);

  const handleLoginClick = (event) => {
    setLoginAnchorEl(event.currentTarget);
  };

  const handleLoginClose = () => {
    setLoginAnchorEl(null);
  };

  const handleSignupClick = (event) => {
    setSignupAnchorEl(event.currentTarget);
  };

  const handleSignupClose = () => {
    setSignupAnchorEl(null);
  };

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu id="main-menu" anchorEl={menuAnchorEl} keepMounted open={Boolean(menuAnchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose} component={Link} to="/">
              Homepage
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/news">
              News
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/location">
              Location
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">
              Contact
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/appointment-reservation">
              Appointment Reservation
            </MenuItem>
          </Menu>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Brick Fit
          </Typography>
          <div>
            <Button color="inherit" onClick={handleLoginClick}>
              Login
            </Button>
            <Menu id="login-menu" anchorEl={loginAnchorEl} keepMounted open={Boolean(loginAnchorEl)} onClose={handleLoginClose}>
              <MenuItem onClick={handleLoginClose} component={Link} to="/admin-login">
                Admin Login
              </MenuItem>
              <MenuItem onClick={handleLoginClose} component={Link} to="/user-login">
                User Login
              </MenuItem>
            </Menu>
          </div>
          <div>
            <Button color="inherit" onClick={handleSignupClick}>
              Signup
            </Button>
            <Menu id="signup-menu" anchorEl={signupAnchorEl} keepMounted open={Boolean(signupAnchorEl)} onClose={handleSignupClose}>
              <MenuItem onClick={handleSignupClose} component={Link} to="/admin-signup">
                Admin Signup
              </MenuItem>
              <MenuItem onClick={handleSignupClose} component={Link} to="/user-signup">
                User Signup
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
