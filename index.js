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

controller.hears(['ZOOM'], ['direct_mention'], function(bot, message) {
　　　　bot.reply(message, 'Zoom URL \n 堀内さん https://zoom.us/j/4367734105 \n 寺本さん https://zoom.us/j/7855344110 \n 北嶋さん https://zoom.us/j/7776860009 \n 住谷さん https://zoom.us/j/7475568036 \n 逆瀬川さん https://zoom.us/j/6020559468 \n 松本さん https://zoom.us/j/5661849566 \n 原さん https://zoom.us/j/8206768818 \n 横田さん https://zoom.us/j/4603468082 \n 後藤さん https://zoom.us/j/6820371657 \n 安中さん https://zoom.us/j/5730560839 \n 西本さん https://zoom.us/j/9076360566 \n 石塚さん https://zoom.us/j/2245365943 \n 柏崎さん https://zoom.us/j/7963331199 \n 伊藤大さん https://zoom.us/j/3532915271');
　　});

controller.hears(['マニュアルまとめ'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'マニュアルまとめはこれやで〜 \n https://mf.esa.io/posts/73006');
　　});

controller.hears(['robin'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'https://dashboard.robinpowered.com/money-forward-inc/schedule');
　　});
controller.hears(['トイレ'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'https://enterprise.throneservice.com/mfw3994');
　　});

controller.hears(['ごっちゃん'], 'ambient', function(bot, message) {
  bot.api.reactions.add({
    timestamp: message.ts,
    channel: message.channel,
    name: 'goto'
　　});
});
controller.hears(['wifi'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'SSID：guest-mfw \n PASS：mfw#9160 \n \n SSID：BYOD-mfw \n PASS：mfw#3994 \n 詳細はesaみてや \n https://mf.esa.io/posts/17045');
  });

});
