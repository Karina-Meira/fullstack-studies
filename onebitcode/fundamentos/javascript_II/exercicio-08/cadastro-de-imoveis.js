let options = ''
const listaImoveis = []


do {
    options = prompt(
        `CADASTRO DE IMÓVEIS
        Total de imóveis cadastrados: ${listaImoveis.length}
        1 - Salvar um imóvel
        2 - Mostrar todos os imóveis
        3 - Sair`
    )

    switch(options) {
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Informe o nome do proprietário do imóvel:')
            imovel.quartos = prompt('Informe o número de quartos do imóvel:')
            imovel.banheiros = prompt('Informe a quantidade de banheiros do imóvel:')
            imovel.garagem = prompt('Informe se o imóvel possui garagem [Sim/Não]:')

            listaImoveis.push(imovel)

            alert('Imóvel cadastrado com sucesso!')
            break

        case '2':
            if (listaImoveis.length === 0) {
                alert('Não há imóveis cadastrados!')
            } else {
                for (let i = 0; i < listaImoveis.length; i++) {
                    alert(`Imóvel ${i + 1}
                        Proprietário: ${listaImoveis[i].proprietario}
                        Número de quartos: ${listaImoveis[i].quartos}
                        Número de banheiros: ${listaImoveis[i].banheiros}
                        Garagem: ${listaImoveis[i].garagem}`)
                }
            }
            break

        case '3':
            alert('Saindo...')
            break
            
        default:
            alert('Opção inválida. Tente novamente!')
    }
} while(options !=='3')