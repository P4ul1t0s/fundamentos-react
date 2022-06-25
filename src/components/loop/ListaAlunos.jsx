import React from 'react'
import alunos from '../../data/alunos'

export default props => {
    const lis = alunos.map((aluno) => {
        return(
            <li key={alunos.id}>
                {aluno.id} - {aluno.nome} ➡ {aluno.nota}
            </li>
        )
    })

    return(
        <div>
            <ul>
                {lis}
            </ul>
        </div>
    )
}