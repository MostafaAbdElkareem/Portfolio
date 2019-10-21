import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardAvatar from 'components/Card/CardAvatar.jsx';
import Muted from 'components/Typography/Muted.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import testimonialsStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx';
import kamal from 'assets/img/faces/kamal.jpg';
import marwan from 'assets/img/faces/marwan.jpg';
import ayman from 'assets/img/faces/ayman.jpg';
import damshity from 'assets/img/faces/damshity.jpg';
import nabil from 'assets/img/faces/nabil.jpg';
import kholy from 'assets/img/faces/kholy.jpg';
import embaby from 'assets/img/faces/embaby.jpg';
import saeed from 'assets/img/faces/saeed.jpg';
import moniem from 'assets/img/faces/moniem.jpg';
import moataz from 'assets/img/faces/moataz.jpg';

function SectionTestimonials({ ...props }) {
	const { classes, ...rest } = props;
	const settings = {
		dots: true,
		infinite: false,
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
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={kamal} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												Mostafa is a talented and experienced UX consultant with great passion
												to his job and true capabilities, if you want to innovate especially
												with Microsoft technologies - front-end dev. just let him own, and see
												the magic comes. He owned and contributed in complete projects for
												SharePoint and office365 and the results were always successful + a lot
												of values, working with such talents and people is a real pleasure and
												advancement, Thank you Mostafa!
											</h5>
											<h4 className={classes.cardTitle}>Ahmed Kamal</h4>
											<Muted>
												<h6>
													Director – Development & User Experience. Design and Digital
													Experience (CX & UX Advocate!) at Coming Soon!.
												</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={marwan} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												I worked with Mostafa at ITWorx in several projects around web portals
												and content management systems. Mostafa always demonstrated high
												professionality level, great experience in applying best practices with
												customer centric attitude. Mostafa is highly committed to always deliver
												high-quality work and a great team player. I definitely recommend
												Mostafa.
											</h5>
											<h4 className={classes.cardTitle}>Marwan Tarek</h4>
											<Muted>
												<h6>
													Director - IoT and Digital Transformation (EMEA) at Hitachi
													Consulting
												</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={ayman} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												Mostafa is a UX guru & a SharePoint expert. Since the early versions of
												SharePoint, I've worked with many UI and SharePoint branding
												specialists, Mostafa is definitely the best. I highly recommend Mostafa.
											</h5>
											<h4 className={classes.cardTitle}>Ayman El-Hattab</h4>
											<Muted>
												<h6>Director, EMEA Emerging Markets at Nintex</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={damshity} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												I have worked with Mostafa in multiple projects for more than 7 years in
												ITWorx, he was able to provide innovative solutions for complex portal
												development issues along with sticking to the best practices and
												technology recommendations. I totally recommend Mostafa not for just UI
												development but also for his ability to handle large projects on
												SharePoint with no coding and if coding is required he will be handling
												the gray area between UI development and Sharepoint development.
											</h5>
											<h4 className={classes.cardTitle}>Ahmed AlDamshity</h4>
											<Muted>
												<h6>UI development lead at STC Solutions</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={nabil} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												I worked with Mostafa during the evangelism of education solutions,
												these type of solution requires a simplicity and sophistication at the
												same type to address the experience of a school teacher and a partner
												who is not a tech savvy and keep the student engaged and interactive
												with the tool. I was amazed by Mostafa ideas and suggestion and most of
												all his understanding to the user emotions and how they will feel in
												each scenario they cover which made him a great UX designer and an
												important asset in the project adding to that Mostafa has a
												sportsmanship, he is always open to ideas and receive critique with an
												open mind and a sense of humor while maintain a laser focused target. I
												would definitely recommend him in a leadership role.
											</h5>
											<h4 className={classes.cardTitle}>Mohamed Nabil</h4>
											<Muted>
												<h6>
													Head of ISVs & Startups Strategy Microsoft 4Africa | Business
													Development Enthusiasm | A fixer & Problem Solver | Public Speaker &
													Cognitive Psychology Fan
												</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={kholy} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												Mostafa is a brilliant, innovative, and talented UX expert with deep
												technical skills and experience of web application and user experience
												for different business domain and vertical, in addition to his
												commitment, attention to details, and customer obsession, the ability to
												cope with stress and tight timeline without compromising the quality of
												his work, Mostafa was always very productive and target oriented, I
												enjoyed working with him, He is a valuable asset and added value to any
												team he is working with, or any company he is working at.
											</h5>
											<h4 className={classes.cardTitle}>Tamer El Khouly</h4>
											<Muted>
												<h6>
													Digital Architect | Solutions Selling |Technology Strategy Manager |
													Enterprise Architect | Program Manager | MBA
												</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={embaby} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												I worked with Mostafa in at least 3 projects of different sizes, and I
												always have very positive feedback about his talent, support and
												agility. In many cases I was surprised with how with minimal efforts he
												turns mediocre application or portal to look fancier, more rich,
												professional and usable. Thank you Mostafa!
											</h5>
											<h4 className={classes.cardTitle}>Marwan Tarek</h4>
											<Muted>
												<h6>Team Lead, Technical Project Manager - Consulting</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={saeed} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												Mostafa is a skillful creative web designer and developer. He is one of
												few who are both a designer and web developer at same time. He did many
												creative designs for SharePoint portals and knows how to do that very
												well. He is also expert in creating portable responsive UIs for
												platforms. His dedication to work is remarkable and is a person who gets
												things done.
											</h5>
											<h4 className={classes.cardTitle}>Ahmed Saeed</h4>
											<Muted>
												<h6>Director Of Sales And Business Development Gulf at almentor.net</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={moniem} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												Mostafa is really a talented usability engineer and consultant. Always
												keen to understand the customer needs, and introduce an innovative ideas
												to maximize the business value, and focus on being a value provider.
											</h5>
											<h4 className={classes.cardTitle}>Ahmed Abdelmoniem</h4>
											<Muted>
												<h6>Squad Lead at Integrant, PMP</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
								<div>
									<Card testimonial plain className={classes.card2}>
										<CardAvatar testimonial plain>
											<a href="#pablo" onClick={(e) => e.preventDefault()}>
												<img src={moataz} alt="..." />
											</a>
										</CardAvatar>
										<CardBody plain>
											<h5 className={classes.cardDescription}>
												A creative individual with an endless stream of good ideas, team skills,
												and committed attitude. He is wired to deliver results with a friendly
												touch and an always-smiling face.
											</h5>
											<h4 className={classes.cardTitle}>Moataz Kamel</h4>
											<Muted>
												<h6>Doctoral Candidate (PhDc) | Digital Innovation Practitioner</h6>
											</Muted>
										</CardBody>
									</Card>
								</div>
							</Carousel>
						</GridItem>
					</GridContainer>
					<div className={classes.textCenter}>
						<Button color="linkedin" href="https://www.linkedin.com/in/mostafaabdelkareem/" target="new">
							<i className="fab fa-linkedin" /> More About Me on LinkedIn
						</Button>
					</div>
				</div>
			</div>
			{/* Testimonials 2 END */}
		</div>
	);
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
