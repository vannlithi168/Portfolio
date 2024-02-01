import { useRef } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { keyframes } from "@emotion/react";
import smoothScrollIntoViewIfNeeded from "smooth-scroll-into-view-if-needed";

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

  const cardRef = useRef(null);
  const startY = useRef(null);

  const handleScroll = (deltaY) => {
    const card = cardRef.current;
    const scrollAmount = 200;
    card.scrollLeft += deltaY > 0 ? scrollAmount : -scrollAmount;
  };

  const handleWheel = (e) => {
    handleScroll(e.deltaY);
  };

  const handleTouchStart = (e) => {
    // Store initial touch position
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    // Calculate and handle the scroll distance based on touch movement
    const deltaY = startY.current - e.touches[0].clientY;
    startY.current = e.touches[0].clientY;
    handleScroll(deltaY);
  };

  const scrollTo = (element) => {
    smoothScrollIntoViewIfNeeded(element, {
      behavior: "smooth",
      scrollMode: "if-needed",
      block: "nearest",
      inline: "nearest",
    });
  };

  return (
    <div style={{ backgroundColor: "#F8F8F8", paddingBottom: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 800,
          marginBottom: "30px",
          marginTop: "0px",
        }}>
        TECH STACKS
      </h1>
      <div
        style={{
          overflowX: "auto",
          whiteSpace: "nowrap",
          textAlign: "center",
          scrollbarWidth: "none", // Hide scrollbar for a cleaner look
          msOverflowStyle: "none", // Hide scrollbar for IE and Edge
        }}
        onWheel={handleWheel}
        onTouchStart={(e) => handleTouchStart(e)}
        onTouchMove={(e) => handleTouchMove(e)}
        onClick={(e) => scrollTo(cardRef.current)}>
        <Card
          ref={cardRef}
          sx={{
            display: "flex",
            gap: "20px",
            border: "none",
            boxShadow: "none",
            marginBottom: "50px",
            justifyContent: "center",
            bgcolor: "#F8F8F8",
            overflow: "hidden",
            transition: "all 0.5s ease-in-out",
            flexWrap: "nowrap", // Prevent card items from wrapping on smaller screens
            minWidth: "120%", // Set a fixed width larger than the screen size
            padding: "10px", // Adjust padding for a better display
          }}>
          {images.map((image, index) => (
            <CardMedia
              key={index}
              component="img"
              sx={{
                width: 100,
                height: 100,
                borderRadius: "50%",
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
