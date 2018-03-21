var colors = require('colors');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdout.write('Szcześc boże\n');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch(instruction) {
			case 'Niech będzie pochwalony': 
				process.stdout.write('Na wieki wieków\n');			
				process.exit();
				break
			
			case '/lang': 
				process.stdout.write(process.env.lang);
				break

			case '/osinfo': 
				OSinfo.print();
				break
			
			default: 
				process.stderr.write('Bądźmy łagodni\n');
			
		};
	}
});

