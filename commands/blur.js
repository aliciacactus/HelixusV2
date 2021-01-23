module.exports.run = async (bot, message, args, con) => {
  const { get } = require("axios");

  if (message.attachments.first()) { url = message.attachments.first().url; } else if (message.mentions.users.first()) { url = message.mentions.users.first().avatarURL({ format: "png" }); } else { url = args[0] ? args[0] : message.author.avatarURL({ format: "png" }); }

  try {
    const m = await message.channel.send(bot.lang.images.blur.wait);

    const jimp = require('jimp')
    jimp.read(url).then(img => {
      img.resize(256, 256)
        .blur(4)
        .getBuffer(jimp.MIME_PNG, (error, result) => {
          message.channel.send({ files: [{ attachment: new Buffer(result, 'base64'), name: "blur.png" }] })
        })
    })
  } catch (err) {
    throw err;
  }
};
module.exports.help = {
  name: "blur",
  catégorie: "Images",
  helpcaté: "images",
};