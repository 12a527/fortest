/*CMD
  command: /bt50
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
[{title:"⏩ለመመለስ⏪",command:"/tigmez"},{title:"🔼ዋና ገፅ🔽",command:"/menu"}]]

Bot.editMessage("🌷እግ/ር ዓቢ ነገር ገይሩለይ 🌷\n\n1,ኣእምሮይ ተሸጊሩ ፅልግልግ ኢልዎ ስኢኑ ሰላም\nኣዒንተይ'ውን ተጎልቢቡ ሰላም\nንስኻ ነዓይ ሰላመይ ትሓልየላ ተሐንቕቓ ነፍሰይ\nባህ ኢልዋ 'ታ ሕይወተይ እተፍቕራ ኢየሱስ ልዕለይ\n\n   ተደ:\nእግ/ር ዓቢ ነገር ገይሩለይ\nእግ/ር መሪፅዋ ንነፍሰይ\nእግ/ር ሰናይ ነገር ገይሩለይ\nእግ/ር መንገደይ መድሚዱለይ ኣሰይ\n\n2,ብሕማቕ ተግባራተይ ኣቖጢዐካ ከለኹስ መሊስካዮ ሕቶይ\nከም ግብረይ ዘይኮነስ ጀኒንካዮ ቁስለይ\nእንከለኹ ሓጥያተኛ ከይዝኽትም ትኣባብደለይ\nኣብ ፅላል ኣኽናፍካ ድማ ጎይታ ተዕቁበኒ\n\n3,ኣብቲ ፃምእ ምድረ በዳ ይጭነቕ ይሓዝን በይነይ ይመስለኒ\ይነብዕ ይሓዝን ሓይለይ ደኺሙኒ\nንስኻ ኣብቲ ምዱብ ጊዜ ባዕልኻ እትምልሰለይ\nውሉደይ ናተይ እናበልካ ተህድኣ ንነፍሰይ\nገሊኣቶም ኣብቲ ሓይሎም ገሊኣቶም ኣብ ገንዘቦም\nገለ ድማ ኣብ ቅልፅሞም ገለኦም ኣብ ንብረቶም\nኣነ ግና /4/ ኣነ ግና ኣባኻ'የ ዝውከል\n\nገሊኣቶም....\n\nኣነ ግና/5/ ኣብ ኢየሱስ'የ ዝውከል\n\n             🌷🙏🙏🙏🌷\n\nብመዘምራን ደብረ ቅ.ኣንጠንዮስ ጎዳይፍ ኣስመራ Vol#2",msg)&Bot.editInlineKeyboard(b,msg)