module.exports = {
    name: 'accept',
    description: 'accept a trade',
    execute(message, args) {
		function readWriteAsync() {
			const filePath = '../orders/' + args[0] + '.json';
			const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
			if (message.author.id == requestee) {
				var fileToEdit = "./orders/" + args[0] + ".json";
				fs.readFile(fileToEdit, 'utf-8', function (err, data) {
					if (err) throw err;
					var toEdit = '"accepted": ' + accepted + ',';
					var toEdit2 = '"accepted": true,';
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
		const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
		const orderupdate = order;
		const requesterupdate = requester;
		const requesteeupdate = requestee;
		const wantupdate = want;
		const giveupdate = give;
		const acceptedupdate = accepted;
		const completedupdate = completed;
		const privateupdate = private;

		message.client.users.fetch(requesterupdate, true).then((user) => {
			user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
		});
		message.client.users.fetch(requesteeupdate, true).then((user) => {
			user.send("Order: " + orderupdate + ",\nI Want: " + wantupdate + ",\nFor: " + giveupdate + ",\nAccepted: " + acceptedupdate + ",\nCompleted: " + completedupdate + ",\nPrivate: " + privateupdate + ".\n\n\nThat is your order data, now updated.");
		});
	}
}