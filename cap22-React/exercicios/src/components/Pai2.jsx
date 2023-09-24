import React from "react";

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <ul>
            {props.children}
        </ul>
    </div>
