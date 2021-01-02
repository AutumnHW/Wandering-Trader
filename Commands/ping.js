const { Console } = require('console');

const milliseconverter = (millisec) => {
    var seconds = (millisec / 1000).toFixed(0);
    var minutes = Math.floor(seconds / 60);
    var hours = "";
    if (minutes > 59) {
        hours = Math.floor(minutes / 60);
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes - hours * 60;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : "0" + seconds;
    if (hours != "") {
        return hours + ":" + minutes + ":" + seconds;
    }
    return minutes + ":" + seconds;
}

module.exports = {
	name: 'ping',
	description: 'Take a guess. What the fuck could a command called ping possibly be?',
	execute(message, args) {
        msg.channel.send(new Discord.MessageEmbed().setTitle('Ping').addField(`Bot Ping`, `**${client.ws.ping}** ms`, true).addField(`Uptime`, `**${milliseconverter(client.uptime)}**`).setColor('#04910e'));
	}
}
