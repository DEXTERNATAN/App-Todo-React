import React, { Component } from 'react'
// import FirebaseService from '../services/FirebaseService'
import axios from "axios";

import PageHeader from '../template/pageHeader'
import TodoList from './todoList'
import TodoForm from './todoForm'

const URL = 'https://tasks-43f03.firebaseio.com/tarefa.json';

class Todo extends Component {

    constructor(props){
      super(props)

      this.state = {
        descricao: '',
        list: []
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);

      axios.get(URL).then(data => console.log('Dados buscados: ', data))

    }

    handleAdd(e) {

      e.preventDefault();
      
      const { descricao } = this.state;
      
      let objToSubmit = {
        descricao
      }

      axios.post(URL, objToSubmit)
        .then(data => console.log('Dados: ', data))
        .catch(error => console.log(error))
        
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