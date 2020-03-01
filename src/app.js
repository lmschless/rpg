import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './gameUI.js';
('use strict');

export class Character {
	constructor(name, charClass, strength, dexterity, wisdom, charisma, intelligence, constitution) {
		this.name = name;
		this.charClass = charClass;
		this.strength = strength;
		this.dexterity = dexterity;
		this.wisdom = wisdom;
		this.charisma = charisma;
		this.intelligence = intelligence;
		this.constitution = constitution;
	}
}
export class Game {
	constructor() {
		this.characters = [];
		this.characters.push(new Warrior('michael', 'sword', 1, 25, 200));
		this.characters.push(new Warrior('luke', 'axe', 10, 45, 1000));
	}

	addCharacter(
		name = 'luke',
		charClass,
		strength = 50,
		dexterity = 50,
		wisdom = 50,
		charisma = 50,
		intelligence = 50,
		constitution = 50
	) {
		console.log(`char class: ${charClass}`);
	}

	getCharacter(i) {
		return this.characters[i];
	}
}

export class Warrior extends Character {
	constructor(name, weapon, level = 1, strength = 5, health = 10, armorClass, experience = 0) {
		super();
		this.name = name;
		this.weapon = weapon;
		this.level = level;
		this.strength = strength;
		this.health = health;
		this.armorClass = armorClass;
		this.experience = experience;
	}
}

export class Battle {
	constructor(fighter1, fighter2) {
		this.fighter1 = fighter1;
		this.fighter2 = fighter2;
	}

	rand(max) {
		return Math.floor(Math.random() * max) + 1;
	}
	// add agility or dex later
	chanceToHit(strength) {
		const chance = Math.floor(Math.random() * 100) + 1;
		return chance <= strength;
	}

	calculateDamage(strength) {
		const damage = Math.floor(Math.random() * strength) + 1;
		return damage;
	}

	startFight() {
		let winner = false;
		let chance1;
		let chance2;
		do {
			chance1 = this.chanceToHit(this.fighter1.strength);
			chance2 = this.chanceToHit(this.fighter2.strength);
			if ((chance1 && !chance2) || (chance2 && !chance1)) {
				winner = true;
			}
		} while (!winner);
		if (chance1) {
			this.fighter1.experience += this.rand(10);
			return `${this.fighter1.name} has won!`;
		} else if (chance2) {
			this.fighter2.experience += this.rand(10);
			return `${this.fighter2.name} has won!`;
		}
	}

	determineWinner() {}
}
export let firstGame = new Game();

const firstBattle = new Battle(firstGame.getCharacter(0), firstGame.getCharacter(1));
console.log(firstBattle.startFight());
console.log(firstGame);
