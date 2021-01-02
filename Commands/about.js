module.exports = {
	name: 'about',
	description: 'sends about info',
	execute(message, args) {
		message.channel.send('Wandering Trader was developed by Brandon Williams. This bot has been made possible by the contributers on the open source repository! Without them this wouldent exist! Go contribute today! (https://github.com/brandonhdyc/Wandering-Trader/)  (2021)');
	},
};
