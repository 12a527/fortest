/*CMD
  command: /amlk
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
[{title:"ተመለስ",command:"/mztxt"}]
]

Bot.editMessage("❤️አመልክሀአለሁ❤️\n\n አመልክሀለሁ ዛሬም እንደገና (2) አደንቅሀለሁ (2) ክብር ለዘላለም ያንተ ነው (2) ሞገስ  (2) \n\nልቤ ባንተ ላይ አስርፈሀልና (2) ካንተ ሌላ እንዳልመኝ አድርገሀልና (2) ክብር...........(2) ሞገስ ..........(2) የሚታየው ሁሉ እኔን አላረካኝ (2) እንዳንተ ለእኔ የለም የሚያረካኝ (2) የቱ ያሳርፋል የቱ ያስደስታል (2) ቋሚ አይደለም እንደጊዜው ይለወጣል(2) ልቤ ባንተ ላይ ..........(2) ክብር ለዘላለም ..........(2) ታላቅነት እና ልዑልናን ተላብሰህ (2) ክብርን እና ግርማ ተጎናጽፈህ (2) ዛሬም ትኖራለህ በክብር አንተ (2) \nደምቀህ (2) ምስጋና ላንተ ብቻ ነው (2) ዛሬም በክብር ላለኸው (2) አምልኮ ላንተ ብቻ ነው (2) ዛሬም በክብር ላለኸው (2) በዘመኔ መከናወን ባንተ ሆነልኝ (2) ማረፍ \n (2) ሕይወቴን ላንተ ሰጥቻለሁ (2) በዘመኔ \n(2) ጌታዬ ግዛኝ አስከመጨረሻው (8)",msg)&Bot.editInlineKeyboard(b,msg)