const products = [
  {
    code: "C001",
    name: "חולצת פולו שחורה",
    category: "חולצות",
    description: "חולצת עבודה למיתוג צוותים ולעבודה יומיומית.",
    sizes: "",
    image: "assets/products/catalogue-webp/C001.webp",
    page: 3
  },
  {
    code: "C002",
    name: "חולצת עבודה כחולה נייבי",
    category: "חולצות",
    description: "חולצת עבודה נוחה במראה מקצועי.",
    sizes: "",
    image: "assets/products/catalogue-webp/C002.webp",
    page: 3
  },
  {
    code: "C003",
    name: "חולצת T שחורה ספורטיבית",
    category: "חולצות",
    description: "חולצת T לעבודה, צוותים ומיתוג עסקי.",
    sizes: "",
    image: "assets/products/catalogue-webp/C003.webp",
    page: 3
  },
  {
    code: "C004",
    name: "חולצה תרמית לבנה ארוכה",
    category: "חולצות",
    description: "חולצה ארוכה לשכבת בסיס ולעבודה בתנאי שטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/C004.webp",
    page: 3
  },
  {
    code: "C005",
    name: "חולצה שחורה ארוכה Columbia PFG",
    category: "חולצות",
    description: "חולצה ארוכה למראה מקצועי ולעבודה בחוץ.",
    sizes: "",
    image: "assets/products/catalogue-webp/C005.webp",
    page: 4
  },
  {
    code: "C006",
    name: "חולצת Trail Tech לבנה Columbia",
    category: "חולצות",
    description: "חולצת עבודה טכנית לצוותים ולשטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/C006.webp",
    page: 4
  },
  {
    code: "C007",
    name: "פליז שחור Half-Zip Columbia",
    category: "חולצות",
    description: "פליז חצי רוכסן לשכבת עבודה מחממת.",
    sizes: "",
    image: "assets/products/catalogue-webp/C007.webp",
    page: 4
  },
  {
    code: "C008",
    name: "סווטשירט נייבי קרו-נק",
    category: "חולצות",
    description: "סווטשירט עבודה לצוותים ולמיתוג.",
    sizes: "",
    image: "assets/products/catalogue-webp/C008.webp",
    page: 4
  },
  {
    code: "C009",
    name: "הודי אפור Full-Zip",
    category: "חולצות",
    description: "הודי עם רוכסן מלא לשימוש יומיומי.",
    sizes: "",
    image: "assets/products/catalogue-webp/C009.webp",
    page: 5
  },
  {
    code: "P001",
    name: "מכנס דגמ\"ח שחור-אפור",
    category: "מכנסי עבודה",
    description: "מכנס עבודה עמיד עם כיסים לשימוש מקצועי.",
    sizes: "",
    image: "assets/products/catalogue-webp/P001.webp",
    page: 7
  },
  {
    code: "P002",
    name: "מכנס דגמ\"ח שחור",
    category: "מכנסי עבודה",
    description: "מכנס עבודה שחור לצוותים ולשטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/P002.webp",
    page: 7
  },
  {
    code: "P003",
    name: "מכנס דגמ\"ח דו-טון זית-נייבי",
    category: "מכנסי עבודה",
    description: "מכנס עבודה דו-טון עם מראה טקטי.",
    sizes: "",
    image: "assets/products/catalogue-webp/P003.webp",
    page: 7
  },
  {
    code: "J001",
    name: "ג׳קט פליז שחור פרמיום",
    category: "מעילים וג׳קטים",
    description: "ג׳קט פליז שחור לצוותים ולעבודה בתנאי קור.",
    sizes: "",
    image: "assets/products/catalogue-webp/J001.webp",
    page: 9
  },
  {
    code: "J002",
    name: "ג׳קט סופטשל שחור טקטיקל",
    category: "מעילים וג׳קטים",
    description: "ג׳קט סופטשל טקטי למראה מקצועי ועמיד.",
    sizes: "",
    image: "assets/products/catalogue-webp/J002.webp",
    page: 9
  },
  {
    code: "J003",
    name: "ג׳קט Sherpa שחור",
    category: "מעילים וג׳קטים",
    description: "ג׳קט שרפה שחור לשכבת חימום לצוותים.",
    sizes: "",
    image: "assets/products/catalogue-webp/J003.webp",
    page: 9
  },
  {
    code: "V001",
    name: "סרבל עבודה שחור-אפור",
    category: "סרבלים",
    description: "סרבל עבודה מלא לתעשייה ולשטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/V001.webp",
    page: 11
  },
  {
    code: "V002",
    name: "סרבל עבודה צבעוני",
    category: "סרבלים",
    description: "סרבל עבודה בצבעוניות בולטת לצוותי שטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/V002.webp",
    page: 11
  },
  {
    code: "S001",
    name: "חלוק שף לבן קלאסי",
    category: "חלוקי שף",
    description: "חלוק שף לבן למטבחים, מסעדות וצוותי אירוח.",
    sizes: "",
    image: "assets/products/catalogue-webp/S001.webp",
    page: 13
  },
  {
    code: "SH001",
    name: "מגף עבודה שחור Chelsea",
    category: "נעליים",
    description: "מגף עבודה שחור בסגנון Chelsea.",
    sizes: "",
    image: "assets/products/catalogue-webp/SH001.webp",
    page: 15
  },
  {
    code: "SH002",
    name: "מגף עבודה חום Chelsea",
    category: "נעליים",
    description: "מגף עבודה חום לשימוש יומיומי ושטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/SH002.webp",
    page: 15
  },
  {
    code: "SH003",
    name: "נעל עבודה חומה גבוהה Rhino",
    category: "נעליים",
    description: "נעל עבודה גבוהה למראה קשוח ועמיד.",
    sizes: "",
    image: "assets/products/catalogue-webp/SH003.webp",
    page: 15
  },
  {
    code: "SH004",
    name: "נעל שף שחורה Pro Chef",
    category: "נעליים",
    description: "נעל שף שחורה לעבודה במטבח ובאירוח.",
    sizes: "",
    image: "assets/products/catalogue-webp/SH004.webp",
    page: 15
  },
  {
    code: "A001",
    name: "צווארון פליז מולטי-פונקציונלי",
    category: "אביזרים",
    description: "אביזר פליז מחמם לשטח ולעבודה בחוץ.",
    sizes: "",
    image: "assets/products/catalogue-webp/A001.webp",
    page: 17
  },
  {
    code: "A002",
    name: "אפוד בטיחות כתום Hi-Vis",
    category: "אביזרים",
    description: "אפוד בטיחות כתום לנראות גבוהה.",
    sizes: "",
    image: "assets/products/catalogue-webp/A002.webp",
    page: 17
  },
  {
    code: "A003",
    name: "אפוד בטיחות צהוב Hi-Vis Pro",
    category: "אביזרים",
    description: "אפוד בטיחות צהוב בולט לעבודה ולשטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/A003.webp",
    page: 17
  },
  {
    code: "A004",
    name: "בקבוק מים נירוסטה 750 מ״ל",
    category: "אביזרים",
    description: "בקבוק נירוסטה ממותג לצוותים ולעובדי שטח.",
    sizes: "",
    image: "assets/products/catalogue-webp/A004.webp",
    page: 17
  }
];

window.products = products;
