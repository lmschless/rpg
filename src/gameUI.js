import $ from 'jquery';
import { firstGame } from './app.js';

$(document).ready(function() {
	$('#create-character').submit(function(e) {
		const charClass = $('#char-class').val().toLowerCase();

		firstGame.addCharacter('luke', charClass);
		e.preventDefault();
		console.log('test');
	});
});
