import React from 'react';
import axios from 'axios';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import featuresStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx';
import qualifications from 'assets/img/features-5.jpg';

class SectionFeatures extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			qualifications: []
		};
	}
	componentDidMount() {
		axios
			.get('/api/qualifications.json')
			.then((response) => {
				const qualifications = response.data;
				this.setState({ qualifications });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const { classes, ...rest } = this.props;
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
								{this.state.qualifications.map((qualification) => (
									<GridItem xs={12} sm={4} className={classes.gridItem} key={qualification.id}>
										<InfoArea
											vertical
											icon={qualification.icon}
											className={classes.infoArea5}
											title={qualification.name}
											description={<p>{qualification.description}</p>}
											iconColor="info"
										/>
									</GridItem>
								))}
							</GridContainer>
						</div>
					</GridContainer>
				</div>
				{/* Feature 5 END */}
			</div>
		);
	}
}

export default withStyles(featuresStyle)(SectionFeatures);
