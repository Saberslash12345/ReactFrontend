import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import GameStore from './containers/GameStore/GameStore';
import Games from './containers/Games/Games';
import Auth from './containers/Auth/Auth';
import Singlegame from './containers/SingleGame/Singlegame';
import Logout from './containers/Auth/Logout/Logut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/" exact component={GameStore} />
            <Route path="/mygames" component={Games} />
            <Route path ="/auth" component ={Auth}/>
            <Route path ="/logout" component ={Logout}/>
            <Route path="/games/:id" component={Singlegame} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
