const VkBot = require('node-vk-bot-api')
const {TOKEN, GROUP_ID} = require ('./secret');
const {botName} = require('./config');

const skillList = require('./skills/skillList');

const bot = new VkBot({
    token: TOKEN,
    group_id: GROUP_ID,
})

bot.on((ctx) => {
    //console.log(ctx);
    const { message } = ctx;
    const regBotName = new RegExp(botName, 'i')
    if (!regBotName.test(message.test)){
        return;
    }
    for (const callName in skillList) {
        if (skillList.hasOwnProperty(callName)) {
            const regCallName = new RegExp(callName, 'i');
            if (regCallName.test(message.test)){
                console.log('match: ${callName}');
                return;
            }
        }
    }
})


bot.startPolling()