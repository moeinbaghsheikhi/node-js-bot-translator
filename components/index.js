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

const googleDestinationLanguage = {
    reply_markup: {
        inline_keyboard: [
        [
            { text: 'انگلیسی', callback_data: 'en' },
            { text: 'فارسی', callback_data: 'fa' }
        ]
        ]
    }
};

const microsoftDestinationLanguage = {
    reply_markup: {
        inline_keyboard: [
        [
            { text: 'انگلیسی', callback_data: 'en' },
            { text: 'فارسی', callback_data: 'fa' }
        ]
        ]
    }
};

const farazinDestinationLanguage = {
    reply_markup: {
        inline_keyboard: [
        [
            { text: 'انگلیسی', callback_data: 'fa_en' },
            { text: 'فارسی', callback_data: 'en_fa' }
        ]
        ]
    }
};

module.exports = { homeMenuinlineKeyboard, googleDestinationLanguage, microsoftDestinationLanguage }