import * as  actionTypes from './actionTypes';
import axios from '../../axios-games'

//fix
export const fetchGamesFailed = (error) => {
  return {
    type: actionTypes.FETCH_GAMES_FAILED,
    error:error
  };
};

//set game 
export const searchGame = (game) => {
  return {
    type: actionTypes.SEARCH_GAME,
    game: game 
  }
}

export const setGames = (games) => {
  return {
    type: actionTypes.SET_GAMES,
    games: games
  };
};

//Sending get request to server to initialize all games(product) for home page
export const initGames = () => {
  return dispatch => {
    axios.get('/product')
      .then(response => {
        dispatch(setGames(response.data));
      })
      .catch(error => {
        dispatch(fetchGamesFailed(error));
      });
  };
};


export const searchSingleGame = (id) => {
  return dispatch => {
    axios.get('/product?id=' + id)
      .then(response => {
        dispatch(searchGame(response.data));
      })
      .catch(error => {
        dispatch(searchGame(null));
      });
  };
};