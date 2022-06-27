export default p => {
    return(
        <div>
            <span>{p.nome} </span>
            <strong>{p.idade} </strong>
            <span>{p.nerd ? 'Verdadeiro!' : 'Falso!'}</span>
        </div>
    )
}