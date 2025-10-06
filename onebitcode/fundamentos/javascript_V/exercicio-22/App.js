const User = require("./User")
const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

class App {
    static #user =  []

    static findUserByEmail(email) {
        const user = this.#user.find(user => user.email === email)
        return user ?? null
    }

    static addUser(email, name) {
        const userAlreadyExists = App.findUserByEmail(email)
        if (!userAlreadyExists) {
            this.#user.push(new User(email, name ))
        }
    }

    static deposit(email, amount) {
        const user = App.findUserByEmail(email)
        if (user) {
            const deposit = new Deposit(amount)
            user.accountNumber.newDeposit(deposit)
        }
    }

    static transfer(emailFrom, emailTo, amount) {
        const userFrom = App.findUserByEmail(emailFrom)
        const userTo = App.findUserByEmail(emailTo)
        if (userFrom && userTo) {
            const transfer = new Transfer(userFrom, userTo, amount)
            userFrom.accountNumber.newTransfer(transfer)
            userTo.accountNumber.newTransfer(transfer)
        }
    }

    static takeLoan(email, amount, numberOfInstallments) {
        const user = App.findUserByEmail(email)
        if (user) {
            const loan = new Loan(amount, numberOfInstallments)
            user.accountNumber.newLoan(loan)
        }
    }

    static changeLoanInterestRate(newInterestRate) {
        Loan.interestRate = newInterestRate
    }
}

module.exports = App

// A classe `App` é a classe principal do aplicativo bancário, responsável por gerenciar os usuários e suas contas. Ela possui métodos estáticos para adicionar novos usuários, realizar depósitos, transferências e empréstimos, além de alterar a taxa de juros dos empréstimos. A classe mantém uma lista privada de usuários e fornece funcionalidades para interagir com as contas bancárias associadas a esses usuários.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.

