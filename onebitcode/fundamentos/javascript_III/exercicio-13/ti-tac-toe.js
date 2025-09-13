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
