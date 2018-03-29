const spell = require('./spell');

class CalcAndSpell {
	constructor() {
		this.num = 0;
	}

	add(num) {
		this.num += num;

		return this;
	}

	subtract(num) {
		this.num -= num;

		return this;
	}

	divide(num) {
		this.num /= num;

		return this;
	}

	multiply(num) {
		this.num *= num;

		return this;
	}

	result() {
		return this.num;
	}

	spellTheNumber(num) {
		if (num === 0) {
			return 'Nol';
		}

		return spell(num);
	}
}

module.exports = CalcAndSpell;

window.CalcAndSpell = CalcAndSpell;
