import React, { Component } from 'react'
// import logo from '../logo.svg';
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

class Todo extends Component {

    constructor(props){
      super(props)
      this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
      console.log('Add', this);
    }

    render() {
        return (
          <div className="container">            
            <PageHeader Titulo="Tarefas" descricao="cadastre suas tarefas aqui"/>
            <TodoForm handleAdd={this.handleAdd}/>
            <TodoList />
          </div>  
        )
    }
}

export default Todo;