function tabuada() {
    let number = Number(document.querySelector('#num').value)
    let tab = document.querySelector('#tabuada')

    if (number === 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = '' 

        for (let c = 0; c <= 10; c++) {
        let item = document.createElement('option')
        item.text = `${number} x ${c} = ${number * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        }
    }
}