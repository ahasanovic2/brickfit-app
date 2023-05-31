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
import MovieIcon from "@mui/icons-material/Movie";

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
          <a className="ikona" href="/">
            <MovieIcon size="small" sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}></MovieIcon>
          </a>

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
