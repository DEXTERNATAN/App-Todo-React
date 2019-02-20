import React from "react";

import IconButon from "../template/iconButton";
import PageHeader from "../template/pageHeader";

export default props => {
  const renderRows = () => {
    const list = props.list || [];
    console.log('Dados da lista: ', list);
    return list.map((tarefa) => (
      <tr key={tarefa.key}>
        {/* <th scope="row">{tarefa.key}</th> */}
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
          {/* <tr>
            <th scope="row">1</th>
            <td>Lavar o carro</td>
            <td>
              <IconButon
                style="danger"
                icon="trash-alt"
                onclick={props.handleRemove}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Levar o lixo pra fora</td>
            <td>
              <IconButon
                style="danger"
                icon="trash-alt"
                onclick={props.handleRemove}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Organizar agenda</td>
            <td>
              <IconButon
                style="danger"
                icon="trash-alt"
                onclick={props.handleRemove}
              />
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
