import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { Container, Grid, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Helmet } from "react-helmet";
import { Team } from "./constants";
const TeamStyles = makeStyles((theme) => ({
  avatar: {
    width: 110,
    border: "4px solid #24242b",
    height: 110,
    boxShadow: "0 5px 10px 0 rgb(0 0 0 / 10%)",
    borderRadius: "100%"
  },
  avatarContainer: {
    marginRight: 24,
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
      marginBottom: 16
    }
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  cardContent: {
    alignItems: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: 8,
    [theme.breakpoints.up("sm")]: {
      padding: 24
    }
  },

  textContainer: {
    height: "100%",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    "& span": {
      fontWeight: "bold"
    }
  },
  listContainer: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    listStyleType: "none",
    marginTop: 10,
    "& li": {
      display: "inline-block",
      cursor: "pointer",
      margin: "0 5px",
      "& a": {
        fontSize: 13,
        transition: "all .5s cubic-bezier(.645,.045,.355,1)",
        color: "hsla(217, 100%, 50%, 1)",
        "&:hover": {
          transform: "translate3d(0,-5px,0);"
        }
      }
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
    [theme.breakpoints.down("md")]: {
      fontSize: 15
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 13
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
  }
}));

const TeamCards = ({ data }) => {
  const classes = TeamStyles();
  return (
    <React.Fragment>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <Card style={{ maxWidth: 330, margin: "0 auto" }}>
        <CardContent className={classes.cardContent}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar className={classes.avatarContainer}>
              <Avatar
                className={classes.avatar}
                src={
                  "https://assets.maccarianagency.com/the-front/photos/people/kate-segelson@2x.jpg"
                }
              />
            </ListItemAvatar>
            <div>
              <ListItemText
                className={classes.textContainer}
                align="center"
                primary={data.title}
                secondary={data.position}
              />

              <ul className={classes.listContainer}>
                <li>
                  <Icon className="fa fa-linkedin-square" component={"a"} />
                </li>

                <li>
                  <Icon className="fa fa-facebook" component={"a"} />
                </li>
                <li>
                  <Icon className="fa fa-github" component={"a"} />
                </li>
              </ul>
            </div>
          </ListItem>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

const TeamSection = ({ id }) => {
  const classes = TeamStyles();
  return (
    <Container id={id} style={{ padding: "50px 20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.specialText}>
            T E A M
          </Typography>
          <Typography
            align="center"
            variant={"h4"}
            className={classes.headtitle}
          >
            Meet our team
          </Typography>
          <Typography
            align="center"
            variant={"h6"}
            textAlign="center"
            className={classes.subtitle}
          >
            We Use best teams to deliver best products
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <TeamCards data={Team[0]} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <TeamCards data={Team[1]} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TeamSection;
