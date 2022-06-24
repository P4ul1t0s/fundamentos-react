import React from 'react'
import ReactDOM from 'react-dom'
import Comp from './components/basics/Primeiro'
import './index.css'

const el = document.getElementById('root')

ReactDOM.render(
    <div>
        <Comp></Comp>
    </div>, el //* el == referencia da posição da renderização
)