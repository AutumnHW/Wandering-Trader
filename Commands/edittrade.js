const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const fs = require('fs');

module.exports = {
	name: 'et',
	description: 'edit a trade',
	execute(message, args) {
		if (args[1] == "want") {
			function readWriteSync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requestee || message.author.id == requester) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					var data = fs.readFileSync(fileToEdit, 'utf-8');
					var toEdit = '"want": ' + want + ',';
					var toEdit2 = '"want": ' + args[2] + ',';
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFileSync(fileToEdit, newValue, 'utf-8');
					console.log('changed file ' + filePath + '\nold value: ' + toEdit + '\nnew value: ' + toEdit2);
					message.reply('done, the new order data should be sent to you.');
					message.client.users.fetch(requester, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + args[2] + ",\nFor: " + give + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
					});
					message.client.users.fetch(requestee, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + args[2] + ",\nFor: " + give + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			  }

			readWriteSync();
		}
		if (args[1] == "give") {
			function readWriteSync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requestee || message.author.id == requester) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					var data = fs.readFileSync(fileToEdit, 'utf-8');
					var toEdit = '"give": ' + give + ',';
					var toEdit2 = '"give": ' + args[2] + ',';
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFileSync(fileToEdit, newValue, 'utf-8');
					console.log('changed file ' + filePath + '\nold value: ' + toEdit + '\nnew value: ' + toEdit2);
					message.reply('done, the new order data should be sent to you.');
					message.client.users.fetch(requester, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + args[2] + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
					});
					message.client.users.fetch(requestee, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + args[2] + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			  }

			readWriteSync();

		}
		if (args[1] == "private") {
			function readWriteSync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requestee || message.author.id == requester) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					var data = fs.readFileSync(fileToEdit, 'utf-8');
					var toEdit = '"private": ' + private;
					var toEdit2 = '"completed": ' + args[2];
					var newValue = data.replace(toEdit, toEdit2);

					fs.writeFileSync(fileToEdit, newValue, 'utf-8');
					console.log('changed file ' + filePath + '\nold value: ' + toEdit + '\nnew value: ' + toEdit2);
					message.reply('done, the new order data should be sent to you.');
					message.client.users.fetch(requester, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + give + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + args[2] + ".\n\n\nThat is your order data, now updated.");
					});
					message.client.users.fetch(requestee, true).then((user) => {
						user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + give + ",\nAccepted: " + accepted + ",\nCompleted: " + completed + ",\nPrivate: " + args[2] + ".\n\n\nThat is your order data, now updated.");
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			  }

			readWriteSync();
		}
	},
};
