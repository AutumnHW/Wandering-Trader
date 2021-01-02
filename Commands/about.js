module.exports = {
	name: 'about',
	description: 'sends about info',
	execute(message, args) {
		message.channel.send('Wandering Trader was developed by Brandon Williams. (2021) The open source repository is at: https://github.com/brandonhdyc/Wandering-Trader/');
	},
};