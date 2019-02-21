import React from 'react';
import styles from './styles';
import xboxlogo from '../../assets/images/xboxlogo.jpg';
import injectSheets from 'react-jss';


const logo = (props) => {
    let classes = props.classes;
    return (

        <div className={classes.Logo}>
            <img src={xboxlogo} alt="xboxlogo" />
        </div>
    );
}

export default injectSheets(styles)(logo);