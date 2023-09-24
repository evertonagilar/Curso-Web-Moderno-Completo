import React from "react";
import ReactDOM from "react-dom";
import Pai from './components/Pai2'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="José" sobrenome="Sobrenome1"/>
            <Filho nome="Maria" sobrenome="Sobrenome2"/>
            <Filho nome="Carlos" sobrenome="Sobrenome3"/>
        </Pai>
    </div>,
        document.getElementById('root'))






