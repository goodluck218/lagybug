// CREATOR : ABROTECH
//NOTE: how to become premium please go to file; all/database/premium.json
//NOTE: how to become a public owner, please go to file; all/database/owner.json
// CREDIT : DELTA,HW MODS
require("./all/module")
global.owner = "2348120055226" 
global.namaCreator = "ABRO TECH" 
global.autoJoin = false 
global.antilink = false 
global.versisc = '1.0' 
global.codeInvite = ""
global.isLink = ' ' 
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "BOT" 
global.author = "ABRO TECH" 
global.jumlah = "5" 
global.namabot = "LADY BUG 5.0" 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
