import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import Game from '../../components/Game/Game';
import * as actions from '../../store/actions/index';
import PropTypes from 'prop-types';



class SingleGame extends Component {

  componentDidMount() {

    const gameId = this.props.match.params.id;
    this.props.searchSingleGame(gameId);
  }

  render() {

    if (this.props.selectedGame) {

      const filteredGames = this.props.myGames.filter(myGameItem => {

        return this.props.selectedGame.name === myGameItem.name
      })

      if (filteredGames.length === 0) {
        return (
          <div>
            <Game key={this.props.selectedGame._id}
              gameid={this.props.selectedGame._id}
              buttonText='Add game to collection of mygames'
              clicked={() => this.props.onAddGame(this.props.selectedGame)}
              name={this.props.selectedGame.name}
              onImgClick={() => this.props.history.replace('/games/' + (this.props.selectedGame._id))} />

            <h1 style={{ color: 'white' }}>Name: {this.props.selectedGame.name}</h1>
            <h1 style={{ color: 'white' }} >Description: {this.props.selectedGame.description}</h1>
            <p style={{ color: 'white' }}>Category: {this.props.selectedGame.category[0].name}</p>

          </div >
        );
      }
      else {
        return (
          <div>
            <Game key={this.props.selectedGame._id}
              gameid={this.props.selectedGame._id}
              buttonText='Remove'
              clicked={() => this.props.onRemoveGame(this.props.selectedGame.name)}
              name={this.props.selectedGame.name}
              onImgClick={() => this.props.history.replace('/games/' + (this.props.selectedGame._id))} />

            <h1>Name: {this.props.selectedGame.name}</h1>
            <h1>Description: {this.props.selectedGame.description}</h1>
            <p>Category: {this.props.selectedGame.category[0].name}</p>
          </div>
        );
      }
    } else {
      return (
        <div>
          <h1>Seems like you entered wrong URL
					</h1>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    selectedGame: state.gamesReducer.selectedGame,
    myGames: state.gamesReducer.myGamesState,
  }
}

const disptachStateToProps = dispatch => {
  return {
    searchSingleGame: (id) => dispatch(actions.searchSingleGame(id)),
    onAddGame: (game) => dispatch({ type: actionTypes.ADD_GAME, game: game }),
    onRemoveGame: (name) => dispatch({ type: actionTypes.REMOVE_GAME, name: name }),
  }
}


SingleGame.propTypes = {
  match: PropTypes.object,
  myGames: PropTypes.array,
  searchSingleGame: PropTypes.func,
  selectedGame: PropTypes.object,
  onAddGame: PropTypes.func,
  onRemoveGame: PropTypes.func,
  history: PropTypes.object,
  classes: PropTypes.object



}


export default connect(mapStateToProps, disptachStateToProps)(SingleGame);


