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
　　　　bot.reply(message, 'Zoom URL \n 堀内さん https://zoom.us/j/4367734105 \n 寺本さん https://zoom.us/j/7855344110 \n 北嶋さん https://zoom.us/j/7776860009 \n 住谷さん https://zoom.us/j/7475568036 \n 逆瀬川さん https://zoom.us/j/6020559468 \n 松本さん https://zoom.us/j/5661849566 \n 原さん https://zoom.us/j/8206768818 \n 横田さん https://zoom.us/j/4603468082 \n 後藤さん https://zoom.us/j/6820371657 \n 安中さん https://zoom.us/j/5730560839 \n 西本さん https://zoom.us/j/9076360566 \n 石塚さん https://zoom.us/j/2245365943 \n 柏崎さん https://zoom.us/j/4603468082 \n 伊藤大さん https://zoom.us/j/3532915271');
　　});

controller.hears(['マニュアル'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'これ見てや〜 \n https://mf.esa.io/posts/73006');
　　});

controller.hears(['robin'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'https://dashboard.robinpowered.com/money-forward-inc/schedule');
　　});
controller.hears(['トイレ'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'https://enterprise.throneservice.com/mfw3994');
　　});

controller.hears(['西本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'なんの変哲も無い西本さん \n https://mf.esa.io/posts/77517');
　　});
controller.hears(['安中'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'ふわっと安中さん \n https://mf.esa.io/posts/40751');
　　});
controller.hears(['後藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'めちゃおもろい後藤さんの自己紹介 \n https://mf.esa.io/posts/68963');
　　});
controller.hears(['今井'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '我らが経費本部の部長さん \n https://mf.esa.io/posts/8407');
　　});
controller.hears(['堀内'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '堀内さんはこんな人！ \n https://mf.esa.io/posts/8405');
　　});
controller.hears(['齊藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '齊藤さんはこんな人！ \n https://mf.esa.io/posts/9819');
　　});
controller.hears(['成末'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '成末さんはこんな人！ \n https://mf.esa.io/posts/36162');
　　});
controller.hears(['寺本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '寺本さんはこんな人！ \n https://mf.esa.io/posts/38115');
　　});
controller.hears(['原'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '原さんはこんな人！ \n https://mf.esa.io/posts/41136');
　　});
controller.hears(['北嶋'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, 'プロレス好きの北嶋さん:kitasan:  \n https://mf.esa.io/posts/48339');
　　});
controller.hears(['横田'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '横田さんはこんな人！ \n https://mf.esa.io/posts/60597');
　　});
controller.hears(['逆瀬川'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '逆瀬川さんはこんな人！ \n https://mf.esa.io/posts/65180');
　　});
controller.hears(['松本'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '松本さんはこんな人！ \n https://mf.esa.io/posts/74211');
　　});
controller.hears(['高倉'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '高倉さんはこんな人！ \n https://mf.esa.io/posts/22079');
　　});
controller.hears(['柏崎'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '柏崎さんはこんな人！ \n https://mf.esa.io/posts/29199');
　　});
controller.hears(['黒田'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '黒田さんはこんな人！ \n https://mf.esa.io/posts/7783');
　　});
controller.hears(['伊藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '伊藤さんは二人おんねんで、実は \n https://mf.esa.io/posts/14611 \n https://mf.esa.io/posts/21029');
　　});
controller.hears(['深澤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '深澤さんはこんな人！ \n https://mf.esa.io/posts/7134');
　　});
controller.hears(['及川'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '及川さんはこんな人！ \n https://mf.esa.io/posts/63004');
　　});
controller.hears(['青山'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '青山さんはこんな人！ \n https://mf.esa.io/posts/43345');
　　});
controller.hears(['江藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '江藤さんはこんな人！ \n https://mf.esa.io/posts/72093');
　　});
controller.hears(['近藤'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '近藤さんはこんな人！ \n https://mf.esa.io/posts/61718');
　　});
controller.hears(['小山'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '小山さんはこんな人！ \n https://mf.esa.io/posts/76919');
　　});
controller.hears(['石塚'], ['ambient'], function(bot, message) {
　　　　bot.reply(message, '石塚さんはこんな人！ \n https://mf.esa.io/posts/69687');
　　});


});
