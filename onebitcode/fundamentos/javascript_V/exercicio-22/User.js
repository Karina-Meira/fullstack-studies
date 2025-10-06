const Account = require("./Account")

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
        this.accountNumber = new Account(this)
    } 
}

module.exports = User

// A classe `User` representa um usuário bancário, contendo informações sobre o nome, email e número da conta do usuário. Ela possui um construtor que inicializa essas propriedades quando uma nova instância da classe é criada.
// A classe é exportada para que possa ser utilizada em outros módulos ou arquivos do projeto.


