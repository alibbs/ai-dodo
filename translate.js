// القاموس الموحد لكل صفحات الموقع
const translations = {
    en: {
        // Nav & General
        home: "Home", game: "Game", bot: "Bot", overview: "Overview", profile: "Profile",
        balance: "Wallet Balance", kyc: "KYC Status", wallet: "My Wallet", 
        activity: "Activity", security: "Security Settings", language: "Language", 
        logout: "Logout", finance: "Finance", ai_support: "AI Support", 
        settings: "Settings", support_title: "Support",
        // Security Page
        sec_title: "Security Center", acc_info: "Account Information",
        update_sec: "Security Updates", current_pass: "Current Password",
        new_pass: "New Password", new_pin: "New 6-Digit PIN", save_btn: "Update Security"
    },
    ar: {
        home: "الرئيسية", game: "الألعاب", bot: "التداول الآلي", overview: "نظرة عامة", profile: "الحساب",
        balance: "رصيد المحفظة", kyc: "حالة التوثيق", wallet: "محفظتي", 
        activity: "النشاطات", security: "إعدادات الأمان", language: "اللغة", 
        logout: "تسجيل الخروج", finance: "المالية", ai_support: "الدعم الذكي", 
        settings: "الإعدادات", support_title: "الدعم الفني",
        sec_title: "مركز الأمان", acc_info: "معلومات الحساب",
        update_sec: "تحديثات الأمان", current_pass: "كلمة المرور الحالية",
        new_pass: "كلمة مرور جديدة", new_pin: "رمز PIN جديد (6 أرقام)", save_btn: "تحديث الأمان"
    },
    es: {
        home: "Inicio", game: "Juego", bot: "Robot", overview: "Resumen", profile: "Perfil",
        balance: "Saldo", kyc: "Estado KYC", wallet: "Mi Cartera", activity: "Actividad", 
        security: "Seguridad", language: "Idioma", logout: "Cerrar Sesión"
    },
    tr: {
        home: "Anasayfa", game: "Oyun", bot: "Bot", overview: "Genel Bakış", profile: "Profil",
        balance: "Bakiye", kyc: "KYC Durumu", wallet: "Cüzdanım", activity: "Etkinlik", 
        security: "Güvenlik Ayarları", language: "Dil", logout: "Çıkış Yap"
    }
};

// وظيفة تطبيق الترجمة
function applyLanguage() {
    const lang = localStorage.getItem('selectedLang') || 'en';
    const set = translations[lang];

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (set[key]) {
            // ترجمة النصوص العادية
            if (el.tagName !== 'INPUT') {
                el.textContent = set[key];
            } 
            // ترجمة الـ Placeholders في المدخلات
            else {
                el.placeholder = set[key];
            }
        }
    });

    // تغيير اتجاه الصفحة للعربية
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';
}

// تشغيل الترجمة تلقائياً عند تحميل أي صفحة
document.addEventListener('DOMContentLoaded', applyLanguage);

// وظيفة لتغيير اللغة من أي مكان (مثلاً عند الضغط على زر)
window.changeLanguage = (lang) => {
    localStorage.setItem('selectedLang', lang);
    applyLanguage();
    // إذا كنت في صفحة البروفايل وتريد تحديث شكل القائمة
    if(document.getElementById('currLang')) {
        document.getElementById('currLang').textContent = lang.toUpperCase();
    }
};
