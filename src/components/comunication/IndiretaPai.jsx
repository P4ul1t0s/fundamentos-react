import IndiretaFilho from "./IndiretaFilho"

export default p => {
    let nome = '?'
    let idade = 0
    let nerd = false
    function fornecerInformacoes(nomeP, idadeP, nerdP){
        nome = nomeP
        idade = idadeP
        nerd = nerdP
    }

    return(
        <div>
            <div>
                <span>{nome}, </span>
                <span>{idade} anos, </span>
                <span>{nerd ? 'é Nerd' : 'não é Nerd'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}