let money = parseFloat(prompt(('Digite a quantidade de dinheiro que você possui:')))
let option = ''

do {
    option = prompt(`Valor inicial: R$${money}\n Escolha uma das seguintes opções:\n1 - Adicionar dinheiro\n2 - Remover dinheiro\n3 - Sair`)

    switch(option) {
        case '1':
            moneyAdd = parseFloat(prompt('Digite o valor a ser adicionado:'))
            money += moneyAdd
            alert(`R$${moneyAdd} adicionado com sucesso!`)
            break
        case '2':
            moneyRem = parseFloat(prompt('Digire o valor a ser removido:'))
            money -= moneyRem
            alert(`R$${moneyRem} removido com sucesso!`)
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while(option !== '3')


