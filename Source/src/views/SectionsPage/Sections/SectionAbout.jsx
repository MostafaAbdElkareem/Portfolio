import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// @material-ui/icons
// core components
import Button from 'components/CustomButtons/Button.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import headersStyle from 'assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.jsx';
import web from 'assets/img/web-dev.jpg';
import powerpps from 'assets/img/powerapps.jpg';
import ux from 'assets/img/ux.jpg';
import avatar from 'assets/img/avatar.jpg';
import word from 'downloads/Mostafa_Abdallah_Resume.docx';
//import pdf from 'downloads/Mostafa_Abdallah_Resume.pdf';

function SectionHeaders({ ...props }) {
	const { classes, ...rest } = props;
	const settings = {
		dots: true,
		autoplaySpeed: 12000,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true
	};
	return (
		// we've set the className to cd-section so we can make smooth scroll to it
		<div className="cd-section" {...rest}>
			<div className={classes.sectionBlank} id="blanksection" />

			{/* HEADER 3 START */}
			<div>
				<Carousel {...settings}>
					<div>
						<div
							className={classes.pageHeader}
							style={{ backgroundImage: `url("${web}")`, backgroundSize: 'cover' }}
						>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={6} md={6}>
										<h4>ABOUT ME | My experience</h4>
										<h1 className={classes.title}>UI & Front-End Development</h1>
										<h4>
											Hands-on expertise working with HTML, CSS and the latest releases of ReactJS
											– SASS & LESS CSS pre-processors - Bootstrap / Materialize CSS frameworks
											and Popular CMSs like (Sharepoint & WordPress) to build web applications
											with extensive experience in building reusable components.
											<br />Highly collaborative, people oriented and supportive team player.
										</h4>

										<Button justIcon color="white" simple>
											<a
												href="https://www.linkedin.com/in/mostafaabdelkareem/"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i className="fab fa-linkedin-in" />
											</a>
										</Button>
										<Button justIcon color="white" simple>
											<a
												href="https://www.behance.net/desha-portfolio"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i className="fab fa-behance" />
											</a>
										</Button>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
					<div>
						<div
							className={classes.pageHeader}
							style={{ backgroundImage: `url("${ux}")`, backgroundSize: 'cover' }}
						>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										{/* 		<img
											src={avatar}
											alt=""
											style={{
												width: '40%',
												borderRadius: '150px',
												border: '10px solid #f3fffa82',
												marginTop: '0%'
											}}
										/> */}
									</GridItem>
									<GridItem
										xs={12}
										sm={7}
										md={7}
										className={classNames(classes.mlAuto, classes.textLeft)}
									>
										<h4>ABOUT ME | My experience</h4>
										<h1 className={classes.title}>UX & UI Design</h1>
										<h4>
											Talented and innovative UX/UI Consultant, Intensive Experience in applying
											UCD process and UX best practices from Research, Ideation, Wireframing and
											Prototyping into Delivering meaningful experience that solves users problems
											and satisfy its needs, Deep understanding of designing complex solutions for
											complete digital environments.
											{/* 	<br />
											<br />With broad professional experience in leveraging HTML, CSS and
											JavaScript to build responsive web applications, and interactive features
											that drive business growth and improve overall User Experience.
											<br /> */}
										</h4>
										<h4>
											{/* Downalod my Resume{' '}
											<Button justIcon color="white" simple>
												<a style={{ color: '#fff' }} href={word}>
													<i className="fas fa-file-word" />
												</a>
											</Button> */}
											{/* 	<Button justIcon color="white" simple>
												<a style={{ color: '#fff' }} href={pdf}>
													<i className="fas fa-file-pdf" />
												</a>
											</Button> */}
										</h4>

										<Button justIcon color="white" simple>
											<a
												href="https://www.linkedin.com/in/mostafaabdelkareem/"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i className="fab fa-linkedin-in" />
											</a>
										</Button>
										<Button justIcon color="white" simple>
											<a
												href="https://www.behance.net/desha-portfolio"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i className="fab fa-behance" />
											</a>
										</Button>
										{/* <Button justIcon color="white" simple>
											<a
												href="https://github.com/MostafaAbdElkareem"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i className="fab fa-github" />
											</a>
										</Button> */}
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
					<div>
						<div
							className={classes.pageHeader}
							style={{ backgroundImage: `url("${powerpps}")`, backgroundSize: 'cover' }}
						>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={6} md={6}>
										<h4>ABOUT ME | My experience</h4>
										<h1 className={classes.title}>PowerApps Platform Customization</h1>
										<h4>
											Building nice looking & codeless canvas apps / Create fully customized web
											templates using liquid language / HTML5 / CSS3 & JavaScript to dilever
											modern powerapps portal.
										</h4>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
			{/* HEADER 3 END */}
		</div>
	);
}

export default withStyles(headersStyle)(SectionHeaders);
