const VkBot = require('node-vk-bot-api')
const {TOKEN, GROUP_ID} = require ('./secret');

const bot = new VkBot({
    token: TOKEN,
    group_id: GROUP_ID,
})

bot.on((ctx) => {
    console.log(ctx);
    ctx.reply('Hello!')
})


bot.startPolling()