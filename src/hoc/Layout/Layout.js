import React, { Component, Fragment } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './styles';
import injectSheets from 'react-jss';


class Layout extends Component {


  render() {

    let classes = this.props.classes;

    return (
      <Fragment>
        <Toolbar
        isAuth = {this.props.isLogged} />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.auth.token !== null
  }
}

Layout.propTypes = {
  isLogged: PropTypes.bool,
  children: PropTypes.any,
  classes: PropTypes.object
}


export default connect(mapStateToProps)(injectSheets(styles)(Layout));