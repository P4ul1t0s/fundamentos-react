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

// function verificaSortiados(sorteio, new_num){
//     console.log("Lista recebida: " + sorteio)
//     console.log("Número recebido: " + new_num)
//     sorteio.forEach(num => {
//         console.log("Número atual: " + num)
//         console.log("Novo número: " + new_num)
//         if(num === new_num){
//             console.log(num + " é igual a " + new_num)
//             return false
//         }
//     })
//     return true
// }

console.log(sortear(6))

