// --- Função responsável por criar e exibir um artigo na página ---
function renderArticle(articleData) {
  // Cria um elemento <article> no DOM (representa um artigo completo)
  const article = document.createElement('article')

  // Adiciona a classe CSS "article" para aplicar estilos
  article.classList.add('article')

  // Define um ID único baseado no ID do artigo recebido (ex: "article-1")
  article.id = `article-${articleData.id}`

  // Cria um título <h3> para o artigo
  const title = document.createElement('h3')
  title.classList.add('article-title')
  // Define o texto do título com base nos dados recebidos
  title.textContent = articleData.title

  // Cria uma div para o conteúdo do artigo
  const content = document.createElement('div')
  content.classList.add('article-content')
  // Insere o conteúdo (pode conter HTML, por isso usamos innerHTML)
  content.innerHTML = articleData.content

  // Cria uma div para mostrar o nome do autor
  const author = document.createElement('div')
  author.classList.add('article-author')
  author.textContent = articleData.author

  // Junta título, autor e conteúdo dentro do elemento <article>
  article.append(title, author, content)

  // Seleciona o contêiner principal (onde ficam todos os artigos) e adiciona o novo artigo nele
  document.querySelector('#articles').appendChild(article)
}



// --- Função responsável por buscar todos os artigos do servidor ---
async function fetchArticles() {
  // Faz uma requisição HTTP GET para o servidor local na rota /articles
  const articles = await fetch("http://localhost:3000/articles")
    // Converte a resposta (res) para JSON (lista de artigos)
    .then(res => res.json())

  // Para cada artigo retornado, chama renderArticle() para exibir na tela
  articles.forEach(renderArticle)
}



// --- Evento que dispara quando o DOM é completamente carregado ---
document.addEventListener('DOMContentLoaded', () => {
  // Assim que a página estiver pronta, busca os artigos existentes
  fetchArticles()
})



// --- Seleciona o formulário no HTML ---
const form = document.querySelector('form')



// --- Adiciona um evento que será disparado quando o formulário for enviado ---
form.addEventListener('submit', async (ev) => {
  // Impede o comportamento padrão do formulário (recarregar a página)
  ev.preventDefault()

  // Cria um objeto com os dados digitados pelo usuário nos campos do formulário
  const articleData = {
    title: document.querySelector('#title').value,   // Valor do campo de título
    author: document.querySelector('#author').value, // Valor do campo de autor
    content: document.querySelector('#content').value // Valor do campo de conteúdo
  }

  // Envia os dados para o servidor com o método HTTP POST
  const response = await fetch('http://localhost:3000/articles', {
    method: 'POST', // Cria um novo recurso no servidor
    headers: {
      'Content-Type': 'application/json' // Diz que está enviando JSON
    },
    body: JSON.stringify(articleData) // Converte o objeto JS para JSON antes de enviar
  })

  // Aguarda o servidor responder com o artigo salvo (incluindo o ID gerado)
  const savedArticle = await response.json()

  // Limpa os campos do formulário após o envio bem-sucedido
  form.reset()

  // Exibe o novo artigo na tela imediatamente (sem precisar recarregar)
  renderArticle(savedArticle)

  // Exibe no console o objeto retornado pelo servidor (para fins de debug)
  console.log(savedArticle)
})
