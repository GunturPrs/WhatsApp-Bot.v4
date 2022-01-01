/*
  //*NOTE
  //SC INI BELUM ADA FUNCTION BUTTON
  //JADI KALO MAU PAKE BUTTON KASIH FUNCTION SENDIRI AJA
  //SC DAH RAPI, MASIH BILANG GK TAHU MANA YG ERROR
  //LU JANGAN SOK KERAS, BILANG SC BUATAN SENDIRI
  //GUA AJA MASIH COPAS
*/

const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const { spawn,
   exec
} = require("child_process")
const imgbb = require('imgbb-uploader')
const fs = require('fs')
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const util = require('util')
const yts = require('yt-search');

const { color, 
   bgcolor 
} = require('./lib/color')
const uploader = require('./lib/uploader')
const uploadimg = require('./lib/uploadimg')
const { wait, 
   banner,
   getBuffer, 
   h2k, 
   generateMessageID, 
   getGroupAdmins, 
   getRandom, start, 
   info, 
   success, 
   close,
   formatDate
} = require('./lib/MyFunc')
const { fetchJson, 
   fetchText, 
   getBase64,
   kyun
} = require('./lib/fetch')
const recognize = require('./lib/ocr')
const { createExif,
   modStick 
} = require('./lib/exif')
const { addCmd,
      getCommandPosition,
      getCmd
} = require('./lib/StickCmd')
const { Creator,
      namaOwner,
      NomorOwner,
      namaBot,
      author,
      packname,
      thumbnail,
      fakeImage,
      autoread,
      autocomposing,
      autorecording,
      p_multiprefix,
      p_nonprefix,
      p_prefix,
      browserDescription,
      response,
      only
} = require('./message/config')
const { help } = require('./message/help');

const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vn = JSON.parse(fs.readFileSync('./database/vn.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

let Multiprefix = p_multiprefix;
let Nonprefix = p_nonprefix;
let prefa = p_prefix;
const prefix = p_prefix
let autoRead = autoread
let autoComposing = autocomposing
let autoRecording = autorecording


module.exports = nine = async (nine, mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			//if (mek.key.fromMe) return
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
               const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
		if (Multiprefix) {
			var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-' 
		} else {
			if (Nonprefix) {
				prefix = '';
			} else {
				prefix = prefa;
			}
		}
          body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const arg = body.substring(body.indexOf(' ') + 1)
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const query = body.trim().substring(body.indexOf(' ') + 1);
			const botNumber = nine.user.jid
			const ownerNumber = [`${NomorOwner}@s.whatsapp.net`] 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = nine.contacts[sender] != undefined ? nine.contacts[sender].vname || nine.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await nine.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const totalchat = await nine.chats.all();
		const __err = (e) => {
		console.log(console.log(color('[ERR]', 'red'), e));
		};

	   var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
        var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
       
        switch(hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum`at"; break;
            case 6: hari = "Sabtu"; break;
        }
		switch(bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
			const Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;
			const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
			const timeWib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
	     	const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
               const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
        
			         var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam`; break;
                case 1: waktoonyabro = `Selamat Malam`; break;
                case 2: waktoonyabro = `Selamat Malam`; break;
                case 3: waktoonyabro = `Selamat Pagi`; break;
                case 4: waktoonyabro = `Selamat Pagi`; break;
                case 5: waktoonyabro = `Selamat Pagi`; break;
                case 6: waktoonyabro = `Selamat Pagi`; break;
                case 7: waktoonyabro = `Selamat Pagi`; break;
                case 8: waktoonyabro = `Selamat Pagi`; break;
                case 9: waktoonyabro = `Selamat Pagi`; break;
                case 10: waktoonyabro = `Selamat Pagi`; break;
                case 11: waktoonyabro = `Selamat Siang`; break;
                case 12: waktoonyabro = `Selamat Siang`; break;
                case 13: waktoonyabro = `Selamat Siang`; break;
                case 14: waktoonyabro = `Selamat Siang`; break;
                case 15: waktoonyabro = `Selamat Sore`; break;
                case 16: waktoonyabro = `Selamat Sore`; break;
                case 17: waktoonyabro = `Selamat Sore`; break;
                case 18: waktoonyabro = `Selamat Malam`; break;
                case 19: waktoonyabro = `Selamat Malam`; break;
                case 20: waktoonyabro = `Selamat Malam`; break;
                case 21: waktoonyabro = `Selamat Malam`; break;
                case 22: waktoonyabro = `Selamat Malam`; break;
                case 23: waktoonyabro = `Selamat Malam`; break;
            }
            var ucapanFakereply = "" + waktoonyabro;

	nine.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	nine.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})      
	
if (autoRead) {
nine.chatRead(from)
}
if (autoComposing) {
nine.updatePresence(from, Presence.composing)
}
if (autoRecording) {
nine.updatePresence(from, Presence.recording)
}
	       
		   	const monospace = (string) => {
				return '```' + string + '```';
			};
			const fakeQuoted = {
				key: { fromMe: false, remoteJid: "6281335910842-1635223368@g.us", participant: "0@s.whatsapp.net" }, message: { orderMessage: { itemCount: 69, status: 200, thumbnail: fakeImage, surface: 200, message: namaOwner, orderTitle: author, sellerJid: "0@s.whatsapp.net" } }
			};
               const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				nine.sendMessage(from, teks, text, {quoted:mek})
			}
			const replay = async (teks) => {
			     await nine.sendMessage(from, monospace(teks), "conversation", { quoted: mek, contextInfo: { "forwardingScore": 999, "isForwarded": true }, sendEphemeral: true });
		     };
			const sendMess = (hehe, teks) => {
				nine.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? nine.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : nine.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
		     const sendStick = async (id, stick) => {
		         StickWat = fs.readFileSync("./media/sticker/wait.webp")
		         nine.sendMessage(id, stick, sticker, { quoted: mek})
		     };
		const sendStickerFromUrl = async (jid, url) => {
			try {
				const randomName = (Date.now() / 10000).toString().split(".").join("");
				const nameFile = `./media/sticker/${randomName}.png`;
				const nameSticker = `./media/sticker/${randomName}.webp`;
				const buffer = await getBuffer(url);
				await fs.writeFileSync(nameFile, new Buffer.from(buffer, "stream"));
				await ffmpeg(nameFile).on('start', function (cmd) {
				}).on('error', function (err) {
					fs.unlinkSync(nameFile);
					reply(String(err));
				}).on('end', function () {
					//__err('Success');
					     exec(`webpmux -set exif ./media/sticker/data.exif ${nameSticker} -o ${nameSticker}`, async (error) => {
						//await sleep(1000);
						await sendStick(jid, fs.readFileSync(nameSticker));
						fs.unlinkSync(nameFile);
						fs.unlinkSync(nameSticker);
					});
				}).addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`]).toFormat('webp').save(nameSticker);
			} catch (e) {
				reply(Bug);
				__err(e)
			}
		};
			    
const replyfakelink = (teks) => {
nine.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
                "title": `${namaBot}`,
                "body": "by Guntur P",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/X8X7pW7/Guntur-P.jpg",
                "thumbnail": fakeImage,
                "sourceUrl": `https://youtube.com/channel/UCaXLeoUNSP1CJEkJhQKLHWw`
},mentionedJid:[sender]}, quoted : mek})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
nine.sendMessage(id, buttonMessage, MessageType.buttonsMessage, {quoted: mek})
};


				for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/StickMe/${anji}.webp`)
					nine.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
				}
				for (let gunt of vn){
				if (budy == gunt){
					result = fs.readFileSync(`./media/mp3/${gunt}.mp3`)
					nine.sendMessage(from, result, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
					}
				}
      function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
      }
      function parseMention(text = '') {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
      }


//by Guntur P
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage");
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = nine.contacts[from] != undefined ? nine.contacts[from].vname || nine.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
switch(command) {
case 'listsurah':
anu = await fetchJson('https://melcanz.com/listsurah?&apikey=NebzwRHs')
replay(anu.listsurah)
break
case 'jadwalsholat':
case 'waktusholat':
if (args.length < 1) return reply(`Nama tempat\nexample: ${prefix + command} kediri`)
anu = await fetchJson(`https://melcanz.com/salat?kota=${query}&apikey=NebzwRHs`)
replay(`Tanggal: ${anu.data.tanggal}\nsubuh (${anu.data.subuh})\nduha(${anu.data.duha})\ndzuhur (${anu.data.zuhur})\nasyar (${anu.data.ayar})\nmagrib (${anu.data.magrib})\nisya' (${anu.data.isya})`)
break
case 'menu':
case 'allmenu':
case 'help':
nine.sendMessage(from,
	{
		"contentText": help(prefix, namaBot, namaOwner, NomorOwner, Multiprefix), 
		"footerText": `${Tanggal}`,
		"buttons": [
			{
			"buttonId": `${prefix}runtime`,
			"buttonText": {
			"displayText": "⏳ RUNTIME"
			}, "type": "RESPONSE"
			},
			{
			"buttonId": `${prefix}owner`,
			"buttonText": {
			"displayText": "👷🏻‍♂️ OWNER"
			}, "type": "RESPONSE"
			}
		], "headerType": 6,
		"locationMessage": {
			"degreesLatitude": 0,
			"degreesLongitude": 0,
			"jpegThumbnail": thumbnail 
				},
	}, MessageType.buttonsMessage, { quoted: mek})
break
case 'runtime':
	run = process.uptime();
	replay(kyun(run));
break;
case 'listcmd':
let teksnyee = `「 𝙻𝚒𝚜𝚝 𝙲𝚘𝚖𝚖𝚊𝚗𝚍 𝚂𝚝𝚒𝚌𝚔𝚎𝚛 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*➪𝙸𝙳:* ${i.id}\n*➪𝙲𝚖𝚍:* ${i.chats}`
}
reply(teksnyee)
break
case 'owner':
case 'developer':   
const vcard = 'BEGIN:VCARD\n'  
            + 'VERSION:3.0\n'  
            + `FN: ${namaOwner}\n`  
            + `ORG:${namaBot};\n` 
            + `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:+${NomorOwner}\n`  
            + 'END:VCARD'  
nine.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
ppp = 'Hayoo Mau Ngapain Tuhh Cari Kontak Owner'
replyfakelink(ppp)
break
case 'sc':
case 'script':
  teksnya = `*${namaBot}*\nBot ini menggunakan\nSc: https://github.com/GunturPrs/WhatsApp-Bot.v4\nCara penginstalan: https://youtu.be/DRnfEzLxQhM `
nine.sendMessage(from, teksnya, text, {contextInfo :{text: 'hi',
  "forwardingScore": 1000000000,
  isForwarded: true,
  sendEphemeral: true,
  "externalAdReply": {
                "title": `${namaBot}`,
                "body": "by Guntur P",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/X8X7pW7/Guntur-P.jpg",
                "thumbnail": fakeImage,
                "sourceUrl": `https://github.com/GunturPrs/WhatsApp-Bot.v4`
},mentionedJid:[sender]}, quoted : mek})
break

//OWNER MENU
case 'autoread':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (args.length < 1) return reply(`Pengguan: ${prefix + commad} false/true`);
	if (query === 'true') {
		autoRead = true;
		reply(`Berhasil mengubah autoreading ke ${query}`);
	} else if (query === 'false') {
		autoRead = false;
		reply(`Berhasil mengubah autoreading ke ${query}`);
	} else {
	     replay(`Pengguan: ${prefix + commad} false/true`)
	}
break
case 'autotyping':
case 'autoketik':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (args.length < 1) return reply(`Pengguan: ${prefix + commad} false/true`);
	if (query === 'true') {
		autoComposing = true;
		reply(`Berhasil mengubah autocomposing ke ${query}`);
	} else if (query === 'false') {
		autoComposing = false;
		reply(`Berhasil mengubah autocomposing ke ${query}`);
	}
break
case 'autorecording':
case 'autovn':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (args.length < 1) return reply(`Pengguan: ${prefix + commad} false/true`);
	if (query === 'true') {
		autoRecording = true;
		reply(`Berhasil mengubah autorecording ke ${query}`);
	} else if (query === 'false') {
		autoRecording = false;
		reply(`Berhasil mengubah autorecording ke ${query}`);
	}
break
case 'setprefix':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	text1 = query.split("|")[0];
	text2 = query.split("|")[1];
	if (args.length < 1) return reply(`Options:\n⊳ multiprefix\n⊳ nonprefix\n⊳ bebas`);
	if (query === 'multiprefix') {
		Multiprefix = true;
		reply(`Berhasil mengubah prefix ke ${query}`);
	} else if (query === 'nonprefix') {
		Multiprefix = false;
		Nonprefix = true;
		reply(`Berhasil mengubah prefix ke ${query}`);
	} else {
		Multiprefix = false;
		Nonprefix = false;
		prefa = `${text2}`;
		reply(`Berhasil mengubah prefix ke ${query}`);
	}
break;

case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'shutdown':
     if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
     reply(`Bye...`)
     await sleep(3000)
     process.exit()
break
case 'restart':
      if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
      //reply(response.BentaR)
      exec(`node start.js`)
      reply('_Restarting Bot Success_')
break
case 'leaveall':
 if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
 let totalgroup = nine.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
 for (let id of totalgroup) {
 sendMess(id, 'Byee', null)
 await sleep(3000)
 nine.groupLeave(id)
}
break
case 'join':
 if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
 try {
 if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(response.invalidLink)
 hen = args[0]
 if (!q) return reply('Masukan link group')
 var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
 if (!codeInvite) return fakeitem('pastikan link sudah benar!')
 var response = await nine.acceptInvite(codeInvite)
 fakeitem('SUKSES')
 } catch {
 fakeitem('LINK ERROR!')
 }
break
case 'join2': 
  if (!q) return reply('Linknya?')
  if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
  if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply(response.invalidLink)
  link = args[0].replace('https://chat.whatsapp.com/','')
  fak = nine.query({ json: ['action', 'invite', link],
  expect200: true })
  reply('Berhasil Masuk Grup')
break
case 'bc': 
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (args.length < 1) return reply('.......')
	anu = await nine.chats.all()
	if (isMedia && !mek.message.videoMessage || isQuotedImage) {
		const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		buff = await nine.downloadMediaMessage(encmedia)
		for (let _ of anu) {
		nine.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
  reply('Suksess broadcast')
  } else {
  for (let _ of anu) {
  nine.sendMessage(_.jid, 
		{"contentText": `*「 BROADCAST ${namaBot} 」*\n\n${body.slice(4)}`,
		"footerText": 'by Guntur P',
		"buttons": [
		{"buttonId": `${prefix}menu`,
		"buttonText": {"displayText": "MENU BOT"
		},"type": "RESPONSE"}
		], "headerType": 1,
		}, MessageType.buttonsMessage, {quoted: fakeQuoted} )}
  reply('Suksess broadcast')}
break
case 'bc2':
  if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
  buff10 = await getBuffer (`https://api-xcz.herokuapp.com/api/random/waifu`)
  if (args.length < 1) return reply('teks?')
  anu = await nine.chats.all()
  if (isMedia && !mek.message.videoMessage || isQuotedImage) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  bc = await nine.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  	tes = `${body.slice(4)}`
  	nine.sendMessage(_.jid, bc, { contentText: `*「 ${namaBot} 」*\n*pesan siaran*\n\n${body.slice(4)}`, footerText: `_*${namaBot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff10, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
  reply('Suksess broadcast')
  } else {
  for (let _ of anu) {
  	textt = `${body.slice(4)}`
  nine.sendMessage(_.jid, { contentText: `*「 ${namaBot} 」*\n*pesan siaran*\n\n${body.slice(4)}`, footerText: `_*${namaBot} Broadcast*_`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: '𝐌𝐞𝐧𝐮'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeImage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')}
  reply('Suksess broadcast')}
  break
case 'buggc':
     if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
     await nine.toggleDisappearingMessages(from)
     reply("mampus")
break
case 'clearall':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	anu = await nine.chats.all()
	nine.setMaxListeners(25)
	for (let _ of anu) {
		nine.deleteChat(_.jid)
	}
	reply('Sukses delete all chat :)')
break
case 'clearall2':
     if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
     list_chat = await nine.chats.all()
     for (let chat of list_chat) {
     nine.modifyChat(chat.jid, "delete")
     }
     reply("success clear all chat")
break
case 'clone':
	if (!isGroup) return reply(only.inGroup)
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (args.length < 1) return reply('Tag target yang ingin di clone')
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
	let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
	try {
		pp = await nine.getProfilePicture(id)
		buffer = await getBuffer(pp)
	nine.updateProfilePicture(botNumber, buffer)
		mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
	} catch (e) {
	reply(response.ErroR)
	}
break;
case 'grouplist':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	try {
		fil = totalchat.filter(ttj => ttj.jid.endsWith('g.us'));
		teh = ``;
		for (m = 0; m < fil.length; m++) {
		tyt = Object.keys(fil[m]).includes('metadata') ? fil[m].metadata.participants.length : 0;
		tiot = Object.keys(fil[m]).includes('metadata') ? fil[m].metadata.creation : 1;
		teh += `⊳ Name Group: ${fil[m].name}\n⊳ Group ID: ${fil[m].jid}\n\n`;
			}
		teh = teh.trim();
	reply(teh);
		} catch (e) {
	reply(String(e));
		}
break;
case 'peson':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	nine.toggleDisappearingMessages(from, WA_DEFAULT_EPHEMERAL);
break;
case 'pesoff':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	nine.toggleDisappearingMessages(from, 0);
break;
case 'mute':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	nine.modifyChat(from, ChatModification.mute, 24 * 60 * 60 * 1000);
	reply('succes mute this chat');
break;
case 'unmute':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	nine.modifyChat(from, ChatModification.unmute);
	reply('succes unmute this chat');
break;
case 'setfake':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	if (!isQuotedImage) return reply('Reply Image');
	buff = m.quoted ? m.quoted : m;
	buffer = await buff.download();
	fs.writeFileSync(`./media/image/${encodeURIComponent(query)}.png`, buffer);
	reply(Sukses);
break;
			case 'mute':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	xcoders.modifyChat(from, ChatModification.mute, 24 * 60 * 60 * 1000);
	reply('succes mute this chat');
	break;
			case 'unmute':
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	xcoders.modifyChat(from, ChatModification.unmute);
	reply('succes unmute this chat');
	break;
//end owner

//tols
//case 'toimg':
case 'tomedia':
	if (!isQuotedSticker) return reply('Reply stiker nya')
	if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
		const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		const media = await nine.downloadAndSaveMediaMessage(encmedia)
		const upload = await uploadimg(media, Date.now() + '.webp')
		console.log(upload)
		reply(`${upload.result.image}`)
		const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
		console.log(rume.data)
		sendMediaURL(from, rume.data.result)
	} else {
		const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		const media = await nine.downloadAndSaveMediaMessage(encmedia)
		ran = '1000.png'
		exec(`ffmpeg -i ${media} ${ran}`, (err) => {
		fs.unlinkSync(media)
		if (err) return reply(response.error)
		buffer = fs.readFileSync(ran)
		nine.sendMessage(from, buffer, image, {quoted: mek})
		fs.unlinkSync(ran)
	})
	}
break
case 'tourl':
   if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
   boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
   owgi = await nine.downloadMediaMessage(boij)
   res = await uploader(owgi)
    replay(res)
    } else {
    reply('kirim/reply gambar/video')
    }
break
case 'inspect':
	if (args.length < 1) return reply('Wrong format!');
	codee = query.split('http://chat.whatsapp.com/')[1];
	var res = await nine.query({
	json: ["query", "invite", codee],
	expect200: true
	});
	str = `\n\t\t\t「 Group Link Inspector 」\n\n⊳ Id: ${res.id}\n⊳ Nama grup: ${res.subject}\n⊳ Dibuat oleh @${res.id.split('-')[0]}\n⊳ pada ${formatDate(res.creation * 1000)}${res.subjectOwner ? `\n⊳ Judul diubah oleh @${res.subjectOwner.split(`@`)[0]}\n⊳ pada ${formatDate(res.subjectTime * 1000)}` : ''}${res.descOwner ? `\n⊳	Deskripsi diubah oleh @${res.descOwner.split(`@`)[0]}\n⊳ pada ${formatDate(res.descTime * 1000)}` : ''}\n⊳ Jumlah Member: ${res.size}\n⊳ Teman yang diketahui join: ${res.participants ? '\n' + res.participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}\n${res.desc ? `\n⊳ Deskripsi:\n${res.desc}` : '\nTidak ada Deskripsi'} `;
	let getProfile;
	try {
	getProfile = await nine.getProfilePicture(res.id);
	} catch {
	getProfile = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWnXU35BqHt-Nqy5Eyu6ghATbR7_6YEcy9w&usqp=CAU";
	}
	buff = await getBuffer(getProfile);
	nine.sendMessage(from, buff, 'imageMessage', { quoted: fakeQuoted, caption: monospace(str), contextInfo: { mentionedJid: parseMention(str) } });
break
case 'ocr':
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await nine.downloadAndSaveMediaMessage(encmedia)
	reply(responsewait)
	await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
		.then(teks => {
		reply(teks.trim())
		fs.unlinkSync(media)
		})
	.catch(err => {
	reply(err.message)
	fs.unlinkSync(media)
		})
		} else {
	reply('Foto aja mas')
	}
break
case 'imgbb':
var imgbb = require('imgbb-uploader')
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var media = await nine.downloadAndSaveMediaMessage(encmedia)
imgbb('39d895963468b814fad0514bd28787e2', media).then(data => {
var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
ibb = fs.readFileSync(media)
nine.sendMessage(from, ibb, image, { quoted: mek, caption: caps } )
}) .catch(err => { throw err })
break
//end tols

//GROUP MENU
case 'online':
case 'listonline':
case 'here':   
 if (!isGroup) return reply(`Only group`)
  try {
  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
  let online = [...Object.keys(nine.chats.get(ido).presences), nine.user.jid]
  nine.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
  } catch (e) {
  reply(`${e}`)
  }
break
case 'setgrupname':
  if (!isGroup) return replay(only.inGroup)
  if (!isBotGroupAdmins) return 
  if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
  nine.groupUpdateSubject(from, q)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
break
case 'setdesc':
  if (!isGroup) return replay(only.inGroup)
  if (!isBotGroupAdmins) return replay(only.BAdmin)
  if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
  nine.groupUpdateDescription(from, q)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
break
case 'setppgrup':
   if (!isGroup) return replay(only.inGroup)
   if (!isBotGroupAdmins) return replay(only.BAdmin)
   if (isQuotedImage) {
   let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
   let media = await nine.downloadMediaMessage(encmedia)
   nine.updateProfilePicture(from, media)
  .then((res) => reply(jsonformat(res)))
  .catch((err) => reply(jsonformat(err)))
   } else {
   reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
   }
break
case 'demoteall':
	if (!isOwner && !rn.key.fromMe) return reply(only.OwnerBot)
	if (!isGroup) return replay(only.inGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	members_id = [ ]
	for (let mem of groupMembers) {
	members_id.push(mem.jid)
	}
  nine.groupDemoteAdmin(from, members_id)
break
case 'promoteall':
 if (!isOwner && !rn.key.fromMe) return reply(only.OwnerBot)
 if (!isGroup) return replay(only.inGroup)
 if (!isBotGroupAdmins) return replay(only.BAdmin)    
 members_id = [ ]	
 for (let mem of groupMembers) {
 members_id.push(mem.jid)
 }
 nine.groupMakeAdmin(from, members_id)
break
case 'group':
 apri = 'PILIH MANA MIN?'
 sendButMessage(from, apri, `Silahkan pilih salah satu`, [
 { buttonId: `${prefix}opengc`, buttonText: { displayText: `OPEN`, }, type: 1, },
 { buttonId: `${prefix}closegc`, buttonText: { displayText: `CLOSE`, }, type: 1, },
 ]);
break
case "closegc": //by Guntur P
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        nine.groupSettingChange(from, GroupSettingChange.messageSend, false);
break; 
case 'hidetag':
	if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	var value = body.slice(9)
	var group = await nine.groupMetadata(from)
	var member = group['participants']
	var mem = []
	member.map( async adm => {
	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
	})
	nine.sendMessage(from, value, text, {quoted: mek, contextInfo: { mentionedJid: mem }})
break;
case 'tagall':
     if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	members_id = []
	teks = (args.length > 1) ? body.slice(8).trim() : ''
	teks += '\n\n'
	for (let mem of groupMembers) {
		teks += `*${prefix}* @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
	}
	mentions(teks, members_id, true)
	break
case 'tagall2':
     if (!isGroup) return replay(only.inGroup)
	members_id = []
	teks = (args.length > 1) ? body.slice(8).trim() : ''
	teks += '\n\n'
	for (let mem of groupMembers) {
		teks += `*╠➥* @${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
	}
	mentions(teks, members_id, true)
break
case 'tagall3':
     if (!isGroup) return replay(only.inGroup)
	members_id = []
	teks = (args.length > 1) ? body.slice(8).trim() : ''
	teks += '\n\n'
	for (let mem of groupMembers) {
		teks += `*${prefix}* https://wa.me/${mem.jid.split('@')[0]}\n`
		members_id.push(mem.jid)
	}
	mentions(teks, members_id, true)
break
case 'promote':
     if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	if (mentioned.length > 1) {
		teks = 'Berhasil Promote\n'
		for (let _ of mentioned) {
			teks += `@${_.split('@')[0]}\n`
		}
		mentions(from, mentioned, true)
		nine.groupRemove(from, mentioned)
	} else {
		mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
		nine.groupMakeAdmin(from, mentioned)
	}
break
case 'demote':
	if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	if (mentioned.length > 1) {
		teks = 'Berhasil Demote\n'
		for (let _ of mentioned) {
			teks += `@${_.split('@')[0]}\n`
		}
		mentions(teks, mentioned, true)
		nine.groupRemove(from, mentioned)
	} else {
		mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
		nine.groupDemoteAdmin(from, mentioned)
	}
break
case 'add'://by Guntur P
	if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	if (args.length < 1) return reply('Yang mau di add jin ya?')
	if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
	try {
		num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
		nine.groupAdd(from, [num])
	} catch (e) {
		console.log('Error :', e)
		reply('Gagal menambahkan target, mungkin karena di private')
	}
break
case 'kick':
	if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	if (mentioned.length > 1) {
		teks = 'Perintah di terima, mengeluarkan :\n'
		for (let _ of mentioned) {
			teks += `@${_.split('@')[0]}\n`
		}
		mentions(teks, mentioned, true)
		nine.groupRemove(from, mentioned)
	} else {
		mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
		nine.groupRemove(from, mentioned)
	}
break
case 'listadmins':
	if (!isGroup) return replay(only.inGroup)
	teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
	no = 0
	for (let admon of groupAdmins) {
		no += 1
		teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
	}
	mentions(teks, groupAdmins, true)
break
case 'linkgroup':
         if (!isGroup) return replay(only.inGroup)
         if (!isGroupAdmins) return replay(only.AdminGroup)
         if (!isBotGroupAdmins) return replay(only.BAdmin)
         linkgc = await nine.groupInviteCode(from)
         reply('https://chat.whatsapp.com/'+linkgc)
break
case 'leave':
         if (!isGroup) return replay(only.inGroup)
         if (isGroupAdmins && isOwner && !mek.key.fromMe) {
         	nine.groupLeave(from)
         } else {
         replay(only.AdminGroup)
         }
break
case 'welcome':
	if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (Number(args[0]) === 1) {
		if (isWelkom) return reply('Udah aktif um')
		welkom.push(from)
		fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
		reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
	} else if (Number(args[0]) === 0) {
		welkom.splice(from, 1)
		fs.writeFileSync('./database/welcome.json', JSON.stringify(welkom))
		reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
	} else {
		sendButMessage(from, `MODE WELCOME`, `Silahkan pilih salah satu`, [
            {
   buttonId: `${prefix}welcome 1`,
   buttonText: {
     displayText: `ON`,
   },
   type: 1,
            },
            {
   buttonId: `${prefix}welcome 0`,
   buttonText: {
     displayText: `OFF`,
   },
   type: 1,
            },
          ]);
        }
break;
case 'antilink'://by Guntur P
     if (!isGroup) return replay(only.inGroup)
	if (!isGroupAdmins) return replay(only.AdminGroup)
	if (!isBotGroupAdmins) return replay(only.BAdmin)
	if (Number(args[0]) === 1) {
		if (isAntilink) return reply('Anti link group sudah aktif')
		antilink.push(from)
		fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
		reply('Sukses mengaktifkan anti link group di group ini ✔️')
		nine.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
	} else if (Number(args[0]) === 0) {
		if (!isAntilink) return reply('Mode anti link group sudah disable')
		antilink.splice(from, 1)
		fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
		reply('Sukes menonaktifkan anti link group di group ini ✔️')
	} else {
		sendButMessage(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
            {
   buttonId: `${prefix}antilink 1`,
   buttonText: {
     displayText: `ON`,
   },
   type: 1,
            },
            {
   buttonId: `${prefix}antilink 0`,
   buttonText: {
     displayText: `OFF`,
   },
   type: 1,
            },
          ]);
        }
        break
case 'd':
case 'del':
case 'delete': 
     if (!isGroup) return replay(only.inGroup)
	nine.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
//end group

//STICKER MENU

				case 'addsticker':
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nine.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/StickMe/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					nine.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/StickMe/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(response.error)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					nine.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break


case 'ttp':
  if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} GunturP`)
  ini_text = args.join(" ")
  sendStickerFromUrl(from, `https://cililitan.herokuapp.com/api/texttopng?teks=${ini_text}`)
break
case 'stikerwm':
case 'stickerwm':
case 'swm':
  var a = arg.split("|")[0];
  var b = arg.split("|")[1];
  if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  media = await nine.downloadAndSaveMediaMessage(encmedia)
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  const media = await nine.downloadAndSaveMediaMessage(encmedia)
  pe = args.join('')
  var a = pe.split("|")[0];
  var b = pe.split("|")[1];
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out)       
  } else {
  reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
  break
case 'toimg':
	if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
	//reply(response.wait)
	encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	media = await nine.downloadAndSaveMediaMessage(encmedia)
  	ran = getRandom('.png')
	exec(`ffmpeg -i ${media} ${ran}`, (err) => {
	fs.unlinkSync(media)
	if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
	buffer = fs.readFileSync(ran)
	nine.sendMessage(from, buffer, image, {quoted: mek})
	fs.unlinkSync(ran)
	})
break
case 'stiker': //by Guntur P
case 'sticker':
case 's':
  var a = `${packname}`
  var b = `${author}`
  if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
  const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  media = await nine.downloadAndSaveMediaMessage(encmedia)
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
 _out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out) 
  } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
  const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  const media = await nine.downloadAndSaveMediaMessage(encmedia)
  var a = `${packname}`
  var b = `${author}`
  await createExif(a,b)
  out = getRandom('.webp')
  ffmpeg(media)
 .on('error', (e) => {
  console.log(e)
  nine.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
  fs.unlinkSync(media)
})
 .on('end', () => {
_out = getRandom('.webp')
  spawn('webpmux', ['-set','exif','./media/sticker/data.exif', out, '-o', _out])
 .on('exit', () => {
  nine.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
  fs.unlinkSync(out)
  fs.unlinkSync(_out)
  fs.unlinkSync(media)
})
})
 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
 .toFormat('webp')
 .save(out)       
  } else {
  reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'stikernowm': 
case 'stickernowm':
case 'snowm':
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await nine.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.webp')
	await ffmpeg(`./${media}`)
	.input(media)
	.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
	})
	.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	reply(ind.stikga())
})
.on('end', function () {
	console.log('Finish')
	buffer = fs.readFileSync(ran)
	nine.sendMessage(from, buffer, sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
	const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	const media = await nine.downloadAndSaveMediaMessage(encmedia)
	ran = getRandom('.webp')
	reply(ind.wait())
	await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(media)
	tipe = media.endsWith('.mp4') ? 'video' : 'gif'
	reply(ind.stikga())
})
.on('end', function () {
	console.log('Finish')
	buffer = fs.readFileSync(ran)
	nine.sendMessage(from, buffer, sticker, {quoted: mek})
	fs.unlinkSync(media)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
	reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
}
break
//end sticker

//sound menu
      case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'pripun':
      case 'pasi':
      case 'jancok':
         Audio = fs.readFileSync(`./media/mp3/${command}.mp3`)
         nine.sendMessage(from, Audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
      break
case 'randomsound':
const ra = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60"]
const te = ra[Math.floor(Math.random() * ra.length)]
Audio = fs.readFileSync(`./media/mp3/sound${te}.mp3`)
nine.sendMessage(from, Audio, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
				case 'addvn':
					if (!isQuotedAudio) return reply('Reply vn')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await nine.downloadMediaMessage(boij)
					vn.push(`${nm}`)
					fs.writeFileSync(`./media/mp3/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vn.json', JSON.stringify(vn))
					nine.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
				case 'delvn':
					try {
					 nmm = body.slice(7)
					 wanu = vn.indexOf(nmm)
					 vn.splice(wanu, 1)
					 fs.unlinkSync(`./media/mp3/${nmm}.mp3`)
					 reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(response.error)
					}
					break
				case 'vnlist':
				case 'listvn':
					teks = '*Vn List :*\n\n'
					for (let awokwkwk of vn) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vn.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					nine.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vn } })
					break
//end sound

//downloader
case 'ytmp4':
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/ytmp4?url=${query}`)
ytmp4t = `*ytmp4*\n*Title:* ${anu.result.title}\n*Source:* ${query}\n*Deskripsi:* ${anu.result.desc}\n*Link download:* ${anu.result.url}`
ytmp4 = await getBuffer(`${anu.result.url}`)
nine.sendMessage(from, ytmp4, video, {quoted: mek, caption: ytmp4t})
break
case 'facebook':
anu = await fetchJson(`https://melcanz.com/fb?url=${query}&apikey=NebzwRHs`)
Facebook = await getBuffer(`${anu.result.data.url}`)
reply(ytmp3t)
nine.sendMessage(from, Facebook, video, {quoted: mek})
break
case 'tiktok':
anu = await fetchJson(`https://melcanz.com/tiktok?url=${query}&apikey=NebzwRHs`)
ini = await getBuffer(anu.videoHD)
nine.sendMessage(from, ini, video, {quoted: mek, caption: 'nihh kak'})
break
case 'pinterest':
anu = await fetchJson(`https://myselfff.herokuapp.com/docs/downloader/pinterest?query=${query}`)
ini = await getBuffer(anu.result.list)
nine.sendMessage(from, ini, image, {quoted: mek, caption: "nihh"})
break
//end downloader
default://by Guntur P
/*if (budy.includes(`Assalamualaikum`)) {
nine.sendMessage(from, 'Waalaikumsalam, tuben dahh salam', text, {quoted: mek})
       }
if (budy.includes(`Bot`)) {
nine.sendMessage(from, 'Ada apa?, bot aktif kok', text, {quoted: mek})
       }*/
if (budy.startsWith(`Tes`)) {
nine.sendMessage(from, 'Hmmm', text, {quoted: mek})
       }
if (budy.startsWith('Tod')) {
toxic = fs.readFileSync("./media/sticker/toxic.webp")
sendStick(from, toxic)
}
	if (budy.startsWith('$')) {
	if (!isOwner && !mek.key.fromMe) return replay(only.OwnerBot)
	exec(budy.slice(2), (err, stdout) => {
		if (err) return reply(String(err))
		if (stdout) return reply(String(stdout));
	})
	}
	
if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
/*if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}*/
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return nine.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'By GunturP', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isGuntur") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
//by Guntur P
