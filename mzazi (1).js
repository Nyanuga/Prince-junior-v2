
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const fs = require("fs");
const path = require("path");
const util = require("util");
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics");
const yts = require("yt-search");
const { DateTime } = require('luxon');
const uploadtoimgur = require('./lib/imgur');
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud"); 
const ytdl = require("ytdl-core");
const Client = new Genius.Client("TUoAEhL79JJyU-MpOsBDkFhJFWFH28nv6dgVgPA-9R1YRwLNP_zicdX2omG2qKE8gYLJat5F5VSBNLfdnlpfJg"); // Scrapes if no key is provided
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/mzaziupload');
const { Configuration, OpenAI } = require("openai");
const { menu, autoread, mode, antidel, antitag, appname, herokuapi, gptdm, botname, antibot, prefix, author, packname, mycode, admin, botAdmin, dev, group, bad, DevMzazi, NotOwner, antilink, antilinkall, wapresence, badwordkick } = require("./set.js");
const { smsg, runtime, fetchUrl, isUrl, processTime, formatp, tanggal, formatDate, getTime,  sleep, generateProfilePicture, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/mzazifunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = mzazi = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
       ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
	  var msgDreaded = m.message.extendedTextMessage?.contextInfo?.quotedMessage;  
   
    const Heroku = require("heroku-client");  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
    const fortu = (m.quoted || m); 
    const quoted = (fortu.mtype == 'buttonsMessage') ? fortu[Object.keys(fortu)[1]] : (fortu.mtype == 'templateMessage') ? fortu.hydratedTemplate[Object.keys(fortu.hydratedTemplate)[1]] : (fortu.mtype == 'product') ? fortu[Object.keys(fortu)[0]] : m.quoted ? m.quoted : m; 

    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
	  
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = (quoted.msg || quoted);

    const cmd = body.startsWith(prefix);
    const badword = bad.split(",");
    const Owner = DevMzazi.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)
    
    // Group
  const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
     const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
     const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : false; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : false;
 
 const maindev = '254723245807';
 const maindev2 = maindev.split(",");
 const date = new Date()  
 const timestamp = speed(); 
 const dreadedspeed = speed() - timestamp 

 
async function generateTempEmail() {
    try {
        const response = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox");
        if (response.data.length > 0) {
            return response.data[0]; // Returns a randomly generated email
        }
        throw new Error("Email generation failed.");
    } catch (error) {
        console.error("Error generating email:", error);
        return null;
    }
}

async function checkEmailInbox(email) {
    if (!email) return [];

    const [login, domain] = email.split("@");
    try {
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        return response.data;
    } catch (error) {
        console.error("Error checking inbox:", error);
        return [];
    }
}
//========================================================================//
function getCountryName(code) {
  const countryNames = {
    US: 'United States',
    NG: 'Nigeria',
    IN: 'India',
    CN: 'China',
    BR: 'Brazil',
    PK: 'Pakistan',
    BD: 'Bangladesh',
    RU: 'Russia',
    JP: 'Japan',
    DE: 'Germany',
    FR: 'France',
    GB: 'United Kingdom',
    IT: 'Italy',
    ES: 'Spain',
    CA: 'Canada',
    MX: 'Mexico',
    ID: 'Indonesia',
    TR: 'Turkey',
    VN: 'Vietnam',
    EG: 'Egypt',
    TH: 'Thailand',
    IR: 'Iran',
    ZA: 'South Africa',
    KE: 'Kenya',
    AR: 'Argentina',
    CO: 'Colombia',
    PE: 'Peru',
    CL: 'Chile',
    UA: 'Ukraine',
    PL: 'Poland',
    NL: 'Netherlands',
    BE: 'Belgium',
    SE: 'Sweden',
    NO: 'Norway',
    DK: 'Denmark',
    FI: 'Finland',
    PH: 'Philippines',
    MY: 'Malaysia',
    KR: 'South Korea',
    SA: 'Saudi Arabia',
    AE: 'United Arab Emirates',
    IQ: 'Iraq',
    SY: 'Syria',
    MA: 'Morocco',
    DZ: 'Algeria',
    ET: 'Ethiopia',
    GH: 'Ghana',
    TZ: 'Tanzania',
    UG: 'Uganda',
    SD: 'Sudan',
    NZ: 'New Zealand',
    AU: 'Australia',
    GR: 'Greece',
    PT: 'Portugal',
    CH: 'Switzerland',
    AT: 'Austria',
    CZ: 'Czech Republic',
    RO: 'Romania',
    HU: 'Hungary',
    IL: 'Israel',
    SG: 'Singapore',
    HK: 'Hong Kong',
    TW: 'Taiwan'
  };

  return countryNames[code] || code;
}
//=============================================================================================//
const fs = require('fs');
const path = require('path');

const sendFakeVirusWarning = async (client, m) => {
    try {
        const warningMessages = [
            "⚠️ *WARNING! CRITICAL SECURITY ALERT!* ⚠️",
            "🚨 *Your device has been compromised!* 🚨",
            "🦠 *Virus Detected: Trojan.MpesaStealer.001*",
            "📛 *Unauthorized access detected!*",
            "📡 *Scanning system for potential threats...*",
            "⏳ *Analyzing device security...*",
            "📝 *Suspicious activity found in your WhatsApp data!*",
            "🛑 *Warning! Banking details may be exposed!*",
            "📂 *Malware is attempting to access your phone storage!*",
            "📤 *Uploading your contacts and messages to the dark web...*",
            "🔄 *Deleting personal files...*",
            "💀 *System error: Critical process terminated!*"
        ];

        for (const message of warningMessages) {
            await client.sendMessage(m.chat, { text: message });
        }
    } catch (error) {
        console.error('Error sending virus warning:', error);
    }
};

function loadChatData(remoteJid, messageId) {
    const baseDir = './chats'; // define your baseDir here
    const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
    try {
        const data = fs.readFileSync(chatFilePath, 'utf8');
        return JSON.parse(data) || [];
    } catch (error) {
        return [];
    }
}

// Example command handler
const handleCommand = async (client, m, cmd, command, prefix, mode, dreadedspeed, date) => {
    if (cmd) {
        switch (command) {
            case "junior":
            case "menu":
                await mp3d();

                let cap = `𝗛𝗲𝘆 ${m.pushName}😁, ${getGreeting()}\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐌𝐳𝐚𝐳𝐢\n\n╭═════〘 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 〙═════╮
╭═─────────────────═╮
│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐉𝐔𝐍𝐈𝐎𝐑
│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
│ 𝗠𝗼𝗱𝗲 : ${mode}
│ 𝗦𝗽𝗲𝗲𝗱 : ${dreadedspeed.toFixed(4)} 𝗠𝘀
│ 𝗧𝗶𝗺𝗲 : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi' })}
│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 16𝗚𝗕 𝗼𝗳 32𝗚𝗕
│═════════════════════
│𝐓𝐇𝐈𝐒 𝐈𝐒 𝐏𝐑𝐈𝐍𝐂𝐄-𝐉𝐔𝐍𝐈𝐎𝐑 𝐁𝐎𝐓
╰═─────────────────═╯    
●════ 〘 𝐍𝐨𝐫𝐦𝐚𝐥 〙═──═●
╭══───────◇───────══╮
│ 𝐑𝐞𝐩𝐨
│ 𝐒𝐜
╰══───────◇───────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●
╭══───────◇───────══╮
│ 𝐕𝐢𝐝𝐞𝐨
│ 𝐏𝐥𝐚𝐲
│ 𝐋𝐲𝐫𝐢𝐜𝐬
│ 𝐏𝐥𝐚𝐲2
╰══───────◇───────══╯
𝐓𝐡𝐚𝐧𝐤𝐬 𝐭𝐨:
𝐌𝐙𝐀𝐙𝐈 (𝐁𝐨𝐭 𝐁𝐚𝐬𝐞)
𝐎𝐭𝐡𝐞𝐫 𝐢𝐧𝐜𝐥𝐮𝐝𝐢𝐧𝐠 𝐲𝐨𝐮
 `;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/A08nrWx.jpeg' }, caption: cap, fileLength: "9999999999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `PRINCE-JUNIOR`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/mzazi.jpg'),
                                sourceUrl: 'https://wa.me/254741388986?text=Hello👋+Mzazi+Nihostie+Bot+Mkuu+😔',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
          // Group Commands
break;



	      case 'video': {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try { 
    if (!text) {
      return sendReply(client, m, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 PRINCE-JUNIOR");
    }
 
    let search = await yts(text);
    if (!search.all.length) {
      return sendReply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 PRINCE-JUNIOR",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply(client, m, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒎𝒛𝒂𝒛𝒊 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
    }
  } catch (error) {
 
    return reply(client, m, `An error occurred: ${error.message}`);
  }
};
  break;
		      case "advice":
reply(advice());
console.log(advice());

break;

case "owner": case "developer": case "dev":
client.sendContact(from, maindev2, m)
break;

		      case "lyrics2": 
 try { 
 if (!text) return reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 ${text}. 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 PRINCE-JUNIOR`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break;
        
	case "play2": {
 const yts = require("yt-search");

    try {
        if (!text) return m.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return m.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
        }

        const urlYt = videos[0].url;

        try {
            let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);

            const { title, format, url: audioUrl } = data.result;

            await client.sendMessage(
                m.chat,
                {
                    document: { url: audioUrl },
                    mimetype: "audio/mpeg",
		    caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕Y PRINCE-JUNIOR",
                    fileName: `${title}.mp3`,
                },
                { quoted: m }
            );
        } catch (error) {
            console.error("API request failed:", error.message);
            m.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
        }
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
};
        break;


default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});



 
  
