
const expect = require('chai').expect;

const CalcAndSpell = require('./../src/calc-and-spell');

describe("CalcAndSpell", function testSuites() {
	it('should create new calc and spell instance with default num property equal 0', function test() {
		const calcAndSpell = new CalcAndSpell();

		expect(calcAndSpell.num).to.equal(0);
	});

	it('should add new input value with the current class property "num" value', function test() {
		const calcAndSpell = new CalcAndSpell();

		calcAndSpell.add(1);
		expect(calcAndSpell.num).to.equal(1);

		calcAndSpell.add(2);
		expect(calcAndSpell.num).to.equal(3);
	});

	it('should subtract new input value from the current class property "num" value', function test() {
		const calcAndSpell = new CalcAndSpell();

		calcAndSpell.add(10);

		calcAndSpell.subtract(1);
		expect(calcAndSpell.num).to.equal(9);

		calcAndSpell.subtract(2);
		expect(calcAndSpell.num).to.equal(7);
	});

	it('should divide the current class property "num" value with new input value', function test() {
		const calcAndSpell = new CalcAndSpell();

		calcAndSpell.add(10);

		calcAndSpell.divide(1);
		expect(calcAndSpell.num).to.equal(10);

		calcAndSpell.divide(5);
		expect(calcAndSpell.num).to.equal(2);

		calcAndSpell.divide(2);
		expect(calcAndSpell.num).to.equal(1);
	});

	it('should multiply the current class property "num" value with new input value', function test() {
		const calcAndSpell = new CalcAndSpell();

		calcAndSpell.add(10);

		calcAndSpell.multiply(1);
		expect(calcAndSpell.num).to.equal(10);

		calcAndSpell.multiply(2);
		expect(calcAndSpell.num).to.equal(20);
	});

	it('should get the numeric calc operation result', function test() {
		const calcAndSpell = new CalcAndSpell();

		calcAndSpell.add(10);
		expect(calcAndSpell.result()).to.equal(10);

		calcAndSpell.subtract(2);
		expect(calcAndSpell.result()).to.equal(8);

		calcAndSpell.divide(2);
		expect(calcAndSpell.result()).to.equal(4);

		calcAndSpell.multiply(3);
		expect(calcAndSpell.result()).to.equal(12);
	});

	it('should spell the numeric value', function test() {
		const calcAndSpell = new CalcAndSpell();

		expect(calcAndSpell.spellTheNumber(0)).to.equal("Nol");
		expect(calcAndSpell.spellTheNumber(1)).to.equal("Satu");
		expect(calcAndSpell.spellTheNumber(2)).to.equal("Dua");
		expect(calcAndSpell.spellTheNumber(3)).to.equal("Tiga");
		expect(calcAndSpell.spellTheNumber(4)).to.equal("Empat");
		expect(calcAndSpell.spellTheNumber(5)).to.equal("Lima");
		expect(calcAndSpell.spellTheNumber(6)).to.equal("Enam");
		expect(calcAndSpell.spellTheNumber(7)).to.equal("Tujuh");
		expect(calcAndSpell.spellTheNumber(8)).to.equal("Delapan");
		expect(calcAndSpell.spellTheNumber(9)).to.equal("Sembilan");
		expect(calcAndSpell.spellTheNumber(10)).to.equal("Sepuluh");

		expect(calcAndSpell.spellTheNumber(11)).to.equal("Sebelas");
		expect(calcAndSpell.spellTheNumber(12)).to.equal("Dua Belas");

		expect(calcAndSpell.spellTheNumber(20)).to.equal("Dua Puluh");
		expect(calcAndSpell.spellTheNumber(100)).to.equal("Seratus");
		expect(calcAndSpell.spellTheNumber(200)).to.equal("Dua Ratus");
	});
});