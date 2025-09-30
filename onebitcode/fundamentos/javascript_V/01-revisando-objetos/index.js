function Book(title, pages, tags, author) {
    this.title = title
    this.pages = pages
    this.tags = tags
    this.author = author
    this.published = false
    this.inStock = 0
    this.addOnStock = function addOnStock(quantity) {
        this.inStock += quantity
    }
    this.save = function () {
        // save book to database
    }
}

const author = { name: 'Christopher Paolino' }
const tags = ['fantasy', 'adventure', 'medievall']

const erogon = new Book("Eragon", 468, tags, author)
erogon.addOnStock(20)

const eldest = new Book('Eldest', 644, tags, author)
eldest.addOnStock(50)

console.log(erogon)
console.log(eldest)

