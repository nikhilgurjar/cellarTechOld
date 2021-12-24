import { Container, Grid, Button } from "@material-ui/core";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./styles.css";
const LandingPage = ({ id }) => {
  return (
    <div class="hero-banner it-banner overly hero-bg4" id={id}>
      <div class="d-table">
        <div class="d-table-cell">
          <Container>
            <Grid container alignItems="center">
              <Grid item md={8} xs={12}>
                <div class="main-banner-content">
                  <h1>
                    We craft beautiful <span>websites</span> and{" "}
                    <span>digital products</span>
                  </h1>
                  <p>
                    We design, develop and launch websites and products for
                    startups, companies and ourselves.
                  </p>
                  <Grid container className="gridbuttonContainer">
                    <Grid item xs={5}>
                      <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={"about"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        About Us
                      </Button>
                    </Grid>
                    <Grid item xs={5} style={{ marginLeft: 20 }}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        component={Link}
                        to={"contact"}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Contact Us
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div class="animate-banner-image">
                  <img
                    src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                    alt="Animate image"
                  />
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
