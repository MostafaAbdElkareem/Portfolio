import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import Badge from 'components/Badge/Badge.jsx';

import CardHeader from 'components/Card/CardHeader.jsx';
import Info from 'components/Typography/Info.jsx';

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';
import woqod from 'assets/img/woqod.jpg';
import clg from 'assets/img/clg.png';
import cbq from 'assets/img/cbq.jpg';
import pearl from 'assets/img/thepearl.jpg';
import foodklore from 'assets/img/foodklore.jpg';

function SectionBlogs({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 1 START */}
			<div className={classes.blog}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title}>Key Projects</h2>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>FREELANCE</h6>
										<h3 className={classes.cardTitle}>
											<a href="https://www.foodklore.com.au/" target="new">
												FOODKLORE
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												FoodKlore is an online desserts shop offering pickup / delivery services
												only.
											</strong>
											<br />
											Responsible for creating the logo and branding identity & Color Theme ,
											build the website IA and site navigation.
											<br /> <strong>Keywords: </strong>
											<Badge color="primary">WordPress</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">HTML</Badge>
											<Badge color="primary">CSS</Badge>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="https://www.foodklore.com.au/" target="new">
												<img src={foodklore} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="http://www.woqod.com/" target="new">
												<img src={woqod} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="http://www.woqod.com/" target="new">
												WOQOD Public Portal
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												"WOQOD is Qatari oil and gas company focused on the distribution and
												sale of refined petroleum products supplied by Qatar Petroleum."
											</strong>
											<br />My Role in the project was to deliver Wireframes and Visual screens
											for the User journeys through the web site different sections, considering
											mobile / tablet views.
											<br />
											Participated in Front-End development on SharePoint 2013. Keywords:
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013</Badge>
											<Badge color="primary">CSWP, Dispaly Templates</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">Wireframes, Prototype</Badge>
											<Badge color="primary">HTML</Badge>
											<Badge color="primary">CSS</Badge>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										<h3 className={classes.cardTitle}>
											<a href="https://www.thepearlqatar.com/" target="new">
												The Pearl Qatar Public Site
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												The Pearl-Qatar is an iconic mixed-use urban development project
												distributed across world-class architecturally distinct precincts
											</strong>
											<br />Responsible for UX Vision and UI development for the Public web site
											of The Pearl that was based on SharePoint 2013 Utilizing its Content
											management, publishing & search features.
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013</Badge>
											<Badge color="primary">CSWP, Display Template</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">HTML</Badge>
											<Badge color="primary">CSS</Badge>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="https://www.thepearlqatar.com/" target="new">
												<img src={pearl} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="https://itworx.education/clg/" target="new">
												<img src={clg} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${clg})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												CLG - Connected Learning Gateway
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												the Connected Learning Gateway (CLG) is our most comprehensive web-based
												social e-learning platform. It improves the teaching process for
												instructors, makes learning fun and insightful for learners, and
												facilitates communication and collaboration between administrators,
												instructors, and parents.
											</strong>
											<br />My Role was to deliver Wireframes and Visual screens for diffrent
											platform users (Student, Teachers & Parents). Participate in Front-End
											development on SharePoint 2010
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">Wireframes, Prototype</Badge>
											<Badge color="primary">Sharepoint 2010</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">HTML</Badge>
											<Badge color="primary">CSS</Badge>
										</p>
									</GridItem>
								</GridContainer>
							</Card>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										<h3 className={classes.cardTitle}>
											<a href="http://www.cbq.qa/" target="new">
												CBQ - Commercial Bank of Qatar Public Site
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												Commercial Bank plays a vital role in Qatar’s economic development
												through offering a range of personal, business, government,
												international and investment services.
											</strong>
											Responsible for Revamping CBQ existing website, enhancing information
											architecture and site navigation to help Marketing team to reach out more
											customers .<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2010</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">HTML</Badge>
											<Badge color="primary">CSS</Badge>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="http://www.cbq.qa/" target="new">
												<img src={cbq} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Blogs 1 END */}
		</div>
	);
}

export default withStyles(blogsStyle)(SectionBlogs);
