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
  const handleDownload = () => {
    // Replace "your-cv-file.pdf" with the actual filename of your CV
    const cvFileName = "Vannlithi-resume.pdf";

    // Create an anchor element
    const link = document.createElement("a");
    link.href = `../${cvFileName}`;

    // Set the download attribute with the filename
    link.download = cvFileName;

    // Append the anchor to the document and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Remove the anchor from the document
    document.body.removeChild(link);
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignContent: "center",
        width: "100%",
        bgcolor: "#F8F8F8",
        marginTop: "90px",
        paddingTop: "70px",
        paddingBottom: "50px",
        border: "none",
        boxShadow: "none",
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
              }}>
              <Typography
                component="div"
                variant="h2"
                sx={{
                  fontWeight: "800",
                  fontSize: "3.5rem",
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
                <GitHubIcon />
                <LinkedInIcon />
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
                marginTop: { xs: "30px", md: 0 },
                marginLeft: { xs: "auto", md: "50px" },
                marginRight: { xs: "auto", md: "auto" },
                marginBottom: "20px",
                backgroundImage: "url(/img/me.jpg)",
                backgroundPosition: "50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                border: "3px solid #2d2e32",
                borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
                position: "relative",
                transition: "all 1s ease-in-out",
                height: "25rem",
                width: "25rem",
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
