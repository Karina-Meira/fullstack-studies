let nameCar1 = prompt('Insira o nome do carro1:')
let speedCar1 = parseFloat(prompt('Insira a velocidade do carro1:'))
let nameCar2 = prompt('Insira o nome do carro2:')
let speedCar2 = parseFloat(prompt('Insira a velocidade do carro2:'))

if (speedCar1 === speedCar2) {
    alert('Velocidades iguais!')
} else if (speedCar1 > speedCar2) {
    alert(`A velocidade do ${nameCar1} é maior. Velocidade = ${speedCar1}`)
} else {
    alert(`A velocidade do ${nameCar2} é maior. Velocidade = ${speedCar2}`)
}