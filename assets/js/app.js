/**
 * EBN ELWAZEER RESTAURANTS - مطاعم ابن الوزير
 * Digital Menu & Ordering System
 * Designed & Developed by Mohamed Emad (+201020766525)
 */

// GitHub Pages Target URL for QR Code
const GITHUB_PAGES_URL = "https://mohamedemad7299.github.io/ebn-elwazeer-menu/";

// Primary Hotlines & WhatsApp numbers
const RESTAURANT_HOTLINES = ["01010707662", "01200609038", "01064720045"];
const WHATSAPP_ORDER_NUMBER = "01010707662";

const DEVELOPER_INFO = {
  name: "Mohamed Emad",
  nameAr: "Mohamed Emad",
  phone: "+201020766525",
  whatsapp: "201020766525",
  facebook: "https://www.facebook.com/mohamedemad199912",
  instagram: "https://www.instagram.com/ma7amed_3emad/",
  linkedin: "https://www.linkedin.com/feed/foryou/",
  github: "https://github.com/MohamedEmad7299"
};

// Bilingual Translations Dictionary
const I18N = {
  ar: {
    brandName: "مطاعم ابن الوزير",
    brandSubtitle: "أشهى المشويات، البروست، البيتزا والحلويات",
    navMenu: "المنيو",
    navBranches: "فروعنا",
    navQR: "رمز QR",
    navCall: "اتصل بنا",
    navCart: "طلبك",
    heroBadge: "أشهى المأكولات والمشويات والبروست والحلويات ⭐",
    heroTitle: "مطاعم ابن الوزير",
    heroSubtitle: "قائمة طعام فاخرة تجمع بين مشويات الفحم الشهية، البروست المقرمش، البيتزا الإيطالية، الكريبات، وحلويات ابن الوزير المميزة في البلينا",
    hotlineLabel: "الخط الساخن وخدمة التوصيل:",
    ctaMenu: "تصفح المنيو",
    ctaBranches: "العنوان والخرائط",
    ctaFlyer: "عرض المنيو الأصلي",
    branchAlertTitle: "فرع البلينا الرئيسي - مفتوح يومياً لخدمتكم!",
    branchAlertDesc: "البلينا - شارع مجلس المدينة - بجوار بنك مصر القديم",
    btnOpenMap: "عرض على الخريطة",
    btnCallBranch: "اتصال بالمطعم",
    searchPlaceholder: "ابحث عن أي وجبة، بيتزا، بروست، أو حِلو...",
    tabAll: "الكل",
    tabBroast: "بروست واستربس",
    tabPizza: "بيتزا إيطالي",
    tabCrepes: "كريبات",
    tabShawarma: "شاورما وفتة",
    tabGrills: "مشويات وكومبو",
    tabMeals: "وجبات ومكس",
    tabSandwiches: "سندوتشات وبيرجر",
    tabPasta: "باستا وأرز",
    tabDesserts: "حلو ابن الوزير",
    tabSides: "مقبلات ومشروبات",
    egp: "ج.م",
    addToOrder: "أضف للطلب",
    tagSpicy: "سبايسي 🌶️",
    tagPopular: "الأكثر طلباً ⭐",
    tagSpecial: "مميز 👑",
    tagGrilled: "مشوي 🔥",
    tagCrispy: "مقرمش 🍗",
    branchesSectionTitle: "موقعنا وخدمة التوصيل - مطاعم ابن الوزير",
    branchesSectionSubtitle: "تفضل بزيارتنا في فرعنا بالبلينا أو اطلب خدمة التوصيل السريع حتى باب بيتك",
    orderModalTitle: "سلة الطلب السريع عبر واتساب",
    emptyCartMsg: "سلة طلبك فارغة حالياً. اختر وجبتك المفضلة من المنيو!",
    customerName: "الاسم الكريم:",
    customerPhone: "رقم الموبايل للتواصل:",
    customerBranch: "خط الطلب والتوصيل:",
    customerNotes: "ملاحظات إضافية (بدون شطة / صوص إضافي...):",
    placeholderName: "مثال: أحمد محمد",
    placeholderPhone: "مثال: 01012345678",
    placeholderNotes: "مثال: بدون شطة / إضافة كاتشب ومايونيز / تسوية زيادة",
    totalPrice: "الإجمالي:",
    sendWhatsAppBtn: "إرسال الطلب عبر واتساب 💬",
    floatOrderCta: "عرض الطلب وإتمام الشراء 💬",
    qrModalTitle: "امسح رمز QR لفتح المنيو",
    qrModalDesc: "وجّه كاميرا هاتفك المحمول إلى الرمز لفتح المنيو الإلكتروني وتصفح أحدث الأسعار في أي وقت!",
    downloadQR: "تحميل صورة QR",
    copyLink: "نسخ رابط المنيو",
    copiedAlert: "تم نسخ رابط المنيو بنجاح!",
    flyerModalTitle: "المنيو والبروشور الأصلي المطبوع",
    flyerCoverTab: "غلاف المنيو والعنوان",
    flyerMenuTab: "قائمة الأصناف والأسعار",
    footerAbout: "مطاعم ابن الوزير - الوجهة الأولى لعشاق المشويات على الفحم، الدجاج البروست المقرمش، البيتزا الغنية، والكريبات في البلينا، بأعلى معايير النظافة والجودة.",
    footerBrandTitle: "مطاعم <span>ابن الوزير</span> 👑",
    footerCopyright: "&copy; 2026 مطاعم ابن الوزير - جميع الحقوق محفوظة",
    devCreditBy: "تصميم وتطوير:",
    flyerBannerDesc: "يمكنك تصفح النسخة الورقية المطبوعة بجميع الأقسام والأسعار بدقة فائقة",
    selectBranchTitle: "اختر خط الطلب والتوصيل",
    searchBranchPlaceholder: "ابحث في خطوط الطلب...",
    featuredBranchBadge: "الفرع الرئيسي ⭐",
    addressLabel: "العنوان:",
    phonesLabel: "أرقام التليفون:"
  },
  en: {
    brandName: "Ebn Elwazeer Restaurants",
    brandSubtitle: "Finest Grills, Crispy Broast, Pizza & Desserts",
    navMenu: "Menu",
    navBranches: "Location",
    navQR: "QR Code",
    navCall: "Call Us",
    navCart: "Order",
    heroBadge: "Finest Grills, Crispy Broast, Pizza & Desserts ⭐",
    heroTitle: "Ebn Elwazeer Restaurants",
    heroSubtitle: "A premium dining menu featuring charcoal grills, golden crispy broast chicken, authentic pizza, crepes, and signature desserts in El Balyana",
    hotlineLabel: "Hotlines & Fast Delivery:",
    ctaMenu: "Explore Menu",
    ctaBranches: "Location & Maps",
    ctaFlyer: "View Original Flyer",
    branchAlertTitle: "El Balyana Main Branch - Open Daily for You!",
    branchAlertDesc: "El Balyana - City Council St., Next to Old Banque Misr",
    btnOpenMap: "Open in Maps",
    btnCallBranch: "Call Restaurant",
    searchPlaceholder: "Search meals, pizza, broast, or dessert...",
    tabAll: "All",
    tabBroast: "Broast & Crispy",
    tabPizza: "Italian Pizza",
    tabCrepes: "Crepes",
    tabShawarma: "Shawarma & Fatta",
    tabGrills: "Grills & Combos",
    tabMeals: "Meals & Mix",
    tabSandwiches: "Sandwiches & Burgers",
    tabPasta: "Pasta & Rice",
    tabDesserts: "Desserts",
    tabSides: "Sides & Drinks",
    egp: "EGP",
    addToOrder: "Add to Order",
    tagSpicy: "Spicy 🌶️",
    tagPopular: "Best Seller ⭐",
    tagSpecial: "Special 👑",
    tagGrilled: "Grilled 🔥",
    tagCrispy: "Crispy 🍗",
    branchesSectionTitle: "Our Location & Delivery - Ebn Elwazeer",
    branchesSectionSubtitle: "Visit our welcoming restaurant in El Balyana or order rapid doorstep delivery",
    orderModalTitle: "Quick WhatsApp Order",
    emptyCartMsg: "Your tray is currently empty. Choose your favorite meal from the menu!",
    customerName: "Your Full Name:",
    customerPhone: "Your Mobile Number:",
    customerBranch: "Order & Dispatch Line:",
    customerNotes: "Special instructions (No spicy / Extra sauce...):",
    placeholderName: "e.g. Ahmed Mohamed",
    placeholderPhone: "e.g. 01012345678",
    placeholderNotes: "e.g. Extra ketchup and mayo / Well-done / Mild spicy",
    totalPrice: "Total Amount:",
    sendWhatsAppBtn: "Send Order on WhatsApp 💬",
    floatOrderCta: "View Order & Checkout 💬",
    qrModalTitle: "Scan QR Code for Digital Menu",
    qrModalDesc: "Point your smartphone camera at this QR code to access our digital menu instantly anytime!",
    downloadQR: "Download QR Image",
    copyLink: "Copy Menu Link",
    copiedAlert: "Menu link copied to clipboard!",
    flyerModalTitle: "Original Printed Menu Flyer",
    flyerCoverTab: "Cover & Contacts",
    flyerMenuTab: "Items & Price List",
    footerAbout: "Ebn Elwazeer Restaurants - El Balyana's premier dining destination for charcoal grilled feasts, crispy fried broast chicken, artisanal pizza, and delicious desserts.",
    footerBrandTitle: "Ebn <span>Elwazeer</span> Restaurants 👑",
    footerCopyright: "&copy; 2026 Ebn Elwazeer Restaurants - All Rights Reserved",
    devCreditBy: "Designed & Developed by:",
    flyerBannerDesc: "Browse high-resolution scans of the official printed brochure with all items and prices",
    selectBranchTitle: "Select Order Dispatch Line",
    searchBranchPlaceholder: "Search lines...",
    featuredBranchBadge: "Main Branch ⭐",
    addressLabel: "Address:",
    phonesLabel: "Phone Lines:"
  }
};

// Full Menu Items Dataset (Extracted from Ebn Elwazeer Printed Flyers)
const MENU_DATA = [
  // ==========================================
  // 🍗 1. بروست واستربس (Crispy Broast & Strips)
  // ==========================================
  {
    id: "broast-2pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 2 قطعة",
    nameEn: "Broast Meal 2 Pcs",
    descAr: "2 قطعة بروست ذهبي مقرمش + بطاطس + كول سلو + عيش",
    descEn: "2 pieces golden crispy broast fried chicken + fries + coleslaw + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: ["crispy", "popular"]
  },
  {
    id: "broast-3pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 3 قطعة",
    nameEn: "Broast Meal 3 Pcs",
    descAr: "3 قطع بروست مقرمش + بطاطس + كول سلو + عيش",
    descEn: "3 pieces golden crispy fried chicken + fries + coleslaw + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 180 }],
    tags: ["crispy", "popular"]
  },
  {
    id: "broast-4pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 4 قطعة",
    nameEn: "Broast Meal 4 Pcs",
    descAr: "4 قطع بروست مقرمش + بطاطس + كول سلو + عيش",
    descEn: "4 pieces golden crispy fried chicken + fries + coleslaw + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 230 }],
    tags: ["crispy"]
  },
  {
    id: "broast-5pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 5 قطعة",
    nameEn: "Broast Meal 5 Pcs",
    descAr: "5 قطع بروست مقرمش + بطاطس + كول سلو + عيش + ثومية",
    descEn: "5 pieces crispy fried chicken + fries + coleslaw + bread + garlic sauce",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 295 }],
    tags: ["crispy", "special"]
  },
  {
    id: "broast-6pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 6 قطعة",
    nameEn: "Broast Meal 6 Pcs",
    descAr: "6 قطع بروست مقرمش + بطاطس + كول سلو + عيش + ثومية",
    descEn: "6 pieces crispy fried chicken + fries + coleslaw + bread + garlic sauce",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 350 }],
    tags: ["crispy"]
  },
  {
    id: "broast-9pcs",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بروست 9 قطعة (سوبر فاميلي)",
    nameEn: "Broast Meal 9 Pcs (Super Family)",
    descAr: "9 قطع بروست عائلي مقرمش + بطاطس حجم كبير + كول سلو + عيش + ثومية",
    descEn: "9 pieces family feast crispy fried chicken + large fries + coleslaw + bread + garlic sauce",
    options: [{ key: "meal", labelAr: "وجبة عائلية", labelEn: "Family Feast", price: 510 }],
    tags: ["special", "popular"]
  },
  {
    id: "strips-3pcs",
    category: "broast",
    icon: "🥓",
    nameAr: "وجبة استربس كرسبي 3 قطع",
    nameEn: "Crispy Chicken Strips 3 Pcs",
    descAr: "3 قطع صدور استربس مقرمشة + بطاطس + كول سلو + عيش",
    descEn: "3 tender crispy chicken breast strips + fries + coleslaw + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: ["crispy"]
  },
  {
    id: "strips-4pcs",
    category: "broast",
    icon: "🥓",
    nameAr: "وجبة استربس كرسبي 4 قطع",
    nameEn: "Crispy Chicken Strips 4 Pcs",
    descAr: "4 قطع صدور استربس ذهبية مقرمشة + بطاطس + كول سلو + عيش",
    descEn: "4 pieces crispy tender chicken strips + fries + coleslaw + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 170 }],
    tags: ["crispy", "popular"]
  },
  {
    id: "broast-mix-meal",
    category: "broast",
    icon: "✨",
    nameAr: "وجبة ميكس بروست واستربس",
    nameEn: "Broast & Strips Mix Meal",
    descAr: "2 قطعة بروست + 2 قطعة إستربس كرسبي + كول سلو + عيش + بطاطس",
    descEn: "2 pieces broast chicken + 2 crispy strips + coleslaw + bread + fries",
    options: [{ key: "meal", labelAr: "وجبة ميكس", labelEn: "Mix Meal", price: 210 }],
    tags: ["special", "popular"]
  },
  {
    id: "pane-meal-crispy",
    category: "broast",
    icon: "🍗",
    nameAr: "وجبة بانيه كرسبي",
    nameEn: "Crispy Chicken Pane Meal",
    descAr: "2 قطعة بانيه متبل مقرمش + بطاطس + ثومية + عيش",
    descEn: "2 pieces marinated crispy pane chicken + fries + garlic dip + bread",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: []
  },

  // ==========================================
  // 🍕 2. بيتزا إيطالي (Italian Pizza - S / M / L)
  // ==========================================
  {
    id: "pizza-super-supreme",
    category: "pizza",
    icon: "🍕",
    nameAr: "بيتزا سوبر سوبريم",
    nameEn: "Super Supreme Pizza",
    descAr: "مزيج اللحوم الفاخرة مع المشروم والزيتون والفلفل والجبنة الموتزاريلا الغنية",
    descEn: "Premium mix of meats, mushrooms, olives, bell peppers and melted mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: ["popular"]
  },
  {
    id: "pizza-ebn-elwazeer-spicy",
    category: "pizza",
    icon: "🔥",
    nameAr: "بيتزا ابن الوزير لحوم حارة",
    nameEn: "Ebn Elwazeer Spicy Meats Pizza",
    descAr: "خلطة لحوم ابن الوزير الخاصة المتبلة مع الفلفل الحار والصلصة الإيطالية والموتزاريلا",
    descEn: "Signature seasoned minced meats, hot chili peppers, zesty tomato sauce and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 100 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 130 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 180 }
    ],
    tags: ["special", "spicy"]
  },
  {
    id: "pizza-chicken-mix",
    category: "pizza",
    icon: "🍕",
    nameAr: "بيتزا ميكس فراخ",
    nameEn: "Chicken Mix Pizza",
    descAr: "تشكيلة من قطع الفراخ المشوية والمقرمشة والشاورما مع الموتزاريلا والخضار",
    descEn: "Loaded mix of grilled chicken, crispy chicken bites, and shawarma with mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 100 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 140 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 180 }
    ],
    tags: ["popular", "special"]
  },
  {
    id: "pizza-tuna",
    category: "pizza",
    icon: "🐟",
    nameAr: "بيتزا تونة فاخرة",
    nameEn: "Premium Tuna Pizza",
    descAr: "قطع تونة قطع خفيفة مع الزيتون والفلفل والبصل والجبن الموتزاريلا السايحة",
    descEn: "Flaked tuna with olives, bell peppers, onions, herbs and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 100 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 140 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 180 }
    ],
    tags: []
  },
  {
    id: "pizza-cheese-lover",
    category: "pizza",
    icon: "🧀",
    nameAr: "بيتزا تشيز لافر (عشاق الجبنة)",
    nameEn: "Cheese Lover Pizza",
    descAr: "طبقات غنية من الموتزاريلا والشيدر والرومي والجبن الكريمي الفاخر",
    descEn: "Four delicious cheeses: mozzarella, cheddar, rumi and rich cream cheese",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 100 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: ["popular"]
  },
  {
    id: "pizza-chicken-ranch",
    category: "pizza",
    icon: "🍕",
    nameAr: "بيتزا تشكن رانش",
    nameEn: "Chicken Ranch Pizza",
    descAr: "قطع دجاج متبلة مع صوص الرانش الغني، فلفل ألوان وموتزاريلا",
    descEn: "Tender chicken pieces drizzled with rich creamy ranch sauce and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 95 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: ["popular"]
  },
  {
    id: "pizza-hotdog",
    category: "pizza",
    icon: "🌭",
    nameAr: "بيتزا هوت دوج",
    nameEn: "Hot Dog Pizza",
    descAr: "شرائح هوت دوج مشوية مع الزيتون والفلفل وصلصة الطماطم والموتزاريلا",
    descEn: "Sliced hot dog sausages with olives, bell peppers, tomato sauce and cheese",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 95 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: []
  },
  {
    id: "pizza-sojouk",
    category: "pizza",
    icon: "🍕",
    nameAr: "بيتزا سجق بلدي",
    nameEn: "Egyptian Sausage Pizza",
    descAr: "سجق بلدي متبل على الطريقة الشرقية مع فلفل وزيتون وموتزاريلا",
    descEn: "Savory oriental sausage seasoned to perfection with vegetables and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 95 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: ["popular"]
  },
  {
    id: "pizza-minced-meat",
    category: "pizza",
    icon: "🥩",
    nameAr: "بيتزا لحم مفروم",
    nameEn: "Minced Beef Pizza",
    descAr: "لحم مفروم طازج مع بهارات البيتزا الخاصة، فلفل، زيتون وجبنة سايحة",
    descEn: "Minced beef seasoned with aromatic herbs, olives, peppers and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 95 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: []
  },
  {
    id: "pizza-bbq-chicken",
    category: "pizza",
    icon: "🍗",
    nameAr: "بيتزا باربكيو تشيكن",
    nameEn: "BBQ Chicken Pizza",
    descAr: "قطع دجاج مشوية مع صوص الباربكيو المدخن والموتزاريلا",
    descEn: "Grilled chicken coated in smoky BBQ sauce topped with melty cheese",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: []
  },
  {
    id: "pizza-shawarma-chicken",
    category: "pizza",
    icon: "🥙",
    nameAr: "بيتزا شاورما فراخ",
    nameEn: "Chicken Shawarma Pizza",
    descAr: "شاورما فراخ متبلة على السيخ مع صوص الطماطم والموتزاريلا",
    descEn: "Authentic chicken shawarma meat over pizza crust with sauce and cheese",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: []
  },
  {
    id: "pizza-chicken-strips",
    category: "pizza",
    icon: "🍕",
    nameAr: "بيتزا استربس تشيكن",
    nameEn: "Crispy Strips Pizza",
    descAr: "قطع تشيكن استربس مقرمشة مع الخضار الطازج وجبنة الموتزاريلا",
    descEn: "Crispy chicken tenders sliced over cheesy mozzarella pizza",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 170 }
    ],
    tags: []
  },
  {
    id: "pizza-vegetables",
    category: "pizza",
    icon: "🥦",
    nameAr: "بيتزا خضراوات",
    nameEn: "Vegetarian Garden Pizza",
    descAr: "مشروم، فلفل ألوان، طماطم، زيتون أسود وموتزاريلا خفيفة ولذيذة",
    descEn: "Mushrooms, colorful peppers, tomatoes, black olives and mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 160 }
    ],
    tags: []
  },
  {
    id: "pizza-margherita",
    category: "pizza",
    icon: "🧀",
    nameAr: "بيتزا مارجريتا كلاسيك",
    nameEn: "Classic Margherita Pizza",
    descAr: "صلصة الطماطم الإيطالية مع الريحان والجبنة الموتزاريلا الطبيعية",
    descEn: "Classic tomato sauce, fresh herbs and melted rich mozzarella",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 80 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 100 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: []
  },
  {
    id: "pizza-stuffed-crust",
    category: "pizza",
    icon: "✨",
    nameAr: "إضافة حشو أطراف للبيتزا الوسط (سجق أو هوت دوج)",
    nameEn: "Stuffed Crust Add-on (Medium Pizza)",
    descAr: "حشو أطراف العجينة بالسجق البلدي أو الهوت دوج والجبنة حسب رغبتك",
    descEn: "Stuffed crust with oriental sausage or hot dog & cheese for Medium pizza",
    options: [{ key: "addon", labelAr: "إضافة للأطراف", labelEn: "Crust Add-on", price: 50 }],
    tags: ["special"]
  },

  // ==========================================
  // 🌯 3. كريبات (Crepes)
  // ==========================================
  {
    id: "crepe-ebn-elwazeer",
    category: "crepes",
    icon: "👑",
    nameAr: "كريب ابن الوزير المميز",
    nameEn: "Ebn Elwazeer Signature Crepe",
    descAr: "كريب سوبر محشو بمكس فاخر من اللحوم والدجاج والجبنة الموتزاريلا وصوصات ابن الوزير",
    descEn: "Loaded crepe with signature meats, crispy chicken, mozzarella and house sauces",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 110 }],
    tags: ["special", "popular"]
  },
  {
    id: "crepe-shish-tawook",
    category: "crepes",
    icon: "🍢",
    nameAr: "كريب شيش طاووق",
    nameEn: "Shish Tawook Crepe",
    descAr: "قطع شيش طاووق مشوية متبلة مع الجبن الموتزاريلا والفلفل والزيتون",
    descEn: "Tender grilled shish tawook chicken cubes with melted cheese and peppers",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 95 }],
    tags: ["popular", "grilled"]
  },
  {
    id: "crepe-kofta-charcoal",
    category: "crepes",
    icon: "🥩",
    nameAr: "كريب كفتة على الفحم",
    nameEn: "Charcoal Grilled Kofta Crepe",
    descAr: "كفتة بلدي مشوية على الفحم برائحة الشواء مع الجبنة والخضار",
    descEn: "Chargrilled minced beef kofta with mozzarella and fresh condiments",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 95 }],
    tags: ["grilled"]
  },
  {
    id: "crepe-chicken-mix",
    category: "crepes",
    icon: "🌯",
    nameAr: "كريب مكس فراخ",
    nameEn: "Mix Chicken Crepe",
    descAr: "مزيج من البانيه والشاورما والاستربس المقرمش مع الموتزاريلا",
    descEn: "Trio chicken mix: crispy strips, pane and shawarma with melted cheese",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 95 }],
    tags: ["popular"]
  },
  {
    id: "crepe-pane",
    category: "crepes",
    icon: "🌯",
    nameAr: "كريب بانيه",
    nameEn: "Chicken Pane Crepe",
    descAr: "قطع فراخ بانيه مقرمشة ومتبلة مع الجبنة السايحة والصوصات",
    descEn: "Crispy chicken pane cutlets with mozzarella, ketchup and mayonnaise",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 95 }],
    tags: []
  },
  {
    id: "crepe-minced-meat",
    category: "crepes",
    icon: "🌯",
    nameAr: "كريب لحمة مفرومة",
    nameEn: "Minced Beef Crepe",
    descAr: "لحم مفروم بلدي مع بهارات ابن الوزير الخاصة والجبنة الموتزاريلا",
    descEn: "Spiced minced beef wrapped in warm golden crepe with melted cheese",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 90 }],
    tags: []
  },
  {
    id: "crepe-crispy",
    category: "crepes",
    icon: "🍗",
    nameAr: "كريب كرسبي",
    nameEn: "Crispy Chicken Crepe",
    descAr: "قطع دجاج كرسبي مقرمشة مع الخس والموتزاريلا والمايونيز والكاتشب",
    descEn: "Crispy crunchy chicken pieces with mozzarella and dressing",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 85 }],
    tags: ["popular"]
  },
  {
    id: "crepe-chicken-shawarma",
    category: "crepes",
    icon: "🥙",
    nameAr: "كريب شاورما فراخ",
    nameEn: "Chicken Shawarma Crepe",
    descAr: "شاورما دجاج متبلة على الجريل مع الموتزاريلا والثومية والزيتون",
    descEn: "Savory chicken shawarma with garlic dip and melted mozzarella",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 80 }],
    tags: []
  },
  {
    id: "crepe-burger",
    category: "crepes",
    icon: "🍔",
    nameAr: "كريب برجر",
    nameEn: "Burger Crepe",
    descAr: "قطع برجر لحم مشوي مع الموتزاريلا والفلفل والصوص",
    descEn: "Grilled burger patties sliced with cheese and sauce in golden crepe",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 80 }],
    tags: []
  },
  {
    id: "crepe-sojouk",
    category: "crepes",
    icon: "🌭",
    nameAr: "كريب سجق بلدي",
    nameEn: "Oriental Sausage Crepe",
    descAr: "سجق بلدي شرقي متبل مع الجبنة الموتزاريلا والفلفل الألوان",
    descEn: "Savory oriental sausage wrapped with cheese and peppers",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 80 }],
    tags: []
  },
  {
    id: "crepe-hotdog",
    category: "crepes",
    icon: "🌭",
    nameAr: "كريب هوت دوج",
    nameEn: "Hot Dog Crepe",
    descAr: "هوت دوج متبل ومقلي مع الجبنة الموتزاريلا والزيتون والصلصة",
    descEn: "Tender hot dog slices with melted mozzarella in a fresh crepe",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 80 }],
    tags: []
  },
  {
    id: "crepe-mix-cheese",
    category: "crepes",
    icon: "🧀",
    nameAr: "كريب مكس جبن",
    nameEn: "Mix Cheese Crepe",
    descAr: "موتزاريلا + رومي + شيدر سايحة في خبز الكريب المقرمش",
    descEn: "Melted trio of mozzarella, rumi and cheddar cheese",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 70 }],
    tags: []
  },
  {
    id: "crepe-fries",
    category: "crepes",
    icon: "🍟",
    nameAr: "كريب بطاطس بوم فريت",
    nameEn: "French Fries Crepe",
    descAr: "أصابع بطاطس مقرمشة مع الجبنة الموتزاريلا والكاتشب والمايونيز",
    descEn: "Golden french fries with mozzarella, ketchup and mayo in warm crepe",
    options: [{ key: "crepe", labelAr: "كريب", labelEn: "Crepe", price: 60 }],
    tags: []
  },

  // ==========================================
  // 🥙 4. شاورما وفتة (Shawarma & Fatta)
  // ==========================================
  {
    id: "fatta-ebn-elwazeer",
    category: "shawarma",
    icon: "👑",
    nameAr: "فتة ابن الوزير المميزة",
    nameEn: "Ebn Elwazeer Royal Fatta",
    descAr: "شاورما فراخ + قطع كرسبي مقرمشة + أرز بسمتي + عيش محمص + تومية + مخلل",
    descEn: "Chicken shawarma + crispy tenders + basmati rice + toasted pita + garlic dip + pickles",
    options: [{ key: "dish", labelAr: "طبق فتة", labelEn: "Fatta Dish", price: 120 }],
    tags: ["special", "popular"]
  },
  {
    id: "fatta-shawarma-chicken",
    category: "shawarma",
    icon: "🍲",
    nameAr: "فتة شاورما فراخ",
    nameEn: "Chicken Shawarma Fatta",
    descAr: "شاورما دجاج متبلة على الأرز البسمتي مع العيش المحمص + تومية + مخلل",
    descEn: "Aromatic basmati rice topped with tender chicken shawarma, crispy pita & garlic sauce",
    options: [{ key: "dish", labelAr: "طبق فتة", labelEn: "Fatta Dish", price: 100 }],
    tags: ["popular"]
  },
  {
    id: "shawarma-arabi-double",
    category: "shawarma",
    icon: "🌯",
    nameAr: "وجبة عربي شاورما دبل",
    nameEn: "Double Arabi Shawarma Meal",
    descAr: "2 ساندوتش شاورما فراخ مقطع + بطاطس حجم كبير + تومية + مخلل",
    descEn: "Double sliced chicken shawarma saj + large fries + garlic dip + pickles",
    options: [{ key: "meal", labelAr: "وجبة دبل", labelEn: "Double Meal", price: 170 }],
    tags: ["popular", "special"]
  },
  {
    id: "shawarma-arabi-regular",
    category: "shawarma",
    icon: "🌯",
    nameAr: "وجبة عربي شاورما",
    nameEn: "Arabi Shawarma Meal",
    descAr: "ساندوتش شاورما فراخ مقطع شرائح + بطاطس + تومية + مخلل",
    descEn: "Sliced chicken shawarma roll served with french fries, garlic dip & pickles",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 90 }],
    tags: ["popular"]
  },
  {
    id: "shawarma-sandwich-plain",
    category: "shawarma",
    icon: "🥪",
    nameAr: "ساندوتش شاورما فراخ",
    nameEn: "Chicken Shawarma Sandwich",
    descAr: "شاورما فراخ متبلة مع صوص الثومية والمخلل (خبز صاج أو فرنسي)",
    descEn: "Seasoned chicken shawarma in freshly baked saj wrap or french baguette",
    options: [
      { key: "french", labelAr: "فرنسي", labelEn: "French Bread", price: 55 },
      { key: "saj", labelAr: "صاج سوري", labelEn: "Saj Wrap", price: 70 }
    ],
    tags: ["popular"]
  },
  {
    id: "shawarma-sandwich-cheese",
    category: "shawarma",
    icon: "🧀",
    nameAr: "ساندوتش شاورما فراخ بالجبنة",
    nameEn: "Chicken Shawarma with Cheese",
    descAr: "شاورما فراخ مع طبقة جبنة موتزاريلا سايحة وغنية (خبز صاج أو فرنسي)",
    descEn: "Tender chicken shawarma smothered in melted mozzarella cheese",
    options: [
      { key: "french", labelAr: "فرنسي", labelEn: "French Bread", price: 65 },
      { key: "saj", labelAr: "صاج سوري", labelEn: "Saj Wrap", price: 80 }
    ],
    tags: ["special"]
  },
  {
    id: "shawarma-sandwich-fries",
    category: "shawarma",
    icon: "🍟",
    nameAr: "ساندوتش شاورما فراخ بالبطاطس",
    nameEn: "Chicken Shawarma with Fries",
    descAr: "شاورما دجاج شهية مع أصابع البطاطس المقرمشة والثومية (صاج أو فرنسي)",
    descEn: "Chicken shawarma combined with golden fries and garlic sauce",
    options: [
      { key: "french", labelAr: "فرنسي", labelEn: "French Bread", price: 60 },
      { key: "saj", labelAr: "صاج سوري", labelEn: "Saj Wrap", price: 80 }
    ],
    tags: []
  },

  // ==========================================
  // 🔥 5. مشويات وكومبو (Grills & Combos)
  // ==========================================
  {
    id: "grill-whole-chicken-fahm",
    category: "grills",
    icon: "🔥",
    nameAr: "فرخة فحم كاملة",
    nameEn: "Whole Charcoal Grilled Chicken",
    descAr: "دجاجة كاملة طازجة متبلة بخلطة التوابل السرية ومشوية على الفحم الهادئ",
    descEn: "Fresh whole chicken marinated in signature spices and slow-cooked over charcoal",
    options: [{ key: "whole", labelAr: "فرخة كاملة", labelEn: "Whole Chicken", price: 400 }],
    tags: ["grilled", "popular"]
  },
  {
    id: "grill-chicken-shish",
    category: "grills",
    icon: "🍢",
    nameAr: "فراخ شيش مشوية",
    nameEn: "Shish Grilled Chicken",
    descAr: "دجاجة متبلة ومقطعة ومشوية على السيخ بنكهة الشواء الأصيلة",
    descEn: "Juicy chicken cut into bone-in pieces and chargrilled with herbal glaze",
    options: [{ key: "whole", labelAr: "فرخة كاملة", labelEn: "Whole Chicken", price: 400 }],
    tags: ["grilled"]
  },
  {
    id: "grill-chicken-rotisserie",
    category: "grills",
    icon: "🍗",
    nameAr: "فراخ شواية",
    nameEn: "Rotisserie Spatchcock Chicken",
    descAr: "دجاجة محمرة ومشوية بالشواية ذهبية وطرية من الداخل",
    descEn: "Rotisserie-roasted tender chicken with golden crispy skin",
    options: [{ key: "whole", labelAr: "فرخة كاملة", labelEn: "Whole Chicken", price: 400 }],
    tags: ["grilled"]
  },
  {
    id: "grill-half-chicken",
    category: "grills",
    icon: "🍗",
    nameAr: "نصف فرخة مشوية",
    nameEn: "Half Grilled Chicken",
    descAr: "نصف دجاجة مشوية على الفحم بتتبيلة ابن الوزير الشهيرة",
    descEn: "Half tender charcoal grilled chicken with house seasonings",
    options: [{ key: "half", labelAr: "نصف فرخة", labelEn: "Half Chicken", price: 200 }],
    tags: ["grilled", "popular"]
  },
  {
    id: "grill-quarter-breast",
    category: "grills",
    icon: "🍗",
    nameAr: "ربع فرخة صدر مشوي",
    nameEn: "Quarter Chicken Breast",
    descAr: "ربع صدر دجاج مشوي متبل خفيف وشهي وصحي",
    descEn: "Grilled succulent quarter chicken breast cooked to juicy perfection",
    options: [{ key: "portion", labelAr: "ربع صدر", labelEn: "Quarter Breast", price: 130 }],
    tags: ["grilled"]
  },
  {
    id: "grill-quarter-thigh",
    category: "grills",
    icon: "🍗",
    nameAr: "ربع فرخة ورك مشوي",
    nameEn: "Quarter Chicken Thigh",
    descAr: "ربع ورك دجاج مشوي على الفحم طري ولذيذ",
    descEn: "Tender grilled quarter chicken leg/thigh with rich smoky flavor",
    options: [{ key: "portion", labelAr: "ربع ورك", labelEn: "Quarter Thigh", price: 115 }],
    tags: ["grilled"]
  },
  {
    id: "grill-kofta-kilo",
    category: "grills",
    icon: "🥩",
    nameAr: "كيلو كفتة مشوية على الفحم",
    nameEn: "1 Kg Charcoal Grilled Kofta",
    descAr: "كيلو كفتة بلدي مشوية على السيخ مع بهارات الشواء والعيش والسلطات",
    descEn: "1 Kilogram premium beef kofta chargrilled with bread and salads",
    options: [{ key: "kilo", labelAr: "1 كيلو", labelEn: "1 Kg", price: 520 }],
    tags: ["grilled", "special", "popular"]
  },
  {
    id: "combo-1",
    category: "grills",
    icon: "👑",
    nameAr: "وجبة كومبو 1",
    nameEn: "Combo Platter 1",
    descAr: "نصف فرخة فحم + كفتة مشوية + شيش طاووق",
    descEn: "Half charcoal grilled chicken + grilled kofta + shish tawook",
    options: [{ key: "meal", labelAr: "وجبة كومبو", labelEn: "Combo Meal", price: 350 }],
    tags: ["special", "popular"]
  },
  {
    id: "combo-2",
    category: "grills",
    icon: "👑",
    nameAr: "وجبة كومبو 2",
    nameEn: "Combo Platter 2",
    descAr: "نصف فرخة + شيش طاووق + فراخ بروست مقرمشة + وجبة عربي شاورما",
    descEn: "Half chicken + shish tawook + crispy broast chicken + Arabi shawarma",
    options: [{ key: "meal", labelAr: "وجبة كومبو", labelEn: "Combo Meal", price: 420 }],
    tags: ["special", "popular"]
  },
  {
    id: "combo-3",
    category: "grills",
    icon: "👑",
    nameAr: "وجبة كومبو 3",
    nameEn: "Combo Platter 3",
    descAr: "نصف فرخة + كفتة مشوية + فراخ بانيه + وجبة عربي شاورما",
    descEn: "Half chicken + kofta + crispy pane + Arabi shawarma meal",
    options: [{ key: "meal", labelAr: "وجبة كومبو", labelEn: "Combo Meal", price: 395 }],
    tags: ["special"]
  },
  {
    id: "combo-4",
    category: "grills",
    icon: "👑",
    nameAr: "وجبة كومبو 4 (الملوك)",
    nameEn: "Combo Platter 4 (The Royal Feast)",
    descAr: "ربع طرب + ربع كفتة + نصف فرخة + ربع شيش + 2 حواوشي",
    descEn: "1/4 kg tarb + 1/4 kg kofta + half chicken + 1/4 kg shish + 2 hawawshi",
    options: [{ key: "meal", labelAr: "وليمة الملوك", labelEn: "Royal Feast", price: 420 }],
    tags: ["special", "popular"]
  },

  // ==========================================
  // 🍱 6. وجبات ومكس (Meals & Mix Platters)
  // ==========================================
  {
    id: "meal-shish-tawook",
    category: "meals",
    icon: "🍢",
    nameAr: "وجبة شيش طاووق",
    nameEn: "Shish Tawook Meal",
    descAr: "أسياخ شيش طاووق مشوية + أرز + بطاطس + عيش + ثومية",
    descEn: "Marinated shish tawook chicken skewers + rice + fries + bread + dip",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: ["popular", "grilled"]
  },
  {
    id: "meal-chicken-pane",
    category: "meals",
    icon: "🍗",
    nameAr: "وجبة فراخ بانيه",
    nameEn: "Chicken Pane Meal",
    descAr: "صدور دجاج بانيه مقرمشة + أرز + بطاطس + عيش + ثومية",
    descEn: "Crispy golden chicken pane cutlets + rice + fries + bread + sauce",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: ["popular"]
  },
  {
    id: "meal-chicken-diet",
    category: "meals",
    icon: "🥗",
    nameAr: "وجبة فراخ ريجيم (دايت)",
    nameEn: "Diet Grilled Chicken Meal",
    descAr: "صدور دجاج مشوية خالية من الزيوت + خضار سوتيه وسلطة خضراء وعيش سن",
    descEn: "Skinless oil-free grilled chicken breasts with vegetables & salad",
    options: [{ key: "meal", labelAr: "وجبة دايت", labelEn: "Diet Meal", price: 120 }],
    tags: []
  },
  {
    id: "meal-kofta",
    category: "meals",
    icon: "🥩",
    nameAr: "وجبة كفتة مشوية",
    nameEn: "Charcoal Kofta Meal",
    descAr: "أصابع كفتة لحم مشوية على الفحم + أرز + بطاطس + عيش + طحينة",
    descEn: "Grilled beef kofta fingers + rice + fries + bread + tahini dip",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 120 }],
    tags: ["grilled", "popular"]
  },
  {
    id: "saroukh-kofta",
    category: "meals",
    icon: "🚀",
    nameAr: "صاروخ كفتة",
    nameEn: "Kofta Rocket Platter",
    descAr: "ساندوتش صاروخ عملاق محشو بكفتة الفحم والبطاطس والسلطة والصوص",
    descEn: "Giant loaded rocket roll with grilled kofta, fries, and salad",
    options: [{ key: "portion", labelAr: "صاروخ", labelEn: "Rocket Roll", price: 75 }],
    tags: ["popular"]
  },
  {
    id: "saroukh-shish",
    category: "meals",
    icon: "🚀",
    nameAr: "صاروخ شيش طاووق",
    nameEn: "Shish Tawook Rocket Platter",
    descAr: "ساندوتش صاروخ عملاق محشو بالشيش طاووق المشوي والبطاطس والثومية",
    descEn: "Giant loaded rocket roll with tender shish tawook chicken and fries",
    options: [{ key: "portion", labelAr: "صاروخ", labelEn: "Rocket Roll", price: 80 }],
    tags: ["popular"]
  },
  {
    id: "mix-ebn-elwazeer",
    category: "meals",
    icon: "👑",
    nameAr: "ميكس ابن الوزير الملكي",
    nameEn: "Ebn Elwazeer Royal Mix Meal",
    descAr: "طرب بلدي فاخر + حواوشي + كفتة مشوية + فراخ مشوية",
    descEn: "Royal mix: grilled tarb + hawawshi + kofta + tender grilled chicken",
    options: [{ key: "meal", labelAr: "وجبة ميكس", labelEn: "Mix Meal", price: 300 }],
    tags: ["special", "popular"]
  },
  {
    id: "mix-shish",
    category: "meals",
    icon: "🍱",
    nameAr: "شيش ميكس",
    nameEn: "Shish Mix Platter",
    descAr: "شيش طاووق + كفتة مشوية + قطع استربس + أرز + بطاطس",
    descEn: "Shish tawook + grilled kofta + crispy strips + rice + fries",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 200 }],
    tags: ["popular"]
  },
  {
    id: "mix-kofta",
    category: "meals",
    icon: "🍱",
    nameAr: "كفتة ميكس",
    nameEn: "Kofta Mix Platter",
    descAr: "كفتة مشوية + ربع فرخة + أرز + فراخ بانيه",
    descEn: "Grilled kofta + quarter chicken + rice + crispy chicken pane",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 200 }],
    tags: []
  },
  {
    id: "mix-fahm",
    category: "meals",
    icon: "🍱",
    nameAr: "فراخ فحم ميكس",
    nameEn: "Charcoal Chicken Mix Platter",
    descAr: "فراخ مشوية على الفحم + كفتة مشوية + قطع استربس كرسبي",
    descEn: "Charcoal chicken + grilled kofta + crispy chicken strips",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 200 }],
    tags: ["grilled"]
  },
  {
    id: "mix-shawaya",
    category: "meals",
    icon: "🍱",
    nameAr: "فراخ شواية ميكس",
    nameEn: "Rotisserie Chicken Mix Platter",
    descAr: "فراخ شواية + شيش ميكس + فراخ بانيه ذهبية",
    descEn: "Rotisserie chicken + shish pieces + golden crispy pane",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 230 }],
    tags: []
  },
  {
    id: "mix-pane",
    category: "meals",
    icon: "🍱",
    nameAr: "بانيه ميكس",
    nameEn: "Pane Mix Platter",
    descAr: "فراخ بانيه + قطع استربس كرسبي + قطعة بروست مقرمش",
    descEn: "Golden pane chicken + crispy strips + broast fried chicken",
    options: [{ key: "meal", labelAr: "وجبة", labelEn: "Meal", price: 200 }],
    tags: ["crispy"]
  },

  // ==========================================
  // 🥪 7. سندوتشات وبيرجر (Sandwiches & Burgers)
  // ==========================================
  {
    id: "sandwich-hawawshi",
    category: "sandwiches",
    icon: "🥩",
    nameAr: "حواوشي بلدي على الفحم",
    nameEn: "Egyptian Charcoal Hawawshi",
    descAr: "رغيف حواوشي بلدي طازج باللحم المفروم المتبل والمشوي على الفحم",
    descEn: "Crisp Egyptian pita stuffed with spiced minced beef, grilled over coals",
    options: [{ key: "sandwich", labelAr: "رغيف", labelEn: "Loaf", price: 30 }],
    tags: ["popular", "grilled"]
  },
  {
    id: "sandwich-pane",
    category: "sandwiches",
    icon: "🥪",
    nameAr: "سندوتش بانيه كرسبي",
    nameEn: "Crispy Chicken Pane Sandwich",
    descAr: "صدور بانيه ذهبية مع الخس والمايونيز والكاتشب في خبز طازج",
    descEn: "Golden breaded chicken breast with lettuce, mayo & ketchup",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 55 }],
    tags: ["popular"]
  },
  {
    id: "sandwich-kofta-fahm",
    category: "sandwiches",
    icon: "🍢",
    nameAr: "سندوتش كفتة على الفحم",
    nameEn: "Charcoal Kofta Sandwich",
    descAr: "أصابع كفتة مشوية على الفحم مع الطحينة والبقدونس والليمون",
    descEn: "Chargrilled beef kofta skewers wrapped with tahini and fresh parsley",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 50 }],
    tags: ["grilled"]
  },
  {
    id: "sandwich-crispy",
    category: "sandwiches",
    icon: "🥪",
    nameAr: "سندوتش كرسبي",
    nameEn: "Crispy Chicken Sandwich",
    descAr: "قطع دجاج كرسبي مقرمشة مع صوص المايونيز والجبن والخس",
    descEn: "Crunchy fried chicken strips with special sauce and lettuce",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 50 }],
    tags: ["crispy", "popular"]
  },
  {
    id: "sandwich-sojouk",
    category: "sandwiches",
    icon: "🌭",
    nameAr: "سندوتش سجق بلدي",
    nameEn: "Oriental Sausage Sandwich",
    descAr: "سجق بلدي متبل بالخلطة الإسكندرانية والفلفل الأخضر",
    descEn: "Oriental beef sausage sautéed with peppers and spices",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 40 }],
    tags: []
  },
  {
    id: "sandwich-beef-burger",
    category: "sandwiches",
    icon: "🍔",
    nameAr: "سندوتش برجر لحمة",
    nameEn: "Beef Burger Sandwich",
    descAr: "برجر لحم مشوي مع الخس والطماطم والصلصة والمايونيز",
    descEn: "Grilled beef patty with fresh tomato, lettuce and burger sauce",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 40 }],
    tags: []
  },
  {
    id: "sandwich-hotdog",
    category: "sandwiches",
    icon: "🌭",
    nameAr: "سندوتش هوت دوج",
    nameEn: "Hot Dog Sandwich",
    descAr: "هوت دوج مشوي مع الكاتشب والمايونيز والمستردة",
    descEn: "Classic hot dog sandwich with ketchup, mustard and mayonnaise",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 40 }],
    tags: []
  },
  {
    id: "sandwich-fries-saj-cheese",
    category: "sandwiches",
    icon: "🌯",
    nameAr: "سندوتش بطاطس صاج جبنة",
    nameEn: "Saj Fries with Melted Cheese",
    descAr: "بطاطس محمرة مع صوص الجبنة الشيدر والموتزاريلا في خبز صاج مقرمش",
    descEn: "Crispy french fries with melted cheddar and mozzarella in saj wrap",
    options: [{ key: "sandwich", labelAr: "سندوتش صاج", labelEn: "Saj Sandwich", price: 45 }],
    tags: ["popular"]
  },
  {
    id: "sandwich-fries-french-cheese",
    category: "sandwiches",
    icon: "🥖",
    nameAr: "سندوتش بطاطس فرنسي جبنة",
    nameEn: "French Bread Fries with Cheese",
    descAr: "أصابع بطاطس مقرمشة مع الجبنة السايحة في خبز فرنسي",
    descEn: "French fries loaded with melted cheese in a crusty baguette",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 40 }],
    tags: []
  },
  {
    id: "plate-saj-fries",
    category: "sandwiches",
    icon: "🍟",
    nameAr: "بطاطس صاج سادة",
    nameEn: "Classic Saj Fries Wrap",
    descAr: "أصابع بطاطس في خبز صاج ساخن مع التوابل والثومية",
    descEn: "Crispy fries wrapped in warm saj bread with house seasoning",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 35 }],
    tags: []
  },
  {
    id: "sandwich-fries-french-plain",
    category: "sandwiches",
    icon: "🥖",
    nameAr: "سندوتش بطاطس فرنسي سادة",
    nameEn: "French Bread Fries Plain",
    descAr: "سندوتش بطاطس بوم فريت في فينو فرنسي مع الكاتشب",
    descEn: "Classic potato fries in a fresh french baguette",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 20 }],
    tags: []
  },
  // Deluxe Mega Burgers (دبل روز، سموك شيلي، دبل فراخ، دبل برجر...)
  {
    id: "burger-double-rose",
    category: "sandwiches",
    icon: "🍔",
    nameAr: "برجر دبل روز الفاخر",
    nameEn: "Double Rose Mega Burger",
    descAr: "قطعتين برجر لحم فاخر + صوص الروز الخاص + بيكون + شيدر سايحة + بصل مكرمل",
    descEn: "2 premium beef patties + rose sauce + beef bacon + cheddar + caramelized onions",
    options: [{ key: "burger", labelAr: "سندوتش ميجا", labelEn: "Mega Burger", price: 195 }],
    tags: ["special", "popular"]
  },
  {
    id: "burger-smoke-chili",
    category: "sandwiches",
    icon: "🔥",
    nameAr: "برجر سموك شيلي الحار",
    nameEn: "Smoke Chili Spicy Burger",
    descAr: "برجر لحم مدخن + هالبينو حار + صوص باربكيو مدخن + جبنة شيدر غنية",
    descEn: "Chargrilled beef + spicy jalapenos + smoky BBQ + melted sharp cheddar",
    options: [{ key: "burger", labelAr: "سندوتش ميجا", labelEn: "Mega Burger", price: 195 }],
    tags: ["spicy", "special"]
  },
  {
    id: "burger-double-chicken",
    category: "sandwiches",
    icon: "🍔",
    nameAr: "برجر دبل فراخ كرسبي",
    nameEn: "Double Crispy Chicken Burger",
    descAr: "قطعتين صدور فراخ كرسبي مقرمشة + صوص خاص + خس + شيدر سايحة",
    descEn: "Two thick crispy chicken fillets + special sauce + lettuce + cheddar",
    options: [{ key: "burger", labelAr: "سندوتش ميجا", labelEn: "Mega Burger", price: 195 }],
    tags: ["crispy", "special"]
  },
  {
    id: "burger-double-beef",
    category: "sandwiches",
    icon: "🍔",
    nameAr: "برجر دبل لحمة سوبر",
    nameEn: "Super Double Beef Burger",
    descAr: "قطعتين برجر لحم بقري سميكة مشوية على الجريل مع طبقات الشيدر",
    descEn: "Two thick chargrilled beef patties layered with American cheddar",
    options: [{ key: "burger", labelAr: "سندوتش ميجا", labelEn: "Mega Burger", price: 195 }],
    tags: ["popular"]
  },
  {
    id: "burger-snatch-crispy",
    category: "sandwiches",
    icon: "🍗",
    nameAr: "سندوتش سناتش كرسبي",
    nameEn: "Snatch Crispy Burger",
    descAr: "صدر دجاج كرسبي مع الخلطة السرية والجبن الشيدر في خبز البريوش الفاخر",
    descEn: "Crispy chicken breast with secret seasoning & cheddar in brioche bun",
    options: [{ key: "burger", labelAr: "سندوتش", labelEn: "Sandwich", price: 140 }],
    tags: ["crispy"]
  },
  {
    id: "burger-texas",
    category: "sandwiches",
    icon: "🍔",
    nameAr: "تكساس برجر",
    nameEn: "Texas BBQ Burger",
    descAr: "برجر لحم أو دجاج بصوص تكساس باربكيو وحلقات البصل المقرمشة والشيدر",
    descEn: "Juicy burger topped with crispy onion rings, Texas BBQ sauce and cheddar",
    options: [{ key: "burger", labelAr: "سندوتش", labelEn: "Sandwich", price: 140 }],
    tags: ["popular"]
  },
  {
    id: "sandwich-twist-slicer",
    category: "sandwiches",
    icon: "🥪",
    nameAr: "تويست سلايزر المميز",
    nameEn: "Twist Slicer Sandwich",
    descAr: "شرائح الدجاج المتبلة مع الموزاريلا وصوص التويست الحصري في خبز مقرمش",
    descEn: "Seasoned sliced chicken fillets with mozzarella and twist house sauce",
    options: [{ key: "sandwich", labelAr: "سندوتش", labelEn: "Sandwich", price: 140 }],
    tags: ["special"]
  },

  // ==========================================
  // 🍝 8. باستا وأرز (Pasta & Rice)
  // ==========================================
  {
    id: "pasta-bechamel-meat",
    category: "pasta",
    icon: "🍲",
    nameAr: "طاجن مكرونة بشاميل لحمة",
    nameEn: "Baked Beef Béchamel Pasta",
    descAr: "مكرونة فرن باللحم المفروم البلدي وصوص البشاميل الكريمي والجبنة الذهبية",
    descEn: "Oven-baked penne pasta layered with seasoned beef & rich creamy béchamel",
    options: [{ key: "portion", labelAr: "طاجن", labelEn: "Portion", price: 70 }],
    tags: ["popular"]
  },
  {
    id: "pasta-negresco",
    category: "pasta",
    icon: "🍝",
    nameAr: "طاجن مكرونة نجريسكو دجاج",
    nameEn: "Chicken Negresco Pasta",
    descAr: "مكرونة نجريسكو مع قطع الدجاج والمشروم والزيتون وصوص الكريمة والموتزاريلا",
    descEn: "Penne pasta with chicken pieces, mushrooms, cream sauce & melted cheese",
    options: [{ key: "portion", labelAr: "طاجن", labelEn: "Portion", price: 65 }],
    tags: ["popular", "special"]
  },
  {
    id: "pasta-bechamel-chicken",
    category: "pasta",
    icon: "🍲",
    nameAr: "طاجن مكرونة بشاميل فراخ",
    nameEn: "Chicken Béchamel Pasta",
    descAr: "مكرونة فرن بقطع الدجاج المتبلة وصوص البشاميل الساخن",
    descEn: "Baked pasta with savory chicken cubes smothered in thick béchamel sauce",
    options: [{ key: "portion", labelAr: "طاجن", labelEn: "Portion", price: 60 }],
    tags: []
  },
  {
    id: "rice-basmati",
    category: "pasta",
    icon: "🍚",
    nameAr: "طبق أرز بسمتي فاخر",
    nameEn: "Premium Basmati Rice",
    descAr: "أرز بسمتي أصفر طويل الحبة مطبوخ بالبهارات والزعفران والمكسرات",
    descEn: "Aromatic golden long-grain basmati rice cooked with saffron spices",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 25 }],
    tags: []
  },
  {
    id: "rice-vermicelli",
    category: "pasta",
    icon: "🍚",
    nameAr: "طبق أرز مصري بالشعرية",
    nameEn: "Egyptian Vermicelli Rice",
    descAr: "أرز مصري مفلفل بالشعرية المحمرة بالسمنة البلدي",
    descEn: "Fluffy traditional Egyptian white rice with golden toasted vermicelli",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 25 }],
    tags: []
  },

  // ==========================================
  // 🍯 9. حلو ابن الوزير (Desserts - Zalabia, Waffles, Mini Pancakes)
  // ==========================================
  // زلابية (S / M / L)
  {
    id: "zalabia-ebn-elwazeer",
    category: "desserts",
    icon: "👑",
    nameAr: "زلابية ابن الوزير الملكية",
    nameEn: "Ebn Elwazeer Royal Zalabia",
    descAr: "كرات زلابية ذهبية مقرمشة غارقة بمزيج من النوتيلا واللوتس والباستاشيو والمكسرات",
    descEn: "Signature golden fried dough balls smothered in Nutella, Lotus, pistachio & nuts",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 90 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 160 }
    ],
    tags: ["special", "popular"]
  },
  {
    id: "zalabia-dark-white-lotus",
    category: "desserts",
    icon: "✨",
    nameAr: "زلابية دارك وايت ولوتس",
    nameEn: "Dark, White & Lotus Zalabia",
    descAr: "تريبل صوص: نوتيلا دارك غنية + شوكولاتة بيضاء + صوص لوتس أصلي وبسكويت",
    descEn: "Trio indulgence: dark Nutella + white Belgian chocolate + Lotus Biscoff",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: ["popular"]
  },
  {
    id: "zalabia-white-lotus",
    category: "desserts",
    icon: "🍯",
    nameAr: "زلابية وايت ولوتس",
    nameEn: "White Chocolate & Lotus Zalabia",
    descAr: "شوكولاتة بيضاء بلجيكية مع زبدة لوتس كرانشي وبودرة بسكويت",
    descEn: "Silky white chocolate paired with authentic crunchy Lotus Biscoff",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: []
  },
  {
    id: "zalabia-white-coconut",
    category: "desserts",
    icon: "🥥",
    nameAr: "زلابية وايت وجوز هند (رافايلو)",
    nameEn: "White Chocolate & Coconut Zalabia",
    descAr: "شوكولاتة بيضاء ناعمة مغطاة برقائق جوز الهند الفاخر",
    descEn: "Velvety white chocolate sprinkled with roasted fine coconut flakes",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: []
  },
  {
    id: "zalabia-pistachio",
    category: "desserts",
    icon: "✨",
    nameAr: "زلابية باستاشيو فاخرة",
    nameEn: "Pistachio Cream Zalabia",
    descAr: "صلصة الفستق الإيطالية الفاخرة مع حبات الفستق المطحونة",
    descEn: "Authentic Sicilian pistachio cream sauce with crushed green pistachios",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 140 }
    ],
    tags: ["special"]
  },
  {
    id: "zalabia-white-nutella",
    category: "desserts",
    icon: "🍫",
    nameAr: "زلابية وايت نوتيلا",
    nameEn: "White Nutella Zalabia",
    descAr: "شوكولاتة نوتيلا بيضاء كريمية غنية",
    descEn: "Crispy fried zalabia covered in rich melted white hazelnut chocolate",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 95 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: []
  },
  {
    id: "zalabia-mix-nutella",
    category: "desserts",
    icon: "🍫",
    nameAr: "زلابية ميكس نوتيلا",
    nameEn: "Mix Nutella Duo Zalabia",
    descAr: "مكس شوكولاتة نوتيلا بيضاء وبنية",
    descEn: "Delicious harmony of white and dark Nutella chocolate drizzle",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: ["popular"]
  },
  {
    id: "zalabia-lotus",
    category: "desserts",
    icon: "🍪",
    nameAr: "زلابية لوتس كرانشي",
    nameEn: "Lotus Biscoff Zalabia",
    descAr: "صوص لوتس بالكراميل مع بسكويت اللوتس المقرمش",
    descEn: "Creamy Lotus Biscoff spread sprinkled with crunchy biscuit crumbs",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 60 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: []
  },
  {
    id: "zalabia-honey",
    category: "desserts",
    icon: "🍯",
    nameAr: "زلابية عسل طبيعي",
    nameEn: "Pure Natural Honey Zalabia",
    descAr: "زلابية مقلية ذهبية غارقة في عسل النحل الطبيعي النقي",
    descEn: "Golden zalabia balls soaked in pure natural aromatic honey",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 75 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: []
  },
  {
    id: "zalabia-sugar-cinnamon",
    category: "desserts",
    icon: "✨",
    nameAr: "زلابية سكر وقرفة",
    nameEn: "Sugar & Cinnamon Zalabia",
    descAr: "نكهة السينابون التراثية بسكر البودرة والقرفة الناعمة",
    descEn: "Dusted with fine powdered sugar and fragrant warm cinnamon",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 100 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: []
  },
  {
    id: "zalabia-white-cinnamon",
    category: "desserts",
    icon: "✨",
    nameAr: "زلابية وايت وقرفة",
    nameEn: "White Chocolate & Cinnamon Zalabia",
    descAr: "شوكولاتة بيضاء سايحة مع لمسة قرفة عطرية",
    descEn: "Warm white chocolate with spiced cinnamon sprinkles",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 130 }
    ],
    tags: []
  },
  {
    id: "zalabia-dark-nutella",
    category: "desserts",
    icon: "🍫",
    nameAr: "زلابية دارك نوتيلا",
    nameEn: "Dark Nutella Zalabia",
    descAr: "شوكولاتة نوتيلا أصلية بالبندق الغني",
    descEn: "Drizzled with classic rich Italian dark Nutella hazelnut cream",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 65 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 95 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 120 }
    ],
    tags: ["popular"]
  },
  {
    id: "zalabia-sugar",
    category: "desserts",
    icon: "🍚",
    nameAr: "زلابية سكر بودرة كلاسيك",
    nameEn: "Classic Powdered Sugar Zalabia",
    descAr: "الزلابية المصرية الأصلية المقرمشة بسكر البودرة الناعم",
    descEn: "Traditional crispy golden zalabia dusted with powdered sugar",
    options: [
      { key: "small", labelAr: "صغير (S)", labelEn: "Small", price: 60 },
      { key: "medium", labelAr: "وسط (M)", labelEn: "Medium", price: 100 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 120 }
    ],
    tags: []
  },

  // وافل بلجيكي (Waffles - S/M & L)
  {
    id: "waffle-ebn-elwazeer",
    category: "desserts",
    icon: "👑",
    nameAr: "وافل ابن الوزير الملكي",
    nameEn: "Ebn Elwazeer Royal Waffle",
    descAr: "وافل بلجيكي مقرمش محشو ومغطى بكل أنواع الصوصات الفاخرة والمكسرات وقطع الشوكولاتة",
    descEn: "Signature Belgian waffle with mixed deluxe chocolates, Lotus, fruits & nuts",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 150 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 250 }
    ],
    tags: ["special", "popular"]
  },
  {
    id: "waffle-power",
    category: "desserts",
    icon: "⚡",
    nameAr: "وافل باور للطاقة",
    nameEn: "Power Energy Waffle",
    descAr: "وافل مع العسل والمكسرات والشوكولاتة والموز لطاقة لا تقاوم",
    descEn: "High-energy waffle with honey, walnuts, banana and Nutella",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 120 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 185 }
    ],
    tags: ["special"]
  },
  {
    id: "waffle-fruits",
    category: "desserts",
    icon: "🍓",
    nameAr: "وافل فواكه طازجة",
    nameEn: "Fresh Fruits Belgian Waffle",
    descAr: "وافل ساخن مغطى بقطع الفراولة والموز والكيوي مع صوص الشوكولاتة",
    descEn: "Crispy waffle topped with fresh seasonal berries, bananas and chocolate drizzle",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 110 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 180 }
    ],
    tags: ["popular"]
  },
  {
    id: "waffle-oreo",
    category: "desserts",
    icon: "🍪",
    nameAr: "وافل أوريو كرانشي",
    nameEn: "Oreo Crunchy Waffle",
    descAr: "وافل بلجيكي مع شوكولاتة نوتيلا وقطع بسكويت أوريو المطحونة",
    descEn: "Belgian waffle smothered in chocolate and crushed Oreo cookies",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 95 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 165 }
    ],
    tags: ["popular"]
  },
  {
    id: "waffle-ala-el-rayeq",
    category: "desserts",
    icon: "✨",
    nameAr: "وافل على الرايق",
    nameEn: "Ala El Rayeq Chill Waffle",
    descAr: "مزيج شوكولاتة بيضاء وكراميل ولوتس على روقان",
    descEn: "Deluxe chilled combo of white chocolate, salted caramel and Biscoff",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 95 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 165 }
    ],
    tags: []
  },
  {
    id: "waffle-pistachio",
    category: "desserts",
    icon: "✨",
    nameAr: "وافل باستاشيو فاخر",
    nameEn: "Pistachio Cream Waffle",
    descAr: "وافل مقرمش مغطى بصوص الفستق الكريمي الغني وحبات الفستق",
    descEn: "Crunchy Belgian waffle smothered with pistachio cream & crushed nuts",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 85 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: []
  },
  {
    id: "waffle-nutella-mix",
    category: "desserts",
    icon: "🍫",
    nameAr: "وافل نوتيلا ميكس",
    nameEn: "Mix Nutella Duo Waffle",
    descAr: "وافل ساخن بنصف نوتيلا دارك ونصف نوتيلا وايت",
    descEn: "Half dark Nutella and half white chocolate over golden waffle",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 75 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 150 }
    ],
    tags: ["popular"]
  },
  {
    id: "waffle-nutella-lotus",
    category: "desserts",
    icon: "🍪",
    nameAr: "وافل نوتيلا لوتس",
    nameEn: "Nutella & Lotus Waffle",
    descAr: "مزيج نوتيلا إيطالية مع زبدة لوتس وبسكويت مقرمش",
    descEn: "Indulgent mix of Italian Nutella and caramelized Lotus Biscoff",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 75 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 140 }
    ],
    tags: []
  },
  {
    id: "waffle-nutella-dark",
    category: "desserts",
    icon: "🍫",
    nameAr: "وافل نوتيلا دارك",
    nameEn: "Dark Nutella Waffle",
    descAr: "وافل بلجيكي تقليدي غارق بنوتيلا البندق الغنية",
    descEn: "Traditional waffle drizzled with generous layer of dark Nutella",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 65 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 120 }
    ],
    tags: []
  },
  {
    id: "waffle-nutella-white",
    category: "desserts",
    icon: "🍫",
    nameAr: "وافل نوتيلا وايت",
    nameEn: "White Chocolate Waffle",
    descAr: "وافل بلجيكي مغطى بالشوكولاتة البيضاء السايحة",
    descEn: "Warm Belgian waffle drizzled with sweet creamy white chocolate",
    options: [
      { key: "medium", labelAr: "وسط", labelEn: "Medium", price: 65 },
      { key: "large", labelAr: "كبير (L)", labelEn: "Large", price: 120 }
    ],
    tags: []
  },

  // ميني بان كيك (Mini Pancakes)
  {
    id: "pancake-ebn-elwazeer",
    category: "desserts",
    icon: "👑",
    nameAr: "ميني بان كيك ابن الوزير (سنيكرز - مورو - اوريو)",
    nameEn: "Ebn Elwazeer Mini Pancakes (Snickers - Moro - Oreo)",
    descAr: "طبق ميني بان كيك فاخر محشو ومغطى بسنيكرز ومورو وأوريو والشوكولاتة",
    descEn: "Platter of mini fluffy pancakes loaded with Snickers, Moro, Oreo & chocolates",
    options: [{ key: "plate", labelAr: "طبق فاخر", labelEn: "Deluxe Plate", price: 160 }],
    tags: ["special", "popular"]
  },
  {
    id: "pancake-snickers",
    category: "desserts",
    icon: "🥞",
    nameAr: "ميني بان كيك سنيكرز",
    nameEn: "Snickers Mini Pancakes",
    descAr: "قطع سنيكرز بالكراميل والفول السوداني مع الشوكولاتة والبان كيك",
    descEn: "Mini pancakes topped with melted Snickers bars, caramel & peanuts",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 140 }],
    tags: ["popular"]
  },
  {
    id: "pancake-oreo",
    category: "desserts",
    icon: "🍪",
    nameAr: "ميني بان كيك أوريو",
    nameEn: "Oreo Mini Pancakes",
    descAr: "ميني بان كيك مغطى بصوص الأوريو وقطع بسكويت أوريو المطحونة",
    descEn: "Fluffy Dutch mini pancakes smothered in chocolate and crushed Oreo",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 120 }],
    tags: ["popular"]
  },
  {
    id: "pancake-moro",
    category: "desserts",
    icon: "🍫",
    nameAr: "ميني بان كيك مورو",
    nameEn: "Moro Chocolate Mini Pancakes",
    descAr: "شوكولاتة مورو بالكراميل الذائب فوق كرات البان كيك الساخنة",
    descEn: "Melted Moro chocolate and caramel over warm mini pancakes",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 120 }],
    tags: []
  },
  {
    id: "pancake-fruits",
    category: "desserts",
    icon: "🍓",
    nameAr: "ميني بان كيك فواكه طازجة",
    nameEn: "Fresh Fruits Mini Pancakes",
    descAr: "ميني بان كيك مع الفراولة والموز وصوص الشوكولاتة والعسل",
    descEn: "Mini pancakes topped with fresh strawberries, banana and chocolate",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 110 }],
    tags: []
  },
  {
    id: "pancake-pistachio",
    category: "desserts",
    icon: "✨",
    nameAr: "ميني بان كيك بستاشيو",
    nameEn: "Pistachio Mini Pancakes",
    descAr: "ميني بان كيك مغطى بكريمة الفستق الإيطالية الغنية",
    descEn: "Coated with authentic Italian pistachio cream and crushed nuts",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 95 }],
    tags: []
  },
  {
    id: "pancake-hohos",
    category: "desserts",
    icon: "🍫",
    nameAr: "ميني بان كيك هوهوز",
    nameEn: "Hohos Mini Pancakes",
    descAr: "قطع كيك هوهوز بالشوكولاتة والكريمة فوق البان كيك",
    descEn: "Mini pancakes topped with sliced Hohos chocolate rolls & cream",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 90 }],
    tags: []
  },
  {
    id: "pancake-twinkies",
    category: "desserts",
    icon: "🧁",
    nameAr: "ميني بان كيك توينكز",
    nameEn: "Twinkies Mini Pancakes",
    descAr: "كيك توينكز الذهبي مع صوص الكريمة والشوكولاتة والبان كيك",
    descEn: "Golden sponge Twinkies slices over warm mini pancakes with syrup",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 90 }],
    tags: []
  },
  {
    id: "pancake-lotus",
    category: "desserts",
    icon: "🍪",
    nameAr: "ميني بان كيك لوتس كرانشي",
    nameEn: "Lotus Biscoff Mini Pancakes",
    descAr: "زبدة اللوتس الذائبة مع فتات بسكويت لوتس المقرمش",
    descEn: "Covered in warm Lotus spread and crunchy biscuit crumbs",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 75 }],
    tags: []
  },
  {
    id: "pancake-nutella-dark",
    category: "desserts",
    icon: "🍫",
    nameAr: "ميني بان كيك نوتيلا دارك",
    nameEn: "Dark Nutella Mini Pancakes",
    descAr: "ميني بان كيك هولندي بغزارة نوتيلا الشوكولاتة والبندق",
    descEn: "Fluffy bite-sized pancakes loaded with dark Nutella drizzle",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 70 }],
    tags: ["popular"]
  },
  {
    id: "pancake-nutella-white",
    category: "desserts",
    icon: "🍫",
    nameAr: "ميني بان كيك نوتيلا وايت",
    nameEn: "White Nutella Mini Pancakes",
    descAr: "ميني بان كيك بصوص الشوكولاتة البيضاء السايحة",
    descEn: "Mini pancakes drizzled with sweet white chocolate sauce",
    options: [{ key: "plate", labelAr: "طبق", labelEn: "Plate", price: 70 }],
    tags: []
  },
  {
    id: "dessert-om-ali",
    category: "desserts",
    icon: "🥣",
    nameAr: "طاجن أم علي بالمكسرات",
    nameEn: "Traditional Egyptian Om Ali with Nuts",
    descAr: "رقائق العجين المخبوزة بالحليب الساخن والقشطة البلدية والزبيب والمكسرات",
    descEn: "Egyptian bread pudding baked with hot sweet milk, cream & mixed nuts",
    options: [{ key: "portion", labelAr: "طاجن", labelEn: "Portion", price: 40 }],
    tags: ["popular"]
  },
  {
    id: "dessert-rice-pudding",
    category: "desserts",
    icon: "🥣",
    nameAr: "أرز باللبن فاخر",
    nameEn: "Creamy Egyptian Rice Pudding",
    descAr: "أرز باللبن كريمي طبيعي مع القشطة ورشة مكسرات",
    descEn: "Traditional chilled creamy rice pudding with fragrant vanilla note",
    options: [{ key: "portion", labelAr: "طبق", labelEn: "Portion", price: 25 }],
    tags: []
  },

  // ==========================================
  // 🍟 10. مقبلات وسلطات ومشروبات (Sides & Drinks)
  // ==========================================
  {
    id: "side-molokhia",
    category: "sides",
    icon: "🍲",
    nameAr: "ملوخية خضراء بالتقلية",
    nameEn: "Fresh Green Egyptian Molokhia",
    descAr: "طاجن ملوخية خضراء طازجة بطشة الثوم والكزبرة البلدي",
    descEn: "Traditional Egyptian green molokhia soup with garlic & coriander tasha",
    options: [{ key: "portion", labelAr: "طاجن", labelEn: "Portion", price: 25 }],
    tags: ["popular"]
  },
  {
    id: "side-cheddar-sauce",
    category: "sides",
    icon: "🧀",
    nameAr: "صوص جبنة شيدر غني",
    nameEn: "Rich Cheddar Cheese Dip",
    descAr: "صوص شيدر أمريكي سايح وسميك ومثالي للتغميس مع البطاطس والبروست",
    descEn: "Thick warm melted cheddar cheese dipping sauce",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 15 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 30 }
    ],
    tags: ["popular"]
  },
  {
    id: "side-sweet-chili",
    category: "sides",
    icon: "🌶️",
    nameAr: "صوص سويت تشيلي",
    nameEn: "Sweet Chili Sauce",
    descAr: "صوص حار وحلو شهي مع قطع الاستربس والبروست",
    descEn: "Zesty sweet and spicy dip perfect with fried chicken",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 15 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 25 }
    ],
    tags: []
  },
  {
    id: "side-thousand-island",
    category: "sides",
    icon: "🥣",
    nameAr: "صوص ألف جزيرة (ثاوزند آيلاند)",
    nameEn: "Thousand Island Dressing",
    descAr: "صوص كريمي كلاسيكي منعش مع البرجر والسلطات",
    descEn: "Creamy tangy thousand island dressing for fries and burgers",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 15 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 25 }
    ],
    tags: []
  },
  {
    id: "side-coleslaw",
    category: "sides",
    icon: "🥗",
    nameAr: "سلطة كول سلو طازجة",
    nameEn: "Creamy Coleslaw Salad",
    descAr: "كرنب وجزر طازج مفروم مع صوص الكريمة والعسل اللذيذ",
    descEn: "Crunchy shredded cabbage and carrots in sweet creamy dressing",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 10 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 25 }
    ],
    tags: ["popular"]
  },
  {
    id: "side-tahini",
    category: "sides",
    icon: "🥣",
    nameAr: "طحينة بيضاء سمسم",
    nameEn: "Pure Sesame Tahini Dip",
    descAr: "طحينة سمسم خام فاخرة بالليمون والكمون والخل",
    descEn: "Creamy pure sesame tahini with fresh lemon and spices",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 10 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 25 }
    ],
    tags: []
  },
  {
    id: "side-toumeya",
    category: "sides",
    icon: "🥣",
    nameAr: "ثومية سورية فاخرة",
    nameEn: "Syrian Garlic Dip (Toumeya)",
    descAr: "ثومية كريمية ناعمة وشهية بالشاورما والبروست",
    descEn: "Authentic velvety whipped garlic dip for shawarma and broast",
    options: [
      { key: "small", labelAr: "صغير", labelEn: "Small", price: 10 },
      { key: "large", labelAr: "كبير", labelEn: "Large", price: 20 }
    ],
    tags: ["popular"]
  },
  {
    id: "side-fries-packet",
    category: "sides",
    icon: "🍟",
    nameAr: "باكيت بطاطس مقرمشة",
    nameEn: "Crispy French Fries Packet",
    descAr: "أصابع بطاطس ذهبية ومقرمشة مع بهارات ابن الوزير اللذيذة",
    descEn: "Golden french fries seasoned with house spices",
    options: [{ key: "packet", labelAr: "باكيت", labelEn: "Packet", price: 20 }],
    tags: ["popular"]
  },
  {
    id: "side-vegetables",
    category: "sides",
    icon: "🥦",
    nameAr: "طبق خضار مطبوخ",
    nameEn: "Cooked Seasoned Vegetables",
    descAr: "تشكيلة خضار طازجة مطبوخة بالصلصة اللذيذة",
    descEn: "Warm seasonal vegetables stewed in seasoned tomato broth",
    options: [{ key: "portion", labelAr: "طبق", labelEn: "Dish", price: 20 }],
    tags: []
  },
  {
    id: "side-green-salad",
    category: "sides",
    icon: "🥗",
    nameAr: "سلطة خضراء بلدي",
    nameEn: "Fresh Green Salad",
    descAr: "خيار، طماطم، خس، جرجير، ليمون وزيت زيتون",
    descEn: "Crisp cucumber, tomatoes, lettuce, arugula and lime vinaigrette",
    options: [{ key: "portion", labelAr: "علبة", labelEn: "Cup", price: 15 }],
    tags: []
  },
  {
    id: "side-pickles",
    category: "sides",
    icon: "🥒",
    nameAr: "مخلل بلدي مشكل",
    nameEn: "Mixed Pickles",
    descAr: "تشكيلة مخللات بلدية مقرمشة ولذيذة",
    descEn: "Traditional Egyptian crunchy pickled vegetables",
    options: [{ key: "portion", labelAr: "علبة", labelEn: "Cup", price: 5 }],
    tags: []
  },
  {
    id: "drink-pepsi",
    category: "sides",
    icon: "🥤",
    nameAr: "بيبسى / كولا كانز",
    nameEn: "Pepsi / Coca-Cola Can",
    descAr: "مشروب غازي مثلج ومنعش (كانز)",
    descEn: "Ice-cold refreshing soda can",
    options: [{ key: "can", labelAr: "كانز", labelEn: "Can", price: 20 }],
    tags: []
  },
  {
    id: "drink-water",
    category: "sides",
    icon: "💧",
    nameAr: "مياه معدنية صغيرة",
    nameEn: "Small Mineral Water",
    descAr: "زجاجة مياه معدنية طبيعية مثلجة",
    descEn: "Pure cold natural mineral water bottle",
    options: [{ key: "bottle", labelAr: "زجاجة", labelEn: "Bottle", price: 10 }],
    tags: []
  }
];

// Branches & Ordering Dispatch Lines Dataset
const BRANCHES_DATA = [
  {
    id: "balyana-main",
    nameAr: "فرع البلينا الرئيسي (الفرع الأساسي ⭐)",
    nameEn: "El Balyana Main Branch (Main Branch ⭐)",
    cityKey: "sohag",
    cityNameAr: "سوهاج - البلينا",
    cityNameEn: "Sohag - El Balyana",
    addressAr: "البلينا - شارع مجلس المدينة - بجوار بنك مصر القديم",
    addressEn: "El Balyana - City Council St., next to Old Banque Misr, Sohag",
    mapQuery: "مجلس المدينة البلينا سوهاج",
    phone: "01010707662",
    whatsapp: "01010707662",
    featured: true
  },
  {
    id: "balyana-delivery-line2",
    nameAr: "خدمة التوصيل السريع (الخط 2)",
    nameEn: "Fast Delivery Service (Line 2)",
    cityKey: "sohag",
    cityNameAr: "سوهاج - البلينا",
    cityNameEn: "Sohag - El Balyana",
    addressAr: "توصيل سريع لكافة مناطق وقرى مركز البلينا",
    addressEn: "Rapid doorstep delivery across El Balyana city & villages",
    mapQuery: "مجلس المدينة البلينا سوهاج",
    phone: "01200609038",
    whatsapp: "01200609038",
    featured: false
  },
  {
    id: "balyana-delivery-line3",
    nameAr: "خدمة الطلبات السريعة (الخط 3)",
    nameEn: "Express Orders Service (Line 3)",
    cityKey: "sohag",
    cityNameAr: "سوهاج - البلينا",
    cityNameEn: "Sohag - El Balyana",
    addressAr: "خط الطلبات السريعة وحجز الوجبات العائلية",
    addressEn: "Express reservation & family platters order line",
    mapQuery: "مجلس المدينة البلينا سوهاج",
    phone: "01064720045",
    whatsapp: "01064720045",
    featured: false
  },
  {
    id: "balyana-takeaway",
    nameAr: "استلام شخصي من المطعم (تيك أواي / Takeaway)",
    nameEn: "Takeaway Pickup from Restaurant",
    cityKey: "sohag",
    cityNameAr: "سوهاج - البلينا",
    cityNameEn: "Sohag - El Balyana",
    addressAr: "تجهيز الطلب للاستلام الفوري من المطعم مباشرة",
    addressEn: "Direct pickup at restaurant counter - no delivery fee",
    mapQuery: "مجلس المدينة البلينا سوهاج",
    phone: "01010707662",
    whatsapp: "01010707662",
    featured: false
  }
];

// App State
let currentLang = localStorage.getItem("ebn_elwazeer_lang") || "ar";
let currentCategory = "all";
let searchQuery = "";
let selectedItemOptions = {}; // { itemId: selectedOptionKey }
let cart = JSON.parse(localStorage.getItem("ebn_elwazeer_cart") || "[]");
let selectedBranchId = "balyana-main";

// Initialize default option selections
MENU_DATA.forEach(item => {
  if (item.options && item.options.length > 0) {
    selectedItemOptions[item.id] = item.options[0].key;
  }
});

// Header Offset Synchronization for Mobile View
function updateHeaderOffset() {
  const header = document.querySelector(".site-header");
  const tabsContainer = document.querySelector(".category-tabs-container");
  if (header && tabsContainer && window.innerWidth <= 768) {
    const h = header.offsetHeight;
    tabsContainer.style.top = `${h}px`;
  }
}
window.addEventListener("resize", updateHeaderOffset);
window.addEventListener("orientationchange", updateHeaderOffset);

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  renderMenu();
  renderBranches();
  initSearch();
  initCategoryTabs();
  initCart();
  initModals();
  generateQRCode();
  updateUIStrings();
  populateBranchSelect();
  updateHeaderOffset();
});

// Language Setup
function initLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
  
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn) {
    langToggleBtn.addEventListener("click", () => {
      currentLang = currentLang === "ar" ? "en" : "ar";
      localStorage.setItem("ebn_elwazeer_lang", currentLang);
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
      updateUIStrings();
      populateBranchSelect();
      renderMenu();
      renderBranches();
      renderCartDrawer();
      updateCartBadge();
      updateHeaderOffset();
    });
  }
}

function updateUIStrings() {
  const dict = I18N[currentLang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else if (el.getAttribute("data-i18n-html") === "true" || dict[key].includes("<")) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  const langBtnText = document.getElementById("langBtnText");
  if (langBtnText) {
    langBtnText.textContent = currentLang === "ar" ? "English" : "عربي";
  }
}

// Render Menu
function renderMenu() {
  const menuContainer = document.getElementById("menuContainer");
  if (!menuContainer) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  const filtered = MENU_DATA.filter(item => {
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchCat;
    
    const nameMatch = isAr
      ? (item.nameAr.toLowerCase().includes(q) || item.descAr.toLowerCase().includes(q))
      : (item.nameEn.toLowerCase().includes(q) || item.descEn.toLowerCase().includes(q));
    
    return matchCat && nameMatch;
  });

  if (filtered.length === 0) {
    menuContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-size: 1.15rem; font-weight: 700; color: #ffffff;">
          ${isAr ? "عذراً، لم نجد أصناف مطابقة لبحثك!" : "No items found matching your search!"}
        </p>
        <button class="nav-btn primary" style="margin-top: 1rem;" onclick="resetSearch()">
          ${isAr ? "عرض كل الأصناف" : "View All Menu"}
        </button>
      </div>
    `;
    return;
  }

  menuContainer.innerHTML = filtered.map(item => {
    const itemName = isAr ? item.nameAr : item.nameEn;
    const itemDesc = isAr ? item.descAr : item.descEn;
    const currentOptKey = selectedItemOptions[item.id] || item.options[0].key;
    const selectedOption = item.options.find(o => o.key === currentOptKey) || item.options[0];
    const price = selectedOption.price;

    const badgesHtml = (item.tags || []).map(tag => {
      let badgeClass = "popular";
      let badgeText = dict.tagPopular;
      if (tag === "spicy") {
        badgeClass = "spicy";
        badgeText = dict.tagSpicy;
      } else if (tag === "special") {
        badgeClass = "special";
        badgeText = dict.tagSpecial;
      } else if (tag === "grilled") {
        badgeClass = "special";
        badgeText = dict.tagGrilled;
      } else if (tag === "crispy") {
        badgeClass = "popular";
        badgeText = dict.tagCrispy;
      }
      return `<span class="tag-badge ${badgeClass}">${badgeText}</span>`;
    }).join("");

    const optionsHtml = item.options.length > 1 ? `
      <div class="card-options-wrapper">
        <div class="options-segmented">
          ${item.options.map(opt => `
            <button 
              type="button"
              class="option-pill-btn ${opt.key === currentOptKey ? "selected" : ""}" 
              onclick="selectItemOption('${item.id}', '${opt.key}')"
            >
              <span class="opt-name">${isAr ? opt.labelAr : opt.labelEn}</span>
              <span class="opt-price">${opt.price} ${dict.egp}</span>
            </button>
          `).join("")}
        </div>
      </div>
    ` : "";

    return `
      <div class="menu-card" id="card-${item.id}">
        <div class="card-header-row">
          <div class="item-avatar-icon">${item.icon || "🍴"}</div>
          <div class="card-title-group">
            <div class="title-with-badge">
              <h4>${itemName}</h4>
              <div class="card-badges">${badgesHtml}</div>
            </div>
            <p class="card-desc">${itemDesc}</p>
          </div>
        </div>
        ${optionsHtml}
        <div class="card-footer">
          <div class="price-display">
            <span class="price-amount">${price}</span>
            <span class="price-currency">${dict.egp}</span>
          </div>
          <button class="add-cart-btn" onclick="addToCart('${item.id}')">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4" />
            </svg>
            <span>${dict.addToOrder}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// Option selector handler
window.selectItemOption = function(itemId, optKey) {
  selectedItemOptions[itemId] = optKey;
  renderMenu();
};

// Search handling
function initSearch() {
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderMenu();
    });
  }
}

window.resetSearch = function() {
  searchQuery = "";
  currentCategory = "all";
  const searchInput = document.getElementById("menuSearchInput");
  if (searchInput) searchInput.value = "";
  
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-category") === "all");
  });
  renderMenu();
};

// Category Tabs handling
function initCategoryTabs() {
  document.querySelectorAll(".category-tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });
}

window.selectCategory = function(catKey) {
  currentCategory = catKey;
  document.querySelectorAll(".category-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-category") === catKey);
  });
  renderMenu();
};

// Render Branches Section
function renderBranches() {
  const container = document.getElementById("branchesContainer");
  if (!container) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  container.innerHTML = BRANCHES_DATA.map(b => {
    const name = isAr ? b.nameAr : b.nameEn;
    const address = isAr ? b.addressAr : b.addressEn;
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.mapQuery)}`;

    return `
      <div class="branch-card ${b.featured ? "featured" : ""}">
        <div>
          <div class="branch-card-header">
            <h3>${name}</h3>
            ${b.featured ? `<span class="branch-badge">${dict.featuredBranchBadge}</span>` : ""}
          </div>
          <div class="branch-address">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="flex-shrink: 0; color: var(--primary-light);">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>${address}</span>
          </div>
        </div>
        <div class="branch-card-actions">
          <a href="${mapUrl}" target="_blank" rel="noopener noreferrer" class="branch-btn primary">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span>${dict.btnOpenMap}</span>
          </a>
          <a href="tel:${b.phone}" class="branch-btn outline">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>${b.phone}</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Populate Branch Select Dropdown
function populateBranchSelect() {
  const branchSelect = document.getElementById("orderBranchSelect");
  const displayLabel = document.getElementById("selectedBranchDisplay");
  if (!branchSelect) return;

  const isAr = currentLang === "ar";
  branchSelect.innerHTML = BRANCHES_DATA.map(b => `
    <option value="${isAr ? b.nameAr : b.nameEn}" ${b.id === selectedBranchId ? "selected" : ""}>
      ${isAr ? b.nameAr : b.nameEn}
    </option>
  `).join("");

  const activeBranch = BRANCHES_DATA.find(b => b.id === selectedBranchId) || BRANCHES_DATA[0];
  if (displayLabel) {
    displayLabel.textContent = isAr ? activeBranch.nameAr : activeBranch.nameEn;
  }
}

// Branch Picker Bottom Sheet Modal
function renderBranchPickerList(filter = "") {
  const listEl = document.getElementById("branchRadioList");
  if (!listEl) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];
  const query = filter.toLowerCase().trim();

  const filtered = BRANCHES_DATA.filter(b => {
    if (!query) return true;
    const name = (isAr ? b.nameAr : b.nameEn).toLowerCase();
    const addr = (isAr ? b.addressAr : b.addressEn).toLowerCase();
    const phone = b.phone || "";
    return name.includes(query) || addr.includes(query) || phone.includes(query);
  });

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <p>${dict.noBranchesFound || "لا توجد نتائج تطابق بحثك"}</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(b => {
    const isSelected = b.id === selectedBranchId;
    const name = isAr ? b.nameAr : b.nameEn;
    const address = isAr ? b.addressAr : b.addressEn;

    return `
      <div 
        class="branch-radio-item ${isSelected ? "selected" : ""}" 
        onclick="selectBranchOption('${b.id}')"
        role="radio"
        aria-checked="${isSelected}"
        tabindex="0"
        onkeydown="if(event.key==='Enter'||event.key===' ')selectBranchOption('${b.id}')"
      >
        <div class="branch-radio-circle" aria-hidden="true">
          <span class="radio-inner-dot"></span>
        </div>
        <div class="branch-radio-info">
          <div class="branch-radio-name-row">
            <span class="branch-radio-name">${name}</span>
            ${b.featured ? `<span class="branch-featured-badge">${dict.featuredBranchBadge}</span>` : ""}
          </div>
          <span class="branch-radio-meta">📍 ${address} - 📞 ${b.phone}</span>
        </div>
      </div>
    `;
  }).join("");
}

window.selectBranchOption = function(branchId) {
  selectedBranchId = branchId;
  const isAr = currentLang === "ar";
  const branch = BRANCHES_DATA.find(b => b.id === branchId);
  if (!branch) return;

  const branchSelect = document.getElementById("orderBranchSelect");
  if (branchSelect) {
    branchSelect.value = isAr ? branch.nameAr : branch.nameEn;
  }

  const displayLabel = document.getElementById("selectedBranchDisplay");
  if (displayLabel) {
    displayLabel.textContent = isAr ? branch.nameAr : branch.nameEn;
  }

  renderBranchPickerList();

  setTimeout(() => {
    closeModal("branchPickerModal");
  }, 140);
};

window.openBranchPicker = function() {
  const searchInput = document.getElementById("branchSearchInput");
  if (searchInput) searchInput.value = "";
  renderBranchPickerList();
  openModal("branchPickerModal");
};

window.filterBranchPickerList = function(text) {
  renderBranchPickerList(text);
};

// Cart System
function initCart() {
  updateCartBadge();
  renderCartDrawer();
}

window.addToCart = function(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const currentOptKey = selectedItemOptions[item.id] || item.options[0].key;
  const opt = item.options.find(o => o.key === currentOptKey) || item.options[0];

  const existingIndex = cart.findIndex(c => c.id === item.id && c.optKey === opt.key);
  if (existingIndex > -1) {
    cart[existingIndex].qty += 1;
  } else {
    cart.push({
      id: item.id,
      nameAr: item.nameAr,
      nameEn: item.nameEn,
      optKey: opt.key,
      optLabelAr: opt.labelAr,
      optLabelEn: opt.labelEn,
      price: opt.price,
      qty: 1
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  animateCartBtn();
};

window.changeCartQty = function(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    renderCartDrawer();
  }
};

function saveCart() {
  localStorage.setItem("ebn_elwazeer_cart", JSON.stringify(cart));
}

function updateCartBadge() {
  const count = cart.reduce((acc, curr) => acc + curr.qty, 0);
  const total = cart.reduce((acc, curr) => acc + (curr.price * curr.qty), 0);
  const currency = I18N[currentLang].egp;

  // Header badges
  document.querySelectorAll(".cart-count-badge").forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });

  // Mobile Bottom Bar Cart Count
  const mobCartCount = document.getElementById("mobileBarCartCount");
  if (mobCartCount) {
    mobCartCount.textContent = count > 0 ? `(${count})` : "";
  }

  // Floating Bottom Cart Bar
  const floatingBar = document.getElementById("floatingCartBar");
  const floatCountEl = document.getElementById("floatCartCount");
  const floatTotalEl = document.getElementById("floatCartTotal");

  if (floatingBar) {
    if (count > 0) {
      floatingBar.style.display = "flex";
      if (floatCountEl) floatCountEl.textContent = `${count}`;
      if (floatTotalEl) floatTotalEl.textContent = `${total} ${currency}`;
    } else {
      floatingBar.style.display = "none";
    }
  }
}

function animateCartBtn() {
  const btns = document.querySelectorAll(".cart-toggle-btn");
  btns.forEach(btn => {
    btn.style.transform = "scale(1.15)";
    setTimeout(() => {
      btn.style.transform = "";
    }, 200);
  });
}

function renderCartDrawer() {
  const itemsContainer = document.getElementById("cartItemsList");
  const totalAmountEl = document.getElementById("cartTotalAmount");
  if (!itemsContainer || !totalAmountEl) return;

  const isAr = currentLang === "ar";
  const dict = I18N[currentLang];

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛍️</div>
        <p style="font-weight: 600;">${dict.emptyCartMsg}</p>
      </div>
    `;
    totalAmountEl.textContent = `0 ${dict.egp}`;
    return;
  }

  let total = 0;
  itemsContainer.innerHTML = cart.map((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const name = isAr ? item.nameAr : item.nameEn;
    const optLabel = isAr ? item.optLabelAr : item.optLabelEn;

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <h5>${name}</h5>
          <span>${optLabel} | ${item.price} ${dict.egp}</span>
        </div>
        <div class="cart-item-actions">
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, -1)" aria-label="Decrease quantity">-</button>
          <span class="cart-qty-number">${item.qty}</span>
          <button class="cart-qty-btn" onclick="changeCartQty(${index}, 1)" aria-label="Increase quantity">+</button>
          <span class="cart-item-price">${itemTotal} ${dict.egp}</span>
        </div>
      </div>
    `;
  }).join("");

  totalAmountEl.textContent = `${total} ${dict.egp}`;
}

// Send Order via WhatsApp
window.sendOrderWhatsApp = function() {
  if (cart.length === 0) {
    alert(currentLang === "ar" ? "برجاء إضافة أصناف إلى طلبك أولاً!" : "Please add items to your cart first!");
    return;
  }

  const nameInput = document.getElementById("orderCustomerName");
  const phoneInput = document.getElementById("orderCustomerPhone");
  const branchSelect = document.getElementById("orderBranchSelect");
  const notesInput = document.getElementById("orderCustomerNotes");

  const customerName = nameInput ? nameInput.value.trim() : "";
  const customerPhone = phoneInput ? phoneInput.value.trim() : "";

  let branchObj = BRANCHES_DATA.find(b => b.id === selectedBranchId);
  if (!branchObj && branchSelect && branchSelect.value) {
    branchObj = BRANCHES_DATA.find(b => b.nameAr === branchSelect.value || b.nameEn === branchSelect.value);
  }
  if (!branchObj) {
    branchObj = BRANCHES_DATA[0];
  }

  const isAr = currentLang === "ar";
  const branchName = isAr ? branchObj.nameAr : branchObj.nameEn;
  const notes = notesInput ? notesInput.value.trim() : "";

  let total = 0;

  let msg = `*طلب جديد من مطاعم ابن الوزير - المنيو الإلكتروني* 👑\n`;
  msg += `------------------------------------\n`;
  if (customerName) msg += `👤 *العميل:* ${customerName}\n`;
  if (customerPhone) msg += `📞 *رقم العميل:* ${customerPhone}\n`;
  if (branchName) msg += `📍 *الفرع / خط الطلب:* ${branchName}\n`;
  msg += `------------------------------------\n`;
  msg += `📋 *تفاصيل الأصناف:*\n`;

  cart.forEach((item, i) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    const name = isAr ? item.nameAr : item.nameEn;
    const optLabel = isAr ? item.optLabelAr : item.optLabelEn;
    msg += `${i + 1}. ${name} (${optLabel}) × ${item.qty} = ${itemTotal} ج.م\n`;
  });

  msg += `------------------------------------\n`;
  msg += `💰 *الإجمالي المطلوب:* ${total} ج.م\n`;
  if (notes) msg += `📝 *ملاحظات:* ${notes}\n`;
  msg += `------------------------------------\n`;
  msg += `_تم إنشاء الطلب عبر موقع مطاعم ابن الوزير_`;

  const encodedMsg = encodeURIComponent(msg);
  const targetPhone = branchObj.whatsapp || branchObj.phone || WHATSAPP_ORDER_NUMBER;
  const targetNumber = targetPhone.replace(/\D/g, "").replace(/^0/, "20");
  const waUrl = `https://wa.me/${targetNumber}?text=${encodedMsg}`;

  window.open(waUrl, "_blank");
};

// QR Code Generator
function generateQRCode() {
  const qrContainer = document.getElementById("qrCanvas");
  const qrUrlEl = document.getElementById("qrUrlDisplay");
  if (!qrContainer) return;

  qrContainer.innerHTML = "";
  
  const targetUrl = window.location.href.startsWith("http") 
    ? window.location.href.split("#")[0] 
    : GITHUB_PAGES_URL;

  if (qrUrlEl) {
    qrUrlEl.textContent = targetUrl;
  }

  try {
    if (typeof QRCode !== "undefined") {
      new QRCode(qrContainer, {
        text: targetUrl,
        width: 190,
        height: 190,
        colorDark: "#0a110d",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    } else {
      const qrImg = document.createElement("img");
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(targetUrl)}`;
      qrImg.alt = "Ebn Elwazeer QR Code";
      qrImg.width = 190;
      qrImg.height = 190;
      qrContainer.appendChild(qrImg);
    }
  } catch (err) {
    console.error("QR Code Error:", err);
  }
}

// Download QR Code Image
window.downloadQRImage = function() {
  const qrContainer = document.getElementById("qrCanvas");
  if (!qrContainer) return;

  const canvas = qrContainer.querySelector("canvas");
  const img = qrContainer.querySelector("img");

  let url = "";
  if (canvas) {
    url = canvas.toDataURL("image/png");
  } else if (img) {
    url = img.src;
  }

  if (url) {
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ebn-Elwazeer-Menu-QR.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

// Copy Menu Link
window.copyMenuLink = function() {
  const targetUrl = window.location.href.startsWith("http") 
    ? window.location.href.split("#")[0] 
    : GITHUB_PAGES_URL;

  navigator.clipboard.writeText(targetUrl).then(() => {
    alert(I18N[currentLang].copiedAlert);
  }).catch(() => {
    prompt(I18N[currentLang].copyLink, targetUrl);
  });
};

// Flyer Lightbox Tabs
window.switchFlyerTab = function(tabName) {
  const coverTab = document.getElementById("flyerTabCover");
  const menuTab = document.getElementById("flyerTabMenu");
  const imgCover = document.getElementById("flyerImgCover");
  const imgMenu = document.getElementById("flyerImgMenu");

  if (tabName === "cover") {
    coverTab.classList.add("active");
    menuTab.classList.remove("active");
    imgCover.style.display = "block";
    imgMenu.style.display = "none";
  } else {
    coverTab.classList.remove("active");
    menuTab.classList.add("active");
    imgCover.style.display = "none";
    imgMenu.style.display = "block";
  }
};

// Modals Handling
function initModals() {
  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-open-modal");
      openModal(modalId);
    });
  });

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const modalId = btn.getAttribute("data-close-modal");
      closeModal(modalId);
    });
  });

  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m.id));
    }
  });
}

window.openModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (modalId === "cartModal") {
      renderCartDrawer();
    }
  }
};

window.closeModal = function(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("active");
    const activeModals = document.querySelectorAll(".modal-overlay.active");
    if (activeModals.length === 0) {
      document.body.style.overflow = "";
    }
  }
};
