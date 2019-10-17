/* eslint-disable */
import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// react components for routing our app without refresh
import { Link } from 'react-router-dom';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Dns from '@material-ui/icons/PersonOutline';
import Build from '@material-ui/icons/Widgets';
import ListIcon from '@material-ui/icons/Favorite';
import People from '@material-ui/icons/ImportantDevices';
import Chat from '@material-ui/icons/Chat';
import Call from '@material-ui/icons/Call';

// core components

import headerLinksStyle from 'assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	};

	const smoothScroll = (e, target) => {
		if (window.location.pathname === '/sections') {
			var isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
			if (isMobile) {
				// if we are on mobile device the scroll into view will be managed by the browser
			} else {
				e.preventDefault();
				var targetScroll = document.getElementById(target);
				scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
			}
		}
	};
	const scrollGo = (element, to, duration) => {
		var start = element.scrollTop,
			change = to - start,
			currentTime = 0,
			increment = 20;

		var animateScroll = function() {
			currentTime += increment;
			var val = easeInOutQuad(currentTime, start, change, duration);
			element.scrollTop = val;
			if (currentTime < duration) {
				setTimeout(animateScroll, increment);
			}
		};
		animateScroll();
	};
	var onClickSections = {};

	const { classes, dropdownHoverColor } = props;
	return (
		<List className={classes.list + ' ' + classes.mlAuto}>
			<ListItem className={classes.listItem}>
				<Link
					to="/sections#headers"
					className={classes.dropdownLink}
					onClick={(e) => smoothScroll(e, 'headers')}
				>
					<Dns className={classes.dropdownIcons} /> About Me
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to="/sections#features"
					className={classes.dropdownLink}
					onClick={(e) => smoothScroll(e, 'features')}
				>
					<Build className={classes.dropdownIcons} /> Qualification
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/sections#blogs" className={classes.dropdownLink} onClick={(e) => smoothScroll(e, 'blogs')}>
					<ListIcon className={classes.dropdownIcons} /> Achievements
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link to="/sections#teams" className={classes.dropdownLink} onClick={(e) => smoothScroll(e, 'teams')}>
					<People className={classes.dropdownIcons} /> My Work
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Link
					to="/sections#testimonials"
					className={classes.dropdownLink}
					onClick={(e) => smoothScroll(e, 'testimonials')}
				>
					<Chat className={classes.dropdownIcons} /> Testimonials
				</Link>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Link
					to="/sections#contacts"
					className={classes.dropdownLink}
					onClick={(e) => smoothScroll(e, 'contacts')}
				>
					<Call className={classes.dropdownIcons} /> Contacts
				</Link>
			</ListItem>
		</List>
	);
}

HeaderLinks.defaultProps = {
	hoverColor: 'primary'
};

HeaderLinks.propTypes = {
	dropdownHoverColor: PropTypes.oneOf([ 'dark', 'primary', 'info', 'success', 'warning', 'danger', 'rose' ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
