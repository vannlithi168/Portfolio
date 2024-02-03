import { keyframes } from "@emotion/react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useDarkMode } from "../DarkModeContext";

const scaleInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.9);
  }
`;

export default function TechStack() {
  const { darkMode } = useDarkMode();
  const images = [
    "/img/html.png",
    "/img/css.png",
    "/img/javascript.png",
    "/img/react.png",
    "/img/express.png",
    "/img/node.png",
    "/img/mongodb.png",
    "/img/tailwind.png",
    "/img/python.png",
  ];

  return (
    <div style={{ backgroundColor: darkMode.background, padding: "20px 0" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 800,
          marginBottom: "30px",
          marginTop: "0px",
          color: darkMode.text,
        }}>
        TECH STACKS
      </h1>
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "unset", // Allow wrapping of images on smaller screens
          textAlign: "center",
        }}>
        <Card
          sx={{
            display: "flex",
            gap: "20px",
            border: "none",
            boxShadow: "none",
            marginBottom: "50px",
            justifyContent: "center",
            bgcolor: darkMode.background,
            overflow: "hidden",
            transition: "all 0.5s ease-in-out",
            flexWrap: "wrap", // Allow items to wrap on smaller screens
          }}>
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
                bgcolor: darkMode.color,
                animation: `${scaleInAnimation} 3s ease-in-out ${
                  index * 1.5
                }s infinite`,
              }}
              image={image}
              alt={`Tech Stack ${index + 1}`}
            />
          ))}
        </Card>
      </div>
    </div>
  );
}
