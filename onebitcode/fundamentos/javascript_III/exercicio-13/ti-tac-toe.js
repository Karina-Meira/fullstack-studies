// Varriáveis principais
let board = ['', '', '', '', '', '', '', '', ''] // 9 espaços de tabuleiro
let currentPlayer = 'X' // Começa com X
let players = { X: 'Jogador 1', O: 'Jogador 2' }
let gameActive = false


// Pegar elemetos do HTML
const boardElement = document.getElementById('board')
const turnElement = document.getElementById('turn')
const messageElement = document.getElementById('message')
const startButton = document.getElementById('start') 
const restartButton = document.getElementById('restart')

// Função para iniciar o jogo 
function startGame() {
    // Pegar os nomes dos inputs
    players.X = document.getElementById('player1').value
    players.O = document.getElementById('player2').value

    // resetar tabuleiro
    board = ['', '', '', '', '', '', '', '', '']
    currentPlayer = 'X'
    gameActive = true

    // limpar tabuleiro no HTML
    boardElement.innerHTML = ''
    messageElement.textContent = ''

    // criar as 9 células
    board.forEach((_, i) => {
        const cell = document.createElement('div')
        cell.classList.add('cell')
        cell.dataset.index = i  // guarda o índice da célula
        cell.addEventListener('click', () => handleClick(i, cell))
        boardElement.appendChild(cell)
    })

    // mostrar de quem é a vez
    turnElement.textContent = 'Vez de: ' + players[currentPlayer]
}

// Quando clica em uma célula
function handleClick(index, cell) {
    if (!gameActive || board[index] !== '') 
        return // se ja jogou não faz nada

    // marca X ou O
    board[index] = currentPlayer
    cell.textContent = currentPlayer
    cell.classList.add('taken')

    // verificar vitória
    if (checkWin()) {
        messageElement.textContent = players[currentPlayer] + ' venceu!'
        gameActive = false
        highlightWin()
        return
    }

    // troca jogador
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    turnElement.textContent = 'Vez de : ' + players[currentPlayer]
} 

// Verificar vitória
function checkWin() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6]             // diagonais
    ]
    return wins.some(combo =>
        board[combo[0]] === currentPlayer &&
        board[combo[1]] === currentPlayer &&
        board[combo[2]] === currentPlayer
    )
}



// Destacar casas da vitória
function highlightWin() {
    const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6]             // diagonais
    ]
    wins.forEach(combo => {
        if (
            board[combo[0]] === currentPlayer &&
            board[combo[1]] === currentPlayer &&
            board[combo[2]] === currentPlayer
        ) {
            combo.forEach(i => {
                boardElement.children[i].classList.add('winner')
            })
        }
    })
}

// Reiniciar
function restartGame() {
    startGame()
}

// Evento dos botões
startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', restartGame)