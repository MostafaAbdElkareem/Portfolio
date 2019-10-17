import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx";
import city from "assets/img/examples/city.jpg";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

function SectionTeams({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
   
      {/* Team 5 START */}
      <div
        className={`${classes.team} ${classes.section}`}
        style={{ backgroundImage: `url(${city})` }}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={`${classes.mlAuto} ${classes.mrAuto} ${
                classes.textCenter
              }`}
            >
              <h2 className={classes.title}>My Work</h2>
              <h5 className={classes.descriptionWhite}>
                This is the paragraph where you can write more details about
                your team. Keep you user engaged by providing meaningful
                information.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile1Square} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Alec Thompson</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>FOUNDER</h6>
                      </Muted>
                      <p className={classes.description}>
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile6Square} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Kendall Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>
                          GRAPHIC DESIGNER
                        </h6>
                      </Muted>
                      <p className={classes.description}>
                        Don't be scared of the truth because we need to restart
                        the human foundation in truth...
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-dribbble" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile4Square} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>Gina Andrew</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don't be scared of
                        the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-youtube" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-twitter" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-instagram" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
              <Card profile plain className={classes.card5}>
                <GridContainer>
                  <GridItem xs={12} sm={5} md={5}>
                    <CardHeader image plain>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img src={cardProfile2Square} alt="..." />
                      </a>
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={7} md={7}>
                    <CardBody plain>
                      <h4 className={classes.cardTitle}>George West</h4>
                      <Muted>
                        <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                      </Muted>
                      <p className={classes.description}>
                        I love you like Kanye loves Kanye. Don't be scared of
                        the truth.
                      </p>
                    </CardBody>
                    <CardFooter profile plain>
                      <Button justIcon simple>
                        <i className="fab fa-linkedin-in" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-facebook-square" />
                      </Button>
                      <Button justIcon simple>
                        <i className="fab fa-google" />
                      </Button>
                    </CardFooter>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Team 5 END */}
    </div>
  );
}

export default withStyles(teamsStyle)(SectionTeams);
