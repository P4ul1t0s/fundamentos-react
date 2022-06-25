export default function ComParametro(p){
    const status = p.nota >= 7 ? 'aprovado' : 'reprovado'
    return(
        <div>
            <h2>{p.titulo}</h2>
            <h3><strong>{p.aluno}</strong> tem nota <strong>{p.nota}</strong> e está <strong>{status}</strong></h3>
        </div>
    )
}