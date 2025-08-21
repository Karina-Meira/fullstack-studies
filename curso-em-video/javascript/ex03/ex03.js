function carregar() {
    const now = new Date(); 
    const time = now.getHours();
    let timeNow = document.querySelector('#time')
    timeNow.innerHTML = `Agora são ${time} horas`
    
    let color = document.querySelector('body')
    let img = document.querySelector('#imagem')

    if (time < 12) {
        color.style.background = 'rgb(190, 230, 83)'
        img.src = 'imagens/manha.jpeg'
    } else if (time > 12 && time <= 18) {
        color.style.background = 'rgb(201, 135, 60)'
        img.src = 'imagens/tarde.jpeg'
    } else {
        color.style.background = 'rgb(79, 83, 83)'
        img.src = 'imagens/noite.jpeg'
    }
}


