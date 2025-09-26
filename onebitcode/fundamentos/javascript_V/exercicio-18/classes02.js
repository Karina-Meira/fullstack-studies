class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity) {
        this.inStock += quantity
    }
    calculateDiscount(percentage) {
        const discount = this.price * (percentage / 100)
        this.price = this.price - discount
        return this.price
    }
}

const phone = new Product('Phone', 'Iphone Apple 17 pro max', 8000)
phone.addToStock(20)
phone.calculateDiscount(10)

console.log(phone)