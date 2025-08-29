let menu = ''

do {
    menu = prompt('Escolha uma opção do menu:\n1 - Morango\n2 - Laranja\n3 - Limão\n4 - Banana\n5 - Encerrar')

    switch (menu) {
        case '1':
            alert('Você escolheu MORANGO!')
            break
        case '2':
            alert('Você escolheu LARANJA!')
            break
        case '3':
            alert('Você escolheu LIMÃO!')
            break
        case '4':
            alert('Você escolheu BANANA!')
            break
        case '5':
            alert('Encerrando o programa!')
        default:
            alert('Entrada inválida! Escolha uma das cinco opções.')
    }
    
} while (menu !== '5')