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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "263774918784";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263774918784";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0,1,2,3,4,5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording audio🤔😎👽" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_13_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICA2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI3LFxuICAgICAgICA5MCxcbiAgICAgICAgNyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc4LFxuICAgICAgICA2NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAxLFxuICAgICAgICA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgMjQzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzMyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDcwLFxuICAgICAgICA3MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRZWGxoNTcyeDIzK2tPUmRacGtMbjl2Z2Z6UldDUW5YUWNoV0haQVNrWUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImlTdXBNblAyUmJpVlRQUTJVbGxRRFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDNlMmQyZGYtMTg3Zi00ZTJkLTg3NmItNTllMmUxN2FkYTMwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMCxcbiAgICAgIDM5LFxuICAgICAgMjUxLFxuICAgICAgNzQsXG4gICAgICAxNTYsXG4gICAgICAzNixcbiAgICAgIDIwMCxcbiAgICAgIDE3MyxcbiAgICAgIDYsXG4gICAgICA0MCxcbiAgICAgIDM1LFxuICAgICAgMTA0LFxuICAgICAgMTIsXG4gICAgICA3MCxcbiAgICAgIDgyLFxuICAgICAgMjEyLFxuICAgICAgMjEsXG4gICAgICAxMDIsXG4gICAgICAyMDAsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyNDEsXG4gICAgICAxNTEsXG4gICAgICAyMDcsXG4gICAgICA5LFxuICAgICAgMTUxLFxuICAgICAgODIsXG4gICAgICA5OCxcbiAgICAgIDE2MyxcbiAgICAgIDU2LFxuICAgICAgMzEsXG4gICAgICA5NSxcbiAgICAgIDI0LFxuICAgICAgMTYzLFxuICAgICAgMTA2LFxuICAgICAgMjMzLFxuICAgICAgMjExLFxuICAgICAgMjQ0LFxuICAgICAgMjI3LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZUWUxTODIxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3NzQ5MTg3ODQ6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODY1MjUxMjYxMjU0MjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPcUM1OVVFRVAyam1iVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInEvbHRFOHUyVWFnVzFmenpKN3FZMUwzdzZoUmRQZ0lMc1BuZVRJdG1aMEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjF2UTNBSkREbjZKUlRlZTVOWDhsQm52MjRDcTdtSlMzajcwcDd3Snp5dkpLQW04c01VcXBzOVZRWUxmcTNqeSt3Z2tXdjAvRFlUU0dPRWlHTEZ1RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUm1PVWk1Q2J6b2o4VnNFdkFHcDRKTVQ1Y2FwRkR4S0wwVFlDWExVeEYvdlJmd05kZmo5RXkwRWkxclNyTi9WSDFSbFluMVk3dSs0bVZhWk5ZQWhqaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzc0OTE4Nzg0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTc2MDAyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "FILE GENERATED BY SUHAIL BOSS😎👽" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "SUHI BOSSES😎👽",
  packname: process.env.PACK_NAME || "😎👽",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Mabhosedu Royn JK😎👽",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL BOSSES😎👽"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2,1",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
