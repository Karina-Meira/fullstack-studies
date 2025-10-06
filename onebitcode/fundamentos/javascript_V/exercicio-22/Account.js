class Account {
    #amount
    constructor(AccountUser) {
        this.owner = AccountUser
        this.#amount = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get amount() {
        return this.#amount
    }

    newDeposit(deposit) {
        this.#amount += deposit.amount
        this.deposits.push(deposit)
    }

    newLoan(loan) {
        this.#amount += loan.loanAmount
        this.loans.push(loan)
    }

    newTransfer(transfer) {
        if (transfer.userTo.email === this.owner.email) {
            this.#amount += transfer.amount
            this.transfers.push(transfer)
        } else if (transfer.userFrom.email === this.owner.email){
            this.#amount -= transfer.amount
            this.transfers.push(transfer)
        }
    }
}

module.exports = Account

// A classe `Account` representa uma conta bancária, contendo informações sobre o saldo da conta, o usuário associado à conta e listas de depósitos, empréstimos e transferências realizadas. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe também possui métodos para adicionar novos depósitos, empréstimos e transferências à conta, atualizando o saldo da conta conforme necessário.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.