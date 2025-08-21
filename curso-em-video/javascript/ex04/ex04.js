function verificar(){
    let nasc = Number(document.querySelector('#born').value)
    let sexo = document.querySelector('input[name="sexo"]:checked').value
    let res = document.querySelector('#info')
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - nasc
    let img = document.querySelector('#foto')

    if (sexo === 'm' && idade < 15){
        res.innerHTML = `Detectamos menino com ${idade} anos`
        img.src = 'menino.jpeg'
    } else if (sexo === 'f' && idade < 15) {
        res.innerHTML = `Detectamos menina com ${idade} anos`
        img.src = 'menina.jpeg'
    } else if (sexo === 'm' && idade >= 18 && idade < 25) {
        res.innerHTML = `Detectamos jovem masculino com ${idade}`
        img.src = 'homem-jovem.jpeg'
    } else if (sexo === 'f' && idade >= 18 && idade < 25) {
        res.innerHTML = `Detectamos jovem feminina com ${idade}`
        img.src = 'jovem-mulher.jpeg'
    } else if (sexo === 'm' && idade >=26 && idade < 50) {
        res.innerHTML = `Detectamos homem com ${idade}`
        img.src = 'homem.jpeg'
    } else if (sexo === 'f' && idade >=26 && idade < 50) {
        res.innerHTML = `Detectamos mulher com ${idade}`
        img.src = 'mulher.jpeg'
    } else if (sexo === 'm' && idade >= 50) {
        res.innerHTML = `Detectamos idoso com ${idade}`
        img.src = 'idoso-homem.jpeg'
    } else if (sexo === 'f' && idade >= 50) {
        res.innerHTML = `Detectamos idosa com ${idade}`
        img.src = 'idosa-homem.jpeg'
    } else {
        window.alert('Tente novamente...')
    }
}