const Product = require("./Product")

class Book extends Product {
    constructor(title, synopysis, genre, author, description, price, inStock =0) {
        super(`Livro: ${title}`, description, price, inStock)
        this.title = title
        this.synopysis = synopysis
        this.genre = genre
        this.author = author
    }       
}

module.exports = Book  
