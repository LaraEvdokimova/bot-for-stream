const mentionAll = {
    callName: '[@all |позови всех|]',
action: (message, bot, group_id) => {
    bot.execute('messages.getConversationMembers',
    { peer_id: message.peer_id,
        group_id,
    }
    ).then( res => {
        const membersIds = res.profiles.map(profile => profile.id);
        constmembersIdsWithAt = membersIds.map(id => '@id${id}');
        bot.sendMessage(message.peer_id, 'Именем админа, призываю всех: ${membersIdsWithAt.toString()}').catch()
        err => console.log(err)
        //res => console.log(res)
        //console.log(membersIds);
    )
    }).catch(
        err => console.log(err)    
        )
  }
}

module.exports = mentionAll;