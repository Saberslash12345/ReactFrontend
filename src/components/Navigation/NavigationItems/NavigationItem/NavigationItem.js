import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './styles';
import injectSheets from 'react-jss';


const navigationItem = (props) => {
	let classes = props.classes;
	return (
		<li className={classes.NavigationItem}>
			<NavLink
				to={props.link}
				exact={props.exact}
				activeClassName={classes.active}>{props.children}</NavLink>
		</li>
	);
}

navigationItem.propTypes = {
	link: PropTypes.string,
	classes: PropTypes.object

}

export default injectSheets(styles)(navigationItem);
