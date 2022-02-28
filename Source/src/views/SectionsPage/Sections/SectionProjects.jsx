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
//import Button from 'components/CustomButtons/Button.jsx';
import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';
import woqod from 'assets/img/woqod.jpg';
import acecqa from 'assets/img/nqaits.jpg';
import clg from 'assets/img/clg.png';
import cbq from 'assets/img/cbq.jpg';
import pearl from 'assets/img/thepearl.jpg';
import foodklore from 'assets/img/foodklore.jpg';
import xportal from 'assets/img/xportal.JPG';

function SectionBlogs({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest}>
			{/* Blogs 1 START */}
			<div className={classes.blog}>
				<div className={classes.container} style={{ maxWidth: '80%' }}>
					<GridContainer>
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							<h2 className={classes.title}>Key Projects</h2>

							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										<h3 className={classes.cardTitle}>
											<a
												href="https://www.behance.net/gallery/137670041/xPortal-Case-Study-Wireframes-Docs-Sample-designs"
												target="new"
											>
												XPORTAL
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												Leading UX/UI team to develop SharePoint 2013 reusable Portal that can
												be used as a starter project for responsive web sites to help reduce the
												development effort and ensure delivering high-quality sites.
											</strong>
											<br />xPortal came fully loaded with most commonly used modules, all using
											codeless web part, utilizing SharePoint new features and pure HTML5, Css3
											and JavaScript. Participating in Front-End development on SharePoint 2013.
											Keywords:
											<br />
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013, Modern Webparts</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">Wireframes, Prototype</Badge>
											<Badge color="primary">HTML5</Badge>
											<Badge color="primary">SASS & CSS</Badge>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a
												href="https://www.behance.net/gallery/137670041/xPortal-Case-Study-Wireframes-Docs-Sample-designs"
												target="new"
											>
												<img src={xportal} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a
												href="https://www.behance.net/gallery/130161571/ACECQA-NQA-ITS-Portal-revamp"
												target="new"
											>
												<img src={acecqa} alt="..." />
											</a>
										</CardHeader>
									</GridItem>
									<GridItem xs={12} sm={7} md={7}>
										<Info>
											<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										</Info>
										<h3 className={classes.cardTitle}>
											<a
												href="https://public.nqaits.acecqa.gov.au/Pages/Landing.aspx"
												target="new"
											>
												ACECQA - NQA ITS
											</a>
										</h3>
										<p className={classes.description1}>
											<strong>
												The NQA IT System is an online tool that offers providers a secure and
												direct way of communicating with regulatory authorities aiming to reduce
												paperwork and duplication.
											</strong>
											I was responsible for revamping the current National Quality Agenda
											application which based on on-prem SharePoint 2013 Design and implement
											modern interface and enable device responsiveness to the application to
											allow more users to use the application easily from different devices in
											addition to enable user personalization and preferences to the application
											look and feel.
											<br />
											<br />
											Utilise SharePoint Out the box features like document management and search
											to enrich the portal functionality Build SharePoint modern web parts
											[including building Reusable Components] using ReactJS.
											<br />
											<br />
											Customise Power portal using Liquid language, HTML5, JavaScript and CSS to
											build nice looking and interactive portal and also enhance Power BI reports
											and integrate it with the portal.
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013, Modern Webparts</Badge>
											<Badge color="primary">Javascript, ReactJS, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">Wireframes, Prototype</Badge>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
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
											build the website IA, Visuals and site navigation on Wordpress.
											<br />
											<br /> <strong>Keywords: </strong>
											<Badge color="primary">WordPress</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">HTML5</Badge>
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
											<br />Delivering Visual designs for the web site different sections,
											considering mobile/tablet views. Participating in Front-End development on
											SharePoint 2013.
											<br />
											Participating in Front-End development on SharePoint 2013. Keywords:
											<br />
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013</Badge>
											<Badge color="primary">CSWP, Dispaly Templates</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">Wireframes, Prototype</Badge>
											<Badge color="primary">HTML5</Badge>
											<Badge color="primary">SASS & CSS</Badge>
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
											<br />Delivering interactive HTML Prototype for “The Pearl” public site, and
											participating in Front-End development on SharePoint 2013.
											<br />
											<br />
											<strong>Keywords : </strong>
											<Badge color="primary">Sharepoint 2013</Badge>
											<Badge color="primary">CSWP, Display Template</Badge>
											<Badge color="primary">Javascript, JQuery</Badge>
											<Badge color="primary">Photoshop</Badge>
											<Badge color="primary">HTML5</Badge>
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
											<br />I worked collaboratively with the product owner and development team
											to ensure that they have the required vision, direction and UI artefacts to
											complete sprint priorities. Owned UX Vision and strategy, created visual
											screens and interactive prototypes of the platform.
											<br />
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
											<br />
											Leading a revamp of CBQ existing website, enhancing information architecture
											and site navigation to help marketing team to reach out more customers.
											Applying the new design over SharePoint 2010 and training the site editors
											on how to use the publishing and content management features of SharePoint.
											<br />
											<br />
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
						<GridItem xs={12} sm={10} md={10} className={`${classes.mlAuto} ${classes.mrAuto}`}>
							{/* 	<Button
								color="danger"
								href="https://drive.google.com/drive/folders/1gE1-c8skhiPKn87MZbtypulZw03H_Ncx?usp=sharing"
								target="new"
							>
								<i className="fa fa-file-powerpoint" /> &nbsp; More Presentations and Case studies
							</Button>
							<Button color="behance" href="https://www.behance.net/desha-portfolio" target="new">
								<i className="fab fa-behance" /> More Projects on Behance
							</Button> */}
						</GridItem>
					</GridContainer>
				</div>
			</div>
			{/* Blogs 1 END */}
		</div>
	);
}

export default withStyles(blogsStyle)(SectionBlogs);
