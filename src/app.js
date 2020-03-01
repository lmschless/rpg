// 'use strict';

class Game {
	constructor() {
		this.characters = [];
		this.characters.push(new Warrior('michael', 'sword', 1, 100, 200));
		this.characters.push(new Warrior('luke', 'axe', 10, 500, 1000));
	}

	getCharacter(i) {
		return this.characters[i];
	}
}

export class Warrior {
	constructor(name, weapon, level = 1, strength = 5, health = 10, experience = 0) {
		this.name = name;
		this.weapon = weapon;
		this.level = level;
		this.strength = strength;
		this.health = health;
		this.experience = experience;
	}
}

// characters.push(michael);
// characters.push(luke);

class Battle {
	constructor(fighter1, fighter2) {
		this.fighter1 = fighter1;
		this.fighter2 = fighter2;
	}

	rand(max) {
		return Math.floor(Math.random() * max) + 1;
	}

	startFight() {
		console.log(this.fighter1.strength);
		if (this.fighter1.strength > this.fighter2.strength) {
			console.log(`${this.fighter1.name} has won!`);
			this.fighter1.experience += this.rand(10);
		} else {
			console.log(`${this.fighter2.name} has won!`);
			this.fighter2.experience += this.rand(10);
		}
	}
}
let firstGame = new Game();

const firstBattle = new Battle(firstGame.getCharacter(0), firstGame.getCharacter(1));
console.log(firstBattle.startFight());
console.log(firstGame);
