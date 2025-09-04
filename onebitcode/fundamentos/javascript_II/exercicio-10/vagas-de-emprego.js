let vagas = []

function vagasDisponiveis(vaga, indice) {
    alert(
        `Índice: ${indice}
        Nome da vaga: ${vaga.nome}
        Quantidade de candidatos inscritos: ${vaga.candidatos.length}`
    )
}

function criarVaga() {
    let vaga = {}  // cria um novo objeto para cada vaga

    vaga.nome = prompt('Informe o nome da vaga')
    vaga.descricao = prompt('Adicione uma descrição para a vaga')
    vaga.data = prompt('Informe uma data limite para se inscrever na vaga')
    vaga.candidatos = []  // inicia como array vazio

    let confirmacao = confirm(
        `Você confirma as informações a seguir:
        Nome da vaga: ${vaga.nome}
        Descrição da vaga: ${vaga.descricao}
        Data limite: ${vaga.data}`
    )

    if (confirmacao) {
        alert('Vaga cadastrada com sucesso!')
        vagas.push(vaga)
    }
}

function vizualizarVaga() {
    let indice = prompt('Informe o índice da vaga que deseja visualizar:')
    indice = parseInt(indice)

    if (indice >= 0 && indice < vagas.length) {
        let vaga = vagas[indice]
        alert(
            `Vaga: ${vaga.nome}
            Descrição: ${vaga.descricao}
            Data limite: ${vaga.data}
            Quantidade de candidatos: ${vaga.candidatos.length}
            Candidatos: ${vaga.candidatos.join(", ")}`
        )
    } else {
        alert('Índice inválido!')
    }
}

function inscreverCandidato() {
    let indice = prompt('Informe o índice da vaga para inscrição:')
    indice = parseInt(indice)

    if (indice >= 0 && indice < vagas.length) {
        let candidato = prompt('Informe o nome do candidato:')
        vagas[indice].candidatos.push(candidato)

        alert(`Candidato ${candidato} inscrito com sucesso na vaga "${vagas[indice].nome}"!`)
    } else {
        alert('Índice inválido!')
    }
}

function excluirVaga() {
    let indice = prompt('Informe o índice da vaga que deseja excluir:')
    indice = parseInt(indice)

    if (indice >= 0 && indice < vagas.length) {
        let vaga = vagas[indice]
        let confirmacao = confirm(`Tem certeza que deseja excluir a vaga "${vaga.nome}"?`)

        if (confirmacao) {
            vagas.splice(indice, 1)
            alert('Vaga excluída com sucesso!')
        }
    } else {
        alert('Índice inválido!')
    }
}

function executar() {
    let opcao = ''

    do {
        opcao = prompt(
            `SISTEMA DE VAGAS DE EMPREGO
            Escolha uma das opções a seguir:
            1 - Listar vagas disponíveis
            2 - Criar uma nova vaga
            3 - Visualizar uma vaga
            4 - Inscrever um candidato em uma vaga
            5 - Excluir uma vaga
            6 - Sair`
        )

        switch (opcao) {
            case '1':
                vagas.forEach(vagasDisponiveis)
                break

            case '2':
                criarVaga()
                break

            case '3':
                vizualizarVaga()
                break

            case '4':
                inscreverCandidato()
                break

            case '5':
                excluirVaga()
                break

            case '6':
                alert('Saindo!')
                break

            default:
                alert('Opção inválida. Tente novamente!')
        }
    } while (opcao !== '6')
}

executar()