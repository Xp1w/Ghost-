// بيانات نتائج البحث
const searchResults = {
    "القرصنة الأخلاقية": [
        {
            title: "مقدمة في القرصنة الأخلاقية - دليل شامل للمبتدئين",
            url: "https://www.ethicalhacking.com/intro",
            description: "تعلم أساسيات القرصنة الأخلاقية وأهم الأدوات المستخدمة في اختبار الاختراق وكيفية حماية الأنظمة من الهجمات الإلكترونية."
        },
        {
            title: "أفضل شهادات القرصنة الأخلاقية المعتمدة في 2023",
            url: "https://www.certifications.com/ethical-hacking",
            description: "دليل شامل لأهم الشهادات المهنية في مجال القرصنة الأخلاقية والأمن السيبراني التي تزيد من فرصك الوظيفية."
        }
    ],
    "تعلم البرمجة": [
        {
            title: "منصة تعلم البرمجة للمبتدئين - دروس مجانية",
            url: "https://www.codelearn.com/arabic",
            description: "موقع متخصص في تعليم البرمجة للمبتدئين بلغة عربية بسيطة، مع تمارين تفاعلية ومشاريع عملية لتنمية المهارات."
        },
        {
            title: "أفضل لغات البرمجة للتعلم في 2023 حسب طلب السوق",
            url: "https://www.programming-languages.com/top",
            description: "دليل مفصل لأهم لغات البرمجة المطلوبة في سوق العمل مع مقارنة بينها ونصائح للاختيار المناسب لمجال تخصصك."
        }
    ],
    "أمن المعلومات": [
        {
            title: "أساسيات أمن المعلومات وحماية البيانات",
            url: "https://www.cybersecurity.com/basics",
            description: "تعرف على المبادئ الأساسية لأمن المعلومات وكيفية حماية بياناتك الشخصية والشركات من التهديدات الإلكترونية المتزايدة."
        },
        {
            title: "أحدث تهديدات الأمن السيبراني في 2023 وكيفية الوقاية منها",
            url: "https://www.securitythreats.com/2023",
            description: "تحليل مفصل لأخطر التهديدات الإلكترونية التي ظهرت هذا العام مع نصائح عملية للوقاية منها وحماية أنظمتك."
        }
    ],
    "تصميم مواقع ويب": [
        {
            title: "تعلم تصميم مواقع الويب من الصفر إلى الاحتراف",
            url: "https://www.webdesign.com/learn",
            description: "دورة شاملة لتعلم تصميم وتطوير مواقع الويب باستخدام HTML, CSS, JavaScript وأطر عمل حديثة مثل React وVue.js."
        },
        {
            title: "أفضل أدوات تصميم الويب التي يجب على كل مطور معرفتها",
            url: "https://www.devtools.com/top-web",
            description: "قائمة بأهم الأدوات والبرامج التي تسهل عملية تصميم وتطوير الويب وتزيد من إنتاجية المطورين المحترفين."
        }
    ],
    "أنظمة التشغيل": [
        {
            title: "مقارنة بين أنظمة التشغيل: ويندوز، لينكس، وماك",
            url: "https://www.oscompare.com/main",
            description: "تحليل مفصل لمميزات وعيوب أنظمة التشغيل الرئيسية لمساعدتك في اختيار النظام المناسب لاحتياجاتك."
        },
        {
            title: "دليل تثبيت وتخصيص نظام أوبونتو لينكس للمبتدئين",
            url: "https://www.ubuntu-guide.com/arabic",
            description: "شرح مبسط خطوة بخطوة لكيفية تثبيت وتخصيص نظام أوبونتو لينكس حتى للمستخدمين الجدد في عالم Linux."
        }
    ]
};

// اقتراحات البحث التلقائي
const searchSuggestions = [
    "القرصنة الأخلاقية",
    "تعلم البرمجة",
    "أمن المعلومات",
    "تصميم مواقع ويب",
    "أنظمة التشغيل",
    "كورسات أونلاين مجانية",
    "تعلم الهكر الأخلاقي",
    "أفضل لغات البرمجة",
    "كيفية حماية البيانات",
    "تعلم Linux للمبتدئين",
    "شهادات IT معتمدة",
    "كورس تعليم JavaScript"
];

// عناصر DOM
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('webSearch');
const luckyButton = document.getElementById('luckySearch');
const autocompleteBox = document.getElementById('autocompleteBox');
const resultsContainer = document.getElementById('resultsContainer');
const searchResultsDiv = document.getElementById('searchResults');
const resultStats = document.getElementById('resultStats');
const themeToggle = document.getElementById('themeToggle');
const browserInfo = document.getElementById('browserInfo');

// التعرف على المتصفح
function detectBrowser() {
    const userAgent = navigator.userAgent;
    let browserName;
    
    if (userAgent.includes("Chrome") && !userAgent.includes("Edg")) {
        browserName = "Google Chrome";
    } else if (userAgent.includes("Firefox")) {
        browserName = "Mozilla Firefox";
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        browserName = "Apple Safari";
    } else if (userAgent.includes("Edg")) {
        browserName = "Microsoft Edge";
    } else {
        browserName = "متصفحك";
    }
    
    browserInfo.textContent = `أنت تستخدم ${browserName}`;
}

// تبديل الوضع (فاتح/داكن)
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// تحميل النسق المحفوظ
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        themeToggle.textContent = '🌙';
    }
}

// عرض الاقتراحات التلقائية
function showAutocompleteSuggestions() {
    const query = searchInput.value.toLowerCase();
    if (query.length === 0) {
        autocompleteBox.style.display = 'none';
        return;
    }
    
    const filteredSuggestions = searchSuggestions.filter(suggestion => 
        suggestion.toLowerCase().includes(query)
    );
    
    if (filteredSuggestions.length === 0) {
        autocompleteBox.style.display = 'none';
        return;
    }
    
    autocompleteBox.innerHTML = '';
    filteredSuggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerHTML = `
            <span class="autocomplete-icon">🔍</span>
            <span>${suggestion}</span>
        `;
        item.addEventListener('click', () => {
            searchInput.value = suggestion;
            autocompleteBox.style.display = 'none';
            performSearch(suggestion);
        });
        autocompleteBox.appendChild(item);
    });
    
    autocompleteBox.style.display = 'block';
}

// إخفاء الاقتراحات التلقائية
function hideAutocompleteSuggestions() {
    setTimeout(() => {
        autocompleteBox.style.display = 'none';
    }, 200);
}

// تنفيذ البحث
function performSearch(query) {
    if (!query.trim()) return;
    
    // إخفاء الاقتراحات التلقائية
    autocompleteBox.style.display = 'none';
    
    // إظهار منطقة النتائج
    resultsContainer.style.display = 'block';
    
    // مسح النتائج السابقة
    searchResultsDiv.innerHTML = '';
    
    // البحث عن النتائج المناسبة
    let foundResults = [];
    for (const [key, results] of Object.entries(searchResults)) {
        if (query.toLowerCase().includes(key.toLowerCase())) {
            foundResults = [...foundResults, ...results];
        }
    }
    
    // إذا لم توجد نتائج محددة، استخدم النتائج الافتراضية
    if (foundResults.length === 0) {
        foundResults = searchResults[Object.keys(searchResults)[0]];
    }
    
    // عرض إحصائيات النتائج
    const resultCount = foundResults.length;
    const randomTime = (Math.random() * 0.5 + 0.1).toFixed(2);
    resultStats.textContent = `تم العثور على حوالي ${resultCount} نتيجة (${randomTime} ثانية)`;
    
    // عرض النتائج
    foundResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        resultElement.innerHTML = `
            <a href="#" class="result-title">${result.title}</a>
            <div class="result-url">${result.url}</div>
            <div class="result-description">${result.description}</div>
        `;
        searchResultsDiv.appendChild(resultElement);
    });
    
    // التمرير إلى قسم النتائج
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

// البحث العشوائي (ضربة الحظ)
function performLuckySearch() {
    const randomIndex = Math.floor(Math.random() * searchSuggestions.length);
    const randomQuery = searchSuggestions[randomIndex];
    searchInput.value = randomQuery;
    performSearch(randomQuery);
}

// تهيئة الصفحة
function init() {
    // التعرف على المتصفح
    detectBrowser();
    
    // تحميل النسق المحفوظ
    loadSavedTheme();
    
    // إضافة مستمعي الأحداث
    searchInput.addEventListener('input', showAutocompleteSuggestions);
    searchInput.addEventListener('blur', hideAutocompleteSuggestions);
    searchInput.addEventListener('focus', showAutocompleteSuggestions);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    searchButton.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    luckyButton.addEventListener('click', performLuckySearch);
    
    themeToggle.addEventListener('click', toggleTheme);
    
    // تعطيل الروابط لمنع الانتقال إلى صفحات أخرى
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (link.classList.contains('result-title')) {
                alert('في موقع حقيقي، هذا الرابط سينقلك إلى نتيجة البحث. في هذا النموذج، تم تعطيل الرواق لأغراض العرض.');
            }
        });
    });
}

// تهيئة الصفحة عند التحميل
document.addEventListener('DOMContentLoaded', init);