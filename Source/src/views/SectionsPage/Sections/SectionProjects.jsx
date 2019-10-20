import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';

import CardHeader from 'components/Card/CardHeader.jsx';
import Info from 'components/Typography/Info.jsx';

import blogsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx';
import cardBlog4 from 'assets/img/examples/card-blog4.jpg';
import office2 from 'assets/img/office2.jpg';
import pearl from 'assets/img/thepearl.jpg';

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
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={cardBlog4} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
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
												WOQOD Public Portal
											</a>
										</h3>
										<p className={classes.description1}>
											My Role was to deliver Wireframes and Visual screens for the User journeys
											through the web site different sections, considering mobile / tablet views.
											Participate in Front-End development on SharePoint 2013. Tools & Techniques:
											Axure, Adobe Photoshop SharePoint Designer, HTML5, CSS3 and JavaScript.
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Open Site
											</a>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												CBQ - Commercial Bank of Qatar Public Site
											</a>
										</h3>
										<p className={classes.description1}>
											Responsible for Revamping CBQ existing website, enhancing information
											architecture and site navigation to help Marketing team to reach out more
											customers . Tools & Techniques : SharePoint Designer, HTML5, CSS3 and Adobe
											Photoshop.
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Open Site{' '}
											</a>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={office2} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${office2})`,
													opacity: '1'
												}}
											/>
										</CardHeader>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={cardBlog4} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${cardBlog4})`,
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
												WOQOD Public Portal
											</a>
										</h3>
										<p className={classes.description1}>
											My Role was to deliver Wireframes and Visual screens for the User journeys
											through the web site different sections, considering mobile / tablet views.
											Participate in Front-End development on SharePoint 2013. Tools & Techniques:
											Axure, Adobe Photoshop SharePoint Designer, HTML5, CSS3 and JavaScript.
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Open Site
											</a>
										</p>
									</GridItem>
								</GridContainer>
							</Card>
							<Card plain blog className={classes.card}>
								<GridContainer>
									<GridItem xs={12} sm={7} md={7}>
										<h6 className={classes.cardCategory}>ENTERPRISE</h6>
										<h3 className={classes.cardTitle}>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												The Pearl Qatar Public Site
											</a>
										</h3>
										<p className={classes.description1}>
											: Responsible for UX Vision and UI development for the Public web site of
											The Pearl that was based on SharePoint 2013 Utilizing its Content
											management, publishing & search features. Tools & Techniques : SharePoint
											Designer, HTML5, CSS3 and JavaScript, Axure and Adobe Photoshop.
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												Open Site{' '}
											</a>
										</p>
									</GridItem>
									<GridItem xs={12} sm={5} md={5}>
										<CardHeader image plain>
											<a href="#pablito" onClick={(e) => e.preventDefault()}>
												<img src={pearl} alt="..." />
											</a>
											<div
												className={classes.coloredShadow}
												style={{
													backgroundImage: `url(${office2})`,
													opacity: '1'
												}}
											/>
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
