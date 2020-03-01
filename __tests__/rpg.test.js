import { Warrior, Battle, Game } from '.././src/app.js';

describe('Warrior', () => {
	test('Make sure warrior object is created correctly.', () => {
		var warrior = new Warrior('michael', 'axe', 1);
		expect(warrior.name).toEqual('michael');
		expect(warrior.weapon).toEqual('axe');
		expect(warrior.level).toEqual(1);
	});
});

describe('Battle', () => {
	let firstBattle;
	let firstGame;
	beforeEach(() => {
		firstGame = new Game();
		firstBattle = new Battle(firstGame.getCharacter(0), firstGame.getCharacter(1));
	});
	test('Make sure Battle object is created correctly.', () => {
		expect(firstGame.getCharacter(0).name).toEqual('michael');
		expect(firstGame.getCharacter(1).name).toEqual('luke');
	});
	test('Make sure there is a winner.', () => {
		const result = firstBattle.startFight();
		expect(result).toMatch('has won');
	});
	test('Make sure the random number generator is working, all values should be greater than 0.', () => {
		let arr = [];
		for (let i = 1; i < 1000; i++) {
			let rand = firstBattle.rand(10);
			let count = arr[rand] ? arr[rand] + 1 : 1;
			arr[rand] = count;
		}
		let result = true;
		arr.forEach(function(num) {
			if (num <= 0) result = false;
		});
		expect(result).toBeTruthy();
	});
	test('Make sure there is a truthy value for experience.', () => {
		firstBattle.startFight();
		expect(firstGame.getCharacter(0).experience >= 1 || firstGame.getCharacter(1).experience >= 1).toBeTruthy();
	});
	test('Make sure result is true when 100 strength is passed in, and false when 0 strength is passed in.', () => {
		expect(firstBattle.chanceToHit(100)).toBeTruthy();
		expect(firstBattle.chanceToHit(0)).toBeFalsy();
	});
});
