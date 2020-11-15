const Command = require("../../structures/Command");
const { canModifyQueue } = require("../../structures/Utils");

module.exports = class SkipCommand extends Command {
    constructor(bot) {
        super(bot, {
            name: 'skip',
            description: 'Skips the current song.',
            usage: 'skip',
            type: 'music'
        });
    }

    async run(message) {
        const queue = this.bot.queue.get(message.guild.id);
        if (!queue) return message.reply("There is nothing playing.").catch(console.error);
        if (!canModifyQueue(message.member)) return;

        queue.playing = true;
        queue.connection.dispatcher.end();
        queue.textChannel.send(`✅ - Song has been skipped!`)
    }
}