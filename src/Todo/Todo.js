import React, { Component } from 'react'
import FirebaseService from '../services/FirebaseService'

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

      this.handleChange = this.handleChange.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
      this.handleRemove = this.handleRemove.bind(this);

      this.refresh()

    }

    refresh() {
      FirebaseService.getDataList('tarefa', (resp) => {
        this.setState({...this.state, descricao: '', list: resp})
      })
    }

    handleAdd(e) {

      e.preventDefault();
      
      const { descricao } = this.state;
      
      let objToSubmit = {
        descricao
      }

      const id = FirebaseService.pushData('tarefa', objToSubmit)
      if(id){
        console.log('registro inserido com sucesso')
      }else{
        console.log('registro não pode ser inserido')
      }

    }

    handleRemove(tarefa) {
      FirebaseService.remove(tarefa.key, 'tarefa').then(
        data => {
          console.log('Tarefa removida com sucesso: ', tarefa);
        }
      )
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
            <TodoList handleRemove={this.handleRemove} list={this.state.list} />
          </div>  
        )
    }
}

export default Todo;