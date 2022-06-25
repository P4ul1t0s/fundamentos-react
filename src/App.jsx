import './App.css'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragmento from './components/basics/Fragmento'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import Famila from './components/basics/Famila'
import FamiliaMembro from './components/basics/FamiliaMembro'
import ListaAlunos from './components/loop/ListaAlunos'
import './index.css'

export default () => (
    <div className="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">
            <Card titulo="#06 - Repetição" color="#FA7C65">
                <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                <Famila sobrenome="Silva">
                    <FamiliaMembro nome="Gustavo"/>  
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                </Famila>
            </Card>

            <Card titulo="#04 - Aleatório" color="#FA6900">
                <Random min={1} max={60}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento/>
            </Card>

            <Card titulo="#02 - Com parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={10}
                />
            </Card>
            
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro/>
            </Card>
        </div>
    </div>
)