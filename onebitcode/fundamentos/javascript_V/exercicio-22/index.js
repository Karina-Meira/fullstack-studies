const App = require("./App")

// Exemplo de uso da classe App
App.addUser('Karina Meira', 'karinameira@email.com')
App.addUser('João Silva', 'joao@email.com')
App.deposit('karinameira@email.com', 1000)
App.transfer('karinameira@email.com', 'joao@email.com', 200)

console.log(App.findUserByEmail('karinameira@email.com'))

console.log(App.findUserByEmail('karinameira@email.com').accountNumber)
console.log(App.findUserByEmail('joao@email.com').accountNumber)


// O código acima demonstra o uso da classe `App` para gerenciar usuários e suas contas bancárias. Ele adiciona dois usuários, realiza um depósito na conta de um deles e faz uma transferência entre as duas contas. Em seguida, ele exibe as informações dos usuários e suas respectivas contas no console.

