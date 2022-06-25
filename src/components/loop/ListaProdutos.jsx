import React from 'react'
import './ListaProdutos.css'
import produtos from '../../data/produtos'

export default () => {
    const lista = produtos.map((prod) => {
        return(
            <tr key={prod.id} className={prod.id % 2 === 0 ? 'par' : 'impar'}>
                <td>{prod.id}</td>
                <td className="nome">{prod.nome}</td>
                <td className="preco">R${prod.preco.toFixed(2).replace('.', ',')}</td>
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