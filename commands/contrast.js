module.exports.run = async (bot, message, args, con) => {
  const { get } = require("axios");

  if (message.attachments.first()) { url = message.attachments.first().url; } else if (message.mentions.users.first()) { url = message.mentions.users.first().avatarURL(); } else { url = args[0] ? args[0] : message.author.avatarURL(); }

  const m = await message.channel.send("Please wait...");

  get(`api.aliceraina.moe/v1/contrast?url=${url}`, {
    headers: { Authorization: bot.config.helixusapi },
    responseType: "arraybuffer",
  })
    .then(res => message.channel
        .send("Generated with HelixusAPI (docs.helixus.fr)", {
          files: [{ attachment: res.data, name: "contrast.png" }],
        })
        .then(() => m.delete()))
    .catch(err => message.reply(err.message));
};
module.exports.help = {
  name: "contrast",
  catégorie: "Images",
  helpcaté: "images",
};
