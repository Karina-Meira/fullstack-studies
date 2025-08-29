const turista = prompt('Digite o seu nome:')
let question = confirm('Você visitou alguma cidade?')
let cities = ''
let numberCities = 0

if(question === false) {
    alert(`${turista} não visitou nenhuma cidade.`)
} else {
    while (question === true) {
        let nameCity = prompt("Qual o nome da cidade?")
        question = confirm('Você visitou alguma outra cidade?')
        cities += nameCity + '\n'
        numberCities++
    }
}

alert(`Turista: ${turista}\n` +
    `Número de cidades visitadas: ${numberCities}\n` +
    `Cidades visitadas: \n ${cities}`
)