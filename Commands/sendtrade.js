const { Console } = require('console');
const { markAsUntransferable } = require('worker_threads');

module.exports = {
	name: 'tr',
	description: 'Begins a tr',
	execute(message, args) {

		const user = message.author;
		const fs = require('fs');
		const Discord = require('discord.js');
		const client = new Discord.Client();
		const random = require('random');
		function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		  }
		function getUserFromMention(mention) {
			if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	   }
		}

		let orderid = random.int(min=0, max=99999999)
		let sendto = message.mentions.users.first();
		console.log(orderid);
		message.channel.send(order.order)
		
		let orderdata = {
			order: orderid,
			requester: message.author.id,
			reqestee: sendto.id,
		};
		let data = JSON.stringify(orderdata, null, 2);
		let filename = 'orders/' + orderid;
		let file = filename + '.json';

		fs.writeFile(file, data, (err) => {
			if (err) throw err;
			console.log('Data written to file');
		});


	console.log(sendto)
	console.log()

},
} 