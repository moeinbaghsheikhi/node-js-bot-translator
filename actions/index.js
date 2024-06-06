// packages
const redis = require('redis')
const client = redis.createClient();
client.connect();

const homeMenu = (bot, chatId) => {
    const inlineKeyboard = {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'ترجمه با Google (🇺🇸)', callback_data: 'google' },
              { text: 'ترجمه با Microsoft (🇺🇸)', callback_data: 'microsoft' }
            ],
            [
              { text: 'ترجمه با فرازین (🇮🇷)', callback_data: 'farazin' }
            ]
          ]
        }
      };

      bot.sendMessage(chatId, "به ربات ترجمه خوش اومدی!", inlineKeyboard)
}

const sendTranslateKeyboard = (bot ,chatId, field, command, keyboard, textMessage, messageId) => {
  client.set(`user:${chatId}:${field}`, command)
  const inline_keyboard = keyboard
  let result = bot.editMessageText(textMessage, {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: inline_keyboard.reply_markup
  })
}


module.exports = { homeMenu, sendTranslateKeyboard }