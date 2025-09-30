const Post = require('./post')

class Author {
    constructor(name) {
        this.name = name
        this.posts = [] // começa sem posts
    }
    createPost(title, body) {
        const post = new Post(title, body, this)
        this.posts.push(post)
        return post
    }
}

module.exports = Author

// creatPost -> recebe um título e conteúdo
// cria um novo post, passando como autor o próprio objeto (this)
// coloca esse post dentro do array this.post
// retorna o post criado
// resultado: um autor pode criar vários posts, e cada post sabe quem é seu autor
