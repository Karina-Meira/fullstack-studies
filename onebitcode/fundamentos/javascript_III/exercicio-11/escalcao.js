 let lista = []

function escalar() {
    const namePlayer = document.getElementById('name-player').value
    const numberPlayer = Number(document.getElementById('number-player').value)
    const positionPlayer = document.getElementById('position').value
    const escalacao = document.getElementById('escalacao')

    const confirmacao = confirm(
        `Você confirma a escalação desse jogador?
        Jogador: ${namePlayer}
        Número: ${numberPlayer}
        Posição: ${positionPlayer}`
    )

    if (confirmacao) {
        const jogador = {
            nome: namePlayer,
            numero: numberPlayer,
            posicao: positionPlayer
        }

        lista.push(jogador)

        escalacao.innerHTML = lista.map(j => `<p>Jogador: ${j.nome}, Número: ${j.numero}, Posição: ${j.posicao}</p>`).join('') 

        document.getElementById('name-player').value = ''
        document.getElementById('number-player').value = ''
        positionPlayer = document.getElementById('position').value = ''
    }
}

function remover() {
    const numberShirt = Number(document.getElementById('number-shirt').value)
    const escalacao = document.getElementById('escalacao')

    const indiceRemove = lista.findIndex(n => n.numero === numberShirt)
    
    if(indiceRemove !== -1) {
        const player = lista[indiceRemove]

        confirmacao = confirm(
        `Tem certeza que quer excluir esse jogador?
        Jogador: ${player.nome}
        Número: ${player.numero}
        Posição: ${player.posicao}`
    )
        if(confirmacao) {
            lista.splice(indiceRemove, 1)

            escalacao.innerHTML = lista
            .map(j => `<p>Jogador: ${j.nome}, Número: ${j.numero}, Posição: ${j.posicao}</p>`)
            .join('')

        document.getElementById('number-shirt').value = ''
        }    
    } else {
        alert('Jogador não encontrado!')
    }
}

