import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'


const initalState = {
	originalGames: [],

	searchGames: [],

	myGamesState: [],

	selectedGame: null
};


const logout = (state, action) => {
	return updateObject(state, { myGamesState: [] })
}

//For single game selection
const searchSingleGame = (state, action) => {
	return updateObject(state, { selectedGame: action.game[0] });
}

const addGame = (state, action) => {
	const game = state.myGamesState.concat(action.game)
	return updateObject(state, { myGamesState: game })
}

const removeGame = (state, action) => {
	const filteredGameElement = state.myGamesState.filter(el => el.name !== action.name)
	return updateObject(state, { myGamesState: filteredGameElement })
}

const setGames = (state, action) => {
	return updateObject(state, { originalGames: action.games, searchGames: action.games })
}

const addSearchedGame = (state, action) => {
	const resultOfSearch = state.originalGames.filter(myGameListItem => {
		return myGameListItem._id === action.id;
	});
	const foundGame = state.searchGames.concat(resultOfSearch[0]);

	return updateObject(state, { searchGames: foundGame })
}

const clearSearchGames = (state, action) => {
	return updateObject(state, { searchGames:[] })
}

const reducer = (state = initalState, action) => {
	switch (action.type) {

		case actionTypes.ADD_GAME: return (addGame(state, action));
		case actionTypes.REMOVE_GAME: return (removeGame(state, action));
		case actionTypes.SET_GAMES: return (setGames(state, action));
		case actionTypes.ADD_SEARCHED_GAME: return (addSearchedGame(state, action));
		case actionTypes.AUTH_LOGOUT: return logout(state, action);
		case actionTypes.SEARCH_GAME: return searchSingleGame(state, action);
		case actionTypes.CLEAR_SEARCHED_GAME: return clearSearchGames(state, action);

		default:
			return state;
	}
}



export default reducer;