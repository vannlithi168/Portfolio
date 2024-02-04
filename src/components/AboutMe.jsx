import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Element } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";

export default function AboutMe() {
  const { darkMode } = useDarkMode();
  return (
    <Element name="aboutMe" className="element">
      <Card
        sx={{
          display: "grid",
          bgcolor: darkMode.color,
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          justifyContent: "center",
          "@media (max-width:600px)": {
            gridTemplateColumns: "1fr",
          },
          padding: "60px 20px",
          border: "none",
          boxShadow: "none",
          borderRadius: "0",
        }}>
        <CardMedia
          component="img"
          sx={{ height: "auto" }}
          image="/img/profile2.gif"
          alt="Live from space album cover"
        />
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "100%",
          }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: darkMode.text,
              marginTop: "-50px",
            }}>
            ABOUT ME
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "20px",
              textAlign: "justify",
              marginTop: "20px",
              color: darkMode.text,
            }}>
            I'm Vannlithi KIM, a passionate software enthusiast with hands-on
            experience in various programming languages and technologies. My
            focus on Agile methodology extends to active involvement in sprint
            planning, daily stand-ups, and retrospectives within collaborative
            teams. Proficient in code review, I enhance code quality and promote
            best practices. My adept Git version control skills, covering
            branching and conflict resolution, ensure codebase stability.
            Committed to continuous learning, I actively seek opportunities to
            expand my knowledge in this ever-evolving field.
          </Typography>
        </CardContent>
      </Card>
    </Element>
  );
}
