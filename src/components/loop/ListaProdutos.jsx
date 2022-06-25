import React from 'react'
import './ListaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    const lista = produtos.map((prod) => {
        return(
            <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nome}</td>
                <td>R${prod.preco}</td>
            </tr>
        )
    })

    return(
        <table>
            <tr id="cabecalho">
                <td>ID</td>
                <td>Produto</td>
                <td>Preço</td>    
            </tr>
            {lista}
        </table>
    )
}