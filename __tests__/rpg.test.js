import { Warrior } from '.././src/app.js';

describe('Warrior', () => {
	test('Make sure warrior object is created correctly.', () => {
		var warrior = new Warrior('michael', 'axe', 1);
		expect(warrior.name).toEqual('michael');
		expect(warrior.weapon).toEqual('axe');
		expect(warrior.level).toEqual(1);
	});
});
