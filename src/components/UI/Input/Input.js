import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import injectSheets from 'react-jss';



const input = (props) => {

	let classes = props.classes;

	let inputElement = null;
	const inputClasses = [classes.InputElement];

	if (props.invalid && props.shouldValidate && props.touched) {
		inputClasses.push(classes.Invalid);
	}

	switch (props.elementType) {
		case ('input'):
			inputElement = <input
				className={inputClasses.join(' ')}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
			break;
		case ('textarea'):
			inputElement = <textarea
				className={inputClasses.join(' ')}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
			break;
		case ('select'):
			inputElement = (
				<select
					className={inputClasses.join(' ')}
					value={props.value}
					onChange={props.changed}>
					{props.elementConfig.options.map(option => (
						<option key={option.value} value={option.value}>
							{option.displayValue}
						</option>
					))}
				</select>
			);
			break;
		default:
			inputElement = <input
				className={inputClasses.join(' ')}
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
	}

	return (
		<div className={classes.Input}>
			<label className={classes.Label}>{props.label}</label>
			{inputElement}
		</div>
	);

};

input.propTypes = {
	invalid: PropTypes.bool,
	shouldValidate: PropTypes.object,
	touched: PropTypes.bool,
	elementType: PropTypes.string,
	elementConfig: PropTypes.shape({
		type: PropTypes.string,
		placeholder: PropTypes.string
	}),
	value: PropTypes.string,
	changed: PropTypes.func,
	classes: PropTypes.object

};

export default injectSheets(styles)(input);