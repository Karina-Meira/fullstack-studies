class Comment {
    constructor(text, authorName) {
        this.text = text
        this.authorName = authorName
        this.createdAt = new Date()
    }
}

module.exports = Comment

// toda vez que cria um novo comentário precisa passar o texto e o nome de quem comentou
// this. text -> salva o texto no objeto
// this. authorName -> salva o autor no objeto
// this.createdAt -> salda a data e hora em que o comentário foi criado
// resultado: cada comentário é um objeto independente, guada quem comentou, o que escreveu e quando