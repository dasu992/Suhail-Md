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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Colombo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝚂𝙸𝙻𝙴𝙽 𝙼𝙳" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "94716022100";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94716022100";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_15_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDksXG4gICAgICAgIDQ1LFxuICAgICAgICA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyLFxuICAgICAgICAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyOSxcbiAgICAgICAgMixcbiAgICAgICAgMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDY3LFxuICAgICAgICA4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgNDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDk5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTkyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSGtJOFM4OVJrTUVkK3pEejVXeVpSS1h4VVV3N2xDUFZ4aXgvZEFUUVV2WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNjRWQWNQZEJTNjZXSzBVeUVvdDNxQVwiLFxuICBcInBob25lSWRcIjogXCJmZjA0MzViNS05MTQxLTQ3NTYtOTIyYi04NWIyOWIxMzcwMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTQsXG4gICAgICAxNzIsXG4gICAgICAxMTUsXG4gICAgICAxNDMsXG4gICAgICA5NCxcbiAgICAgIDE0OSxcbiAgICAgIDI0MCxcbiAgICAgIDE2MCxcbiAgICAgIDIwMSxcbiAgICAgIDE2NyxcbiAgICAgIDE3NixcbiAgICAgIDQzLFxuICAgICAgOTUsXG4gICAgICAxODQsXG4gICAgICAyNDQsXG4gICAgICAxMTcsXG4gICAgICAxMDIsXG4gICAgICAyMzMsXG4gICAgICA2NyxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICA1OSxcbiAgICAgIDE5NSxcbiAgICAgIDI1LFxuICAgICAgMTE2LFxuICAgICAgMjM1LFxuICAgICAgMTM3LFxuICAgICAgMjAzLFxuICAgICAgMjA1LFxuICAgICAgMjQxLFxuICAgICAgMTE2LFxuICAgICAgMTM3LFxuICAgICAgMjI0LFxuICAgICAgMTQ3LFxuICAgICAgMzMsXG4gICAgICAxOTYsXG4gICAgICA2NyxcbiAgICAgIDIzOCxcbiAgICAgIDI1NSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDTjRDVDZRR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MjYyNDgyMzQ6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJ8fHwgx6vhtJzhtIfhtIfJtCBzyarKn+G0h8m0IOG0mOG0nMqZyp/JquG0hCDKmeG0j+G0myB8fHxcIixcbiAgICBcImxpZFwiOiBcIjI4NDU0NTI3NDU5MzY3OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01xczF1Z0VFSmE1MnJRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWSt2MWlmcHJqNERUQzZXcE1LTVlFVlpuYUNKVlVWRFhqZmhMTzVGcUdpOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSSWxOdXZNVHhSQ00yL0pCeDh2OTlVSWRobFdsVThSdSt2U0hFcE56VEswM0wwMm9NbnVUV05iNEpQbC9udHBXOENlU29wYzBWZExVSmw3aFJtdWxEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLdmNhZ241Y25JOEZGSUVmS0QyZmI1T05DUXc4OFFEMWVlUmlOd2pCZmRxcTk4aURmbHVxQzVrd0tMcmxXNXlYekt2dzFlZ1ZzV000TWZkQVhDRFlqdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcyNjI0ODIzNDozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjExNDY1MjEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMlZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMyVi5qc29uIjogIntcImtleURhdGFcIjpcIkt6UjI0SzlaaDhqNnFaVG9KZUREaEtJdFdDcU1iblBtcVBmbnFKU25UWXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI5MzI2MDM2MSxcImN1cnJlbnRJbmRleFwiOjksXCJkZXZpY2VJbmRleGVzXCI6WzAsMyw1LDldfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 𝚂𝚒𝚕𝚎𝚗 𝙼𝙳 』```", //*『𝚂𝙸𝙻𝙴𝙽 𝙼𝙳』*\n 🥵𝙴𝙴𝚆 𝙼𝙾𝙳𝙰 𝙿𝙰𝙲𝙰𝚈𝙰"),
 
  author : process.env.PACK_AUTHER|| "𝚜𝚒𝚕𝚎𝚗",
  packname: process.env.PACK_NAME || "𝚖𝚘𝚍𝚣",
  botname : process.env.BOT_NAME  || "𝚂𝙸𝙻𝙴𝙽-𝙼𝙳",
  ownername:process.env.OWNER_NAME|| "𝙼𝚁.𝙳𝙰𝚂𝚄𝙽",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
