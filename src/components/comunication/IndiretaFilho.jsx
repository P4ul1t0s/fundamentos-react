export default p => {
    const cb = p.quandoClicar
    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => cb('João', 53, true)}>
                Fornecer Informações
            </button>
        </div>
    )
}