'use strict';
const fs = require('fs')
const spawn = require("child_process")




exports.createExif = (pack, auth) =>{

    const code = [0x00,0x00,0x16,0x00,0x00,0x00]

    const exif = {"sticker-pack-id": "com.nino.tech",
            "sticker-pack-name": pack, 
            "sticker-pack-publisher": auth, 
            "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", 
            "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}

    let len = JSON.stringify(exif).length

    if (len > 256) {

        len = len - 256

        code.unshift(0x01)

    } else {

        code.unshift(0x00)

    }

    if (len < 16) {

        len = len.toString(16)

        len = "0" + len

    } else {

        len = len.toString(16)

    }

    //len = len < 16 ? `0${len.toString(16)}` : len.toString(16)

    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);

    const __ = Buffer.from(len, "hex")

    const ___ = Buffer.from(code)

    const ____ = Buffer.from(JSON.stringify(exif))

    fs.writeFileSync('./media/sticker/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {

        console.log(err)

        if (err) return console.error(err)

        return `./media/sticker/data.exif`

    })

}
exports.modStick = (media, nino, mek, from) => {

    out = getRandom('.webp')

    try {

        console.log(media)

        spawn('webpmux', ['-set','exif', './media/sticker/data.exif', media, '-o', out])

        .on('exit', () => {

            nino.sendMessage(from, fs.readFileSync(out), 'stickerMessage', {quoted: mek})

            fs.unlinkSync(out)

            fs.unlinkSync(media)

        })

    } catch (e) {

        console.log(e)

        nino.sendMessage(from, 'Terjadi keslahan', 'conversation', { quoted: mek })

        fs.unlinkSync(media)

    }
}






let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update exif.js`);
	delete require.cache[file];
	require(file);
});

