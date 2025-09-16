function mediaSimples(...numeros) {
    let soma = numeros.reduce((ac, num) => ac + num, 0)   
    return soma / numeros.length 
}

console.log(mediaSimples(2, 6, 3, 7, 4))

function mediaPonderada(...notas) {
    let soma = notas.reduce((ac, { n, p }) => ac + n * (p ?? 1), 0)
    let pesoSoma = notas.reduce((ac, { p }) => ac + (p ?? 1), 0)
    return soma / pesoSoma
}

console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))

function mediana(...numeros) {
    const length = numeros.length
    const mind = Math.floor(length / 2)

    if(length % 2 !== 0) {
        
    }
}