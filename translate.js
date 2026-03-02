// القاموس الموحد لكل صفحات الموقع AMANA ELITE
const translations = {
    en: {
        // Navigation
        home: "Home", game: "Game", bot: "Bot", overview: "Overview", profile: "Profile",
        
        // Profile Page
        balance: "Wallet Balance", kyc: "KYC Status", wallet: "My Wallet", 
        activity: "Activity", security: "Security Settings", language: "Language", 
        logout: "Logout", finance: "Finance", ai_support: "AI Support", 
        settings: "Settings", support_title: "Support", email_support: "Email Support",

        // Overview Page
        total_balance: "Total Balance", deposit: "Deposit", withdraw: "Withdraw", 
        transfer: "Transfer", asset_overview: "Asset Overview", spot_wallet: "Spot Wallet", 
        bot_profit: "Trading Profit",

        // Bot Trade Page
        select_asset: "Select Asset Fund", daily_roi: "Daily ROI", 
        initialize_bot: "INITIALIZE AI CORE", op_summary: "Operational Summary",
        bot_desc: "The Amana Global AI Vault combines high-frequency trading bots with a secure Investment Fund structure.",
        
        // Security Page
        sec_title: "Security Center", acc_info: "Account Information",
        update_sec: "Security Updates", current_pass: "Current Password",
        new_pass: "New Password", new_pin: "New 6-Digit PIN", save_btn: "Update Security"
    },
    ar: {
        // التنقل
        home: "الرئيسية", game: "الألعاب", bot: "التداول الآلي", overview: "نظرة عامة", profile: "الحساب",
        
        // صفحة الحساب
        balance: "رصيد المحفظة", kyc: "حالة التوثيق", wallet: "محفظتي", 
        activity: "النشاطات", security: "إعدادات الأمان", language: "اللغة", 
        logout: "تسجيل الخروج", finance: "المالية", ai_support: "الدعم الذكي", 
        settings: "الإعدادات", support_title: "الدعم الفني", email_support: "الدعم عبر الإيميل",

        // صفحة نظرة عامة
        total_balance: "إجمالي الرصيد", deposit: "إيداع", withdraw: "سحب", 
        transfer: "تحويل", asset_overview: "نظرة على الأصول", spot_wallet: "المحفظة الفورية", 
        bot_profit: "أرباح التداول",

        // صفحة البوت
        select_asset: "اختر صندوق الأصول", daily_roi: "العائد اليومي", 
        initialize_bot: "تفعيل قلب الذكاء الاصطناعي", op_summary: "ملخص العمليات",
        bot_desc: "يجمع صندوق AMANA AI بين بوتات التداول عالية التردد وهيكل استثماري آمن.",

        // صفحة الأمان
        sec_title: "مركز الأمان", acc_info: "معلومات الحساب",
        update_sec: "تحديثات الأمان", current_pass: "كلمة المرور الحالية",
        new_pass: "كلمة مرور جديدة", new_pin: "رمز PIN جديد (6 أرقام)", save_btn: "تحديث الأمان"
    },
    es: {
        home: "Inicio", game: "Juego", bot: "Robot", overview: "Resumen", profile: "Perfil",
        balance: "Saldo de Cartera", kyc: "Estado KYC", wallet: "Mi Cartera", activity: "Actividad", 
        security: "Seguridad", language: "Idioma", logout: "Cerrar Sesión",
        total_balance: "Saldo Total", deposit: "Depósito", withdraw: "Retirar",
        select_asset: "Seleccionar Activo", daily_roi: "ROI Diario", initialize_bot: "INICIALIZAR IA"
    },
    tr: {
        home: "Anasayfa", game: "Oyun", bot: "Bot", overview: "Genel Bakış", profile: "Profil",
        balance: "Cüzdan Bakiyesi", kyc: "KYC Durumu", wallet: "Cüzdanım", activity: "Etkinlik", 
        security: "Güvenlik Ayarları", language: "Dil", logout: "Çıkış Yap",
        total_balance: "Toplam Bakiye", deposit: "Yatır", withdraw: "Para Çek",
        select_asset: "Varlık Seçin", daily_roi: "Günlük ROI", initialize_bot: "AI'YI BAŞLAT"
    }
};

// وظيفة تطبيق الترجمة
function applyLanguage() {
    const lang = localStorage.getItem('selectedLang') || 'en';
    const set = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (set[key]) {
            // ترجمة النصوص داخل العناصر
            if (el.tagName !== 'INPUT') {
                el.textContent = set[key];
            } 
            // ترجمة الـ Placeholders في المدخلات (مثل حقول كلمة المرور)
            else {
                el.placeholder = set[key];
            }
        }
    });

    // تغيير اتجاه الصفحة للعربية فقط
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // تحديث نص اللغة الحالية في صفحة البروفايل إذا وجد
    const currLangEl = document.getElementById('currLang');
    if(currLangEl) {
        currLangEl.textContent = lang.toUpperCase();
    }
}

// تشغيل الترجمة عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', applyLanguage);

// وظيفة تغيير اللغة
window.changeLanguage = (lang) => {
    localStorage.setItem('selectedLang', lang);
    applyLanguage();
    
    // إغلاق المودال تلقائياً إذا كانت الوظيفة موجودة (لصفحة البروفايل)
    if (typeof window.closeModals === 'function') {
        window.closeModals();
    }
};
