const Installment = require("./Installment")

class Loan {
    static #rate = 1.05

    constructor(loanAmount, loanInstallments) {
        this.loanAmount = loanAmount
        this.loanInstallments = []
        for (let i = 0; i < loanInstallments; i++) {
            this.loanInstallments.push(new Installment((loanAmount * Loan.#rate) / loanInstallments, i + 1)) 
        }
        this.createdAt = new Date()
    }

    static get rate() {
        return Loan.#rate
    }

    set rate(newRate) {
        Loan.#rate = 1 + (newRate / 100)
    }   
}

module.exports = Loan

// A classe `Loan` representa um empréstimo bancário, contendo informações sobre o valor do empréstimo, o número de parcelas, a taxa de juros e a data em que foi realizado. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe também possui acessadores `get` e `set` para a propriedade `rate`, permitindo obter e definir a taxa de juros com validação para garantir que não seja negativa.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.