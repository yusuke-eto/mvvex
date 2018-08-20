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
})

.startRTM(function(err, bot, payload) {

　　if (err) {
　　　　console.log('Error: Could not connect to Slack');
　　　　process.exit(1);
　　}

controller.hears(['mvv'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '経費のMVVを浸透させるためにやって来てん。 \n 詳しくはこれ見てな〜 \n https://mf.esa.io/posts/76277#%E7%B5%8C%E8%B2%BB%E6%9C%AC%E9%83%A8%E3%81%AEMVV');
　　});

controller.hears(['マニュアル'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'これ見てや〜 \n https://mf.esa.io/posts/73006');
　　});

controller.hears(['西本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'インターン生 \n https://mf.esa.io/posts/77517');
　　});
controller.hears(['安中'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'SQLマン \n https://mf.esa.io/posts/40751');
　　});
controller.hears(['後藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'めちゃおもろい自己紹介やで \n https://mf.esa.io/posts/68963');
　　});
controller.hears(['今井'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '我らが経費本部の部長さん \n https://mf.esa.io/posts/8407');
　　});
controller.hears(['堀内'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/8405');
　　});
controller.hears(['斎藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/9819');
　　});
controller.hears(['成末'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/36162');
　　});
controller.hears(['寺本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/38115');
　　});
controller.hears(['原'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/41136');
　　});
controller.hears(['北嶋'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/48339');
　　});
controller.hears(['横田'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/60597');
　　});
controller.hears(['逆瀬川'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/65180');
　　});
controller.hears(['松本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/74211');
　　});
controller.hears(['高倉'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/22079');
　　});
controller.hears(['柏崎'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/29199');
　　});
controller.hears(['黒田'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/7783');
　　});
controller.hears(['伊藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '伊藤は二人おんねん \n https://mf.esa.io/posts/14611 \n https://mf.esa.io/posts/21029');
　　});
controller.hears(['深澤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/7134');
　　});
controller.hears(['及川'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/63004');
　　});
controller.hears(['青山'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/43345');
　　});
controller.hears(['江藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/72093');
　　});
controller.hears(['近藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '自己紹介 \n https://mf.esa.io/posts/61718');
　　});


});