export default function ComParametro(p){
    const status = p.nota >= 7 ? 'aprovado' : 'reprovado'
    return(
        <div>
            <h2>{p.titulo}</h2>
            <h3>{p.aluno} tem nota {p.nota} e está {status}</h3>
        </div>
    )
}