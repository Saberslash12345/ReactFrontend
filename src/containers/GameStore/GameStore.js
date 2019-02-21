import React, { Component } from 'react';
import Game from '../../components/Game/Game';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import * as actions from '../../store/actions/games';
import PropTypes from 'prop-types';
import injectSheets from 'react-jss';
import styles from './styles';

class GameStore extends Component {

	state = {
		controls: {
			searchInput:{
				searchInputValue: ''
			}
		}
	}


	componentDidMount() {
		if (!this.props.originalGames) {
			this.props.onInitGames();
		}
	};

	//Re-renders all games to home screen when input 'Cancel search' button is clicked
	cancelSearch = () => {
		// document.getElementById("searchField").value = "";
		
		const updatedControls = {
				...this.state.controls, 
				searchInput : {
					...this.state.controls.searchInput,
					searchInputValue: ""
				}
		}

		this.setState ({controls: updatedControls});

		this.props.clearSearchGames();
		for (let i = 0; i < this.props.allGames.length; i++) {
			this.props.addSearchGames(this.props.allGames[i]._id);
		}
	}

	searchGames = (e) => {
		let currentGames = [];
		let newGames = [];

		if (e.target.value !== "") {
	
			currentGames = this.props.allGames.slice();

			newGames = currentGames.filter(game =>
				game.name.toLowerCase() === e.target.value.toLowerCase());
		} else {
			newGames = this.props.allGames.splice();
		}

		const updatedControls = {
			...this.state.controls, 
			searchInput : {
				...this.state.controls.searchInput,
				searchInputValue: e.target.value
			}
		}

		this.setState ({controls: updatedControls});	

		this.props.clearSearchGames();

		for (let i = 0; i < newGames.length; i++) {
			this.props.addSearchGames(newGames[i]._id);
		}

	}

	render() {
		const classes = this.props.classes;

		return (
			
			<div className={classes.Wrapper}>
				<div className={classes.Search}>
					<input type='text'
						id="searchField"
						placeholder='Game title here'
						onChange={this.searchGames}
						value = {this.state.controls.searchInput.searchInputValue}
					></input>
					<button onClick={this.cancelSearch}>Cancel search</button>

				</div>

				<div className={classes.Games}>
					{this.props.searchedGames.map((singleGame) =>

						this.props.myGames.filter(myGameListItem => {
							return singleGame.name === myGameListItem.name
						}

						).length === 0
							?
							(<Game key={singleGame._id}
								gameid={singleGame._id}
								buttonText='Add game to collection of mygames'
								clicked={() => this.props.onAddGame(singleGame)}
								name={singleGame.name}
								onImgClick={() => this.props.history.replace('/games/' + (singleGame._id))}


							/>)
							:
							(<Game key={singleGame._id}
								gameid={singleGame._id}
								buttonText='Remove game'
								onImgClick={() => this.props.history.replace('/games/' + (singleGame._id))}
								clicked={() => this.props.onRemoveGame(singleGame.name)}
								name={singleGame.name}
							/>)
					)}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		myGames: state.gamesReducer.myGamesState,
		allGames: state.gamesReducer.originalGames,
		searchedGames: state.gamesReducer.searchGames
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInitGames: () => dispatch(actions.initGames()),
		onAddGame: (game) => dispatch({ type: actionTypes.ADD_GAME, game: game }),
		onRemoveGame: (name) => dispatch({ type: actionTypes.REMOVE_GAME, name: name }),
		addSearchGames: (id) => dispatch({ type: actionTypes.ADD_SEARCHED_GAME, id: id }),
		clearSearchGames: () => dispatch({ type: actionTypes.CLEAR_SEARCHED_GAME })
	}
}

GameStore.propTypes = {
	onInitGames: PropTypes.func,
	originalGames: PropTypes.array,
	allGames: PropTypes.array,
	clearSearchGames: PropTypes.func,
	searchedGames: PropTypes.array,
	onAddGame: PropTypes.func,
	history: PropTypes.object,
	onRemoveGame: PropTypes.func,
	myGames: PropTypes.array,
	addSearchGames: PropTypes.func,
	classes: PropTypes.object

}


export default connect(mapStateToProps, mapDispatchToProps)(injectSheets(styles)(GameStore));

