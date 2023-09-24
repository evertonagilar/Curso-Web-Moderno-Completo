import React from "react";
import Filho from "./Filho";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <ul>
            <Filho nome="Rafael" {...props} />
            <Filho nome="Rafael" sobrenome="Agilar" />
            <Filho {...props} sobrenome="Agilar" />
        </ul>
    </div>
