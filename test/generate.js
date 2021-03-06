const Demonize = require('../index.js');
const Path = require('path');

const options = {
	env: { PORT: 8000 },
	arg: 'server.js',
	cwd: __dirname,
	out: Path.join(__dirname, 'out.log'),
	err: Path.join(__dirname, 'err.log'),

	fd: Path.join(__dirname, 'GENERATED_DEMON.js')
};

(async function () {

	await Demonize.generate(options);

	console.log('Created standalone demonize script');

})().catch(function (error) {
	console.error(error);
});
