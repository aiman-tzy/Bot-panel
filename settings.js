const fs = require('fs')
const chalk = require('chalk')

global.domain = '-' // Isi Link Login Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu

//------------------------------------------------------------------------------------------------\\

global.version = "V2"
global.ownerName = 'ReynaEp' // Isi Nama Owner
global.namaOwner = 'ReynaEp' // Isi Nama Owner Lu

global.botName = 'ReiPanelStore' // Isi Nama Bot
global.namaBot = 'ReiPanelStore' // Isi Nama Bot

global.owner = ['6287864131067', '6288803617785', '62882003146309', '6283188229366', '6287814961026', '6289510478969'] // Isi Nomor Lu
global.ownerNumber = ["6287864131067@s.whatsapp.net"] // Isi Nomor lu
global.nomorOwner = "6287864131067" //Isi Nomor Lu

//------------------------------------------------------------------------------------------------\\

global.sessionName = 'session' // nama session
global.packname = '© By ReinaEp'
global.author = 'Cie Mau Maling\6287864131067'
global.email = 'reyna.greyling@gmail.com'
global.youtube = '_'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']

global.lol = '09b723b1fee8877ff7a8c347'
global.rose = 'Apikeymu'
global.xyro = 'QEZ9ZsQdNz'

global.keyai = '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' // get from https://platform.openai.com/account/api-keys

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 10k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 10k Permanen',
}

//------------------------------------------------------------------------------------------------\\

global.dana = fs.readFileSync('./image/dana.jpg')
global.gopay = fs.readFileSync('./image/gopay.jpg')
global.qris = fs.readFileSync('./image/qris.jpg')
global.logo = fs.readFileSync('./image/logo.jpg')

//------------------------------------------------------------------------------------------------\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})