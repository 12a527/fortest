/*CMD
  command: /fklmlz
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

Bot.editMessage("❤️ፍቅር የኛ ነህ❤️\n1⃣ቤትህ መሆናችን ለኛ \nእጅግ መልካም ነው \nአንተን ከፍ ማድረግ \nእቅዳችን እሱ ነው \nካንተ ጋር ስለሆን \nማን ይቃወመናል \nበኃያሉ ክንድህ\nበእጅህ ተይዘናል \n\n ☞ፍቅር የኛ ነህ \nእኛም ደግሞ የአንተ \nእናመልካለን ከልባችን \nአምረህ ደምቀህ ታይ በህይወታችን \n2⃣መሠረት ሆነኸን ነው መቆማችን ይኸው \nአያይዘው እጃችን \nዳግም አስተሳስረው \nከቤትህ አንርቅም \nምን ጎደለ ብለን \nስምህ ሰብስቦናል \nለኛስ አንተ አለኸን \n\n☞አባት የኛ ነህ \nእኛም ደግሞ የአንተ \nእናመልካለን ከልባችን \nአምረህ ደምቀህ ታይ በህይወታችን \n\n3⃣ከቤትህ ምን ታጥቶ \nማን ይሄዳል ትቶ \nየእንጀራው ህላዌ \nቅዱስ ስጋው በልቶ \nእኛስ አናማትር \nአማራጭ አሽቶን \nአንተ ብቻ በቂ \nበደምህ የገዛኸን \n\n☞የሱስ የኛ ነህ ........\n\nቃልህን እንሠብካለን \nበሰጠኸን ልሣን \nእንዘምራለን በደስታ ተሞልተን \nበመሐላችን ኑር \nአንድነታችን ሁን \nበመንፈስ ቅዱስህ \nልጆችህ አበርታን \n\n☞ጌታ የኛ ነህ ...",msg)&Bot.editInlineKeyboard(b,msg)
