class Deposit {
    constructor(amount) {
        this.amount = amount
        this.createdAt = new Date()
    }
}

module.exports = Deposit

// A classe `Deposit` representa um depósito bancário, contendo informações sobre o valor do depósito e a data em que foi realizado. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.
