import React from "react";

export default props => (
  <div>
    <form>
      <div className="form-row">
        <div className="form-group col-md-11">
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="Digite o texto da tarefa"
          />
        </div>
        <div className="form-group col-md-1">
            <button type="submit" className="btn btn-primary">
                <i class="fas fa-plus-square" />
            </button>
        </div>
      </div>
      {/* <div className="form-row">
        <div className="form-group col-md-2">
          <button type="submit" className="btn btn-primary">
            <i class="fas fa-plus-square" />
          </button>
        </div>
      </div> */}
    </form>
  </div>
);
