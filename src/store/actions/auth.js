import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	}
};

export const authSuccess = (token) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token
	};
};


export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const logout = () => {
	return {
		type: actionTypes.AUTH_LOGOUT
	};
}



export const auth = (username, password) => {
	return dispatch => {
		dispatch(authStart());
		const authData = {
			userName: username,
			password: password,
		}
		axios.post('//localhost:8000/store/auth/authenticateuser', authData)
			.then(response => {
				dispatch(authSuccess(response.data));
			})
			.catch(err => {
				dispatch(authFail(err));
				alert('You entered wrong username or password');

			})
	};
};