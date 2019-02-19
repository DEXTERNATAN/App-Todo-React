import React, { Component } from 'react'
import {NavLink} from 'react-router-dom' 

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#/todos">TodoApp</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <a className="nav-link" href="#/todos">Tarefas <span className="sr-only">(current)</span></a> */}
                            <NavLink className="nav-link" to="/">Todo</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#/sobre">Sobre <span className="sr-only">(current)</span></a> */}
                            <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;