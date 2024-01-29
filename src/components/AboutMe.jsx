import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function AboutMe() {
  return (
    <Card
      sx={{
        display: "grid",
        bgcolor: "#FFFFFF",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width:600px)": {
          gridTemplateColumns: "1fr",
        },
      }}>
      <Box>
        <CardMedia
          component="img"
          sx={{ height: "auto" }}
          image="/img/aboutme.gif"
          alt="Live from space album cover"
        />
      </Box>
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
          sx={{ fontWeight: "bold", color: "#0094FF", marginTop: "-50px" }}>
          ABOUT ME
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ fontSize: "20px", textAlign: "center", marginTop: "20px" }}>
          I'm Vannlithi KIM, a passionate software enthusiast with hands-on
          experience in various programming languages and technologies. My focus
          on Agile methodology extends to active involvement in sprint planning,
          daily stand-ups, and retrospectives within collaborative teams.
          Proficient in code review, I enhance code quality and promote best
          practices. My adept Git version control skills, covering branching and
          conflict resolution, ensure codebase stability. Committed to
          continuous learning, I actively seek opportunities to expand my
          knowledge in this ever-evolving field.
        </Typography>
      </CardContent>
    </Card>
  );
}
