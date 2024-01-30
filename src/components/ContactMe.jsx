import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function ContactMe() {
  return (
    <div
      style={{
        padding: "20px", // Add padding for better spacing
      }}>
      <div style={{ marginLeft: "20px" }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#0094FF",
            marginTop: "10px",
            marginBottom: "30px",
          }}>
          Contact Me
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          <EmailIcon /> Email: vannlithi@gmail.com
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "bold",
            margin: "20px 0",
          }}>
          <TelegramIcon /> Telegram: 092988821
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "20px",
            fontWeight: "bold",
          }}>
          <LinkedInIcon /> Linkedin: www.linkedin.com/in/kim-vannlithi-2231b3294
        </Typography>
      </div>

      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Use column layout on small screens, row layout on medium and larger screens
          width: "100%",
          marginTop: "20px",
          border: "none",
          boxShadow: "none",
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
            marginRight: { xs: 0, md: "20px" }, // Add margin on larger screens
          }}>
          <CardContent>
            <Typography
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold", color: "#0094FF" }}>
              Send Me a Message
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              rows={4}
            />

            {/* "Send Me" Button */}
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "10px" }}>
              Send Me
            </Button>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{
            width: { xs: "100%", md: "50%" }, // Full width on small screens, 50% width on medium and larger screens
            height: "auto",
            marginTop: { xs: "-20px", md: "-80px" }, // Adjusted margin on small screens
            marginLeft: { xs: 0, md: "20px" }, // Add margin on larger screens
          }}
          image="/img/contactme.gif"
          alt="Live from space album cover"
        />
      </Card>
    </div>
  );
}
