import { useState } from 'react'
import './Input.css'

export default p => {
    const [valor, setValor] = useState()
    
    function quandoMudar(e){
        setValor(e.target.value)
    }

    return(
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input placeholder="Somente leitura" value={valor} readOnly/>
                <input placeholder="Com onChange" value={valor} onChange={quandoMudar}/>
                <input placeholder="Desvinculado" value={undefined}/>
            </div>
        </div>
    )
}