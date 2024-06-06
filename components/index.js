const homeMenuinlineKeyboard = {
    reply_markup: {
        inline_keyboard: [
        [
            { text: 'دریافت عکس 🖼️', callback_data: '/photo' },
            { text: 'دریافت آهنگ 🎵', callback_data: '/audio' }
        ],
        [
            { text: '🫡 دریافت استیکر', callback_data: '/sticker' }
        ]
        ]
    }
};

module.exports = { homeMenuinlineKeyboard }