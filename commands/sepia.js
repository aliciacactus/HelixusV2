module.exports.run = async (bot, message, args, con) => {
  const { get } = require("axios");

  if (message.attachments.first()) { url = message.attachments.first().url; } else if (message.mentions.users.first()) { url = message.mentions.users.first().avatarURL({ format: "png", size: 512 }); } else { url = args[0] ? args[0] : message.author.avatarURL({ format: "png", size: 512 }); }

  const m = await message.channel.send(bot.lang.images.sepia.wait);

  const jimp = require('jimp');
  jimp.read(url).then(img => {
    img.sepia().getBuffer(jimp.MIME_PNG, (err, res) => {
      message.channel.send({ files: [{ attachment: new Buffer(res, 'base64'), name: "sepia.png" }] })
    })
  })
};
module.exports.help = {
  name: "sepia",
  catégorie: "Images",
  helpcaté: "images",
};