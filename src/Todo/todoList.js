import React from "react";

import IconButon from "../template/iconButton";
import PageHeader from "../template/pageHeader";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    
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
  };

  return (
    <div>
      <PageHeader Titulo="Tarefas" descricao="Lista de tarefas cadastradas" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};
