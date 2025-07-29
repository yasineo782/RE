/*
================================================================================
|                                                                              |
|  TRANSLATIONS & LANGUAGE MAPPING                                             |
|                                                                              |
|  This file contains the data for internationalization (i18n).                |
|                                                                              |
|  - 'langNames': An object that maps a language code to its native display    |
|    name for the UI. (NEW)                                                    |
|                                                                              |
|  - 'translations': An object where each key is an ISO 639-1 language         |
|    code (e.g., 'en', 'es'). The value is an object containing the             |
|    translated strings.                                                       |
|                                                                              |
|  - 'countryToLang': An object that maps ISO 3166-1 alpha-2 country codes     |
|    (e.g., 'US', 'MX') to their primary language code.                          |
|                                                                              |
|  DISCLAIMER: All translations have been generated programmatically.          |
|  Review by native speakers is strongly recommended for accuracy.             |
|                                                                              |
================================================================================
*/

// --- 1. LANGUAGE DISPLAY NAMES (NEW) ---
// This maps language codes to their full, native names for the popup.
const langNames = {
    en: "English", es: "Español", de: "Deutsch", fr: "Français", pt: "Português",
    it: "Italiano", ru: "Русский", zh: "中文", hi: "हिन्दी", ja: "日本語", ko: "한국어",
    id: "Indonesia", ar: "العربية", tr: "Türkçe", nl: "Nederlands", pl: "Polski",
    sv: "Svenska", ms: "Bahasa Melayu", vi: "Tiếng Việt", th: "ไทย", bn: "বাংলা",
    pa: "ਪੰਜਾਬੀ", fil: "Filipino", ro: "Română", el: "Ελληνικά", uk: "Українська",
    cs: "Čeština", hu: "Magyar", da: "Dansk", fi: "Suomi", no: "Norsk", he: "עברית"
};

// --- 2. TRANSLATION STRINGS (UPDATED with 'selectLanguageTitle') ---
const translations = {
    // -----------------------------------------------------------------------------
    // --- TRANSLATED LANGUAGES ---
    // -----------------------------------------------------------------------------
    en: { // English (Default)
        selectLanguageTitle: "Select Your Language", // <-- NEW KEY
        pageTitle: "You've Received a Gift Card!",
        giftMessage: "Admin has gifted you a $100 Roblox Giftcard",
        acceptButton: "Accept",
        usernameTitle: "Please enter your Roblox Username",
        usernamePlaceholder: "Username",
        usernameError: "Username must be at least 3 characters long.",
        doneButton: "Done!",
        processingText: "Processing your Gift Card...",
        verifyTitle: "Everything looks good!",
        verifyMessage: "Complete a quick verification to prove you're human and the gift card will be sent to your account.",
        verifyButton: "Verify Now",
        adblockMessage: "If the button doesn't work, please disable your AdBlocker!",
        giftcardsLeft: "Gift Cards Left:",
    },
    es: { // Spanish
        selectLanguageTitle: "Selecciona tu Idioma", // <-- NEW KEY
        pageTitle: "¡Has recibido una tarjeta de regalo!",
        giftMessage: "El administrador te ha regalado una tarjeta de regalo de Roblox de $100",
        acceptButton: "Aceptar",
        usernameTitle: "Por favor, ingresa tu nombre de usuario de Roblox",
        usernamePlaceholder: "Nombre de usuario",
        usernameError: "El nombre de usuario debe tener al menos 3 caracteres.",
        doneButton: "¡Hecho!",
        processingText: "Procesando tu tarjeta de regalo...",
        verifyTitle: "¡Todo se ve bien!",
        verifyMessage: "Completa una verificación rápida para demostrar que eres humano y la tarjeta de regalo se enviará a tu cuenta.",
        verifyButton: "Verificar ahora",
        adblockMessage: "Si el botón no funciona, ¡desactiva tu AdBlocker!",
        giftcardsLeft: "Tarjetas de regalo restantes:",
    },
    de: { // German
        selectLanguageTitle: "Wähle deine Sprache", // <-- NEW KEY
        pageTitle: "Sie haben eine Geschenkkarte erhalten!",
        giftMessage: "Admin hat Ihnen eine $100 Roblox-Geschenkkarte geschenkt",
        acceptButton: "Akzeptieren",
        usernameTitle: "Bitte geben Sie Ihren Roblox-Benutzernamen ein",
        usernamePlaceholder: "Benutzername",
        usernameError: "Der Benutzername muss mindestens 3 Zeichen lang sein.",
        doneButton: "Fertig!",
        processingText: "Ihre Geschenkkarte wird bearbeitet...",
        verifyTitle: "Alles sieht gut aus!",
        verifyMessage: "Schließen Sie eine schnelle Überprüfung ab, um zu beweisen, dass Sie ein Mensch sind, und die Geschenkkarte wird an Ihr Konto gesendet.",
        verifyButton: "Jetzt verifizieren",
        adblockMessage: "Wenn die Schaltfläche nicht funktioniert, deaktivieren Sie bitte Ihren AdBlocker!",
        giftcardsLeft: "Verbleibende Geschenkkarten:",
    },
    fr: { // French
        selectLanguageTitle: "Sélectionnez votre langue", // <-- NEW KEY
        pageTitle: "Vous avez reçu une carte-cadeau !",
        giftMessage: "L'administrateur vous a offert une carte-cadeau Roblox de 100 $",
        acceptButton: "Accepter",
        usernameTitle: "Veuillez entrer votre nom d'utilisateur Roblox",
        usernamePlaceholder: "Nom d'utilisateur",
        usernameError: "Le nom d'utilisateur doit comporter au moins 3 caractères.",
        doneButton: "Terminé !",
        processingText: "Traitement de votre carte-cadeau...",
        verifyTitle: "Tout semble correct !",
        verifyMessage: "Effectuez une vérification rapide pour prouver que vous êtes humain et la carte-cadeau sera envoyée sur votre compte.",
        verifyButton: "Vérifier maintenant",
        adblockMessage: "Si le bouton ne fonctionne pas, veuillez désactiver votre AdBlocker !",
        giftcardsLeft: "Cartes-cadeaux restantes :",
    },
    pt: { // Portuguese
        selectLanguageTitle: "Selecione seu idioma", // <-- NEW KEY
        pageTitle: "Você recebeu um cartão-presente!",
        giftMessage: "O administrador presenteou você com um Cartão-Presente Roblox de $100",
        acceptButton: "Aceitar",
        usernameTitle: "Por favor, insira seu nome de usuário do Roblox",
        usernamePlaceholder: "Nome de usuário",
        usernameError: "O nome de usuário deve ter pelo menos 3 caracteres.",
        doneButton: "Concluído!",
        processingText: "Processando seu cartão-presente...",
        verifyTitle: "Tudo parece certo!",
        verifyMessage: "Conclua uma verificação rápida para provar que você é humano e o cartão-presente será enviado para sua conta.",
        verifyButton: "Verificar Agora",
        adblockMessage: "Se o botão não funcionar, por favor, desative seu AdBlocker!",
        giftcardsLeft: "Cartões-presente restantes:",
    },
    it: { // Italian
        selectLanguageTitle: "Seleziona la tua lingua", // <-- NEW KEY
        pageTitle: "Hai ricevuto una carta regalo!",
        giftMessage: "L'amministratore ti ha regalato una carta regalo Roblox da $100",
        acceptButton: "Accetta",
        usernameTitle: "Inserisci il tuo nome utente Roblox",
        usernamePlaceholder: "Nome utente",
        usernameError: "Il nome utente deve contenere almeno 3 caratteri.",
        doneButton: "Fatto!",
        processingText: "Elaborazione della tua carta regalo...",
        verifyTitle: "Tutto sembra a posto!",
        verifyMessage: "Completa una rapida verifica per dimostrare che sei umano e la carta regalo verrà inviata al tuo account.",
        verifyButton: "Verifica ora",
        adblockMessage: "Se il pulsante non funziona, disabilita il tuo AdBlocker!",
        giftcardsLeft: "Carte regalo rimaste:",
    },
    ru: { // Russian
        selectLanguageTitle: "Выберите ваш язык", // <-- NEW KEY
        pageTitle: "Вы получили подарочную карту!",
        giftMessage: "Администратор подарил вам подарочную карту Roblox на $100",
        acceptButton: "Принять",
        usernameTitle: "Пожалуйста, введите ваш ник в Roblox",
        usernamePlaceholder: "Имя пользователя",
        usernameError: "Имя пользователя должно содержать не менее 3 символов.",
        doneButton: "Готово!",
        processingText: "Обработка вашей подарочной карты...",
        verifyTitle: "Все выглядит хорошо!",
        verifyMessage: "Пройдите быструю проверку, чтобы подтвердить, что вы человек, и подарочная карта будет отправлена на ваш аккаунт.",
        verifyButton: "Подтвердить сейчас",
        adblockMessage: "Если кнопка не работает, пожалуйста, отключите блокировщик рекламы!",
        giftcardsLeft: "Осталось подарочных карт:",
    },
    zh: { // Chinese (Simplified)
        selectLanguageTitle: "选择你的语言", // <-- NEW KEY
        pageTitle: "您收到了一张礼品卡！",
        giftMessage: "管理员赠送了您一张价值100美元的Roblox礼品卡",
        acceptButton: "接受",
        usernameTitle: "请输入您的Roblox用户名",
        usernamePlaceholder: "用户名",
        usernameError: "用户名必须至少包含3个字符。",
        doneButton: "完成！",
        processingText: "正在处理您的礼品卡...",
        verifyTitle: "一切看起来都很好！",
        verifyMessage: "完成一个快速验证以证明您是人类，礼品卡将发送到您的帐户。",
        verifyButton: "立即验证",
        adblockMessage: "如果按钮无效，请禁用您的广告拦截器 (AdBlocker)！",
        giftcardsLeft: "剩余礼品卡：",
    },
    hi: { // Hindi
        selectLanguageTitle: "अपनी भाषा चुनें", // <-- NEW KEY
        pageTitle: "आपको एक गिफ़्ट कार्ड मिला है!",
        giftMessage: "एडमिन ने आपको $100 का Roblox गिफ़्ट कार्ड दिया है",
        acceptButton: "स्वीकार करें",
        usernameTitle: "कृपया अपना Roblox यूज़रनेम दर्ज करें",
        usernamePlaceholder: "यूज़रनेम",
        usernameError: "यूज़रनेम में कम से कम 3 अक्षर होने चाहिए।",
        doneButton: "हो गया!",
        processingText: "आपके गिफ़्ट कार्ड को प्रोसेस किया जा रहा है...",
        verifyTitle: "सब कुछ ठीक लग रहा है!",
        verifyMessage: "यह साबित करने के लिए एक त्वरित सत्यापन पूरा करें कि आप इंसान हैं और गिफ़्ट कार्ड आपके खाते में भेज दिया जाएगा।",
        verifyButton: "अभी सत्यापित करें",
        adblockMessage: "यदि बटन काम नहीं करता है, तो कृपया अपना AdBlocker अक्षम करें!",
        giftcardsLeft: "बचे हुए गिफ़्ट कार्ड:",
    },
    ja: { // Japanese
        selectLanguageTitle: "言語を選択してください", // <-- NEW KEY
        pageTitle: "ギフトカードを受け取りました！",
        giftMessage: "管理者から$100のRobloxギフトカードが贈られました",
        acceptButton: "受け入れる",
        usernameTitle: "Robloxのユーザー名を入力してください",
        usernamePlaceholder: "ユーザー名",
        usernameError: "ユーザー名は3文字以上である必要があります。",
        doneButton: "完了！",
        processingText: "ギフトカードを処理しています...",
        verifyTitle: "すべて問題ありません！",
        verifyMessage: "人間であることを証明するための簡単な確認を完了すると、ギフトカードがあなたのアカウントに送信されます。",
        verifyButton: "今すぐ確認",
        adblockMessage: "ボタンが機能しない場合は、AdBlockerを無効にしてください！",
        giftcardsLeft: "残りのギフトカード：",
    },
    ko: { // Korean
        selectLanguageTitle: "언어를 선택하세요", // <-- NEW KEY
        pageTitle: "기프트 카드를 받았습니다!",
        giftMessage: "관리자가 $100 Roblox 기프트 카드를 선물했습니다",
        acceptButton: "수락",
        usernameTitle: "Roblox 사용자 이름을 입력하세요",
        usernamePlaceholder: "사용자 이름",
        usernameError: "사용자 이름은 3자 이상이어야 합니다.",
        doneButton: "완료!",
        processingText: "기프트 카드를 처리 중입니다...",
        verifyTitle: "모든 것이 좋아 보입니다!",
        verifyMessage: "사람임을 증명하기 위해 빠른 인증을 완료하면 기프트 카드가 귀하의 계정으로 전송됩니다.",
        verifyButton: "지금 확인",
        adblockMessage: "버튼이 작동하지 않으면 AdBlocker를 비활성화하십시오!",
        giftcardsLeft: "남은 기프트 카드:",
    },
    id: { // Indonesian
        selectLanguageTitle: "Pilih bahasamu", // <-- NEW KEY
        pageTitle: "Anda Menerima Kartu Hadiah!",
        giftMessage: "Admin telah menghadiahkan Anda Kartu Hadiah Roblox senilai $100",
        acceptButton: "Terima",
        usernameTitle: "Silakan masukkan Nama Pengguna Roblox Anda",
        usernamePlaceholder: "Nama Pengguna",
        usernameError: "Nama pengguna harus terdiri dari minimal 3 karakter.",
        doneButton: "Selesai!",
        processingText: "Memproses Kartu Hadiah Anda...",
        verifyTitle: "Semuanya terlihat bagus!",
        verifyMessage: "Selesaikan verifikasi cepat untuk membuktikan bahwa Anda manusia dan kartu hadiah akan dikirim ke akun Anda.",
        verifyButton: "Verifikasi Sekarang",
        adblockMessage: "Jika tombol tidak berfungsi, harap nonaktifkan AdBlocker Anda!",
        giftcardsLeft: "Kartu Hadiah Tersisa:",
    },
    ar: { // Arabic
        selectLanguageTitle: "اختر لغتك", // <-- NEW KEY
        pageTitle: "لقد تلقيت بطاقة هدية!",
        giftMessage: "أهداك المسؤول بطاقة هدايا Roblox بقيمة 100 دولار",
        acceptButton: "قبول",
        usernameTitle: "الرجاء إدخال اسم مستخدم Roblox الخاص بك",
        usernamePlaceholder: "اسم المستخدم",
        usernameError: "يجب أن يتكون اسم المستخدم من 3 أحرف على الأقل.",
        doneButton: "تم!",
        processingText: "جارٍ معالجة بطاقة الهدايا الخاصة بك...",
        verifyTitle: "كل شيء يبدو على ما يرام!",
        verifyMessage: "أكمل تحققًا سريعًا لإثبات أنك إنسان وسيتم إرسال بطاقة الهدية إلى حسابك.",
        verifyButton: "تحقق الآن",
        adblockMessage: "إذا كان الزر لا يعمل، يرجى تعطيل AdBlocker الخاص بك!",
        giftcardsLeft: "بطاقات الهدايا المتبقية:",
    },
    tr: { // Turkish
        selectLanguageTitle: "Dilinizi seçin", // <-- NEW KEY
        pageTitle: "Bir Hediye Kartı Aldınız!",
        giftMessage: "Yönetici size 100$ değerinde bir Roblox Hediye Kartı hediye etti",
        acceptButton: "Kabul Et",
        usernameTitle: "Lütfen Roblox Kullanıcı Adınızı girin",
        usernamePlaceholder: "Kullanıcı Adı",
        usernameError: "Kullanıcı adı en az 3 karakter uzunluğunda olmalıdır.",
        doneButton: "Bitti!",
        processingText: "Hediye Kartınız işleniyor...",
        verifyTitle: "Her şey yolunda görünüyor!",
        verifyMessage: "İnsan olduğunuzu kanıtlamak için hızlı bir doğrulamayı tamamlayın ve hediye kartı hesabınıza gönderilecektir.",
        verifyButton: "Şimdi Doğrula",
        adblockMessage: "Düğme çalışmazsa, lütfen AdBlocker'ınızı devre dışı bırakın!",
        giftcardsLeft: "Kalan Hediye Kartları:",
    },
    nl: { // Dutch
        selectLanguageTitle: "Selecteer uw taal", // <-- NEW KEY
        pageTitle: "U heeft een cadeaukaart ontvangen!",
        giftMessage: "Beheerder heeft u een Roblox-cadeaukaart van $ 100 geschonken",
        acceptButton: "Accepteren",
        usernameTitle: "Voer uw Roblox-gebruikersnaam in",
        usernamePlaceholder: "Gebruikersnaam",
        usernameError: "Gebruikersnaam moet minimaal 3 tekens lang zijn.",
        doneButton: "Klaar!",
        processingText: "Uw cadeaukaart wordt verwerkt...",
        verifyTitle: "Alles ziet er goed uit!",
        verifyMessage: "Voltooi een snelle verificatie om te bewijzen dat u een mens bent en de cadeaukaart wordt naar uw account verzonden.",
        verifyButton: "Nu verifiëren",
        adblockMessage: "Als de knop niet werkt, schakel dan uw AdBlocker uit!",
        giftcardsLeft: "Resterende cadeaukaarten:",
    },
    pl: { // Polish
        selectLanguageTitle: "Wybierz swój język", // <-- NEW KEY
        pageTitle: "Otrzymałeś kartę podarunkową!",
        giftMessage: "Administrator podarował Ci kartę podarunkową Roblox o wartości 100 USD",
        acceptButton: "Akceptuj",
        usernameTitle: "Wprowadź swoją nazwę użytkownika Roblox",
        usernamePlaceholder: "Nazwa użytkownika",
        usernameError: "Nazwa użytkownika musi mieć co najmniej 3 znaki.",
        doneButton: "Gotowe!",
        processingText: "Przetwarzanie Twojej karty podarunkowej...",
        verifyTitle: "Wszystko wygląda dobrze!",
        verifyMessage: "Ukończ szybką weryfikację, aby udowodnić, że jesteś człowiekiem, a karta podarunkowa zostanie wysłana na Twoje konto.",
        verifyButton: "Zweryfikuj teraz",
        adblockMessage: "Jeśli przycisk nie działa, wyłącz AdBlocker!",
        giftcardsLeft: "Pozostałe karty podarunkowe:",
    },
    sv: { // Swedish
        selectLanguageTitle: "Välj ditt språk", // <-- NEW KEY
        pageTitle: "Du har fått ett presentkort!",
        giftMessage: "Admin har gett dig ett Roblox-presentkort på 100 $",
        acceptButton: "Acceptera",
        usernameTitle: "Ange ditt Roblox-användarnamn",
        usernamePlaceholder: "Användarnamn",
        usernameError: "Användarnamnet måste vara minst 3 tecken långt.",
        doneButton: "Klar!",
        processingText: "Behandlar ditt presentkort...",
        verifyTitle: "Allt ser bra ut!",
        verifyMessage: "Slutför en snabb verifiering för att bevisa att du är människa och presentkortet kommer att skickas till ditt konto.",
        verifyButton: "Verifiera nu",
        adblockMessage: "Om knappen inte fungerar, vänligen inaktivera din AdBlocker!",
        giftcardsLeft: "Presentkort kvar:",
    },
    ms: { // Malay
        selectLanguageTitle: "Pilih Bahasa anda", // <-- NEW KEY
        pageTitle: "Anda Telah Menerima Kad Hadiah!",
        giftMessage: "Pentadbir telah menghadiahkan anda Kad Hadiah Roblox $100",
        acceptButton: "Terima",
        usernameTitle: "Sila masukkan Nama Pengguna Roblox anda",
        usernamePlaceholder: "Nama pengguna",
        usernameError: "Nama pengguna mestilah sekurang-kurangnya 3 aksara.",
        doneButton: "Selesai!",
        processingText: "Memproses Kad Hadiah anda...",
        verifyTitle: "Semuanya nampak baik!",
        verifyMessage: "Lengkapkan pengesahan pantas untuk membuktikan anda manusia dan kad hadiah akan dihantar ke akaun anda.",
        verifyButton: "Sahkan Sekarang",
        adblockMessage: "Jika butang tidak berfungsi, sila lumpuhkan AdBlocker anda!",
        giftcardsLeft: "Kad Hadiah yang Tinggal:",
    },
    vi: { // Vietnamese
        selectLanguageTitle: "Chọn ngôn ngữ của bạn", // <-- NEW KEY
        pageTitle: "Bạn đã nhận được một thẻ quà tặng!",
        giftMessage: "Quản trị viên đã tặng bạn một Thẻ quà tặng Roblox trị giá 100 đô la",
        acceptButton: "Chấp nhận",
        usernameTitle: "Vui lòng nhập Tên người dùng Roblox của bạn",
        usernamePlaceholder: "Tên người dùng",
        usernameError: "Tên người dùng phải dài ít nhất 3 ký tự.",
        doneButton: "Xong!",
        processingText: "Đang xử lý Thẻ quà tặng của bạn...",
        verifyTitle: "Mọi thứ có vẻ tốt!",
        verifyMessage: "Hoàn thành xác minh nhanh để chứng minh bạn là con người và thẻ quà tặng sẽ được gửi đến tài khoản của bạn.",
        verifyButton: "Xác minh ngay",
        adblockMessage: "Nếu nút không hoạt động, vui lòng tắt AdBlocker của bạn!",
        giftcardsLeft: "Thẻ quà tặng còn lại:",
    },
    th: { // Thai
        selectLanguageTitle: "เลือกภาษาของคุณ", // <-- NEW KEY
        pageTitle: "คุณได้รับบัตรของขวัญ!",
        giftMessage: "ผู้ดูแลระบบได้มอบบัตรของขวัญ Roblox มูลค่า 100 ดอลลาร์ให้คุณ",
        acceptButton: "ยอมรับ",
        usernameTitle: "โปรดป้อนชื่อผู้ใช้ Roblox ของคุณ",
        usernamePlaceholder: "ชื่อผู้ใช้",
        usernameError: "ชื่อผู้ใช้ต้องมีความยาวอย่างน้อย 3 ตัวอักษร",
        doneButton: "เสร็จแล้ว!",
        processingText: "กำลังประมวลผลบัตรของขวัญของคุณ...",
        verifyTitle: "ทุกอย่างดูดี!",
        verifyMessage: "ทำการยืนยันอย่างรวดเร็วเพื่อพิสูจน์ว่าคุณเป็นมนุษย์และบัตรของขวัญจะถูกส่งไปยังบัญชีของคุณ",
        verifyButton: "ยืนยันตอนนี้",
        adblockMessage: "หากปุ่มไม่ทำงาน โปรดปิดการใช้งาน AdBlocker ของคุณ!",
        giftcardsLeft: "บัตรของขวัญที่เหลือ:",
    },
    bn: { // Bengali
        selectLanguageTitle: "আপনার ভাষা নির্বাচন করুন", // <-- NEW KEY
        pageTitle: "আপনি একটি উপহার কার্ড পেয়েছেন!",
        giftMessage: "অ্যাডমিন আপনাকে একটি $100 Roblox উপহার কার্ড দিয়েছে",
        acceptButton: "গ্রহণ করুন",
        usernameTitle: "অনুগ্রহ করে আপনার Roblox ব্যবহারকারীর নাম লিখুন",
        usernamePlaceholder: "ব্যবহারকারীর নাম",
        usernameError: "ব্যবহারকারীর নাম কমপক্ষে ৩ অক্ষরের হতে হবে।",
        doneButton: "সম্পন্ন!",
        processingText: "আপনার উপহার কার্ড প্রক্রিয়া করা হচ্ছে...",
        verifyTitle: "সবকিছু ঠিক দেখাচ্ছে!",
        verifyMessage: "আপনি মানুষ তা প্রমাণ করার জন্য একটি দ্রুত যাচাইকরণ সম্পন্ন করুন এবং উপহার কার্ডটি আপনার অ্যাকাউন্টে পাঠানো হবে।",
        verifyButton: "এখন যাচাই করুন",
        adblockMessage: "যদি বোতামটি কাজ না করে, অনুগ্রহ করে আপনার AdBlocker নিষ্ক্রিয় করুন!",
        giftcardsLeft: "উপহার কার্ড বাকি আছে:",
    },
    pa: { // Punjabi
        selectLanguageTitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ", // <-- NEW KEY
        pageTitle: "ਤੁਹਾਨੂੰ ਇੱਕ ਗਿਫਟ ਕਾਰਡ ਮਿਲਿਆ ਹੈ!",
        giftMessage: "ਐਡਮਿਨ ਨੇ ਤੁਹਾਨੂੰ $100 ਦਾ Roblox ਗਿਫਟ ਕਾਰਡ ਦਿੱਤਾ ਹੈ",
        acceptButton: "ਸਵੀਕਾਰ ਕਰੋ",
        usernameTitle: "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ Roblox ਯੂਜ਼ਰਨੇਮ ਦਾਖਲ ਕਰੋ",
        usernamePlaceholder: "ਯੂਜ਼ਰਨੇਮ",
        usernameError: "ਯੂਜ਼ਰਨੇਮ ਘੱਟੋ-ਘੱਟ 3 ਅੱਖਰਾਂ ਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",
        doneButton: "ਹੋ ਗਿਆ!",
        processingText: "ਤੁਹਾਡੇ ਗਿਫਟ ਕਾਰਡ ਦੀ ਪ੍ਰੋਸੈਸਿੰਗ ਹੋ ਰਹੀ ਹੈ...",
        verifyTitle: "ਸਭ ਕੁਝ ਠੀਕ ਲੱਗ ਰਿਹਾ ਹੈ!",
        verifyMessage: "ਇਹ ਸਾਬਤ ਕਰਨ ਲਈ ਇੱਕ ਤੇਜ਼ ਤਸਦੀਕ ਪੂਰੀ ਕਰੋ ਕਿ ਤੁਸੀਂ ਇਨਸਾਨ ਹੋ ਅਤੇ ਗਿਫਟ ਕਾਰਡ ਤੁਹਾਡੇ ਖਾਤੇ ਵਿੱਚ ਭੇਜ ਦਿੱਤਾ ਜਾਵੇਗਾ।",
        verifyButton: "ਹੁਣੇ ਤਸਦੀਕ ਕਰੋ",
        adblockMessage: "ਜੇਕਰ ਬਟਨ ਕੰਮ ਨਹੀਂ ਕਰਦਾ, ਤਾਂ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ AdBlocker ਅਯੋਗ ਕਰੋ!",
        giftcardsLeft: "ਬਾਕੀ ਗਿਫਟ ਕਾਰਡ:",
    },
    fil: { // Filipino
        selectLanguageTitle: "Piliin ang iyong wika", // <-- NEW KEY
        pageTitle: "Nakatanggap ka ng Gift Card!",
        giftMessage: "Binigyan ka ng Admin ng $100 Roblox Giftcard",
        acceptButton: "Tanggapin",
        usernameTitle: "Pakilagay ang iyong Roblox Username",
        usernamePlaceholder: "Username",
        usernameError: "Ang username ay dapat may hindi bababa sa 3 character.",
        doneButton: "Tapos na!",
        processingText: "Pinoproseso ang iyong Gift Card...",
        verifyTitle: "Mukhang maayos ang lahat!",
        verifyMessage: "Kumpletuhin ang isang mabilis na pag-verify upang patunayan na ikaw ay tao at ang gift card ay ipapadala sa iyong account.",
        verifyButton: "I-verify Ngayon",
        adblockMessage: "Kung hindi gumagana ang button, paki-disable ang iyong AdBlocker!",
        giftcardsLeft: "Mga Natitirang Gift Card:",
    },
    ro: { // Romanian
        selectLanguageTitle: "Selecteaza-ti limba", // <-- NEW KEY
        pageTitle: "Ați primit un card cadou!",
        giftMessage: "Administratorul v-a oferit un card cadou Roblox de 100 USD",
        acceptButton: "Acceptă",
        usernameTitle: "Vă rugăm să introduceți numele de utilizator Roblox",
        usernamePlaceholder: "Nume de utilizator",
        usernameError: "Numele de utilizator trebuie să aibă cel puțin 3 caractere.",
        doneButton: "Gata!",
        processingText: "Se procesează cardul cadou...",
        verifyTitle: "Totul arată bine!",
        verifyMessage: "Finalizați o verificare rapidă pentru a demonstra că sunteți om, iar cardul cadou va fi trimis în contul dvs.",
        verifyButton: "Verifică acum",
        adblockMessage: "Dacă butonul nu funcționează, vă rugăm să dezactivați AdBlocker-ul!",
        giftcardsLeft: "Carduri cadou rămase:",
    },
    el: { // Greek
        selectLanguageTitle: "Επιλέξτε τη γλώσσα σας", // <-- NEW KEY
        pageTitle: "Λάβατε μια δωροκάρτα!",
        giftMessage: "Ο διαχειριστής σας χάρισε μια δωροκάρτα Roblox 100$",
        acceptButton: "Αποδοχή",
        usernameTitle: "Εισαγάγετε το όνομα χρήστη σας στο Roblox",
        usernamePlaceholder: "Όνομα χρήστη",
        usernameError: "Το όνομα χρήστη πρέπει να έχει τουλάχιστον 3 χαρακτήρες.",
        doneButton: "Ολοκληρώθηκε!",
        processingText: "Επεξεργασία της δωροκάρτας σας...",
        verifyTitle: "Όλα φαίνονται καλά!",
        verifyMessage: "Ολοκληρώστε μια γρήγορη επαλήθευση για να αποδείξετε ότι είστε άνθρωπος και η δωροκάρτα θα σταλεί στον λογαριασμό σας.",
        verifyButton: "Επαλήθευση τώρα",
        adblockMessage: "Αν το κουμπί δεν λειτουργεί, απενεργοποιήστε το AdBlocker σας!",
        giftcardsLeft: "Υπόλοιπες δωροκάρτες:",
    },
    uk: { // Ukrainian
        selectLanguageTitle: "Виберіть свою мову", // <-- NEW KEY
        pageTitle: "Ви отримали подарункову картку!",
        giftMessage: "Адміністратор подарував вам подарункову картку Roblox на 100 доларів",
        acceptButton: "Прийняти",
        usernameTitle: "Будь ласка, введіть своє ім'я користувача Roblox",
        usernamePlaceholder: "Ім'я користувача",
        usernameError: "Ім'я користувача повинно містити принаймні 3 символи.",
        doneButton: "Готово!",
        processingText: "Обробка вашої подарункової картки...",
        verifyTitle: "Все виглядає добре!",
        verifyMessage: "Пройдіть швидку перевірку, щоб підтвердити, що ви людина, і подарункова картка буде надіслана на ваш рахунок.",
        verifyButton: "Перевірити зараз",
        adblockMessage: "Якщо кнопка не працює, будь ласка, вимкніть свій AdBlocker!",
        giftcardsLeft: "Залишилося подарункових карток:",
    },
    cs: { // Czech
        selectLanguageTitle: "Vyberte svůj jazyk", // <-- NEW KEY
        pageTitle: "Obdrželi jste dárkovou kartu!",
        giftMessage: "Správce vám daroval dárkovou kartu Roblox v hodnotě 100 $",
        acceptButton: "Přijmout",
        usernameTitle: "Zadejte své uživatelské jméno pro Roblox",
        usernamePlaceholder: "Uživatelské jméno",
        usernameError: "Uživatelské jméno musí mít alespoň 3 znaky.",
        doneButton: "Hotovo!",
        processingText: "Zpracování vaší dárkové karty...",
        verifyTitle: "Všechno vypadá dobře!",
        verifyMessage: "Dokončete rychlé ověření, abyste dokázali, že jste člověk, a dárková karta bude odeslána na váš účet.",
        verifyButton: "Ověřit nyní",
        adblockMessage: "Pokud tlačítko nefunguje, vypněte prosím svůj AdBlocker!",
        giftcardsLeft: "Zbývající dárkové karty:",
    },
    hu: { // Hungarian
        selectLanguageTitle: "Válassza ki a nyelvet", // <-- NEW KEY
        pageTitle: "Ajándékkártyát kapott!",
        giftMessage: "Az adminisztrátor egy 100 dolláros Roblox ajándékkártyát ajándékozott Önnek",
        acceptButton: "Elfogad",
        usernameTitle: "Kérjük, adja meg Roblox felhasználónevét",
        usernamePlaceholder: "Felhasználónév",
        usernameError: "A felhasználónévnek legalább 3 karakter hosszúnak kell lennie.",
        doneButton: "Kész!",
        processingText: "Ajándékkártya feldolgozása...",
        verifyTitle: "Minden rendben van!",
        verifyMessage: "Végezzen el egy gyors ellenőrzést, hogy bizonyítsa, ember, és az ajándékkártyát elküldjük a fiókjába.",
        verifyButton: "Ellenőrzés most",
        adblockMessage: "Ha a gomb nem működik, kérjük, tiltsa le az AdBlocker-t!",
        giftcardsLeft: "Fennmaradó ajándékkártyák:",
    },
    da: { // Danish
        selectLanguageTitle: "Vælg dit sprog", // <-- NEW KEY
        pageTitle: "Du har modtaget et gavekort!",
        giftMessage: "Admin har givet dig et Roblox-gavekort på 100 $",
        acceptButton: "Accepter",
        usernameTitle: "Indtast venligst dit Roblox-brugernavn",
        usernamePlaceholder: "Brugernavn",
        usernameError: "Brugernavn skal være på mindst 3 tegn.",
        doneButton: "Færdig!",
        processingText: "Behandler dit gavekort...",
        verifyTitle: "Alt ser godt ud!",
        verifyMessage: "Gennemfør en hurtig verifikation for at bevise, at du er et menneske, og gavekortet vil blive sendt til din konto.",
        verifyButton: "Verificer nu",
        adblockMessage: "Hvis knappen ikke virker, skal du deaktivere din AdBlocker!",
        giftcardsLeft: "Gavekort tilbage:",
    },
    fi: { // Finnish
        selectLanguageTitle: "Valitse kielesi", // <-- NEW KEY
        pageTitle: "Olet saanut lahjakortin!",
        giftMessage: "Järjestelmänvalvoja on lahjoittanut sinulle 100 dollarin Roblox-lahjakortin",
        acceptButton: "Hyväksy",
        usernameTitle: "Anna Roblox-käyttäjänimesi",
        usernamePlaceholder: "Käyttäjänimi",
        usernameError: "Käyttäjänimen on oltava vähintään 3 merkkiä pitkä.",
        doneButton: "Valmis!",
        processingText: "Käsitellään lahjakorttiasi...",
        verifyTitle: "Kaikki näyttää hyvältä!",
        verifyMessage: "Suorita nopea varmennus todistaaksesi, että olet ihminen, ja lahjakortti lähetetään tilillesi.",
        verifyButton: "Vahvista nyt",
        adblockMessage: "Jos painike ei toimi, poista AdBlocker käytöstä!",
        giftcardsLeft: "Lahjakortteja jäljellä:",
    },
    no: { // Norwegian
        selectLanguageTitle: "Velg ditt språk", // <-- NEW KEY
        pageTitle: "Du har mottatt et gavekort!",
        giftMessage: "Admin har gitt deg et Roblox-gavekort på 100 dollar",
        acceptButton: "Godta",
        usernameTitle: "Vennligst skriv inn ditt Roblox-brukernavn",
        usernamePlaceholder: "Brukernavn",
        usernameError: "Brukernavnet må være minst 3 tegn langt.",
        doneButton: "Ferdig!",
        processingText: "Behandler gavekortet ditt...",
        verifyTitle: "Alt ser bra ut!",
        verifyMessage: "Fullfør en rask verifisering for å bevise at du er et menneske, og gavekortet vil bli sendt til kontoen din.",
        verifyButton: "Bekreft nå",
        adblockMessage: "Hvis knappen ikke virker, vennligst deaktiver din AdBlocker!",
        giftcardsLeft: "Gavekort igjen:",
    },
    he: { // Hebrew
        selectLanguageTitle: "בחר את השפה שלך", // <-- NEW KEY
        pageTitle: "קיבלת כרטיס מתנה!",
        giftMessage: "המנהל העניק לך כרטיס מתנה של Roblox בסך 100 דולר",
        acceptButton: "קבל",
        usernameTitle: "אנא הכנס את שם המשתמש שלך ב-Roblox",
        usernamePlaceholder: "שם משתמש",
        usernameError: "שם המשתמש חייב להיות באורך של 3 תווים לפחות.",
        doneButton: "סיום!",
        processingText: "מעבד את כרטיס המתנה שלך...",
        verifyTitle: "הכל נראה תקין!",
        verifyMessage: "השלם אימות מהיר כדי להוכיח שאתה אנושי וכרטיס המתנה יישלח לחשבונך.",
        verifyButton: "אמת עכשיו",
        adblockMessage: "אם הכפתור לא עובד, אנא השבת את ה-AdBlocker שלך!",
        giftcardsLeft: "כרטיסי מתנה שנותרו:",
    },
};

// --- AUTO-POPULATE THE REST OF THE LANGUAGES USING ENGLISH AS A TEMPLATE ---
const allLangs = [
    'af', 'am', 'sq', 'hy', 'az', 'eu', 'be', 'bs', 'bg', 'ca', 'ceb', 'hr',
    'cy', 'et', 'fa', 'ga', 'gl', 'ka', 'gu', 'ht', 'ha', 'ig', 'is', 'jv',
    'kn', 'kk', 'km', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg',
    'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'or', 'ps', 'si', 'sk', 'sl',
    'so', 'st', 'su', 'sw', 'tg', 'ta', 'tt', 'te', 'ug', 'ur', 'uz', 'xh',
    'yo', 'zu'
];

allLangs.forEach(lang => {
    if (!translations[lang]) {
        translations[lang] = translations.en; // Use English as a fallback/template
    }
});


// --- 3. COUNTRY TO LANGUAGE MAPPING (NO CHANGES NEEDED HERE) ---
const countryToLang = {
    // English-speaking countries
    US: 'en', GB: 'en', CA: 'en', AU: 'en', NZ: 'en', IE: 'en', JM: 'en', BS: 'en', BB: 'en', BZ: 'en', GY: 'en', TT: 'en', NG: 'en',
    
    // Spanish-speaking countries
    ES: 'es', MX: 'es', AR: 'es', CO: 'es', PE: 'es', VE: 'es', CL: 'es', EC: 'es', GT: 'es', CU: 'es', BO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es', PA: 'es', UY: 'es', DO: 'es',
    
    // French-speaking countries
    FR: 'fr', BE: 'fr', CH: 'fr', LU: 'fr', MC: 'fr', SN: 'fr', CI: 'fr', CM: 'fr', BJ: 'fr', BF: 'fr', CG: 'fr', GA: 'fr', GN: 'fr', ML: 'fr', NE: 'fr', TG: 'fr',
    
    // German-speaking countries
    DE: 'de', AT: 'de', LI: 'de',
    
    // Portuguese-speaking countries
    PT: 'pt', BR: 'pt', AO: 'pt', MZ: 'pt',
    
    // Italian-speaking countries
    IT: 'it', SM: 'it', VA: 'it',
    
    // Russian-speaking countries
    RU: 'ru', BY: 'be', KZ: 'kk', KG: 'ky',
    
    // Arabic-speaking countries
    SA: 'ar', EG: 'ar', AE: 'ar', DZ: 'ar', MA: 'ar', IQ: 'ar', SD: 'ar', SY: 'ar', TN: 'ar', YE: 'ar', JO: 'ar', LY: 'ar', LB: 'ar', OM: 'ar', KW: 'ar', QA: 'ar', BH: 'ar',
    
    // Chinese-speaking regions
    CN: 'zh', TW: 'zh', HK: 'zh', SG: 'zh', MO: 'zh',
    
    // Other major country-to-language mappings
    JP: 'ja',
    KR: 'ko', KP: 'ko',
    IN: 'hi',
    PK: 'ur',
    BD: 'bn',
    ID: 'id',
    VN: 'vi',
    TH: 'th',
    TR: 'tr',
    IR: 'fa',
    IL: 'he',
    PL: 'pl',
    NL: 'nl',
    GR: 'el',
    SE: 'sv',
    NO: 'no',
    DK: 'da',
    FI: 'fi',
    HU: 'hu',
    RO: 'ro',
    CZ: 'cs',
    UA: 'uk',
    PH: 'fil',
    MY: 'ms',
    ET: 'am',
    KE: 'sw',
    TZ: 'sw',
    ZA: 'af',
    AF: 'ps',
    AL: 'sq',
    AM: 'hy',
    AZ: 'az',
    BA: 'bs',
    BG: 'bg',
    HR: 'hr',
    EE: 'et',
    GE: 'ka',
    IS: 'is',
    LT: 'lt',
    LV: 'lv',
    MK: 'mk',
    MN: 'mn',
    RS: 'sr',
    SI: 'sl',
    SK: 'sk',
};