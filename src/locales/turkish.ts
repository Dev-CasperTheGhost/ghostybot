export default {
  GLOBAL: {
    EVERYONE: "Herkes",
    NOT_SPECIFIED: "Belirtilmemiş",
    ERROR: "Beklenmeyen bir hata oluştu",
    NAME: "İsim",
    SUCCESS: "Başarı",
    REASON: "Sebep",
    URL: "URL",
    NONE: "Hiç kimse",
    YES: "Evet",
    NO: "Hayır",
  },
  GUILD: {
    NOT_FOUND: "Sunucu bulunamadı",
    LEFT: "**{guild_name}** adlı sunucudan başarıyla ayrıldı",
    OWNER: "Sunucu Sahibi",
    CHANNEL_C: "Kanal sayısı",
    EMOJI_C: "Emoji sayısı",
    ROLES_C: "Rol sayısı",
    MEMBER_C: "Üye sayısı",
    REGION: "Bölge",
    VERIFICATION: "Doğrulama düzeyi",
    MFA: "MFA seviyesi",
  },
  MEMBER: {
    BANNER: "Banner",
    TAG: "Etiket",
    ROLES: "Roller",
    BADGES: "Rozetler",
    ONLINE: "Çevrimiçi",
    OFFLINE: "Çevrimdışı",
    STATUS: "Durum",
    CREATED_ON: "Kuruluş Tarihi",
    JOINED_AT: "Katılma Tarihi",
    NICKNAME: "Kullanıcı adı",
    NOT_FOUND: "Üye bulunamadı",
    CANNOT_BE_BANNED: "Bu üye yasaklanamaz",
    DM_BAN_MESSAGE: "Siz **{guild_name}** adlı sunucudan başarıyla **banladınız**, Sebep: **{ban_reason}**",
    GUILD_BAN_MESSAGE:
      "{member} sunucudan başarıyla yasaklandı. Sebep: **{ban_reason}**. Ayrıca kişiye bilgi vermek için bir DM gönderdim.",
    BOT_DATA: "Bot verileri kaydedilmiyor, bu nedenle verilerini getiremiyorum",
    PERMISSIONS: "İzinler",
    PENDING: "Bekleyen",
  },
  ROLES: {
    MY_ROLE_NOT_HIGH_ENOUGH: "Rolüm **{role}** rolünden yeterince yüksek değil!",
    MY_ROLE_MUST_BE_HIGHER: "Rolüm **{member}** en yüksek rolden daha yüksek olmalı!",
    ALREADY_HAS_ROLE: "Bu üye zaten bu role sahip",
    ADDED_ROLE_TO: "**{role}** başarıyla {member} üyeye eklendi",
  },
  IMAGE: {
    CLICK_TO_VIEW: "[Görüntü yüklenemediyse buraya tıklayın.]",
    CLYDE: "Clyde",
    CUDDLES: "kucaklaşıyor.",
    FEEDED: "besledi.",
    HUGGED: "sarıldı.",
    PATTED: "okşadı.",
    KISSED: "öptü.",
    POKED: "dürttü.",
    SLAPPED: "tokatladı.",
    NO_GIPHY_KEY: "Yapılandırmada giphy api bulunamadı. (bot sahibiyle iletişime geçin)",
    NO_GPIHY_FOUND: "Bununla ilgili hiçbir gif bulunamadı.",
  },
  BOT_OWNER: {
    EVAL: "Değerlendir komutu",
    EVAL_TYPE: "Tür",
    EVAL_INPUT: "Giriş",
    EVAL_OUTPUT: "Çıktı",
    CANNOT_BL_OWNER: "Sahip kara listeye alınamaz.",
    CANNOT_BL_BOT: "Bot kara listeye alınamaz.",
    NOT_BLD: "Kullanıcı kara listeye alınmadı.",
    ALREADY_BLD: "{member} zaten kara listeye alındı.",
    NOT_OPTION: "**{type}** bir seçenek değil.",
    BLACKLISTED: "kara listeye alınmış.",
    UNBLACKLISTED: "kara listeye alınmamış.",
    BLACKLISTED_SUCCESS: "{member}, {type} idi.",
  },
  LEVELS: {
    XP: "XP",
    LEVEL: "Seviye",
    LEADERBOARD: "Liderler Sıralaması",
    GIVE_XP_SUCCESS: "Başarıyla **{member}**'e **{amount}**XP verdin.",
    TOTAL_XP: "Toplam XP",
    NEW_LEVEL: "Yeni seviye",
    LEVEL_UP: "Seviye atladın!",
    REMOVED_XP: "**{amount}**XP, **{userTag}** 'dan alındı.",
  },
  PERMISSIONS: {
    CREATE_INSTANT_INVITE: "Davet oluştur",
    KICK_MEMBERS: "Üyeleri at",
    BAN_MEMBERS: "Üyeleri banla",
    ADMINISTRATOR: "Yönetici",
    MANAGE_CHANNELS: "Kanalları yönet",
    MANAGE_GUILD: "Sunucuyu yönet",
    ADD_REACTIONS: "Reaksiyon ekle",
    VIEW_AUDIT_LOG: "Denetim günlüklerini görüntüle",
    PRIORITY_SPEAKER: "Öncelikli konuşmacı ol.",
    STREAM: "Canlı yayına geç.",
    VIEW_CHANNEL: "Kanalları görüntüle",
    SEND_MESSAGES: "Mesaj yolla",
    SEND_TTS_MESSAGES: "TTS mesajları gönder",
    MANAGE_MESSAGES: "Mesajları yönet",
    EMBED_LINKS: "Gömülü bağlantılar",
    ATTACH_FILES: "Dosyaları ekle",
    READ_MESSAGE_HISTORY: "Mesaj geçmişini oku",
    MENTION_EVERYONE: "Herkesten bahset",
    USE_EXTERNAL_EMOJIS: "Harici emojiler kullanın",
    VIEW_GUILD_INSIGHTS: "Sunucu öngörülerini görüntüleyin",
    CONNECT: "Sese katıl",
    SPEAK: "Sesli konuş",
    MUTE_MEMBERS: "Üyeleri sessize al",
    DEAFEN_MEMBERS: "Sessiz üyeler",
    MOVE_MEMBERS: "Üyeleri taşı",
    USE_VAD: "Ses etkinliği algılamayı kullan",
    CHANGE_NICKNAME: "Kullanıcı adı değiştir",
    MANAGE_NICKNAMES: "Kullanıcı adlarını yönet",
    MANAGE_ROLES: "Rolleri yönet",
    MANAGE_WEBHOOKS: "Yetkili uygulamaları yönet",
    MANAGE_EMOJIS: "Emojileri yönet",
    REQUEST_TO_SPEAK: "konuşma isteği",
    USE_APPLICATION_COMMANDS: "Uygulama komutlarını kullanın",
    STAGE_MODERATOR: "Sahne Moderatörü",
    MANAGE_EMOJIS_AND_STICKERS: "Emojileri ve çıkartmaları yönetin.",
    MANAGE_THREADS: "Konuları yönet",
    USE_PUBLIC_THREADS: "Herkese açık konuları kullan",
    USE_PRIVATE_THREADS: "Özel konuları kullan",
    USE_EXTERNAL_STICKERS: "Harici çıkartmalar kullanın",
  },
  MUSIC: {
    MUST_BE_IN_VC: "Bir ses kanalında olmanız gerekir.",
    BOT_NOT_IN_VC: "Bot bu ses kanalında yok!",
    NO_QUEUE: "Şu anda çalan şarkı yok.",
    QUEUE_CLEARED: "liste temizlendi.",
    QUEUE: "Müzik listesi",
    BETWEEN_0_100: "Ses düzeyi 0 ile 100 arasında olmalıdır.",
    BETWEEN_1_TOTALQUEUE: "1 ile {totalQueue} arasında bir parça numarası kullanın.",
    REMOVE_SUCCESS: "listeden kaldırıldı",
    VOL_SUCCESS: "Ses seviyesi başarıyla %{vol} olarak ayarlandı.",
    PLAYING: "Çalıyor.",
    PAUSED: "Duraklatıldı.",
    DURATION: "Süre",
    ADDED_TO_QUEUE: "{song} listeye eklendi.",
    ADDED_TO_QUEUE2: "Şarkı listeye eklendi",
    ADDED_PL_TO_QUEUE: "Oynatma listesi: {name} sıraya eklendi ({length} şarkı)",
    NOW_PLAYING: "Şimdi çalan:",
    REQUESTED_BY: "{user} tarafından istendi.",
    NO_PERMS: "Bu ses kanalı için doğru izinlere sahip değilim!",
    NO_RESULTS: "Şarkı bulunamadı.",
    SUC_REM_FILTER: "{filter} başarıyla kaldırıldı.",
    SUC_APPLIED_FILTER: "{filter} başarıyla uygulandı.",
    FILTER_NOT_FOUND: "Bu filtre bulunamadı",
    FILTER_ALREADY_ENABLED: "`{filter}` filtresi zaten etkin.",
    FILTER_NOT_ENABLED: "`{filter}` filtresi etkin değil mi?",
    NOT_VALID_OPTION: "{option} `set`, `remove` geçerli bir seçenek değil.",
    NO_LYRICS: "{songTitle} için şarkı sözü bulunamadı.",
    NOW: "Şimdi",
    MUSIC_STARTING: "Müzik başlıyor. Lütfen birkaç saniye bekleyin...",
    INFORMATION: "Bilgi",
    UPLOADER: "Yükleyen",
    LIKES: "Beğeni",
    ERRORS: {
      LIVE_NOT_SUPPORTED: "Canlı videolar desteklenmiyor.",
      JOIN_ERROR: "Ses kanalına katılırken bir hata oluştu, kanalın dolu olmadığından emin olun!",
      NO_RESULT: "Şarkı bulunamadı.",
      VOICE_FULL: "Bu ses kanalı dolu.",
      NO_QUEUE: "Müzik çalmıyor.",
      NO_PREVIOUS: "Sırada önceki şarkı yok.",
      NO_UP_NEXT: "Sırada bir sonraki şarkı yok.",
      UNAVAILABLE_VIDEO: "Bu video/oynatma listesi kullanılamıyor gibi görünüyor.",
      NOT_SUPPORTED_URL: "Bu URL desteklenmiyor.",
      NON_NSFW: "NSFW olmayan kanallarda yaş kısıtlamalı içerik oynatılamaz.",
      UNPLAYABLE_FORMATS: "Bu biçim kullanılamaz.",
      NO_SONG_POSITION: "Sırada bu konumda bir şarkı yok.",
      EMPTY_PLAYLIST: "Çalma listesinde geçerli bir şarkı yok.",
    },
  },
  ECONOMY: {
    MONEY: "Para",
    BANK: "Banka",
    BALANCE: "Bakiye",
    DAILY_ERROR: "Zaten günlük ödülünüzü topladın. {time} tekrar kontrol edin.",
    WEEKLY_ERROR: "Zaten haftalık ödülünüzü topladınız. {time} tekrar kontrol edin.",
    DAILY_SUCCESS: "Günlük **{amount}** para topladınız.",
    WEEKLY_SUCCESS: "Haftalık **{amount}** para topladınız.",
    STORE_EMPTY:
      "Mağazada ürün yok! Bir yöneticiden kontrol paneli aracılığıyla mağazaya ürün eklemesini isteyin.",
    PROVIDE_ITEM_TO_BUY: "Lütfen satın almak için bir ürün sağlayın.",
    NOT_ENOUGH_MONEY: "o kadar paran yok.",
    BUY_SUCCESS: "**{item}** başarıyla satın alındı ve **{price}** para ödendi.",
    NOT_FOUND_STORE: "**{query}** mağazada bulunamadı.",
    ALREADY_OWN_ITEM: "Bu öğeye zaten sahipsiniz.",
    DEPOSITED_ALL: "Tüm paranızı başarıyla yatırdınız!",
    DEPOSITED_AMOUNT: "Başarıyla **{amount}coins** yatırıldı",
    WITHDRAW_ALL: "Başarıyla tüm paranızı çektiniz!",
    WITHDRAW_AMOUNT: "Başarıyla **{amount}coin** çekildi.",
    PROFILE: "Profil",
    INV_EMPTY: "Kullanıcının envanteri boş.",
    INVENTORY: "Envanter",
    INV_ITEMS: "Envanter Eşyaları",
    VIEW_INVENTORY: "Envanter öğelerini görüntülemek için `{prefix}inventory <user>` komutunu kullanın.",
    MONEY_LEADERBOARD: "Para Lider Tablosu",
    TOTAL_BALANCE: "Toplam Bakiye",
    BOTH_COUNTED: "Banka ve Para her ikisi de sayılır.",
    DICE_LANDED: "Şuraya ulaştınız: {roll}",
    DICE_WON: "Tebrikler! **{price}coin** değerinde bir miktar para kazandınız",
    DICE_LOST: "**{price}coin** fiyatını almak için bir **6** indirmeniz gerekiyor.",
    RECENTLY_WORKED: "Yakın zamanda zaten çalıştınız, {time} kaldı.",
    WORKED: "{member}, **{job_name}** olarak çalıştı ve **{amount}** kazandı!",
    CANNOT_PAY_SELF: "Kendine ödeme yapamazsın.",
    PAY_SUCCESS: "Başarıyla **{member}** **{amount}coins** verdi.",
    CANNOT_ROB_SELF: "Kendini soyamazsın!",
    BETWEEN_1_1000: "Tutar 1 ile 1000 arasında olmalıdır.",
    MEMBER_NO_MONEY: "Kullanıcının hiç parası yok, bu nedenle bu kullanıcıyı soyamazsınız.",
    ROB_SUCCESS: "**{member}** adlı kişiden başarıyla **{amount}coin** çalındı",
    STORE: "Mağaza",
    MANAGE_STORE_PERMS:
      "Mağazayı yönetmek için doğru izinlere sahip değilsiniz!",
    PROVIDE_VALID_ITEM: "Lütfen eklemek/kaldırmak için geçerli bir öğe sağlayın!",
    PRICE: "Fiyat",
    ALREADY_EXISTS: "**{item}** mağazada zaten var!",
    PROVIDE_PRICE: "Lütfen ürün için bir fiyat belirtin!",
    MUST_BE_NUMBER: "Fiyat bir sayı olmalıdır!",
    ADDED_TO_STORE: "{item} mağazaya eklendi!",
    NOT_IN_STORE: "**{item}** mağazada yok!",
    REMOVED_FROM_STORE: "{item} mağazadan kaldırıldı!",
    WON_SLOTS: "Kazandınız ve {amount} tutarında coin aldınız.",
    LOST_SLOTS: "Kaybettin!",
    MAX_BET: "Maksimum bahis miktarı 500'dür.",
    ADDED_MONEY: "{amount} değerinde miktar kullanıcı bakiyesine başarıyla eklendi",
    REMOVED_MONEY: "{amount} değerinde miktar kullanıcı bakiyesinden başarıyla kaldırıldı.",
    MIN_BET: "Minimum 1 bahis gereklidir.",
    MIN_AMOUNT: "Tutar 0'ın üzerinde olmalıdır.",
    RESET_CONF: "Tüm bakiye sıfırlansın mı? y/n",
    RESET_SUCCESS: "Herkesin bakiyesi başarıyla sıfırlandı.",
    RESET_CANCEL: "Bakiye sıfırlandırma iptal edildi.",
    PROVIDE_AMOUNT: "Lütfen çekilecek bir miktar belirtin.",
    NO_MONEY: "Bankanızda o kadar para yok!",
    WORK: "Çalıştı!",
    ALREADY_WORKED: "Zaten yakın zamanda çalıştınız. {time} tekrar kontrol edin.",
  },
  GAMES: {
    BETS_ON: "{member_2} için {member_1} bahis",
    LOST_BET: "{member_2} üzerine {member_1} bahsi!\n {member_1} bahsi kazanmadı.",
    WON_BET: "{member_2} üzerine {member_1} bahsi ve {member_1} bahsi kazandı.",
    CALC: "Hesap makinesi",
    INVALID_CALC: "Geçersiz hesaplama",
    COMPLIMENT: "İltifat",
    LANDED_TAILS: "Kuyruklara indin.",
    LANDED_HEADS: "Heads'e düştün",
    HAPPINESS: "Mutluluk",
    IQ_TEST: "IQ Testi",
    IQ_IS: "IQ'nuz: {iq}",
    RPS: "Taş - Kağıt - Makas",
    ROCK: "Taş",
    PAPER: "Kağıt",
    SCISSORS: "Makas",
    WYR: "Hangisini tercih edersin?",
    ANSWER: "Yanıt",
    QUESTION: "Soru",
    YOU_WON: "50 jeton kazandınız!",
    BOT_WON: "Bot kazandı!",
    BOTH_WON: "Mağlup yok!",
    OPPONENTS_CHOICE: "Rakip seçimi",
    YOUR_CHOICE: "Senin seçimin",
    WINNER: "Kazanan",
    INVALID_INPUT: "Giriş, aşağıdakilerden 1'i olmalıdır:",
    QUOTE: "Alıntı",
    TAGS: "Etiketler",
    VOTES: "Oylar",
    WYR_QUESTIONS: "{question1} **VEYA** {question2}",
  },
  UTIL: {
    TEXT_NOT_SUP: "Bu metin desteklenmiyor.",
    AVATAR: "Avatar",
    NOT_AFK: "Artık AFK değilsin.",
    AFK: "Artık AFK'sın.",
    BMI_WEIGHT: "Kilo",
    BMI_HEIGHT: "Boy",
    BMI: "Vücut Kitle İndeksi",
    SUPPORT_SERVER: "Destek Sunucusu",
    BUG_REPORT: "{üye} bir hata bildirdi.",
    BUG_REPORTED: "Hata raporu gönderildi!",
    CHANNEL_TOPIC: "Kanal Konusu",
    NO_DEF_FOUND: "{word} için tanım bulunamadı.",
    DEF_FOR_WORD: "{word} için tanım",
    CATEGORY: "Kategori",
    DEFINITION: "Tanım",
    ANIMATED: "Hareketli",
    NON_ANIMATED: "Hareketsiz",
    NEW_FEEDBACK: "Yeni Geribildirim",
    FEEDBACK_SEND: "Başarıyla geri bildirim gönderildi!",
    GH_NOT_FOUND: "GitHub hesabı bulunamadı.",
    GH_FOLLOWING: "Takip",
    GH_FOLLOWERS: "Takipçi",
    GH_WEBSITE: "İnternet sitesi",
    GH_LOCATION: "Konum",
    GH_BIO: "Bio",
    DB_RATINGS: "Reyting",
    DB_COUNTRY: "Ülke",
    DB_GENRES: "Türler",
    DB_AWARDS: "Ödüller",
    DB_LANGS: "Diller",
    POPULATION: "Nüfus",
    DB_RELEASED: "Yayın Tarihi",
    DB_NOT_FOUND: "{search} ile hiçbir film bulunamadı.",
    PLAYERS: "Oyuncular",
    VERSION: "Versiyon",
    PORT: "Protokol",
    DESCRIPTION: "Açıklama",
    NPM_NOT_FOUND: "**{query}** ile hiçbir NPM paketi bulunamadı.",
    MC_NOT_FOUND: "Sunucu bulunamadı.",
    NPM_SEARCH: "NPM Arama",
    NPM_TOP_5: "**{query}** için bulunan en iyi 5 sonuç",
    AUTHOR: "Yazar",
    VIEW_ON_NPM: "npm üzerinde görüntüle",
    MAX_PLAYERS: "Maksimum Uyuncu",
    PS_NOT_FOUND: "Uygulama bulunamadı.",
    DEVELOPER: "Geliştirici",
    SCORE: "Skor",
    CREATED_BY: "{üye} tarafından oluşturuldu.",
    MENTIONABLE: "Bahsetmeler",
    POSITION: "Konum (üstten)",
    ROLE_NOT_FOUND: "Rol bulunamadı.",
    ROLES: "Roller",
    NO_GUILD_ICON: "Bu sunucunun simgesi yok.",
    ENLARGED_EMOJI: "{emoji} büyütülmüş versiyonu",
    INVALID_EMOJI: "Geçersiz emoji!",
    SKIN_NOT_FOUND: "Oyuncu `{search}` bulunamadı!",
    SKIN_NAME: "Oyuncu görünümü {isim}",
    DOWNLOAD_SKIN: "[Dış görünümü indir]",
    G_TRANSLATE: "Google Çeviri",
    NEW_SUGGESTION: "Yeni Öneri",
    NO_SUGG_CHANNEL:
      "Sunucunuzun varsayılan bir öneri kanalı yok!\n Varsayılan kanalı ayarlamak için `set suggest-channel <channel mention>` şeklinde kullanın.",
    UPTIME: "{member}, {time} için hazır.",
    BOT_UPTIME: "Bot şu tarihten beri çalışıyor: {botUpSince}",
    WEATHER: "Hava Durumu",
    C_NOT_FOUND: "Şehir: **{query}** bulunamadı!",
    MAIN: "Güncel",
    CURRENT: "Şu Anda",
    CURRENT_TEMP: "Mevcut sıcaklık",
    FEELS_LIKE: "Hissedilen",
    WIND_SPEED: "Rüzgar Hızı",
    WIND_DEGREES: "Rüzgar Yönü",
    COUNTRY: "Ülke",
    NO_W_FOUND: "Hiçbir sonuç bulunamadı.",
    DOC_NOT_FOUND: "Bu, belgelerde bulunamadı.",
    MAINTAINERS: "Koruyucu",
    DOWNLOADS: "İndirilenler",
    LAST_MODIFIED: "Son düzenleme",
    ALPHA_CODE: "Alfa-2 kodu",
    CALLING_CODES: "Arama Kodları",
    DOMAINS: "Etki Alanları",
    CAPITAL: "Başkent",
    TIMEZONES: "Zaman Dilimleri",
    WEB_HTTP: "URL, `http://` veya `https://` ile başlamalıdır",
    WEB_NSFW: "Bu site NSFW olmayan bir kanalda görüntülenemez.",
    WEB_UNAVAILABLE: "Bu site kullanılamıyor gibi görünüyor.",
    IP_NOT_FOUND: "Hiçbir sonuç bulunamadı.",
    IP_LON_LAT: "Lon/Lat",
    IP_ISP: "ISP",
    IP_ORG: "Org",
    IP_TIMEZONE: "Saat Dilimi",
    IP_LOC: "tr", // https://ipwhois.io/documentation Localization
    VERIFY_CHANNEL: "Doğrulama kanalı: {channel}",
    VERIFY_NOT_ENABLED: "Bu sunucu için doğrulama etkin değil.",
    CHANNEL_TYPES: {
      GUILD_TEXT: "Metin Kanalı",
      GUILD_VOICE: "Ses Kanalı",
      GUILD_STAGE_VOICE: "Sahne Kanalı",
      GUILD_NEWS: "Haber Kanalı",
      GUILD_STORE: "Mağaza Kanalı",
      GUILD_CATEGORY: "Kategori Kanalı",
      GUILD_NEWS_THREAD: "Yeni Konu",
      GUILD_PUBLIC_THREAD: "Genel Konu",
      GUILD_PRIVATE_THREAD: "Özel Konu",
    },
    TOTAL_TRACKS: "Toplam parça",
    RELEASE_DATE: "Yayın tarihi",
    HEX_COLOR: "HEX Rengi",
    MDN_NOT_FOUND: "Bu sorgu için sonuç bulunamadı.",
    UNKNOWN: "Bilinmeyen",
    PASTE_INVALID_FORMAT:
      "Geçersiz bir biçim istendi, geçerli türler: https://pastebin.com/doc_api#5",
    SENT_SUG: "Öneri gönderildi 👍",
    ALREADY_VERIFIED: "Zaten doğrulandınız.",
    READ_MORE: "daha fazla oku",
    EMOJI_NOT_FOUND: "Emoji yalnızca özel bir emoji olabilir veya emoji bulunamadı.",
    EMOJI_INFO: "Emoji Bilgisi",
    INVALID_PERMS: "Geçersiz İzinler",
    CREATED_AT: "Oluşturulma Tarihi",
    ACCESSIBLE_BY: "Erişilebilir",
    GENERAL_INFO: "Genel Bilgi",
    USES: "Kullanım",
    NO_DESCRIPTION: "Açıklama yok",
    GUILD: "Sunucu",
    CHANNEL: "Kanal",
    INVITER: "Davetçi",
    INVITE: "Davet Et",
    ROLE_MENTION: "Bahsedilen Rol",
    SPOT_ARTISTS: "Sanatçılar",
    SPOT_ALBUM: "Albüm",
    SPOT_GENRES: "Türler",
    SPOT_TOP: "En iyi 10 parça",
    SPOT_TRACKS: "Parçalar",
    SPOT_MORE_TRACKS: "{tracks - 10} parça daha",
    USER_INFO: "{username} Bilgileri",
    GUILD_INFO: "Sunucu Bilgisi",
    TEMPERATURE: "Sıcaklık",
    MY_PING: "Ping'im `{ping}`ms",
  },
  BOT: {
    GUILDS: "Sunucu Sayısı",
    CHANNELS: "Kanal Sayısı",
    USERS: "Kullanıcı Sayısı",
    COMMAND_COUNT: "Komut Sayısı",
    INFO_2: "Bot Bilgileri",
    INFO: "Bot istatistikleri",
    SYSTEM_INFO: "Sistem bilgileri",
    RAM_USAGE: "Ram Kullanımı",
    UPTIME: "Çalışma süresi",
    DJS_V: "Discord.js versiyonu",
    NODE_V: "NodeJS versiyonu",
    REPO: "Kod Havuzu",
    DASHBOARD: "Gösterge Paneli",
    DEVELOPER: "Geliştirici",
    CONTRIBUTORS: "Katkıda Bulunanlar",
    INVITE_BOT: "Botu davet et",
    USED_SINCE_UP: "Şu ana kadar geçen süre",
    TOTAL_USED_CMDS: "Toplam kullanım",
    LATENCY: "Gecikme süresi",
    CLICK_HERE: "Bilgi için buraya tıklayın",
  },
  HELP: {
    HELP: "Yardım",
    CAT_NOT_EXIST: "Kategori mevcut değil.",
    CMD_NOT_FOUND: "Komut veya takma adlar bulunamadı.",
    FULL_CMD_LIST: "Tam ayrıntılı komut listesini görüntüleyin.",
    CLICK_ME: "Bana tıkla",
    COMMANDS: "Komutlar",
    COOLDOWN: "Sakin ol",
    ALIASES: "Takma Adlar",
    USAGE: "Kullanım",
    COMMAND: "Komutlar",
    OPTIONS: "Seçenekler",
    OWNER_ONLY: "Bunu sadece sunucu sahibi görebilir!",
    CUSTOM_CMD: "Bu özel bir komuttur, bu nedenle daha fazla bilgi gösteremiyorum.",
    BOT_PERMS: "Bot İzinleri",
    MEMBER_PERMS: "Üye İzinleri",
    DEPRECATED:
      "**Not: Normal, GhostyBot için kullanımdan kaldırılmış olarak kabul edilir. Son normal komut grubunu eğik çizgi komutlarına geçirmek için çok çalışıyoruz.**",
    CATEGORIES: {
      admin: "Yönetici komutları",
      animal: "Hayvan Komutları",
      "bot-owner": "Bot Sahibi Komutları",
      games: "Oyun Komutları",
      image: "Görüntü Komutları",
      music: "Müzik Komutları",
      util: "Kullanışlı Komutlar",
      economy: "Ekonomi Komutları",
      levels: "Seviye Komutları",
      exempt: "Muaf Komutlar (devre dışı bırakılamayan komutlar)",
      disabled: "Devre dışı bırakılan komutlar (yalnızca bu sunucu)",
      giveaway: "Çekiliş Komutları",
      reminder: "Hatırlatıcı Komutları",
      custom: "Özel Komutlar",
      ticket: "Bilet Komutları",
    },
  },
  POKEMON: {
    SPECIES: "Tür",
    ABILITIES: "Yetenekler",
    HEIGHT: "Boy",
    WEIGHT: "Kilo",
    EXPERIENCE: "Tecrübe",
    GENDER: "Cinsiyet",
    EGG_GROUPS: "Yumurta Grupları",
    FAMILY: "Aile",
    EVO_STAGE: "Evrim Aşaması",
    EVO_LINE: "Evrim Çizgisi",
    STATS: "İstatistikler",
    HP: "Can Puanı",
    ATTACK: "Saldırı",
    DEFENSE: "Savunma",
    SP_ATK: "Tekil Oyuncu Saldırı",
    SP_DEF: "Tekil Oyuncu Savunma,
    SPEED: "Hız",
    TOTAL: "Toplam",
    NOT_FOUND:
      "{query} ile hiçbir pokémon bulunamadı. Lütfen doğru yazımı kullanın ve daha sonra tekrar deneyin.",
  },
  REMINDER: {
    SUCCESS: "Başarılı! {time} içinde sana **bu kanalda** bildiri atacağım.",
    REMOVE_SUCCESS: "Hatırlatıcınız başarıyla kaldırıldı.",
    NO_REMINDER_SET: "Bir hatırlatıcı setiniz yok.",
    INVALID_DATE: "Bu geçerli bir tarih değil.",
    NOT_FOUND: "Bu hatırlatıcı bulunamadı.",
    UPDATED: "Hatırlatıcı güncellendi.",
    NO_ACTIVE_REM: "Kullanıcının etkin hatırlatıcısı yok.",
    MESSAGE: "Mesaj:",
    TIME: "Zaman:",
    ENDS_IN: "Bitiş Zamanı:",
    USER_REMINDERS: "{memberUsername} kullanıcısının aktif hatırlatıcıları",
    ALL_DELETED: "Tüm hatırlatıcılarınız kaldırıldı.",
  },
  COVID: {
    CASES: "Vaka Sayısı",
    RECOVERED: "İyileşen Sayısı",
    DEATHS: "Ölüm Sayısı",
    TOTAL: "Toplam",
    TODAY: "Bugün",
    CRITICAL: "Kritik",
    TESTS: "Test Sayısı",
    LAST_UPDATED: "Son güncelleme",
    NOT_FOUND: "Ülke bulunamadı.",
    TOTAL_POP: "Nüfus",
  },
  ADMIN: {
    CREATED_ROLE_CREATED: "Oluşturulan Rol",
    CREATED_ROLE_ADDED: "`{roleName}` rolü başarıyla oluşturuldu.",
    DEAFEN_ALREADY_DEAFENED: "Kullanıcı bir ses kanalında değil veya zaten sağır durumda.",
    DEAFEN_SUCCESS:
      "{üye} sunucudan başarıyla sağır edildi. Sebep: **{reason}**. Ayrıca kişiye bilgi vermek için bir özel mesaj gönderdim.",
    DEAFEN_SUCCESS_DM: "**{guild}**'den **sağırlaştırıldınız**, Sebep: **{reason}**",
    DELETE_PROVIDE_AMOUNT: "Tutar geçerli bir sayı olmalı ve 100'ün altında 0 arasında olmalıdır.",
    DELETE_DELETED: "{amount} ileti silindi.",
    DELETE_ERROR:
      "Mesajlar silinirken hata oluştu, 14 günden eski olmamasına dikkat edin.",
    KICK_CANNOT_KICK: "O kişi atılamaz.",
    KICK_SUCCESS_DM: "**{guild}**'den **atıldınız**, Sebep: **{reason}**",
    KICK_SUCCESS:
      "**{tag}** sunucudan başarıyla atıldı. Sebep: **{reason}**. Ayrıca kişiye bilgi vermek için bir özel mesaj gönderdim.",
    MUTE_CANNOT_MUTE: "Bu üyenin sesi kapatılamaz.",
    MUTE_ALREADY_MUTED: "Üye zaten susturulmuş.",
    MUTE_SUCCESS_DM: "**{guild}** tarafından **sessizleştirildiniz**, Sebep: **{reason}**",
    MUTE_SUCCESS:
      "**{tag}** başarıyla susturuldu. Sebep: **{reason}**. Ayrıca kişiye bilgi vermek için bir özel mesaj gönderdim.",
    BAN_BANNED_BY: "**Yasaklayan:**",
    NUKE_NUKED: "Kanal başarıyla temizlendi.",
    NUKE_CANCELED: "Temizleme komutu iptal edildi",
    NUKE_CONFIRM: "Bu kanalı temizlemek istediğinizden emin misiniz? y/n",
    CHANNEL_CANNOT_BE_DELETED: "O kanal silinemez.",
    TEXT_OR_VALID_CHANNEL: "Lütfen geçerli bir metin veya geçerli bir kanal sağlayın!",
    DEFAULT_ANNOUNCE_CHANNEL:
      "Ayrıca `set announce-channel <channel mention>` seçeneğini kullanarak da varsayılan bir kanal ayarlayabilirsiniz.",
    CHANNEL_ALREADY_LOCKED: "O kanal zaten kilitli!",
    LOCKED_CHANNEL_REASON: "{channel} başarıyla kilitlendi, Sebep: **{lockReason}**",
    MY_ROLE_MUST_BE_HIGHER: "Rolüm **{roleName}** rolünden daha yüksek olmalı!",
    MY_ROLE_MUST_BE_HIGHER2: "Rolüm **{needsRoleTag}** en yüksek rolden daha yüksek olmalı!",
    REMOVED_ROLE: "**{roleName}**, {needsRole} grubundan başarıyla kaldırıldı",
    REMOVED_ROLE_EVERYONE: "**{roleName}** herkesten başarıyla Kaldırıldı.",
    PROVIDE_VALID_USER: "Lütfen geçerli bir kullanıcı sağlayın.",
    NO_WARNINGS: "Uyarı yok.",
    ANNOUNCEMENT: "📢 Duyuru 📢",
    PROVIDE_VALID_MEMBER: "Lütfen geçerli bir üye sağlayın.",
    PROVIDE_VALID_EMOJI: "Lütfen geçerli bir emoji sağlayın.",
    EMOJI_ADDED: "Emoji eklendi.",
    EMOJI_ADDED_NAME: "Emoji Eklendi! | İsim:",
    PREVIEW: "Ön izleme:",
    USE_NORMAL_EMOJI: "Sunucuya Eklemeden Normal Emoji Kullanabilirsiniz!",
    MAX_EMOJI: "Bu sunucu için maksimum emoji sayısına ulaşıldı!",
    STICKY_LONG: "Yapışkan mesajınız 1800 karakterden uzun olamaz!",
    STICKY_READ: "__***:Uyarı: Yapışkan Mesaj, Yazmadan Önce Okuyun! :Uyarı:***__",
    PROVIDE_VALID_USERID: "Lütfen bir kullanıcı kimliği sağlayın.",
    SUC_UNBAN: "**{bannedUsername}** sunucudan yasaklanması başarıyla kaldırıldı.",
    NOT_IN_VOICE_OR_NOT_DEAF: "Kullanıcı bir ses kanalında değil veya sağır değil.",
    UNDEAFENED_USER: "**{guildName}** tarafından **sağırlaştırıldınız.**",
    UNDEAFENED:
      "**{undeafenUserTag}** başarıyla sağırlaştırıldı. Ayrıca kişiye bilgi vermek için bir DM gönderdim.",
    CHAN_NOT_LOCK: "O kanal kilitli değil!",
    SUC_UNLOCK: "{channel} başarıyla açıldı.",
    NOT_MUTED: "Kullanıcının sesi kapatılmadı!",
    SUC_UNMUTE: "**{mutedMemberTag}** üyenin sesi başarıyla açıldı.",
    STICKY_CLEAR: "**{channel}** için yapışkan temizlendi.",
    CAN_NOT_DISC: "Kullanıcının bağlantısı kesilemez.",
    NOT_IN_VOICE: "Kullanıcı şu anda seste değil.",
    YOU_DISC: "**{guildName}** ile **bağlantınız kesildi**, Sebep: **{reason}**",
    USER_DISC:
      "**{kickUserTag}**, **{kickUserVoiceChannel}** ile başarıyla bağlantısı kesildi. Sebep: **{reason}**. Ayrıca kişiye bilgi vermek için bir DM gönderdim.",
    USER_NOT_VOICE_OR_MUTED: "Kullanıcı bir ses kanalında değil veya zaten sesi kapatılmış.",
    YOU_MUTED: "**{guildName}** tarafından **sessizleştirildiniz**, Sebep: **{reason}**",
    USER_MUTED:
      "**{muteUserTag}** başarıyla sesi kapatıldı. Sebep: **{reason}**. Ayrıca kişiye bilgi vermek için bir DM gönderdim.",
    USER_NOT_VOICE_OR_NOT_MUTED: "Kullanıcı bir ses kanalında değil veya sesi kapatılmamış.",
    YOU_UNMUTED: "**{guildName}** tarafından **Sesiniz açıldı.**",
    USER_SUC_UNMUTED:
      "**{unmuteUserTag}** başarıyla sesi açıldı. Ayrıca kişiye bilgi vermek için bir DM gönderdim.",
    USER_NOT_WARN: "Kullanıcı uyarılamaz.",
    USER_WARNED: "{memberTag}, şu nedenle uyarıldı: {reason} (Toplam uyarı: {warningsTotal})",
    WARN_NOT_FOUND: "Uyarı bulunamadı veya {memberTag} herhangi bir uyarı içermiyor.",
    WARNING: "Uyarı:",
    WARNED_ON: "Uyarıldı:",
    MEMBER_WARNS: "{memberTag} uyarıları",
    TOTAL_WARNS: "Toplam uyarılar",
    ADDED_ROLE_TO: "**{time}** için **{roleName}** rolü {userTag} öğesine başarıyla eklendi.",
    CANNOT_USE_CMD_THREAD: "Bu komut bir iş parçacığı kanalında kullanılamaz!",
  },
  TICKET: {
    CANNOT_DO_ACTION: "Bu işlem bilet olmayan bir kanalda yapılamaz.",
    CLOSING: "Bu bileti 15 saniye içinde kapatmak isterseniz, iptal etmek için `cancel` yazın.",
    WILL_NOT_CLOSE: "Bu bilet kapatılmayacak.",
    ALREADY_ACTIVE_TICKET: "Zaten aktif bir biletiniz var.",
    TICKET_FOR: "{member} için destek bileti",
    CREATED: "Bilet başarıyla oluşturuldu!",
    CREATED_IN: "Bilet başarıyla {channel} içinde oluşturuldu.",
    NOT_ENABLED:
      "Bu sunucu için biletler etkin değil! Bir yönetici, {botName} ayarlarından bunu etkinleştirebilir.",
    TICKET: "Bilet-#{Id}",
  },
  EVENTS: {
    CHANNEL_CREATED: "Kanal oluşturuldu.",
    CHANNEL_CREATED_MSG: "{channel_type}: **{channel}** oluşturuldu.",
    CHANNEL_DELETED: "Kanal silindi.",
    CHANNEL_DELETED_MSG: "{channel_type}: **{channel}** silindi.",
    CHANNEL_RENAME_MSG: "{channel_type}: **{channel}**, **{new_channel}** olarak yeniden adlandırıldı.",
    CHANNEL_RENAME: "Kanalı yeniden adlandır.",
    CHANNEL_TOPIC_UPDATED: "Kanal konusu güncellendi.",
    CHANNEL_TOPIC_UPDATED_MSG: "Kanaldaki kanal konusu: **{channel}** güncellendi.",
    CHANNEL_OLD_TOPIC: "Eski Konu",
    CHANNEL_NEW_TOPIC: "Yeni Konu",
    EMOJI_CREATED_MSG: "Emoji: {emoji} oluşturuldu.",
    EMOJI_CREATED: "Yeni emoji oluşturuldu.",
    EMOJI_DELETED_MSG: "Emoji: **{emoji}** silindi.",
    EMOJI_DELETED: "Emoji Silindi.",
    EMOJI_RENAMED_MSG: "Emoji: **{emoji_name}**, **{new_name}** olarak yeniden adlandırıldı. ({emoji})",
    BANNED_MEMBER: "Yasaklı üye",
    NOT_FOUND: "Bulunamadı.",
    BAN_ADD: "Üye Yasaklandı.",
    KICK_ADD: "Üye Atıldı.",
    EXECUTED_BY: "Tarafından yürütülen",
    REASON: "Sebep",

    STICKER_CREATED: "Yeni Çıkartma Oluşturuldu.",
    STICKER_DELETED_MSG: "Bir çıkartma silindi.",
    STICKER_DELETED: "Çıkartma silindi.",
    STICKER_UPDATED: "Çıkartma güncellendi.",
    NAME_UPDATED: "İsim güncellendi.",
    DESCRIPTION_UPDATED: "Açıklama güncellendi.",
  },
  MESSAGE: {
    USER_IS_AFK: "{tag} AFK'dir!\n **Sebep**: {reason}",
    NOT_AFK_ANYMORE: "{tag} artık AFK değil.",
    BLACKLISTED: "Bu botu kullanmaktan kara listeye alındınız.",
    CATEGORY_DISABLED:
      "Bu komut devre dışı bırakıldı çünkü bu sunucu {category} kategorisini devre dışı bıraktı.",
    COMMAND_DISABLED: "Bu komut bu sunucu için devre dışı bırakıldı.",
    OWNER_ONLY: "Bu komut sadece sunucu sahibi tarafından kullanılabilir!",
    INCORRECT_ARGS: "Yanlış komut kullanımı",
    REQUIRED_ARGS: "Daha fazla argüman sağlamalısınız: {args}",
    COOLDOWN_AMOUNT: "**{command}** komutunu kullanmadan önce lütfen **{time}** saniye daha bekleyin.",
    BAD_WORD:
      "{mention}, yöneticinin belirlediği kötü bir kelime kullandınız. Bu nedenle mesajınız silindi.",
    EXAMPLE: "Örnek:",
    SUPPORT: "Destek",
    NEED_PERMS: "Şunlara ihtiyacınız var: {perms} izinler",
    MUST_BE_DATE: "Bu bağımsız değişken türü bir **tarih** olmalıdır. Örneğin: `1h`, `2days`, `5min`",
    MUST_BE_NUMBER: "Bu bağımsız değişken türü bir **sayı** olmalıdır.",
  },
  GIVEAWAY: {
    NEW: "**🎉🎉 Yeni Çekiliş 🎉🎉**",
    ENDED: "**Çekiliş Sona Erdi**",
    ALREADY_ENDED: "Çekiliş çoktan sona erdi veya bulunamadı",
    SUCCESS_ENDED: "Çekiliş başarıyla sona erdi.",
    SUCCESS_REROLLED: "Hediye çekilişi başarıyla yeniden düzenlendi.",
    STARTED: "Çekiliş başladı.",
    NOT_FOUND: "Şu kimliğe sahip çekiliş bulunamadı: {id}",
  },
  OTHER: {
    REGIONS: {
      europe: ":flag_eu: Avrupa",
      "eu-west": ":flag_eu: Avrupa-Batı",
      "eu-central": ":flag_eu: Avrupa-Merkez",
      brazil: ":flag_br: Brezilya",
      hongkong: ":flag_hk: Hongkong",
      india: ":flag_in: Hindistan",
      japan: ":flag_jp: Japonya",
      russia: ":flag_ru: Rusya",
      singapore: ":flag_sg: Singapur",
      southafrica: ":flag_za: Güney Afrika",
      sydney: ":flag_au: Sidney",
      frankfurt: ":flag_de: Frankfurt",
      "us-central": ":flag_us: Amerika-Merkez",
      "us-east": ":flag_us: Amerika-Doğu",
      "us-west": ":flag_us: Amerika-Batı",
      "us-south": ":flag_us: Amerika-Güney",
      amsterdam: ":flag_nl: Amsterdam",
      dubai: ":flag_ae: Dubai",
      "south-korea": ":flag_kr: Güney Kore",
      london: ":flag_gb: Londra",
    },
    MFA_LEVELS: {
      NONE: "Kullanılmıyor.",
      ELEVATED: "Kullanılıyor.",
    },
    VERLEVELS: {
      NONE: "Hiç",
      LOW: "Düşük",
      MEDIUM: "Orta",
      HIGH: "Yüksek",
      VERY_HIGH: "Çok Yüksek",
    },
    ANSWERS: [
      "Evet.",
      "Hayır.",
      "Kaynaklarım evet diyor.",
      "Büyük ihtimalle.",
      "Bilmiyorum.",
      "Belki bazen.",
      "İyi tahmin.",
      "İşaretler eveti gösteriyor.",
      "Kesinlikle.",
      "Mutlaka.",
      "Olmaz.",
      "Hayır teşekkürler, başaramayacağım.",
      "Asla!",
      "Kesin.",
      "Kesinlikle öyle.",
      "Şüphesiz.",
      "Evet, kesinlikle.",
      "Buna güvenebilirsin.",
      "Gördüğüm kadarıyla evet.",
    ],
    WIND_DIRECTIONS: {
      NORTH: "Kuzey",
      NORTH_EAST: "Kuzey Doğu",
      EAST: "Doğu",
      SOUTH: "Güney",
      SOUTH_EAST: "Güney Doğu",
      SOUTH_WEST: "Güney Batı",
      WEST: "Batı",
      NORTH_WEST: "Kuzey Batı",
    },
  },
  INVITE: {
    NOT_FOUND: "Bu davet bulunamadı.",
    NOT_EXPIRED_YET: "Bu davetin süresi henüz dolmadı.",
    NOT_EXPIRE: "Bu davetin süresi dolmaz.",
    EXPIRATION: "Son Kullanım Tarihi",
    EXPIRES_AT: "Sonlanma Tarihi",
    EXPIRED_AT: "Geçerlilik Tarihi",
  },
};
