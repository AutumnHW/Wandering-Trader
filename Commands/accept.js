module.exports = {
    name: 'accept',
    description: 'accept a trade',
    execute(message, args) {
		function readWriteSync() {
			const filePath = '../orders/' + args[0] + '.json';
			const { order, requester, requestee, want, give, accepted, completed, private } = require(filePath);
			if (message.author.id == requestee) {
				var fileToEdit = "./orders/" + args[0] + ".json";
				var data = fs.readFileSync(fileToEdit, 'utf-8');
				var toEdit = '"accepted": ' + accepted + ',';
				var toEdit2 = '"accepted": true,';
				var newValue = data.replace(toEdit, toEdit2);

				fs.writeFileSync(fileToEdit, newValue, 'utf-8');
                console.log('changed file ' + filePath + '\nold value: ' + toEdit + '\nnew value: ' + toEdit2);
				message.reply('done, the order is now accepted.');
				message.client.users.fetch(requester, true).then((user) => {
					user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + give + ",\nAccepted: true,\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
				});
				message.client.users.fetch(requestee, true).then((user) => {
					user.send("Order: " + order + ",\nRequester wants: " + want + ",\nFor: " + give + ",\nAccepted: true,\nCompleted: " + completed + ",\nPrivate: " + private + ".\n\n\nThat is your order data, now updated.");
				});
			}
			else {
				message.channel.send('You are not authorised to edit this transaction.');
				return;
			}
		}

	    readWriteSync();
    },
};