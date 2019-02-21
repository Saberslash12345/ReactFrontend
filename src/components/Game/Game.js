import React from 'react';
import Button from '../UI/Button/Button';
import picture from '../../assets/images/resi.jpg';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import styles from './styles';


const game = (props) => {
	const classes = props.classes;
	return (
		<React.Fragment>
		<div className={classes.Game} >
			<span> {props.name} </span>
			<div style ={{cursor: 'pointer'}} 
			onClick={props.onImgClick}> <img src ={picture} alt="gamepic" className ={classes.Picture}/> </div>
			<span><Button clicked={props.clicked}>{props.buttonText} </Button></span>
		</div>
		</React.Fragment>
	);
}

game.propTypes = {
	name: PropTypes.string,
	onImgClick: PropTypes.func,
	clicked: PropTypes.func,
	buttonText: PropTypes.string,
	classes: PropTypes.object

}

export default injectSheets(styles)(game);