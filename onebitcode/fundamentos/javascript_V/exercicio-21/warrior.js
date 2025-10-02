const character = require("./character.js")

class Warrior extends character {
    constructor(name, lifePoints, attackPower, defense, shieldPoints) {
        super(name, lifePoints, attackPower, defense)
        this.shieldPoints = shieldPoints
        this.stance = 'attacking'
    }

    attack(target) {
        if (this.stance === 'attacking') {
            super.attack(target)
        }
    } 
    
    changeStance() {
        if (this.stance === 'attacking') {
            this.stance = 'defending'
            this.defense += this.shieldPoints
        } else {
            this.stance = 'attacking'
            this.defense -= this.shieldPoints
        }       
    }
}

module.exports = Warrior