import React from "react";
import IconButton from "../template/iconButton";

export default props => (
  <div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-10">
          <input
            type="text"
            className="form-control"
            id="descricao"
            placeholder="Adicione uma tarefa"
            value={props.descricao}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-2">
          <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
          <IconButton style="info" icon="search" onClick={props.handleSearch} />
        </div>
      </div>
    </form>
  </div>
);
