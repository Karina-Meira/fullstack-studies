function verificar(){
    let nasc = Number(document.querySelector('#born').value)
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked').value
    let res = document.querySelector('#info')
    let anoAtual = new Date().getFullYear()


    //validação
    if (!nasc || !sexoSelecionado || nasc > anoAtual) {
        window.alert('Por favor, preencha os dados corretamente.')
        return
    }

    let idade = anoAtual - nasc;

    let descricao = '';
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (idade < 15) {
        if (sexoSelecionado === 'm') {
            descricao = 'menino'
            img.setAttribute('src', 'menino.jpeg')
        } else {
            descricao = 'menina'
            img.setAttribute('src', 'menina.jpeg')
        }
    } else if (idade < 25) {
        if (sexoSelecionado == 'm') {
            descricao = 'jovem masculino'
            img.setAttribute('src', 'homem-jovem.jpeg')
        } else {
            descricao = 'jovem feminina'
            img.setAttribute('src', 'jovem-mulher.jpeg')
        }
    } else if (idade < 50) {
        if (sexoSelecionado === 'm') {
            descricao = 'homem'
            img.setAttribute('src', 'homem.jpeg')
        } else {
            descricao = 'mulher'
            img.setAttribute('src', 'mulher.jpeg')
        }
    } else {
        if (sexoSelecionado === 'm') {
            descricao = 'idoso'
            img.setAttribute('src', 'idoso-.jpeg')
        } else {
            descricao = 'idosa'
            img.setAttribute('src', 'idosa-mulher.jpeg')
        }
    }

    res.innerHTML = `Detectamos ${descricao} com ${idade} anos`
    res.appendChild(img)
}