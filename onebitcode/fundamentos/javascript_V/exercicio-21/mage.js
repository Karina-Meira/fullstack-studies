const character = require("./character.js")

class Mage extends character {
    constructor(name, lifePoints, attackPower, defense, magicPower) {
        super(name, lifePoints, attackPower, defense)
        this.magicPower = magicPower
    }

    attack(target) {
        target.lifePoints -= (this.attackPower + this.magicPower) - target.defense
    }

    increaseLifePoints() {
        this.lifePoints += this.magicPower * 2
    }
}

module.exports = Mage