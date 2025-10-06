class Installment {
    constructor(installmentValue, number) {
        this.installmentValue = installmentValue
        this.number = number
        this.paid = 'pending'
    }
}

module.exports = Installment

// A classe `Installment` representa uma parcela de um empréstimo, contendo informações sobre o valor da parcela, o número da parcela e se a parcela foi paga ou não. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.
