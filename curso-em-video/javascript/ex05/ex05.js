function contar() {
    let i = Number(document.querySelector('#inicio').value)
    let f = Number(document.querySelector('#fim').value)
    let p = Number(document.querySelector('#passo').value)
    let resp = document.querySelector('#info')

    // Validação de campos vazios
    if (document.querySelector('#inicio').value.length == 0 || document.querySelector('#fim').value.length == 0 || document.querySelector('#passo').value.length == 0) {
        resp.innerHTML = '[ERRO] Faltam dados!'
    } else {
        resp.innerHTML = 'Contando: <br>'
        // Validção se o passo for = 0
        if (p <= 0) {
            alert('Passo inválido! Considerando passo = 1')
            p = 1
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resp.innerHTML += `-> ${c}`
            }
        } else {
            // Contagem descresente
            for (let c = i; c >= f; c -= p) {
                resp.innerHTML += `-> ${c}`
            }
        }
    }  
}