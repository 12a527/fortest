/*CMD
  command: /enadmz2
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
[{title:"💬Send Message",command:"/enadm"}],
[{title:"<-- Go Back",command:"/faqsami"}]]

Bot.editMessage("*Do You Want To Send Any Message To The Developer❓*",msg)&Bot.editInlineKeyboard(b,msg)
