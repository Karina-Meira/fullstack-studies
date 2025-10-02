const character = require("./character.js")

class Thief extends character {
    attack(target) {
        target.lifePoints -= (this.attackPower - target.defense) * 2
    }
}

module.exports = Thief