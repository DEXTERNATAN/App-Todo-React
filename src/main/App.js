import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'
import Menu from '../template/Menu'
// import Rodape from '../template/Rodape'
import Todo from '../Todo/Todo'
import Sobre from '../Sobre/Sobre'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path='/' component={Todo}/>
          <Route path='/sobre' component={Sobre}/>
        </Switch>
        {/* <Rodape /> */}
      </div>
    );
  }
}

export default App;
