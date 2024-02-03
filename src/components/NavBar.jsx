// NavBar.js
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark mode icon
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useDarkMode } from "../DarkModeContext";

const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false); // Define mobileOpen state
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", padding: "20px" }}>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-90}
        style={{
          my: 2,
          fontWeight: "bold",
          bgcolor: darkMode.background,
          color: darkMode.text,
          textDecoration: "none",
        }}>
        k_vannlithi.dev
      </ScrollLink>

      <Divider />
      <List>
        {navItems.map((item) => (
          <li key={item}>
            <ScrollLink
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              onClick={handleDrawerToggle}>
              <Button
                sx={{
                  color: darkMode.text, // Set text color based on dark mode
                  fontWeight: "bold",
                  fontSize: "17px",
                  margin: "10px 0",
                }}>
                {item}
              </Button>
            </ScrollLink>
          </li>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgcolor: darkMode.background, // Set background color based on dark mode
          height: { xs: "60px", sm: "80px", md: "87px" },
          justifyContent: "center",
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon sx={{ color: darkMode.text }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: darkMode.text,
              fontWeight: "bold",
              fontSize: "25px",
              marginLeft: "20px",
            }}>
            k_vannlithi.dev
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginRight: "30px" }}>
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-90}>
                <Button
                  sx={{
                    color: darkMode.text,
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}>
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="toggle dark mode"
            onClick={toggleDarkMode}
            sx={{ marginLeft: "auto", color: darkMode.text }}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: darkMode.background, // Set background color based on dark mode
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;
