const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()

const allanSayings = [
  'Namoral',
  'Qual foi',
  'Ta errado isso ai',
  'Poooooorra',
]


const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true })


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log('message received')

  let randomNumber = Math.random()

  console.log('randomNumber', randomNumber)

  let isGoingToSend = randomNumber < 0.3

  let randomMessage = allanSayings[(Math.floor(Math.random() * allanSayings.length))]

  // send a message to the chat acknowledging receipt of their message
  if (isGoingToSend)
    bot.sendMessage(chatId, randomMessage);
});
