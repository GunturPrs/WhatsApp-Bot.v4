const {
    WAConnection,
    MessageType,
    waChatKey,
    Presence,//
    Mimetype,//
    GroupSettingChange//
} = require('@adiwajshing/baileys')
const fs = require('fs')
const chalk = require("chalk");
const moment = require('moment-timezone')
const { banner, 
    getBuffer, 
    h2k, 
    generateMessageID, 
    getGroupAdmins, 
    getRandom, 
    start, 
    info, 
    success, 
    close } = require('./lib/MyFunc')
const { color } = require('./lib/color')
const { browserDescription, 
    namaBot 
} = require('./message/config');
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./index.js')
nocache('./index.js', module => console.log(`Update ${module}`))


const starts = async (nine = new WAConnection()) => {
    nine.logger.level = 'warn'
    nine.version = [2, 2142, 12];
    nine.browserDescription = [`${browserDescription.set_name}`, `${browserDescription.set_browser}`, '3.0']
    nine.chatOrderingKey = waChatKey(true);
	nine.connectOptions.maxRetries = Infinity;
	nine.logger.level = 'fatal';
    //console.log(banner)
    nine.on('qr', () => {
        nine.sendMessage("6281335910842@s.whatsapp.net", `*Script v4 sukses terkoneksi*\n\nMakasih yaa kak script nya🙏`, MessageType.extendedText)
        console.log(color('[SCAN ME]','red'), color('SEDANG MENUNGGU DI SCAN🔍'))
    })
    nine.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Login Info Updated')
	})

    fs.existsSync('./session.json') && nine.loadAuthInfo('./session.json')
    nine.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    nine.on('open', () => {
        success('2', 'Terhubung')
    })
    await nine.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(nine.base64EncodedAuthInfo(), null, '\t'))

    nine.on('chat-update', async (message) => {
        require('./index.js')(nine, message)
    })
    nine.on("close", async ({ reason, isReconnecting }) => (
		console.log(chalk.gray.bold("Disconnected "+ chalk.yellow.underline(isReconnecting) +" Because "+ chalk.yellow.underline(reason)))
	));
nine.on("group-participants-update", async (anu) => {
    try {
      groupMet = await nine.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await nine.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await nine.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(nine.user.jid)) {
        nine.sendMessage(anu.jid, `Saya Adalah Bot ${namaBot}, saya bisa membuat sticker, membuat image maker, mendownload dll`, "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(nine.user.jid)) {
             const mdata = await nine.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await nine.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const gun = await nine.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const gunt = gun.message["ephemeralMessage"] ? gun.message.ephemeralMessage : gun
                let v = nine.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Jakarta').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Jakarta').format("hh:mm")
                teks = `*┌Halo* @${num.split('@')[0]}\n*├Bɪᴏ* : *${thu.status}*\n*├Mᴇᴍʙᴇʀs : ${memeg}*\n*├Wᴇʟᴄᴏᴍᴇ Tᴏ* : *${mdata.subject}*\n*└Dᴏɴᴛ Fᴏʀɢᴇᴛ Dɪsᴄʀɪᴘᴛɪᴏɴ*`
                tekss = `*Dɪsᴄʀɪᴘᴛɪᴏɴ:* ${mdata.desc}\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`#intro`,buttonText:{displayText:'WELCOME'},type:1}]
                welcomeButt = { contentText: `${teks} `, footerText: `${tekss}`, buttons: welcomeBut, headerType: 6, locationMessage: gunt.message.locationMessage}
                nine.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(nine.user.jid)) {
                const mdata = await nine.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const guntu = await nine.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const guntur = guntu.message["ephemeralMessage"] ? guntu.message.ephemeralMessage : guntu
                let w = nine.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Sayonara* 👋 @${num.split('@')[0]}\n*akhirnya beban keluar juga*`
                goodbyeBut = [{buttonId:` `,buttonText:{displayText:'Byee👋'}, type:1}]
                goodbyeButt = { contentText: `${out}`, footerText: `1 𝖡𝖾𝖻𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋. 𝖪𝖺𝗅𝗂𝖺𝗇 𝖪𝖺𝗉𝖺𝗇 𝖪𝖾𝗅𝗎𝖺𝗋?`, buttons: goodbyeBut, headerType: 6, locationMessage: guntur.message.locationMessage}
                nine.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                  }
        } catch (e) {
            console.log('Error :', e)
        }
    })
    
    /**/
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update start.js`);
  delete require.cache[file];
  require(file);
});

starts()
