//base by DGXlicon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXlicon
//Instagram: unicorn_xlicon13
//Telegram: t.me/xliconbotinc
//GitHub: @DGXlicon
//WhatsApp: +916909137213
//want more free bot scripts? 
//subscribe to my youtube channel: https://youtube.com/@s4salmanyt

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }