const TelegramBot = require('node-telegram-bot-api');

// packages
const axios = require('axios')
const redis = require('redis')
const client = redis.createClient();
client.connect();

// config
const token = '7255987246:AAG45qe0oPXgfqVkeQsRZiaIyZNsidroD04';
const api_token = "277542:65be30c3eb3ce"
const bot = new TelegramBot(token, {polling: true});

// utils
const components = require("./components")
const actions    = require("./actions")
const messages   = require("./utils/messages")

// start command
bot.onText(/\/start/, (msg, match) => actions.homeMenu(bot, msg.chat.id));

bot.on('callback_query', (query) => {
    const myActions = ["google", "microsoft", "faraazin"]
    const myLangs   =  ["fa", "en", "fa_en", "en_fa", "fr", "es", "pr"]

    const command = query.data
    const chatId = query.message.chat.id
    const messageId = query.message.message_id

    myActions.includes(command) ? actions.sendTranslateKeyboard(bot, chatId, 'action', command, components[`${command}DestinationLanguage`], messages.select_language, messageId) : false
    myLangs.includes(command)   ? actions.sendLanguage(bot, chatId, command, messages.send_query) : false
})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id
    const text   = msg.text

    if(!text.startsWith('/')) {
        const action = await client.get(`user:${chatId}:action`)
        const lang   = await client.get(`user:${chatId}:lang`)

        if(action && lang){
            // translate text with api
            const response = await axios.get(`https://one-api.ir/translate/?token=${api_token}&action=${action}&lang=${lang}&q=` + encodeURIComponent(text))
            let   translated_text
            (action == "faraazin") ? translated_text = response.data.result.base[0][1] : translated_text = response.data.result

            // send translated text to user
            bot.sendMessage(chatId, translated_text)

            // remove records in redis
            await client.del(`user:${chatId}:action`)
            await client.del(`user:${chatId}:lang`)
        } 
        actions.homeMenu(bot, msg.chat.id)
    }
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