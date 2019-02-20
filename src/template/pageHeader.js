import React from 'react';


export default props => (
    <header className="page-header">
        {/* <h2>{props.Titulo} <small>{props.descricao}</small></h2> */}
        <h3>{props.Titulo} <small className="text-muted">{props.descricao}</small>
</h3>

    </header>
)