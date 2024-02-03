/* eslint-disable react/jsx-no-comment-textnodes */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Element } from "react-scroll";
import { useDarkMode } from "../DarkModeContext";

export default function Portfolio() {
  const { darkMode } = useDarkMode();
  return (
    <Element name="project">
      <div
        style={{
          backgroundColor: darkMode.background,
          border: "none",
          boxShadow: "none",

          paddingBottom: "30px",
        }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: darkMode.text,
            textAlign: "center",
            marginBottom: "50px",
            paddingTop: "50px",
          }}>
          PORTFOLIO
        </Typography>

        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            bgcolor: darkMode.color,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginBottom: "40px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.background,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #ReactJS
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.background,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #MongoDB
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.background,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Express
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.background,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Node
                </Button>
              </CardActions>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: darkMode.text,
                }}>
                Authentication
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                  color: darkMode.text,
                }}>
                The Membership MERN project is a robust web application designed
                for efficient management of membership-related activities. Built
                on the MERN stack—MongoDB for scalable data storage, Express.js
                for a flexible backend, React.js for dynamic UIs, and Node.js
                for server-side operations—it seamlessly integrates these
                technologies. Key features include full-stack capabilities,
                ensuring seamless communication between client and server. Ideal
                for clubs and organizations, the Membership MERN project
                streamlines administrative tasks, enhancing member engagement
                with its modern, scalable, and user-friendly membership
                management system.
              </Typography>
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
                    marginRight: "0",
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://github.com/vannlithi168/MERN-Authentication"
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a" // Use anchor tag as the component
                  href="" // Replace with the actual URL
                  target="_blank" // Open in a new tab
                  rel="noopener noreferrer">
                  Demo
                </Button>
              </CardActions>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", sm: "50%" }, height: "auto" }}
            image="/img/membership.png"
            alt="Membership Project"
          />
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            bgcolor: darkMode.color,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginBottom: "40px",
          }}>
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", sm: "50%" }, height: "auto" }}
            image="/img/weather.jpg"
            alt="Membership Project"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #ReactJS
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #MUI
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #OpenMapApi
                </Button>
              </CardActions>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: darkMode.text,
                }}>
                Weather Web App
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                  color: darkMode.text,
                }}>
                <ul>
                  <li>
                    <strong>Current Weather:</strong> Obtain real-time weather
                    information for a specific city.
                  </li>
                  <li>
                    <strong>Weekly Forecast:</strong> Plan ahead with a 7-day
                    weather forecast.
                  </li>
                  <li>
                    <strong>Hourly Forecast:</strong> View a detailed 12-hour
                    weather forecast.
                  </li>
                  <li>
                    <strong>Location Search:</strong> Easily search for weather
                    information by city name.
                  </li>
                  <li>
                    <strong>Geolocation:</strong> Get weather details for your
                    current location.
                  </li>
                </ul>
              </Typography>

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
                    marginRight: "0",
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://github.com/vannlithi168/Weather-Project"
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://weather-project-swart.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            bgcolor: darkMode.color,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginBottom: "40px",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #ReactJS
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Firebase
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Javascript
                </Button>
              </CardActions>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: darkMode.text,
                }}>
                Todo List Web
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                  color: darkMode.text,
                }}>
                The TodoList React library streamlines task management with
                essential CRUD functions. Adding tasks dynamically updates the
                list, while reading tasks provides easy access to the current
                state. Updating tasks ensures a fluid user experience, and
                deleting tasks is seamlessly handled, promptly reflecting
                changes. Integrating this library into a React project enables
                efficient and responsive task management, simplifying the
                development process.
              </Typography>
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
                    marginRight: "0",
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://github.com/vannlithi168/Todo-List"
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://todo-list-one-beige-45.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo
                </Button>
              </CardActions>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", sm: "50%" }, height: "auto" }}
            image="/img/todolist.png"
            alt="Membership Project"
          />
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            bgcolor: darkMode.color,
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "10px",
            marginBottom: "40px",
          }}>
          <CardMedia
            component="img"
            sx={{ width: { xs: "100%", sm: "50%" }, height: "auto" }}
            image="/img/starbuck1.png"
            alt="Membership Project"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: "1",
            }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <CardActions
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #ReactJS
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Firebase
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    bgcolor: darkMode.color,
                    color: darkMode.text,
                    boxShadow: "none",
                    border: `1px solid ${darkMode.text}`,
                    width: "100%",
                    fontSize: "10px",
                    marginBottom: "10px",
                  }}>
                  #Javascript
                </Button>
              </CardActions>
              <Typography
                component="div"
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: darkMode.text,
                }}>
                Starbuck Clone Website
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  marginLeft: "10px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  width: "100%",
                  color: darkMode.text,
                }}>
                Clone Website from Starbucks in Canada, which provide specific
                information about their menu, products, promotions, and more.
                Our Starbucks Clone project is a website created using React and
                other related technologies, with the aim of replicating the
                functionality and design of the original Starbucks website. Our
                team has worked hard to ensure that this clone is not only
                visually similar, but also responsive and user-friendly. We have
                used external libraries and frameworks such as React Dom, React
                Router Dom, Bootstrap, and Sass to make this project possible.
              </Typography>
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
                    marginRight: "0",
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://github.com/vannlithi168/Starbuck-Clone"
                  target="_blank"
                  rel="noopener noreferrer">
                  Code
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontWeight: 700,
                    width: "100%",
                  }}
                  component="a"
                  href="https://starbuck-clone-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  Demo
                </Button>
              </CardActions>
            </CardContent>
          </Box>
        </Card>
      </div>
    </Element>
  );
}
