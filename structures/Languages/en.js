module.exports = {
    code: 'en',
    COMMANDS: {
        AUTOROLE: {
            description: 'Allows you to configure a role which will be given to new members.',
            OFF: {
                noRoleConfigured: '[❌] - No role has been configured.',
                removed: '[✅] - The role has been removed from the autorole.'
            },
            added: (role) => `[✅] - The role ${role} will now be given to new members.`,
            notFound: '[❌] - The role has not been found.'
        },
        BACKGROUND: {
            description: 'Allows you to see the list of backgrounds, or to buy and set them.',
            BUY: {
                noBackgroundSpecified: '[❌] - Please specify a background to buy! To see the list of available backgrounds, check the `am!background list` command!',
                invalidBackground: '[❌] - Please specify a valid background to buy! To see the list of available backgrounds, check the `am!background list` command!',
                notEnoughCoins: '[❌] You don\'t have **5000** coins! Come back later...',
                alreadyBought: '[❌] - You already have this background!',
                success: (background) => `[✅] - You have bought the **${background}** background!`
            },
            SET: {
                noBackgrounds: '[❌] - You don\'t have any background...',
                noBackgroundSpecified: '[❌] - Please specify a background to set! To see the list of available backgrounds, check the `am!background list` command!',
                invalidBackground: '[❌] - Please specify a valid background to set! To see the list of available backgrounds, check the `am!background list` command!',
                success: (background) => `[✅] - You successfully set the **${background}** background!`
            },
            LIST: {
                pleaseWait: "Please wait...",
                closedPaginator: "❌ Paginator closed... ❌",
                embedAuthor: "Rank Background List",
                embedTitle: `The ❌ sign means you don't have the background.\nBuy it with \`am!background buy <background>\` !`
            }
        },
        BALANCE: {
            description: "Displays your current balance.",
            output: (bal) => `You have <a:coin:784930553748520961> **${bal}** coins!`
        },
        DAILY: {
            description: "Gives you coins daily!",
            notReady: (time) => `You already collected your daily bonus! Come back in ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `You've collected your daily reward of ${amount} coins!`
        },
        HELP: {
            TYPES: {
                administration: "Administration",
                economy: "Economy",
                general: "General",
                info: "Info",
                levels: "Levels",
                music: "Music"
            },
            description: `Displays a list of current commands, sorted by category.\nYou can also give an argument, to get more infos about a specific command.`,
            helpEmbedTitle: (command) => `Command: \`${command.name}\``,
            helpEmbedUsage: 'Usage',
            helpEmbedType: 'Type',
            helpEmbedAliases: 'Aliases',
            helpEmbedExamples: 'Examples',
            helpEmbedNotes: 'Notes',
            embedTitle: 'Helixus Commands',
            embedDescription: (prefix) => `**More informations:** \`${prefix}help [command]\``
        },
        IGNORE: {
            description: "Configure in which channel commands should be executed.",
            noChanSpecified: "[❌] - You haven\'t specified a channel to ignore.",
            noRowsIgnored: (chan) => `[✅] - ${chan} will now be ignored for commands.`,
            notIgnored: (chan) => `[✅] - ${chan} will now be listened for commands again.`,
            ignored: (chan) => `[✅] - ${chan} will now be ignored for commands.`
        },
        JOINMESSAGE: {
            description: "Configure the message that will display when a user joins the server",
            notes: 'Here is the list of tags you can use:\n\n{user} - mentions the user\n{username} displays the username of the member\n{server} - displays the server name\n\nYou can use channel and role mentions like you would on an ordinary message.',
            ON: {
                enabled: `[✅] - Join messages have been enabled. If you haven't already, check \`am!help joinmessage\` to see how to configure the join message.`
            },
            OFF: {
                notEnabled: '[❌] - Join messages are currently not enabled.',
                disabled: `[✅] - Join messages have been disabled.`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Please specify a channel name, ID, or mention!',
                noValidChan: '[❌] - You haven\'t specified a valid channel.',
                notEnabled: '[❌] - Join messages are currently not enabled.',
                success: (chan) => `[✅] - Join messages will be sent to ${chan}.`
            },
            noContent: '[❌] - Please specify the join message content. Check the `am!help joinmessage` page to see what tags you can use.',
            notEnabled: '[❌] - Join messages are currently not enabled.',
            success: `[✅] - The join message content has successfully been set.`
        },
        LANG: {
            description: 'Changes the bot\'s language on the server.',
            success: `[✅] - The server language has been updated to **English**!`
        },
        LEAVEMESSAGE: {
            description: "Configure the message that will display when a user leaves the server",
            notes: 'Here is the list of tags you can use:\n\n{username} displays the username of the member\n{server} - displays the server name\n\nYou can use channel and role mentions like you would on an ordinary message.',
            ON: {
                enabled: `[✅] - Leave messages have been enabled. If you haven't already, check \`am!help leavemessage\` to see how to configure the leave message.`
            },
            OFF: {
                notEnabled: '[❌] - Leave messages are currently not enabled.',
                disabled: `[✅] - Leave messages have been disabled.`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Please specify a channel name, ID, or mention!',
                noValidChan: '[❌] - You haven\'t specified a valid channel.',
                notEnabled: '[❌] - Leave messages are currently not enabled.',
                success: (chan) => `[✅] - Leave messages will be sent to ${chan}.`
            },
            noContent: '[❌] - Please specify the leave message content. Check the `am!help leavemessage` page to see what tags you can use.',
            notEnabled: '[❌] - Leave messages are currently not enabled.',
            success: `[✅] - The leave message content has successfully been set.`
        },
        LEVELUP: {
            description: 'Lets you configure the levelup message content/channel target for your server.',
            notes: '__**Channel Parameter**__:\nIf you want it to be displayed where the user has levelled up, type `msgChannel`.\n\n__**Message Parameters**__:\nHere is the list of the tags you can use:\n{user} - mentions the user\n{username} - displays the username\n{server} - displays the server name\n{level} - displays the obtained level',
            CHANNEL: {
                noChanSpecified: '[❌] - Please specify a channel name, ID, or mention!',
                invalidChan: '[❌] - This channel doesn\'t exist.',
                levelNotEnabled: '[❌] - Levelling is not enabled on this server. See `am!help toggle`.',
                success: (chan) => `[✅] - Level up messages will now be sent to ${chan}!`
            },
            MESSAGE: {
                noContent: '[❌] - You haven\'t specified a levelup message content. Please check `am!help levelup` to see which tags you can use inside of your levelup message.',
                levelNotEnabled: '[❌] - Levelling is not enabled on this server. See `am!help toggle`.',
                success: `[✅] - This server's levelup message has been updated!`
            }
        },
        LOGS: {
            description: 'Lets you configure the logging system.',
            ON: {
                alreadyEnabled: '[❌] - Logs are already activated in this server!',
                enabled: `✅ - Logs are now enabled in this server.`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Please specify a channel name, ID, or mention!',
                notEnabled: `[❌] - Logs are not activated in this server.`,
                success: (channel) => `✅ - Logs will now be sent to ${channel}`
            },
            IGNORE: {
                noChanSpecified: '[❌] - Please specify a channel name, ID, or mention!',
                ignored: '[✅] - This channel will now be ignored for logging.',
                notIgnored: '[✅] - This channel will now stop being ignored for logging.'
            },
            TOGGLE: {
                notValidEvent: (logsEventList) => `[❌] - Please provide a valid event.\nValid events: \`${logsEventList}\``,
                notEnabled: `[❌] - Logs are not activated in this server.`,
                eventEnabled: '[✅] - This event will now be logged in this server.',
                eventDisabled: '[✅] - This event will stop being logged in this server.'
            },
            noChanSpecified: "[❌] - Please mention a channel.",
        },
        LOOP: {
            description: 'Loops the music queue',
            noQueue: "[❌] - There is nothing playing.",
            success: (loopStatus) => `✅ - The loop is now ${loopStatus === true ? "**enabled**" : "**disabled**"}!`
        },
        LYRICS: {
            description: 'Displays the lyrics about specified song.',
            noQuery: '[❌] - Please specify a song to search.',
            embedTitle: (title, artist) => `Lyrics for ${title} by ${artist}`,
            embedFooter: "Lyrics service provided by api.ksoft.si"
        },
        NOWPLAYING: {
            description: 'Shows what music is currently playing.',
            noQueue: "[❌] - There is nothing playing.",
            embedAuthor: (title) => `Now playing: ${title}`,
            embedFooter: (time) => `Time Remaining: ${time}`
        },
        PAUSE: {
            description: 'Pauses the musics that its currently playing.',
            noQueue: "[❌] - There is nothing playing.",
            success: (author) => `⏸ ${author} has paused the music.`
        },
        PING: {
            description: 'Displays the bot\'s current **message latency** and **heartbeat**.',
            latency: "Latency",
        },
        PLAY: {
            description: "Allows you to play music from YouTube or SoundCloud!",
            noVoiceChannel: "You need to join a voice channel first!",
            notSameVoiceChannel: "You need to be in the same voice channel as the bot.",
            embedAuthor: "Song selection",
            addedToQueue: (song, author) => `✅ - **${song}** has been added to the queue by ${author}`,
            error: (error) => `Could not join the channel: ${error}`,
            ended: "🚫 Music queue ended.",
            startedPlaying: (title, url) => `🎶 Started playing: **${title}** <${url}>`
        },
        QUEUE: {
            description: 'Displays the whole music queue. Use the reactions to navigate.',
            noQueue: "[❌] - There is nothing playing.",
            embedTitle: "Song Queue\n",
            embedDescription: (title, url, info) => `**Current Song - [${title}](${url})**\n\n${info}`
        },
        RANK: {
            description: 'Displays your level stats.',
        },
        REACTIONROLE: {
            description: 'Lets you configure reaction roles.\nIf a user adds a reaction on a reaction role, the role linked to the reaction will be given to the user.',
            noChanSpecified: "[❌] - You haven\'t specified a channel.",
            noValidChan: '[❌] - You haven\'t specified a valid channel.',
            noMessageID: `[❌] - You haven't specified a message ID.`,
            noEmoteSpecified: `[❌] - You haven't specified an emote.`,
            noValidEmote: `[❌] - You haven't specifed a valid emote.`,
            noRole: `[❌] - The role you specified is not valid or non existant.`,
            emoteAlreadyUsed: '[❌] - This emoji is already used as a reaction role for this message!',
            roleAlreadyUsed: '[❌] - This role is already used as a reaction role for this message!',
            success: (emote) => `[✅] - This role will now be given via reacting with ${emote}`,
            REMOVE: {
                success: `[✅] - The reaction role has successfully been removed.`,
                notFound: `[❌] - The reaction role has not been found.`
            }
        },
        RESUME: {
            description: 'Resumes the musics that its currently playing.',
            noQueue: "[❌] - There is nothing playing.",
            success: (author) => `▶ ${author} has resumed the music.`
        },
        REWARDS: {
            description: 'Lets you configure leveled role rewards.',
            ADD: {
                noLevelSpecified: '[❌] - Please provide a level number for the role reward.',
                noRoleSpecified: '[❌] - Please provide a role for the role reward.',
                levelAlreadyUsed: '[❌] - This level has already been configured for another role!',
                roleAlreadyUsed: '[❌] - This role has already been configured for another level!',
                success: (role, level) => `[✅] - ${role} has been successfully set for level **${level}**!`
            },
            REMOVE: {
                noLevelSpecified: '[❌] - Please provide a level number for the role reward.',
                success: (role, level) => `[✅] - ${role} will no longer be given at level **${level}**!`,
                notFound: (level) => `[❌] - No rewards were found at level **${level}**.`
            },
            SHOW: {
                pleaseWait: "Please wait...",
                closedPaginator: "Paginator closed..",
                embedTitle: (page, pages) => `Role Rewards List (${page + 1}/${pages + 1})`
            }
        },
        SEEK: {
            description: 'Allows you to set the music to a specific point.',
            noQueue: "[❌] - There is nothing playing.",
            notThatLong: "[❌] - The song isn't that long!",
            success: (duration) => `✅ - The song has seeked to **${duration}**!`
        },
        SERVERINFO: {
            description: "Displays informations about the server.",
            owner: "👑 | Owner",
            members: "👥 | Members",
            serverID: "🔑 | Server ID",
            language: "📙 | Language",
            region: "🚩 | Region",
            channelCount: "🗨️ | Channel Count",
            channelCountValue: (channelsSize) => `**${channelsSize}** channels`,
            emojiCount: "👀 | Emoji Count",
            emojiCountValue: (emojisSize) => `**${emojisSize}** emojis`,
            createdOn: "⏱️ | Created On",
            joinedOn: "🔗 | Joined On",
            verificationLevel: "🚥 | Verification Level",
            mfaLevel: "🔒 | MFA Level",
            boostsCount: "🚀 | Boosts Count",
            boostLevel: "🚀 | Boost Level",
            verifiedServer: "<:verified:786313097857335376> | Verified Server",
            verified: "Verified",
            notVerified: "Not Verified",
            partner: "<:partnerowner:776628269356417036> | Partner",
            partnered: "Partnered",
            notPartnered: "Not Partnered",
            moreRole: (rolesLeft) => `and ${rolesLeft} more`,
            moreEmotes: (emotesLeft) => `and ${emotesLeft} more`
        },
        SKIP: {
            description: 'Skips the current song.',
            noQueue: "[❌] - There is nothing playing.",
            success: `✅ - Song has been skipped!`
        },
        STATS: {
            description: 'Shows statistics about the bot.',
            license: "This bot is licensed under the MIT license, for more info please see the full license **[here](https://github.com/chocololat/Helixus/blob/master/LICENSE)**",
            developer: "• __Developer__",
            statistics: "• __Statistics__",
            statisticsValue: (guildsCache, usersCache, channelsSize) => `**Servers**: ${guildsCache}\n**Users**: ${usersCache}\n**Channels**: ${channelsSize}`,
            using: "• __Using__",
            uptime: "• __Uptime__",
            ram: "• __RAM__",
            cpu: (percent) => `• __CPU (${percent.toFixed(2)}%)__`,
            links: "• __Links__",
            supportServer: "Support server",
            invitationLink: "Invitation Link",
            website: "Website (WIP)"
        },
        STOP: {
            description: 'Stops the music and clears the queue.',
            noQueue: "[❌] - There is nothing playing.",
            success: (author) => `⏹ ${author} has stopped the music!`
        },
        TOGGLE: {
            description: 'Toggles on or off the levelling system in your server.',
            OFF: {
                alreadyDisabled: '[❌] - The levelling system is already **disabled**!',
                success: '[✅] - The levelling system has successfully been **disabled** !'
            },
            ON: {
                success: '[✅] - The levelling system has successfully been **enabled** !',
                alreadyEnabled: '[❌] - The levelling system is already **enabled**!'
            }
        },
        TOP: {
            description: 'Displays a leaderboard of the guild\'s XP ranks.',
            pleaseWait: "Please wait...",
            fullTop: (fullTop) => `Here is the full top: ${fullTop}`,
            closedPaginator: "This paginator is closed...",
            embedAuthor: (guildName) => `${guildName} - XP Leaderboard`,
            embedFooter: "Use the reactions to navigate!"
        },
        TRANSLATE: {
            description: 'Allows you to translate text.',
            embedAuthor: "Translate",
            embedTranslatedFrom: (translatedFrom) => `Translated from ${translatedFrom}`,
            embedTranslatedTo: (target) => `to ${target}`
        },
        USERINFO: {
            description: "Displays informations about a specific user __**in the server**__.",
            username: "Username",
            bot: "Bot",
            user: "User",
            none: "None",
            currentStatus: "Current Status",
            accountCreated: "Account created",
            accountCreatedAgo: (time) => `${time} ago`,
            joined: "Joined",
            joinedAgo: (time) => `${time} ago`,
            currentlyActiveOn: "Currently active on",
            offline: "Offline",
            nitroBoostStatus: "Nitro Boost Status",
            nitroBoostStatusAgo: (time) => `${time} ago`,
            noNitroBoostStatus: "No active Server Boost.",
            moreRoles: (rolesSize) => `and ${rolesSize} more.`
        },
        VOLUME: {
            description: 'Changes the volume of the playing song.',
            noQueue: "[❌] - There is nothing playing.",
            volume: (volume) => `🔊 - The volume is at **${volume}%**.`,
            success: (volume) => `✅ - Volume has been set to **${volume}%**!`
        }
    },
    EVENTS: {
        CHANNELCREATE: {
            unknownUser: 'Unknown User',
            created: (type, channel) => `New **${type}** created (**${channel.name}** [<#${channel.id}>])`,
            createdBy: "Created By",
            channelID: "Channel ID",
            permissionsOverwrite: (role) => `Channel Permissions Overwrite:\n${role.name}`,
            permissions: (allowed, denied) => `Type: role\nAllowed Permissions: ${allowed}\nDenied Permissions: ${denied}`,
            none: "None",
        },
        CHANNELDELETE: {
            unknownUser: 'Unknown User',
            deleted: (type, channel) => `A **${type}** has been deleted. (**${channel.name}**)`,
            deletedBy: "Deleted By",
            channelID: "Channel ID"
        },
        CHANNELUPDATE: {
            changedName: (newChannel) => `**${newChannel} name has been changed**`,
            changedTopic: (newChannel) => `**${newChannel} topic has been changed**`,
            changedPermissions: (newChannel) => `**${newChannel} permissions have been changed.**\n*note:* check [docs](https://discordapp.com/developers/docs/topics/permissions) to see what the numbers mean`,
            old: "Old:",
            new: "New:",
            none: "None",
            allowed: (oldPerms, newPerms) => `Allowed Perms: \`${oldPerms}\` to \`${newPerms}\`\n`,
            denied: (oldPerms, newPerms) => `Denied Perms: \`${oldPerms}\` to \`${newPerms}\`\n`,
            deleted: 'Overwrite got deleted'
        },
        EMOJICREATE: {
            unknownUser: 'Unknown User',
            created: (emoji) => `New emoji created (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            createdBy: "Created By",
            emojiID: "Emoji ID",
        },
        EMOJIDELETE: {
            unknownUser: 'Unknown User',
            deleted: (emoji) => `Emoji deleted (**${emoji.name}**)`,
            deletedBy: "Deleted By",
            emojiID: "Emoji ID",
        },
        EMOJIUPDATE: {
            unknownUser: 'Unknown User',
            updated: (emoji) => `Emoji updated (**${emoji.name}** [\`<:${emoji.name}:${emoji.id}>\`])`,
            updatedBy: "Updated By",
            oldName: "Old Name",
            newName: "New Name",
            emojiID: "Emoji ID",
        },
        GUILDBANADD: {
            banned: (user) => `${user.username}#${user.discriminator} has been banned.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
            none: "None",
            bannedBy: "Banned By",
            unknownUser: 'Unknown User',
        },
        GUILDBANREMOVE: {
            unbanned: (user) => `${user.username}#${user.discriminator} has been unbanned.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
            none: "None",
            unbannedBy: "Unbanned By",
            unknownUser: 'Unknown User',
        },
        GUILDMEMBERADD: {
            joined: (member, memberCount) => `${member} joined! We are now **${memberCount}** members !`,
            joinedAt: "Joined at",
            accountAge: "Account Age",
            days: (days) => `**${days}** days`,
            userID: "User ID",
        },
        GUILDMEMBERREMOVE: {
            unknown: "Unknown",
            none: "None",
            lurker: "Lurker",
            lurkerLeft: `A lurker has left the server.`,
            kicked: (member) => `${member.user.username}#${member.user.discriminator} has been kicked.`,
            left: (member) => `${member.user.username}#${member.user.discriminator} has left the server.`,
            userInfos: "User Infos",
            isBot: "\nIs a bot",
            reason: "Reason",
        },
        GUILDMEMBERUPDATE: {
            updated: (member) => `**${member.user.username}#${member.user.discriminator}** (${member})'} was updated.`,
            unknownChanges: "Unknown Changes",
            weird: "For a weird reason, this is empty... check the footer to see who updated the member.",
            newNick: "New Nickname",
            oldNick: "Old Nickname",
            none: "None",
            ID: (memberID, executorID) => `Member ID = ${memberID}\nExecutor = ${executorID}`
        },
        MESSAGE: {
            missingUserPerms: (permissions) => `[❌] - You are missing these permissions: ${permissions}`,
            missingBotPerms: (permissions) => `[❌] - The bot is missing these permissions: ${permissions}`,
            pleaseWait: (time) => `[❌] - Please wait **${time} seconds** before using this command.`,
            restricted: '[❌] - This channel has been restricted for command usage. Only moderators can use commands in this channel.',
            error: (error) => `An error has occured: ${error.message}`,
            lvlUpMessage: "Congratulations {user}, you are now level **{level}** !"
        },
        MESSAGEDELETE: {
            deleted: (message) => `A message from ${message.author} (${message.author.tag}) has been deleted.`,
            deletedBy: "Deleted By",
            attachment: "Attachment",
            content: "Message Content"
        },
        MESSAGEDELETEBULK: {
            deleted: (messages, channel) => `**${messages.size}** messages were deleted in ${channel}.`,
            deletedBy: "Deleted By",
            unknownUser: `Unknown User`,
            header: `The most recent message is at the top. The least recent message is at the bottom.\n\n\n\n`,
            contentWithoutMessage: (link) => `Attachment: ${link}`,
            contentWithMessage: (link, message) => `Attachment: ${link} | Message: ${message}`,
            noContent: "No content has been found..."
        },
        MESSAGEUPDATE: {
            updated: (author) => `A message from ${author} (${author.tag}) has been updated.`,
            oldMessage: "Old Message",
            newMessage: "New Message"
        },
        ROLECREATE: {
            unknownUser: "Unknown User",
            created: `A role has been created`,
            createdBy: "Created By",
        },
        ROLEDELETE: {
            unknownUser: "Unknown User",
            deleted: `A role has been deleted`,
            createdBy: "Deleted By",
            deletedLeft: `Deletion upon member leaving`
        },
        ROLEUPDATE: {
            unknownUser: "Unknown User",
            updated: (role) => `**The role ${role} has been updated (${role.id})**`,
            updatedBy: 'Updated by',
            now: "__**Now**__",
            was: "__**Was**__",
            footer: 'Please check the audit logs to see what specific permissions were changed.'
        },
        VOICESTATEUPDATE: {
            joined: (member, channel) => `${member} **__joined__ ${channel.name}**`,
            switch: (member, newChannel, oldChannel) => `${member} **__joined__ ${newChannel.name}** and **__left__ ${oldChannel.name}**.`,
            left: (member, channel) => `${member} **__left__ ${channel.name}**`,
            updated: (newState) => `**${newState.member.user.username}#${newState.member.user.discriminator}** (${newState.member.id}) had their voice state updated.`,
            voiceChannel: "Voice Channel",
            states: (oldState, newState) => `Was: ${oldState}\nNow: ${newState}`
        }
    }
}