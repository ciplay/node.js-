
const expect = require('chai').expect;

const spell = require('./../src/spell');

describe('spell', function testSuites() {
	it('should spell the number correctly', function test() {
		expect(spell(0)).to.equal("");
		expect(spell(1)).to.equal("Satu");
		expect(spell(2)).to.equal("Dua");
		expect(spell(3)).to.equal("Tiga");
		expect(spell(4)).to.equal("Empat");
		expect(spell(5)).to.equal("Lima");
		expect(spell(6)).to.equal("Enam");
		expect(spell(7)).to.equal("Tujuh");
		expect(spell(8)).to.equal("Delapan");
		expect(spell(9)).to.equal("Sembilan");
		expect(spell(10)).to.equal("Sepuluh");

		expect(spell(11)).to.equal("Sebelas");
		expect(spell(12)).to.equal("Dua Belas");

		expect(spell(20)).to.equal("Dua Puluh");
		expect(spell(100)).to.equal("Seratus");
		expect(spell(200)).to.equal("Dua Ratus");

		// so on and so forth
	});
});