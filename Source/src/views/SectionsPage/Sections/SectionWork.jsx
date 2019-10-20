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
import Info from 'components/Typography/Info.jsx';
import Danger from 'components/Typography/Danger.jsx';
import Success from 'components/Typography/Success.jsx';
import TrendingUp from '@material-ui/icons/TrendingUp';

import blog1 from 'assets/img/examples/blog1.jpg';
import blog5 from 'assets/img/examples/blog5.jpg';
import blog6 from 'assets/img/examples/blog6.jpg';

function SectionTeams({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest}>
			{/* Team 5 START */}
			<div className={`${classes.section}`} style={{ background: '#bbdade' }}>
				<div className={classes.container} style={{ maxWidth: '80%' }}>
					<GridContainer>
						<GridItem
							xs={12}
							sm={8}
							md={8}
							className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
						>
							<h2 className={classes.title}>My Work</h2>
							<h5 className={classes.descriptionWhite}>
								This is the paragraph where you can write more details about your team. Keep you user
								engaged by providing meaningful information.
							</h5>
						</GridItem>
					</GridContainer>
					<GridContainer>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<CardHeader image plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={blog5} alt="..." />
										<div className={classes.cardTitleAbsolute}>This Summer Will be Awesome</div>
									</a>
									<div
										className={classes.coloredShadow}
										style={{
											backgroundImage: `url(${blog5})`,
											opacity: '1'
										}}
									/>
								</CardHeader>
								<CardBody plain>
									<Info>
										<h6 className={classes.cardCategory}>FASHION</h6>
									</Info>
									<div className={classes.cardDescription}>
										Don't be scared of the truth because we need to restart the human foundation in
										truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
										the back is...
									</div>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<CardHeader image plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={blog1} alt="..." />
									</a>
									<div
										className={classes.coloredShadow}
										style={{
											backgroundImage: `url(${blog1})`,
											opacity: '1'
										}}
									/>
								</CardHeader>
								<CardBody plain>
									<Success>
										<h6 className={classes.cardCategory}>Legal</h6>
									</Success>
									<h4 className={classes.cardTitle}>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											5 Common Legal Mistakes That Can Trip-Up Your Startup
										</a>
									</h4>
									<p className={classes.cardDescription}>
										Don't be scared of the truth because we need to restart the human foundation in
										truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
										the back is...
									</p>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<CardHeader image plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={blog6} alt="..." />
									</a>
									<div
										className={classes.coloredShadow}
										style={{
											backgroundImage: `url(${blog6})`,
											opacity: '1'
										}}
									/>
								</CardHeader>
								<CardBody plain>
									<Danger>
										<h6 className={classes.cardCategory}>
											<TrendingUp /> TRENDING
										</h6>
									</Danger>
									<h4 className={classes.cardTitle}>
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											To Grow Your Business Start Focusing on Your Employees
										</a>
									</h4>
								</CardBody>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={4} lg={3}>
							<Card blog plain>
								<CardHeader image plain>
									<a href="#pablo" onClick={(e) => e.preventDefault()}>
										<img src={blog5} alt="..." />
										<div className={classes.cardTitleAbsolute}>This Summer Will be Awesome</div>
									</a>
									<div
										className={classes.coloredShadow}
										style={{
											backgroundImage: `url(${blog5})`,
											opacity: '1'
										}}
									/>
								</CardHeader>
								<CardBody plain>
									<Info>
										<h6 className={classes.cardCategory}>FASHION</h6>
									</Info>
									<div className={classes.cardDescription}>
										Don't be scared of the truth because we need to restart the human foundation in
										truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but
										the back is...
									</div>
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
