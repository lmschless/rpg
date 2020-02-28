const characters = [];

class Warrior {
	constructor(name, weapon, level = 1, strength = 5, health = 10, experience = 0) {
		this.name = name;
		this.weapon = weapon;
		this.level = level;
		this.strength = strength;
		this.health = health;
		this.experience = experience;
	}
}

characters.push(new Warrior('michael', 'sword', 1, 100, 200));
characters.push(new Warrior('luke', 'axe', 10, 500, 1000));

// characters.push(michael);
// characters.push(luke);

class Battle {
	constructor(fighter1, fighter2) {
		this.fighter1 = fighter1;
		this.fighter2 = fighter2;
	}

	startFight() {
		if (this.fighter1.strength > this.fighter2.strength) {
			console.log(`${this.fighter1.name} has won!`);
		} else {
			console.log(`${this.fighter2.name} has won!`);
			this.fighter2.experience += 10;
		}
	}
}

const firstBattle = new Battle(characters[0], characters[1]);
console.log(firstBattle);
