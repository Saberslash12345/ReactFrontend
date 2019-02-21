import React from 'react';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import styles from './styles';


const button = (props) => {
    let classes = props.classes;

    return (
        <button
            disabled={props.disabled}
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
}

button.propTypes = {
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    clicked: PropTypes.func,
    children: PropTypes.any,
    classes: PropTypes.object


}

export default injectSheets(styles)(button);

