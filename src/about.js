import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutImageContainer: {
    paddingRight: 100,
    "& img": {
      width: "100%",
      maxWidth: "100%"
    },
    [theme.breakpoints.down("md")]: {
      paddingRight: 0,
      textAlign: "center",
      marginBottom: 30,

      "& img": {
        width: "auto",
        maxHeight: 300
      }
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      paddingRight: 30
    }
  },
  aboutHeading: {
    marginBottom: 10,
    lineHeight: 1.4,
    fontSize: 28,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#212529",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    }
  },
  aboutDescription: {
    lineHeight: 1.8,
    marginBottom: 12
  },
  aboutContainer: {
    padding: "80px 0",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      padding: "50px 0"
    }
  },
  specialText: {
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "hsla(217, 100%, 50%, 1)",
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },
  aboutTextContainer: {
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  }
}));

const About = ({ id }) => {
  const classes = useStyles();
  return (
    <Container className={classes.aboutContainer} id={id}>
      <Grid
        container
        style={{ maxWidth: "95%" }}
        alignItems="flex-start"
        justify="space-around"
        spacing={4}
      >
        <Grid className={classes.aboutTextContainer} xs={12} md={5}>
          <Typography variant="body2" className={classes.specialText}>
            A B O U T &nbsp; U S
          </Typography>
          <Typography variant="h1" className={classes.aboutHeading}>
            Digital Agency Providing Various Services
          </Typography>
          <Typography variant="body1" className={classes.aboutDescription}>
            We started as a team of two to gain experience and liked the way we
            can help businesses. Now we are operating as a full Fledged digital
            agency with every type of digital products in our box.
          </Typography>
          <Typography variant="body1" className={classes.aboutDescription}>
            Our main goal is to help you reach your goals by our digital
            products.
          </Typography>
        </Grid>
        <Grid xs={12} md={5}>
          <div className={classes.aboutImageContainer}>
            <img
              src="https://startp-next.envytheme.com/images/agency-image/agency-about-img.jpg"
              alt="about us "
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default About;
