//base by DGXlicon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXlicon
//Instagram: unicorn_xlicon13
//Telegram: t.me/xliconbotinc
//GitHub: @DGXlicon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@s4salmanyt

const { join } = require('path');
const gtts = require('node-gtts');
const { readFileSync, unlinkSync } = require('fs');

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname, '..XliconMedia/trash', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

module.exports = { tts }