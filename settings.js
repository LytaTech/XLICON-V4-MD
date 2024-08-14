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
global.ytname = "YT: lyta manhwa" //ur yt chanel name
global.socialm = "GitHub: lyta tech" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'XLYTA-ULTRA-V5-MD' //ur bot name
global.ownernumber = ['2347084528285'] //ur owner number, dont add more than one
global.ownername = 'LYTA-TECH' //ur owner name
global.websitex = "https://youtube.com/@lytamanhwa?si=0QPDWlQ4Xmk9R1e5"
global.wagc = "https://youtube.com/@lytamanhwa?si=0QPDWlQ4Xmk9R1e5"
global.themeemoji = '💙'
global.wm = "XLYTA ULTRA ."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V4-MD' //script link
global.packname = "LYTA"
global.author = "MΛDΣ BY LYTA TECH"
global.creator = "2347084528285@s.whatsapp.net"
global.xprefix = '+'
global.premium = ["2347084528285"] // Premium User

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆','.',' ']
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
