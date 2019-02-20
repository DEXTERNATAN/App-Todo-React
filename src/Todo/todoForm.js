import React from "react";
import IconButton from '../template/iconButton';

export default props => (
  <div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-11">
          <input type="text" className="form-control" id="descricao" placeholder="Adicione uma tarefa" 
            value={props.descricao}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-group col-md-1">
            <IconButton  style='primary' icon='plus' onClick={props.handleAdd} />
        </div>
      </div>
    </form>
  </div>
);
