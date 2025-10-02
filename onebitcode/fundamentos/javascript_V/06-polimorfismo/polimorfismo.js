// Para utilizar a brobrescrita de métodos basta reescrever o método na classe filha utilizando o mesmo nome:

class Vehicle {
    move() {
        console.log('O veículo está se movendo.')
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo.')
    }
}

class Ship extends Vehicle {
    move() {
        console.log('O navio está navegando')
    }
}

class AirCraft extends Vehicle {
    move(speed) {
        console.log(`A aeronave está voando a ${speed} km/h`)
    }
}

const delarean = new Car()
const blackPearl = new Ship()
const epoch = new AirCraft()

delarean.move()
blackPearl.move()
epoch.move(200)


// Outra possibilidade incrível da sobrescrita de métodos é utilizar de forma genérica objetos que obedeem a mesma interface:

function start(vehicle) {
    console.log('Iniciando um veículo...')
    vehicle.move()
}

start(delarean)
start(blackPearl)
start(epoch)