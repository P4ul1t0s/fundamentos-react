import { Component } from "react";
import './Contador.css'
import Display from "./Display";
import Botao from "./Botao";
import PassoForm from "./PassoForm";

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    render(){
        return(
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}/>
                <PassoForm funcao={this.setPasso} passo={this.state.passo}/>
                <Botao funcao={this.dec} texto="-"/>
                <Botao funcao={this.inc} texto="+"/>
            </div>
        )
    }
}