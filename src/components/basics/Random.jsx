import React from "react"

export default (p) => {
    const {min, max} = p
    const res = parseInt(Math.random() * (max - min))
    return(
        <>
            <p>Número mínimo: {min}</p>
            <p>Número máximo: {max}</p>
            <p>Sorteado: {res}</p>
        </>
    ) 
}