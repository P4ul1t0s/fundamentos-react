import React from 'react'

export default (p) => {
    const isPar = p.numero % 2 === 0

    return(
        <div>
            {p.numero} é um número {isPar ?  <strong> Par</strong> : <strong> Ímpar</strong> }
        </div>
    )
}