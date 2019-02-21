import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import injectSheets from 'react-jss';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';


class Auth extends Component {

	state = {
		controls: {
			username: {
				elementType: 'input',
				elementConfig: {
					type: 'userName',
					placeholder: 'Username'
				},
				value: '',
				validation: {
					required: true,
					isUsername: true
				},
				valid: false,
				touched: false
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				validation: {
					required: true,
					minLength: 6
				},
				valid: false,
				touched: false
			}

		}
	};

	
	checkValidity(value, rules) {
		let isValid = true;
		if (!rules) {
			return true;
		}

		if (rules.required) {
			isValid = value.trim() !== '' && isValid;
		}

		if (rules.minLength) {
			isValid = value.length >= rules.minLength && isValid
		}

		if (rules.maxLength) {
			isValid = value.length <= rules.maxLength && isValid
		}
		if (rules.isNumeric) {
			const pattern = /^\d+$/;
			isValid = pattern.test(value) && isValid
		}

		return isValid;
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true
			}
		};
		this.setState({ controls: updatedControls });
	}

	submitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.username.value, this.state.controls.password.value)
	}

	componentDidUpdate() {
		if (this.props.isLogged) {
			this.props.history.replace('/');
		}
	}

	render() {

		const formElementsArray = [];
		for (let key in this.state.controls) {
			formElementsArray.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let form = formElementsArray.map(formElement => (
			<Input
				key={formElement.id}
				elementType={formElement.config.elementType}
				elementConfig={formElement.config.elementConfig}
				value={formElement.config.value}
				invalid={!formElement.config.valid}
				shouldValidate={formElement.config.validation}
				touched={formElement.config.touched}
				changed={(event) => this.inputChangedHandler(event, formElement.id)} />
		));


		const classes = this.props.classes;

		return (
			<div className={classes.Auth}>
				<form onSubmit={this.submitHandler}>
					{form}
					<Button btnType="Success">SUBMIT</Button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isLogged: state.auth.isLogged
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (username, password) => dispatch(actions.auth(username, password))
	}
};

Auth.propTypes = {
	onAuth: PropTypes.func,
	loading: PropTypes.bool,
	isLogged: PropTypes.bool,
	history: PropTypes.object,
	error: PropTypes.object,
	classes: PropTypes.object


}



export default connect(mapStateToProps, mapDispatchToProps)(injectSheets(styles)(Auth));