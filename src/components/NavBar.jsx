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
import { Link as ScrollLink, Element } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;
const navItems = ["Home", "About", "Projects", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", padding: "20px" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        k_vannlithi.dev
      </Typography>
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
                  color: "black",
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
          bgcolor: "#FFFFFF",
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
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "black",
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
                offset={-90} // Adjust the offset based on your navbar height
              >
                <Button
                  sx={{ color: "black", fontWeight: "bold", fontSize: "17px" }}>
                  {item}
                </Button>
              </ScrollLink>
            ))}
          </Box>
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
            },
          }}>
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
