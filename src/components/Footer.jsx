import React, { useEffect, useState } from "react";

function Footer() {
  const [fontSize, setFontSize] = useState("2rem"); // Initial font size

  useEffect(() => {
    const handleResize = () => {
      // Adjust font size based on viewport width
      const newFontSize = window.innerWidth <= 600 ? "1rem" : "2rem";
      setFontSize(newFontSize);
    };

    // Initial adjustment on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "black",
        padding: "20px",
      }}>
      <h1
        style={{
          color: "#FFFFFF",
          fontSize: fontSize,
          margin: "0",
          width: "100%",
        }}>
        Copyright © 2024. All rights are reserved
      </h1>
      <img
        src="/img/footer.png"
        alt="Footer Logo"
        style={{
          height: "auto",
          width: "40%",
          marginTop: "10px",
          display: "block",
        }}
      />
    </div>
  );
}

export default Footer;
