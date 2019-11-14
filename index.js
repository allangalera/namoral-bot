const TelegramBot = require('node-telegram-bot-api');
const { Random, nodeCrypto } = require('random-js');
const crypto = require('crypto');

require('dotenv-flow').config()

const random = new Random(nodeCrypto);

const token = process.env.TELEGRAM_TOKEN;

const allanSayings = [
  'Namoral',
  'Qual foi',
  'Ta errado isso ai',
  'Poooooorra',
]

const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  let randomMessage = allanSayings[random.integer(0, allanSayings.length - 1)]
  // send a message to the chat acknowledging receipt of their message
  if (random.bool(0.15))
    bot.sendMessage(chatId, randomMessage);
});
