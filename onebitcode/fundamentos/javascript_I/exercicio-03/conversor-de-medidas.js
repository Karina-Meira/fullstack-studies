let meters = parseFloat(prompt('Digite um valor em metros:'))
let option = prompt('Para qual medida você quer converter?\n 1 - milímetro (mm)\n 2 - centímetro (cm)\n 3 - decímetro (dm)\n 4 - decâmetro (dam)\n 5 - hectômetro (hm)\n 6 - quilômetro (km)' )

switch(option) {
    case '1':
        alert(`${meters} metros = ${meters * 1000} milímetros`)
        break
    case '2':
        alert(`${meters} metros = ${meters * 100} centímetros`)
        break
    case '3':
        alert(`${meters} metros = ${meters * 10} decímetros`)
        break
    case '4':
        alert(`${meters} metros = ${meters / 10} decâmetros`)
        break
    case '5':
        alert(`${meters} metros = ${meters / 100} hectômetros`)
        break
    case '6':
        alert(`${meters} metros = ${meters / 1000} quilômetros`)
        break
    default:
        alert('Opção inválida!')
}