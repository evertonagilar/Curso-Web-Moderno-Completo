import React from "react";
import ReactDOM from "react-dom";

import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from'./components/Multiplos'
import Multi from './components/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="João" />
        <Multi.BoaNoite nome="Everton" />
    </div>, document.getElementById('root'))






