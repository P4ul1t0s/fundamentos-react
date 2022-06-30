import { useState } from "react"
import './Mega.css'

export default p => {
    function sortear(tamanho){
        let sorteio = []
        while(sorteio.length !== (tamanho*2)){
            sorteio.push(verificaSortiados(sorteio), ' - ')
        }
        sorteio.pop()
        return sorteio
    }
    
    function verificaSortiados(sorteio){
        let new_num = parseInt(Math.random()*61)
        return sorteio.includes(new_num) ?
        verificaSortiados(sorteio) : new_num
    }

    const [qtd, setQtd] = useState(p.qtd)
    const [numeros, setNumeros] = useState(qtd)

    return(
        <div className="Mega">
            <h2>Seus números são:</h2>
            <h3><strong>{numeros.length === undefined ? '*Sorteie para ve-los aqui*' : numeros}</strong></h3>
            <div>
                <input type="number" placeholder="Quantidade de Números" onChange={e => {setQtd(+e.target.value); setNumeros(sortear(+e.target.value))}}/>
            </div>
            <button onClick={() => setNumeros(sortear(qtd))}>
                Gerar Números
            </button>
        </div>
    )
}