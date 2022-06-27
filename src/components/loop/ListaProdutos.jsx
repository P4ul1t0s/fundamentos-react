import React from 'react'
import produtos from '../../data/produtos'
import './ListaProdutos.css'

export default () => {
    const lista = produtos.map((prod, i) => {
        return(
            <tr key={prod.id} className={i % 2 === 0 ? 'par' : 'impar'}>
                <td>{prod.id}</td>
                <td className="nome">{prod.nome}</td>
                <td className="preco">R${prod.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        )
    })

    return(
        <table>
            <thead>
                <tr id="cabecalho">
                    <td>ID</td>
                    <td>Produto</td>
                    <td>Preço</td>    
                </tr>
            </thead>
            <tbody>
                {lista}
            </tbody>
        </table>
    )
}