import { Avatar, Container, Grid, Typography, Icon } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CallIcon from "@material-ui/icons/Call";
import DraftsIcon from "@material-ui/icons/Drafts";

const FooterStyles = makeStyles((theme) => ({
  containerRoot: {
    padding: "3rem 24px",
    marginTop: 80,
    width: "100%",
    textAlign: "left",
    background: "#212529",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start"
    }
  },
  innerContainer: {
    justifyContent: "space-around",
    textAlign: "left",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start"
    }
  },
  companyLogoContainer: {
    marginBottom: 0,
    width: "100%",
    flex: "1 1",
    display: "flex",
    alignItems: "center",
    alignTtems: "center",
    transition: "all .5s cubic-bezier(.685,.0473,.346,1)",
    "& h1": {
      marginLeft: 10,
      color: "#fff"
    }
  },
  socialGrid: {
    color: "#fff",
    "& h4": {
      paddingLeft: ".5rem",
      fontWeight: "700",
      marginBottom: 4,
      fontSize: 15,
      color: "#fff"
    },
    "& span": {
      color: "hsla(0,0%,100%,.5)"
    },
    "& p": {
      color: "hsla(0,0%,100%,.5)"
    },
    "& ul a .MuiListItemIcon-root": {
      color: "hsla(0,0%,100%,.5)"
    },
    [theme.breakpoints.down("md")]: {
      "& h4": {
        fontSize: 12
      },
      marginBottom: 20
    }
  },
  listContainer: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    marginTop: 10,
    "& a": {
      fontSize: 23,
      transition: "all .5s cubic-bezier(.645,.045,.355,1)",
      color: "hsla(0,0%,100%,.5)",
      width: "min-content",
      "&:hover": {
        color: "#fff",
        transform: "translate3d(0,-5px,0);"
      }
    }
  },
  mainContainer: {
    width: "100%",
    justifyContent: "space-around",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",

      textAlign: "left",
      "& p": {
        paddingLeft: ".5rem"
      },
      "& ul": {
        paddingLeft: ".5rem",
        justifyContent: "flex-start"
      }
    }
  }
}));
const Footer = () => {
  const classes = FooterStyles();
  return (
    <React.Fragment>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <Container className={classes.containerRoot} maxWidth={false}>
        <Grid container className={classes.innerContainer} spacing="6">
          <Grid item xl={5} style={{ padding: 24 }}>
            <div className={classes.companyLogoContainer}>
              <Avatar src="https://demo.uifort.com/bamburgh-react-admin-dashboard-pro-demo/static/media/react.11a8f47e.svg" />
              <Typography variant={"body1"} component={"h1"}>
                CellarTech
              </Typography>
            </div>
          </Grid>
          <Grid item xl={7} style={{ padding: 24, alignItems: "center" }}>
            <Grid container className={classes.mainContainer}>
              <Grid item md={5} className={classes.socialGrid}>
                <Typography variant="body1" component={"h4"}>
                  CONTACT US
                </Typography>
                <List component="ul" aria-label="main mailbox folders">
                  <ListItem
                    button
                    component={"a"}
                    href={"mailto:cellartech@gmail.com"}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="CellarTech@gmail.com" />
                  </ListItem>
                  <ListItem
                    button
                    component={"a"}
                    href={"tel:+919669555126"}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <ListItemIcon>
                      <CallIcon />
                    </ListItemIcon>
                    <ListItemText primary="+919669555126" />
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={5} className={classes.socialGrid}>
                <Typography variant="body1" component={"h4"}>
                  SOCIAL CONNECTIONS
                </Typography>
                <Typography variant="caption" component={"p"}>
                  Stay up to date with our latest updates and releases!
                </Typography>
                <List
                  className={classes.listContainer}
                  component="ul"
                  aria-label="main mailbox folders"
                >
                  <ListItem
                    button
                    component={"a"}
                    href={"mailto:cellartech@gmail.com"}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <Icon className="fa fa-linkedin-square" component={"a"} />
                  </ListItem>
                  <ListItem
                    button
                    component={"a"}
                    href={"tel:+919669555126"}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <Icon className="fa fa-facebook" component={"a"} />
                  </ListItem>
                  <ListItem
                    button
                    component={"a"}
                    href={"tel:+919669555126"}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    <Icon className="fa fa-github" component={"a"} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
