if (!process.env.token) {
　　console.log('Error: Specify token in environment.');
　　process.exit(1);
}

var Botkit = require('botkit');
var controller = Botkit.slackbot({
　　debug: false
});

var bot = controller.spawn({
　　token: process.env.token
}).startRTM(function(err, bot, payload) {
　　if (err) {
　　　　console.log('Error: Could not connect to Slack');
　　　　process.exit(1);
　　}

controller.hears([''], ['direct_mention,mention'], function(bot, message) {
　　　　bot.reply(message, 'hahaha');
　　});
});