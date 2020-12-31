module.exports = {
	name: 'help',
	description: 'Supplies help documentation',
	execute(message, args) {
        const Discord = require('discord.js')
        const HelpEmbed = new Discord.MessageEmbed()
        .setColor('#04910e')
        .setTitle('Help')
       .addFields(
           {name: '```t!tr```', value: 'Opens a trade request, Must mention someone in the command. Example:```t!tr <exampleuser>``` (-p if you want to set private, private trades do not appear in the trade log channel)'}
       )

        ;
        message.reply(HelpEmbed);

        
	},
};