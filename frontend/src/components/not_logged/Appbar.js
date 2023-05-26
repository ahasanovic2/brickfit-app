/*import * as React from "react";
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
}*/
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#282c34" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BRICK FIT
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/news">
                <Typography textAlign="center">Novosti</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/location">
                <Typography textAlign="center">Lokacija</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/contact">
                <Typography textAlign="center">Kontakt</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/appointment-reservation">
                <Typography textAlign="center">Rezervacija termina</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} component={Link} to="/review">
                <Typography textAlign="center">Ostavljanje recenzije</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BRICK FIT
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button onClick={handleCloseNavMenu} component={Link} to="/news" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Novosti
            </Button>
            <Button onClick={handleCloseNavMenu} component={Link} to="/location" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Lokacija
            </Button>
            <Button onClick={handleCloseNavMenu} component={Link} to="/contact" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Kontakt
            </Button>
            <Button onClick={handleCloseNavMenu} component={Link} to="/appointment-reservation" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Rezervacija termina
            </Button>
            <Button onClick={handleCloseNavMenu} component={Link} to="/review" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Ostavljanje recenzije
            </Button>
          </Box>
          <Box style={{ display: "flex" }}>
            <Button onClick={handleCloseNavMenu} component={Link} to="/" sx={{ my: 2, color: "white", display: "block", marginLeft: "50px", fontWeight: "bold", fontSize: "16px" }}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
