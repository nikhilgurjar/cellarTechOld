import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import StarIcon from "@material-ui/icons/Star";
import Slider from "react-slick";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Testimonials } from "./constants";

import "./slider.css";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 20px",
    maxWidth: 400,
    maxHeight: 300,
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto"
    }
    // [theme.breakpoints.up('md')]:{
    //   maxWidth:500
    // }
  },
  cardMain: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  ratingContainer: {
    color: "#f4772e",
    margin: "1rem 0",
    fontSize: "1.15rem",
    "& span": {
      width: "1.25em"
    }
  },
  blackquote: {
    color: "rgba(59,62,102,.5)",
    margin: "1rem 0",
    lineHeight: 1.4
  },
  reviewer: {
    fontWeight: 700,
    fontSize: "1.15rem",
    "& small": {
      color: "rgba(59,62,102,.5)",
      paddingLeft: ".5rem",
      fontSize: "80%",
      fontWeight: 400
    }
  },
  sliderContainer: {
    paddingTop: 60,
    paddingBottom: 60,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 565,
      paddingTop: 50,
      paddingBottom: 50
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
const TestimonialCard = ({ data }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <script
          src="https://kit.fontawesome.com/64d58efce2.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>

      <Card className={classes.root}>
        <CardContent>
          <div className={classes.cardMain}>
            <div>
              <Avatar
                style={{ width: 80, height: 80 }}
                alt="Static photo"
                src="https://demo.uifort.com/bamburgh-react-admin-dashboard-pro-demo/static/media/people-2.09c973c5.jpg"
              />
            </div>
            <div style={{ paddingLeft: "1.5rem" }}>
              <Icon className="fas fa-quote-right" color="primary" />

              <div className={classes.ratingContainer}>
                <Icon className="fas fa-star" />
                <Icon className="fas fa-star" />
                <Icon className="fas fa-star" />
                <Icon className="fas fa-star" />
                <Icon className="fas fa-star" />
              </div>
              <blockquote className={classes.blackquote}>
                {data.description}
              </blockquote>
              <div className={classes.reviewer}>
                {data.title}
                <small>{data.position}</small>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

const Testimonial = ({ id }) => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1624,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    cssEase: "ease-in-out",
    swipeToSlide: true,
    focusOnSelect: false
  };
  return (
    <Container className={classes.sliderContainer} id={id}>
      <Grid container spacing={2} style={{ marginBottom: 20 }}>
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.specialText}>
            T E S T I M O N I A L S
          </Typography>
          <Typography
            align="center"
            variant={"h4"}
            className={classes.headtitle}
          >
            Our Work Speaks Louder Than Words
          </Typography>
          <Typography
            align="center"
            variant={"h6"}
            textAlign="center"
            className={classes.subtitle}
          >
            We always try to Overdeliver Product
          </Typography>
        </Grid>
      </Grid>

      <Slider {...settings}>
        <TestimonialCard data={Testimonials[0]} />
        <TestimonialCard data={Testimonials[1]} />
        <TestimonialCard data={Testimonials[2]} />
      </Slider>
    </Container>
  );
};

export default Testimonial;
