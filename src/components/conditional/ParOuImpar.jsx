import React from 'react'

export default (p) => {
    const isPar = p.numero % 2 === 0

    return(
        <div>
            {isPar ? 
                <span>Par</span> 
            : 
                <span>Impar</span> 
            }
        </div>
    )
}