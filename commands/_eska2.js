/*CMD
  command: /eska2
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
[{title:"#⃣ዋና ገፅ ",command:"/menu M"},{title:"➡️ቀጣይ ገጽ",command:"/eska3"}]
]

Bot.editMessage("❤️ተአምር 2\n\nበሐምሌ ወር በ ፲፷፻፹፲ ዓም ሴርኔ በሚባል ሸለቆ (ፈረንሳይ ሀገር) አስተማሪዎችና ተማሪዎች ለሽርሽር ሂደው እዚያም ተማሪዎቹ ለመዋኘት ትልቅ ውሀ ውስጥ ገቡ ሲዋኙ ሳሉ አንዱ ጳውሎስ ሜንፍሬዥ የሚባለው ወጣት ባልታወቀ ድንገታዊ አደጋ (እርዱኝ እርዱኝ) እያለ እየጮኸ ውሀው ውስጥ ጠለቀ ሁሉም ተጫጩኸው ሊረዱት ሮጡ ግን አልቻሉም ከሩብ ሰአት በኃላ ሰዎች በጀልባ ላይ ሆነው ሊፈልጉት መጡ። በሩቅ አንገቱ ከውሀ ውስጥ ብቅ ብሎ አዩትና ሲሮጡ ሂደው ጎትተው አወጡት በኃላም እንዴት እንደዳነ ቢጠይቁት እንዲህ ሲል ተናገረ እግሮቼንና እጆቼን ሳር ጨምድዶ ሰለያዘኝ መዋኘት ባለመቻሌ በውሀ ውስጥ ጠለቅኩ በዚያን ጊዜ መሞቴ የተረጋገጠ መሆኑን ተረድቼ ተስፋም ቆርጬ ስጨነቅ ሳለሁ አንገቴ ላይ የነበረው እስካፒለር ውሀ ላይ ሲንሳፈፍ አየሁትና እስካፒለሩን በጄ ጭብጥ አድርጌ (እምዬ ማርያም አድኚኝ) አልኩ ወዲያውኑ አንድ ነገር ገፍቶኝ አንገቴ ከውሀው ላይ ብቅ ብሎ መተንፈስ ቻልኩ። እመቤታችንም የምታድነኝ መሆንዋ አውቄ ምንም ሳልፈራ የሚያወጣኝ ሰው እስኪመጣ ድረስ በተስፋ ስጠባበቅ እናንተ መጥታችሁ አወጣችሁኝ ሰማያዊ እናቴ ወደኔ እንደላከቻችሁ ተገነዘብኩ። ምስጋና ይድረሳት።\n\n\nምንጭ:- ልብሰ ማርያም(እስካፒለር)ከሚል መፅሀፍ......በአባ ገብረ ሚካኤል መኮንን።  የተፃፈ",msg)&Bot.editInlineKeyboard(b,msg)