'use strict';
const fs = require("fs");

const m = '```';
const b = '*';
const i = '_';
const s = '~';

const help = (prefix, namaBot, namaOwner, NomorOwner, Multiprefix) => {
	let number = 0;
	return `\t\t꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷꒦꒷\n\n
${b}╭───☬「 ${namaBot} 」 ☬${b}
${b}│${b}
${b}├─ •${b} ${m}Status: aktive${m}
${b}├─ •${b} ${m}Prefix: ${Multiprefix? 'Multi Prefix' : `${prefix}` }${m}
${b}├─ •${b} ${m}Version bot: 4${m}
${b}├─ •${b} ${m}Owner: wa.me/${NomorOwner} (${namaOwner})${m}
${b}├─ •${b} ${m}Script: By Guntur P${m}
${b}│${b}
${b}└─☬${b}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏\n
\t${b}</𝖮𝗐𝗇𝖾𝗋 𝖬𝖾𝗇𝗎>${b}\n
${m}[${number += 1}]⊳ ${prefix}join </link>${m}
${m}[${number += 1}]⊳ ${prefix}bc </text>${m}
${m}[${number += 1}]⊳ ${prefix}addcmd </reply stick>${m}
${m}[${number += 1}]⊳ ${prefix}delcmd </reply stick>${m}
${m}[${number += 1}]⊳ ${prefix}setprefix </multi/non prefix|prefix>${m}
${m}[${number += 1}]⊳ ${prefix}setfake </reply image>${m}
${m}[${number += 1}]⊳ ${prefix}clone </tag member>${m}
${m}[${number += 1}]⊳ ${prefix}autoread </true/false>${m}
${m}[${number += 1}]⊳ ${prefix}autotyping </true/false>${m}
${m}[${number += 1}]⊳ ${prefix}autovn </true/false>${m}
${m}[${number += 1}]⊳ ${prefix}clearall${m}
${m}[${number += 1}]⊳ ${prefix}leaveall${m}
${m}[${number += 1}]⊳ ${prefix}peson${m}
${m}[${number += 1}]⊳ ${prefix}pesoff${m}
${m}[${number += 1}]⊳ ${prefix}mute${m}
${m}[${number += 1}]⊳ ${prefix}unmute${m}
${m}[${number += 1}]⊳ ${prefix}restart${m}
${m}[${number += 1}]⊳ ${prefix}shutdown${m}
${m}[${number += 1}]⊳ $${m}
${m}[${number += 1}]⊳ >${m}
${m}[${number += 1}]⊳ =>${m}
${m}[${number += 1}]⊳ x${m}\n
\t${b}</Group Menu>${b}\n
${m}[${number += 1}]⊳ ${prefix}add </tag member>${m}
${m}[${number += 1}]⊳ ${prefix}kick </tag member>${m}
${m}[${number += 1}]⊳ ${prefix}promote </tag member>${m}
${m}[${number += 1}]⊳ ${prefix}demote </tag member>${m}
${m}[${number += 1}]⊳ ${prefix}leave${m}
${m}[${number += 1}]⊳ ${prefix}listadmin${m}
${m}[${number += 1}]⊳ ${prefix}listonline${m}
${m}[${number += 1}]⊳ ${prefix}delete </reply pesan bot>${m}
${m}[${number += 1}]⊳ ${prefix}closegc${m}
${m}[${number += 1}]⊳ ${prefix}opengc${m}
${m}[${number += 1}]⊳ ${prefix}linkgroup${m}
${m}[${number += 1}]⊳ ${prefix}welcome </1/0>${m}
${m}[${number += 1}]⊳ ${prefix}antilink </1/0>${m}
${m}[${number += 1}]⊳ ${prefix}tagall${m}
${m}[${number += 1}]⊳ ${prefix}hidetag </teks>${m}\n
\t${b}</Tols>${b}\n
${m}[${number += 1}]⊳ ${prefix}inspect </link group>${m}
${m}[${number += 1}]⊳ ${prefix}ocr </reply image>${m}
${m}[${number += 1}]⊳ ${prefix}tourl </reply image>${m}
${m}[${number += 1}]⊳ ${prefix}imgbb </reply image>${m}
${m}[${number += 1}]⊳ ${prefix}tomedia </reply sticker>${m}\n
\t${b}</Sticker>${b}\n
${m}[${number += 1}]⊳ ${prefix}addsticker </reply sticker>${m}
${m}[${number += 1}]⊳ ${prefix}delsticker </nama sticker>${m}
${m}[${number += 1}]⊳ ${prefix}liststicker${m}
${m}[${number += 1}]⊳ ${prefix}sticker </reply/send image>${m}
${m}[${number += 1}]⊳ ${prefix}stickerwm </reply/send image>${m}
${m}[${number += 1}]⊳ ${prefix}stickernowm </reply/send image>${m}\n
\t${b}</Downloader>${b}\n
${m}[${number += 1}]⊳ ${prefix}ytmp4 </link>${m}
${m}[${number += 1}]⊳ ${prefix}ytmp3 </link>${m}
${m}[${number += 1}]⊳ ${prefix}tiktok </link>${m}
${m}[${number += 1}]⊳ ${prefix}pinterest </query>${m}\n
\t${b}</Image Maker>${b}\n
${m}[${number += 1}]⊳ ${prefix}qrcode${m}
${m}[${number += 1}]⊳ ${prefix}barcode${m}
${m}[${number += 1}]⊳ ${prefix}flame${m}
${m}[${number += 1}]⊳ ${prefix}silktext${m}
${m}[${number += 1}]⊳ ${prefix}glow${m}
${m}[${number += 1}]⊳ ${prefix}smoke${m}
${m}[${number += 1}]⊳ ${prefix}crosslogo${m}
${m}[${number += 1}]⊳ ${prefix}flower${m}
${m}[${number += 1}]⊳ ${prefix}harta${m}
${m}[${number += 1}]⊳ ${prefix}naruto${m}
${m}[${number += 1}]⊳ ${prefix}dropwater${m}
${m}[${number += 1}]⊳ ${prefix}breakwall${m}
${m}[${number += 1}]⊳ ${prefix}matrix${m}
${m}[${number += 1}]⊳ ${prefix}neon${m}
${m}[${number += 1}]⊳ ${prefix}crismes${m}
${m}[${number += 1}]⊳ ${prefix}pantai${m}
${m}[${number += 1}]⊳ ${prefix}fire${m}
${m}[${number += 1}]⊳ ${prefix}write${m}
${m}[${number += 1}]⊳ ${prefix}cslogo${m}
${m}[${number += 1}]⊳ ${prefix}lithgext${m}
${m}[${number += 1}]⊳ ${prefix}skytext${m}
${m}[${number += 1}]⊳ ${prefix}epep${m}
${m}[${number += 1}]⊳ ${prefix}gplaybutton${m}
${m}[${number += 1}]⊳ ${prefix}splaybutton${m}
${m}[${number += 1}]⊳ ${prefix}text3d${m}
${m}[${number += 1}]⊳ ${prefix}text3d2${m}
${m}[${number += 1}]⊳ ${prefix}blackpink${m}
${m}[${number += 1}]⊳ ${prefix}leavest${m}
${m}[${number += 1}]⊳ ${prefix}thunder${m}
${m}[${number += 1}]⊳ ${prefix}light${m}\n
\t${b}</Sound Menu>${b}\n
${m}[${number += 1}]⊳ ${prefix}addvn </reply vn>${m}
${m}[${number += 1}]⊳ ${prefix}delvn </nama vn>${m}
${m}[${number += 1}]⊳ ${prefix}listvn${m}
${m}[${number += 1}]⊳ ${prefix}randomsound${m}
${m}[${number += 1}]⊳ ${prefix}pasi${m}
${m}[${number += 1}]⊳ ${prefix}pripun${m}
${m}[${number += 1}]⊳ ${prefix}jancok${m}
${m}[${number += 1}]⊳ ${prefix}sound1${m}
${m}[${number += 1}]⊳ ${prefix}sound2${m}
${m}[${number += 1}]⊳ ${prefix}sound3${m}
${m}[${number += 1}]⊳ ${prefix}sound4${m}
${m}[${number += 1}]⊳ ${prefix}sound5${m}
${m}[${number += 1}]⊳ ${prefix}sound6${m}
${m}[${number += 1}]⊳ ${prefix}sound7${m}
${m}[${number += 1}]⊳ ${prefix}sound8${m}
${m}[${number += 1}]⊳ ${prefix}sound9${m}
${m}[${number += 1}]⊳ ${prefix}sound10${m}
${m}[${number += 1}]⊳ ${prefix}sound11${m}
${m}[${number += 1}]⊳ ${prefix}sound12${m}
${m}[${number += 1}]⊳ ${prefix}sound13${m}
${m}[${number += 1}]⊳ ${prefix}sound14${m}
${m}[${number += 1}]⊳ ${prefix}sound15${m}
${m}[${number += 1}]⊳ ${prefix}sound16${m}
${m}[${number += 1}]⊳ ${prefix}sound17${m}
${m}[${number += 1}]⊳ ${prefix}sound18${m}
${m}[${number += 1}]⊳ ${prefix}sound19${m}
${m}[${number += 1}]⊳ ${prefix}sound20${m}
${m}[${number += 1}]⊳ ${prefix}sound21${m}
${m}[${number += 1}]⊳ ${prefix}sound22${m}
${m}[${number += 1}]⊳ ${prefix}sound23${m}
${m}[${number += 1}]⊳ ${prefix}sound24${m}
${m}[${number += 1}]⊳ ${prefix}sound25${m}
${m}[${number += 1}]⊳ ${prefix}sound26${m}
${m}[${number += 1}]⊳ ${prefix}sound27${m}
${m}[${number += 1}]⊳ ${prefix}sound28${m}
${m}[${number += 1}]⊳ ${prefix}sound29${m}
${m}[${number += 1}]⊳ ${prefix}sound30${m}
${m}[${number += 1}]⊳ ${prefix}sound31${m}
${m}[${number += 1}]⊳ ${prefix}sound32${m}
${m}[${number += 1}]⊳ ${prefix}sound33${m}
${m}[${number += 1}]⊳ ${prefix}sound34${m}
${m}[${number += 1}]⊳ ${prefix}sound35${m}
${m}[${number += 1}]⊳ ${prefix}sound36${m}
${m}[${number += 1}]⊳ ${prefix}sound37${m}
${m}[${number += 1}]⊳ ${prefix}sound38${m}
${m}[${number += 1}]⊳ ${prefix}sound39${m}
${m}[${number += 1}]⊳ ${prefix}sound40${m}
${m}[${number += 1}]⊳ ${prefix}sound41${m}
${m}[${number += 1}]⊳ ${prefix}sound42${m}
${m}[${number += 1}]⊳ ${prefix}sound43${m}
${m}[${number += 1}]⊳ ${prefix}sound44${m}
${m}[${number += 1}]⊳ ${prefix}sound45${m}
${m}[${number += 1}]⊳ ${prefix}sound46${m}
${m}[${number += 1}]⊳ ${prefix}sound47${m}
${m}[${number += 1}]⊳ ${prefix}sound48${m}
${m}[${number += 1}]⊳ ${prefix}sound49${m}
${m}[${number += 1}]⊳ ${prefix}sound50${m}
${m}[${number += 1}]⊳ ${prefix}sound51${m}
${m}[${number += 1}]⊳ ${prefix}sound52${m}
${m}[${number += 1}]⊳ ${prefix}sound53${m}
${m}[${number += 1}]⊳ ${prefix}sound54${m}
${m}[${number += 1}]⊳ ${prefix}sound55${m}
${m}[${number += 1}]⊳ ${prefix}sound56${m}
${m}[${number += 1}]⊳ ${prefix}sound57${m}
${m}[${number += 1}]⊳ ${prefix}sound58${m}
${m}[${number += 1}]⊳ ${prefix}sound59${m}
${m}[${number += 1}]⊳ ${prefix}sound60${m}\n
\t${b}</Religion>${b}\n
${m}[${number += 1}]⊳ ${prefix}jadwalsholat </tempat>${m}
${m}[${number += 1}]⊳ ${prefix}listsurah${m}\n
\t${b}</Random Image>${b}\n
${m}[${number += 1}]⊳ ${prefix}art${m}
${m}[${number += 1}]⊳ ${prefix}bts${m}
${m}[${number += 1}]⊳ ${prefix}exo${m}
${m}[${number += 1}]⊳ ${prefix}elf${m}
${m}[${number += 1}]⊳ ${prefix}neko${m}
${m}[${number += 1}]⊳ ${prefix}loli${m}
${m}[${number += 1}]⊳ ${prefix}waifu${m}
${m}[${number += 1}]⊳ ${prefix}shota${m}
${m}[${number += 1}]⊳ ${prefix}sagiri${m}
${m}[${number += 1}]⊳ ${prefix}shinobu${m}
${m}[${number += 1}]⊳ ${prefix}megumin${m}
${m}[${number += 1}]⊳ ${prefix}trap${m}
${m}[${number += 1}]⊳ ${prefix}yaoi${m}
${m}[${number += 1}]⊳ ${prefix}blowjob${m}
${m}[${number += 1}]⊳ ${prefix}chiisaihentai${m}
${m}[${number += 1}]⊳ ${prefix}ecchi${m}
${m}[${number += 1}]⊳ ${prefix}hentai${m}
${m}[${number += 1}]⊳ ${prefix}ahegao${m}
${m}[${number += 1}]⊳ ${prefix}hololewd${m}
${m}[${number += 1}]⊳ ${prefix}sideoppai${m}
${m}[${number += 1}]⊳ ${prefix}animefeets${m}
${m}[${number += 1}]⊳ ${prefix}animebooty${m}
${m}[${number += 1}]⊳ ${prefix}animethighss${m}
${m}[${number += 1}]⊳ ${prefix}animearmpits${m}
${m}[${number += 1}]⊳ ${prefix}hentaiparadise${m}
${m}[${number += 1}]⊳ ${prefix}hentaifemdom${m}
${m}[${number += 1}]⊳ ${prefix}hentai4everyone${m}
${m}[${number += 1}]⊳ ${prefix}biganimetiddies${m}
${m}[${number += 1}]⊳ ${prefix}lewdanimegirls${m}
${m}[${number += 1}]⊳ ${prefix}animebellybutton${m}`
}

module.exports = { help };

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update help.js`);
	delete require.cache[file];
	require(file);
});