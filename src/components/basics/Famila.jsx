import React from 'react'
import FamiliaMembro from './FamilaMembro'

export default (props) => {
    return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Ana" {...props}/> {/* //* Operador Spread, passa todos os atributos de um objeto */}
            <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
        </div>
    )
}