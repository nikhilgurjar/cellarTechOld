import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from '@material-ui/core/Hidden';

const serviceList = [
  {id:1,title:'Web Desing & Development',description:'Developing medium to large scale applications, making businesses to success with our expertise.Technologies using: React, Node, Express, GraphQl, Django, PHP, HTML, CSS',pic:''},
  {id:2,title:'App Desing & Development',description:'We Excel in App development services making businesses easily reachable, also we Provide free consultancy to businesses. Technologies using: React Native and Flutter',pic:''},
  {id:3,title:'Graphic Design',description:'Profession Graphic design services like Logo, Cover Later, Book covers, Packaging designs, brochures, social media graphics and many more.',pic:''},
  {id:4,title:'Digital Marketing',description:'When there is a heavy use of social media, you should always be visible to your customers. Giving social media advertisements to gain more customers.',pic:''},
  {id:5,title:'SEO',description:'Will take your business listing in top 3 by our highly optimized and efficient local strategies. You will get more customers and ultimately more revenues.',pic:''},
  {id:6,title:'Content Writing',description:'We have a awesome team of writers, writing awesome text for clients.Includes: Blogs, Articles, Website Content, Website name and slogans and many more...',pic:''},
]

const useStyles = makeStyles((theme) => ({
  titleClass: {
    fontSize: "1.8rem",
    maxWidth: 330,
    textAlign: "center",
    fontWeight: "550",
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 20
    }
  },
  specialText: {
    fontWeight: 700,
    fontSize: "1.15rem",
    color: "hsla(217, 100%, 50%, 1)",
    marginBottom: theme.spacing(1),
    maxWidth: 330,
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15
    }
  },
  serviceContainer: {
    textAlign: "center",
    padding: "2rem 0"
  },
  root: {
    margin: "1.5rem",
    maxWidth: 400,
    padding: "1rem",
    transition: "all .5s cubic-bezier(.645,.045,.355,1)",
    "&:hover": {
      background: "#212529",
      color: "#fff",
      transform: "translate3d(0,-5px,0);",
      "& h2": {
        color: "#fff"
      },
      "& p": {
        color: "#fff"
      }
    }
  },
  media: {
    height: 100
  },
  gridContainer: {
    "& .MuiGrid-root": {
      display: "flex",
      justifyContent: "center"
    }
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "2rem",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center"
    }
  }
}));
const ServiceCard = ({data}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <img
          src="https://zoko-react.hibootstrap.com/images/services/service2.png"
          alt="service-image"
        />
        <Typography
          gutterBottom
          style={{ fontWeight: "bold",marginTop:10 }}
          variant="h5"
          component="h2"
        >
          {data.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
{data.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const Services = ({id}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.serviceContainer} id={id}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} md={4} className={classes.titleContainer}>
            <Typography variant="body2" className={classes.specialText}>
              S E R V I C E S
            </Typography>
            <Typography variant="h3" className={classes.titleClass}>
              Services We Provide Special For You
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[0]}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[1]}/>
          </Grid>
        </Grid>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[2]}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[3]}/>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[4]}/>
          </Grid>
          <Hidden mdUp>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard data={serviceList[5]}/>
          </Grid>
          </Hidden>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Services;
