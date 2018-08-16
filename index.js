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
　　　　bot.reply(message, '経費のMVVを浸透させるためにやって来てん。 \n 詳しくはこれ見てな〜 \n https://mf.esa.io/posts/76277#%E7%B5%8C%E8%B2%BB%E6%9C%AC%E9%83%A8%E3%81%AEMVV');
  
　　});
});
