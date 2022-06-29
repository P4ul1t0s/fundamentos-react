import { Component } from "react";
import './Contador.css'

export default class Contador extends Component{
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
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
                <h2><strong>{this.state.numero}</strong></h2>
                <input type="number" placeholder="Passos" value={this.state.passo} onChange={this.setPasso}/>
                <br/>
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }
}