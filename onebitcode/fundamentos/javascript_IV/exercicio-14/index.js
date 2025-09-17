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



const mediana = (...numeros) => {
    const numerosOrdenados = [...numeros].sort((a, b) => a - b)
    const meio = Math.floor(numerosOrdenados.length / 2)

    if (numerosOrdenados.length % 2 !== 0) {
        return numerosOrdenados[meio]
    }

    const primeiroElemento = numerosOrdenados[meio - 1]
    const segundoElemento = numerosOrdenados[meio]

    return mediaSimples(primeiroElemento, segundoElemento)
}

console.log(mediana(2, 5, 99, 4, 42, 7))


const moda = (...numeros) => {
    const quantidades = numeros.map(num => [num, numeros.filter(n => num === n).length])
    quantidades.sort((a, b) => b[1] - a[1])

    return quantidades[0][0]
}

console.log(moda(1, 5, 1, 4, 5, 1, 1, 1))