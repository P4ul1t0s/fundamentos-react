import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('root')
const tag = <strong>Olá react!</strong>

ReactDOM.render(
    <div>
        <strong>Olá React!</strong>
    </div>, el //* el == referencia da posição da renderização
)

// ReactDOM.render( 
//     <div>
//         {tag}
//     </div>, el
// )