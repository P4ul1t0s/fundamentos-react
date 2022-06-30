function sortear(tamanho){
    let sorteio = []
    while(sorteio.length != tamanho){
        sorteio.push(verificaSortiados(sorteio))
    }
    return sorteio
}

function verificaSortiados(sorteio){
    let new_num = parseInt(Math.random()*61)
    return sorteio.includes(new_num) ?
    verificaSortiados(sorteio) :
    new_num
}

console.log(sortear(6))