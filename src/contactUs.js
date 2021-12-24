import { Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { animateScroll as scroll } from "react-scroll";
import { useTheme } from "@material-ui/core/styles";

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
        maxHeight: 200
      }
    },
    [theme.breakpoints.up("md") && theme.breakpoints.down("lg")]: {
      paddingRight: 30
    }
  },
  aboutHeading: {
    margiBottom: 0,
    lineHeight: 1.4,
    fontSize: 28,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    }
  },
  aboutDescription: {
    lineHeight: 1.8,
    marginBottom: 12
  },
  headtitle: {
    color: "#fff",
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
    color: "#fff",
    lineHeight: 1.8,
    fontSize: 16,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      fontSize: 15
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13
    }
  },
  ctoButton: {
    minWidth: 200,
    padding: 10,
    textTransform: "initial",
    "&:first-child": {
      marginRight: 20,
      "&:hover": {
        backgroundColor: "#fff",
        color: theme.palette.primary.main,
        border: "1px solid",
        borderColor: theme.palette.primary.main
      }
    },
    "&:last-child": {
      backgroundColor: "transparent",
      border: "1px solid",
      borderColor: "#fff",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
        color: theme.palette.primary.main,
        border: "1px solid",
        borderColor: theme.palette.primary.main
      }
    },
    [theme.breakpoints.down("xs")]: {
      "&:first-child": {
        marginBottom: 20,
        marginRight: 0
      }
    }
  },
  buttonContainer: {
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      "& button": {
        minWidth: 270
      },
      "& a": {
        minWidth: 270
      }
    }
  }
}));

const ContactUS = (props) => {
  console.log(props);
  const theme = useTheme();
  console.log(theme.breakpoints.down("xs"), "----s--s--s-s--");
  const classes = useStyles();
  const scrollToContactUs = () => {
    scroll.scrollToBottom();
  };
  return (
    <Container
      style={{
        backgroundColor: "#212529",
        padding: "80px 20px",
        minHeight: 250
      }}
      maxWidth={false}
      id={props.id}
    >
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item xs={12}>
          <Typography
            className={classes.headtitle}
            align="center"
            variant={"h4"}
          >
            Need Any Help? <small>or</small> Have Some Query!
          </Typography>
          <Typography
            align="center"
            variant={"caption"}
            component={"p"}
            textAlign="center"
            className={classes.subtitle}
          >
            Anything On your Mind. We’ll Be Glad To Assist You!
          </Typography>
        </Grid>
        <Grid container className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.ctoButton}
            component={"a"}
            target={"_blank"}
            href={"https://forms.gle/GK1Z9ZNTQYdkzu8k9"}
          >
            Discuss Project
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.ctoButton}
            onClick={scrollToContactUs}
          >
            Get In Touch
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
export default ContactUS;
