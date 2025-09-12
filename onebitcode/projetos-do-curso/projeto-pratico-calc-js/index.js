// Seleciona os elementos principais da página
const main = document.querySelector("main")      // Pega a tag <main>, onde guardamos info do tema
const root = document.querySelector(":root")     // Pega o elemento raiz (html), onde estão as variáveis CSS
const input = document.getElementById("input")   // Campo onde digitamos a conta
const resultInput = document.getElementById("result") // Campo onde aparece o resultado

// Lista de teclas permitidas (evita que o usuário digite letras, por exemplo)
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// Para cada botão da calculadora que tem a classe .charKey (números e operadores)
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {  // Quando o botão é clicado
    const value = charKeyBtn.dataset.value   // Pega o valor armazenado no atributo data-value do botão
    input.value += value                     // Adiciona esse valor no campo de entrada
  })
})

// Botão "C" (clear) para limpar a conta
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""     // Apaga tudo do input
  input.focus()        // Mantém o cursor no campo de entrada
})

// Captura as teclas digitadas no teclado físico
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()  // Bloqueia a ação padrão da tecla

  if (allowedKeys.includes(ev.key)) {   // Se a tecla está na lista de permitidas
    input.value += ev.key               // Adiciona ao input
    return                              // Sai da função aqui
  }

  if (ev.key === "Backspace") {         // Se for "Backspace"
    input.value = input.value.slice(0, -1) // Apaga o último caractere
  }

  if (ev.key === "Enter") {             // Se for "Enter"
    calculate()                         // Chama a função para calcular
  }
})

// Botão "=" também calcula a conta
document.getElementById("equal").addEventListener("click", calculate)

// Função para calcular a expressão digitada
function calculate() {
  resultInput.value = "ERROR"            // Define "ERROR" como padrão antes de calcular
  resultInput.classList.add("error")     // Adiciona uma classe de erro (visual no CSS)

  const result = eval(input.value)       // Usa eval() para calcular o que está no input
  resultInput.value = result             // Mostra o resultado no campo de saída
  resultInput.classList.remove("error")  // Remove a classe de erro se deu certo
}

// Botão para copiar o resultado
document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
  const button = ev.currentTarget  // Pega o botão clicado

  if (button.innerText === "Copy") {   // Se o texto do botão for "Copy"
    button.innerText = "Copied!"       // Muda para "Copied!"
    button.classList.add("success")    // Adiciona estilo de sucesso (verde, provavelmente)
    navigator.clipboard.writeText(resultInput.value) // Copia o resultado para a área de transferência
  } else {                             // Se já estava "Copied!"
    button.innerText = "Copy"          // Volta o texto para "Copy"
    button.classList.remove("success") // Remove a classe de sucesso
  }
})

// Botão para alternar o tema (claro/escuro)
document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {        // Se o tema atual for "dark"
    // Define cores para o tema claro
    root.style.setProperty("--bg-color", "#f1f5f9")
    root.style.setProperty("--border-color", "#aaa")
    root.style.setProperty("--font-color", "#212529")
    root.style.setProperty("--primary-color", "#26834a")
    main.dataset.theme = "light"              // Atualiza para "light"
  } else {                                    // Caso contrário (se for "light")
    // Define cores para o tema escuro
    root.style.setProperty("--bg-color", "#212529")
    root.style.setProperty("--border-color", "#666")
    root.style.setProperty("--font-color", "#f1f5f9")
    root.style.setProperty("--primary-color", "#4dff91")
    main.dataset.theme = "dark"               // Atualiza para "dark"
  }
})
