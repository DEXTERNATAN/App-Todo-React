import React, { Component } from 'react'
import './App.css'
import Menu from '../Menu/Menu'
import { Switch, Route } from 'react-router-dom'
import Todo from '../Todo/Todo'
import Sobre from '../Sobre/Sobre'
import Rodape from '../Rodape/Rodape'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path='/' component={Todo}/>
          <Route path='/sobre' component={Sobre}/>
        </Switch>
        <Rodape />
      </div>
    );
  }
}

export default App;
