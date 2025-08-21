function calcular() {
    var vel = Number(document.querySelector('#velocidade').value)
    var res = document.querySelector('#resposta')

    res.innerHTML = `<p>Sua velocidade é ${vel} Km/h.</p>`

    if (vel > 60) {
        res.innerHTML += '<p id="multa">Você foi <strong>MULTADO</strong> ultrapassou o limite de velocidade!</p>'
    } else {
        res.style.background = 'lightgreen' 
    }

    res.innerHTML += '<p>Dirija com cuidado!</p>'
    
}