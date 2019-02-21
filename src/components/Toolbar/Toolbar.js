import React from 'react';
// import classes from './Toolbar.css';
import styles from './styles';
import injectSheets from 'react-jss';
import Logo from '../../components/Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import PropTypes from 'prop-types';


const toolbar = (props) => {
	let classes = props.classes;
	return (
		<React.Fragment>
			<header className={classes.Toolbar}>
				<div className={classes.Logo}> <Logo /> </div>
				<nav className={classes.DesktopOnly}><NavigationItems isLogged ={props.isAuth} /></nav>
			</header>
			<footer className={classes.Footer}>
				<p>Copyright: Goran Trtica</p>
			</footer>

		</React.Fragment>
	);
}


toolbar.propTypes = {
	isAuth: PropTypes.bool,
	classes: PropTypes.object

}

export default injectSheets(styles)(toolbar);