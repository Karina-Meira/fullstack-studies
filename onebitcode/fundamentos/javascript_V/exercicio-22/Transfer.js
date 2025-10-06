class Transfer {
    constructor(userFrom, userTo, amount) {
        this.userFrom = userFrom
        this.userTo = userTo
        this.amount = amount
        this.createdAt = new Date()
    }
}

module.exports = Transfer

// A classe `Transfer` representa uma transferência bancária entre dois usuários, contendo informações sobre o remetente, o destinatário, o valor da transferência e a data em que foi realizada. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.