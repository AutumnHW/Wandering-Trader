module.exports = {
	name: 'reset',
	description: 'resets bot client in event of error',
	execute(message, args) {
		if (message.author.id === '328665489041784832') {
			process.exit()
		}
	},
};