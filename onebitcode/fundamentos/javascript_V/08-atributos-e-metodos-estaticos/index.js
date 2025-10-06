// Para usarmos os atributos e métodos estáticos, precisamos utilizar a palavra reservada static antes do atributo ou método que queremos tornar estático. Atributos e métodos estáticos são associados à classe em si, e não às instâncias da classe. Isso significa que eles podem ser acessados diretamente pela classe, sem a necessidade de criar uma instância.

class Matematica {
    static PI = 3.1415926535897932384626433832795 // Atributo estático

    static areaCirc(raio) { // Método estático
        return this.PI * raio * raio
    }
}

console.log(Matematica.PI) // Acessando o atributo estático diretamente pela classe
console.log(Matematica.areaCirc(10)) // Acessando o método estático diretamente pela classe

// Vale lembrar que dentro de métodos estáticos, o this se refere à própria classe, e não a uma instância específica. Portanto, podemos acessar outros atributos e métodos estáticos usando this.

// Atributos e métodos estáticos são úteis para definir propriedades e comportamentos que são comuns a todas as instâncias de uma classe, ou que não dependem de dados específicos de uma instância. Eles são frequentemente usados para utilitários, constantes, ou funções que não precisam de acesso a dados de instância. 

// Em resumo, atributos e métodos estáticos em JavaScript são associados à classe em si, e não às instâncias da classe. Eles podem ser acessados diretamente pela classe, sem a necessidade de criar uma instância, e são úteis para definir propriedades e comportamentos comuns a todas as instâncias ou que não dependem de dados específicos de uma instância.

class ConversorTemperatura {
    static celsiusParaFahrenheit(celsius) {
        return (celsius * 9/5) + 32
    }
    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9
    }
}

console.log(ConversorTemperatura.celsiusParaFahrenheit(30)) // Saída: 86
console.log(ConversorTemperatura.fahrenheitParaCelsius(86)) // Saída: 30

// Podemos também usar atributos estáticos para definir constantes que são usadas em cálculos ou operações dentro da classe. Aqui está um exemplo de uma classe que usa um atributo estático para armazenar a taxa de conversão entre Celsius e Fahrenheit:

class ConversorTemperaturaComConstante {
    static FATOR_CONVERSAO = 9/5
    static AJUSTE = 32
    static celsiusParaFahrenheit(celsius) {
        return (celsius * this.FATOR_CONVERSAO) + this.AJUSTE
    }
    static fahrenheitParaCelsius(fahrenheit) {
        return (fahrenheit - this.AJUSTE) / this.FATOR_CONVERSAO
    }
}

// neste exemplo temos uma classe `ConversorTemperaturaComConstante` que define dois atributos estáticos, `FATOR_CONVERSAO` e `AJUSTE`, para armazenar os valores usados nas fórmulas de conversão. Os métodos estáticos `celsiusParaFahrenheit` e `fahrenheitParaCelsius` utilizam esses atributos para realizar as conversões.

console.log(ConversorTemperaturaComConstante.celsiusParaFahrenheit(30)) // Saída: 86
console.log(ConversorTemperaturaComConstante.fahrenheitParaCelsius(86)) // Saída: 30

// Usar atributos e métodos estáticos pode ajudar a organizar o código e evitar a duplicação de valores ou lógica em diferentes partes do programa. Eles também podem melhorar a legibilidade do código, deixando claro que certos valores ou comportamentos são compartilhados entre todas as instâncias da classe.


class Reservation {
    constructor(guests, room, days) {
        this.guests = guests
        this.room = room
        this.days = days
        this.total = days * Reservation.baseFee
    }

    static baseFee = 150 // Atributo estático

    static showBaseFee() { // Método estático
        console.log(`Base fee is ${Reservation.baseFee} per day.`)
    }
}

Reservation.showBaseFee() // Acessando o método estático diretamente pela classe
const reservation1 = new Reservation(2, '101', 3)
console.log(reservation1.total) // Saída: 450

Reservation.baseFee = 200 // Modificando o atributo estático
Reservation.showBaseFee() // Acessando o método estático diretamente pela classe
const reservation2 = new Reservation(2, '102', 3)
console.log(reservation2.total) // Saída: 600

// Neste exemplo, a classe `Reservation` possui um atributo estático `baseFee` que define a taxa base por dia para uma reserva. O método estático `showBaseFee` exibe essa taxa. Quando criamos instâncias da classe `Reservation`, o total da reserva é calculado com base na taxa atual definida no atributo estático `baseFee`. Ao modificar o valor de `baseFee`, todas as novas reservas usarão a nova taxa, demonstrando como os atributos estáticos podem ser úteis para definir valores compartilhados entre todas as instâncias de uma classe.

// Em resumo, atributos e métodos estáticos em JavaScript são associados à classe em si, e não às instâncias da classe. Eles podem ser acessados diretamente pela classe, sem a necessidade de criar uma instância, e são úteis para definir propriedades e comportamentos comuns a todas as instâncias ou que não dependem de dados específicos de uma instância.


