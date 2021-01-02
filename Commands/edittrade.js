const fs = require('fs');

module.exports = {
	name: 'et',
	description: 'edit a trade',
	execute(message, args) {
		if (args[1] == "want") {
			function readWriteAsync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requester || message.author.id == requestee) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					fs.readFile(fileToEdit, 'utf-8', function (err, data) {
						if (err) throw err;
						var toEdit = '"want": "' + want + '",';
						var toEdit2 = '"want": "' + args[2] + '",';
						var newValue = data.replace(toEdit, toEdit2);

						fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
							if (err) throw err;
							console.log('changed file ' + filePath);
							message.reply('done, the new order data should be sent to you.');
						});
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			}

			readWriteAsync();
			const filePath = '../orders/' + args[0] + '.json';
			const { orderupdate, wantupdate, giveupdate, acceptedupdate, completedupdate, privateupdate } = require(filePath);
			message.client.users.fetch(requester, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
			message.client.users.fetch(requestee, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});

		}
		if (args[1] == "give") {
			function readWriteAsync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requester || message.author.id == requestee) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					fs.readFile(fileToEdit, 'utf-8', function (err, data) {
						if (err) throw err;
						var toEdit = '"give": "' + give + '",';
						var toEdit2 = '"give": "' + args[2] + '",';
						var newValue = data.replace(toEdit, toEdit2);

						fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
							if (err) throw err;
							console.log('changed file ' + filePath);
							message.reply('done, the new order data should be sent to you.');
						});
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			}
			
			readWriteAsync();
			const filePath = '../orders/' + args[0] + '.json';
			const { orderupdate, wantupdate, giveupdate, acceptedupdate, completedupdate, privateupdate } = require(filePath);
			message.client.users.fetch(requester, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
			message.client.users.fetch(requestee, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
		}
		if (args[1] == "accepted") {
			function readWriteAsync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requestee) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					fs.readFile(fileToEdit, 'utf-8', function (err, data) {
						if (err) throw err;
						var toEdit = '"accepted": ' + accepted + ',';
						var toEdit2 = '"accepted": ' + args[2] + ',';
						var newValue = data.replace(toEdit, toEdit2);

						fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
							if (err) throw err;
							console.log('changed file ' + filePath);
							message.reply('done, the new order data should be sent to you.');
						});
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			}

			readWriteAsync();
			const filePath = '../orders/' + args[0] + '.json';
			const { orderupdate, wantupdate, giveupdate, acceptedupdate, completedupdate, privateupdate } = require(filePath);
			message.client.users.fetch(requester, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
			message.client.users.fetch(requestee, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
		}
		if (args[1] == "completed") {
			function readWriteAsync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (message.author.id == requester || message.author.id == requestee) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					fs.readFile(fileToEdit, 'utf-8', function (err, data) {
						if (err) throw err;
						var toEdit = '"completed": ' + completed + ',';
						var toEdit2 = '"completed": ' + args[2] + ',';
						var newValue = data.replace(toEdit, toEdit2);

						fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
							if (err) throw err;
							console.log('changed file ' + filePath);
							message.reply('done, the new order data should be sent to you.');
						});
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			}

			readWriteAsync();
			const { orderupdate, wantupdate, giveupdate, acceptedupdate, completedupdate, privateupdate } = require(filePath);
			message.client.users.fetch(requester, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
			message.client.users.fetch(requestee, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
		}
		if (args[1] == "private") {
			function readWriteAsync() {
				const filePath = '../orders/' + args[0] + '.json';
				const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
				if (!(message.author.id == requester) || !(message.author.id == requestee)) {
					var fileToEdit = "./orders/" + args[0] + ".json";
					fs.readFile(fileToEdit, 'utf-8', function (err, data) {
						if (err) throw err;
						var toEdit = '"private": ' + private;
						var toEdit2 = '"private": ' + args[2];
						var newValue = data.replace(toEdit, toEdit2);

						fs.writeFile(fileToEdit, newValue, 'utf-8', function (err) {
							if (err) throw err;
							const filePath = '../orders/' + args[0];
							console.log('changed file ' + filePath);
							message.reply('done, the new order data should be sent to you.');
						});
					});
				}
				else {
					message.channel.send('You are not authorised to edit this transaction.');
					return;
				}
			}

			readWriteAsync();
			const filePath = '../orders/' + args[0] + '.json';
			const { orderupdate, wantupdate, giveupdate, acceptedupdate, completedupdate, privateupdate } = require(filePath);
			message.client.users.fetch(requester, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
			message.client.users.fetch(requestee, false).then((user) => {
				user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
			});
		}
	},
};
