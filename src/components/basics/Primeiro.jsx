import React from "react"

export default function Primeiro(){ //*Nome da function (Primeiro) é opcional
    const msg = 'Seja bem vindo(a)!'
    return(
        <div>
            <h2>Primeiro Componente</h2>
            <p>{msg}</p>
        </div>
    )
}