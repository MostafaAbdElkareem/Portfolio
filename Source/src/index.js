import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router';

import 'assets/scss/material-kit-pro-react.scss?v=1.3.0';

// pages for this product
import SectionsPage from 'views/SectionsPage/SectionsPage.jsx';

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/" component={SectionsPage} />
		</Switch>
	</Router>,
	document.getElementById('root')
);
