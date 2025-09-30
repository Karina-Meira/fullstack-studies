// Para definir um atributo privado precisamos declara-lo fora do construtor e utilizando um # no começo do seu nome. Para definir um método privado o procedimento é o mesmo, pois os métodos ja são escritos fora do construtor normalmente. Todos os atributos e métods que não possuirem um # no começo do nome serão automaticamente públicos:

class Account {
    #password
    #balance

    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    #authenticate(email, password) {
        return this.email === email && this.#password === password
    }

    getBalance(email, password) {
        if(this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }
}

// Fora da classe podemos acessar apenas o atributi email e o método getBalance(), tentar acessar #password, #balance ou #authenticate() gerará um erro:

const user = {
    email: 'user@email.com',
    password: '123456'
}

const userAccount = new Account(user)

console.log(userAccount)
// console.log(userAccount.#password) // gera erro
// console.log(userAccount.#balance) // gera erro
// console.log(userAccount.#authenticate()) // gera erro
console.log(userAccount.getBalance('user@email.com', '123456'))
console.log(userAccount.getBalance('user@email.com', '000156'))