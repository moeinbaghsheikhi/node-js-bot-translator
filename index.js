const TelegramBot = require('node-telegram-bot-api');

const token = '7255987246:AAG45qe0oPXgfqVkeQsRZiaIyZNsidroD04';
const bot = new TelegramBot(token, {polling: true});

const components = require("./components")
const actions    = require("./actions")

// start command
bot.onText(/\/start/, (msg, match) => actions.homeMenu(bot, msg.chat.id));