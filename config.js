const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ😎👽" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263774918784";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263774918784";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1,2,3,4,5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "yo! fetching yo data😎👽" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "263774918784,263774918784";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "263774918784,263774918784";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_33_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI4LFxuICAgICAgICAxODUsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA0NixcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICA2NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4LFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInk1WHhkZ2pQdFByMFBQdUIzSTdZQTlkNHdvbmJMV01henE1WUV2MXhqZU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkJuZkxEcW1OVFlhandXcGxGTk55RlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTVlMTM1MDEtYTk0Yy00YTUzLWE4M2YtMjgwNTdiNTQzNzAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDU2LFxuICAgICAgMzQsXG4gICAgICA2MixcbiAgICAgIDIyMyxcbiAgICAgIDQwLFxuICAgICAgNjMsXG4gICAgICA4OSxcbiAgICAgIDIyMyxcbiAgICAgIDM4LFxuICAgICAgNyxcbiAgICAgIDIwLFxuICAgICAgOTMsXG4gICAgICA5MCxcbiAgICAgIDksXG4gICAgICAxNjgsXG4gICAgICAyMCxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAyMjgsXG4gICAgICAxNDgsXG4gICAgICAxNzgsXG4gICAgICA4MSxcbiAgICAgIDE4MixcbiAgICAgIDI0LFxuICAgICAgMjQ1LFxuICAgICAgMTAsXG4gICAgICAxODIsXG4gICAgICAyNixcbiAgICAgIDIzOSxcbiAgICAgIDEyOCxcbiAgICAgIDE5LFxuICAgICAgODcsXG4gICAgICAxNzEsXG4gICAgICAxMTUsXG4gICAgICAyMSxcbiAgICAgIDExMCxcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEWVM0QTRGR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzc0OTE4Nzg0OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODg2NTI1MTI2MTI1NDI6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzZDNTlVRUVMdmd1clVHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHcDhGYjRuQmtTdDNMczNGSDJvcUU5blh4L1JTQzdJMnk2Zk16T3lRakUwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpsWXAwRDIrZFJqRmpkMElTb09wQWt6M2JOVHowS3VqYVRXRjdNWXd2S1YwcFEwcnJjbDdqOGYyNFByZmhsY1pkSkpVdGkydEFVSFd5ajNwWWRHTURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlQ5WTI1WEFpQzlHMWhGSk81NlNRNW5aUktJbk9XalFUN0drUldQcGorMUZyekJNOHFVd0VWYkpmWk5FQ3l6ZlBEam1PZEpLZnBtUUU1dXpjbnlVeUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3NDkxODc4NDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjcyNDQxOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "yo! data 😎👽" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SUHI😎👽",
  packname: process.env.PACK_NAME || "😎👽",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ BOSSES 😎👽",
  ownername:process.env.OWNER_NAME|| "Mabhosedu RoynJK😎👽",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private,public",
  LANG: ( process.env.THEME ||  "SUHAIL Bosses😎.👽"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "S";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "1,2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "Yo! fetching yo Data 😎👽", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "S",
