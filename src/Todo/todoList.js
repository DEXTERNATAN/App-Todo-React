import React from "react";
import IconButon from "../template/iconButton";


export default props => {

  const renderRows = () => {
    const list = props.list || [];
    const tamanhoDaLista = list.length;
    
    if(tamanhoDaLista) {
      return list.map((tarefa) => (
        <tr key={tarefa.key}>
          <td className={tarefa.done ? 'markedAsDone' : ''}>{tarefa.descricao}</td>
          <td>
            <IconButon
              hide={tarefa.done}
              style='success'
              icon='check'
              onClick={() => props.handleMarkAsDone(tarefa)}> 
            </IconButon>
            <IconButon
              hide={!tarefa.done}
              style='warning'
              icon='undo'
              onClick={() => props.handleMarkAsPending(tarefa)}>
            </IconButon>
            <IconButon
              hide={!tarefa.done}
              style="danger"
              icon="trash-alt"
              onClick={() => props.handleRemove(tarefa)} >
            </IconButon> 
          </td>
        </tr>
      ));
    }else {
      return (
        <tr >
          <td colSpan="4">
            Nenhum registro encontrado
          </td>
        </tr>
      )
    }
  };

  return (
    <div>
      {/* <PageHeader Titulo="Tarefas" descricao="Lista de tarefas cadastradas" /> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Descrição</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};