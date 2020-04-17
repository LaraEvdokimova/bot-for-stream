const mentionAll = {
callName: '@all',
action: (message, bot, group_id) => {
    bot.execute('messages.getConversationMembers',
    { peer_id: message.peer_id,
        group_id,
    }
    ).then( res => {
        console.log(res);
    })

console.log('вызвали');
  }
}

module.exports = mentionAll;