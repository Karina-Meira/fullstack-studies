let lista = []
let opcao = ''

do {
    let pacientes = ''
    for(let i = 0; i < lista.length; i++) {
        pacientes += (i + 1) + 'º - ' + lista[i] + '\n'
    }

    opcao = prompt(`Lista de espera:\n${pacientes}\nEscolha uma opção:\n1 - Novo Paciente\n2 - Consultar Paciente\n3 - Sair`)

    switch(opcao) {
        case '1':
            let novoPaciente = prompt('Informe o nome do paciente')
            lista.push(novoPaciente)
            break
        case '2':
            let pacienteCosultado = lista.shift()
            if(!pacienteCosultado) {
                alert('Não há pacientes na fila!')
            }else {
                alert(`${pacienteCosultado} consultou`)   
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção inválida!')
    }
} while(opcao !== '3')
