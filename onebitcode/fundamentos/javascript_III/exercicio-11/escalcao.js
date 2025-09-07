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
    const escalacao = document.getElementById('escalacao')

    const confirmacao = confirm(
        `Tem certeza que quer excluir esse jogador?
        Jogador: ${namePlayer}
        Número: ${numberPlayer}
        Posição: ${positionPlayer}`
    )

    const players = document.getElementsByTagName('ul')

    escalacao.removeChild(players[players.length - 1])
}

/*
        const ul = document.createElement('ul')
    
        const nameLi = document.createElement('li')
        nameLi.innerText = `Jogador ${namePlayer}`
        const numberLi = document.createElement('li')
        numberLi.innerText = `Número ${numberPlayer} `
        const position = document.createElement('li')
        position.innerText = `Posição => ${positionPlayer}`
        ul.appendChild(nameLi)
        ul.appendChild(numberLi)
        ul.appendChild(position)

        escalacao.append(ul)   
        
        namePlayer.value = ''
        numberPlayer.value = ''
        positionPlayer.value = ''
        */