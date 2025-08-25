function contar() {
    let i = Number(document.querySelector('#inicio').value)
    let f = Number(document.querySelector('#fim').value)
    let p = Number(document.querySelector('#passo').value)
    let resp = document.querySelector('#info')

    for (i; i < f; i = i++) {
        resp.innerHTML = i


    
    resp.innerHTML = ("Fim!")
}