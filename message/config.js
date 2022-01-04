'use strict';
const fs = require("fs");

const Creator = "Guntur P";
const watermark = "WM dari Guntur";
const namaOwner = "GunturP";
const NomorOwner = ['6281335910842'];
const namaBot = "GUNTUR assistant";
const author = "Guntur P";
const packname = "Stick me";
const thumbnail = fs.readFileSync("./media/image/thumbnail.png");
const fakeImage = fs.readFileSync("./media/image/fake.png");

const lolkey = 'ciko' //ini apikey dari lolhuman
const zekskey = 'GunturPrst' //ini apikey dari zeks

const autoread = false;
const autocomposing = false;
const autorecording = false;
const p_multiprefix = true;
const p_nonprefix = false;
const p_prefix = '/';

const browserDescription = {
  set_name: "Guntur P",
  set_browser: "Chrome"
}

const response = {
    "BentaR" : "Mohon Tunggu Sebentar!",
    "success" : "Selesai!",
    "ErroR" : "Terjadi Kesalah!",
    "invalidLink" : "Link tidak valid/error"
     }
    
const only = {
        "OwnerBot" : "Command Hanya Untuk Owner Bot!!",
        "OwnerGroup" : "Command Hanya Untuk Owner Group!!",
        "inGroup" : "Command Hanya Bisa Diguna Di Dalam Group!!",
        "AdminGroup" : "Command Hanya Untuk Admin Group!!",
        "BAdmin" : "Maaf Bot Harus Jadi Admin Group!!"
           }


module.exports = {
      Creator,
      namaOwner,
      namaBot,
      NomorOwner,
      author,
      packname,
      thumbnail,
      fakeImage,
      lolkey,
      zekskey,
      autoread,
      autocomposing,
      autorecording,
      p_multiprefix,
      p_nonprefix,
      p_prefix,
      browserDescription,
      response,
      only
}

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update config`);
  delete require.cache[file];
  require(file);
});
