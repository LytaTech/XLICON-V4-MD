//base by DGXlicon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXlicon
//Instagram: unicorn_xlicon13
//Telegram: t.me/xliconbotinc
//GitHub: @DGXlicon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@s4salmanyt

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: S4 SALMAN YT" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'XLICON-V4-MD' //ur bot name
global.ownernumber = ['923184070915'] //ur owner number, dont add more than one
global.ownername = '𝙎𝙖𝙡𝙢𝙖𝙣 𝘼𝙝𝙢𝙖𝙙' //ur owner name
global.websitex = "https://youtu.com/@s4salmanyt"
global.wagc = "https://whatsapp.com/channel/0029VaINgEZK0IBaK1nDtE3f"
global.themeemoji = '⛩'
global.wm = "Xlicon Bot Inc."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V4-MD' //script link
global.packname = "𝘼𝙃𝙃𝙈𝙄 𝙆𝙐𝙉"
global.author = "MΛDΣ BY 𝙎𝘼𝙇𝙈𝘼𝙉 𝘼𝙃𝙈𝘼𝘿"
global.creator = "923184070915@s.whatsapp.net"
global.xprefix = '+'
global.premium = ["923184070915"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});