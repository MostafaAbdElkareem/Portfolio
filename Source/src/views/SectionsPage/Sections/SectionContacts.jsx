import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// @material-ui/icons
import Phone from '@material-ui/icons/Phone';
import email from '@material-ui/icons/Email';
import Check from '@material-ui/icons/Check';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import contactsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx';

import contact from 'assets/img/contact.jpg';

class SectionContacts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: []
		};
	}
	handleToggle(value) {
		const { checked } = this.state;
		const currentIndex = checked.indexOf(value);
		const newChecked = [ ...checked ];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		this.setState({
			checked: newChecked
		});
	}
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div className="cd-section" {...rest}>
				{/* Contact us 1 START */}
				<div
					className={`${classes.contacts} ${classes.section}`}
					style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover' }}
				>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={5} md={5}>
								<h2 className={classes.title}>Get in Touch</h2>
								<h5 className={classes.description}>
									You can get in touch by sending me e-mail or calling me
								</h5>
								<InfoArea
									className={classes.infoArea}
									title="Send me E-mail"
									description={
										<span>
											<a style={{ color: '#fff' }} href="mailto:mostafa.abdelkareem@hotmail.com">
												mostafa.abdelkareem@hotmail.com
											</a>
										</span>
									}
									icon={email}
								/>
								<InfoArea
									className={classes.infoArea}
									title="Give us a ring"
									description={
										<span>
											Mostafa Abdallah
											<br /> Australia : +61 424 385 737
											<br /> Egypt : +201 000 102 059
										</span>
									}
									icon={Phone}
								/>
							</GridItem>
							<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
								<Card className={classes.card1}>
									<form>
										<CardHeader contact color="primary" className={classes.textCenter}>
											<h4 className={classes.cardTitle}>Contact Me</h4>
										</CardHeader>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="First Name"
														id="first"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
												<GridItem xs={12} sm={6} md={6}>
													<CustomInput
														labelText="Last Name"
														id="last"
														formControlProps={{
															fullWidth: true
														}}
													/>
												</GridItem>
											</GridContainer>
											<CustomInput
												labelText="Email Address"
												id="email-address"
												formControlProps={{
													fullWidth: true
												}}
											/>
											<CustomInput
												labelText="Your Message"
												id="message"
												formControlProps={{
													fullWidth: true
												}}
												inputProps={{
													multiline: true,
													rows: 5
												}}
											/>
										</CardBody>
										<CardFooter className={classes.justifyContentBetween}>
											<FormControlLabel
												control={
													<Checkbox
														tabIndex={-1}
														onClick={() => this.handleToggle(1)}
														checkedIcon={<Check className={classes.checkedIcon} />}
														icon={<Check className={classes.uncheckedIcon} />}
														classes={{
															checked: classes.checked,
															root: classes.checkRoot
														}}
													/>
												}
												classes={{ label: classes.label }}
												label="I'm not a robot"
											/>
											<Button color="primary" className={classes.pullRight}>
												Send Message
											</Button>
										</CardFooter>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
				</div>
				{/* Contact us 1 END */}
			</div>
		);
	}
}

export default withStyles(contactsStyle)(SectionContacts);
