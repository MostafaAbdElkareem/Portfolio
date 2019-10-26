import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
// @material-ui/icons
import Phone from '@material-ui/icons/Phone';
import email from '@material-ui/icons/Email';
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
		this.state = { feedback: '', name: '', email: '', submitted: false, message: '...', color: 'primary' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		switch (event.target.id) {
			case 'feedback':
				this.setState({ feedback: event.target.value });
				break;
			case 'email':
				this.setState({ email: event.target.value });
				break;
			case 'fullName':
				this.setState({ name: event.target.value });
				break;
			default:
		}
	}

	handleSubmit(event) {
		this.setState({ submitted: true }, () => {
			setTimeout(
				() =>
					this.setState({
						submitted: false,
						feedback: '',
						name: '',
						email: '',
						message: '',
						color: 'primary'
					}),
				5000
			);
		});
		const templateId = 'template_0T1LMh9D';
		this.sendFeedback(templateId, {
			to_name: 'Desha',
			message_html: this.state.feedback,
			from_name: this.state.name,
			reply_to: this.state.email
		});
	}

	sendFeedback(templateId, variables) {
		window.emailjs
			.send('gmail', templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
				this.setState({ message: 'Email successfully sent', color: 'success' });
			})
			// Handle errors here however you like, or use a React error boundary
			.catch((err) => this.setState({ message: "Email hasn't been sent ", color: 'danger' }));
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
									title="Give me a ring"
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
									<ValidatorForm ref="form" onSubmit={this.handleSubmit}>
										<CardHeader contact color="primary" className={classes.textCenter}>
											<h4 className={classes.cardTitle}>Contact Me</h4>
										</CardHeader>
										<CardBody>
											<GridContainer>
												<GridItem xs={12} sm={12} md={12}>
													<TextValidator
														label="Full Name"
														id="fullName"
														style={{ width: '100%' }}
														onChange={this.handleChange}
														name="fullName"
														value={this.state.name}
														validators={[ 'required' ]}
														errorMessages={[ 'this field is required' ]}
													/>
												</GridItem>

												<GridItem xs={12} sm={12} md={12}>
													<TextValidator
														label="Email"
														style={{ width: '100%' }}
														id="email"
														onChange={this.handleChange}
														name="email"
														value={this.state.email}
														validators={[ 'required', 'isEmail' ]}
														errorMessages={[
															'this field is required',
															'email is not valid'
														]}
													/>
												</GridItem>
												<GridItem xs={12} sm={12} md={12}>
													<TextValidator
														multiline="true"
														rows="5"
														label="Message"
														style={{ width: '100%' }}
														id="feedback"
														onChange={this.handleChange}
														name="feedback"
														value={this.state.feedback}
														validators={[ 'required' ]}
														errorMessages={[ 'this field is required' ]}
													/>
												</GridItem>
											</GridContainer>
										</CardBody>
										<CardFooter className={classes.justifyContentBetween}>
											<Button
												/* onClick={this.handleSubmit} */
												color={this.state.color}
												className={classes.pullRight}
												type="submit"
												disabled={this.state.submitted}
											>
												{(this.state.submitted && this.state.message) ||
													(!this.state.submitted && 'Send Message')}
											</Button>
										</CardFooter>
									</ValidatorForm>
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
