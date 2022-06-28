export default p => {
    const cb = p.quandoClicar
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)
    const isNerd = () => Math.random() > 0.5

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => cb('João', gerarIdade(), isNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}