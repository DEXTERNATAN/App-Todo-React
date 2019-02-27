import React from "react";
import IconButton from "../template/iconButton";

export default props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftkey ? props.handleSearch() : props.handleAdd()
    } else if (e.key === 'Escape') {
      props.handleClear()
    }
  }

  return (
    <div>
      <form className='todoForm'>
        <div className="form-row">
          <div className="form-group col-md-10">
            <input
              type="text"
              className="form-control"
              id="descricao"
              placeholder="Adicione uma tarefa"
              onKeyUp={keyHandler}
              value={props.descricao}
              onChange={props.handleChange}
            />
          </div>
          <div className="form-group col-md-2">
            <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
            <IconButton style="info" icon="search" onClick={props.handleSearch} />
            <IconButton style="danger" icon="times" onClick={props.handleClear} />
          </div>
        </div>
      </form>
    </div>
  )
}
