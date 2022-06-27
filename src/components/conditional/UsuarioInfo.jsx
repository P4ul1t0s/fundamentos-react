import { unstable_renderSubtreeIntoContainer } from "react-dom"
import If from "./If"

export default p => {
    const usuario = p.usuario || {}
    return(
        <div>
            <If test={usuario && usuario.nome}>
                Seja bem vindo, <strong>{usuario.nome}!</strong>
            </If>
            <If test={!usuario || !usuario.nome}>
                Seja bem vindo, <strong>amigão!</strong>
            </If>
        </div>
    )
}