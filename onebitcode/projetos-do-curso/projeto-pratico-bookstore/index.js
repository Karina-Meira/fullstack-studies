const App = require('./App')

const app = new App()

app.createAuthor("J.K. Rowling", "British", "British author, best known for the Harry Potter series.")

const authors = app.getAuthors()

app.createBook("Harry Potter and the Philosopher's Stone", "A young wizard's journey begins.", "Fantasy", authors[0], "First book in the Harry Potter series.", 29.99, 100)

app.createPoster("Harry Potter Poster", "A poster featuring Harry Potter.", 60, 90, 15.99, 50)

const books = app.getBooks()
const posters = app.getPosters()

app.createUser("Alice Smith", "alice@email.com", "password123")

const users = app.getUsers()

app.createOrder([
    { product: books[0], quantity: 2 },
    { product: posters[0], quantity: 1 }
], users[0])

const orders = app.getOrders()

console.log("Authors:", authors)
console.log("Books:", books)
console.log("Posters:", posters)
console.log("Users:", users)
console.log("Orders:", orders)

app.showDatabase()

