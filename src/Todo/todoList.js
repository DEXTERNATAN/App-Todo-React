import React from "react";

import IconButon from "../template/iconButton";
import PageHeader from "../template/pageHeader";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    
    return list.map((tarefa) => (
      <tr key={tarefa.key}>
        <td>{tarefa.descricao}</td>
        <td>
          <IconButon
            style="danger"
            icon="trash-alt"
            onClick={() => props.handleRemove(tarefa)}
          />
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
