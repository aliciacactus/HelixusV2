const {
    WebhookClient,
    MessageEmbed
} = require("discord.js")

module.exports = async (bot, emoji) => {
    bot.db.query(`SELECT * FROM Logs WHERE guildID='${emoji.guild.id}'`, async (err, logsSettings) => {
        bot.db.query(`SELECT * FROM Langs WHERE guildID='${emoji.guild.id}'`, async (err, rows) => {
            let {
                EMOJICREATE: lang
            } = require(`../structures/Languages/${rows[0] ? rows[0].lang : "en"}.js`).EVENTS;
            if (logsSettings[0]) {
                if (logsSettings[0].channelID) {
                    if (logsSettings[0].activated = "true") {
                        if (logsSettings[0].emojicreate === "true") {
                            if (logsSettings[0].webhookID && logsSettings[0].webhookToken) {
                                const webhook = new WebhookClient(logsSettings[0].webhookID, logsSettings[0].webhookToken);

                                let embed = new MessageEmbed()
                                    .setAuthor(lang.unknownUser)
                                    .setDescription(lang.created(emoji))
                                    .addField(lang.createdBy, lang.unknownUser, true)
                                    .addField(lang.emojiID, emoji.id, true)
                                    .setThumbnail("https://canary.discordapp.com/assets/8becd37ab9d13cdfe37c08c496a9def3.svg")
                                    .setColor("RANDOM")
                                    .setTimestamp();

                                await setTimeout(async () => {
                                    const logs = await emoji.guild.fetchAuditLogs({
                                        limit: 5,
                                        type: 60
                                    }).catch(() => {
                                        return
                                    });
                                    if (!logs) return;

                                    const log = logs.entries.first()
                                    const user = emoji.guild.members.cache.get(log.executor.id);

                                    if (new Date().getTime() - new Date((log.id / 4194304) + 1420070400000).getTime() < 3000) {
                                        embed.author.name = `${user.user.username}#${user.user.discriminator} ${user.nick ? `(${user.nick})` : ''}`
                                        embed.author.iconURL = `https://cdn.discordapp.com/avatars/${user.id}/${user.user.avatar}.png?size=512`;
                                        embed.fields[0].value = user
                                        embed.thumbnail.url = `https://cdn.discordapp.com/emojis/${emoji.id}.png`

                                        await webhook.send(embed);
                                    } else {
                                        await webhook.send(embed);
                                    }
                                }, 1000)
                            }
                        }
                    }
                }
            }
        })
    })
}