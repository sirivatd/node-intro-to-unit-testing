const should = require('chai').should();
const fizzbuzz = require('../fizzBuzzer');

//unit test for fizzbuzzer

describe('fizzbuzz', function() {
	it('should output fizzbuzz', function() {
		const normalCases = [
		{num: 2, expected: 2},
		{num: 3, expected: 'fizz'},
		{num: 5, expected: 'buzz'},
		{num: 15, expected: 'fizz-buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzbuzz(input.num);
			answer.should.equal(input.expected);
		});
	});

	it('should raise error if input is not a number', function() {
		const badInputs = [
		'dsa','gg','jfds'];

		badInputs.forEach(function(input) {
			(function() {
				fizzbuzz(input);
			}).should.throw(Error);
		});
	});
});