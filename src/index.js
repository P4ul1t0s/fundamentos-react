import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import './index.css'

const el = document.getElementById('root')

ReactDOM.render(
    <div id="app">
        <Primeiro/>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={10}
        />
        <ComParametro
            aluno="Maria"
            nota={8.4}
        />
    </div>, el //* el == referencia da posição da renderização
)