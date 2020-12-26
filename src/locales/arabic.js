module.exports = {
  GLOBAL: {
    EVERYONE: "Everyone",
    NOT_SPECIFIED: "غير محدد",
    PROVIDE_ARGS: "من فضلك ادخل المتغير",
    ERROR: "حدث خطأ ما",
    NAME: "الاسم",
    NOT_AN_OPTION: "{option} ليس خيارا صحيح ",
    SUCCESS: "تم",
    REASON: "السبب",
    URL: "URLعنوان ",
    NONE: "بلا",
    YES: "نعم",
    NO: "لا",
  },
  GUILD: {
    NOT_FOUND: "لم يتم العثور علي السرفر",
    LEFT: "لقد غادرت  **${guild_name}**",
    LEVEL_UP_MESSAGES: "رسالة رفع المستوي",
    ANNOUNCE_CHANNEL: "قناة الاخبار",
    SUGGEST_CHANNEL: "قناة الاقتراحات",
    WELCOME_CHANNEL: "قناة الترحيب",
    LEAVE_CHANNEL: "قناة المغادرة",
    PREFIX: "Prefix",
    IS_VERIFIED: "نعم ، هذا السرفر تم تأكيده",
    IS_PARTNERED: "نعم هذا السرفر شريك",
    NOT_VERIFIED: "لا هذا السرفر لم يتم تأكيده",
    NOT_PARTNERED: "لا هذا السرفر ليس شريك",
    OWNER: "اونر السرفر",
    CHANNEL_C: "عدد القنوات",
    EMOJI_C: "عدد الايموجيات",
    ROLES_C: "عدد الرولات",
    MEMBER_C: "عدد الاعضاء",
    REGION: "Region",
    VERIFICATION: "مستوي الحماية",
    MFA: "MFA Level",
    BOOSTS: "البوست",
    BOOST_LVL: "مستوي البوست",
    VERIFIED: "مؤكد",
    PARTNERED: "شريك",
  },
  MEMBER: {
    TAG: "علامة",
    BOT: "هل هو بوت؟",
    ROLES: "الرولات",
    BADGES: "شارات",
    ONLINE: "متصل",
    OFFLINE: "غير متصل",
    MEMBERS: "الاعضاء",
    STATUS: "الحالة",
    CREATED_ON: "تم انشائه بتاريخ",
    JOINED_AT: "انضم بتاريخ",
    ID: "الايدي",
    USERNAME: "اسم الشخص",
    NICKNAME: "اللقب",
    PROVIDE_MEMBER: "من فضلك منشن شخص",
    NOT_FOUND: "هذا الشخص غير موجود",
    CANNOT_BE_BANNED: "لا يمكنك تبنيد هذا الشخص",
    DM_BAN_MESSAGE: "لقد تم تبنيدك  **banned**من **{guild_name}**, السبب: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} لقد تم تبنيده بنجاح . السبب: **{ban_reason}**. لقد قمت بارسال رسالة اليه .",
    BOT_DATA: "Bot data does not save, therefore I cannot fetch his data",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "رتبتي ليست اعلي من رول  **{role}** ",
    MY_ROLE_MUST_BE_HIGHER: "يجب ان تكون رتبتي اعلي من  **{member}** ",
    YOUR_ROLE_MUST_BE_HIGHER: "يحب ان تكون رتبتك اعلي من  **{role}** ",
    PROVIDE_ROLE: "من فضلك منشن الرول ",
    ALREADY_HAS_ROLE: "هذا المستخدم يمتلك هذه الرتبة بالفعل ",
    ADDED_ROLE_TO: "تم اعطاء رول  **{role}** الي {member} بنجاح",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[اضغط هنا اذا لم يتم تحميل الصورة]",
    CLYDE: "كلايد",
    CUDDLES: "كلود مع ",
    FEEDED: "اطعم",
    HUGGED: "عانق",
    PATTED: "قام بملاطفة",
    KISSED: "قام بتقبيل ",
    POKED: "قام بوخز",
    SLAPPED: "قام بصفع",
    NO_GIPHY_KEY: "No giphy api was found in the config (contact the bot owner)",
    NO_GPIHY_FOUND: "No gifs were found with that",
  },
  ANIMAL: {
    CAT_FACT: "حقيقة القطة",
    DOG_FACT: "حقيقة الكلب",
    SNAIL_FACT: "حقيقة الحلزونt",
    COW: "بقرة",
  },
  BOT_OWNER: {
    SHUTDOWN: "جاري ايقاف البوت",
    EVAL: "Eval command",
    EVAL_TYPE: "النوع",
    EVAL_INPUT: "الادخال",
    EVAL_OUTPUT: "الاخراج",
    UPDATE_NICKNAME: "تم تحديث اللقب بواسطة اونر البوتr",
    UPDATED_NICKNAME: "تم تغير اللقب الي  **{nickname}**",
    PROVIDE_TYPE: "من فضلك قم بادخال شئ ما",
    CANNOT_BL_OWNER: "لا يمكن اعطاء اونر البوت قائمة سوداء",
    CANNOT_BL_BOT: "The bot cannot be blacklisted",
    NOT_BLD: "هذا المستخدم ليس بالقائمة السوداء",
    ALREADY_BLD: "{member} بالفعل بالقائمة السوداء",
    NOT_OPTION: "**{type}** ليس خيارا صحيحاً",
    BLACKLISTED: "blacklisted",
    UNBLACKLISTED: "unblacklisted",
    BLACKLISTED_SUCCESS: "{member} كان {type}",
    BLD_STATUS: "حالة القائمة السوداء",
  },
  LEVELS: {
    XP: "خبرة",
    LEVEL: "المستوي",
    LEADERBOARD: "قائمة المستويات",
    MEMBER_IS_LEVEL: "{member} بالمستوي **{level}** مع **{user_xp}خبرة**",
    RESET_CONF: "اعادة تعيين جميع الخبرة? y/n",
    RESET_SUCCESS: "تم اعادة تعيين  خبرة الجميع",
    RESET_CANCEL: "نم الغاء اعادة تعيين الخبرة",
    PROVIDE_AMOUNT: "من فضلك قم بادخال العدد",
    PROVIDE_VALID_NR: "من فضلك قم بكتابة رقم صحيح",
    GIVE_XP_SUCCESS: "تم اعطاء  **{member}** **{amount}**خبرة بنجاح",
  },
  MUSIC: {
    MUST_BE_IN_VC: "يجب ان تكون بقناة صوتية",
    NO_QUEUE: "ليس هناك شيئ لتشغيله",
    QUEUE_CLEARED: "تم حذف القائمة",
    QUEUE: "قائمة الموسيقيlume",
    BETWEEN_0_100: "يجب ان يكون الصوت بين 0 و 100",
    VOL_SUCCESS: "تم ضبط الصوت الي {vol}%",
    PLAYING: "جاري التشغيل",
    PAUSED: "تم الايقاف",
    DURATION: "التوقيت",
    UPLOADED_BY: "تم الرفع بواسطة",
    UPLOADED_AT: "تم الرفع بتاريخ",
    VIEWS: "المشاهدات",
    LIKES: "الاعجابات",
    DISLIKES: " لم يعجبه",
    SECONDS: "ثانية",
    VOLUME: "الصوت",
    PROVIDE_SEARCH: "الرجاء تقديم استعلام بحث",
    ADDED_TO_QUEUE: "{song} has been added to the queue",
    ADDED_PL_TO_QUEUE: "Playlist add to queue ({length} songs)",
    PROVIDER_NOT_SUPP: "That provider is not supported",
    NOW_PLAYING: "جاري التشغيل:",
    REQUESTED_BY: "بواسطة",
    NO_PERMS: "لا امتلك صلاحيات لهذه القناة الصوتية",
    NOT_SAME_VC: "يجب ان تكون بقناتي الصوتية ",
    MUST_BE_SAME_VC: "You must be in the same voice chat with the bot",
    NO_RESULTS: "No songs were found",
    JOIN_ERROR: "There was an error joining the voice channel, make sure it's not full!",
  },
  ECONOMY: {
    MONEY: "المال",
    BANK: "البنك",
    BALANCE: "الرصيد",
    DAILY_ERROR: "لقد استلمت بالفعل الراتب اليومي",
    WEEKLY_ERROR: "لقد استلمت بالفعل الراتب الاسبوعي",
    DAILY_SUCCESS: "لقد تم اضافة الراتب اليومي اليك وهو  **{amount}** كوينز",
    WEEKLY_SUCCESS: "لقد تم اضافة الراتب الاسبوعي اليك وهو **{amount}** كوينز",
    STORE_EMPTY:
      "المتجر في هذا السرفر فارغ يمكنك طلب من الادمن اضافة اغراض عن كريق امر  `{prefix}store add <الغرض>`",
    PROVIDE_ITEM_TO_BUY: "من فضلك ادخل الغرض المراد اضافته للمتجر",
    NOT_ENOUGH_MONEY: "انت لا تمتلك الرصيد الكافي لشراء ذلك",
    BUY_SUCCESS: "تم شراء **{item}** المبلغ **{price}**",
    NOT_FOUND_STORE:
      "**{query}** الغرض ليس موجود بالمتجر فضلك استخدمuse `{prefix}store` لتري جميع الاغراض المتوفرة بالمتجر",
    ALREADY_OWN_ITEM: "انت بالفعل تمتلك هذا الغرض ",
    PROVIDE_VALID_AMOUNT: "من فضلك استخدم رقم صحيح ",
    DEPOSITED_ALL: "تم ادخار جميع اموالك بنجاح",
    DEPOSITED_AMOUNT: "تم ادخار **{amount} كوينز**",
    WITHDRAW_ALL: "لقد سحبت جميع اموالك بنجاح",
    WITHDRAW_AMOUNT: "لقد قمت بسحب  **{amount}كوينز **",
    PROFILE: "الملف الشخصي",
    INV_EMP: "مخزن المستخدم فارغ",
    INVENTORY: "المخزن",
    INV_ITEMS: "اغراض  بالمخزن",
    VIEW_INVENTORY: "استخدم `{prefix}inventory <user>` لعرض جميع ممتلكاته",
    MONEY_LEADERBOARD: "قائمة متصدرين الاموال",
    TOTAL_BALANCE: "اجمالي الرصيد",
    BOTH_COUNTED: "تم احتساب كل من الرصيد والبنك",
    DICE_LANDED: "لقد حصلت علي : {roll}",
    DICE_WON: "تهانينا لقد فزت ب **{price}كوينز**",
    DICE_LOST: "تحتاج الي الرقم **6* لتفوز ب **{price}كوينز**",
    RECENTLY_WORKED: "لقد حصلت علي عملك اليومي مسبقا, {time} الوقت المتبقي",
    WORKED: "{member} عمله لليوم هو  **{job_name}** ولقد حصل علي  **{amount}**!",
    CANNOT_PAY_SELF: "لا يمكنك الدفع لنفسك",
    PAY_SUCCESS: "تم اعطاء  **{member}** **{amount}كوينز **",
    CANNOT_ROB_SELF: "لا يمكنك سرقة نفسك",
    BETWEEN_1_1000: "يجب ان يكون المبلغ بين 1 و 1000",
    MEMBER_NO_MONEY: "لا يملك المستخدم اي اموال لذلك لا يمكنك سرقته.",
    ROB_SUCCESS: "تمت السرقة **{amount}كوينز ** من **{member}**",
    STORE: "المتجر",
    MANAGE_STORE_PERMS: "انت لا تمتلك الصلاحيات الكافية  (Manage Server)",
    PROVIDE_VALID_ITEM: "من فضلك اختر غرض صحيح add/remove!",
    PRICE: "السعر",
    ALREADY_EXISTS: "**{item}** بالفعل متواجد بالمتجر",
    PROVIDE_PRICE: "من فضلك ادخل السعر ",
    MUST_BE_NUMBER: "المبلغ يجب ان يكون رقم!",
    ADDED_TO_STORE: "الي المتجر {item} تم اضافة",
    NOT_IN_STORE: "**{item}** غير موجود بالمتجر",
    REMOVED_FROM_STORE: "من المتجر {item} تمت ازالة ",
    WON_SLOTS: "You won and got {amount} coins",
    LOST_SLOTS: "You lost!",
    MAX_BET: "max bet amount is 500",
    ADDED_MONEY: "Successfully added {amount} to user balance",
    MIN_BET: "Minimum bet of 1 is required",
    MIN_AMOUNT: "Amount must be above 0",
    RESET_CONF: "Reset all balance? y/n",
    RESET_SUCCESS: "Successfully reset everyone's balance",
    RESET_CANCEL: "reset-economy was canceled",
  },
  GAMES: {
    BETS_ON: "{member_1} يراهن علي {member_2}",
    LOST_BET: "{member_1} راهن علي {member_2}!\n {member_1} لم يفز بالمراهنة",
    WON_BET: "{member_1} bet on {member_2} و {member_1} فاز بالمراهنة",
    CALC: "حاسبة",
    INVALID_CALC: "حساب غير صحيح",
    COMPLIMENT: "جمع",
    LANDED_TAILS: "لقد هبطت علي صورة",
    LANDED_HEADS: "لقد هبطت علي رأس",
    HAPPINESS: "السعادة",
    IQ_TEST: "اختبار الذكاء",
    IQ_IS: "معدل ذكائك هو: {iq}",
    RPS: "حجر ورقة مقص",
    ROCK: "حجر",
    PAPER: "ورقة",
    SCISSORS: "مقص",
    WYR: "هل تفضل ؟",
    ANSWER: "الاجابة",
    QUESTION: "السؤال",
    YOU_WON: "You won 50coins!",
    BOT_WON: "The bot has won!",
    BOTH_WON: "It's a tie",
    OPPONENTS_CHOICE: "Opponents choice",
    YOUR_CHOICE: "Your choice",
    WINNER: "Winner",
    INVALID_INPUT: "Input must be 1 of the following:",
  },
  UTIL: {
    AVATAR: "االافاتار",
    NOT_AFK: "تم الغاء تفعيل نظام ال AFK",
    AFK: "تم تشغيل نظام ال AFK",
    CLICK_TO_DOWNLOAD: "[اضغط هنا لتحميل الملف]",
    BMI_WEIGHT: "الوزن",
    BMI_HEIGHT: "الطول",
    BMI: "التناسق",
    BMI_CM: "من فضلك ادخل طولك بالسنتيميتر",
    BMI_KG: "من فضلك ادخل وزنك بالكيلو جرام",
    SUPPORT_SERVER: "سرفر الدعم الفني",
    BUG_REPORT: "{member} has reported a bug",
    BUG_REPORTED: "Bug report was send!",
    CHANNEL_TOPIC: "وصف القناة",
    TEXT_CHANNEL: "قناة كتابية",
    VOICE_CHANNEL: "قناة صوتية",
    TEXT_CHANNELS: "قنوات كتابية" /* plural! */,
    VOICE_CHANNELS: "قنوات صوتية" /* plural! */,
    NO_DEF_FOUND: "لم يتم العثور علي تعريف لل  {word}",
    DEF_FOR_WORD: "تعريف ال {word}",
    CATEGORY: "كتاجري",
    DEFINITION: "التعريف",
    DEPENDENCIES: "التبعيات",
    ANIMATED: "متحركة",
    NON_ANIMATED: "غير متحركة",
    NEW_FEEDBACK: "ملاحظة جديدة",
    FEEDBACK_SEND: "تم ارسال الملاحظة بنجاح",
    GH_NOT_FOUND: "حساب الجيت هب هذا ليس موجودا",
    GH_FOLLOWING: "يتابع",
    GH_FOLLOWERS: "المتابعون",
    GH_WEBSITE: "الموقع الالكتروني",
    GH_LOCATION: "الموقع",
    GH_BIO: "Bio",
    GH_PROVIDE_USERNAME: "من فضلك ادخل اسم المستخدم",
    SEARCHING: "جاري البحث",
    PROVIDE_EXT: "من فضلك ادخل الملحقات كمثال: `ts`, `js`, `html`, ...",
    PROVIDE_CODE: "من فضلك ادخل الكود",
    NO_IMG_FOUND: "لم يتم العثور علي صور",
    PROVIDE_M_S: "من فضلك ادخل اسم او فيلم او مسلسل",
    DB_RATINGS: "التقييمات",
    DB_COUNTRY: "البلد",
    DB_GENRES: "الانواع",
    DB_AWARDS: "الجوائز",
    DB_LANGS: "اللغات",
    DB_RELEASED: "تم الاصدار",
    DB_NOT_FOUND: "لم يتم العثور علي فيلم   {search}",
    TOTAL_MB: "الاجمالي",
    HUMANS: "البشريين",
    BOTS: "البوتات",
    PLAYERS: "اللاعبين",
    VERSION: "الاصدار",
    PROTOCOL: "البروتوكول",
    DESCRIPTION: "الوصف",
    MC_NOT_FOUND: "السرفر غير موجود",
    MC_PROVIDE_IP: "من فضلك ادخل اي بي السرفى",
    NPM_SEARCH: "NPM بحث",
    NPM_TOP_5: "تم العثور علي اعلي 5 تقييمات**{query}**",
    AUTHOR: "المؤلف",
    VIEW_ON_NPM: "العرض علي npm",
    MAX_PLAYERS: "اقصي عدد لاعبين",
    PS_NOT_FOUND: "لم يتم العثور علي هذا التطبيق",
    DEVELOPER: "المطور",
    SCORE: "النتيجة",
    CREATED_BY: "بواسطة {member}",
    MENTIONABLE: "المنشن",
    ROLE_NOT_FOUND: "لم يتم العثور علي الرول",
    ROLES: "الرولات",
    NO_GUILD_ICON: "هذا السرفر لا يملك صورة",
    PROVIDE_EMOJI: "من فضلك اختر ايموجي",
    ENLARGED_EMOJI: "النسخة المكبرة من  {emoji}",
    INVALID_EMOJI: "ايموجي غير صالح",
    PROVIDE_SB: "الرجاء تقديم  subreddit",
    PROVIDE_SKIN: " من فضلك ادخل اسم الاسكين",
    SKIN_NOT_FOUND: "للاعب `{search}` لا يوجد",
    SKIN_NAME: " سكين اللاعب {name}",
    DOWNLOAD_SKIN: "[تحميل الاسكين]",
    G_TRANSLATE: "ترجمة جوجل",
    NEW_SUGGESTION: "اقتراح جديد",
    NO_SUGG_CHANNEL: "لا يمتلك سرفرك قناة للاقتراحات من فضلك قم بتعيين القناة اولا",
    UPTIME: "{member} يعمل منذ  {time}",
    WEATHER: "الطقس",
    PROVIDE_COUNTRY: "من فضلك ادخل اسم المدينة",
    C_NOT_FOUNCit: "**{query}** لم يتم العثور علي المدينة",
    MAIN: "الرئسية",
    CURRENT: "الحالي",
    CURRENT_TEMP: "درجة الحرارة الحالية",
    FEELS_LIKE: "التوقعات",
    WIND_SPEED: "سرعة الرياح",
    WIND_DEGREES: "درجات الرياح",
    COUNTRY: "الدولة",
    NO_W_FOUND: "لم يتم العثور علي نتائج",
    TOTAL_EPISODES: "اجمالي الحلقات",
    ANIME_NOT_FOUND: "لم يتم العثور علي الانمي المطلوب",
    START_DATE: "تاريخ البدء",
    END_DATE: "تاريخ الانتهاء",
    POPULARITY_RANK: "الشعبية",
    DOC_NOT_FOUND: "That was not found on the docs",
    MAINTAINERS: "Maintainers",
    LAST_MODIFIED: "Last modified",
  },
  BOT: {
    GUILDS: "السرفرات",
    CHANNELS: "القنوات",
    USERS: "المستخدمين",
    COMMAND_COUNT: "عدد الاوامر",
    VC_CONNS: "المتصلين صوتيا",
    INFO_2: "بيانات البوت",
    INFO: "بيانات البوت",
    SYSTEM_INFO: "بيانات النظام",
    RAM_USAGE: "استخدام الرام",
    UPTIME: "وقت التشغيل",
    DJS_V: "Discord.js نسخة",
    NODE_V: "NodeJS نسخة",
    REPO: "المستودع",
    DASHBOARD: "Dashboard",
    DEVELOPER: "Developer",
    CONTRIBUTORS: "Contributors",
    INVITE_BOT: "Invite bot"
  },
  CONFIG: {
    OPTION_CMD_WORK: " يجب توفير{option} ، لكي يعمل هذا الأمر",
  },
  HELP: {
    CAT_NOT_EXIST: "الكتاجري هذا غير مدرج",
    CMD_NOT_FOUND: "الامر او الاختصار غير موجود",
    COMMANDS: "الاوامر",
    COOLDOWN: "وقت التهدئة",
    ALIASES: "الاختصارات",
    USAGE: "الاستخدام",
    COMMAND: "الامر",
    OPTIONS: "الخيارات",
    GUILD_PREFIX: "بريفكس السرفر",
    CMD_DESC: "استخدم `{prefix}help <اسم الامر>",
    OWNER_ONLY: "لا يمكن عرض الاوامر هذه للمستخدمين",
    NSFW_ONLY: "لا يمكن عرض الاوامر غير بقناة NSFW",
    CUSTOM_CMD: "This is a custom command, therefore I cannot show more info",
    CATEGORIES: {
      admin: "اوامر الادمنز",
      animal: "اوامر الحيوانات",
      botowner: "اوامر اونر البوت",
      nsfw: "NSFW اوامر",
      hentainsfw: "Hentai اوامر",
      games: "اوامر الالعاب",
      image: "اوامر الصورة",
      music: "اومر الميوزك",
      util: "الاوامر العامة",
      economy: "الاوامر الاقتصادية",
      levels: "اوامر الفلات",
      exempt: "أوامر الاستثناء (الأوامر التي لا يمكن تعطيلها)",
      disabled: "Disabled commands (this guild only)",
      giveaway: "Giveaway commands",
      reminder: "Reminder commands",
      reactions: "Reaction role commands",
      custom: "Custom commands",
      ticket: "Ticket commands",
    },
  },
  POKEMON: {
    SPECIES: "النوع",
    ABILITIES: "القدرات",
    HEIGHT: "الطول",
    WEIGHT: "الوزن",
    EXPERIENCE: "الخبرة",
    GENDER: "الجنس",
    EGG_GROUPS: "مجموعات البيض",
    FAMILY: "العائلة",
    EVO_STAGE: "مرحلة التطور",
    EVO_LINE: "خط التطور",
    STATS: "الحالة",
    HP: "نقاط الصحة",
    ATTACK: "الهجوم",
    DEFENSE: "الدفاع",
    SP_ATK: "SP ",
    SP_DEF: "SP DEF",
    SPEED: "السرعة",
    TOTAL: "الاجمالي",
    PROVIDE_NAME: "من فضلك ادخل اسم بوكيمون",
    NOT_FOUND: "لم يتم العثور علي {query}. من فضلك تحقق من التهجئة الصحيحة وحاول مرة اخري",
  },
  REACTIONS: {
    NO_CHANNEL_ID: "Please provide a channelId",
    NO_EMOJI: "Please provide a valid emoji (Custom emojis soon™)",
    NO_ROLE: "Please provide a valid role",
    CHANNEL_NOT_FOUND: "The channel with id `{channelId}` was not found",
    MSG_NOT_FOUND: "The message with id `{messageId}` was not found",
    TITLE: "Reaction Role",
    DESC: "Reactions:",
    SUCCESS: "Successfully send message with reactions",
    NOT_FOUND: "Reaction was not found by that messageId",
    DELETE_SUCCESS: "Successfully deleted reaction",
    FOUND_NO_MSG:
      "Reaction was found but the message was not, reaction was deleted from the database",
  },
  REMINDER: {
    SUCCESS: "Success! I will ping you **in this channel** in {time}",
    REMOVE_SUCCESS: "Successfully removed your reminder",
    ALREADY_ON: "You already have a reminder set",
    NO_REMINDER_SET: "You don't have a reminder set",
    INVALID_DATE: "That is not a valid date",
  },
  COVID: {
    CASES: "Cases",
    RECOVERED: "Recovered",
    DEATHS: "Deaths",
    TOTAL: "Total",
    TODAY: "Today",
    CRITICAL: "Critical",
    TESTS: "Tests",
    LAST_UPDATED: "Last updated",
    NOT_FOUND: "Country was not found",
    TOTAL_POP: "Population",
  },
  EASY_GAMES: {
    PROVIDE_MEMBER: "Please provide a  member",
    ACCEPT_CHALLENGE: "{user} Do you accept this challange?",
    DOESNT_PLAY: "looks like {user} doesnt wanna play",
    WICH_SIDE: "**{user}, Which Side Do You Pick? Type `End` To Forfeit!**",
    GAME_OVER: "Times up!",
    END: "end",
    INACTIVITY: "game ended due to inactivity!",
    WINNER: "Congrats u have won {winner}",
    DRAW: "Its a draw",
  },
  ADMIN: {
    ADD_CMD_ALREADY_EXISTS: "This command name is already added in guild custom commands.",
    ADD_CMD_USED_BY_BOT: "This command name is already in use by the bot",
    ADD_CMD_ADDED: "Successfully added **{name}** as a custom command to this guild",
    DEL_CMD_NOT_FOUND: "That command was not found",
    DEL_CMD_DELETED: "Successfully deleted the **{cmd}** Command",
    DEL_CMD_NO_COMMANDS: "This guild doesn't have any custom commands",
    BLACKLISTED_PROVIDE_OPTION: "Please provide an option '`add`, `remove`, `get`'",
    BLACKLISTED_ALREADY_EXISTS: "**{item}** already exist in blacklisted words",
    BLACKLISTED_ADDED: "Successfully added **{item}** to blacklisted words",
    BLACKLISTED_NOT_EXISTS: "**{item}** does not exist in blacklisted words",
    BLACKLISTED_REMOVED: "Successfully removed **{item}** from blacklisted words",
    BLACKLISTED_NONE_YET: "There are no blacklisted words yet.",
    BLACKLISTED_NO_WORDS: "This guid does not have any blacklisted words yet",
    CREATED_ROLE_CREATED: "Created Role",
    CREATED_ROLE_ADDED: "Successfully created the `{roleName}` role",
    C_TOPIC_PROVIDE_TOPIC: "Please provide a new topic",
    C_TOPIC_ADDED: "Successfully updated channel topic to {topic}",
    DEAFEN_ALREADY_DEAFENED: "User is not in a voice channel or is already deafened",
    DEAFEN_SUCCESS:
      "{member} was successfully deafenned from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    DEAFEN_SUCCESS_DM: "You've been **Deafenned** from **{guild}**, Reason: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Amount must be a valid number and between 0 below 100",
    DELETE_DELETED: "Deleted {amount} messages.",
    DELETE_ERROR:
      "An error occurred when deleting the messages, make sure they are not older than 14days",
    KICK_CANNOT_KICK: "That person can't be kicked.",
    KICK_SUCCESS_DM: "You've been **kicked** from **{guild}**, Reason: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** was successfully kicked from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    MUTE_CANNOT_MUTE: "That member cannot be muted",
    MUTE_ALREADY_MUTED: "Member is already muted",
    MUTE_SUCCESS_DM: "You've been **muted** from **{guild}**, Reason: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** was successfully muted from the server. Reason: **{reason}**. I have also send a DM letting the person know.",
    BAN_BANNED_BY: "**Banned By:**",
    NUKE_NUKED: "Channel was successfully nuked",
    NUKE_CANCELED: "Nuke command was canceled",
    NUKE_CONFIRM: "Are you sure you want to nuke this channel? y/n",
  },
  TICKET: {
    CANNOT_DO_ACTION: "This action cannot be done in a non ticket channel",
    CLOSING: "Closing this ticket in 15 seconds, type `cancel` to cancel",
    WILL_NOT_CLOSE: "This ticket will not be closed.",
    ALREADY_ACTIVE_TICKET: "You already have an active ticket",
    TICKET_FOR: "Support ticket for: {member}",
    CREATED: "Successfully created ticket!",
  },
  EVENTS: {
    CHANNEL_CREATED: "Channel Created",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** was created",
    CHANNEL_DELETED: "Channel Deleted",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** was deleted",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}** was renamed to **{new_channel}**",
    CHANNEL_RENAME: "Channel Rename",
    EMOJI_CREATED_MSG: "Emoji: {emoji} was created",
    EMOJI_CREATED: "New Emoji Created",
    EMOJI_DELETED_MSG: "Emoji: **{emoji}** was deleted",
    EMOJI_DELETED: "Emoji Deleted",
    EMOJI_RENAMED_MSG: "Emoji: **{emoji_name}** was renamed to **{new_name}** ({emoji})",
  },
};
