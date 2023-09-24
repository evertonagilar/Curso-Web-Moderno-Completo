import React from "react";
import ReactDOM from "react-dom";

import BomDia from './components/BomDia'
import { BoaTarde, BoaNoite } from'./components/Multiplos'
import Multi from './components/Multiplos'

ReactDOM.render(
    <div>
        <BoaTarde nome="Ana" />
        <BoaNoite nome="João" />
        <Multi.BoaNoiteBoaNoite nome="João" />
    </div>, document.getElementById('root'))






