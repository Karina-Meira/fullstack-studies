class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
    }
    login(email, password) {
        if (email === this.email && password === this.password) {
            console.log('Login bem sucedido')
            return true
        } else {
            console.log('Login inválido')
            return false
        }
    }
}

const user = new User('Karina', 'karinameira@email.com', 1234)
user.login('karinameira@email.com', 1234)

console.log(user)