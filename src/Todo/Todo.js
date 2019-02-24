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
        done: false,
        list: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleAdd = this.handleAdd.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
      this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
      this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
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
      const { done } = this.state;
      
      let objToSubmit = {
        descricao,
        done,
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

    handleMarkAsDone(tarefa) {
      console.log('Marcado como feito')
      let objToUpdate = {
        ...tarefa,
        done: true
      }
      
      FirebaseService.updateData(tarefa.key, 'tarefa', objToUpdate).then(
        data => {
          console.log('Atualizado com sucesso')
          this.refresh()
        }
      )

    }

    handleMarkAsPending(tarefa) {
      console.log('Marcado como pendente')
      
      let objToUpdate = {
        ...tarefa,
        done: false
      }
      
      FirebaseService.updateData(tarefa.key, 'tarefa', objToUpdate).then(
        data => {
          console.log('Atualizado com sucesso')
          this.refresh()
        }
      )
    }

    render() {
        return (
          <div className="container">            
            <PageHeader Titulo="Tarefas" descricao="cadastre suas tarefas aqui"/>
            <TodoForm 
              descricao={this.state.descricao} 
              handleAdd={this.handleAdd} 
              handleChange={this.handleChange} />
            <TodoList 
              list={this.state.list} 
              handleRemove={this.handleRemove} 
              handleMarkAsDone={this.handleMarkAsDone}
              handleMarkAsPending={this.handleMarkAsPending}
            />
          </div>  
        )
    }
}

export default Todo;