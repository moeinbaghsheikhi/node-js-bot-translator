const TelegramBot = require('node-telegram-bot-api');

// packages
const redis = require('redis')
const client = redis.createClient();
client.connect();

// config
const token = '7255987246:AAG45qe0oPXgfqVkeQsRZiaIyZNsidroD04';
const bot = new TelegramBot(token, {polling: true});

// utils
const components = require("./components")
const actions    = require("./actions")
const messages   = require("./utils/messages")

// start command
bot.onText(/\/start/, (msg, match) => actions.homeMenu(bot, msg.chat.id));

bot.on('callback_query', (query) => {
    const myActions = ["google", "microsoft", "farazin"]
    const myLangs   =  ["fa", "en", "fa_en", "en_fa"]

    const command = query.data
    const chatId = query.message.chat.id
    const messageId = query.message.message_id

    myActions.includes(command) ? actions.sendTranslateKeyboard(bot, chatId, 'action', command, components[`${command}DestinationLanguage`], messages.select_language, messageId) : false
    myLangs.includes(command)   ? actions.sendLanguage(bot, chatId, command, messages.send_query) : false
})

bot.on('polling_error', (error) => {
    console.log("Polling Error: ", error)
})
bot.on('webhook_error', (error) => {
    console.log("WebHook Error: ", error)
})
bot.on('error', (error) => {
    console.log("General Error: ", error)
})