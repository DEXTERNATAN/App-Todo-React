import React, { Component } from 'react'
// import logo from '../logo.svg';
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

class Todo extends Component {
    render() {
        return (
          <div className="container">            
          <PageHeader Titulo="Tarefas" descricao="cadastre suas tarefas aqui"/>
          <TodoForm />
          <TodoList />
          </div>
          //   <header className="App-header">
          //   <img src={logo} className="App-logo" alt="logo" />
          //   <p>
          //     Edit <code>src/App.js</code> and save to carregar.
          //   </p>
          //   <a
          //     className="App-link"
          //     href="https://reactjs.org"
          //     target="_blank"
          //     rel="noopener noreferrer"
          //   >
          //     Learn React
          //   </a>
          // </header>
  
        )
    }
}

export default Todo;