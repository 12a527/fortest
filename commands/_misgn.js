/*CMD
  command: /misgn
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

Bot.editMessage("❤️ምስጋናችን ይመርልን❤️\n\nምስጋናችን ይመርልን ያርግልን/2/\nለእግዚአብሄር ቅዱስ ዙፋን ይድረስልን/2\nይድረስልን/2/ ያርግልን\nለአምላካችን ለጌታችን ለወደደን\nለእግዚአብሄር ዙፋን/2/\nለእግዚአብሄር ይሁን \nየኽው ይድረስልን\n\n         ከመላእክቱ ጋር ቅዱስ እንደሚሉ \n         ጠዋትና ማታ እንደማይሰለቹ \nእኛም ፊቱ በምስጋና እንቀርባለን ኦሆሆ/አሃሃ\nለእግዚአብሄር ይመርልን በዙፋኑ ያርግልን/አሃሃ\n        በጸናች መንግስቱ ጥንት ለነበረ\n        ከሰማያት በላይ ላለው ለሚኖረው\n ይድረስልን ይመርልን ምስጋናችን ኦሆሆ/አሃሃ\n ለእግዚአብሄር ለጌታችን ላምላካችን ኦሆሆ/አሃሃ\n\n           ብድራቱ ይሁን ላደረገልን \n           ይህም ከመጠነው ማመስገናችን\n\nይንገስ ይንገስ ለዘላለም \nእንደ እግዚአብሄር ሃያል የለም\nእንደ እግዚአብሄር አሃሃ\nበዙፋኑ ይኑርልን ምስጋናችን ይመርልን\nያፍስስልን/ያሽትትልን/ አሃሃ",msg)&Bot.editInlineKeyboard(b,msg)
