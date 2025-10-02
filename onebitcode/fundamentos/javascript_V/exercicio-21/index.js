const Mage = require("./mage.js")
const Thief = require("./thief.js")
const Warrior = require("./warrior.js") 

const gandalf = new Mage('Gandalf', 100, 20, 10, 30)
const bilbo = new Thief('Bilbo', 80, 15, 5)
const aragorn = new Warrior('Aragorn', 120, 25, 15, 20) 

console.table({ gandalf, bilbo, aragorn })

gandalf.attack(bilbo)
aragorn.changeStance()
aragorn.attack(bilbo)
bilbo.attack(gandalf)
gandalf.increaseLifePoints()

console.table({ gandalf, bilbo, aragorn })

