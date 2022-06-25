import './App.css'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import './index.css'

export default () => (
    <div className="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">
            <Card titulo="#04 - Aleatório">
                <Random min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com parametro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={10}
                />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro/>
            </Card>
        </div>
    </div>
)