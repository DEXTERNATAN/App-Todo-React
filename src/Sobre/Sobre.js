import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'

class Sobre extends Component {
  render() {
    return (
      <div>
        <PageHeader Titulo="Sobre" descricao="O que é o aplicativo de tarefas ?"/>

        <h2>Nossa historia</h2>
        <p>Lorem impsum</p>

        <h2>Missão e visão</h2>
        <p>Lorem impsum</p>

        <h2>Imprensa</h2>
        <p>Lorem impsum</p>

      </div>
    )
  }
}

export default Sobre;