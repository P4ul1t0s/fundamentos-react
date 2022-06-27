import React from 'react'
import alunos from '../../data/alunos'

export default () => {
    const lista = alunos.map((aluno) => {
        return(
            <li key={aluno.id}>
                {aluno.id} - {aluno.nome} ➡ {aluno.nota}
            </li>
        )
    })

    return(
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}