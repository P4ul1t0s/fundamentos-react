import React from 'react'
import ReactDOM from 'react-dom'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import './index.css'

const el = document.getElementById('root')

ReactDOM.render(
    <>
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
        <Fragmento/>
    </>, el //* el == referencia da posição da renderização
)