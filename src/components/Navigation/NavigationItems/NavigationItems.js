import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import PropTypes from 'prop-types';
import styles from './styles';
import injectSheets from 'react-jss';


 const navigationItems = (props) => {
    let classes = props.classes;

    return ( 
         <ul className = {classes.NavigationItems}>
        <NavigationItem link='/' exact>Game Store</NavigationItem>
        <NavigationItem link ='/mygames' exact >My Games</NavigationItem>
        { !props.isLogged  
        ? <NavigationItem link= '/auth'>Login</NavigationItem>
        : <NavigationItem link= '/logout'>Logout</NavigationItem>}
        </ul>
     );
}

navigationItems.propTypes = {
    isLogged: PropTypes.bool,
    classes: PropTypes.object

}

export default injectSheets(styles)(navigationItems);