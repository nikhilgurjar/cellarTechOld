import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Zoom from "@material-ui/core/Zoom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { WebPortfolio, GraphicPortfolio, AppPortfolio } from "./constants";
import "./tabs.css";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50
  },

  portfolioCardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "inherit",
    webkitTransition: "all 0.6s ease",
    transition: "all 0.6s ease",
    textAlign: "center",
    color: "#fff",
    zIndex: 5,
    padding: 30,
    "&:hover": {
      bottom: 20
    },
    "&>span": {
      display: "block",
      textAlign: "center",
      marginBottom: 10
    },
    "& h3": {
      lineHeight: 1.8,
      fontSize: 22,
      color: "#fff"
    },
    "& a": {
      backgroundColor: "#fff",
      display: "inline-block",
      padding: "10px 25px",
      borderRadius: 6,
      color: "#ff2c9c"
    },
    [theme.breakpoints.down("sm")]: {
      padding: "20px 5px",
      "& a": {
        marginTop: 10,
        padding: "8px 17px",
        fontSize: 13,
        cursor: "pointer"
      }
    }
  },
  specialText: {
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "hsla(217, 100%, 50%, 1)",
    marginBottom: theme.spacing(1),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },
  headtitle: {
    color: "#212529",
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 10,
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      fontSize: 40
    },
    [theme.breakpoints.down("sm") && theme.breakpoints.down("md")]: {
      fontSize: 32
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    }
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.54)",
    lineHeight: 1.8,
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: 15
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13
    }
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function CenteredTabs({ id }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root} id={id}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.specialText}>
            P O R T F O L I O
          </Typography>
          <Typography
            align="center"
            variant={"h4"}
            className={classes.headtitle}
          >
            What We have Build Till Now
          </Typography>
          <Typography
            align="center"
            variant={"h6"}
            textAlign="center"
            className={classes.subtitle}
          >
            We give 110% to everything
          </Typography>
        </Grid>
      </Grid>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        TabIndicatorProps={{
          style: {
            height: 0,
            zIndex: -1,
            borderRadius: 30,
            backgroundColor: ""
          }
        }}
        style={{ margin: "0 auto" }}
      >
        <Tab label="Web" value={0} />
        <Tab label="App" value={1} />
        <Tab label="Graphic" value={2} />
      </Tabs>
      <Zoom in={value === 0}>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3} justify={"center"}>
            {WebPortfolio.map((item) => (
              <Grid item>
                <Card className={"portfolioCard"}>
                  <img
                    src="https://trynext-react.envytheme.com/_next/static/images/work1-41fac1c2d0da1bbe45a3532857fca15f.jpg"
                    alt="source"
                  />
                  <div className={classes.portfolioCardContent}>
                    <span>{item.tag}</span>
                    <h3>{item.title}</h3>
                    {item.link && (
                      <Button
                        variant={"contained"}
                        component={"a"}
                        href={item.link}
                        target="_blank"
                      >
                        See Live
                      </Button>
                    )}
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Zoom>
      <Zoom in={value === 1}>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3} justify={"center"}>
            {AppPortfolio.map((item) => (
              <Grid item>
                <Card className={"portfolioCard"}>
                  <img
                    src="https://trynext-react.envytheme.com/_next/static/images/work1-41fac1c2d0da1bbe45a3532857fca15f.jpg"
                    alt="source"
                  />
                  <div className={classes.portfolioCardContent}>
                    <span>{item.tag}</span>
                    <h3>{item.title}</h3>
                    {item.link && (
                      <Button
                        variant={"contained"}
                        component={"a"}
                        href={item.link}
                        target="_blank"
                      >
                        See Live
                      </Button>
                    )}
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Zoom>
      <Zoom in={value === 2}>
        <TabPanel value={value} index={2}>
          <Grid container spacing={3} justify={"center"}>
            {GraphicPortfolio.map((item) => (
              <Grid item>
                <Card className={"portfolioCard"}>
                  <img
                    src="https://trynext-react.envytheme.com/_next/static/images/work1-41fac1c2d0da1bbe45a3532857fca15f.jpg"
                    alt="source"
                  />
                  <div className={classes.portfolioCardContent}>
                    <span>{item.tag}</span>
                    <h3>{item.title}</h3>
                    {item.link && (
                      <Button
                        variant={"contained"}
                        component={"a"}
                        href={item.link}
                        target="_blank"
                      >
                        See Live
                      </Button>
                    )}
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Zoom>
    </Container>
  );
}
