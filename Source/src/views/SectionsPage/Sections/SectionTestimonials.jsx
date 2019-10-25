import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
import axios from 'axios';
// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardAvatar from 'components/Card/CardAvatar.jsx';
import Muted from 'components/Typography/Muted.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import testimonialsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx';

class SectionTestimonials extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			testimonials: []
		};
	}
	componentDidMount() {
		axios
			.get('/api/testimonials.json')
			.then((response) => {
				const testimonials = response.data;
				this.setState({ testimonials });
			})
			.catch((error) => {
				console.log(error);
			});
	}
	render() {
		const { classes, ...rest } = this.props;
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		};

		return (
			<div className="cd-section" {...rest}>
				{/* Testimonials 2 START */}
				<div className={`${classes.testimonials} ${classes.sectionDark} ${classes.testimonial2}`}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem
								xs={12}
								sm={8}
								md={8}
								className={`${classes.mlAuto} ${classes.mrAuto} ${classes.textCenter}`}
							>
								<h2 className={classes.title}>Testimonials </h2>
							</GridItem>

							<GridItem xs={12} sm={12} md={12}>
								<Carousel {...settings}>
									{this.state.testimonials.map((testimonial) => (
										<div key={testimonial.id}>
											<Card testimonial plain className={classes.card2}>
												<CardAvatar testimonial plain>
													<a href="#home" onClick={(e) => e.preventDefault()}>
														<img
															src={require(`assets/img/faces/${testimonial.img}.jpg`)}
															alt="..."
														/>
													</a>
												</CardAvatar>
												<CardBody plain>
													<h5 className={classes.cardDescription}>
														{testimonial.description}
													</h5>
													<h4 className={classes.cardTitle}>{testimonial.name}</h4>
													<Muted>
														<h6>{testimonial.jobtitle}</h6>
													</Muted>
												</CardBody>
											</Card>
										</div>
									))}
								</Carousel>
							</GridItem>
						</GridContainer>
						<div className={classes.textCenter}>
							<Button
								color="linkedin"
								href="https://www.linkedin.com/in/mostafaabdelkareem/"
								target="new"
							>
								<i className="fab fa-linkedin" /> More About Me on LinkedIn
							</Button>
						</div>
					</div>
				</div>
				{/* Testimonials 2 END */}
			</div>
		);
	}
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
