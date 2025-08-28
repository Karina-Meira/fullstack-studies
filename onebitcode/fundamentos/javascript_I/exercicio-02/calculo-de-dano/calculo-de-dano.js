let personagemAtaque = prompt('Insira o nome do personagem de ataque:')
let poderDeAtaque = parseFloat(prompt('Insira o poder de ataque do personagem:'))
let personagemDefesa = prompt('Insira o nome do personagem de defesa:')
let qtdPontosDeVida = parseFloat(prompt('Insira a quantidade de pontos de vida do personagem de defesa:'))
let poderDeDefesa = parseFloat(prompt('Insira o seu poder de defesa:'))
let escudo = prompt('O defensor possui escudo? [s/n]')

let danoCausado = 0

if (poderDeAtaque <= poderDeDefesa) {
    alert('Nenhum dano causado!')
} else if (poderDeAtaque > poderDeDefesa && escudo === 'n') {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && escudo === 's') {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

qtdPontosDeVida -= danoCausado

alert(
    `${personagemAtaque} causou ${danoCausado} pontos de dano em ${personagemDefesa}\n`
)

alert(
    `${personagemAtaque}\n` +
    `Poder de ataque: ${poderDeAtaque}\n\n` +
    `${personagemDefesa}\n` +
    `Pontos de vida ${qtdPontosDeVida}\n` +
    `Poder de defesa: ${poderDeDefesa}\n` +
    `Possui escudo: ${escudo}\n`
)

