import React, { useState } from "react";
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
import { Element, scroller } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";

export default function ContactMe({ id }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { darkMode } = useDarkMode();

  const handleSendClick = async () => {
    // Formspree form endpoint
    const formEndpoint = "https://formspree.io/f/xbjngjyj";

    // Prepare data for form submission
    const formData = new FormData();
    formData.append("email", email);
    formData.append("message", message);

    // Send form data to Formspree
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submission successful!");

        // Reset the form fields after successful submission
        setEmail("");
        setMessage("");

        // Scroll to the next section (e.g., "footer") after successful form submission
        scroller.scrollTo("footer", {
          smooth: true,
          duration: 500,
        });
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Element name={id} className="element">
      <div
        style={{
          padding: " 20px",
          backgroundColor: darkMode.color,
        }}>
        <div style={{ marginLeft: "20px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: darkMode.text,
              marginTop: "0px",
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
              color: darkMode.text,
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
              color: darkMode.text,
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
              color: darkMode.text,
            }}>
            <LinkedInIcon /> Linkedin:
            www.linkedin.com/in/kim-vannlithi-2231b3294
          </Typography>
        </div>

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "100%",
            marginTop: "20px",
            border: "none",
            boxShadow: "none",
            bgcolor: darkMode.color,
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1 0 auto",
              marginRight: { xs: 0, md: "20px" },
            }}>
            <CardContent>
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  bgcolor: "white",
                  color: darkMode.text,
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  bgcolor: "white",
                  color: darkMode.text,
                }}
              />

              {/* "Send Me" Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                onClick={handleSendClick}>
                Send Me
              </Button>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "auto",
              marginTop: { xs: "-20px", md: "-80px" },
              marginLeft: { xs: 0, md: "20px" },
            }}
            image="/img/contactme2.gif"
            alt="Live from space album cover"
          />
        </Card>
      </div>
    </Element>
  );
}
