import {
	container,
	sectionDark,
	section,
	mlAuto,
	mrAuto,
	title,
	description,
	cardTitle,
	whiteColor,
	hexToRgb
} from 'assets/jss/material-kit-pro-react.jsx';

const testimonialsSection = {
	container,
	mlAuto,
	mrAuto,
	title,
	description,
	cardTitle,
	sectionDark: {
		...sectionDark,
		'& $cardDescription': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)'
		},
		'& $cardTitle': {
			color: whiteColor
		},
		backgroundSize: '550% 450%'
	},
	cardDescription: {
		...description
	},
	cardCategory: {
		...description
	},
	sectionImage: {
		...sectionDark,
		...section,
		position: 'relative',
		'& $container': {
			zIndex: '2',
			position: 'relative'
		},
		'&:after': {
			position: 'absolute',
			zIndex: '1',
			width: '100%',
			height: '100%',
			display: 'block',
			left: '0',
			top: '0',
			content: "''"
		},
		'& $title': {
			color: whiteColor
		},
		'& $description': {
			color: 'rgba(' + hexToRgb(whiteColor) + ', 0.76)'
		}
	},
	testimonials: {
		padding: '80px 0 20px 0',
		background: '#010102',
		'& $cardDescription': {
			fontStyle: 'italic'
		}
	},
	textCenter: {
		textAlign: 'center'
	},
	icon: {
		marginTop: '30px',
		'& .fab,& .fas,& .far,& .fal,& .material-icons': {
			fontSize: '40px',
			lineHeight: '40px'
		},
		'& svg': {
			width: '40px',
			height: '40px'
		}
	},
	card1: {
		'& $cardDescription': {
			marginBottom: '50px',
			fontStyle: 'italic'
		}
	},
	starIcons: {
		width: '24px',
		height: '24px'
	},
	testimonial2: {
		'& .slick-dots': {
			display: 'none !important'
		}
	},
	card2: {
		maxWidth: '650px',
		margin: '60px auto',
		'& $cardDescription': {
			fontStyle: 'italic'
		}
	}
};

export default testimonialsSection;
