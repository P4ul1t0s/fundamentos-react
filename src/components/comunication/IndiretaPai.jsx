import {useState} from 'react'
import IndiretaFilho from "./IndiretaFilho"

export default p => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
    
    function fornecerInformacoes(nomeP, idadeP, nerdP){
        setNome(nomeP)
        setIdade(idadeP)
        setNerd(nerdP)
    }

    return(
        <div>
            <div>
                <span>{nome}, </span>
                <strong>{idade} anos</strong>
                <span>, {nerd ? 'é Nerd' : 'não é Nerd'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}/>
        </div>
    )
}