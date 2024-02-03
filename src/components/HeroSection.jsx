import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { keyframes } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import { useDarkMode } from "../DarkModeContext";

const morphAnimation = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 40% 60% 70% 30%/70% 40% 60% 30%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

export default function HeroSection() {
  const { darkMode } = useDarkMode();
  const handleDownload = async () => {
    const cvFileName = "Vannlithi-resume.pdf";

    try {
      // Use import.meta.env.BASE_URL for the base URL in Vite
      const response = await fetch(`${import.meta.env.BASE_URL}${cvFileName}`);
      const blob = await response.blob();

      const blobURL = window.URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = blobURL;
      link.download = cvFileName;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(blobURL);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignContent: "center",
        width: "100%",
        bgcolor: darkMode.background,
        marginTop: { xs: "60px", sm: "40px", md: "85px" },
        paddingTop: "70px",
        paddingBottom: "50px",
        border: "none",
        boxShadow: "none",
        borderRadius: "0",
      }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          sx={{
            flexDirection: { xs: "column-reverse", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}>
          <Grid item xs={12} md={6}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "flex-start" },
                textAlign: { xs: "center", md: "start" },
                paddingTop: { xs: "40px", md: 0 },
                color: darkMode.text,
              }}>
              <Typography
                component="div"
                variant="h2"
                sx={{
                  fontWeight: "800",
                  fontSize: { xs: "2.5rem", md: "3.5rem" }, // Adjusted font size for small screens
                  lineHeight: "1.2",
                }}>
                Front-End React Developer
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ marginTop: "20px", fontSize: "1.2rem" }}>
                👋 Developer on a mission | 💻 Coding enthusiast |
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{ fontSize: "1.2rem" }}>
                🚀 Let's build cool stuff! | 🌟 Learning every day!
              </Typography>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "20px",
                  justifyContent: "center",
                }}>
                <IconButton
                  color="inherit"
                  href="https://github.com/vannlithi168"
                  target="_blank"
                  rel="noopener noreferrer">
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://www.linkedin.com/in/kim-vannlithi-2231b3294"
                  target="_blank"
                  rel="noopener noreferrer">
                  <LinkedInIcon />
                </IconButton>
              </div>
              <Button
                variant="contained"
                size="large"
                sx={{
                  marginTop: "30px",
                  bgcolor: "#0094FF",
                  fontWeight: 500,
                }}
                onClick={handleDownload}>
                Download CV
              </Button>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={6}>
            <CardMedia
              component="div"
              sx={{
                marginTop: { xs: "0px", md: 0 },
                marginLeft: { xs: "auto", md: "50px" },
                marginRight: { xs: "auto", md: "auto" },
                marginBottom: "20px",
                backgroundImage: "url(/img/me.jpg)",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: `3px solid ${darkMode.text}`,
                borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                position: "relative",
                transition: "all 1s ease-in-out",
                height: { xs: "15rem", md: "25rem" }, // Adjusted height for small screens
                width: { xs: "15rem", md: "25rem" }, // Adjusted width for small screens
                maxWidth: "100%", // Ensure image stays centered on small screens
                animation: `${morphAnimation} 8s ease-in-out infinite`,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
}
