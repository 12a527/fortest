/*CMD
  command: /bfka
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

Bot.editMessage("❤️በፍቅር አስተሳስረን❤️\n☞በፍቅር አስተሳስረን ጌታ\nሀልጊዜ በመንፈስ እንበርታ\nካንተ ላንተ እንረጥ እና \nቤትህን እንሙላው በምስጋና\n\nእንሙላው በምስጋና /2/\n\nእህቴን  ወንድሜን እንደራሴ እንድወድ \nየጥላቻ መንፈስ ከውስጤ ይወገድ \nአንተ እንዳስማርከኝ ያኔ በጎልጎልታ \nእየጠሉኝ እንኳ እኔ ልውደድ ጌታ \n☞በፍቅር አስተሳርረን ....\n☞እንሙላው በምስጋና \n\nባንድ ማእድ በልተን \nካአንድ ማእድ ጠጥተን \nባንደበታችን ሰይፍ \nመቆራረጥ ይብቃን \nየእህቴን ስህተት \nየወንድሜን ጥፋት \nበትዕግስት ልለፈው \nላስተምረው ምህረት \n\nአካሄድ ጉዞዬ ስብከት ይሁንልኝ\nፍቅርህን ይናገር አንተን\nአንተን ይስበክልኝ \nወደ ቤትህ መቅረብ ፍፁም ማያስቡ \nበልጆችህ ፍቅር ይቅኑና ይሳቡ \n\nልጆችህ ስለሆንን ጌታ \nሁልጊዜ በመንፈስ እንበርታ \nካንተ ላንተ እንረጥ እና \nቤትህን እንሙላው በምስጋና \n☞እንሙላው በምስጋና /2/",msg)&Bot.editInlineKeyboard(b,msg)