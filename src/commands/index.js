const stop = require('./stop');
const add = require('./add');
const dequeue = require('./dequeue');
const disconnect = require('./disconnect');
const join = require('./join');
const play = require('./play').default;
const queue = require('./queue');
const skip = require('./skip');
const replay = require('./replay');
const bucle = require('./bucle');
const search = require('./search');
const commands = require('./commands');

module.exports = {
	stop,
	add,
	dequeue,
	disconnect,
	join,
	play,
	queue,
	skip,
	replay,
	bucle,
	search,
	commands
};