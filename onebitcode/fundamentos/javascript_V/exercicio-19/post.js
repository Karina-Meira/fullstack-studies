const Comment = require('./comment')

class Post {
    constructor(title, body, author) {
        this.title = title
        this.body = body
        this.author = author // referencia ao autor do post
        this.comments = [] // começa sem comentários
        this.createdAt = new Date()
    }

    addComment(text, authorName) {
        const comment = new Comment(text, authorName)
        this.comments.push(comment)
        return comment
    }
}

module.exports = Post

// Ao criar um post, precisa de um título, um conteúdo e um autor
// this.title -> salva o título
// this.body -> salava o conteúdo
// this.author -> guarda quem escreveu o post
// this.comments -> cria um array vazio porque o post começa sem comentários
// metodo addComment serve para adicionar comentários
// ele cria um nvo comentario com o texto e autor
// coloca esse comentário dentro do array this.comments
// resultado: um post guarda todas as informações básicas e pode acumular vários comentários 