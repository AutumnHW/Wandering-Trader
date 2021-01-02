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
		console.log(orderid);
		message.channel.send(orderid + " is your trade id.");
		let acceptedBool = false;
		let completedBool = false;
		if (args[2] == "-p") {
			let orderdata = {
				order: orderid,
				requester: message.author.id,
				requestee: sendto.id,
				items: args[1],
				accepted: acceptedBool,
				completed: completedBool,
				private: true
			};

			let data = JSON.stringify(orderdata, null, 2);
			let filename = 'orders/' + orderid;
			let file = filename + '.json';

			fs.writeFile(file, data, (err) => {
				if (err) throw err;
				console.log('Data written to file');
			});
			const orderdataString = ("order: " + orderid + ",\nrequester: " + message.author.id + ",\nrequestee: " + sendto.id + ",\nitems: " + args[1] + ",\naccepted: " + acceptedBool + ",\ncompleted: " + completedBool + ",\nprivate: true");
			message.author.send(orderdataString + "\n\n\nThat is your order data. You are the requester.\n**This order is PRIVATE. Logs will not be made of this transaction.**");
			let user = message.mentions.users.first();
			user.send(orderdataString + "\n\n\nThat is your order data. You are the requestee.\n**This order is PRIVATE. Logs will not be made of this transaction.**");
		}
		else {
			let orderdata = {
				order: orderid,
				requester: message.author.id,
				requestee: sendto.id,
				items: args[1],
				accepted: acceptedBool,
				completed: completedBool,
				private: false
			}
			let data = JSON.stringify(orderdata, null, 2);
			let filename = 'orders/' + orderid;
			let file = filename + '.json';

			fs.writeFile(file, data, (err) => {
				if (err) throw err;
				console.log('Data written to file');
			});
			const orderdataString = ("Order: " + orderid + ",\nRequester: " + message.author.username + ",\nRequestee: " + sendto.username + ",\nItems: " + args[1] + ",\nAccepted: " + acceptedBool + ",\nCompleted: " + completedBool + ",\nPrivate: false");
			message.author.send(orderdataString + "\n\n\nThat is your order data. You are the requester.");
			let user = message.mentions.users.first();
			user.send(orderdataString + "\n\n\nThat is your order data. You are the requestee.");
		}

		console.log(sendto)
		console.log(message.author)
	},
} 