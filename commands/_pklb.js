/*CMD
  command: /pklb
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let msg = User.getProperty("msgid");

var b =[
[{title:"ተመለስ",command:"/popaba"}]
]

Bot.editMessage("ልባችሁን ክፈቱና የእግዚብሔር ጸጋ እንዲገባ ፍቀዱ! ደህንነት ስጦታ ነው እንጂ ውጫዊ መገለጫ አይደለም!\n\n#ፓፓፍራንቼስኮስ",msg)&Bot.editInlineKeyboard(b,msg)
