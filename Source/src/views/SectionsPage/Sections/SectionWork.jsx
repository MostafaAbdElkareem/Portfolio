import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import teamsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.jsx';

import Badge from 'components/Badge/Badge.jsx';

/* images */

import rs from 'assets/img/rs.jpg';
import prot from 'assets/img/prototype.jpg';
import dsh from 'assets/img/dashboard.jpg';
import bnr from 'assets/img/banner.jpg';
import gnx from 'assets/img/genx.jpg';
import qnts from 'assets/img/qnts.jpg';
import uig from 'assets/img/uig.jpg';
import mint from 'assets/img/mint.jpg';
import cert from 'assets/img/cert.jpg';
import ws from 'assets/img/website.jpg';
import fk from 'assets/img/fk.jpg';
import xp from 'assets/img/xportal.JPG';
import acecqa from 'assets/img/nqaits.jpg';
//import udmeyUX from 'assets/img/ux_certificate.jpg';

function SectionTeams({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest}>
			{/* Team 5 START */}
			<div className={`${classes.section}`} style={{ background: '#bbdade' }}>
				<div className={classes.container} style={{ maxWidth: '80%' }}>
					<GridContainer>
						<GridItem xs={12} sm={8} md={8}>
							<h2 className={classes.title}>Sample Work</h2>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<div
									className="LI-profile-badge"
									data-version="v1"
									data-size="large"
									data-locale="en_US"
									data-type="vertical"
									data-theme="dark"
									data-vanity="mostafaabdelkareem"
								>
									<a
										className="LI-simple-link"
										href="https://au.linkedin.com/in/mostafaabdelkareem?trk=profile-badge"
									>
										.
									</a>
								</div>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a href="https://www.behance.net/gallery/60064313/Achievements" target="new">
											Linkdin Profile
										</a>
									</h4>
									<div>
										<Badge color="info">Linkedin</Badge>
										<Badge color="success">Portfolio</Badge>
									</div>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/60064313/Achievements" target="new">
										<img src={cert} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a href="https://www.behance.net/gallery/60064313/Achievements" target="new">
											Profissional Certificates
										</a>
									</h4>

									<div className={classes.cardDescription}>
										<Badge color="warning">Certificates</Badge>
									</div>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/79273549/Ready-Stack" target="new">
										<img src={rs} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a href="https://www.behance.net/gallery/79273549/Ready-Stack" target="new">
											Ready Stack Logo Trial
										</a>
									</h4>
								</CardBody>
							</Card>
							{/* 	<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/60063195/Layer-2-Sub-Entities-Logos"
										target="new"
									>
										<img src={lyr2} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/60063195/Layer-2-Sub-Entities-Logos"
											target="new"
										>
											Layer 2
										</a>
									</h4>
								</CardBody>
							</Card> */}
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							{/* <Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/88025719/Udemy-UX-Certificate"
										target="new"
									>
										<img src={udmeyUX} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/88025719/Udemy-UX-Certificate"
											target="new"
										>
											Udemy UX Certificate
										</a>
									</h4>
								</CardBody>
							</Card> */}
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/79033017/Portfolio-Optimizer" target="new">
										<img src={dsh} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/79033017/Portfolio-Optimizer"
											target="new"
										>
											Portfolio Optimizer Dashboard
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/76240971/Foodklore" target="new">
										<img src={fk} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a href="https://www.behance.net/gallery/76240971/Foodklore" target="new">
											FookKlore Logo Trials
										</a>
									</h4>
								</CardBody>
							</Card>

							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/79033347/Seeds-Portal-Application"
										target="new"
									>
										<img src={prot} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/79033347/Seeds-Portal-Application"
											target="new"
										>
											Seeds Portal Prototype
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/60062985/UIG-Logo" target="new">
										<img src={uig} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a href="https://www.behance.net/gallery/60062985/UIG-Logo" target="new">
											United International Group
										</a>
									</h4>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/130161571/ACECQA-NQA-ITS-Portal-revamp"
										target="new"
									>
										<img src={acecqa} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/130161571/ACECQA-NQA-ITS-Portal-revamp"
											target="new"
										>
											ACECQA NQA ITS Portal revamp
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/60063363/Dashboard-Concept" target="new">
										<img src={mint} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/60063363/Dashboard-Concept"
											target="new"
										>
											Maintelleigance Dashboard Concept
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/79033347/Seeds-Portal-Application"
										target="new"
									>
										<img src={bnr} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/79033347/Seeds-Portal-Application"
											target="new"
										>
											Agile Logo
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/52058851/Syngenta-Genex-Intranet"
										target="new"
									>
										<img src={gnx} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/52058851/Syngenta-Genex-Intranet"
											target="new"
										>
											Syngenta Genex Intranet Concept
										</a>
									</h4>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							{/* 	<Card blog plain>
								<CardHeader image plain>
									<a href="https://www.behance.net/gallery/79032611/Cole-Engineering" target="new">
										<img src={intranet} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/79032611/Cole-Engineering"
											target="new"
										>
											Sharepoint Online Intranet (O365)
										</a>
									</h4>
									<div>
										<Badge color="primary">Photoshop</Badge>
										<Badge color="success">Wireframes, Prototype</Badge>
										<Badge color="danger">HTML, CSS, Javascript</Badge>
									</div>
								</CardBody>
							</Card>
						 */}{' '}
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/137670041/xPortal-Case-Study-Wireframes-Docs-Sample-designs"
										target="new"
									>
										<img src={xp} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/60064413/Kuwait-Council-of-Ministers"
											target="new"
										>
											xPortal Case Study
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/60064413/Kuwait-Council-of-Ministers"
										target="new"
									>
										<img src={ws} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/60064413/Kuwait-Council-of-Ministers"
											target="new"
										>
											Kuwait Council of Ministers Concept
										</a>
									</h4>
								</CardBody>
							</Card>
							<Card blog plain>
								<CardHeader image plain>
									<a
										href="https://www.behance.net/gallery/52059007/Quantas-Concept-Design"
										target="new"
									>
										<img src={qnts} alt="..." />
									</a>
								</CardHeader>
								<CardBody plain>
									<h4 className={classes.cardTitle}>
										<a
											href="https://www.behance.net/gallery/52059007/Quantas-Concept-Design"
											target="new"
										>
											Quantas Concept Design
										</a>
									</h4>
								</CardBody>
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
