let num = document.querySelector('#num')
let nAdd = document.querySelector('#num-add')
let res = document.querySelector('#info')
let valoresAdd = []

function adicionar() {    
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        alert('Valor inválido, digite novamente!')
    } else {
        let n = Number(num.value)
        if (valoresAdd.includes(n)) {
            alert('Esse número já foi adicionado!')
        } else {
            valoresAdd.push(n)

            nAdd.innerHTML = ''
            for (let i = 0; i < valoresAdd.length; i++) {
                let item = document.createElement('option')
                item.text = `Valor ${valoresAdd[i]} adicionado`
                nAdd.appendChild(item)
            }
        }
    }

    num.value = '' // Limpa o input
    num.focus() // foca novamento o cursor no input
}

function finalizar() {
    if (valoresAdd.length === 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tam = valoresAdd.length
        let maior = valoresAdd[0]
        let menor = valoresAdd[0]
        let soma = 0
        let media = 0

        for (let pos in valoresAdd) {
            soma += valoresAdd[pos]
            if (valoresAdd[pos] > maior)
                maior = valoresAdd[pos]
            if (valoresAdd[pos] < menor)
                menor = valoresAdd[pos]
        }
        media = soma / tam
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tam} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}.</p>`
    }
}