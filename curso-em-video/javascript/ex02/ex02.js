function nacionalidade() {
    var n = document.querySelector('#pais').value
    var r = document.querySelector('#resposta')
    r.innerHTML = `Você nasceu no(a) ${n}!`

    if (n != 'Brasil') {
        r.innerHTML += '<p>Você é ESTRANGEIRO(A)!</p>'
    } else {
        r.innerHTML += '<p> Você é BRASILEIRO(A)!</P>'
    }
}
    