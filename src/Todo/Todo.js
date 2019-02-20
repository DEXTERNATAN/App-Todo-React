import React, { Component } from 'react'
import FirebaseService from '../services/FirebaseService'
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
      this.handleRemove = this.handleRemove.bind(this);

      this.refresh()

    }

    refresh() {

      // Usando firebase
      FirebaseService.getDataList('tarefa', (resp) => {
        console.log('Dados', resp)
        // this.setState({data: dataReceived})
        this.setState({...this.state, descricao: '', list: resp})
      })

      // Usando Axios
      // axios.get(URL).then(
      //   resp => {
      //     console.log('Dados buscados: ', resp.data)
      //     this.setState({...this.state, descricao: '', list: [resp.data]})
      //   }
      // )
    }

    handleAdd(e) {

      e.preventDefault();
      
      const { descricao } = this.state;
      
      let objToSubmit = {
        descricao
      }

      // Usando axios
      // axios.post(URL, objToSubmit)
      //   .then(resp => {
      //     console.log('Dados: ', resp)
      //     this.refresh()
      //   })
      //   .catch(error => console.log(error))

      // Usando Firebase
      const id = FirebaseService.pushData('tarefa', objToSubmit)
      if(id){
        console.log('registro inserido com sucesso')
      }else{
        console.log('registro não pode ser inserido')
      }

    }

    handleRemove(tarefa) {

      // Usando o Firebase
      FirebaseService.remove(tarefa.key, 'tarefa').then(
        data => {
          console.log('Tarefa removida com sucesso: ', tarefa);
        }
      )

      // Usando o Axios
      // axios.delete(`${URL}/${tarefa.id}`).then(
      //   data => this.refresh()
      // )
      console.log('Metodo de deletar acionado')
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