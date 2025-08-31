let opcao = ''
let baralho = []

do {
    opcao = prompt(`Número de cartas no baralho: ${baralho.length}\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair`)
    switch(opcao) {
        case '1':
            let carta = prompt('Qual o nome da carta?')
            baralho.unshift(carta)
            break
        case '2':
            let cartaPuxada = baralho.pop()
            if(!cartaPuxada) {
                alert('Nenhuma carta no baralho!')
            }else{
                alert(`Carta puxada: ${cartaPuxada}`)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while(opcao !== '3')