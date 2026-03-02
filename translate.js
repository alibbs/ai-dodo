// القاموس الموحد لكل صفحات موقع AMANA ELITE
const translations = {
    en: {
        // Navigation
        home: "Home", game: "Game", bot: "Bot", overview: "Overview", profile: "Profile",

        // Home Page
        hero_badge: "Next-Gen Intelligence",
        elite: "ELITE",
        hero_desc: "Stop trading with luck. Start earning with AI-driven liquidity and provably fair systems.",
        volume: "Volume", active_bots: "Active Bots", uptime: "Uptime",
        edge_title: "The Elite Edge", edge_desc: "Why we outperform every other platform.",
        card1_title: "Neural Trade Engine",
        card1_desc: "Traditional bots use static logic. Amana Elite uses Neural Networks that learn from the market in real-time.",
        speed: "0.01s Execution Speed", anti_liq: "Anti-Liquidation Logic",
        card2_title: "Provably Fair Gaming",
        card2_desc: "Our games are Blockchain-Verified. Every crash and spin is hash-secured and 100% transparent.",
        hash_ver: "Real-time Hash Verification", rtp: "98% Player Return (RTP)",
        card3_title: "Institutional Security",
        card3_desc: "We use Multi-Sig Cold Storage for all assets, ensuring your funds are untouchable.",
        cta_btn: "START WINNING NOW", powered_by: "POWERED BY AMANA GLOBAL NETWORKS",

        // Profile & Settings
        balance: "Wallet Balance", kyc: "KYC Status", wallet: "My Wallet", 
        activity: "Activity", security: "Security Settings", language: "Language", 
        logout: "Logout", finance: "Finance", ai_support: "AI Support", 
        settings: "Settings", support_title: "Support", email_support: "Email Support",

        // Overview & Portfolio
        total_balance: "Total Portfolio", total_bal_short: "Total Balance",
        deposit: "Deposit", withdraw: "Withdraw", transfer: "Transfer", 
        swap: "Swap", history: "History", confirm: "Confirm",
        asset_overview: "Asset Overview", spot_wallet: "Spot Wallet", 
        bot_profit: "Bot Profit", game_win: "Game Win",

        // Bot Trade Page
        select_asset: "Select Asset Fund", daily_roi: "Daily ROI", 
        initialize_bot: "INITIALIZE AI CORE", op_summary: "Operational Summary",
        bot_desc: "The Amana Global AI Vault combines high-frequency trading with secure Investment Fund structure.",

        // Security Page
        sec_title: "Security Center", acc_info: "Account Information",
        update_sec: "Security Updates", current_pass: "Current Password",
        new_pass: "New Password", new_pin: "New 6-Digit PIN", save_btn: "Update Security"
    },
    ar: {
        // التنقل
        home: "الرئيسية", game: "الألعاب", bot: "بوت", overview: "نظرة عامة", profile: "حسابي",

        // صفحة الرئيسية
        hero_badge: "ذكاء الجيل القادم",
        elite: "إيليت",
        hero_desc: "توقف عن التداول بالحظ. ابدأ الربح مع سيولة مدعومة بالذكاء الاصطناعي وأنظمة عادلة تماماً.",
        volume: "حجم التداول", active_bots: "البوتات النشطة", uptime: "وقت التشغيل",
        edge_title: "ميزة إيليت", edge_desc: "لماذا نتفوق على جميع المنصات الأخرى.",
        card1_title: "محرك التداول العصبي",
        card1_desc: "تستخدم البوتات التقليدية منطقاً ثابتاً. بينما تستخدم أمانة إيليت شبكات عصبية تتعلم من السوق في الوقت الفعلي.",
        speed: "سرعة تنفيذ 0.01 ثانية", anti_liq: "منطق ضد التصفية",
        card2_title: "ألعاب عادلة وموثقة",
        card2_desc: "ألعابنا موثقة عبر البلوكشين. كل سحب ودورة مؤمنة بالتجزئة (Hash) وشفافة 100%.",
        hash_ver: "تحقق من الهاش فورياً", rtp: "عائد اللاعب 98%",
        card3_title: "أمان مؤسسي",
        card3_desc: "نستخدم التخزين البارد متعدد التوقيع لجميع الأصول، لضمان حماية أموالك بالكامل.",
        cta_btn: "ابدأ الربح الآن", powered_by: "بدعم من شبكات أمانة العالمية",

        // الملف الشخصي
        balance: "رصيد المحفظة", kyc: "حالة التوثيق", wallet: "محفظتي", 
        activity: "النشاطات", security: "إعدادات الأمان", language: "اللغة", 
        logout: "تسجيل الخروج", finance: "المالية", ai_support: "الدعم الذكي", 
        settings: "الإعدادات", support_title: "الدعم الفني", email_support: "الدعم عبر الإيميل",

        // المحفظة والنظرة العامة
        total_balance: "إجمالي المحفظة", total_bal_short: "إجمالي الرصيد",
        deposit: "إيداع", withdraw: "سحب", transfer: "تحويل", 
        swap: "تبديل", history: "السجل", confirm: "تأكيد",
        asset_overview: "نظرة على الأصول", spot_wallet: "المحفظة الفورية", 
        bot_profit: "أرباح البوت", game_win: "أرباح الألعاب",

        // صفحة البوت
        select_asset: "اختر صندوق الأصول", daily_roi: "العائد اليومي", 
        initialize_bot: "تفعيل قلب الذكاء الاصطناعي", op_summary: "ملخص العمليات",
        bot_desc: "يجمع صندوق AMANA AI بين بوتات التداول عالية التردد وهيكل استثمار آمن.",

        // الأمان
        sec_title: "مركز الأمان", acc_info: "معلومات الحساب",
        update_sec: "تحديثات الأمان", current_pass: "كلمة المرور الحالية",
        new_pass: "كلمة مرور جديدة", new_pin: "رمز PIN جديد (6 أرقام)", save_btn: "تحديث الأمان"
    }
};

// وظيفة تطبيق الترجمة
function applyLanguage() {
    const lang = localStorage.getItem('selectedLang') || 'en';
    const set = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (set[key]) {
            if (el.tagName !== 'INPUT') {
                el.textContent = set[key];
            } else {
                el.placeholder = set[key];
            }
        }
    });

    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    const currLangEl = document.getElementById('currLang');
    if(currLangEl) {
        currLangEl.textContent = lang.toUpperCase();
    }
}

document.addEventListener('DOMContentLoaded', applyLanguage);

window.changeLanguage = (lang) => {
    localStorage.setItem('selectedLang', lang);
    applyLanguage();
    if (typeof window.closeModals === 'function') {
        window.closeModals();
    }
};
