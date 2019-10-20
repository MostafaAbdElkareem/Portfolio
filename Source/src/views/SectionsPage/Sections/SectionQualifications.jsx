import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Code from '@material-ui/icons/Code';
import FormatPaint from '@material-ui/icons/FormatColorFill';
import Dashboard from '@material-ui/icons/Dashboard';
import Team from '@material-ui/icons/SupervisorAccount';
import Accessability from '@material-ui/icons/Accessible';
import Desktop from '@material-ui/icons/DesktopWindows'; // core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx';
import qualifications from 'assets/img/features-5.jpg';

function SectionFeatures({ ...props }) {
	const { classes, ...rest } = props;
	return (
		<div className="cd-section" {...rest}>
			{/* Feature 5 START */}
			<div
				className={classes.features5}
				style={{ backgroundSize: 'cover', backgroundImage: `url(${qualifications})` }}
			>
				<GridContainer>
					<GridItem
						xs={12}
						sm={8}
						md={8}
						className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
					>
						<h2 className={classes.title}>My Qualifications & Area of Expertise </h2>
					</GridItem>
					<div className={classes.container}>
						<GridContainer className={classes.gridContainer}>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Dashboard}
									title="UX"
									description={<p>Creating Wireframes & Prototyping, User reaserch</p>}
									iconColor="info"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={FormatPaint}
									title="Visual Design"
									description={<p>Visual Design using Adobe Photoshop and Illustrator.</p>}
									iconColor="danger"
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Code}
									title="Front-End Development"
									description={
										<p>
											Considerable UI and front-end knowledge of using HTML5, CSS and JavaScript
											that assured providing high standard web applications.
										</p>
									}
									iconColor="primary"
								/>
							</GridItem>
						</GridContainer>
						<GridContainer className={classes.gridContainer}>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Desktop}
									title="Sharepoint Branding"
									description={
										<p>
											Over 6 Years excperience working on Branding and UI development sharepoint
											Portals/Intranet & Public Web sites{' '}
										</p>
									}
								/>
							</GridItem>

							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Team}
									title="Team Play"
									description={
										<p>Highly collaborative, People Oriented and Supportive Team Player.</p>
									}
								/>
							</GridItem>
							<GridItem xs={12} sm={4} className={classes.gridItem}>
								<InfoArea
									vertical
									className={classes.infoArea5}
									icon={Accessability}
									title="Accessability & Performance Optimization "
									description={
										<p>Understanding and Applying accessability guidelines and best practices</p>
									}
								/>
							</GridItem>
						</GridContainer>
					</div>
				</GridContainer>
			</div>
			{/* Feature 5 END */}
		</div>
	);
}

export default withStyles(featuresStyle)(SectionFeatures);
