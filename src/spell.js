const spell = function spell(num) {
	const spells = [
		'',
		'Satu',
		'Dua',
		'Tiga',
		'Empat',
		'Lima',
		'Enam',
		'Tujuh',
		'Delapan',
		'Sembilan',
		'Sepuluh',
		'Sebelas',
	];

	// range 0 - 11
	if (num < 12) {
		return spells[num];
	}

	// range 12 - 19
	if (num < 20) {
		return `${spells[num - 10]} Belas`;
	}

	// range 20 - 99
	if (num < 100) {
		const primary = num / 10;
		const front = parseInt(String(primary).substr(0, 1));
		const rear = num % 10;

		return `${spells[front]} Puluh ${spells[rear]}`.trim();
	}

	// range 100 - 199
	if (num < 200) {
		return `Seratus ${spell(num - 100)}`.trim();
	}

	// range 200 - 1000
	if (num < 1000) {
		const primary = num / 100;
		const front = parseInt(String(primary).substr(0, 1));
		const rear = num % 100;

		return `${spells[front]} Ratus ${spell(rear)}`.trim();
	}

	// range 1000 - 1999
	if (num < 2000) {
		return `Seribu ${spell(num - 1000)}`.trim();
	}

	// range 2000 - 9999
	if (num < 10000) {
		const primary = num / 1000;
		const front = parseInt(String(primary).substr(0, 1));
		const rear = num % 1000;

		return `${spells[front]} Ribu ${spell(rear)}`.trim();
	}

	// range 10000 - 99999
	if (num < 100000) {
		const primary = num / 100;
		const front = parseInt(String(primary).substr(0, 2));
		const rear = num % 1000;

		return `${spell(front)} Ribu ${spell(rear)}`.trim();
	}
}

module.exports = spell;