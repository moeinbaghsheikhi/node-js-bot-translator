const homeMenu = (bot, chatId) => {
    const inlineKeyboard = {
        reply_markup: {
          inline_keyboard: [
            [
              { text: 'ترجمه با Google (🇺🇸)', callback_data: '/google' },
              { text: 'ترجمه با Microsoft (🇺🇸)', callback_data: '/microsoft' }
            ],
            [
              { text: 'ترجمه با فرازین (🇮🇷)', callback_data: '/farazin' }
            ]
          ]
        }
      };

      bot.sendMessage(chatId, "به ربات ترجمه خوش اومدی!", inlineKeyboard)
}


module.exports = { homeMenu }