let word = prompt('Digite uma palavra:')
let invertida = ''

for(let i = word.length - 1; i >= 0; i--) {
    invertida += word[i] 
}

if(word === invertida) {
    alert('É um PALINDROMO')
} else {
    alert(`${word} != ${invertida}\nNão é um PALINDROMO`)
}
