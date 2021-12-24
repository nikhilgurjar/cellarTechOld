import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Hidden
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";
import SideDrawer from "./sideDrawer";
import "./slider.css";
const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    backgroundColor: "transparent",
    maxHeight: 40,
    alignItems: "center",
    "& .active": {
      height: "100%",
      borderRadius: 20
    },
    "& .MuiButtonBase-root": {
      height: "100%"
    },
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  },
  AppBar: {
    background: "transparent",
    color: "#fff"
  }
});

const navLinks = [
  { title: `Home`, path: "home" },
  { title: `AboutUs`, path: `about` },
  { title: `Services`, path: `services` },
  { title: `Contact`, path: `contact` },
  { title: `Portolio`, path: `portfolio` },
  { title: `Testimonials`, path: `testimonial` },
  { title: `Team`, path: `team` }
];

const Header = () => {
  const navbarRef = useRef();
  const classes = useStyles();
  window.onscroll = function () {
    const landingHeight = document.getElementsByClassName("hero-banner")[0]
      .scrollHeight;
    console.log(landingHeight);
    if (
      document.body.scrollTop >= landingHeight / 2 ||
      document.documentElement.scrollTop >= landingHeight / 2
    ) {
      console.log(navbarRef);
      navbarRef.current.classList.add("nav-colored");
      // navbarRef.current.classList.add("MuiPaper-elevation4");
    } else {
      // navbarRef.current.classList.remove("MuiPaper-elevation4");
      navbarRef.current.classList.remove("nav-colored");
    }
  };
  return (
    <AppBar
      position="fixed"
      className={classes.AppBar}
      ref={navbarRef}
      elevation={0}
    >
      <Toolbar style={{ backgroundColor: "transparent" }}>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <Link
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
