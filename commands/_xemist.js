/*CMD
  command: /xemist
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
[{title:"ተመለስ",command:"/xedayil"}]
]

Bot.editMessage("ውድ #Great የመቁጠሪያ ሚስጥራትን ከዚህ ማግኘት ይችላሉ።\n\nእነዚህ ሚስጥራት በየማረፊያ የሚደረጉ ናቸው።\n\nእነዚህም 👇🏽\n1⃣የደስታ ምሥጢር\n2⃣የህማም ምሥጢር\n3⃣የክብር ምሥጢር\n\n〰〰〰〰〰〰〰〰〰〰〰〰\n\n\n1⃣የመጀመሪያው ደረጃ :- የክርስቶስን የመጀመሪያዎቹ የ12 አመታት ሕይወቱን የሚመለከቱ ሲሆኑ እነሱም የደስታ ሚስጥራት ተብለው ይጠራሉ።\n\n2⃣ሁለተኛ ደረጃ :- የኢየሱስን ስቃይና ሞቱን የሚያስታውሱ ክፍሎች ናቸው እነዚህ ክፍሎች የሕማም ሚስጥራት ይባላሉ።\n\n3⃣ሶስተኛ ደረጃ :- የክርስቶስን ከሙታን መነሳት የሚያስታውሱ ናቸው እነዚህ ደግሞ የክብር ሚስጥራት ይባላሉ።\n\n〰〰〰〰〰〰〰〰〰〰〰〰\n\nየሚፀለይባቸው ቀናቶች🕰\n🕓የደስታ ምሥጢር #ሰኞና_ሐሙስ\n🕘የሕማም ምሥጢር #ማክሰኞና_ዓርብ\n🕠የክብር ምሥጢር #ሮብ_ቅዳሜ_እሁድ\n🕒የብርሀን ምስጢር #ሀሙስ\n\n▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️▪️\n\n✅የደስታ ሚስጥር\n\n1⃣ቅዱስ ገብርኤል ለቅድስት ድንግል ማርያም ሰላምታ ማቅረቡንና አምላክን ትወልጃለሽ ብሎ ማብሰሩን ማሰብ ነው።\n2⃣ቅድስት ድንግል ማርያም የቅድስት ኤልሳቤጥ መፀነስ በሰማች ጊዜ ልትጎበኛት ወደሷ መሄድዋን ማሰብ ነው።\n3⃣ጌታችን ኢየሱስ ክርስቶስ በቤተልሄም በረት ውስጥ መወለዱን ማሰብ ነው።\n4⃣ጌታችን ኢየሱስ ክርስቶስን በሕፃንነቱ እናቱ ወደ መቅደስ ወስዳ እንዳቀረበችው ማሰብ ነው።\n5⃣ጌታችን ኢየሱስ ክርስቶስ በልጅነቱ ከእናቱ ተለይቶ በቤተ መቅደስ ቢቀር እናቱ ፈልጋ ባገኘችው ጊዜ እጅግ ደስ እንዳላት ማሰብ ነው።\n\n✅የህማም ምሥጢር\n\n1⃣ጌታችን ኢየሱስ ክርስቶስ በጌቴሰማኒ ደም እስኪያልበው ድረስ በፀሎት መድከሙን ማሰብ ነው።\n2⃣ጌታችን ኢየሱስ ክርስቶስ በግንድ ላይ ታስሮ መገረፉን ማሰብ ነው።\n3⃣በጌታችን በኢየሱስ ክርስቶስ ራስ ላይ የእሾህ አክሊል መደፋቱን ማሰብ ነው።\n4⃣ጌታችን ኢየሱስ ክርስቶስ ሞት ተፈርዶበት መስቀሉን ተሸክሞ ወደሚሰቀልበት ቦታ መሄዱን ማሰብ ነው።\n5⃣ጌታችን ኢየሱስ ክርስቶስን በመስቀል ቸንክረውት ተሠቃይቶ መሞቱን ማሰብ ነው።\n\n✅የክብር ሚስጥር\n\n1⃣ጌታችን ኢየሱስ ክርስቶስ ሞቶ ከተቀበረ በኋላ በሶስተኛ ቀን ከሙታን ተለይቶ መነሣቱን ማሰብ ነው።\n2⃣ጌታችን ኢየሱስ ክርስቶስ ከሙታን በተነሳ በ፵ኛው ቀን ወደ ሰማይ በክብር መውጣቱን ማሠብ ነው።\n3⃣ጌታችን ኢየሱስ ክርስቶስ ከሙታን በተነሳ በ፶ኛው ቀን በእመቤታችንና በሐዋርያት ላይ መንፈስ ቅዱስ መውረዱን ማሰብ ነው።\n4⃣ እመቤታችን ድንግል ማርያም ከሞተች በኋላ በሶስተኛው ቀን ከሙታን ተለይታ ተነስታ ወደሰማይ መውጣቷን ማሰብ ነው።\n5⃣አመቤታችን ድንግል ማርያም በሰማይ የክብር አክሊል ደፍታ የመላእክትና የቅዱሳን ንግስት መሆንዋን ማሰብ ነው\n\n✅የብርሃን ምስጢራት\n1⃣ጌታችን ኢየሱስ ክርስቶስ በዮርዳኖስ ወንዝበአጥማቂው ዮሐንስ እጅ እንደተጠመቀ ማሰብ ነው፡፡\n2⃣ጌታችን ኢየሱስ ክርስቶስ በቃና ዘገሊላ በመጀመሪያ ተአምር ውኃን ወደ ወይን ጠጅ መለወጡን ማሰብ ነው፡፡\n3⃣ጌታችን ኢየሱስ ክርስቶስ ስለ እግዚአብሔር መንግስት አዋጅ እንዳደረገ ማሰብ ነው፡፡\n4⃣ጌታችን ኢየሱስ ክርስቶስ በታቦር ተራራ ላይ በሐዋርያት ፊት መልኩ መለወጡን ማሰብ ነው፡፡\n5⃣ጌታችን ኢየሱስ ክርስቶስ በጸሎት ሐሙስ ማታ ከሐዋርያት ጋር ሆነው ቅዱስ ቁርባንን መመሥረቱን ማሰብ ነው፡፡\n\n🍂🌿🍂 @catholicb 🌿🍂🌿",msg)&Bot.editInlineKeyboard(b,msg)
