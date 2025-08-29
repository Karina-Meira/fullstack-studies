let num = parseFloat(prompt('Informe um número:'))
let tab = ''

for(let i = 0; i <= 20; i++) {
    let res = num * i
    tab += `${num} x ${i} = `+ res + '\n'
}

alert(`Tabuada do ${num}\n ${tab}`)