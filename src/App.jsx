import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Random'
import './index.css'

export default () => (
    <>
        <h1>Fundamentos do React</h1>
        <Random
            min={0}
            max={100}
        />
        <Fragmento/>
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro"
            nota={10}
        />
        <ComParametro
            aluno="Maria"
            nota={8.4}
        />
        <Primeiro/>
    </>
)