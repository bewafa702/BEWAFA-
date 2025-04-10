 const fs = require("fs");
module.exports.config = {
	name: "aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Owner") ||
     react.includes("OWNER") || 
react.includes("owner")) {
		var msg = {
				body: "𝐖𝐄𝐋𝐂𝐎𝐌 𝐓𝐎 𝐇𝐀𝐍𝐙𝐔 𝐁𝐎𝐓 😇👈●============================================================●\n\n  =𝐎𝐖𝐍𝐄𝐑 ➻    🌹 𝐇𝐀𝐍𝐙𝐔 𝐊𝐈𝐍𝐆 🌹\n●============================================================●\n𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃\n●============================================================● 𝐈𝐍𝐒𝐓𝐀 𝐆𝐑𝐀𝐌 𝐍𝐈 𝐇𝐀 𝐁𝐀𝐁𝐘\n●============================================================●\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 𝐇𝐀𝐍𝐙𝐔 𝐊𝐈𝐍𝐆:- ☞\n𝐂𝐇𝐀𝐑𝐒𝐈 𝐈𝐍𝐒𝐈𝐃𝐄 :- ☞ 𝐊𝐀 𝐋𝐔𝐊 😁😋●============================================================● https://www.facebook.com/profile.php?id=61572573580624`",
				attachment: fs.createReadStream(__dirname + `/noprefix/Tiktok_1740412209802.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
