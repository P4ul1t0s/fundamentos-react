export default p => {
    return(
        <div>
            <input 
                placeholder="Passos"
                type="number"
                value={p.passo}
                onChange={e => p.funcao(+e.target.value)}
            />
        </div>
    )
}