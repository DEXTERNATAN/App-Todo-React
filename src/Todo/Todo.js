import React, { Component } from 'react'
// import logo from '../logo.svg';
import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

class Todo extends Component {

    constructor(props){
      super(props)

      this.state = {
        descricao: '',
        list: []
      }

      this.handleAdd = this.handleAdd.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleAdd() {
      console.log('Add', this.state);
    }

    handleChange(e) {
      this.setState({ ...this.state, descricao: e.target.value})
    }

    render() {
        return (
          <div className="container">            
            <PageHeader Titulo="Tarefas" descricao="cadastre suas tarefas aqui"/>
            <TodoForm 
              descricao={this.state.descricao} 
              handleAdd={this.handleAdd} 
              handleChange={this.handleChange} />
            <TodoList />
          </div>  
        )
    }
}

export default Todo;