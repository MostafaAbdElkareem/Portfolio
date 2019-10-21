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
import dg1 from 'assets/img/web-dev.jpg';
import dg3 from 'assets/img/ux.jpg';
import avatar from 'assets/img/avatar.jpg';
import resume from 'downloads/Mostafa-Abdallah_Resume.docx';

function SectionHeaders({ ...props }) {
	const { classes, ...rest } = props;
	const settings = {
		dots: true,
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
					{/* Carousel 3 START */}
					<div>
						<div
							className={classes.pageHeader}
							style={{ backgroundImage: `url("${dg3}")`, backgroundSize: 'cover' }}
						>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={5} md={5}>
										<img
											src={avatar}
											alt=""
											style={{
												width: '40%',
												borderRadius: '150px',
												border: '10px solid #f3fffa82',
												marginTop: '0%'
											}}
										/>
									</GridItem>
									<GridItem
										xs={12}
										sm={7}
										md={7}
										className={classNames(classes.mlAuto, classes.textRight)}
									>
										<h4>ABOUT ME | My experience</h4>
										<h1 className={classes.title}>UX & Visual Design</h1>
										<h4>
											Intensive knowledge of designing complex digital solutions, Extensive
											experience in using UX design best practices, and a deep understanding of
											mobile-first and responsive design specifications.
										</h4>

										<Button color="danger" size="lg">
											<a style={{ color: '#fff' }} href={resume}>
												Download My Resume
											</a>
										</Button>
										<br />
										<Button justIcon color="white" simple>
											<a
												href="https://www.linkedin.com/in/mostafaabdelkareem/"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i class="fab fa-linkedin-in" />
											</a>
										</Button>
										<Button justIcon color="white" simple>
											<a
												href="https://www.behance.net/desha-portfolio"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i class="fab fa-behance" />
											</a>
										</Button>
										<Button justIcon color="white" simple>
											<a
												href="https://github.com/MostafaAbdElkareem"
												target="_blank"
												rel="noopener noreferrer"
												style={{ color: '#fff' }}
											>
												<i class="fab fa-github" />
											</a>
										</Button>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
					{/* Carousel 3 END */}
					{/* Carousel 1 START */}
					<div>
						<div
							className={classes.pageHeader}
							style={{ backgroundImage: `url("${dg1}")`, backgroundSize: 'cover' }}
						>
							<div className={classes.container}>
								<GridContainer>
									<GridItem xs={12} sm={6} md={6}>
										<h4>ABOUT ME | My experience</h4>
										<h1 className={classes.title}>UI & Front-End Development</h1>
										<h4>
											Hands-on expertise working with HTML, CSS and the latest releases of ReactJS
											& Angular – SASS & LESS CSS pre-processors - Bootstrap / Materialize CSS
											frameworks and Popular CMSs like (Sharepoint & WordPress) to build web
											applications with extensive experience in building reusable Components.
										</h4>
									</GridItem>
								</GridContainer>
							</div>
						</div>
					</div>
					{/* Carousel 1 END */}
				</Carousel>
			</div>
			{/* HEADER 3 END */}
		</div>
	);
}

export default withStyles(headersStyle)(SectionHeaders);
