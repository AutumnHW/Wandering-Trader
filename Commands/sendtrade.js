module.exports = {
	name: 'tr',
	description: 'Begins a tr',
	execute(message, args) {
		const fs = require('fs');
		const random = require('random');

		let orderid = random.int(min = 0, max = 99999999);
		const path = './' + orderid;

		try {
  			if (fs.existsSync(path)) {
    			orderid = random.int(min = 0, max = 99999999);
  			}
		} catch(err) {
  			console.error(err)
		}
		let sendto = message.mentions.users.first();
		const requester = message.author.id;
		const requestee = sendto.id;
		if (requester == requestee) {
			message.reply('You cannot send messages to yourself!');
			return;
		}
		console.log(orderid);
		message.channel.send(orderid + " is your trade id.");
		if (args[3] == "-p") {
			let orderdata = {
				order: orderid,
				requester: message.author.id,
				requestee: sendto.id,
				want: args[1],
				give: args[2],
				accepted: false,
				completed: false,
				private: true
			};
			let data = JSON.stringify(orderdata, null, 2);
			let filename = 'orders/' + orderid;
			let file = filename + '.json';

			fs.writeFile(file, data, (err) => {
				if (err) throw err;
				console.log('Data written to file');
			});
			const orderdataString = ("Order: " + orderid + ",\nRequester: " + message.author.username + ",\nRequestee: " + sendto.username + ",\nI Want: " + args[1] + ",\nFor: " + args[2]+ ",\nAccepted: false,\nCompleted: false,\nPrivate: true");
			message.author.send(orderdataString + "\n\n\nThat is your order data. You are the requester.\n**This order is PRIVATE. Logs will not be made of this transaction.**");
			let user = message.mentions.users.first();
			user.send(orderdataString + "\n\n\nThat is your order data. You are the requestee.\n**This order is PRIVATE. Logs will not be made of this transaction.**");
		}
		else {
			let orderdata = {
				order: orderid,
				requester: message.author.id,
				requestee: sendto.id,
				want: args[1],
				give: args[2],
				accepted: false,
				completed: false,
				private: false
			}
			let data = JSON.stringify(orderdata, null, 2);
			let filename = 'orders/' + orderid;
			let file = filename + '.json';

			fs.writeFile(file, data, (err) => {
				if (err) throw err;
				console.log('Data written to file');
			});
			const orderdataString = ("Order: " + orderid + ",\nRequester: " + message.author.username + ",\nRequestee: " + sendto.username + ",\nI Want: " + args[1] + ",\nFor: " + args[2]+ ",\nAccepted: false,\nCompleted: false,\nPrivate: false");
			message.author.send(orderdataString + "\n\n\nThat is your order data. You are the requester.");
			let user = message.mentions.users.first();
			user.send(orderdataString + "\n\n\nThat is your order data. You are the requestee.");
		}

		console.log(sendto)
	},
} 
