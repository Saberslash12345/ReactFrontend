import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class Logout extends Component {
	componentDidMount() {
		this.props.onLogout();
	}


	render() {
		return <Redirect to  = "/"  />
		}
	}


const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => dispatch(actions.logout())
	};
};

Logout.propTypes= {
	onLogout: PropTypes.func,
	classes: PropTypes.object

}


export default connect(null,mapDispatchToProps)(Logout);