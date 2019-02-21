import React, { Component, Fragment } from 'react';
import Game from '../../components/Game/Game'
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import PropTypes from 'prop-types';


class Games extends Component {

	render() {
		return (
			<Fragment>
				{this.props.myGames.map((myGame, id) =>
					(<Game key={id} buttonText='Remove game'
						clicked={() => this.props.onRemoveGame(myGame.name)}
						name={myGame.name}
						onImgClick={() => this.props.history.replace('/games/' + (myGame._id))}
					/>))}
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		myGames: state.gamesReducer.myGamesState
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onRemoveGame: (name) => dispatch({ type: actionTypes.REMOVE_GAME, name: name })
	};

};

Games.propTypes = {
		myGames: PropTypes.array,
		onRemoveGame: PropTypes.func,
		history: PropTypes.object,
		classes: PropTypes.object

};


export default connect(mapStateToProps, mapDispatchToProps)(Games);
