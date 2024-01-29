import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Portfolio() {
  return (
    // Outer container styles
    <div
      style={{
        backgroundColor: "#F8F8F8",
        border: "none",
        boxShadow: "none",
        marginBottom: "50px",
      }}>
      {/* Portfolio title */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "#0094FF",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "30px",
        }}>
        PORTFOLIO
      </Typography>
      {/* Main Card */}
      <Card
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column", // Stack on extra small screens
            sm: "row", // Row on small and larger screens
          },
          bgcolor: "#FFFFFF",
          width: "90%", // Adjusted for smaller screens
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "10px",
          marginBottom: "40px",
        }}>
        {/* Inner container for content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}>
          {/* Card content section */}
          <CardContent sx={{ flex: "1 0 auto" }}>
            {/* Action buttons section */}
            <CardActions
              sx={{
                textAlign: "center",
                marginBottom: "10px",
              }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "#FFFFFF",
                  color: "black",
                  boxShadow: "none",
                  border: "solid 1px black",
                  width: "100%", // Full width on all screen sizes
                  fontSize: "10px",
                  marginBottom: "10px",
                }}>
                #ReactJS
              </Button>
              {/* Add more buttons as needed */}
            </CardActions>
            {/* Title */}
            <Typography
              component="div"
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
              }}>
              Authentication
            </Typography>
            {/* Description */}
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                marginLeft: "10px",
                marginTop: "10px",
                marginBottom: "10px",
                width: "100%", // Full width on all screen sizes
              }}>
              The Membership MERN (MongoDB, Express.js, React.js, Node.js)
              project is a web application designed to manage and facilitate
              membership-related activities. The MERN stack is utilized for its
              robust full-stack capabilities.
            </Typography>
            {/* Additional actions buttons section */}
            <CardActions
              sx={{
                textAlign: "center",
                marginTop: "10px",
              }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  bgcolor: "#FFFFFF",
                  color: "black",
                  marginRight: "0", // No margin on smaller screens
                  fontWeight: 700,
                  width: "100%", // Full width on all screen sizes
                }}>
                Source Code
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontWeight: 700,
                  width: "100%", // Full width on all screen sizes
                }}>
                Demo
              </Button>
            </CardActions>
          </CardContent>
        </Box>
        {/* Image section */}
        <CardMedia
          component="img"
          sx={{ width: { xs: "100%", sm: "350px" }, height: "auto" }} // Responsive image size
          image="/img/membership.png"
          alt="Membership Project"
        />
      </Card>
    </div>
  );
}
