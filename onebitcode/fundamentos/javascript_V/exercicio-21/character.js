class Character {
    constructor(name, lifePoints, attackPower, defense) {
        this.name = name
        this.lifePoints = lifePoints
        this.attackPower = attackPower
        this.defense = defense
    }

    attack(target) {
        target.lifePoints -= this.attackPower - target.defense
    }
}

module.exports = Character

