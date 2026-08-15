/**
 * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬
 * إجمالي المنتجات: 582 منتج
 */

const CATEGORIES_DATA = [
  {
    "id": "all",
    "name": "جميع المنتجات",
    "icon": "fas fa-border-all"
  },
  {
    "id": "egyptian",
    "name": "منتجات مصرية 🇪🇬",
    "icon": "fas fa-flag",
    "isSpecial": true
  },
  {
    "id": "noodles",
    "name": "النودلز والشعرية سريعة التحضير 🍜",
    "icon": "fas fa-bowl-food"
  },
  {
    "id": "groceries",
    "name": "مستلزمات الطبخ والبيت 🥫",
    "icon": "fas fa-box-open"
  },
  {
    "id": "frozen",
    "name": "المجمدات واللحوم 🍗",
    "icon": "fas fa-snowflake"
  },
  {
    "id": "snacks",
    "name": "شيبس ومقرمشات 🥔",
    "icon": "fas fa-cookie-bite"
  },
  {
    "id": "drinks",
    "name": "مشروبات وعصائر 🥤",
    "icon": "fas fa-wine-bottle"
  },
  {
    "id": "sweets",
    "name": "حلويات وشوكولاتة 🍫",
    "icon": "fas fa-candy-cane"
  },
  {
    "id": "dairy",
    "name": "ألبان وأجبان 🧀",
    "icon": "fas fa-cheese"
  },
  {
    "id": "energy",
    "name": "مشروبات الطاقة ⚡",
    "icon": "fas fa-bolt"
  }
];

const PRODUCTS_DATA = [
  {
    "id": "doritos_nacho_cheese_48g",
    "name": "دوريتوس بطعم جبنة الناتشو مقرمشات ذرة تورتيلا",
    "nameEn": "Doritos Nacho Cheese Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "48 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/doritos_nacho_cheese_48g.png",
    "description": "رقائق تورتيلا الذرة المقرمشة والشهية بنكهة جبنة الناتشو اللذيذة من دوريتوس.",
    "flavor": "جبنة الناتشو",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_flamin_hot_limon_48g",
    "name": "دوريتوس فليمينج هوت بالليمون مقرمشات ذرة حارة",
    "nameEn": "Doritos Flamin' Hot Limon Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "48 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/doritos_flamin_hot_limon_48g.png",
    "description": "رقائق تورتيلا مقرمشة وحارة بنكهة الفلفل الحار والليمون المنعشة من دوريتوس.",
    "flavor": "فليمينج هوت ليمون (حار وليمون)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_cool_ranch_48g",
    "name": "دوريتوس بطعم كول رانش مقرمشات ذرة",
    "nameEn": "Doritos Cool Ranch Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "48 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/doritos_cool_ranch_48g.png",
    "description": "مقرمشات ذرة تورتيلا بالنكهة الغنية والشهيرة للرانش البارد من دوريتوس.",
    "flavor": "كول رانش",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_sweet_chili_red_48g",
    "name": "دوريتوس بطعم الفلفل الحلو مقرمشات ذرة تورتيلا",
    "nameEn": "Doritos Sweet Chili Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "48 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/doritos_sweet_chili_red_48g.png",
    "description": "رقائق دوريتوس تورتيلا الشهية بمزيج النكهة الحلوة والحارة للفلفل الحلو.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_chili_lemon_10egp",
    "name": "شيبسي بطاطس مقرمشة بطعم الشطة الحارة والليمون 10 جنيه",
    "nameEn": "Chipsy Hot Chili & Lemon Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "حجم كبير (10 جنيه)",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/chipsy_chili_lemon_10egp.png",
    "description": "رقائق بطاطس طبيعية 100% بنكهة الشطة الحارة والليمون اللاذع من شيبسي.",
    "flavor": "شطة حارة وليمون",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_salt_vinegar_15egp",
    "name": "شيبسي بطاطس مقرمشة بطعم الخل والملح 15 جنيه",
    "nameEn": "Chipsy Salt & Vinegar Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "حجم عائلي (15 جنيه)",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/chipsy_salt_vinegar_15egp.png",
    "description": "رقائق بطاطس مقرمشة طبيعية بنكهة الخل والملح الكلاسيكية المنعشة من شيبسي.",
    "flavor": "خل وملح",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_seasoned_cheese_10egp",
    "name": "شيبسي بطاطس مقرمشة بطعم الجبنة المتبلة 10 جنيه",
    "nameEn": "Chipsy Seasoned Cheese Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "حجم وسط (10 جنيه)",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/chipsy_seasoned_cheese_10egp.png",
    "description": "شيبسي بطاطس مقرمشة بطعم الجبنة المتبلة الغنية والشهية بالفرحة بتعدي.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_sweet_chili",
    "name": "شيبسي بطاطس مقرمشة بطعم الفلفل الحلو",
    "nameEn": "Chipsy Sweet Chili Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "كيس قياسي",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/chipsy_sweet_chili.png",
    "description": "رقائق بطاطس مقرمشة بنكهة الفلفل الحلو المميزة والشهية من شيبسي.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_salted_classic",
    "name": "شيبسي بطاطس مقرمشة بالملح الأصلي",
    "nameEn": "Chipsy Salted Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "كيس قياسي",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/chipsy_salted_classic.png",
    "description": "رقائق بطاطس طبيعية 100% مقلية ومقرمشة مع رشة الملح الأصلية من شيبسي.",
    "flavor": "ملح",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_tomato_10egp",
    "name": "شيبسي بطاطس مقرمشة بطعم الطماطم 10 جنيه",
    "nameEn": "Chipsy Tomato Flavored Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "حجم كبير (10 جنيه)",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/chipsy_tomato_10egp.png",
    "description": "رقائق بطاطس مقرمشة بطعم الطماطم المتبلة اللذيذة من شيبسي كبير اللمة.",
    "flavor": "طماطم",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_cool_ranch_sour_cream_95g",
    "name": "دوريتوس بطعم كول رانش بالكريمة والأعشاب 95 جم",
    "nameEn": "Doritos Cool Ranch Sour Cream & Herb Tortilla Chips 95g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "95 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/doritos_cool_ranch_sour_cream_95g.png",
    "description": "رقائق ذرة تورتيلا دوريتوس كول رانش الشهية بمذاق الكريمة الحامضة والأعشاب بحجم 95 جم.",
    "flavor": "كول رانش (كريمة وأعشاب)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_sweet_chili_pepper_blue",
    "name": "دوريتوس مقرمشات ذرة بطعم الفلفل الحلو",
    "nameEn": "Doritos Sweet Chili Pepper Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "حجم كبير",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/doritos_sweet_chili_pepper_blue.png",
    "description": "مقرمشات ذرة تورتيلا مثلثة الشكل بنكهة الفلفل الحلو المميزة من دوريتوس.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "doritos_flamin_hot_nacho",
    "name": "دوريتوس فليمينج هوت ناتشو حار نار",
    "nameEn": "Doritos Flamin' Hot Nacho Tortilla Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دوريتوس (Doritos)",
    "weight": "حجم كبير",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/doritos_flamin_hot_nacho.png",
    "description": "مقرمشات ذرة دوريتوس بنكهة جبنة الناتشو مع حرارة فليمينج هوت الفائقة.",
    "flavor": "فليمينج هوت ناتشو",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 48 جم (10 ج.م)",
        "weight": "48 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو 100 جم (20 ج.م)",
        "weight": "100 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "chipsy_kebab_charcoal_10egp",
    "name": "شيبسي بطاطس مقرمشة بطعم كباب عالفحم 10 جنيه",
    "nameEn": "Chipsy Grilled Kebab Potato Chips",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "حجم وسط (10 جنيه)",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/chipsy_kebab_charcoal_10egp.png",
    "description": "رقائق بطاطس مقرمشة بنكهة الكباب المشوي على الفحم والبهارات الشرقية من شيبسي.",
    "flavor": "كباب عالفحم",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "balance_protein_crackers_sweet_lemon_70g",
    "name": "مقرمشات بروتين بالانس بطعم الليمون الحلو 70 جم",
    "nameEn": "Balance Protein Crackers Sweet Lemon 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/balance_protein_crackers_sweet_lemon_70g.png",
    "description": "مقرمشات بروتين مخبوزة في الفرن بطعم الليمون الحلو غنية بالألياف وتحتوي على 15 جم بروتين من بالانس.",
    "flavor": "ليمون حلو (Sweet Lemon)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_puffs_cheese_70g",
    "name": "سناكس بافز بروتين بالانس بطعم الجبنة 70 جم",
    "nameEn": "Balance Protein Puffs Cheese 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/balance_protein_puffs_cheese_70g.png",
    "description": "بافز مقرمشة غنية بالبروتين (15 جم) ومخبوزة في الفرن بطعم الجبنة اللذيذ من بالانس.",
    "flavor": "جبنة (Cheese)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_puffs_sweet_heat_70g",
    "name": "سناكس بافز بروتين بالانس بطعم حار حلو 70 جم",
    "nameEn": "Balance Protein Puffs Sweet Heat 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/balance_protein_puffs_sweet_heat_70g.png",
    "description": "بافز بروتين مقرمشة ومخبوزة في الفرن بنكهة سويت شيلى الحارة والحلوة المميزة من بالانس.",
    "flavor": "حار حلو (Sweet Heat)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_crackers_honey_butter_70g",
    "name": "مقرمشات بروتين بالانس بطعم العسل والزبدة 70 جم",
    "nameEn": "Balance Protein Crackers Honey Butter 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/balance_protein_crackers_honey_butter_70g.png",
    "description": "مقرمشات بروتين مخبوزة بطعم العسل الطبيعي والزبدة اللذيذة غنية بالألياف من بالانس.",
    "flavor": "عسل وزبدة (Honey Butter)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_crackers_sweet_chili_70g",
    "name": "مقرمشات بروتين بالانس بطعم الفلفل الحلو 70 جم",
    "nameEn": "Balance Protein Crackers Sweet Chili 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/balance_protein_crackers_sweet_chili_70g.png",
    "description": "رقائق ومقرمشات بروتين صحية مخبوزة بنكهة الفلفل الحلو والطماطم من بالانس.",
    "flavor": "فلفل حلو (Sweet Chili)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_crackers_sour_cream_onion_70g",
    "name": "مقرمشات بروتين بالانس بالكريمة الحامضة والبصل 70 جم",
    "nameEn": "Balance Protein Crackers Sour Cream & Onion 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/balance_protein_crackers_sour_cream_onion_70g.png",
    "description": "مقرمشات بروتين صحية وخفيفة مخبوزة بنكهة الكريمة الحامضة والبصل الأخضر من بالانس.",
    "flavor": "كريمة حامضة وبصل (Sour Cream & Onion)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "fury_energy_drink_gold_250ml",
    "name": "مشروب طاقة فيوري أوريجينال جولد 250 مل",
    "nameEn": "Fury Energy Drink Original Gold 250ml",
    "category": "energy",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فيوري (Fury)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/fury_energy_drink_gold_250ml.png",
    "description": "مشروب الطاقة المنعش فيوري يمنحك النشاط والحيوية والتركيز طوال اليوم.",
    "flavor": "أوريجينال (طاقة)",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "pepsi_can_330ml",
    "name": "بيبسي كانز مشروب غازي 330 مل",
    "nameEn": "Pepsi Cola Can 330ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/pepsi_can_330ml.png",
    "description": "مشروب بيبسي الغازي المنعش بطعم الكولا الأصلي والمميز في كانز 330 مل.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "330 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "coca_cola_can_330ml",
    "name": "كوكاكولا كانز مشروب غازي أصلي 330 مل",
    "nameEn": "Coca-Cola Can Original Taste 330ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكاكولا (Coca-Cola)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/coca_cola_can_330ml.png",
    "description": "مشروب كوكاكولا الغازي بطعمه الأصلي والفريد والانتعاش الفائق 330 مل.",
    "flavor": "كولا أصلية",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "330 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "coca_cola_bottle_1l",
    "name": "كوكاكولا مشروب غازي زجاجة بلاستيك 1 لتر",
    "nameEn": "Coca-Cola Original Taste 1L Bottle",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكاكولا (Coca-Cola)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/coca_cola_bottle_1l.png",
    "description": "كوكاكولا الطعم الأصلي المنعش بحجم 1 لتر مناسب للوجبات والمشاركة العائلية.",
    "flavor": "كولا أصلية",
    "sizes": [
      {
        "name": "زجاجة عائلية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "coca_cola_bottle_2_5l",
    "name": "كوكاكولا مشروب غازي زجاجة عائلية 2.5 لتر (عرض زيادة مجانية)",
    "nameEn": "Coca-Cola Original Taste 2.5L Bottle",
    "category": "drinks",
    "price": 38,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكاكولا (Coca-Cola)",
    "weight": "2.5 لتر",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/coca_cola_bottle_2_5l.png",
    "description": "زجاجة كوكاكولا عائلية كبيرة 2.5 لتر مع عرض نصف لتر زيادة لتجمعات العائلة والأصدقاء.",
    "flavor": "كولا أصلية",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "2.5 لتر",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "pepsi_cola_bottle_1l",
    "name": "مشروب غازي بيبسي كولا زجاجة بلاستيك 1 لتر",
    "nameEn": "Pepsi Cola Carbonated Soft Drink Plastic Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/pepsi_cola_bottle_1l.png",
    "description": "مشروب غازي منعش بنكهة الكولا الأصلية من بيبسي، يقدم مثلجاً لأفضل انتعاش.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "pepsi_cola_bottle_2l",
    "name": "مشروب غازي بيبسي كولا زجاجة عائلية 2 لتر",
    "nameEn": "Pepsi Cola Carbonated Soft Drink Family Bottle 2L",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "2 لتر",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/pepsi_cola_bottle_2l.png",
    "description": "مشروب بيبسي كولا الغازي بحجم عائلي 2 لتر، مثالي للمشاركات والعزومات العائلية.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "2 لتر",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "pepsi_cola_bottle_330ml",
    "name": "مشروب غازي بيبسي كولا زجاجة بلاستيك 330 مل",
    "nameEn": "Pepsi Cola Soft Drink Plastic Bottle 330ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/pepsi_cola_bottle_330ml.png",
    "description": "مشروب بيبسي كولا المنعش بطعمه الأصلي بحجم فردي عملي ومناسب أثناء التنقل.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "330 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "diet_pepsi_can_250ml",
    "name": "مشروب غازي دايت بيبسي كولا كانز 250 مل",
    "nameEn": "Diet Pepsi Cola Sleek Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/diet_pepsi_can_250ml.png",
    "description": "مشروب دايت بيبسي الغازي خالي من السكر وبسعرات حرارية شبه منعدمة لانتعاش بدون قلق.",
    "flavor": "كولا دايت خالي من السكر",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "diet_pepsi_bottle_950ml",
    "name": "مشروب غازي دايت بيبسي كولا زجاجة 0.95 لتر",
    "nameEn": "Diet Pepsi Cola Soft Drink Bottle 0.95L",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "0.95 لتر",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/diet_pepsi_bottle_950ml.png",
    "description": "مشروب دايت بيبسي كولا الخالي من السكر في عبوة اقتصادية سعة 0.95 لتر.",
    "flavor": "كولا دايت",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "0.95 لتر",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "7up_lemon_can_250ml",
    "name": "مشروب غازي سفن أب ليمون كانز 250 مل",
    "nameEn": "7Up Lemon Flavour Soft Drink Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سفن أب (7Up)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/7up_lemon_can_250ml.png",
    "description": "مشروب غازي منعش بنكهة الليمون الطبيعي والليم المنعش، يقدم مثلجاً لأقصى درجات الانتعاش.",
    "flavor": "ليمون وليمون حامض",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "7up_lemon_bottle_1l",
    "name": "مشروب غازي سفن أب زجاجة بلاستيك 1 لتر",
    "nameEn": "7Up Lemon Flavour Soft Drink Plastic Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سفن أب (7Up)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/7up_lemon_bottle_1l.png",
    "description": "مشروب سفن أب الغازي المنعش بنكهة الليمون الصافية في زجاجة بلاستيكية سعة 1 لتر.",
    "flavor": "ليمون",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "7up_zero_sugar_bottle_1250ml",
    "name": "مشروب غازي سفن أب زيرو سكر خالي من السعرات 1.25 لتر",
    "nameEn": "7Up Zero Sugar Soft Drink Bottle 1.25L",
    "category": "drinks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سفن أب (7Up)",
    "weight": "1.25 لتر",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/7up_zero_sugar_bottle_1250ml.png",
    "description": "مشروب سفن أب زيرو سكر المنعش بطعم الليمون الصافي وبدون أي سعرات حرارية 1.25 لتر.",
    "flavor": "ليمون زيرو سكر",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "1.25 لتر",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "7up_lemon_glass_bottle_250ml",
    "name": "مشروب غازي سفن أب زجاجة زجاج 250 مل",
    "nameEn": "7Up Lemon Soft Drink Glass Bottle 250ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سفن أب (7Up)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/7up_lemon_glass_bottle_250ml.png",
    "description": "مشروب غازي سفن أب المنعش بنكهة الليمون في زجاجة زجاجية كلاسيكية لأعلى درجات الانتعاش.",
    "flavor": "ليمون",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "pepsi_cola_glass_bottle_250ml",
    "name": "مشروب غازي بيبسي كولا زجاجة زجاج 250 مل",
    "nameEn": "Pepsi Cola Soft Drink Glass Bottle 250ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيبسي (Pepsi)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/pepsi_cola_glass_bottle_250ml.png",
    "description": "مشروب بيبسي كولا الغازي المنعش في زجاجة زجاجية كلاسيكية للاستمتاع بالطعم الأصلي الفريد.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "sting_red_rush_energy_drink_275ml",
    "name": "مشروب طاقة ستينج أحمر نكهة الفراولة 275 مل",
    "nameEn": "Sting Red Rush Strawberry Energy Drink 275ml",
    "category": "energy",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ستينج (Sting)",
    "weight": "275 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/sting_red_rush_energy_drink_275ml.png",
    "description": "مشروب طاقة ستينج ريد رش الأحمر المنعش بنكهة التوت والفراولة لتعزيز النشاط والحيوية.",
    "flavor": "فراولة وطاقة",
    "sizes": [
      {
        "name": "عبوة زجاجية (10 ج.م)",
        "weight": "275 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "spiro_spathis_lemon_bottle_330ml",
    "name": "مشروب غازي سبيرو سباتس ليمون زجاجة بلاستيك 330 مل",
    "nameEn": "Spiro Spathis Lemon Soft Drink Plastic Bottle 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/spiro_spathis_lemon_bottle_330ml.png",
    "description": "مشروب سبيرو سباتس الغازي المصري الأصيل بنكهة الليمون المنعشة في عبوة بلاستيكية 330 مل.",
    "flavor": "ليمون",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_lemon_bottle_1l",
    "name": "مشروب غازي سبيرو سباتس ليمون 1 لتر",
    "nameEn": "Spiro Spathis Lemon Soft Drink 1L",
    "category": "drinks",
    "price": 22,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/spiro_spathis_lemon_bottle_1l.png",
    "description": "مشروب سبيرو سباتس الغازي المصري الأصلي بنكهة الليمون بحجم عائلي كبير 1 لتر.",
    "flavor": "ليمون",
    "sizes": [
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22,
        "selected": true
      },
      {
        "name": "زجاجة 330 مل زجاج (10 ج.م)",
        "weight": "330 مل",
        "price": 10
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10
      }
    ]
  },
  {
    "id": "spiro_spathis_kiwi_bottle_330ml",
    "name": "مشروب غازي سبيرو سباتس بنكهة الكيوي 330 مل",
    "nameEn": "Spiro Spathis Kiwi Flavored Soft Drink 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/spiro_spathis_kiwi_bottle_330ml.png",
    "description": "مشروب سبيرو سباتس الغازي المصري المنعش بنكهة الكيوي اللذيذة والفريدة 330 مل.",
    "flavor": "كيوي",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_pineapple_bottle_330ml",
    "name": "مشروب غازي سبيرو سباتس بنكهة الأناناس 330 مل",
    "nameEn": "Spiro Spathis Pineapple Flavored Soft Drink 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/spiro_spathis_pineapple_bottle_330ml.png",
    "description": "مشروب سبيرو سباتس الغازي المصري المميز بنكهة الأناناس الاستوائية المنعشة 330 مل.",
    "flavor": "أناناس",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_grape_bottle_330ml",
    "name": "مشروب غازي سبيرو سباتس بنكهة العنب 330 مل",
    "nameEn": "Spiro Spathis Grape Flavored Soft Drink 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/spiro_spathis_grape_bottle_330ml.png",
    "description": "مشروب سبيرو سباتس الغازي بطعم العنب الأحمر اللذيذ والمنعش 330 مل.",
    "flavor": "عنب",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_grape_bottle_clear_330ml",
    "name": "مشروب غازي سبيرو سباتس بنكهة العنب زجاجة بلاستيك 330 مل",
    "nameEn": "Spiro Spathis Grape Soft Drink Plastic Bottle 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/spiro_spathis_grape_bottle_clear_330ml.png",
    "description": "مشروب سبيرو سباتس الغازي بنكهة العنب الطبيعي المنعش، عبوة بلاستيكية 330 مل.",
    "flavor": "عنب",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_classic_glass_bottle_275ml",
    "name": "مشروب غازي سبيرو سباتس زجاجة زجاج أصلية 275 مل",
    "nameEn": "Spiro Spathis Original Glass Bottle 275ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "275 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/spiro_spathis_classic_glass_bottle_275ml.png",
    "description": "مشروب سبيرو سباتس الغازي المصري الكلاسيكي في زجاجته الزجاجية التراثية الشهيرة 275 مل.",
    "flavor": "صودا كلاسيك",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "spiro_spathis_cola_bottle_330ml",
    "name": "مشروب غازي سبيرو سباتس كولا 330 مل",
    "nameEn": "Spiro Spathis Cola Soft Drink 330ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبيرو سباتس (Spiro Spathis)",
    "weight": "330 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/spiro_spathis_cola_bottle_330ml.png",
    "description": "مشروب سبيرو سباتس كولا المصري المنعش بطعم الكولا الأصلي المميز 330 مل.",
    "flavor": "كولا",
    "sizes": [
      {
        "name": "زجاجة زجاج 330 مل (10 ج.م)",
        "weight": "330 مل زجاج",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل كان",
        "price": 10
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل كان",
        "price": 12
      },
      {
        "name": "زجاجة عائلية 1 لتر (22 ج.م)",
        "weight": "1 لتر",
        "price": 22
      }
    ]
  },
  {
    "id": "v_super_soda_diet_cola_can_300ml",
    "name": "مشروب غازي في سوبر صودا دايت كولا خالي من الكافيين 300 مل",
    "nameEn": "V Super Soda Diet Cola Caffeine Free 300ml Can",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في سوبر صودا (V Super Soda)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/v_super_soda_diet_cola_can_300ml.png",
    "description": "مشروب دايت كولا غازي من في سوبر صودا بنكهات طبيعية 100% وخالي تماماً من الكافيين 300 مل.",
    "flavor": "دايت كولا بدون كافيين",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "300 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "v_super_soda_cola_can_300ml",
    "name": "مشروب غازي في سوبر صودا كولا خالي من الكافيين 300 مل",
    "nameEn": "V Super Soda Cola Caffeine Free 300ml Can",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في سوبر صودا (V Super Soda)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/v_super_soda_cola_can_300ml.png",
    "description": "مشروب كولا غازي منعش من في سوبر صودا بنكهات طبيعية 100% وبدون كافيين 300 مل.",
    "flavor": "كولا بدون كافيين",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "300 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "v_super_soda_lemon_lime_can_300ml",
    "name": "مشروب غازي في سوبر صودا ليمون ولايم خالي من الكافيين 300 مل",
    "nameEn": "V Super Soda Lemon-Lime Caffeine Free 300ml Can",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في سوبر صودا (V Super Soda)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/v_super_soda_lemon_lime_can_300ml.png",
    "description": "مشروب غازي بنكهة الليمون واللايم المنعشة من في سوبر صودا بنكهات طبيعية 100% وخالي من الكافيين 300 مل.",
    "flavor": "ليمون ولايم",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "300 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "v7_pink_lemonade_vitamin_drink_can_300ml",
    "name": "مشروب في 7 فيتامين فوار بنكهة بينك ليموناضة وعسل 300 مل",
    "nameEn": "V7 Vitamin Sparkling Drink Pink Lemonade Summer Edition 300ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في 7 (V7)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/v7_pink_lemonade_vitamin_drink_can_300ml.png",
    "description": "مشروب فوار مدعم بالفيتامينات B6 و B12 والعسل الطبيعي بنكهة بينك ليموناضة المنعشة لدعم المناعة.",
    "flavor": "بينك ليموناضة وعسل",
    "sizes": [
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل",
        "price": 12
      }
    ]
  },
  {
    "id": "v7_pinacolada_vitamin_drink_can_300ml",
    "name": "مشروب في 7 فيتامين فوار بنكهة بينا كولادا جوز هند وأناناس 300 مل",
    "nameEn": "V7 Vitamin Sparkling Drink Pinacolada 300ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في 7 (V7)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/v7_pinacolada_vitamin_drink_can_300ml.png",
    "description": "مشروب فوار منعش من في 7 بنكهة البينا كولادا الاستوائية ومدعم بالفيتامينات لتعزيز المناعة والتركيز 300 مل.",
    "flavor": "بينا كولادا",
    "sizes": [
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل",
        "price": 12
      }
    ]
  },
  {
    "id": "v7_apple_flavored_malt_can_300ml",
    "name": "مشروب شعير في 7 بنكهة التفاح 300 مل",
    "nameEn": "V7 Flavored Malt Drink Apple 300ml Can",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في 7 (V7)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/v7_apple_flavored_malt_can_300ml.png",
    "description": "مشروب شعير فوار منعش من في 7 بنكهة التفاح الطبيعي 100% عبوة 300 مل.",
    "flavor": "تفاح وشعير",
    "sizes": [
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل",
        "price": 12
      }
    ]
  },
  {
    "id": "v7_blueberry_sparkling_drink_250ml",
    "name": "مشروب فوار في سفن بنكهة التوت الأزرق 250 مل",
    "nameEn": "V7 Vitamin Sparkling Drink Blueberry 250ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في سفن (V7)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/v7_blueberry_sparkling_drink_250ml.png",
    "description": "مشروب فيتامينات فوار ومنعش بنكهة التوت الأزرق الطبيعي لتعزيز المناعة ومضادات الأكسدة.",
    "flavor": "توت أزرق",
    "sizes": [
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل",
        "price": 12
      }
    ]
  },
  {
    "id": "fanta_orange_can_320ml",
    "name": "مشروب غازي فانتا برتقال كانز 320 مل",
    "nameEn": "Fanta Orange Can 320ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فانتا (Fanta)",
    "weight": "320 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/fanta_orange_can_320ml.png",
    "description": "مشروب غازي منعش بمذاق البرتقال اللذيذ والفوار.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "320 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "fanta_orange_bottle_1l",
    "name": "مشروب غازي فانتا برتقال زجاجة بلاستيك 1 لتر",
    "nameEn": "Fanta Orange Pet Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فانتا (Fanta)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/fanta_orange_bottle_1l.png",
    "description": "مشروب غازي منعش بطعم البرتقال المميز في عبوة عائلية عملية 1 لتر.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "fanta_red_apple_can_320ml",
    "name": "مشروب غازي فانتا تفاح أحمر كانز 320 مل",
    "nameEn": "Fanta Red Apple Can 320ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فانتا (Fanta)",
    "weight": "320 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/fanta_red_apple_can_320ml.png",
    "description": "مشروب غازي منعش بنكهة التفاح الأحمر اللذيذة.",
    "flavor": "تفاح أحمر",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "320 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "mirinda_orange_can_250ml",
    "name": "مشروب غازي ميرندا برتقال كانز 250 مل",
    "nameEn": "Mirinda Orange Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميرندا (Mirinda)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/mirinda_orange_can_250ml.png",
    "description": "مشروب غازي بمذاق البرتقال الغني والمنعش في كانز 250 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "mirinda_orange_bottle_1l",
    "name": "مشروب غازي ميرندا برتقال زجاجة بلاستيك 1 لتر",
    "nameEn": "Mirinda Orange Pet Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميرندا (Mirinda)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/mirinda_orange_bottle_1l.png",
    "description": "مشروب غازي منعش بمذاق البرتقال في زجاجة عائلية 1 لتر.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "mirinda_green_apple_bottle_1l",
    "name": "مشروب غازي ميرندا تفاح أخضر زجاجة 1 لتر",
    "nameEn": "Mirinda Green Apple Pet Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميرندا (Mirinda)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/mirinda_green_apple_bottle_1l.png",
    "description": "مشروب غازي منعش ومميز بنكهة التفاح الأخضر المنعش.",
    "flavor": "تفاح أخضر",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_gold_pineapple_can_250ml",
    "name": "مشروب غازي شويبس جولد أناناس كانز 250 مل",
    "nameEn": "Schweppes Gold Pineapple Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/schweppes_gold_pineapple_can_250ml.png",
    "description": "مشروب غازي فاخر بنكهة الأناناس المنعشة ولمسة الشعير المميزة من شويبس جولد.",
    "flavor": "أناناس شعير",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_gold_pineapple_bottle_1l",
    "name": "مشروب غازي شويبس جولد أناناس زجاجة 1 لتر",
    "nameEn": "Schweppes Gold Pineapple Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/schweppes_gold_pineapple_bottle_1l.png",
    "description": "مشروب غازي منعش بنكهة الأناناس الفاخرة من شويبس جولد في عبوة 1 لتر.",
    "flavor": "أناناس شعير",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_pomegranate_bottle_1_75l",
    "name": "مشروب غازي شويبس رمان زجاجة 1.75 لتر",
    "nameEn": "Schweppes Pomegranate Bottle 1.75L",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "1.75 لتر",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/schweppes_pomegranate_bottle_1_75l.png",
    "description": "مشروب غازي فاخر ومنعش بنكهة الرمان اللذيذة في عبوة عائلية كبيرة 1.75 لتر.",
    "flavor": "رمان",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "1.75 لتر",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_gold_peach_can_250ml",
    "name": "مشروب غازي شويبس جولد خوخ كانز 250 مل",
    "nameEn": "Schweppes Gold Peach Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/schweppes_gold_peach_can_250ml.png",
    "description": "مشروب غازي فاخر بنكهة الخوخ اللذيذة ولمسة الشعير المنعشة من شويبس جولد.",
    "flavor": "خوخ شعير",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_gold_pineapple_bottle_1_5l",
    "name": "مشروب غازي شويبس جولد أناناس زجاجة 1.5 لتر",
    "nameEn": "Schweppes Gold Pineapple Bottle 1.5L",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "1.5 لتر",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/schweppes_gold_pineapple_bottle_1_5l.png",
    "description": "مشروب غازي بنكهة الأناناس المنعشة ولمسة الشعير في عبوة عائلية كبيرة 1.5 لتر.",
    "flavor": "أناناس شعير",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "1.5 لتر",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_pomegranate_bottle_300ml",
    "name": "مشروب غازي شويبس رمان زجاجة 300 مل",
    "nameEn": "Schweppes Pomegranate Bottle 300ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/schweppes_pomegranate_bottle_300ml.png",
    "description": "مشروب غازي فاخر بطعم الرمان المنعش مع قطع لب الفاكهة في زجاجة فردية عملية.",
    "flavor": "رمان",
    "sizes": [
      {
        "name": "زجاجة صغيرة (10 ج.م)",
        "weight": "300 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_pomegranate_bottle_1l",
    "name": "مشروب غازي شويبس رمان زجاجة 1 لتر",
    "nameEn": "Schweppes Pomegranate Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/schweppes_pomegranate_bottle_1l.png",
    "description": "مشروب غازي مميز غني بنكهة الرمان اللذيذة وقطع لب الفاكهة الطبيعية.",
    "flavor": "رمان",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_lemon_mint_can_250ml",
    "name": "مشروب غازي شويبس ليمون ونعناع كانز 250 مل",
    "nameEn": "Schweppes Lemon Mint Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/schweppes_lemon_mint_can_250ml.png",
    "description": "مشروب غازي فوار منعش بمزيج الليمون والنعناع وقطع لب الليمون المنعشة.",
    "flavor": "ليمون ونعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_lemon_mint_bottle_300ml",
    "name": "مشروب غازي شويبس ليمون ونعناع زجاجة 300 مل",
    "nameEn": "Schweppes Lemon Mint Bottle 300ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/schweppes_lemon_mint_bottle_300ml.png",
    "description": "مشروب غازي منعش بمزيج الليمون والنعناع الفاخر مع قطع اللب الطبيعي.",
    "flavor": "ليمون ونعناع",
    "sizes": [
      {
        "name": "زجاجة صغيرة (10 ج.م)",
        "weight": "300 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_lemon_mint_bottle_1l",
    "name": "مشروب غازي شويبس ليمون ونعناع زجاجة 1 لتر",
    "nameEn": "Schweppes Lemon Mint Bottle 1L",
    "category": "drinks",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/schweppes_lemon_mint_bottle_1l.png",
    "description": "مشروب غازي شويبس ليمون ونعناع بقطع اللب الطبيعية في عبوة 1 لتر.",
    "flavor": "ليمون ونعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "1 لتر",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "schweppes_pomegranate_can_250ml",
    "name": "مشروب غازي شويبس رمان كانز 250 مل",
    "nameEn": "Schweppes Pomegranate Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شويبس (Schweppes)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/schweppes_pomegranate_can_250ml.png",
    "description": "مشروب غازي شويبس بنكهة الرمان الفاخرة ولب الفاكهة في كانز 250 مل.",
    "flavor": "رمان",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "twist_energy_drink_original_250ml",
    "name": "مشروب طاقة تويست أوريجينال 250 مل",
    "nameEn": "Twist Energy Drink Original 250ml",
    "category": "energy",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تويست (Tw!st)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/twist_energy_drink_original_250ml.png",
    "description": "مشروب طاقة منعش يمنحك النشاط والحيوية بمذاقه الكلاسيكي المميز.",
    "flavor": "أوريجينال",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "250 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "twist_energy_drink_fusion_coconut_berry_250ml",
    "name": "مشروب طاقة تويست فيوجن بنكهة جوز الهند والتوت 250 مل",
    "nameEn": "Twist Energy Drink Fusion Coconut Berry 250ml",
    "category": "energy",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تويست (Tw!st)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/twist_energy_drink_fusion_coconut_berry_250ml.png",
    "description": "مشروب طاقة مبتكر بنكهة جوز الهند والتوت المنعشة لتعزيز الأداء والنشاط.",
    "flavor": "جوز هند وتوت",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "250 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "twist_energy_drink_strawberry_250ml",
    "name": "مشروب طاقة تويست بنكهة الفراولة 250 مل",
    "nameEn": "Twist Energy Drink Strawberry 250ml",
    "category": "energy",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تويست (Tw!st)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/twist_energy_drink_strawberry_250ml.png",
    "description": "مشروب طاقة غني بالفيتامينات بنكهة الفراولة اللذيذة لزيادة النشاط والتركيز.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "250 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "twist_energy_drink_tropical_mango_peach_250ml",
    "name": "مشروب طاقة تويست تروبيكال بنكهة المانجو والخوخ 250 مل",
    "nameEn": "Twist Energy Drink Tropical Mango Peach 250ml",
    "category": "energy",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تويست (Tw!st)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/twist_energy_drink_tropical_mango_peach_250ml.png",
    "description": "مشروب طاقة منعش بنكهة الفواكه الاستوائية المانجو والخوخ لتعزيز النشاط والأداء.",
    "flavor": "مانجو وخوخ",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "250 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "red_bull_energy_drink_250ml",
    "name": "مشروب طاقة ريد بول أوريجينال كانز 250 مل",
    "nameEn": "Red Bull Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/red_bull_energy_drink_250ml.png",
    "description": "مشروب الطاقة الشهير عالمياً يمنحك الحيوية والنشاط للجسم والذهن.",
    "flavor": "أوريجينال",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_peach_edition_250ml",
    "name": "مشروب طاقة ريد بول بالخوخ (ذا بيتش إيديشن) 250 مل",
    "nameEn": "Red Bull The Peach Edition Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/red_bull_peach_edition_250ml.png",
    "description": "مشروب طاقة ريد بول إصدار الخوخ المميز بطعم فاكهي منعش يمنح الحيوية والنشاط.",
    "flavor": "خوخ",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_apricot_strawberry_edition_250ml",
    "name": "مشروب طاقة ريد بول بالمشمش والفراولة (ذا أبريكوت إيديشن) 250 مل",
    "nameEn": "Red Bull The Apricot Edition Apricot-Strawberry 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/red_bull_apricot_strawberry_edition_250ml.png",
    "description": "مشروب طاقة ريد بول بنكهة المشمش والفراولة المنعشة، يمنح الحيوية للجسم والذهن.",
    "flavor": "مشمش وفراولة",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_red_edition_watermelon_250ml",
    "name": "مشروب طاقة ريد بول ريد إديشن بطيخ 250 مل",
    "nameEn": "Red Bull The Red Edition Watermelon Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/red_bull_red_edition_watermelon_250ml.png",
    "description": "مشروب طاقة ريد بول المنعش بنكهة البطيخ الطبيعية يمنحك الحيوية والنشاط.",
    "flavor": "بطيخ",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_blue_edition_blueberry_250ml",
    "name": "مشروب طاقة ريد بول بلو إديشن توت أزرق 250 مل",
    "nameEn": "Red Bull The Blue Edition Blueberry Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/red_bull_blue_edition_blueberry_250ml.png",
    "description": "مشروب طاقة ريد بول البلو إديشن بنكهة التوت الأزرق المنعشة واللذيذة.",
    "flavor": "توت أزرق",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_purple_edition_acai_berry_250ml",
    "name": "مشروب طاقة ريد بول بيربل إديشن أساي بيري 250 مل",
    "nameEn": "Red Bull The Purple Edition Açai Berry Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/red_bull_purple_edition_acai_berry_250ml.png",
    "description": "مشروب طاقة ريد بول البيربل إديشن بنكهة توت الأساي المنعشة لتعزيز طاقتك.",
    "flavor": "أساي بيري",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_spring_edition_raspberry_250ml",
    "name": "مشروب طاقة ريد بول سبرينج إديشن توت العليق 250 مل",
    "nameEn": "Red Bull The Spring Edition Raspberry Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/red_bull_spring_edition_raspberry_250ml.png",
    "description": "إصدار الربيع الوردي من ريد بول بنكهة توت العليق (راسبيري) المليئة بالانتعاش.",
    "flavor": "توت العليق (راسبيري)",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "red_bull_silver_edition_lime_250ml",
    "name": "مشروب طاقة ريد بول سيلفر إديشن ليمون 250 مل",
    "nameEn": "Red Bull The Silver Edition Lime Energy Drink 250ml",
    "category": "energy",
    "price": 55,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريد بول (Red Bull)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/red_bull_silver_edition_lime_250ml.png",
    "description": "مشروب طاقة ريد بول الإصدار الفضي بنكهة الليمون المنعشة بدون سكر.",
    "flavor": "ليمون لايم",
    "sizes": [
      {
        "name": "كانز 250 مل (55 ج.م)",
        "weight": "250 مل",
        "price": 55,
        "selected": true
      },
      {
        "name": "كانز كبير 355 مل (75 ج.م)",
        "weight": "355 مل",
        "price": 75
      }
    ]
  },
  {
    "id": "monster_energy_original_green_500ml",
    "name": "مشروب طاقة مونستر إنرجي الأخضر الأصلي 500 مل",
    "nameEn": "Monster Energy Drink Original Green 500ml",
    "category": "energy",
    "price": 65,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونستر إنرجي (Monster Energy)",
    "weight": "500 مل",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/monster_energy_original_green_500ml.png",
    "description": "مشروب طاقة مونستر إنرجي الأصلي لجرعة طاقة مضاعفة مع التورين والجينسينج.",
    "flavor": "الأصلي",
    "sizes": [
      {
        "name": "كانز 500 مل (65 ج.م)",
        "weight": "500 مل",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "monster_energy_ultra_white_zero_500ml",
    "name": "مشروب طاقة مونستر ألترا وايت خالي من السكر 500 مل",
    "nameEn": "Monster Energy Ultra White Zero Sugar 500ml",
    "category": "energy",
    "price": 65,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونستر إنرجي (Monster Energy)",
    "weight": "500 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/monster_energy_ultra_white_zero_500ml.png",
    "description": "مشروب طاقة مونستر ألترا وايت بدون سكر وسعرات حرارية منخفضة بنكهة حمضيات رائعة.",
    "flavor": "حمضيات منعشة زيرو سكر",
    "sizes": [
      {
        "name": "كانز 500 مل (65 ج.م)",
        "weight": "500 مل",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "monster_juiced_mango_loco_500ml",
    "name": "مشروب طاقة مونستر جوسد مانجو لوكو 500 مل",
    "nameEn": "Monster Juiced Mango Loco Energy Drink 500ml",
    "category": "energy",
    "price": 65,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونستر إنرجي (Monster Energy)",
    "weight": "500 مل",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/monster_juiced_mango_loco_500ml.png",
    "description": "مزيج منعش من عصير المانجو والفواكه الاستوائية مع تركيبة طاقة مونستر المميزة.",
    "flavor": "مانجو وعصائر استوائية",
    "sizes": [
      {
        "name": "كانز 500 مل (65 ج.م)",
        "weight": "500 مل",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "monster_energy_ultra_rosa_zero_500ml",
    "name": "مشروب طاقة مونستر ألترا روزا خالي من السكر 500 مل",
    "nameEn": "Monster Energy Ultra Rosa Zero Sugar 500ml",
    "category": "energy",
    "price": 65,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونستر إنرجي (Monster Energy)",
    "weight": "500 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/monster_energy_ultra_rosa_zero_500ml.png",
    "description": "مشروب طاقة مونستر ألترا روزا الخالي من السكر بنكهة الفراولة والتوت المنعشة.",
    "flavor": "فواكه وزهور منعشة زيرو سكر",
    "sizes": [
      {
        "name": "كانز 500 مل (65 ج.م)",
        "weight": "500 مل",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "fanta_green_apple_can_250ml",
    "name": "مشروب غازي فانتا كانز تفاح أخضر 250 مل",
    "nameEn": "Fanta Green Apple Soda Can 250ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فانتا (Fanta)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/fanta_green_apple_can_250ml.png",
    "description": "مشروب غازي فانتا بطعم التفاح الأخضر الفوار والمنعش.",
    "flavor": "تفاح أخضر",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "250 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "fanta_green_apple_bottle_1_5l",
    "name": "مشروب غازي فانتا تفاح أخضر زجاجة عائلية 1.5 لتر",
    "nameEn": "Fanta Green Apple Soda Bottle 1.5L",
    "category": "drinks",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فانتا (Fanta)",
    "weight": "1.5 لتر",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/fanta_green_apple_bottle_1_5l.png",
    "description": "مشروب فانتا تفاح أخضر في زجاجة عائلية اقتصادية 1.5 لتر بأفضل انتعاش.",
    "flavor": "تفاح أخضر",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "1.5 لتر",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "flamenco_peanut_butter_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة بزبدة الفول السوداني 60 جم",
    "nameEn": "Flamenco Peanut Butter Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/flamenco_peanut_butter_corn_puffs.png",
    "description": "مقرمشات ذرة فلامنكو المخبوزة بطعم زبدة الفول السوداني الغني والشهي.",
    "flavor": "زبدة فول سوداني",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "flamenco_seasoned_cheese_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة بالجبنة المتبلة 60 جم",
    "nameEn": "Flamenco Seasoned Cheese Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/flamenco_seasoned_cheese_corn_puffs.png",
    "description": "مقرمشات ذرة فلامنكو المخبوزة اللذيذة بنكهة الجبنة المتبلة الغنية.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "flamenco_sweet_peanut_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة بالفول السوداني الحلو 60 جم",
    "nameEn": "Flamenco Sweet Peanut Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/flamenco_sweet_peanut_corn_puffs.png",
    "description": "سناكس ذرة فلامنكو المخبوز اللذيذ بنكهة الفول السوداني الحلو المقرمش.",
    "flavor": "فول سوداني حلو",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "flamenco_zesty_tomato_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة بطعم الطماطم المتبلة 60 جم",
    "nameEn": "Flamenco Zesty Tomato Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/flamenco_zesty_tomato_corn_puffs.png",
    "description": "سناكس ذرة خفيف ومخبوز من فلامنكو بنكهة الطماطم المتبلة الشهية.",
    "flavor": "طماطم متبلة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "flamenco_mexican_blazin_hot_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة مكسيكاني مشطشط نار 60 جم",
    "nameEn": "Flamenco Mexican Blazin' Hot Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/flamenco_mexican_blazin_hot_corn_puffs.png",
    "description": "مقرمشات ذرة فلامنكو بالتوابل المكسيكية الحارة لعشاق الطعم المشطشط القوي.",
    "flavor": "مكسيكاني حار نار",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "flamenco_smoked_cheese_corn_puffs",
    "name": "سناكس فلامنكو مقرمشات ذرة بطعم الجبنة المدخنة 60 جم",
    "nameEn": "Flamenco Smoked Cheese Baked Corn Puffs 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فلامنكو (Flamenco)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/flamenco_smoked_cheese_corn_puffs.png",
    "description": "سناكس فلامنكو المخبوز بنكهة الجبنة المدخنة الغنية والمقرمشة.",
    "flavor": "جبنة مدخنة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "el_doha_egyptian_white_rice_1kg",
    "name": "أرز مصري فاخر الضحى حبة عريضة مغسول 1 كجم",
    "nameEn": "El Doha Egyptian White Rice Premium 1kg",
    "category": "groceries",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الضحى (El Doha)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/el_doha_egyptian_white_rice_1kg.png",
    "description": "أرز مصري نقي 100% عالي الجودة من الضحى مغسول ومصفى ومعد للطهي مباشرة.",
    "flavor": "أرز مصري أبيض",
    "sizes": [
      {
        "name": "عبوة 1 كجم (38 ج.م)",
        "weight": "1 كجم",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "el_doha_golden_basmati_rice_1kg",
    "name": "أرز ذهبي الضحى بسمتي حبة طويلة 1 كجم",
    "nameEn": "El Doha Golden Basmati Rice 1kg",
    "category": "groceries",
    "price": 85,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الضحى (El Doha)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/el_doha_golden_basmati_rice_1kg.png",
    "description": "أرز بسمتي ذهبي فاخر حبة طويلة ونقية ومثالية للوجبات الفاخرة والكبسة.",
    "flavor": "أرز ذهبي بسمتي",
    "sizes": [
      {
        "name": "عبوة 1 كجم (85 ج.م)",
        "weight": "1 كجم",
        "price": 85,
        "selected": true
      }
    ]
  },
  {
    "id": "el_doha_easy_rice_secret_recipe",
    "name": "أرز الضحى السريع أرز الخلطة السرية 400 جم",
    "nameEn": "El Doha Easy Rice Secret Blend 400g",
    "category": "groceries",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الضحى (El Doha)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/el_doha_easy_rice_secret_recipe.png",
    "description": "أرز سريع التحضير من الضحى مع كيس البهارات والتوابل الخاصة بالخلطة السرية.",
    "flavor": "الخلطة السرية",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "400 جم",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "el_doha_easy_rice_kabsa",
    "name": "أرز الضحى السريع أرز كبسة بالخلطة والبهارات 400 جم",
    "nameEn": "El Doha Easy Rice Kabsa Blend 400g",
    "category": "groceries",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الضحى (El Doha)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/el_doha_easy_rice_kabsa.png",
    "description": "وجبة أرز كبسة سهلة وسريعة التحضير من الضحى متبلة ببهارات الكبسة الأصلية.",
    "flavor": "كبسة",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "400 جم",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "windows_cheese_corn_snacks",
    "name": "سناكس ويندوز مقرمشات ذرة بطعم الجبنة 55 جم",
    "nameEn": "Windows Corn Snacks Cheese Flavor 55g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ويندوز (Windows)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/windows_cheese_corn_snacks.png",
    "description": "مقرمشات ذرة ويندوز الكلاسيكية المحبوبة بطعم الجبنة الشهية والمقرمشة.",
    "flavor": "جبنة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "break_fresh_tomato_snacks_jumbo",
    "name": "سناكس بريك مقرمشات بطعم الطماطم فريش حجم جامبو",
    "nameEn": "Break Jumbo Seasoned Fresh Tomato Snacks",
    "category": "snacks",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بريك (Break)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/break_fresh_tomato_snacks_jumbo.png",
    "description": "مقرمشات بريك اللذيذة بنكهة الطماطم والتوابل المنعشة في حجم جامبو اقتصادي.",
    "flavor": "طماطم فريش متبلة",
    "sizes": [
      {
        "name": "حجم جامبو (5 ج.م)",
        "weight": "50 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "cheetos_crunchy_chili_cheese_snack",
    "name": "شيتوس كرانشي أصابع ذرة مقرمشة بالجبنة المشطشطة",
    "nameEn": "Cheetos Crunchy Chili Cheese Corn Puffs",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيتوس (Cheetos)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/cheetos_crunchy_chili_cheese_snack.png",
    "description": "مقرمشات شيتوس كرانشي المتبلة بخلطة الجبنة الغنية والفلفل الحار المشطشط.",
    "flavor": "جبنة مشطشطة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس كبير 55 جم (10 ج.م)",
        "weight": "55 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "cheetos_puffs_flamin_hot_snack",
    "name": "شيتوس بافس مقرمشات ذرة هشة حار نار فلامينج هوت",
    "nameEn": "Cheetos Puffs Flamin' Hot Baked Corn Puffs",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيتوس (Cheetos)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/cheetos_puffs_flamin_hot_snack.png",
    "description": "سناكس شيتوس بافس الهش والخفيف بنكهة فلامينج هوت الحارة والمشتعلة.",
    "flavor": "حار نار (فلامينج هوت)",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس كبير 55 جم (10 ج.م)",
        "weight": "55 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "cheetos_crunchy_flamin_hot_lemon_55g",
    "name": "شيتوس كرانشي حار نار بالليمون حجم عائلي 55 جم",
    "nameEn": "Cheetos Crunchy Flamin Hot Lemon Snacks 55g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيتوس (Cheetos)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/cheetos_crunchy_flamin_hot_lemon_55g.png",
    "description": "مقرمشات ذرة شيتوس كرانشي اللذيذة بنكهة حار نار والليمون المنعشة، حجم أكبر لقرمشة تدوم أطول.",
    "flavor": "حار نار بالليمون",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس كبير 55 جم (10 ج.م)",
        "weight": "55 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "crunchy_flamin_hot_mix_grill_10egp",
    "name": "شيبس كرانشي حار نار مكس جريل 10 جنيه",
    "nameEn": "Crunchy Potato Chips Flamin Hot Mix Grill 10 EGP",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كرانشي (Crunchy)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/crunchy_flamin_hot_mix_grill_10egp.png",
    "description": "رقائق بطاطس كرانشي المتموجة بنكهة مكس جريل حار نار، حجم أكبر وكمية أكثر لمذاق حار ومميز.",
    "flavor": "حار نار مكس جريل",
    "sizes": [
      {
        "name": "حجم جامبو (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "crunchy_chilli_lemon_5egp",
    "name": "شيبس كرانشي شطة وليمون 5 جنيه",
    "nameEn": "Crunchy Potato Chips Chilli and Lemon 5 EGP",
    "category": "snacks",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كرانشي (Crunchy)",
    "weight": "38 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/crunchy_chilli_lemon_5egp.png",
    "description": "رقائق بطاطس كرانشي المقرمشة بنكهة الشطة والليمون اللاذعة لقرمشة ممتعة ومميزة.",
    "flavor": "شطة وليمون",
    "sizes": [
      {
        "name": "عبوة فردية (5 ج.م)",
        "weight": "38 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "cheetos_crunchy_flamin_hot_25g",
    "name": "شيتوس كرانشي حار نار منتفخات الذرة المقرمشة 25 جم",
    "nameEn": "Cheetos Crunchy Flamin Hot Corn Puffs 25g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيتوس (Cheetos)",
    "weight": "25 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/cheetos_crunchy_flamin_hot_25g.png",
    "description": "منتفخات الذرة المقرمشة شيتوس بنكهة الفلامين هوت الحارة الأصلية لحجم فردي خفيف ومقرمش.",
    "flavor": "حار نار",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس كبير 55 جم (10 ج.م)",
        "weight": "55 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "chicka_crunchy_creamy_cheese_45g",
    "name": "مقرمشات تشيكا كرانشي مخبوزة بالجبنة الكريمي 45 جم",
    "nameEn": "Chicka Crunchy Baked Creamy Cheese Snacks 45g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تشيكا (Chicka)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/chicka_crunchy_creamy_cheese_45g.png",
    "description": "مقرمشات الذرة المخبوزة المقرمشة تشيكا بطعم الجبنة الكريمية الغنية، خفيفة ولذيذة.",
    "flavor": "جبنة كريمي",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "cheetos_popcorn_spicy_tomato_10egp",
    "name": "فشار شيتوس بالطماطم المتبلة 10 جنيه",
    "nameEn": "Cheetos Popcorn Spicy Tomato 10 EGP",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيتوس (Cheetos)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/cheetos_popcorn_spicy_tomato_10egp.png",
    "description": "فشار شيتوس المنفوخ والمقرمش بنكهة الطماطم المتبلة اللذيذة، حجم أكبر وكمية أكثر.",
    "flavor": "طماطم متبلة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس كبير 55 جم (10 ج.م)",
        "weight": "55 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "lion_potato_chips_salt_7egp",
    "name": "شيبس لايون بالملح 7 جنيه",
    "nameEn": "Lion Potato Chips Salt 7 EGP",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لايون (Lion)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/lion_potato_chips_salt_7egp.png",
    "description": "رقائق بطاطس طبيعية مقرمشة لايون بنكهة الملح الكلاسيكية لمذاق رائع ومقرمش.",
    "flavor": "ملح",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "pringles_original_potato_crisps_165g",
    "name": "شيبس برينجلز الأصلي أوريجينال 165 جم",
    "nameEn": "Pringles Original Potato Crisps 165g",
    "category": "snacks",
    "price": 95,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "165 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/pringles_original_potato_crisps_165g.png",
    "description": "رقائق بطاطس برينجلز الشهيرة بنكهة الملح الأصلية في الأسطوانة الكلاسيكية المحكمة.",
    "flavor": "أصلي",
    "sizes": [
      {
        "name": "أسطوانة كبيرة 165 جم (95 ج.م)",
        "weight": "165 جم",
        "price": 95,
        "selected": true
      },
      {
        "name": "أسطوانة صغيرة 40 جم (35 ج.م)",
        "weight": "40 جم",
        "price": 35
      }
    ]
  },
  {
    "id": "lion_potato_chips_spicy_cheese_7egp",
    "name": "شيبس لايون بالجبنة المتبلة 7 جنيه",
    "nameEn": "Lion Potato Chips Spicy Cheese 7 EGP",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لايون (Lion)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/lion_potato_chips_spicy_cheese_7egp.png",
    "description": "شيبس بطاطس طبيعية لايون بنكهة الجبنة المتبلة الغنية بالنكهة والقرمشة.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "big_chips_seasoned_cheese_55g",
    "name": "بيج شيبس بطاطس بالجبنة المتبلة 55 جم",
    "nameEn": "Big Chips Potato Chips Seasoned Cheese 55g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيج شيبس (Big Chips)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/big_chips_seasoned_cheese_55g.png",
    "description": "رقائق بطاطس بيج شيبس المقرمشة بنكهة الجبنة المتبلة اللذيذة.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "55 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "big_chips_kettle_sour_cream_onion_60g",
    "name": "بيج شيبس كيتل كوكد بالساور كريم والبصل خالي من الجلوتين 60 جم",
    "nameEn": "Big Chips Kettle Cooked Sour Cream & Onion Gluten Free 60g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيج شيبس (Big Chips)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/big_chips_kettle_sour_cream_onion_60g.png",
    "description": "رقائق بطاطس مطبوخة على طريقة الكيتل بدهون أقل 25% وبنكهة الكريمة الحامضة والبصل، خالية من الجلوتين.",
    "flavor": "ساور كريم وبصل",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "60 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "spuds_craft_cooked_sour_cream_onion_75g",
    "name": "شيبس سبودز كرافت كوكد بالساور كريم والبصل 75 جم",
    "nameEn": "Spuds Craft Cooked Potato Chips Sour Cream & Onion 75g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبودز (Spuds)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/spuds_craft_cooked_sour_cream_onion_75g.png",
    "description": "رقائق بطاطس مقلية بطريقة كرافت الحرفية المقرمشة بنكهة الساور كريم والبصل الغنية.",
    "flavor": "ساور كريم وبصل",
    "sizes": [
      {
        "name": "عبوة كريفينج (15 ج.م)",
        "weight": "75 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "abu_auf_baked_pretzels_cheese_100g",
    "name": "مقرمشات بريتزلز أبو عوف مخبوزة بطعم الجبنة 100 جم",
    "nameEn": "Abu Auf Baked Pretzels Cheese Flavor 100g",
    "category": "snacks",
    "price": 195,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أبو عوف (Abu Auf)",
    "weight": "100 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/abu_auf_baked_pretzels_cheese_100g.png",
    "description": "مقرمشات بريتزلز مخبوزة في الفرن بطعم الجبنة الشهية من أبو عوف، وجبة خفيفة ومقرمشة للمشاركة.",
    "flavor": "جبنة",
    "sizes": [
      {
        "name": "كيس 200 جم فاتح سادة (195 ج.م)",
        "weight": "200 جم",
        "price": 195,
        "selected": true
      },
      {
        "name": "كيس 100 جم (100 ج.م)",
        "weight": "100 جم",
        "price": 100
      }
    ]
  },
  {
    "id": "pringles_salt_vinegar_potato_crisps_165g",
    "name": "شيبس برينجلز بالملح والخل 165 جم",
    "nameEn": "Pringles Salt & Vinegar Potato Crisps 165g",
    "category": "snacks",
    "price": 95,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "165 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/pringles_salt_vinegar_potato_crisps_165g.png",
    "description": "رقائق بطاطس برينجلز الشهية بتناغم الملح والخل اللاذع المميز، في عبوة أسطوانية محكمة 165 جم.",
    "flavor": "ملح وخل",
    "sizes": [
      {
        "name": "أسطوانة كبيرة 165 جم (95 ج.م)",
        "weight": "165 جم",
        "price": 95,
        "selected": true
      },
      {
        "name": "أسطوانة صغيرة 40 جم (35 ج.م)",
        "weight": "40 جم",
        "price": 35
      }
    ]
  },
  {
    "id": "tiger_excellence_chili_ranch_80g",
    "name": "شيبس تايجر إكسلانس بنكهة التشيلي رانش 80 جم",
    "nameEn": "Tiger Excellence Potato Chips Chili Ranch 80g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/tiger_excellence_chili_ranch_80g.png",
    "description": "رقائق بطاطس فاخرة تايجر إكسلانس بنكهة التشيلي رانش مع قوام متموج ومقرمش بدهون أقل 30%.",
    "flavor": "تشيلي رانش",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "lion_potato_chips_ketchup_7egp",
    "name": "شيبس لايون بالكاتشب 7 جنيه",
    "nameEn": "Lion Potato Chips Ketchup 7 EGP",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لايون (Lion)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/lion_potato_chips_ketchup_7egp.png",
    "description": "رقائق بطاطس طبيعية لايون بنكهة الطماطم والكاتشب اللذيذة والمفضلة للجميع.",
    "flavor": "كاتشب",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "tiger_spicy_cheese_potato_chips_55g",
    "name": "شيبس تايجر متموج بالجبنة المتبلة بدون مواد حافظة 55 جم",
    "nameEn": "Tiger Ridged Potato Chips Spicy Cheese Preservative Free 55g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/tiger_spicy_cheese_potato_chips_55g.png",
    "description": "شيبس تايجر المتموج بطعم الجبنة المتبلة الشهي المصنوع من بطاطس طبيعية 100% وبدون مواد حافظة.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "tiger_tomato_potato_chips_55g",
    "name": "شيبس تايجر متموج بالطماطم بدون مواد حافظة 55 جم",
    "nameEn": "Tiger Ridged Potato Chips Tomato Preservative Free 55g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/tiger_tomato_potato_chips_55g.png",
    "description": "شيبس تايجر المتموج بطعم الطماطم الطازجة اللذيذة وبدون أي مواد حافظة لقرمشة صحية وممتعة.",
    "flavor": "طماطم",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "lion_potato_chips_kebab_7egp",
    "name": "شيبس لايون بالكباب 7 جنيه",
    "nameEn": "Lion Potato Chips Kebab 7 EGP",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لايون (Lion)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/lion_potato_chips_kebab_7egp.png",
    "description": "رقائق بطاطس لايون بنكهة الكباب المشوي على الفحم ونكهة التوابل الشرقية الأصيلة.",
    "flavor": "كباب",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "big_chips_kettle_steak_caramelized_onion_60g",
    "name": "بيج شيبس كيتل كوكد بالستيك والبصل المكرمل 60 جم",
    "nameEn": "Big Chips Kettle Cooked Steak & Caramelized Onion 60g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيج شيبس (Big Chips)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/big_chips_kettle_steak_caramelized_onion_60g.png",
    "description": "شيبس كيتل كوكد بيج شيبس بنكهة الستيك الغنية والبصل المكرمل، أقل دهوناً بنسبة 25% وخالٍ من الجلوتين.",
    "flavor": "ستيك وبصل مكرمل",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "60 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "tiger_excellence_balsamic_sea_salt_80g",
    "name": "شيبس تايجر إكسلانس بخل البلسميك وملح البحر 80 جم",
    "nameEn": "Tiger Excellence Potato Chips Balsamic Vinegar and Sea Salt 80g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/tiger_excellence_balsamic_sea_salt_80g.png",
    "description": "رقائق بطاطس فاخرة تايجر إكسلانس بمزيج خل البلسميك الإيطالي وملح البحر المقرمش.",
    "flavor": "خل بلسميك وملح البحر",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "tiger_mix_cheese_potato_chips_55g",
    "name": "شيبس تايجر متموج مكس تشيز جبن مشكلة 55 جم",
    "nameEn": "Tiger Ridged Potato Chips Mix Cheese 55g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/tiger_mix_cheese_potato_chips_55g.png",
    "description": "رقائق بطاطس تايجر المقرمشة بخلطة أجبان مكس تشيز المميزة لقرمشة لا تقاوم.",
    "flavor": "مكس جبن",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "tiger_kettle_korean_chicken_75g",
    "name": "شيبس تايجر كيتل كوكد بالفراخ الكوري الحارة 75 جم",
    "nameEn": "Tiger Kettle Cooked Potato Chips Korean Chicken 75g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/tiger_kettle_korean_chicken_75g.png",
    "description": "بطاطس كيتل سميكة ومقرمشة بقوة تايجر كيتل كوكد بنكهة الدجاج الكوري الحار والمميز.",
    "flavor": "فراخ كوري",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "pringles_salt_vinegar_potato_crisps_40g",
    "name": "شيبس برينجلز بالملح والخل حجم ميني 40 جم",
    "nameEn": "Pringles Salt & Vinegar Mini Potato Crisps 40g",
    "category": "snacks",
    "price": 35,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/pringles_salt_vinegar_potato_crisps_40g.png",
    "description": "رقائق برينجلز المقرمشة بنكهة الملح والخل اللاذعة في عبوة صغيرة ملائمة للسناك السريع.",
    "flavor": "ملح وخل",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "40 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "tiger_excellence_greek_tzatziki_15egp",
    "name": "شيبس تايجر إكسلانس بالتزاتزيكي اليوناني زبادي بالأعشاب 15 جنيه",
    "nameEn": "Tiger Excellence Greek Tzatziki Yogurt with Herbs 15 EGP",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/tiger_excellence_greek_tzatziki_15egp.png",
    "description": "إصدار رمضاني خاص من تايجر إكسلانس بنكهة التزاتزيكي اليوناني المنعشة بالزبادي والأعشاب.",
    "flavor": "تزاتزيكي يوناني (زبادي بالأعشاب)",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "tiger_excellence_waves_tangy_ketchup_jalapeno",
    "name": "شيبسي تايجر إكسلانس ويفز كاتشب وهالبينو 85 جم",
    "nameEn": "Tiger Excellence Waves Tangy Ketchup Jalapeño Potato Chips 85g",
    "category": "snacks",
    "price": 6,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/tiger_excellence_waves_tangy_ketchup_jalapeno.png",
    "description": "رقائق بطاطس تايجر إكسلانس المتموجة الفاخرة بنكهة الكاتشب اللذيذ ولمسة فلفل هالبينو حار.",
    "flavor": "كاتشب وهالبينو حار",
    "sizes": [
      {
        "name": "عبوة قياسية (6 ج.م)",
        "weight": "85 جم",
        "price": 6,
        "selected": true
      }
    ]
  },
  {
    "id": "chicka_puffs_hot_ketchup_55g",
    "name": "سناكس شيكا بافس هوت كاتشب 55 جم",
    "nameEn": "Chicka Puffs Hot Ketchup Corn Puffs 55g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكا (Chicka)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/chicka_puffs_hot_ketchup_55g.png",
    "description": "مقرمشات ذرة بافس خفيفة وهشة ومخبوزة من شيكا بنكهة الكاتشب الحار المميز.",
    "flavor": "هوت كاتشب",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "pringles_hot_and_spicy_40g",
    "name": "شيبسي برينجلز بنكهة التوابل الحارة 40 جم",
    "nameEn": "Pringles Hot & Spicy Potato Crisps 40g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/pringles_hot_and_spicy_40g.png",
    "description": "رقائق بطاطس برينجلز المقرمشة الشهيرة بنكهة التوابل الحارة والبهارات المميزة في علبة صغيرة.",
    "flavor": "توابل حارة",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "crunchy_wavy_chips_chilli_lemon_70g",
    "name": "شيبسي كرانشي متموج شطة وليمون 70 جم",
    "nameEn": "Crunchy Wavy Potato Chips Chili and Lemon 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كرانشي (Crunchy)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/crunchy_wavy_chips_chilli_lemon_70g.png",
    "description": "رقائق بطاطس كرانشي المتموجة فائقة القرمشة بخلطة الشطة والليمون الحارة والمنعشة.",
    "flavor": "شطة وليمون",
    "sizes": [
      {
        "name": "عبوة عائلية (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "tiger_excellence_lime_and_coriander_90g",
    "name": "شيبسي تايجر إكسلانس ليمون وكزبرة 90 جم",
    "nameEn": "Tiger Excellence Lime and Coriander Potato Chips 90g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "90 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/tiger_excellence_lime_and_coriander_90g.png",
    "description": "رقائق بطاطس تايجر إكسلانس الفاخرة بنكهة الليمون الطازج ونفحات أوراق الكزبرة الطبيعية.",
    "flavor": "ليمون وكزبرة",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "tiger_potato_chips_kebab_60g",
    "name": "شيبسي تايجر كباب 60 جم",
    "nameEn": "Tiger Kebab Flavor Potato Chips 60g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/tiger_potato_chips_kebab_60g.png",
    "description": "رقائق بطاطس تايجر المقرمشة بنكهة الكباب المشوي على الفحم مع التوابل الشرقية.",
    "flavor": "كباب",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "tiger_kettle_cooked_dill_pickles_white_cheese_80g",
    "name": "شيبسي تايجر كيتل كوكت مخلل شبت وجبنة بيضاء 80 جم",
    "nameEn": "Tiger Kettle Cooked Dill Pickles & White Cheese Chips 80g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/tiger_kettle_cooked_dill_pickles_white_cheese_80g.png",
    "description": "رقائق بطاطس تايجر كيتل كوكت سميكة ومقرمشة ومطبوخة على دفعات بنكهة مخلل الشبت والجبنة البيضاء.",
    "flavor": "مخلل شبت وجبنة بيضاء",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "pringles_sour_cream_and_onion_165g",
    "name": "شيبسي برينجلز كريمة حامضة وبصل 165 جم",
    "nameEn": "Pringles Sour Cream & Onion Potato Crisps 165g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "165 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/pringles_sour_cream_and_onion_165g.png",
    "description": "علبة شيبسي برينجلز الأصلية الحجم الكبير بنكهة الساور كريم والأعشاب الخضراء والبصل الشهية.",
    "flavor": "كريمة حامضة وبصل",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "tiger_excellence_thai_sweet_chili_90g",
    "name": "شيبسي تايجر إكسلانس سويت تشيلي تايلاندي 90 جم",
    "nameEn": "Tiger Excellence Thai Sweet Chili Potato Chips 90g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "90 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/tiger_excellence_thai_sweet_chili_90g.png",
    "description": "رقائق بطاطس تايجر إكسلانس المميزة بتتبيلة التشيلي التايلاندي الذي يجمع بين المذاق الحلو والحار.",
    "flavor": "فلفل حلو تايلاندي",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "bake_rolz_super_size_ketchup_140g",
    "name": "مقرمشات بيك رولز سوبر سايز كاتشب 140 جم",
    "nameEn": "Bake Rolz Super Size Ketchup Wheat Snacks 140g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيك رولز (Bake Rolz)",
    "weight": "140 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/bake_rolz_super_size_ketchup_140g.png",
    "description": "مقرمشات دائرية من دقيق القمح المخبوزة في الفرن بحجم سوبر سايز كبير بنكهة الطماطم والكاتشب.",
    "flavor": "كاتشب",
    "sizes": [
      {
        "name": "كيس سوبر سايز (10 ج.م)",
        "weight": "سوبر",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (7 ج.م)",
        "weight": "عادي",
        "price": 7
      },
      {
        "name": "كيس عائلي كبير (15 ج.م)",
        "weight": "عائلي",
        "price": 15
      }
    ]
  },
  {
    "id": "big_chips_kettle_cooked_spiced_cheese_85g",
    "name": "شيبسي بيج شيبس كيتل كوكت جبنة متبلة 85 جم",
    "nameEn": "Big Chips Kettle Cooked Spiced Cheese Potato Chips 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيج شيبس (Big Chips)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/big_chips_kettle_cooked_spiced_cheese_85g.png",
    "description": "رقائق بطاطس بيج شيبس كيتل كوكت المقلية ببطء بنكهة الجبنة المتبلة، خالية من الجلوتين وأقل دهوناً بنسبة 25%.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "bake_rolz_family_size_ketchup_100g",
    "name": "مقرمشات بيك رولز حجم عائلي كاتشب 100 جم",
    "nameEn": "Bake Rolz Family Size Ketchup Wheat Snacks 100g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيك رولز (Bake Rolz)",
    "weight": "100 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/bake_rolz_family_size_ketchup_100g.png",
    "description": "مقرمشات قمح بيك رولز خفيفة ومخبوزة بالفرن بنكهة الكاتشب بحجم عائلي اقتصادي ومناسب للمشاركة.",
    "flavor": "كاتشب",
    "sizes": [
      {
        "name": "كيس سوبر سايز (10 ج.م)",
        "weight": "سوبر",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (7 ج.م)",
        "weight": "عادي",
        "price": 7
      },
      {
        "name": "كيس عائلي كبير (15 ج.م)",
        "weight": "عائلي",
        "price": 15
      }
    ]
  },
  {
    "id": "raw_kettle_cooked_jalapeno_75g",
    "name": "شيبسي رو كيتل كوكت هالبينو 75 جم",
    "nameEn": "Raw Kettle Cooked Potatoes Jalapeno 75g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/raw_kettle_cooked_jalapeno_75g.png",
    "description": "رقائق بطاطس رو المحضرة يدويًا في المقلاة بزيت دوار الشمس ونكهة الهالبينو المكسيكي الحار الطبيعي.",
    "flavor": "فلفل هالبينو",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "tiger_excellence_parmesan_truffle_90g",
    "name": "شيبسي تايجر إكسلانس جبنة بارميزان وترافل 90 جم",
    "nameEn": "Tiger Excellence Parmesan Truffle Potato Chips 90g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "90 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/tiger_excellence_parmesan_truffle_90g.png",
    "description": "رقائق بطاطس تايجر إكسلانس بتوليفة نكهات إيطالية فاخرة تجمع بين جبن البارميزان المعتق وعطر الترافل.",
    "flavor": "بارميزان وترافل",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "spuds_craft_cooked_sour_cream_onion_80g",
    "name": "شيبسي سبودز كرافت كوكت ساور كريم وبصل 80 جم",
    "nameEn": "Spuds Craft Cooked Sour Cream & Onion Potato Chips 80g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبودز (Spuds)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/spuds_craft_cooked_sour_cream_onion_80g.png",
    "description": "رقائق بطاطس سبودز الفاخرة المطبوخة على طريقة الكرافت التقليدية بنكهة الكريمة الحامضة والبصل الأخضر.",
    "flavor": "ساور كريم وبصل",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "jaguar_prime_sweet_heat_60g",
    "name": "سناكس جاكوار برايم سويت هيت 60 جم",
    "nameEn": "Jaguar Prime Crafted For The Crunch Sweet Heat Snacks 60g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جاكوار (Jaguar)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/jaguar_prime_sweet_heat_60g.png",
    "description": "أصابع مقرمشات جاكوار برايم المقرمشة بتتبيلة الفلفل الأحمر المتبل مع لمسة سكرية حلوة ممتعة.",
    "flavor": "سويت هيت",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "raw_kettle_cooked_sour_cream_herbs_75g",
    "name": "شيبسي رو كيتل كوكت ساور كريم وأعشاب 75 جم",
    "nameEn": "Raw Kettle Cooked Potatoes Sour Cream & Herbs 75g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/raw_kettle_cooked_sour_cream_herbs_75g.png",
    "description": "رقائق بطاطس رو الكيتل المقرمشة المحضرة بزيت نقي ونكهة الكريمة الحامضة مع توليفة أعشاب عطرية.",
    "flavor": "ساور كريم وأعشاب",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "funday_popcorn_mixed_fruits_50g",
    "name": "فشار فن داي بطعم الفواكه المشكلة 50 جم",
    "nameEn": "Fun Day Popcorn Mixed Fruits Flavor 50g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فن داي (Fun Day)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/funday_popcorn_mixed_fruits_50g.png",
    "description": "فشار فن داي المقرمش الملون بطعم وحلاوة الفواكه الطبيعية المشكلة المحببة للصغار والكبار.",
    "flavor": "فواكه مشكلة",
    "sizes": [
      {
        "name": "عبوة وسط (10 ج.م)",
        "weight": "50 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "lino_oat_rings_sriracha_60g",
    "name": "حلقات شوفان لينو بنكهة سيراتشا 60 جم",
    "nameEn": "Lino Oat Rings Sriracha Flavor 60g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لينو (Lino)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/lino_oat_rings_sriracha_60g.png",
    "description": "سناكس مقرمش وصحي محضر من الشوفان الطبيعي المخبوز من لينو ومتبل بصوص السيراتشا الحار والشهي.",
    "flavor": "سيراتشا حارة",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "60 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "chipsy_forno_french_cheese_50g",
    "name": "شيبسي فورنو بالجبنة الفرنسية 50 جم",
    "nameEn": "Chipsy Forno French Cheese Baked Potato Chips 50g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي فورنو (Chipsy Forno)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/chipsy_forno_french_cheese_50g.png",
    "description": "رقائق بطاطس شيبسي فورنو المخبوزة بعناية بالفرن بنكهة الجبنة الفرنسية وبدهون أقل بنسبة 60%.",
    "flavor": "جبنة فرنسية",
    "sizes": [
      {
        "name": "عبوة وسط (10 ج.م)",
        "weight": "50 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "funday_popcorn_mixed_fruits_pack_50g",
    "name": "فشار فن داي بطعم الفواكه المشكلة كيس 50 جم",
    "nameEn": "Fun Day Popcorn Mixed Fruits Flavor 50g Bag",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فن داي (Fun Day)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/funday_popcorn_mixed_fruits_pack_50g.png",
    "description": "فشار مقرمش وملون بنكهات كوكتيل الفواكه اللذيذة من فن داي لتجربة سناك مبهجة ومميزة.",
    "flavor": "فواكه مشكلة",
    "sizes": [
      {
        "name": "عبوة وسط (10 ج.م)",
        "weight": "50 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "bake_rolz_super_size_sweet_chilli_140g",
    "name": "مقرمشات بيك رولز سوبر سايز فلفل حلو 140 جم",
    "nameEn": "Bake Rolz Super Size Sweet Chilli Flavor 140g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيك رولز (Bake Rolz)",
    "weight": "140 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/bake_rolz_super_size_sweet_chilli_140g.png",
    "description": "مقرمشات بيك رولز من حبوب القمح الكاملة المخبوزة في الفرن بحجم سوبر سايز بنكهة الفلفل الحلو اللذيذ.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "كيس سوبر سايز (10 ج.م)",
        "weight": "سوبر",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (7 ج.م)",
        "weight": "عادي",
        "price": 7
      },
      {
        "name": "كيس عائلي كبير (15 ج.م)",
        "weight": "عائلي",
        "price": 15
      }
    ]
  },
  {
    "id": "chicka_puffcorn_creamy_cheese_55g",
    "name": "سناكس شيكا باف كورن جبنة كريمية 55 جم",
    "nameEn": "Chicka Puffcorn Creamy Cheese Flavor 55g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكا (Chicka)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/chicka_puffcorn_creamy_cheese_55g.png",
    "description": "مقرمشات باف كورن ذرة فائقة الخفة والنعومة تذوب في الفم بنكهة الجبنة الكريمية الغنية من شيكا.",
    "flavor": "جبنة كريمية",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "break_hot_pepper_large_size_70g",
    "name": "سناكس بريك مقرمشات بالفلفل الحار مولع كبير اللمة 70 جم",
    "nameEn": "Break Corn Snacks Hot Pepper Flavor Large Size 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بريك (Break)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/break_hot_pepper_large_size_70g.png",
    "description": "مقرمشات بريك اللذيذة بحجم اللمة الكبير وبنكهة الفلفل الحار التوليعة المقرمشة لعشاق الحار.",
    "flavor": "فلفل حار",
    "sizes": [
      {
        "name": "حجم كبير اللمة (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "chicka_puffcorn_sweet_corn_55g",
    "name": "سناكس شيكا باف كورن ذرة حلوة 55 جم",
    "nameEn": "Chicka Puffcorn Sweet Corn Flavor 55g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكا (Chicka)",
    "weight": "55 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/chicka_puffcorn_sweet_corn_55g.png",
    "description": "مقرمشات باف كورن ذرة خفيفة ومقرمشة تذوب في الفم بنكهة الذرة الحلوة الطبيعية والشهية من شيكا.",
    "flavor": "ذرة حلوة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "chipsy_forno_tomato_thyme_40g",
    "name": "شيبسي فورنو رقائق بطاطس مخبوزة طماطم وزعتر 40 جم",
    "nameEn": "Chipsy Forno Baked Potato Chips Tomato & Thyme 40g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي فورنو (Chipsy Forno)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/chipsy_forno_tomato_thyme_40g.png",
    "description": "شيبسي فورنو رقائق بطاطس مخبوزة بنكهة الطماطم والزعتر، أقل في الدهون بنسبة 60% مقرمشة وخفيفة.",
    "flavor": "طماطم وزعتر",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "40 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "raw_kettle_chips_jalapeno_85g",
    "name": "شيبس رو كيتل مطبوخ بنكهة الهالبينو 85 جم",
    "nameEn": "Raw Kettle Cooked Potato Chips Jalapeno Flavor 85g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/raw_kettle_chips_jalapeno_85g.png",
    "description": "رقائق بطاطس رو مطبوخة بطريقة الكيتل التقليدية ومتبلة بنكهة فلفل الهالبينو الحار لقرمشة فائقة ونكهة قوية.",
    "flavor": "هالبينو",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "85 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "chipsy_wavy_lime_coriander_50g",
    "name": "شيبسي ويفي بطاطس متموجة بنكهة الليمون بالكزبرة 50 جم",
    "nameEn": "Chipsy Wavy Potato Chips Lime & Coriander 50g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي ويفي (Chipsy Wavy)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/chipsy_wavy_lime_coriander_50g.png",
    "description": "شيبسي ويفي شرائح بطاطس متموجة وسميكة بنكهة الليمون المنعش والكزبرة لقرمشة مضاعفة وطعم مميز.",
    "flavor": "ليمون بالكزبرة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "50 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "spuds_craft_truffle_cheese_85g",
    "name": "شيبس سبادز كرافت مطبوخ يدوي بنكهة الجبنة والتروفل 85 جم",
    "nameEn": "Spuds Craft Cooked Potato Chips Truffle Cheese Flavor 85g",
    "category": "snacks",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبادز (Spuds)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/spuds_craft_truffle_cheese_85g.png",
    "description": "بطاطس سبادز المحمصة يدوياً كرافت بنكهة جبنة التروفل الغنية والفاخرة لقرمشة مثالية وطعم فريد.",
    "flavor": "جبنة وتروفل",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "85 جم",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "bake_rolz_pizza_family_size_140g",
    "name": "بيك رولز مقرمشات قمح مخبوزة بنكهة البيتزا حجم عائلي 140 جم",
    "nameEn": "Bake Rolz Wheat Snacks Pizza Flavor Family Size 140g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيك رولز (Bake Rolz)",
    "weight": "140 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/bake_rolz_pizza_family_size_140g.png",
    "description": "مقرمشات بيك رولز المخبوزة من القمح بنكهة البيتزا الشهية، خفيفة ومخبوزة غير مقلية بحجم عائلي مثالي للمشاركة.",
    "flavor": "بيتزا",
    "sizes": [
      {
        "name": "كيس سوبر سايز (10 ج.م)",
        "weight": "سوبر",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (7 ج.م)",
        "weight": "عادي",
        "price": 7
      },
      {
        "name": "كيس عائلي كبير (15 ج.م)",
        "weight": "عائلي",
        "price": 15
      }
    ]
  },
  {
    "id": "pretzo_pretzels_zesty_lemon_60g",
    "name": "مقرمشات بريتزو أوريجينال بنكهة الليمون المتبل 60 جم",
    "nameEn": "Pretzo Pretzels Original Zesty Lemon 60g",
    "category": "snacks",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بريتزو (Pretzo)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/pretzo_pretzels_zesty_lemon_60g.png",
    "description": "مقرمشات بريتزلز بريتزو المخبوزة بالفرن بنكهة الليمون المتبل والبهارات، خالية من الدهون بنسبة 96% ومقرمشة.",
    "flavor": "ليمون متبل",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "60 جم",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "raw_kettle_chips_sea_salt_85g",
    "name": "شيبس رو كيتل مطبوخ بملح البحر 85 جم",
    "nameEn": "Raw Kettle Cooked Potato Chips Sea Salt Flavor 85g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/raw_kettle_chips_sea_salt_85g.png",
    "description": "رقائق بطاطس رو مطبوخة بطريقة الكيتل التقليدية ومتبلة بملح البحر الطبيعي لقرمشة كلاسيكية نقية ولذيذة.",
    "flavor": "ملح البحر",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "85 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "chicka_crunchy_hot_ketchup_45g",
    "name": "سناكس شيكا كرانشي مخبوز بالكاتشب الحار 45 جم",
    "nameEn": "Chicka Crunchy Baked Snacks Hot Ketchup Flavor 45g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكا (Chicka)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/chicka_crunchy_hot_ketchup_45g.png",
    "description": "مقرمشات ذرة شيكا كرانشي المخبوزة بنكهة الكاتشب الحار الغنية والمميزة، قرمشة ممتعة ومذاق لا يقاوم.",
    "flavor": "كاتشب حار",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "spuds_craft_sea_salt_85g",
    "name": "شيبس سبادز كرافت مطبوخ يدوي بملح البحر 85 جم",
    "nameEn": "Spuds Craft Cooked Potato Chips Sea Salt Flavor 85g",
    "category": "snacks",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سبادز (Spuds)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/spuds_craft_sea_salt_85g.png",
    "description": "شيبس سبادز كرافت المقرمش المحمص يدوياً بملح البحر النقي لتجربة مقرمشات بطاطس فاخرة وطبيعية.",
    "flavor": "ملح البحر",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "85 جم",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "balance_protein_shots_sweet_cheese_70g",
    "name": "بالانس بروتين شوتس سناك مخبوز بالجبنة الحلوة 70 جم",
    "nameEn": "Balance Protein Shots Oven Baked Sweet Cheese 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بالانس (Balance)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/balance_protein_shots_sweet_cheese_70g.png",
    "description": "سناك بالانس بروتين شوتس المخبوز بالفرن والغني بـ 20 جم بروتين بنكهة الجبنة الحلوة اللذيذة، سناك صحي ومثالي للرياضيين.",
    "flavor": "جبنة حلوة",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "mixy_pretzels_bbq_70g",
    "name": "مقرمشات ميكسي بريتزلز مخبوزة بنكهة الباربيكيو 70 جم",
    "nameEn": "Mixy Pretzels Baked Snacks BBQ Flavor 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميكسي (Mixy)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/mixy_pretzels_bbq_70g.png",
    "description": "مقرمشات بريتزل ميكسي المخبوزة في الفرن بنكهة الباربيكيو المدخنة اللذيذة، قليلة الدهون والسعرات الحرارية.",
    "flavor": "باربيكيو",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "funday_popcorn_pizza_family_70g",
    "name": "فشار فن داي بنكهة البيتزا حجم عائلي 70 جم",
    "nameEn": "Funday Popcorn Pizza Flavor Family Size 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فن داي (Funday)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/funday_popcorn_pizza_family_70g.png",
    "description": "فشار فن داي الفاخر والمقرمش بنكهة البيتزا الإيطالية اللذيذة، بحجم عائلي كبير ممتع لأوقات التسلية والأفلام.",
    "flavor": "بيتزا",
    "sizes": [
      {
        "name": "حجم عائلي (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "mixy_pretzels_baharatly_70g",
    "name": "مقرمشات ميكسي بريتزلز مخبوزة بنكهة بهاراتلي 70 جم",
    "nameEn": "Mixy Pretzels Baked Snacks Baharatly Flavor 70g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميكسي (Mixy)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/mixy_pretzels_baharatly_70g.png",
    "description": "مقرمشات بريتزل ميكسي المخبوزة في الفرن بنكهة التوابل الشرقية بهاراتلي اللذيذة والغنية بالنكهة.",
    "flavor": "بهاراتلي",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "raw_kettle_chips_sour_cream_herbs_85g",
    "name": "شيبس رو كيتل مطبوخ بالكريمة الحامضة والأعشاب 85 جم",
    "nameEn": "Raw Kettle Cooked Potato Chips Sour Cream & Herbs 85g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/raw_kettle_chips_sour_cream_herbs_85g.png",
    "description": "رقائق بطاطس رو المطهوة ببطء على طريقة الكيتل بنكهة الكريمة الحامضة والأعشاب المنعشة لقرمشة استثنائية.",
    "flavor": "كريمة حامضة وأعشاب",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "85 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "lino_oat_rings_onion_sour_cream_45g",
    "name": "سناك لينو حلقات الشوفان بالبصل والكريمة الحامضة 45 جم",
    "nameEn": "Lino Oat Rings Onion & Sour Cream Snacks 45g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لينو (Lino)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/lino_oat_rings_onion_sour_cream_45g.png",
    "description": "مقرمشات حلقات الشوفان الصحية من لينو بنكهة البصل والكريمة الحامضة، مخبوزة ومغذية وخفيفة.",
    "flavor": "بصل وكريمة حامضة",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "45 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "crunchy_flamin_hot_mix_grill_75g",
    "name": "كرانشي بطاطس متموجة حار نار نكهة مكس جريل 10 جنيه",
    "nameEn": "Crunchy Potato Chips Flamin' Hot Mix Grill Flavor",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كرانشي (Crunchy)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/crunchy_flamin_hot_mix_grill_75g.png",
    "description": "شيبس كرانشي شرائح بطاطس متموجة بنكهة المشويات المشكلة الحارة والمتبلة لقرمشة ونكهة قوية.",
    "flavor": "مكس جريل حار",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "75 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "raw_kettle_chips_sweet_chili_85g",
    "name": "شيبس رو كيتل مطبوخ بالفلفل الحلو 85 جم",
    "nameEn": "Raw Kettle Cooked Potato Chips Sweet Chili Flavor 85g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رو (Raw)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/raw_kettle_chips_sweet_chili_85g.png",
    "description": "رقائق بطاطس رو المطهوة ببطء في الكيتل ومتبلة بنكهة الفلفل الحلو والبهارات اللذيذة لقرمشة غنية ومميزة.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "85 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "funday_popcorn_sweet_chili_50g",
    "name": "فشار فن داي بنكهة الفلفل الحلو 50 جم",
    "nameEn": "Funday Popcorn Sweet Chili Flavor 50g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فن داي (Funday)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/funday_popcorn_sweet_chili_50g.png",
    "description": "فشار فن داي المحضر من أجود حبات الذرة بنكهة الفلفل الحلو والتوابل المميزة، خفيف ومقرمش.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "50 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "pringles_ketchup_canister_165g",
    "name": "بطاطس برينجلز أسطوانة بنكهة الكاتشب 165 جم",
    "nameEn": "Pringles Potato Crisps Ketchup Flavor 165g",
    "category": "snacks",
    "price": 95,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "برينجلز (Pringles)",
    "weight": "165 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/pringles_ketchup_canister_165g.png",
    "description": "شيبس برينجلز المقرمش والشهير في أسطوانة كلاسيكية بنكهة صلصة الطماطم والكاتشب اللذيذة.",
    "flavor": "كاتشب",
    "sizes": [
      {
        "name": "أسطوانة كبيرة 165 جم (95 ج.م)",
        "weight": "165 جم",
        "price": 95,
        "selected": true
      },
      {
        "name": "أسطوانة صغيرة 40 جم (35 ج.م)",
        "weight": "40 جم",
        "price": 35
      }
    ]
  },
  {
    "id": "tiger_excellence_truffle_herbs_85g",
    "name": "شيبس تايجر إكسلنس متموج عميق بالتروفل والأعشاب 85 جم",
    "nameEn": "Tiger Excellence Deep Ridged Chips Truffle & Herbs Flavor 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر إكسلنس (Tiger Excellence)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/tiger_excellence_truffle_herbs_85g.png",
    "description": "بطاطس تايجر إكسلنس الفاخرة بشرائح سميكة متموجة عميقاً بنكهة الكمأة (التروفل) والأعشاب، دهون أقل بنسبة 30%.",
    "flavor": "تروفل وأعشاب",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "tiger_excellence_truffle_mushrooms_85g",
    "name": "شيبس تايجر إكسلنس متموج عميق بالتروفل والمشروم 85 جم",
    "nameEn": "Tiger Excellence Deep Ridged Chips Truffle & Mushrooms Flavor 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر إكسلنس (Tiger Excellence)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/tiger_excellence_truffle_mushrooms_85g.png",
    "description": "شيبس تايجر إكسلنس الفاخر بشرائح مقرمشة متموجة بعمق بنكهة الكمأة (التروفل) والفطر (المشروم) اللذيذة.",
    "flavor": "تروفل ومشروم",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "jaguar_puffs_sweet_cheese_jumbo_75g",
    "name": "سناكس ذرة چاجوار بافس بطعم الجبنة الحلوة حجم جامبو 10 جنيه",
    "nameEn": "Jaguar Puffs Corn Snacks Sweet Cheese Flavor Jumbo Size",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/jaguar_puffs_sweet_cheese_jumbo_75g.png",
    "description": "مقرمشات ذرة منفوشة چاجوار بافس بنكهة الجبنة الحلوة الغنية بحجم جامبو عائلي يذوب في الفم.",
    "flavor": "جبنة حلوة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "jaguar_puffcorn_chili_lemon_75g",
    "name": "سناكس ذرة چاجوار بافكورن شطة وليمون 10 جنيه",
    "nameEn": "Jaguar Puffcorn Corn Snacks Chili & Lemon Flavor",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/jaguar_puffcorn_chili_lemon_75g.png",
    "description": "سناكس ذرة چاجوار بافكورن هش ومقرمش بتتبيلة الشطة الحارة والليمون المنعش لنكهة قوية وممتعة.",
    "flavor": "شطة وليمون",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "tiger_excellence_truffle_cheese_honey_85g",
    "name": "شيبس تايجر إكسلنس متموج عميق بالتروفل والجبنة والعسل 85 جم",
    "nameEn": "Tiger Excellence Deep Ridged Chips Truffle Cheese & Honey Flavor 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر إكسلنس (Tiger Excellence)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/tiger_excellence_truffle_cheese_honey_85g.png",
    "description": "بطاطس تايجر إكسلنس المموجة بنكهة مبتكرة تمزج فخامة التروفل مع الجبنة ولمسة العسل المميزة لقرمشة لا تقاوم.",
    "flavor": "تروفل وجبنة وعسل",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "lion_chips_spicy_cheese_70g",
    "name": "شيبس ليون بطاطس بنكهة الجبنة المتبلة 70 جم",
    "nameEn": "Lion Potato Chips Spicy Cheese Flavor 70g",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليون (Lion)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/lion_chips_spicy_cheese_70g.png",
    "description": "رقائق بطاطس ليون الذهبية والمقرمشة بنكهة الجبنة المتبلة مع البصل والبهارات الشهية.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "jaguar_puff_king_sweet_chili_lime",
    "name": "سناكس چاجوار بف كينج سويت تشيلي لايم 10 جنيه",
    "nameEn": "Jaguar Puff King Sweet Chili Lime Snacks",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "حجم جامبو",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/jaguar_puff_king_sweet_chili_lime.png",
    "description": "مقرمشات ذرة بف كينج بنكهة السويت تشيلي والليمون المنعشة من چاجوار بحجم جامبو عائلي.",
    "flavor": "سويت تشيلي لايم",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "lion_potato_chips_kebab",
    "name": "شيبسي ليون بنكهة الكباب 10 جنيه",
    "nameEn": "Lion Potato Chips Kebab Flavor",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليون (Lion)",
    "weight": "حجم قياسي",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/lion_potato_chips_kebab.png",
    "description": "رقائق بطاطس مقرمشة بنكهة الكباب المشوي المميزة من ليون.",
    "flavor": "كباب",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "jaguar_stix_sweet_chili",
    "name": "سناكس چاجوار ستيكس فلفل حلو 10 جنيه",
    "nameEn": "Jaguar Stix Sweet Chili Snacks",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "حجم جامبو",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/jaguar_stix_sweet_chili.png",
    "description": "أصابع بطاطس وذرة مقرمشة ستيكس بطعم الفلفل الحلو من چاجوار بحجم جامبو.",
    "flavor": "فلفل حلو",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "jaguar_puffs_sweet_tomato",
    "name": "سناكس چاجوار بافس طماطم حلوة 10 جنيه",
    "nameEn": "Jaguar Puffs Sweet Tomato Snacks",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "حجم عائلي",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/jaguar_puffs_sweet_tomato.png",
    "description": "مقرمشات ذرة بافس هشة وخفيفة بنكهة الطماطم الحلوة الشهية من چاجوار.",
    "flavor": "طماطم حلوة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "jaguar_puffs_sweet_tomato_large",
    "name": "سناكس چاجوار بافس طماطم حلوة 10 جنيه",
    "nameEn": "Jaguar Puffs Sweet Tomato Snacks",
    "category": "snacks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "چاجوار (Jaguar)",
    "weight": "حجم عائلي",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/jaguar_puffs_sweet_tomato_large.png",
    "description": "مقرمشات ذرة بافس هشة وخفيفة بنكهة الطماطم الحلوة الشهية من چاجوار.",
    "flavor": "طماطم حلوة",
    "sizes": [
      {
        "name": "كيس عادي (5 ج.م)",
        "weight": "عادي",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7,
        "selected": true
      },
      {
        "name": "كيس كبير (10 ج.م)",
        "weight": "كبير",
        "price": 10
      }
    ]
  },
  {
    "id": "indomie_special_chicken_noodles_70g",
    "name": "شعرية سريعة التحضير إندومي بنكهة دجاج خاصة 70 جم",
    "nameEn": "Indomie Instant Noodles Special Chicken Flavour 70g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/indomie_special_chicken_noodles_70g.png",
    "description": "نودلز إندومي سريعة التحضير بنكهة الدجاج الخاصة اللذيذة مع بهاراتها المميزة.",
    "flavor": "دجاج خاصة",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "indomie_supermi_vegetable_noodles_70g",
    "name": "شعرية سريعة التحضير إندومي سوبرمي بنكهة الخضار 70 جم",
    "nameEn": "Indomie SuperMi Instant Noodles Vegetable Flavour 70g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/indomie_supermi_vegetable_noodles_70g.png",
    "description": "نودلز إندومي سوبرمي سريعة التحضير بنكهة الخضار المشكل والتوابل الشهية.",
    "flavor": "خضار",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "indomie_chicken_curry_noodles_70g",
    "name": "شعرية سريعة التحضير إندومي بطعم الفراخ بالكاري 70 جم",
    "nameEn": "Indomie Instant Noodles Chicken Curry Flavour 70g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/indomie_chicken_curry_noodles_70g.png",
    "description": "نودلز إندومي سريعة التحضير بتتبيلة الفراخ بالكاري الغنية والشهية.",
    "flavor": "فراخ بالكاري",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "indomie_supermi_hot_spicy_vegetable_jumbo",
    "name": "شعرية سريعة التحضير إندومي سوبرمي خضار حار جامبو 120 جم",
    "nameEn": "Indomie SuperMi Hot & Spicy Vegetable Noodles Jumbo 120g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "120 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/indomie_supermi_hot_spicy_vegetable_jumbo.png",
    "description": "نودلز إندومي سوبرمي حجم جامبو بنكهة الخضار الحار المشطشط والتوابل اللذيذة.",
    "flavor": "خضار حار",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "indomie_beef_noodles_jumbo_120g",
    "name": "شعرية سريعة التحضير إندومي بطعم اللحمة جامبو 120 جم",
    "nameEn": "Indomie Instant Noodles Beef Flavour Jumbo Pack 120g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "120 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/indomie_beef_noodles_jumbo_120g.png",
    "description": "نودلز إندومي حجم جامبو كبير بطعم اللحم البقري الغني والشهي.",
    "flavor": "لحمة",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "indomie_cup_noodles_beef_60g",
    "name": "كوب نودلز إندومي سريعة التحضير بطعم اللحمة 60 جم",
    "nameEn": "Indomie Instant Cup Noodles Beef Flavour 60g",
    "category": "noodles",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إندومي (Indomie)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/indomie_cup_noodles_beef_60g.png",
    "description": "كوب إندومي الجاهز للتحضير الفوري بطعم اللحمة اللذيذ، سريع وسهل أثناء التنقل.",
    "flavor": "لحمة",
    "sizes": [
      {
        "name": "كيس سوبر جامبو (10 ج.م)",
        "weight": "جامبو",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس عادي (8 ج.م)",
        "weight": "عادي",
        "price": 8
      },
      {
        "name": "كوب جاهز للتحضير (15 ج.م)",
        "weight": "كوب",
        "price": 15
      }
    ]
  },
  {
    "id": "kelloggs_noodles_jumbo_vegetables_110g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز نكهة الخضراوات الأصلية جامبو 110 جم",
    "nameEn": "Kellogg's Instant Noodles Jumbo Original Vegetables Flavour 110g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "110 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/kelloggs_noodles_jumbo_vegetables_110g.png",
    "description": "نودلز كيلوجز حجم جامبو مقرمشة سريعة التحضير في دقيقتين بنكهة الخضراوات الأصلية.",
    "flavor": "خضراوات أصلية",
    "sizes": [
      {
        "name": "عبوة قياسية (9 ج.م)",
        "weight": "110 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_spicy_fried_chicken_jumbo_110g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز دجاج مقلي حار جامبو 110 جم",
    "nameEn": "Kellogg's Instant Noodles Spicy Fried Chicken Flavour Jumbo 110g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "110 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/kelloggs_noodles_spicy_fried_chicken_jumbo_110g.png",
    "description": "نودلز كيلوجز حجم جامبو بنكهة الدجاج المقلي الحار المقرمش وسريعة التحضير في دقيقتين.",
    "flavor": "دجاج مقلي حار",
    "sizes": [
      {
        "name": "عبوة قياسية (9 ج.م)",
        "weight": "110 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_hot_spicy_jumbo_110g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز شطة مولعة جامبو 110 جم",
    "nameEn": "Kellogg's Instant Noodles Hot N' Spicy Flavour Jumbo 110g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "110 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/kelloggs_noodles_hot_spicy_jumbo_110g.png",
    "description": "نودلز كيلوجز حجم جامبو بنكهة الشطة المولعة الحارة لعشاق الطعم السبايسي القوي.",
    "flavor": "شطة مولعة",
    "sizes": [
      {
        "name": "عبوة قياسية (9 ج.م)",
        "weight": "110 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_beef_70g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز بنكهة اللحم 70 جم",
    "nameEn": "Kellogg's Instant Noodles Beef Flavour 70g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/kelloggs_noodles_beef_70g.png",
    "description": "نودلز كيلوجز سريعة التحضير في دقيقتين بنكهة اللحم الشهية واللذيذة غنية بالبروتين.",
    "flavor": "لحم",
    "sizes": [
      {
        "name": "كيس 70 جم (9 ج.م)",
        "weight": "70 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_chicken_70g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز بنكهة الدجاج 70 جم",
    "nameEn": "Kellogg's Instant Noodles Chicken Flavour 70g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/kelloggs_noodles_chicken_70g.png",
    "description": "نودلز كيلوجز سريعة التحضير في دقيقتين بطعم الدجاج اللذيذ والخفيف.",
    "flavor": "دجاج",
    "sizes": [
      {
        "name": "كيس 70 جم (9 ج.م)",
        "weight": "70 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_chicken_flavor_70g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز بنكهة الدجاج 70 جم",
    "nameEn": "Kellogg's Instant Noodles Chicken Flavour 70g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/kelloggs_noodles_chicken_flavor_70g.png",
    "description": "نودلز كيلوجز سريعة التحضير في دقيقتين بطعم الدجاج اللذيذ والخفيف.",
    "flavor": "دجاج",
    "sizes": [
      {
        "name": "كيس 70 جم (9 ج.م)",
        "weight": "70 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "kelloggs_noodles_oriental_sausage_70g",
    "name": "شعرية سريعة التحضير كيلوجز نودلز بنكهة سجق شرقي 70 جم",
    "nameEn": "Kellogg's Instant Noodles Oriental Sausage Flavour 70g",
    "category": "noodles",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيلوجز (Kellogg's)",
    "weight": "70 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/kelloggs_noodles_oriental_sausage_70g.png",
    "description": "نودلز كيلوجز سريعة التحضير بنكهة وتتبيلة السجق الشرقي البلدي المميزة.",
    "flavor": "سجق شرقي",
    "sizes": [
      {
        "name": "كيس 70 جم (9 ج.م)",
        "weight": "70 جم",
        "price": 9,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_11_spice_mix_35g",
    "name": "خلطة الـ 11 بهار كنور لتتبيل الأكلات 35 جم",
    "nameEn": "Knorr 11 Spice Mix 35g",
    "category": "groceries",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/knorr_11_spice_mix_35g.png",
    "description": "مزيج فريد وغني من 11 نوع من التوابل والأعشاب الطبيعية من كنور لتتبيل اللحوم والخضار ومختلف الأطباق.",
    "flavor": "11 بهار",
    "sizes": [
      {
        "name": "كيس 35 جم (12 ج.م)",
        "weight": "35 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "maggi_kofta_el_haty_mix_35g",
    "name": "خلطة كفتة الحاتي ماجي 35 جم",
    "nameEn": "Maggi Kofta El Haty Seasoning Mix 35g",
    "category": "groceries",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ماجي (Maggi)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/maggi_kofta_el_haty_mix_35g.png",
    "description": "خلطة توابل كفتة الحاتي من ماجي بمذاق ورائحة الشواء المشوية على الفحم لتحضير أشهى كفتة منزلية.",
    "flavor": "كفتة الحاتي",
    "sizes": [
      {
        "name": "كيس 35 جم (12 ج.م)",
        "weight": "35 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_11_spice_mix_35g_pack",
    "name": "خلطة الـ 11 بهار كنور لتتبيل الأكلات 35 جم",
    "nameEn": "Knorr 11 Spice Mix 35g",
    "category": "groceries",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/knorr_11_spice_mix_35g_pack.png",
    "description": "مزيج فريد وغني من 11 نوع من التوابل والأعشاب الطبيعية من كنور لتتبيل اللحوم والخضار ومختلف الأطباق.",
    "flavor": "11 بهار",
    "sizes": [
      {
        "name": "كيس 35 جم (12 ج.م)",
        "weight": "35 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "maggi_kofta_el_haty_mix_35g_pack",
    "name": "خلطة كفتة الحاتي ماجي 35 جم",
    "nameEn": "Maggi Kofta El Haty Seasoning Mix 35g",
    "category": "groceries",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ماجي (Maggi)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/maggi_kofta_el_haty_mix_35g_pack.png",
    "description": "خلطة توابل كفتة الحاتي من ماجي بمذاق ورائحة الشواء المشوية على الفحم لتحضير أشهى كفتة منزلية.",
    "flavor": "كفتة الحاتي",
    "sizes": [
      {
        "name": "كيس 35 جم (12 ج.م)",
        "weight": "35 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_moro_chocolate_bar_1_5x",
    "name": "شوكولاتة كادبوري مورو بالكراميل والبسكويت حجم أكبر 1.5X",
    "nameEn": "Cadbury Moro Chocolate Bar 1.5X Larger",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري مورو (Cadbury Moro)",
    "weight": "54 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/cadbury_moro_chocolate_bar_1_5x.png",
    "description": "شوكولاتة كادبوري مورو الشهيرة بحشوة الكراميل والنوجا المغطاة بشوكولاتة الحليب الفاخرة بحجم أكبر 1.5X.",
    "flavor": "شوكولاتة بالحليب مع الكراميل والنوجا",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "54 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "galaxy_flutes_chocolate_22_5g",
    "name": "شوكولاتة جلاكسي فلوتس أصابع ويفر مقرمشة 22.5 جم",
    "nameEn": "Galaxy Flutes Crispy Chocolate Wafer Rolls 22.5g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جلاكسي (Galaxy)",
    "weight": "22.5 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/galaxy_flutes_chocolate_22_5g.png",
    "description": "أصابع ويفر مقرمشة محشوة بكريمة الشوكولاتة الناعمة ومغطاة بشوكولاتة جلاكسي الحريرية.",
    "flavor": "شوكولاتة بالحليب وويفر",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "22.5 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_dairy_milk_bubbly_87g",
    "name": "شوكولاتة كادبوري ديري ميلك بابلز فقاعات شوكولاتة الحليب 87 جم",
    "nameEn": "Cadbury Dairy Milk Bubbly Chocolate Bar 87g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري ديري ميلك (Cadbury Dairy Milk)",
    "weight": "87 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/cadbury_dairy_milk_bubbly_87g.png",
    "description": "شوكولاتة كادبوري ديري ميلك بابلز المصنوعة من شوكولاتة الحليب الفاخرة مع فقاعات هوائية ناعمة تذوب في الفم.",
    "flavor": "شوكولاتة بالحليب فقاعات",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "87 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "galaxy_smooth_milk_chocolate_bar",
    "name": "شوكولاتة جلاكسي سادة بالحليب ناعمة 36 جم",
    "nameEn": "Galaxy Smooth Milk Chocolate Bar 36g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جلاكسي (Galaxy)",
    "weight": "36 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/galaxy_smooth_milk_chocolate_bar.png",
    "description": "شوكولاتة جلاكسي الفاخرة بالحليب الصافي الغني والقوام الحريري الناعم المفضل لدى الجميع.",
    "flavor": "شوكولاتة بالحليب سادة",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "36 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "galaxy_hazelnut_milk_chocolate_bar_36g",
    "name": "شوكولاتة جلاكسي بالبندق والحليب 36 جم",
    "nameEn": "Galaxy Hazelnut Milk Chocolate Bar 36g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جلاكسي (Galaxy)",
    "weight": "36 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/galaxy_hazelnut_milk_chocolate_bar_36g.png",
    "description": "لوح شوكولاتة جلاكسي الناعمة بالحليب مع قطع البندق المقرمشة اللذيذة.",
    "flavor": "بندق وشوكولاتة بالحليب",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "36 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "cebe_nussa_duo_hazelnut_spread_jar",
    "name": "كريمة شوكولاتة ثنائية بالبندق والحليب سيبي نوسا ديو 350 جم",
    "nameEn": "Cebe Nussa Duo Hazelnut & Milk Chocolate Spread Jar 350g",
    "category": "sweets",
    "price": 95,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سيبي نوسا (Cebe Nussa)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/cebe_nussa_duo_hazelnut_spread_jar.png",
    "description": "برطمان كريمة دهن لذيذة بنكهة الشوكولاتة بالبندق المزدوجة مع الكريمة البيضاء للسندوتشات والحلويات.",
    "flavor": "شوكولاتة بالبندق وحليب ثنائية",
    "sizes": [
      {
        "name": "برطمان (95 ج.م)",
        "weight": "350 جم",
        "price": 95,
        "selected": true
      }
    ]
  },
  {
    "id": "cocoa_lovers_cookies_and_cream_biscuits",
    "name": "بسكويت كوكوا لفرز كوكيز وكريمة مغطى بالشوكولاتة 30 جم",
    "nameEn": "Cocoa Lovers Cookies & Cream Coated Biscuits 30g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكوا لفرز (Cocoa Lovers)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/cocoa_lovers_cookies_and_cream_biscuits.png",
    "description": "بسكويت كاكاو مقرمش محشو بالكريمة البيضاء ومغطى بالكامل بطبقة غنية من الشوكولاتة اللذيذة.",
    "flavor": "كوكيز وكريمة مغطى بالشوكولاتة",
    "sizes": [
      {
        "name": "عبوة فردية (10 ج.م)",
        "weight": "30 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "molto_magnum_chocolate_hazelnut_croissant",
    "name": "كرواسون مولتو ماجنوم حشو أكثر شوكولاتة وبندق 24 قطعة",
    "nameEn": "Molto Magnum Chocolate & Hazelnut Croissant Pack of 24",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مولتو (Molto)",
    "weight": "علبة 24 قطعة",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/molto_magnum_chocolate_hazelnut_croissant.png",
    "description": "كرواسون مولتو ماجنوم الهش الغني بحشوة وفيرة مضاعفة من الشوكولاتة والبندق اللذيذة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "علبة 24 قطعة (360 ج.م)",
        "weight": "24 قطعة",
        "price": 360,
        "selected": true
      },
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "قطعة",
        "price": 15,
        "selected": false
      }
    ]
  },
  {
    "id": "cadbury_dairy_milk_oreo_chocolate_bar_95g",
    "name": "شوكولاتة كادبوري ديري ميلك بحشو بسكويت أوريو وكريمة الفانيليا 95 جم",
    "nameEn": "Cadbury Dairy Milk Oreo Chocolate Bar 95g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "95 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/cadbury_dairy_milk_oreo_chocolate_bar_95g.png",
    "description": "مزيج شوكولاتة كادبوري ديري ميلك بالحليب مع قطع بسكويت أوريو المقرمشة وكريمة الفانيليا الناعمة.",
    "flavor": "شوكولاتة بالحليب مع بسكويت أوريو",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "95 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_dark_chocolate_bar_35g",
    "name": "شوكولاتة كورونا دارك داكنة سادة بدون حليب 35 جم",
    "nameEn": "Corona Dark Chocolate Bar 35g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/corona_dark_chocolate_bar_35g.png",
    "description": "شوكولاتة كورونا المصرية العريقة بطعم الكاكاو الداكن الفاخر بدون إضافة حليب لعشاق الشوكولاتة الدارك.",
    "flavor": "شوكولاتة داكنة سادة",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "35 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_crispy_milk_chocolate_bar_28g",
    "name": "شوكولاتة كورونا كريسبي بالأرز المقرمش والحليب 28 جم",
    "nameEn": "Corona Crispy Milk Chocolate Bar 28g",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "28 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/corona_crispy_milk_chocolate_bar_28g.png",
    "description": "لوح شوكولاتة كورونا بالحليب مع حبوب الأرز المقرمشة الكريسبي بطعم خفيف ومميز.",
    "flavor": "شوكولاتة بالحليب مع أرز مقرمش",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "28 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "bimbo_choco_max_chocolate_coated_biscuit",
    "name": "بسكويت بيمبو شوكو ماكس مغطى بالشوكولاتة بحشو الكاكاو",
    "nameEn": "Bimbo Choco Max Chocolate Coated Biscuit",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيمبو (Bimbo)",
    "weight": "3 قطع",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/bimbo_choco_max_chocolate_coated_biscuit.png",
    "description": "بسكويت بيمبو شوكو ماكس الشهير من بسكو مصر بطبقات الشوكولاتة الغنية والتغطية المقرمشة الفاخرة.",
    "flavor": "شوكولاتة مضاعفة",
    "sizes": [
      {
        "name": "باكو 3 قطع (10 ج.م)",
        "weight": "3 قطع",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_kitkat_2_finger_milk_chocolate_wafer",
    "name": "ويفر كيت كات نستله مغطى بشوكولاتة الحليب إصبعين 20.5 جم",
    "nameEn": "Nestle KitKat 2 Finger Milk Chocolate Wafer 20.5g",
    "category": "sweets",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيت كات (KitKat)",
    "weight": "20.5 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/nestle_kitkat_2_finger_milk_chocolate_wafer.png",
    "description": "أصابع ويفر كيت كات المقرمشة المغطاة بأشهى طبقة من شوكولاتة نستله بالحليب الناعمة للاستراحة المثالية.",
    "flavor": "شوكولاتة بالحليب وويفر",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "20.5 جم",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "mcvities_biskrem_cocoa_cream_filled_biscuits_100g",
    "name": "بسكويت بسكريم مكفيتيز محشو بكريمة الكاكاو 100 جم",
    "nameEn": "McVitie's Biskrem Cocoa Cream Filled Biscuits 100g",
    "category": "snacks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مكفيتيز بسكريم (McVitie's Biskrem)",
    "weight": "100 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/mcvities_biskrem_cocoa_cream_filled_biscuits_100g.png",
    "description": "بسكويت بسكريم الذهبي الهش المحشو بقلب غني من كريمة الكاكاو الذائبة واللذيذة.",
    "flavor": "بسكويت مقرمش بحشو كاكاو",
    "sizes": [
      {
        "name": "باكو رول (15 ج.م)",
        "weight": "100 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "og_original_grandmas_chocolate_coated_honey_biscuits_8pcs",
    "name": "بسكويت أو جي أوريجينال جراند ماز مغطى بالشوكولاتة بالعسل كيس 8 قطع",
    "nameEn": "OG Original Grandma's Chocolate Coated Honey Biscuit Pack of 8",
    "category": "sweets",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أو جي (OG - Original Grandma's)",
    "weight": "8 قطع",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/og_original_grandmas_chocolate_coated_honey_biscuits_8pcs.png",
    "description": "بسكويت الفانيليا المخبوز بالعسل الطبيعي والمغطى بالشوكولاتة الغنية في كيس يحتوي على 8 قطع.",
    "flavor": "فانيليا وعسل مغطى بالشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "8 قطع",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_kitkat_chunky_lotus_biscoff_bar_42g",
    "name": "شوكولاتة كيت كات تشانكي نستله بحشو بسكويت لوتس بيسكوف 42 جم",
    "nameEn": "Nestle KitKat Chunky Lotus Biscoff Chocolate Bar 42g",
    "category": "sweets",
    "price": 25,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيت كات (KitKat)",
    "weight": "42 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/nestle_kitkat_chunky_lotus_biscoff_bar_42g.png",
    "description": "لوح شوكولاتة كيت كات تشانكي السميك مع طبقة ويفر مقرمشة وزبدة بسكويت لوتس بيسكوف بالكراميل الشهي.",
    "flavor": "شوكولاتة مع زبدة وبسكويت لوتس بيسكوف",
    "sizes": [
      {
        "name": "عبوة قياسية (25 ج.م)",
        "weight": "42 جم",
        "price": 25,
        "selected": true
      }
    ]
  },
  {
    "id": "milka_chips_ahoy_alpine_milk_chocolate_100g",
    "name": "شوكولاتة ميلكا بحليب جبال الألب مع كوكيز تشيبس أهوي وكريمة 100 جم",
    "nameEn": "Milka Chips Ahoy! Alpine Milk Chocolate Bar 100g",
    "category": "sweets",
    "price": 75,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميلكا (Milka)",
    "weight": "100 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/milka_chips_ahoy_alpine_milk_chocolate_100g.png",
    "description": "شوكولاتة ميلكا الفاخرة بحليب الألب الطبيعي محشوة بكريمة غنية وقطع كوكيز تشيبس أهوي المقرمشة.",
    "flavor": "شوكولاتة بالحليب مع كوكيز ورقائق شوكولاتة",
    "sizes": [
      {
        "name": "لوح 100 جم (75 ج.م)",
        "weight": "100 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "molto_magnum_mix_chocolate_and_cream_croissant",
    "name": "كرواسون مولتو ماجنوم ميكس بحشو الشوكولاتة والكريمة",
    "nameEn": "Molto Magnum Mix Chocolate & Cream Croissant",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مولتو (Molto)",
    "weight": "قطعة واحدة",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/molto_magnum_mix_chocolate_and_cream_croissant.png",
    "description": "كرواسون مولتو ماجنوم طري وطازج بحشوة مزدوجة مكس من الشوكولاتة اللذيذة والكريمة الغنية.",
    "flavor": "ميكس شوكولاتة وكريمة",
    "sizes": [
      {
        "name": "قطعة ماجنوم (15 ج.م)",
        "weight": "قطعة واحدة",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nutella_hazelnut_cocoa_spread_jar_350g",
    "name": "شوكولاتة نوتيلا قابلة للدهن بالبندق والكاكاو برطمان 350 جم",
    "nameEn": "Nutella Hazelnut Spread with Cocoa Jar 350g",
    "category": "sweets",
    "price": 120,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نوتيلا (Nutella)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/nutella_hazelnut_cocoa_spread_jar_350g.png",
    "description": "كريمة نوتيلا الإيطالية الشهيرة القابلة للدهن بالبندق المحمص والكاكاو الصافي لوجبة فطور أو تحلية لا تقاوم.",
    "flavor": "بندق وكاكاو",
    "sizes": [
      {
        "name": "عبوة قياسية (120 ج.م)",
        "weight": "350 جم",
        "price": 120,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mix_chocolate_flavoured_milk_200ml",
    "name": "حليب جهينة مكس بنكهة الشوكولاتة 200 مل",
    "nameEn": "Juhayna Mix Chocolate Flavoured Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة مكس (Juhayna Mix)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/juhayna_mix_chocolate_flavoured_milk_200ml.png",
    "description": "مشروب حليب جهينة مكس بالشوكولاتة الغنية بالكالسيوم والبروتين بطعم مفضل لجميع أفراد الأسرة.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_treats_chocolate_milk_200ml",
    "name": "حليب المراعي تريتس بالشوكولاتة والكاكاو الطبيعي 200 مل",
    "nameEn": "Almarai Treats Chocolate Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي تريتس (Almarai Treats)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/almarai_treats_chocolate_milk_200ml.png",
    "description": "حليب المراعي تريتس الفاخر بالكاكاو الطبيعي والشوكولاتة اللذيذة لانتعاش وطاقة طوال اليوم.",
    "flavor": "شوكولاتة وكاكاو طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "oreo_chocolate_and_hazelnut_creme_biscuits_6pcs",
    "name": "بسكويت أوريو بحشو كريمة الشوكولاتة والبندق 6 قطع (5 + 1 مجاناً)",
    "nameEn": "Oreo Chocolate & Hazelnut Flavoured Creme Biscuits 6 Pcs",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أوريو (Oreo)",
    "weight": "6 قطع",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/oreo_chocolate_and_hazelnut_creme_biscuits_6pcs.png",
    "description": "بسكويت أوريو الكاكاو الشهير محشو بطبقة غنية من كريمة الشوكولاتة والبندق في عبوة عرض خاصة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "باكو 6 قطع (10 ج.م)",
        "weight": "6 قطع",
        "price": 10,
        "selected": true
      },
      {
        "name": "علبة 12 باكو توفير (110 ج.م)",
        "weight": "12 باكو",
        "price": 110
      }
    ]
  },
  {
    "id": "danone_dango_chocolate_flavoured_milk_200ml",
    "name": "حليب دانجو دانون بنكهة الشوكولاتة مدعم بالحديد والزنك 200 مل",
    "nameEn": "Danone Dango Chocolate Flavoured Milk 200ml",
    "category": "dairy",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دانجو دانون (Danone Dango)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/danone_dango_chocolate_flavoured_milk_200ml.png",
    "description": "مشروب حليب دانجو بالشوكولاتة للأطفال الغني بالفيتامينات والمعادن والحديد والزنك لدعم النمو والنشاط.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة 200 مل (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_dark_cooking_chocolate_200g",
    "name": "شوكولاتة خام للطبخ والحلويات دريم غامقة دارك 200 جم",
    "nameEn": "Dreem Dark Cooking Chocolate 200g",
    "category": "groceries",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "200 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/dreem_dark_cooking_chocolate_200g.png",
    "description": "قالب شوكولاتة خام للطبخ والحلويات من دريم بدرجة كاكاو غامقة مثالية لصنع الكيك والصوصات والحلويات المنزلية.",
    "flavor": "شوكولاتة خام دارك للطبخ",
    "sizes": [
      {
        "name": "عبوة قياسية (65 ج.م)",
        "weight": "200 جم",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_hot_cocoa_3in1_drink_mix_jar_300g",
    "name": "مسحوق كاكاو ساخن كادبوري هوت كوكوا 3 في 1 برطمان 300 جم",
    "nameEn": "Cadbury Hot Cocoa 3in1 Drink Mix Jar 300g",
    "category": "drinks",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "300 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/cadbury_hot_cocoa_3in1_drink_mix_jar_300g.png",
    "description": "خلطة بودرة كاكاو كادبوري الساخنة الفاخرة المحلاة مع مبيض الكريمة لتحضير ألذ كوب شوكولاتة ساخنة بسهولة.",
    "flavor": "كاكاو ساخن 3 في 1 مع سكر ومبيض",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "300 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "molto_xxl_chocolate_and_hazelnut_croissant",
    "name": "كرواسون مولتو إكس إكس إل بحشو الشوكولاتة والبندق حجم كبير",
    "nameEn": "Molto XXL Chocolate & Hazelnut Croissant",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مولتو (Molto)",
    "weight": "قطعة واحدة XXL",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/molto_xxl_chocolate_and_hazelnut_croissant.png",
    "description": "كرواسون مولتو الحجم العائلي الكبير XXL المخبوز بطراوة بحشوة غنية من كريمة الشوكولاتة والبندق.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "قطعة واحدة XXL",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "maltesers_milk_chocolate_crispy_balls_value_pack_3x",
    "name": "شوكولاتة كرات مالتيزرز المقرمشة بالحليب عرض توفير 3 أكياس",
    "nameEn": "Maltesers Milk Chocolate Crispy Balls Value Pack of 3",
    "category": "sweets",
    "price": 35,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مالتيزرز (Maltesers)",
    "weight": "3 أكياس",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/maltesers_milk_chocolate_crispy_balls_value_pack_3x.png",
    "description": "كرات مالتيزرز الهشة المقرمشة المغطاة بشوكولاتة الحليب الفاخرة في عرض خاص يحتوي على 3 أكياس.",
    "flavor": "كرات حليب مقرمشة بالشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "3 أكياس",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "shamadan_kata_kito_chocolate_wafer_bar",
    "name": "ويفر كتا كيتو شمعدان مغطى بالشوكولاتة اللذيذة",
    "nameEn": "Shamadan Kata-Kito Chocolate Coated Wafer Bar",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شمعدان (El Shamadan)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/shamadan_kata_kito_chocolate_wafer_bar.png",
    "description": "ويفر كتا كيتو الكلاسيكي الشهير من شمعدان بطبقات الويفر الهشة المغطاة بأجود شوكولاتة الحليب.",
    "flavor": "ويفر مقرمش بالشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "30 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_dairy_milk_bubbly_28g",
    "name": "شوكولاتة كادبوري ديري ميلك بابلي بالحليب 28 جم",
    "nameEn": "Cadbury Dairy Milk Bubbly Chocolate Bar 28g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "28 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/cadbury_dairy_milk_bubbly_28g.png",
    "description": "شوكولاتة كادبوري ديري ميلك بابلي بالحليب المميزة بفقاعاتها الهوائية الخفيفة وقوامها الذائب الناعم.",
    "flavor": "شوكولاتة بالحليب فقاعات",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "28 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_dark_chocolate_72_cocoa_35g",
    "name": "شوكولاتة كورونا دارك داكنة 72% كاكاو 35 جم",
    "nameEn": "Corona Dark Chocolate Bar 72% Cocoa 35g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/corona_dark_chocolate_72_cocoa_35g.png",
    "description": "شوكولاتة كورونا فاخرة داكنة بنسبة 72% كاكاو طبيعي لعشاق المذاق الأصيل.",
    "flavor": "شوكولاتة داكنة 72%",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "35 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_choco_delight_mmmax_25g",
    "name": "بسكويت كادبوري شوكو ديلايت مغطى بالشوكولاتة 25.5 جم",
    "nameEn": "Cadbury Choco Delight MMMAX Chocolate Covered Biscuit 25.5g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "25.5 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/cadbury_choco_delight_mmmax_25g.png",
    "description": "بسكويت كادبوري شوكو ديلايت المقرمش محشو بالكريمة ومغطى بطبقة غنية من شوكولاتة كادبوري بالحليب.",
    "flavor": "شوكولاتة وبسكويت كريمة",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "25.5 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "kinder_bueno_hazelnut_chocolate_43g",
    "name": "شوكولاتة كيندر بوينو ويفر مقرمش بكريمة البندق والحليب 43 جم",
    "nameEn": "Kinder Bueno Crispy Hazelnut Milk Chocolate Bar 43g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيندر (Kinder)",
    "weight": "43 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/kinder_bueno_hazelnut_chocolate_43g.png",
    "description": "أصابع ويفر كيندر بوينو الهشة محشوة بكريمة البندق اللذيذة ومغطاة بشوكولاتة الحليب الناعمة.",
    "flavor": "بندق وحليب",
    "sizes": [
      {
        "name": "عبوة قطعتين (35 ج.م)",
        "weight": "43 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_milk_cooking_chocolate_200g",
    "name": "شوكولاتة خام للطبخ بالحليب دريم 200 جم",
    "nameEn": "Dreem Milk Cooking Chocolate Bar 200g",
    "category": "sweets",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "200 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/dreem_milk_cooking_chocolate_200g.png",
    "description": "شوكولاتة خام بالحليب من دريم مثالية للحلويات المنزلية والتزيين وإعداد أشهى الأطباق.",
    "flavor": "شوكولاتة بالحليب للحلويات",
    "sizes": [
      {
        "name": "عبوة قياسية (65 ج.م)",
        "weight": "200 جم",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "hohos_king_chocolate_roll_cake",
    "name": "كيك هوهوز كينج رول محشو كريمة ومغطى بالكاكاو",
    "nameEn": "Hohos King Rolled Chocolate Cake with Cream",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هوهوز (HOHOS)",
    "weight": "حجم كينج",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/hohos_king_chocolate_roll_cake.png",
    "description": "رول كيك الشوكولاتة الهش الشهير من هوهوز بحجم كينج كبير ومحشو بطبقة غنية من الكريمة البيضاء.",
    "flavor": "شوكولاتة وكريمة",
    "sizes": [
      {
        "name": "قطعة كينج (10 ج.م)",
        "weight": "حجم كينج",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "molto_magnum_chocolate_hazelnut_croissant_231",
    "name": "كرواسون مولتو ماجنوم حشو أكثر شوكولاتة وبندق",
    "nameEn": "Molto Magnum Chocolate and Hazelnut Filled Croissant",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مولتو (Molto)",
    "weight": "حجم ماجنوم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/molto_magnum_chocolate_hazelnut_croissant_231.png",
    "description": "كرواسون مولتو ماجنوم الطازج المحشو بكمية مضاعفة من كريمة الشوكولاتة والبندق اللذيذة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "حجم ماجنوم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "cocoa_lovers_sandwich_biscuits_39g",
    "name": "بسكويت كوكوا لوفرز ساندوتش محشو ومغطى بالكاكاو 39 جم",
    "nameEn": "Cocoa Lovers Cocoa Biscuits with Cocoa Cream 39g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكوا لوفرز (Cocoa Lovers)",
    "weight": "39 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/cocoa_lovers_sandwich_biscuits_39g.png",
    "description": "ساندوتش بسكويت كوكوا لوفرز الغني بكريمة الكاكاو ومغطى بطبقة لذيذة من الشوكولاتة.",
    "flavor": "كاكاو وشوكولاتة",
    "sizes": [
      {
        "name": "عبوة 39 جم (10 ج.م)",
        "weight": "39 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_milk_chocolate_king_size_35g",
    "name": "شوكولاتة كورونا بالحليب كينج سايز 35 جم",
    "nameEn": "Corona Milk Chocolate Bar King Size 35g",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/corona_milk_chocolate_king_size_35g.png",
    "description": "لوح شوكولاتة كورونا بالحليب الكلاسيكي الغني بمذاق الحليب الصافي والكاكاو المصري الأصيل.",
    "flavor": "شوكولاتة بالحليب",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "35 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "mms_milk_chocolate_candies_45g",
    "name": "حبيبات شوكولاتة إم آند إمز بالحليب 45 جم",
    "nameEn": "M&M's Milk Chocolate Candies 45g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إم آند إمز (M&M's)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/mms_milk_chocolate_candies_45g.png",
    "description": "حبيبات شوكولاتة إم آند إمز المقرمشة والملونة المحشوة بشوكولاتة الحليب الفاخرة.",
    "flavor": "شوكولاتة بالحليب",
    "sizes": [
      {
        "name": "كيس 45 جم (35 ج.م)",
        "weight": "45 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "bounty_milk_chocolate_coconut_57g",
    "name": "شوكولاتة باونتي محشوة بجوز الهند قطعتين 57 جم",
    "nameEn": "Bounty Milk Chocolate Bar with Tender Coconut 57g",
    "category": "sweets",
    "price": 25,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "باونتي (Bounty)",
    "weight": "57 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/bounty_milk_chocolate_coconut_57g.png",
    "description": "شوكولاتة باونتي الشهيرة المحشوة بجوز الهند الطبيعي الرطب والمغلفة بشوكولاتة الحليب الناعمة.",
    "flavor": "جوز هند وشوكولاتة بالحليب",
    "sizes": [
      {
        "name": "عبوة قياسية (25 ج.م)",
        "weight": "57 جم",
        "price": 25,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_stevia_dark_chocolate_almond_35g",
    "name": "شوكولاتة كورونا دارك باللوز بدون سكر مضاف بستيفيا 35 جم",
    "nameEn": "Corona Stevia Dark Chocolate with Almond No Sugar Added 35g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/corona_stevia_dark_chocolate_almond_35g.png",
    "description": "شوكولاتة كورونا دارك باللوز المحلى بنبات ستيفيا الطبيعي بدون سكر مضاف لتناسب أسلوب الحياة الصحي.",
    "flavor": "شوكولاتة داكنة باللوز وستيفيا",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "35 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_alpine_milk_chocolate_35g",
    "name": "شوكولاتة كورونا بالحليب ألبين ميلك 35 جم",
    "nameEn": "Corona Alpine Milk Chocolate Bar 35g",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/corona_alpine_milk_chocolate_35g.png",
    "description": "شوكولاتة كورونا ألبين ميلك الغنية بالمذاق الكريمي لحليب جبال الألب.",
    "flavor": "حليب الألب",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "35 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_dark_chocolate_hazelnut_35g",
    "name": "شوكولاتة كورونا دارك بالبندق 35 جم",
    "nameEn": "Corona Dark Chocolate Bar with Hazelnut 35g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/corona_dark_chocolate_hazelnut_35g.png",
    "description": "شوكولاتة كورونا دارك الفاخرة الممزوجة بقطع البندق المحمص المقرمش.",
    "flavor": "شوكولاتة داكنة بالبندق",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "35 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "corona_dark_chocolate_72_cocoa_pack_6x35g",
    "name": "عرض شوكولاتة كورونا دارك 72% كاكاو 6 قطع × 35 جم",
    "nameEn": "Corona Dark Chocolate 72% Cocoa Multipack 6x35g",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كورونا (Corona)",
    "weight": "6 قطع × 35 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/corona_dark_chocolate_72_cocoa_pack_6x35g.png",
    "description": "عرض اقتصادي يحتوي على 6 ألواح من شوكولاتة كورونا دارك الفاخرة بنسبة 72% كاكاو.",
    "flavor": "شوكولاتة داكنة 72%",
    "sizes": [
      {
        "name": "عبوة قياسية (35 ج.م)",
        "weight": "6 × 35 جم",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "bimbo_choco_max_biscuits",
    "name": "بسكويت بيمبو شوكو ماكس مغطى ومحشو بالشوكولاتة",
    "nameEn": "Bisco Misr Bimbo Choco Max Chocolate Covered Biscuit",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيمبو (Bimbo)",
    "weight": "عبوة قياسية",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/bimbo_choco_max_biscuits.png",
    "description": "بسكويت بيمبو شوكو ماكس المغطى بطبقة كثيفة من الشوكولاتة والمحشو بكريمة الكاكاو الغنية.",
    "flavor": "شوكولاتة ماكس مضاعفة",
    "sizes": [
      {
        "name": "عبوة فردية (10 ج.م)",
        "weight": "حجم قياسي",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "bimbo_original_extra_chocolate_cream_biscuits",
    "name": "بسكويت بيمبو أوريجينال بكريمة الشوكولاتة الإضافية ومغطى بالشوكولاتة",
    "nameEn": "Bisco Misr Bimbo Original Chocolate Covered Biscuit",
    "category": "sweets",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيمبو (Bimbo)",
    "weight": "عبوة قياسية",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/bimbo_original_extra_chocolate_cream_biscuits.png",
    "description": "بسكويت بيمبو الأصلي الكلاسيكي المحشو بكريمة الشوكولاتة الإضافية والمغلف بالشوكولاتة اللذيذة.",
    "flavor": "شوكولاتة أوريجينال",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "حجم قياسي",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "munchi_strawberry_cream_wafer",
    "name": "ويفر مونشي محشو بكريمة الفراولة بيسكو مصر",
    "nameEn": "Bisco Misr Munchi Strawberry Cream Wafer",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونشي (Munchi)",
    "weight": "عبوة أصابع",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/munchi_strawberry_cream_wafer.png",
    "description": "ويفر مونشي المقرمش من بيسكو مصر محشو بطبقات غنية ولذيذة من كريمة الفراولة الطبيعية.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة ويفر (5 ج.م)",
        "weight": "حجم قياسي",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "munchi_vanilla_cream_wafer",
    "name": "ويفر مونشي محشو بكريمة الفانيليا بيسكو مصر",
    "nameEn": "Bisco Misr Munchi Vanilla Cream Wafer",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مونشي (Munchi)",
    "weight": "عبوة أصابع",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/munchi_vanilla_cream_wafer.png",
    "description": "ويفر مونشي الهش والمقرمش من بيسكو مصر محشو بطبقات كريمة الفانيليا الناعمة.",
    "flavor": "فانيليا",
    "sizes": [
      {
        "name": "عبوة ويفر (5 ج.م)",
        "weight": "حجم قياسي",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_dairy_milk_bubbly_40g",
    "name": "شوكولاتة كادبوري ديري ميلك بابلي بالحليب 40 جم",
    "nameEn": "Cadbury Dairy Milk Bubbly Milk Chocolate Bar 40g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/cadbury_dairy_milk_bubbly_40g.png",
    "description": "لوح شوكولاتة كادبوري ديري ميلك بابلي بالحجم الأكبر قوام خفيف وفقاعات هوائية ممتعة.",
    "flavor": "شوكولاتة بالحليب فقاعات",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "40 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_full_cream_milk_plastic_bottle_1l",
    "name": "حليب المراعي كامل الدسم طويل الأجل زجاجة 1 لتر",
    "nameEn": "Almarai Full Cream Long Life Milk Plastic Bottle 1L",
    "category": "dairy",
    "price": 52,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/almarai_full_cream_milk_plastic_bottle_1l.png",
    "description": "حليب المراعي كامل الدسم طويل الأجل بطعم طبيعي 100% وغني بالكالسيوم وفيتامين د في زجاجة مريحة.",
    "flavor": "سادة طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (52 ج.م)",
        "weight": "1 لتر",
        "price": 52,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_full_cream_milk_tetra_200ml",
    "name": "حليب المراعي كامل الدسم طويل الأجل 200 مل",
    "nameEn": "Almarai Full Fat Long Life Milk 200ml",
    "category": "dairy",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/almarai_full_cream_milk_tetra_200ml.png",
    "description": "عبوة حليب المراعي كامل الدسم صغيرة مثالية للأطفال والرحلات والاستخدام الفردي اليومي.",
    "flavor": "سادة طبيعي",
    "sizes": [
      {
        "name": "عبوة 200 مل (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_full_cream_milk_tetra_1_5l",
    "name": "لبن جهينة كامل الدسم 100% طبيعي 1.5 لتر",
    "nameEn": "Juhayna 100% Natural Full Cream Milk 1.5L",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1.5 لتر",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/juhayna_full_cream_milk_tetra_1_5l.png",
    "description": "حليب جهينة الطبيعي كامل الدسم 100% بدون إضافة بودرة حليب معزز بالفيتامينات والكالسيوم بحجم عائلي 1.5 لتر.",
    "flavor": "سادة طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "1.5 لتر",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "bekhero_full_cream_milk_pouch_1l",
    "name": "حليب بخيره جهينة كامل الدسم كيس 1 لتر",
    "nameEn": "Juhayna Bekhero Full Cream Milk Pouch 1L",
    "category": "dairy",
    "price": 52.5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بخيره (Bekhero)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/bekhero_full_cream_milk_pouch_1l.png",
    "description": "حليب بخيره من جهينة كامل الدسم والمعقم في كيس اقتصادي وعملي غني بالكالسيوم والفيتامينات.",
    "flavor": "سادة طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (52.5 ج.م)",
        "weight": "1 لتر",
        "price": 52.5,
        "selected": true
      }
    ]
  },
  {
    "id": "bashayer_full_cream_milk_tetra_1l",
    "name": "لبن بشاير كامل الدسم حليب طبيعي 1 لتر",
    "nameEn": "Bashayer Full Cream Milk Tetra Pak 1L",
    "category": "dairy",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بشاير (Bashayer)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/bashayer_full_cream_milk_tetra_1l.png",
    "description": "حليب بشاير كامل الدسم 100% طبيعي ومعقم بجودة عالية وسعر اقتصادي ومناسب لجميع أفراد الأسرة.",
    "flavor": "سادة طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "1 لتر",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "obour_land_full_cream_milk_200ml",
    "name": "حليب عبور لاند طبيعي كامل الدسم 200 مل",
    "nameEn": "Obour Land Natural Full Cream Milk 200ml",
    "category": "dairy",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "عبور لاند (Obour Land)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/obour_land_full_cream_milk_200ml.png",
    "description": "حليب عبور لاند طبيعي 100% كامل الدسم بدون بودرة أو مواد حافظة، غني بالكالسيوم والفيتامينات في عبوة 200 مل عملية.",
    "flavor": "كامل الدسم",
    "sizes": [
      {
        "name": "علبة 500 جم (42 ج.م)",
        "weight": "500 جم",
        "price": 42,
        "selected": true
      },
      {
        "name": "علبة 250 جم (26 ج.م)",
        "weight": "250 جم",
        "price": 26
      },
      {
        "name": "علبة عائلية 1 كجم (80 ج.م)",
        "weight": "1 كجم",
        "price": 80
      }
    ]
  },
  {
    "id": "labanita_full_cream_milk_pouch_450ml",
    "name": "حليب لبنيتا كامل الدسم كيس 450 مل",
    "nameEn": "Labanita Long Life Full Cream Milk Pouch 450ml",
    "category": "dairy",
    "price": 18,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لبنيتا (Labanita)",
    "weight": "450 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/labanita_full_cream_milk_pouch_450ml.png",
    "description": "حليب لبنيتا كامل الدسم معقم طويل الأجل في كيس اقتصادي بحجم 450 مل بطعم طبيعي غني.",
    "flavor": "كامل الدسم",
    "sizes": [
      {
        "name": "كيس اقتصادي (18 ج.م)",
        "weight": "450 مل",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "labanita_full_cream_milk_1l",
    "name": "حليب لبنيتا كامل الدسم 1 لتر",
    "nameEn": "Labanita Long Life Full Cream Milk 1L",
    "category": "dairy",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لبنيتا (Labanita)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/labanita_full_cream_milk_1l.png",
    "description": "حليب لبنيتا كامل الدسم طويل الأجل غني بالفيتامينات والمعادن في عبوة تيترا باك 1 لتر مع غطاء سهل الفتح.",
    "flavor": "كامل الدسم",
    "sizes": [
      {
        "name": "عبوة عائلية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_skimmed_milk_1_5l_2pcs",
    "name": "عرض جهينة حليب طبيعي خالي الدسم 1.5 لتر (قطعتين)",
    "nameEn": "Juhayna Skimmed Milk 1.5L (Pack of 2)",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1.5 لتر × 2",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/juhayna_skimmed_milk_1_5l_2pcs.png",
    "description": "عرض خاص عبوتين حليب جهينة طبيعي 100% خالي الدسم (0.5% دسم) بحجم 1.5 لتر للعبوة بدون لبن بودرة غني بالكالسيوم.",
    "flavor": "خالي الدسم",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "1.5 لتر × 2",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_treats_banana_milk_200ml",
    "name": "حليب المراعي تريتس بنكهة الموز 200 مل",
    "nameEn": "Almarai Treats Banana Flavored Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/almarai_treats_banana_milk_200ml.png",
    "description": "مشروب حليب المراعي تريتس بنكهة الموز اللذيذة والغنية بالفيتامينات والكالسيوم في عبوة 200 مل.",
    "flavor": "موز",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_treats_strawberry_milk_200ml",
    "name": "حليب المراعي تريتس بنكهة الفراولة 200 مل",
    "nameEn": "Almarai Treats Strawberry Flavored Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/almarai_treats_strawberry_milk_200ml.png",
    "description": "مشروب حليب المراعي تريتس بنكهة الفراولة الطبيعية المنعشة والمحببة للأطفال والكبار في عبوة 200 مل.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_rayeb_milk_900g",
    "name": "لبن رايب المراعي 900 جم",
    "nameEn": "Almarai Rayeb Laban 900g",
    "category": "dairy",
    "price": 45,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "900 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/almarai_rayeb_milk_900g.png",
    "description": "لبن رايب المراعي طبيعي 100% منعش ومساعد على الهضم، بقوام كريمي وطعم لذيذ في زجاجة 900 جم.",
    "flavor": "طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "900 جم",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_lactose_free_milk_1l",
    "name": "حليب جهينة خالي من اللاكتوز 1 لتر",
    "nameEn": "Juhayna Lactose Free Full Cream Milk 1L",
    "category": "dairy",
    "price": 52.5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/juhayna_lactose_free_milk_1l.png",
    "description": "حليب جهينة طبيعي كامل الدسم (3% دسم) خالي تماماً من اللاكتوز وسهل الهضم لمن يعانون من حساسية اللاكتوز.",
    "flavor": "خالي من اللاكتوز",
    "sizes": [
      {
        "name": "عبوة قياسية (52.5 ج.م)",
        "weight": "1 لتر",
        "price": 52.5,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_sweetened_condensed_milk_370g",
    "name": "حليب مكثف محلى نستله 370 جم",
    "nameEn": "Nestle Sweetened Condensed Milk 370g",
    "category": "dairy",
    "price": 95,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله (Nestle)",
    "weight": "370 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/nestle_sweetened_condensed_milk_370g.png",
    "description": "حليب نستله المكثف المحلى المحضر من الحليب الطازج، مثالي لإعداد أشهى الحلويات والتشيز كيك والمشروبات.",
    "flavor": "محلى",
    "sizes": [
      {
        "name": "علبة معدنية (95 ج.م)",
        "weight": "370 جم",
        "price": 95,
        "selected": true
      }
    ]
  },
  {
    "id": "danone_dango_chocolate_milk_200ml",
    "name": "حليب دانجو بالشوكولاتة من دانون 200 مل",
    "nameEn": "Danone Dango Chocolate Flavored Milk 200ml",
    "category": "dairy",
    "price": 11,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دانون (Danone)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/danone_dango_chocolate_milk_200ml.png",
    "description": "مشروب حليب دانون دانجو بالشوكولاتة اللذيذة والمدعم بالحديد والزنك والفيتامينات لنمو وطاقة الأطفال.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (11 ج.م)",
        "weight": "200 مل",
        "price": 11,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_nido_fortified_powder_milk_1200g",
    "name": "حليب مجفف نيدو المدعم بالألياف من نستله كيس 1200 جم",
    "nameEn": "Nestle Nido Fortified Milk Powder Rich in Fiber Pouch 1200g",
    "category": "dairy",
    "price": 420,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نيدو (Nido)",
    "weight": "1200 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/nestle_nido_fortified_powder_milk_1200g.png",
    "description": "حليب بودرة نيدو المدعم عالي الجودة وغني بالألياف والفيتامينات والمعادن لدعم المناعة والنمو الصحي للأطفال والأسرة.",
    "flavor": "حليب مجفف مدعم",
    "sizes": [
      {
        "name": "عبوة قياسية (420 ج.م)",
        "weight": "1200 جم",
        "price": 420,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mix_strawberry_milk_200ml",
    "name": "حليب جهينة ميكس فراولة 200 مل",
    "nameEn": "Juhayna Mix Strawberry Flavored Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/juhayna_mix_strawberry_milk_200ml.png",
    "description": "مشروب حليب جهينة ميكس بنكهة الفراولة اللذيذة والغنية بالكالسيوم والبروتين لطاقة وحيوية تدوم طوال اليوم.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_rayeb_plain_milk_1l",
    "name": "لبن رايب جهينة طبيعي 1 لتر",
    "nameEn": "Juhayna Rayeb Plain Laban 1L",
    "category": "dairy",
    "price": 48,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/juhayna_rayeb_plain_milk_1l.png",
    "description": "لبن رايب جهينة طبيعي 100% يساعد على راحة الجهاز الهضمي وتحسين عملية الهضم بفضل الخمائر الحية وقوامه الخفيف اللذيذ.",
    "flavor": "طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (48 ج.م)",
        "weight": "1 لتر",
        "price": 48,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mix_caramel_milk_200ml",
    "name": "حليب جهينة ميكس كراميل 200 مل",
    "nameEn": "Juhayna Mix Caramel Flavored Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/juhayna_mix_caramel_milk_200ml.png",
    "description": "مشروب حليب جهينة ميكس بنكهة الكراميل الغنية والمميزة، مدعم بالبروتين والكالسيوم لمتعة ومذاق لا يقاوم.",
    "flavor": "كراميل",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mix_vanilla_milk_200ml",
    "name": "حليب جهينة ميكس فانيليا 200 مل",
    "nameEn": "Juhayna Mix Vanilla Flavored Milk 200ml",
    "category": "dairy",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/juhayna_mix_vanilla_milk_200ml.png",
    "description": "مشروب حليب جهينة ميكس بنكهة الفانيليا الناعمة والمنعشة، مصدر رائع للكالسيوم والبروتين والنشاط اليومي.",
    "flavor": "فانيليا",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "milka_bubbly_alpine_milk_chocolate_90g",
    "name": "شوكولاتة ميلكا بابلي حليب الألب 90 جم",
    "nameEn": "Milka Bubbly Alpine Milk Chocolate 90g",
    "category": "sweets",
    "price": 75,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ميلكا (Milka)",
    "weight": "90 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/milka_bubbly_alpine_milk_chocolate_90g.png",
    "description": "شوكولاتة ميلكا الأصلية بحليب الألب الطبيعي مع قوام الفقاعات الهوائية الخفيفة والمميزة التي تذوب في الفم.",
    "flavor": "حليب الألب بفقاعات هوائية",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "90 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_full_cream_milk_850ml",
    "name": "حليب مزارع دينا طازج كامل الدسم 850 مل",
    "nameEn": "Dina Farms Fresh Full Cream Milk 850ml",
    "category": "dairy",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/dina_farms_fresh_full_cream_milk_850ml.png",
    "description": "حليب مزارع دينا طازج 100% كامل الدسم مبستر من مزارعنا مباشرة بطعم غني وطبيعي.",
    "flavor": "كامل الدسم",
    "sizes": [
      {
        "name": "عبوة قياسية (55 ج.م)",
        "weight": "850 مل",
        "price": 55,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_soft_white_cheese_500g",
    "name": "جبنة بيضاء طرية مزارع دينا 500 جم",
    "nameEn": "Dina Farms Fresh Soft White Cheese 500g",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "500 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/dina_farms_soft_white_cheese_500g.png",
    "description": "جبنة بيضاء طرية طبيعية 100% من حليب أبقار مزارع دينا بدون أي زيوت نباتية مهدرجة، بطعم كريمي خفيف.",
    "flavor": "أبيض طري",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "500 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_istanbuly_cheese_500g",
    "name": "جبنة إسطنبولي مزارع دينا 500 جم",
    "nameEn": "Dina Farms Istanbuly White Cheese 500g",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "500 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/dina_farms_istanbuly_cheese_500g.png",
    "description": "جبنة إسطنبولي طبيعية 100% من حليب أبقار مزارع دينا بنكهة الفلفل المميزة وبدون أي زيوت نباتية.",
    "flavor": "إسطنبولي",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "500 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_low_salt_cheese_500g",
    "name": "جبنة ملح خفيف مزارع دينا 500 جم",
    "nameEn": "Dina Farms Low Salt White Cheese 500g",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "500 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/dina_farms_low_salt_cheese_500g.png",
    "description": "جبنة بيضاء ملح خفيف طبيعية 100% من حليب أبقار مزارع دينا، مناسبة للأنظمة الغذائية الصحية.",
    "flavor": "ملح خفيف",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "500 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_cottage_cheese_350g",
    "name": "جبنة قريش طبيعية مزارع دينا 350 جم",
    "nameEn": "Dina Farms Natural Cottage Cheese 350g",
    "category": "dairy",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/dina_farms_cottage_cheese_350g.png",
    "description": "جبنة قريش طبيعية 100% من حليب أبقار مزارع دينا الطازج، غنية بالبروتين وقليلة الدسم والملح ومثالية للدايت والرياضيين.",
    "flavor": "قريش طبيعي",
    "sizes": [
      {
        "name": "علبة 350 جم (65 ج.م)",
        "weight": "350 جم",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_orange_juice_850ml",
    "name": "عصير برتقال طازج مزارع دينا 850 مل",
    "nameEn": "Dina Farms Fresh Orange Juice 850ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/dina_farms_fresh_orange_juice_850ml.png",
    "description": "عصير برتقال طبيعي طازج 100% بدون سكر مضاف أو مواد حافظة من بساتين مزارع دينا الغنية بفيتامين ج.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "850 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_baramily_cheese_500g",
    "name": "جبنة براميلي مزارع دينا 500 جم",
    "nameEn": "Dina Farms Baramily White Cheese 500g",
    "category": "dairy",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "500 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/dina_farms_baramily_cheese_500g.png",
    "description": "جبنة براميلي معتقة بطعم أصيل طبيعي 100% من حليب أبقار مزارع دينا بدون زيوت نباتية مهدرجة.",
    "flavor": "براميلي",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "500 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_pineapple_juice_850ml",
    "name": "عصير أناناس طازج مزارع دينا 850 مل",
    "nameEn": "Dina Farms Fresh Pineapple Juice 850ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/dina_farms_fresh_pineapple_juice_850ml.png",
    "description": "عصير أناناس طبيعي ومنعش من مزارع دينا بمذاق استوائي غني ومنعش في كل رشفة بدون مواد حافظة.",
    "flavor": "أناناس",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "850 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_coffee_shake_classic_300ml",
    "name": "مشروب كوفي شيك كلاسيك مزارع دينا 300 مل",
    "nameEn": "Dina Farms Classic Coffee Shake 300ml",
    "category": "drinks",
    "price": 30,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/dina_farms_coffee_shake_classic_300ml.png",
    "description": "مشروب كوفي شيك كلاسيك منعش يجمع بين الحليب الطازج الطبيعي 100% من مزارع دينا والقهوة الفاخرة لطاقة فورية وانتعاش.",
    "flavor": "قهوة كلاسيك",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "300 مل",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_mango_juice_850ml",
    "name": "عصير مانجو طازج مزارع دينا 850 مل",
    "nameEn": "Dina Farms Fresh Mango Juice 850ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/dina_farms_fresh_mango_juice_850ml.png",
    "description": "عصير مانجو طبيعي طازج 100% من مزارع دينا بنكهة غنية ومنعشة.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "850 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_orange_juice_300ml",
    "name": "عصير برتقال طازج مزارع دينا 300 مل",
    "nameEn": "Dina Farms Fresh Orange Juice 300ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/dina_farms_fresh_orange_juice_300ml.png",
    "description": "عصير برتقال طبيعي طازج 100% غني بفيتامين سي من مزارع دينا.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "300 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_frutigo_mango_drinking_yogurt",
    "name": "مشروب زبادي فروتيجو بالمانجو مزارع دينا 250 مل",
    "nameEn": "Dina Farms Frutigo Mango Drinking Yogurt 250ml",
    "category": "dairy",
    "price": 6,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/dina_farms_frutigo_mango_drinking_yogurt.png",
    "description": "زبادي شرب لذيذ بطعم المانجو الطبيعي من مزارع دينا للهضم والانتعاش.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (6 ج.م)",
        "weight": "250 مل",
        "price": 6,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_skimmed_milk_850ml",
    "name": "حليب طازج خالي الدسم مزارع دينا 850 مل",
    "nameEn": "Dina Farms Fresh Skimmed Milk 850ml",
    "category": "dairy",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/dina_farms_fresh_skimmed_milk_850ml.png",
    "description": "حليب بقري طازج مبستر خالي الدسم 100% من مزارع دينا.",
    "flavor": "خالي الدسم",
    "sizes": [
      {
        "name": "عبوة قياسية (55 ج.م)",
        "weight": "850 مل",
        "price": 55,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_lemon_mint_juice_300ml",
    "name": "عصير ليمون بالنعناع طازج مزارع دينا 300 مل",
    "nameEn": "Dina Farms Fresh Lemon Mint Juice 300ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/dina_farms_fresh_lemon_mint_juice_300ml.png",
    "description": "عصير ليمون طبيعي طازج ممزوج بأوراق النعناع المنعشة من مزارع دينا.",
    "flavor": "ليمون بالنعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "300 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_pineapple_juice_850ml_280",
    "name": "عصير أناناس طازج مزارع دينا 850 مل",
    "nameEn": "Dina Farms Fresh Pineapple Juice 850ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "850 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/dina_farms_fresh_pineapple_juice_850ml_280.png",
    "description": "عصير أناناس طبيعي طازج 100% منعش ولذيذ من مزارع دينا.",
    "flavor": "أناناس",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "850 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_natural_rayeb_300ml",
    "name": "لبن رايب طبيعي مزارع دينا 300 مل",
    "nameEn": "Dina Farms Natural Rayeb 300ml",
    "category": "dairy",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/dina_farms_natural_rayeb_300ml.png",
    "description": "لبن رايب طبيعي غني بالبروبيوتيك ومصنوع من حليب أبقار مزارع دينا 100%.",
    "flavor": "طبيعي / سادة",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "300 مل",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_mango_juice_300ml",
    "name": "عصير مانجو طازج مزارع دينا 300 مل",
    "nameEn": "Dina Farms Fresh Mango Juice 300ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/dina_farms_fresh_mango_juice_300ml.png",
    "description": "عصير مانجو طازج طبيعي 100% بطعم غني ومميز من مزارع دينا.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "300 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_milk_chocolate_300ml",
    "name": "حليب طازج بالشوكولاتة مزارع دينا 300 مل",
    "nameEn": "Dina Farms Fresh Chocolate Milk 300ml",
    "category": "dairy",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/dina_farms_fresh_milk_chocolate_300ml.png",
    "description": "حليب أبقار طازج ممزوج بالشوكولاتة اللذيذة والغنية من مزارع دينا.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (55 ج.م)",
        "weight": "300 مل",
        "price": 55,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_frutigo_peach_drinking_yogurt",
    "name": "مشروب زبادي فروتيجو بالخوخ مزارع دينا 250 مل",
    "nameEn": "Dina Farms Frutigo Peach Drinking Yogurt 250ml",
    "category": "dairy",
    "price": 6,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/dina_farms_frutigo_peach_drinking_yogurt.png",
    "description": "زبادي شرب خفيف ومنعش بنكهة الخوخ الطبيعية من مزارع دينا.",
    "flavor": "خوخ",
    "sizes": [
      {
        "name": "عبوة قياسية (6 ج.م)",
        "weight": "250 مل",
        "price": 6,
        "selected": true
      }
    ]
  },
  {
    "id": "dina_farms_fresh_pomegranate_juice_300ml",
    "name": "عصير رمان طازج مزارع دينا 300 مل",
    "nameEn": "Dina Farms Fresh Pomegranate Juice 300ml",
    "category": "drinks",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مزارع دينا (Dina Farms)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/dina_farms_fresh_pomegranate_juice_300ml.png",
    "description": "عصير رمان طبيعي طازج 100% غني بمضادات الأكسدة من مزارع دينا.",
    "flavor": "رمان",
    "sizes": [
      {
        "name": "عبوة قياسية (50 ج.م)",
        "weight": "300 مل",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_berry_mix_juice_125ml",
    "name": "عصير سن توب ميكس توت 125 مل",
    "nameEn": "Suntop Berry Mix Fruit Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/suntop_berry_mix_juice_125ml.png",
    "description": "مشروب فواكه التوت المشكل اللذيذ الغني بفيتامين سي من سن توب.",
    "flavor": "توت مشكل",
    "sizes": [
      {
        "name": "عبوة صغيرة (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pure_red_grapes_juice_1l",
    "name": "عصير جهينة بيور عنب أحمر طبيعي 100% بدون إضافة سكر 1 لتر",
    "nameEn": "Juhayna Pure 100% Red Grapes Juice No Added Sugar 1L",
    "category": "drinks",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/juhayna_pure_red_grapes_juice_1l.png",
    "description": "عصير عنب أحمر طبيعي 100% بدون سكر مضاف أو مواد حافظة بجودة ممتازة من جهينة بيور.",
    "flavor": "عنب أحمر",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "1 لتر",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pure_orange_juice_1l",
    "name": "عصير جهينة بيور برتقال طبيعي 100% بدون إضافة سكر 1 لتر",
    "nameEn": "Juhayna Pure 100% Orange Juice No Added Sugar 1L",
    "category": "drinks",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/juhayna_pure_orange_juice_1l.png",
    "description": "عصير برتقال طبيعي 100% منعش بدون سكر مضاف أو مواد حافظة من جهينة بيور.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "1 لتر",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pure_mango_peach_juice_1l",
    "name": "عصير جهينة بيور مانجو وخوخ طبيعي 100% بدون إضافة سكر 1 لتر",
    "nameEn": "Juhayna Pure 100% Mango Peach Juice No Added Sugar 1L",
    "category": "drinks",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/juhayna_pure_mango_peach_juice_1l.png",
    "description": "مزيج طبيعي فاخر من عصير المانجو والخوخ 100% بدون سكر مضاف من جهينة بيور.",
    "flavor": "مانجو وخوخ",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "1 لتر",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_apple_juice_1l",
    "name": "عصير بيتي تفاح 1 لتر",
    "nameEn": "Beyti Apple Juice Drink 1L",
    "category": "drinks",
    "price": 40,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/beyti_apple_juice_1l.png",
    "description": "عصير تفاح لذيذ ومنعش فائق الجودة من بيتي.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة قياسية (40 ج.م)",
        "weight": "1 لتر",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_lemon_drink_1l",
    "name": "مشروب ليمون مع لمسة نعناع لمار 1 لتر",
    "nameEn": "Lamar Lemon Drink with Mint 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/lamar_lemon_drink_1l.png",
    "description": "مشروب عصير الليمون المنعش مع لمسة خفيفة من النعناع من لمار.",
    "flavor": "ليمون ونعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_mango_drink_1l",
    "name": "مشروب مانجو لمار 1 لتر",
    "nameEn": "Lamar Mango Drink 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/lamar_mango_drink_1l.png",
    "description": "مشروب مانجو طبيعي وغني بالنكهة اللذيذة من مزارع لمار.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pure_guava_cocktail_juice_1l",
    "name": "عصير جهينة بيور كوكتيل جوافة طبيعي 100% بدون إضافة سكر 1 لتر",
    "nameEn": "Juhayna Pure 100% Guava Cocktail Juice No Added Sugar 1L",
    "category": "drinks",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/juhayna_pure_guava_cocktail_juice_1l.png",
    "description": "عصير كوكتيل جوافة وتفاح طبيعي 100% بدون سكر مضاف من جهينة بيور.",
    "flavor": "كوكتيل جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "1 لتر",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pina_colada_fruit_drink_1l",
    "name": "مشروب جهينة بينا كولادا جوز هند وأناناس 1 لتر",
    "nameEn": "Juhayna Pina Colada Coconut & Pineapple Fruit Drink 1L",
    "category": "drinks",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/juhayna_pina_colada_fruit_drink_1l.png",
    "description": "مشروب فواكه استوائي منعش بمزيج حليب جوز الهند وعصير الأناناس من جهينة.",
    "flavor": "بينا كولادا (أناناس وجوز هند)",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "1 لتر",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_pineapple_cocktail_nectar_1l",
    "name": "عصير كوكتيل أناناس نكتار المراعي 1 لتر",
    "nameEn": "Almarai Pineapple Cocktail Nectar 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/almarai_pineapple_cocktail_nectar_1l.png",
    "description": "نكتار كوكتيل أناناس فائق الجودة بدون ألوان صناعية من المراعي.",
    "flavor": "كوكتيل أناناس",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_mango_nectar_1l",
    "name": "عصير مانجو نكتار المراعي فائق الجودة 1 لتر",
    "nameEn": "Almarai Mango Nectar Premium Quality 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/almarai_mango_nectar_1l.png",
    "description": "نكتار مانجو طبيعي وسميك بدون ألوان صناعية بجودة المراعي الفائقة.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_guava_nectar_1l",
    "name": "عصير بيتي جوافة 1 لتر",
    "nameEn": "Beyti Guava Nectar 1L",
    "category": "drinks",
    "price": 40,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/beyti_guava_nectar_1l.png",
    "description": "عصير نكتار جوافة طبيعي غني بالقوام والنكهة الطازجة من بيتي.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (40 ج.م)",
        "weight": "1 لتر",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_orange_juice_blend_200ml",
    "name": "عصير برتقال لمار 100% طبيعي بدون إضافة سكر 200 مل",
    "nameEn": "Lamar 100% Orange Juice Blend No Added Sugar 200ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/lamar_orange_juice_blend_200ml.png",
    "description": "عصير برتقال طبيعي 100% بدون إضافة سكر أو مواد حافظة بحجم فردي عملي من لمار.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة فردية (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_guava_nectar_1l",
    "name": "عصير جوافة نكتار المراعي فائق الجودة 1 لتر",
    "nameEn": "Almarai Guava Nectar Premium Quality 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/almarai_guava_nectar_1l.png",
    "description": "نكتار جوافة طبيعي بقوام ناعم ومذاق غني بدون ألوان صناعية من المراعي.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mon_cherry_juice_1l",
    "name": "عصير جهينة مون شيري كرز 1 لتر",
    "nameEn": "Juhayna Mon Cherry Fruit Drink 1L",
    "category": "drinks",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/juhayna_mon_cherry_juice_1l.png",
    "description": "مشروب فاكهة كرز طبيعي فاخر من جهينة بدون مواد حافظة أو محليات صناعية.",
    "flavor": "كرز",
    "sizes": [
      {
        "name": "عبوة عائلية (38 ج.م)",
        "weight": "1 لتر",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_apple_juice_235ml",
    "name": "عصير المراعي تفاح فائق الجودة 235 مل",
    "nameEn": "Almarai Apple Premium Quality Juice Drink 235ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/almarai_apple_juice_235ml.png",
    "description": "عصير تفاح منعش ولذيذ فائق الجودة من المراعي مع شاليموه للاستمتاع في أي وقت.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "235 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_orange_juice_1l",
    "name": "عصير بيتي برتقال فائق الجودة 1 لتر",
    "nameEn": "Beyti Orange Juice Drink 1L",
    "category": "drinks",
    "price": 40,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/beyti_orange_juice_1l.png",
    "description": "عصير برتقال طبيعي غني بفيتامين سي من بيتي بمذاق منعش وجودة فائقة.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (40 ج.م)",
        "weight": "1 لتر",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_cocktail_juice_1l",
    "name": "عصير بيتي كوكتيل فواكه فائق الجودة 1 لتر",
    "nameEn": "Beyti Mixed Fruit Cocktail Juice Drink 1L",
    "category": "drinks",
    "price": 40,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/beyti_cocktail_juice_1l.png",
    "description": "مزيج شهي من الفواكه المشكلة فائقة الجودة من بيتي لإنعاش يومك.",
    "flavor": "كوكتيل فواكه",
    "sizes": [
      {
        "name": "عبوة قياسية (40 ج.م)",
        "weight": "1 لتر",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_tomato_juice_100_percent_1l",
    "name": "عصير لمار طماطم 100% بدون سكر مضاف 1 لتر",
    "nameEn": "Lamar 100% Pure Tomato Juice No Sugar Added 1L",
    "category": "drinks",
    "price": 48,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/lamar_tomato_juice_100_percent_1l.png",
    "description": "عصير طماطم نقي 100% طبيعي وغني بالعناصر الغذائية بدون سكر مضاف من لمار.",
    "flavor": "طماطم",
    "sizes": [
      {
        "name": "عبوة قياسية (48 ج.م)",
        "weight": "1 لتر",
        "price": 48,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_guava_juice_blend_100_percent_200ml",
    "name": "عصير لمار جوافة 100% بدون سكر مضاف 200 مل",
    "nameEn": "Lamar 100% Guava Juice Blend No Added Sugar 200ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/lamar_guava_juice_blend_100_percent_200ml.png",
    "description": "عصير جوافة طبيعي 100% بدون إضافة سكر وبجودة متميزة من لمار.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_guava_juice_blend_100_percent_200ml_dup",
    "name": "عصير لمار جوافة 100% بدون سكر مضاف 200 مل",
    "nameEn": "Lamar 100% Guava Juice Blend No Added Sugar 200ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/lamar_guava_juice_blend_100_percent_200ml_dup.png",
    "description": "عصير جوافة طبيعي 100% بدون سكر مضاف من لمار، بطعم طبيعي وغني.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_pure_orange_juice_235ml",
    "name": "عصير جهينة بيور برتقال 100% طبيعي بدون سكر مضاف 235 مل",
    "nameEn": "Juhayna Pure 100% Orange Juice No Sugar Added 235ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/juhayna_pure_orange_juice_235ml.png",
    "description": "عصير برتقال نقي 100% بدون سكر مضاف وبدون مواد حافظة من جهينة بيور.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "235 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_mixed_berries_juice_235ml",
    "name": "عصير جهينة مكس بيري توت مشكل 235 مل",
    "nameEn": "Juhayna Mixed Berries Fruit Drink 235ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/juhayna_mixed_berries_juice_235ml.png",
    "description": "مشروب توت مشكل فاخر ومنعش من جهينة بدون مواد حافظة أو محليات صناعية.",
    "flavor": "توت مشكل",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "235 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_orange_juice_1l",
    "name": "عصير المراعي برتقال فائق الجودة 1 لتر",
    "nameEn": "Almarai Orange Premium Quality Juice Drink 1L",
    "category": "drinks",
    "price": 42,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/almarai_orange_juice_1l.png",
    "description": "عصير برتقال منعش فائق الجودة وبدون ألوان صناعية من المراعي بحجم عائلي.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 لتر",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "almarai_guava_juice_250ml",
    "name": "عصير المراعي جوافة فائق الجودة 250 مل",
    "nameEn": "Almarai Guava Premium Quality Juice Drink 250ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "المراعي (Almarai)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/almarai_guava_juice_250ml.png",
    "description": "عصير جوافة لذيذ فائق الجودة بدون نكهات صناعية من المراعي.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة فردية (12 ج.م)",
        "weight": "250 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "rani_float_peach_can_240ml",
    "name": "مشروب راني حبيبات خوخ مع قطع الفواكه 240 مل",
    "nameEn": "Rani Float Peach Drink with Real Fruit Chunks 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/rani_float_peach_can_240ml.png",
    "description": "مشروب خوخ منعش ممزوج بقطع فواكه طبيعية حقيقية من راني حبيبات.",
    "flavor": "خوخ مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "rani_float_pineapple_can_240ml",
    "name": "مشروب راني حبيبات أناناس مع قطع الفواكه 240 مل",
    "nameEn": "Rani Float Pineapple Drink with Real Fruit Chunks 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/rani_float_pineapple_can_240ml.png",
    "description": "عصير أناناس استوائي منعش مع قطع أناناس طبيعية من راني حبيبات.",
    "flavor": "أناناس مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "rani_float_strawberry_banana_can_240ml",
    "name": "مشروب راني حبيبات فراولة وموز مع قطع الفواكه 240 مل",
    "nameEn": "Rani Float Strawberry & Banana Drink with Real Fruit Chunks 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/rani_float_strawberry_banana_can_240ml.png",
    "description": "مشروب بنكهة الفراولة والموز الغنية مع قطع فواكه طبيعية من راني حبيبات.",
    "flavor": "فراولة وموز مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "v7_sparkling_pinacolada_300ml",
    "name": "مشروب في 7 فوار بالفيتامينات نكهة بينا كولادا 300 مل",
    "nameEn": "V7 Vitamin Sparkling Drink Pinacolada Flavor 300ml",
    "category": "energy",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "في 7 (V7)",
    "weight": "300 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/v7_sparkling_pinacolada_300ml.png",
    "description": "مشروب فوار معزز بالفيتامينات والمناعة بنكهة البينا كولادا الطبيعية من في 7.",
    "flavor": "بينا كولادا (أناناس وجوز هند)",
    "sizes": [
      {
        "name": "كانز 250 مل (10 ج.م)",
        "weight": "250 مل",
        "price": 10,
        "selected": true
      },
      {
        "name": "كانز 330 مل (12 ج.م)",
        "weight": "330 مل",
        "price": 12
      }
    ]
  },
  {
    "id": "rani_float_orange_can_240ml",
    "name": "مشروب راني حبيبات برتقال مع قطع الفواكه 240 مل",
    "nameEn": "Rani Float Orange Drink with Real Fruit Chunks 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/rani_float_orange_can_240ml.png",
    "description": "مشروب برتقال منعش ولذيذ يحتوي على قطع برتقال حقيقية من راني حبيبات.",
    "flavor": "برتقال مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "rani_float_mango_can_240ml",
    "name": "مشروب راني حبيبات مانجو مع قطع الفواكه 240 مل",
    "nameEn": "Rani Float Mango Drink with Real Fruit Chunks 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/rani_float_mango_can_240ml.png",
    "description": "مشروب مانجو غني ولذيذ مع قطع مانجو طبيعية حقيقية من راني حبيبات.",
    "flavor": "مانجو مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_alphonso_mango_juice_125ml",
    "name": "عصير سن توب بنكهة مانجو ألفونسو 125 مل",
    "nameEn": "Suntop Alphonso Mango Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/suntop_alphonso_mango_juice_125ml.png",
    "description": "شراب مانجو ألفونسو اللذيذ والغني بفيتامين سي من سن توب للأطفال والكبار.",
    "flavor": "مانجو ألفونسو",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_orange_juice_125ml",
    "name": "عصير سن توب بنكهة البرتقال 125 مل",
    "nameEn": "Suntop Orange Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/suntop_orange_juice_125ml.png",
    "description": "شراب برتقال منعش غني بفيتامين سي من سن توب مع شاليموه.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_apple_juice_125ml",
    "name": "عصير سن توب بنكهة التفاح 125 مل",
    "nameEn": "Suntop Apple Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/suntop_apple_juice_125ml.png",
    "description": "شراب تفاح لذيذ غني بفيتامين سي من سن توب مثالي للرحلات ولانش بوكس المدارس.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_apple_juice_235ml",
    "name": "عصير بيتي تفاح مشروب فائق الجودة 235 مل",
    "nameEn": "Beyti Apple Juice Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/beyti_apple_juice_235ml.png",
    "description": "مشروب تفاح فائق الجودة بدون ألوان صناعية أو مواد حافظة من بيتي.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة فردية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_mango_juice_235ml",
    "name": "عصير بيتي مانجو مشروب فائق الجودة 235 مل",
    "nameEn": "Beyti Mango Juice Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/beyti_mango_juice_235ml.png",
    "description": "عصير مانجو بطعم الفاكهة الغني واللذيذ فائق الجودة بدون مواد حافظة من بيتي.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة فردية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_orange_juice_235ml",
    "name": "عصير بيتي برتقال مشروب فائق الجودة 235 مل",
    "nameEn": "Beyti Orange Juice Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/beyti_orange_juice_235ml.png",
    "description": "عصير برتقال منعش فائق الجودة بدون ألوان صناعية من بيتي 235 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة فردية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "obour_land_guava_drink_200ml",
    "name": "عصير عبور لاند بنكهة الجوافة 200 مل",
    "nameEn": "Obour Land Guava Drink 200ml",
    "category": "drinks",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "عبور لاند (Obour Land)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/obour_land_guava_drink_200ml.png",
    "description": "مشروب جوافة طبيعي ولذيذ من عبور لاند بطعم أفضل وانتعاش يومي.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "علبة 500 جم (42 ج.م)",
        "weight": "500 جم",
        "price": 42,
        "selected": true
      },
      {
        "name": "علبة 250 جم (26 ج.م)",
        "weight": "250 جم",
        "price": 26
      },
      {
        "name": "علبة عائلية 1 كجم (80 ج.م)",
        "weight": "1 كجم",
        "price": 80
      }
    ]
  },
  {
    "id": "lamar_pineapple_drink_200ml",
    "name": "عصير لمار أناناس مشروب فاكهة 200 مل",
    "nameEn": "Lamar Pineapple Fruit Drink 200ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/lamar_pineapple_drink_200ml.png",
    "description": "مشروب أناناس منعش ولذيذ بجودة لمار المتميزة في عبوة عملية 200 مل.",
    "flavor": "أناناس",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_guava_drink_200ml",
    "name": "عصير لمار جوافة 200 مل",
    "nameEn": "Lamar Guava Fruit Drink 200ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/lamar_guava_drink_200ml.png",
    "description": "مشروب جوافة طبيعي ومنعش من لمار بحجم 200 مل مناسب للاستخدام الفردي وللأطفال.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_lemon_mint_drink_200ml",
    "name": "عصير لمار ليمون بالنعناع 200 مل",
    "nameEn": "Lamar Lemon Mint Drink 200ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/lamar_lemon_mint_drink_200ml.png",
    "description": "مشروب ليمون مع لمسة نعناع منعشة من لمار بحجم 200 مل.",
    "flavor": "ليمون بالنعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_apple_drink_235ml",
    "name": "عصير أصلان تفاح 235 مل",
    "nameEn": "Aslan Apple Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/aslan_apple_drink_235ml.png",
    "description": "مشروب تفاح منعش وغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_cocktail_drink_235ml",
    "name": "عصير بيتي كوكتيل فواكه 235 مل",
    "nameEn": "Beyti Cocktail Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/beyti_cocktail_drink_235ml.png",
    "description": "مشروب كوكتيل فواكه مشكلة فائق الجودة من بيتي بحجم 235 مل.",
    "flavor": "كوكتيل فواكه",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_cocktail_drink_235ml",
    "name": "عصير أصلان كوكتيل فواكه 235 مل",
    "nameEn": "Aslan Cocktail Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/aslan_cocktail_drink_235ml.png",
    "description": "مشروب كوكتيل فواكه مشكلة غني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "كوكتيل فواكه",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_tropical_drink_235ml",
    "name": "عصير أصلان فواكه استوائية (تروبيكال) 235 مل",
    "nameEn": "Aslan Tropical Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/aslan_tropical_drink_235ml.png",
    "description": "مشروب فواكه استوائية منعش وغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "فواكه استوائية",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_orange_drink_235ml",
    "name": "عصير جهينة برتقال 235 مل",
    "nameEn": "Juhayna Orange Fruit Drink 235ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/juhayna_orange_drink_235ml.png",
    "description": "عصير برتقال فاخر من جهينة بدون مواد حافظة أو محليات صناعية بحجم 235 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "235 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_pineapple_drink_235ml",
    "name": "عصير أصلان أناناس 235 مل",
    "nameEn": "Aslan Pineapple Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/aslan_pineapple_drink_235ml.png",
    "description": "مشروب أناناس منعش وغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "أناناس",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_pure_tomato_juice_200ml",
    "name": "عصير لمار طماطم 100% طبيعي بدون سكر مضاف 200 مل",
    "nameEn": "Lamar 100% Pure Tomato Juice 200ml",
    "category": "drinks",
    "price": 14,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/lamar_pure_tomato_juice_200ml.png",
    "description": "عصير طماطم طبيعي 100% بدون سكر مضاف من لمار بحجم 200 مل.",
    "flavor": "طماطم",
    "sizes": [
      {
        "name": "عبوة قياسية (14 ج.م)",
        "weight": "200 مل",
        "price": 14,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_bekhero_mango_drink_225ml",
    "name": "عصير جهينة بخيره مانجو 225 مل",
    "nameEn": "Juhayna Bekhero Mango Drink 225ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة بخيره (Juhayna Bekhero)",
    "weight": "225 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/juhayna_bekhero_mango_drink_225ml.png",
    "description": "مشروب مانجو طبيعي ولذيذ بدون مواد حافظة مضافة من جهينة بخيره بحجم 225 مل.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "225 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_mango_drink_235ml",
    "name": "عصير أصلان مانجو 235 مل",
    "nameEn": "Aslan Mango Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/aslan_mango_drink_235ml.png",
    "description": "مشروب مانجو لذيذ وغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_plus_lemon_mint_235ml",
    "name": "عصير بيتي بلس ليمون نعناع 235 مل",
    "nameEn": "Beyti Plus Lemon Mint Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/beyti_plus_lemon_mint_235ml.png",
    "description": "مشروب ليمون نعناع منعش وغني بفيتامين سي من بيتي بلس بحجم 235 مل.",
    "flavor": "ليمون نعناع",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_orange_drink_235ml",
    "name": "عصير أصلان برتقال 235 مل",
    "nameEn": "Aslan Orange Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/aslan_orange_drink_235ml.png",
    "description": "مشروب برتقال منعش وغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_plus_orange_235ml",
    "name": "عصير بيتي بلس برتقال 235 مل",
    "nameEn": "Beyti Plus Orange Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/beyti_plus_orange_235ml.png",
    "description": "مشروب برتقال لذيذ وغني بفيتامين سي من بيتي بلس بحجم 235 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_bekhero_apple_drink_225ml",
    "name": "عصير جهينة بخيره تفاح 225 مل",
    "nameEn": "Juhayna Bekhero Apple Drink 225ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة بخيره (Juhayna Bekhero)",
    "weight": "225 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/juhayna_bekhero_apple_drink_225ml.png",
    "description": "مشروب تفاح منعش ولذيذ بدون مواد حافظة مضافة من جهينة بخيره بحجم 225 مل.",
    "flavor": "تفاح",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "225 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_pink_lemon_drink_125ml",
    "name": "عصير سن توب ليمون وردي 125 مل",
    "nameEn": "Suntop Pink Lemon Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/suntop_pink_lemon_drink_125ml.png",
    "description": "مشروب ليمون وردي منعش وغني بنسبة عالية من فيتامين سي من سن توب.",
    "flavor": "ليمون وردي",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "beyti_guava_drink_235ml",
    "name": "عصير بيتي جوافة 235 مل",
    "nameEn": "Beyti Guava Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بيتي (Beyti)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/beyti_guava_drink_235ml.png",
    "description": "مشروب جوافة مصري طبيعي ولذيذ فائق الجودة من بيتي بحجم 235 مل.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_bekhero_guava_drink_225ml",
    "name": "عصير جهينة بخيره جوافة 225 مل",
    "nameEn": "Juhayna Bekhero Guava Drink 225ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة بخيره (Juhayna Bekhero)",
    "weight": "225 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/juhayna_bekhero_guava_drink_225ml.png",
    "description": "مشروب جوافة طبيعي ومنعش بدون مواد حافظة مضافة من جهينة بخيره بحجم 225 مل.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "225 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "juhayna_cocktail_drink_235ml",
    "name": "عصير جهينة كوكتيل فواكه 235 مل",
    "nameEn": "Juhayna Cocktail Fruit Drink 235ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جهينة (Juhayna)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/juhayna_cocktail_drink_235ml.png",
    "description": "مشروب كوكتيل فواكه مشكلة فاخر من جهينة بدون مواد حافظة أو محليات صناعية بحجم 235 مل.",
    "flavor": "كوكتيل فواكه",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "235 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_guava_drink_235ml",
    "name": "عصير أصلان جوافة 235 مل",
    "nameEn": "Aslan Guava Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/aslan_guava_drink_235ml.png",
    "description": "مشروب جوافة لذيذ ومنعش غني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "جوافة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "rani_float_cocktail_can_240ml",
    "name": "عصير راني حبيبات كوكتيل قطع فواكه طبيعية كانز 240 مل",
    "nameEn": "Rani Float Cocktail Fruit Drink Can 240ml",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "راني (Rani)",
    "weight": "240 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/rani_float_cocktail_can_240ml.png",
    "description": "مشروب كوكتيل فاكهة منعش مع قطع وحبيبات الفواكه الحقيقية من راني في عبوة كانز 240 مل.",
    "flavor": "كوكتيل مع قطع فواكه",
    "sizes": [
      {
        "name": "كانز 240 مل (15 ج.م)",
        "weight": "240 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_spicy_mandarin_drink_125ml",
    "name": "عصير سن توب يوسفي مشطشط (حار) 125 مل",
    "nameEn": "Suntop Spicy Mandarin Fruit Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/suntop_spicy_mandarin_drink_125ml.png",
    "description": "مشروب يوسفي بنكهة مميزة وحارة ومبتكرة وغني بفيتامين سي من سن توب.",
    "flavor": "يوسفي مشطشط",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "aslan_mango_peach_drink_235ml",
    "name": "عصير أصلان مانجو وخوخ 235 مل",
    "nameEn": "Aslan Mango Peach Fruit Drink 235ml",
    "category": "drinks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أصلان (Aslan)",
    "weight": "235 مل",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/aslan_mango_peach_drink_235ml.png",
    "description": "مشروب مزيج المانجو والخوخ اللذيذ والغني بفيتامين سي من أصلان بحجم 235 مل.",
    "flavor": "مانجو وخوخ",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "235 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "lamar_orange_drink_200ml",
    "name": "عصير لمار برتقال 200 مل",
    "nameEn": "Lamar Orange Fruit Drink 200ml",
    "category": "drinks",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمار (Lamar)",
    "weight": "200 مل",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/lamar_orange_drink_200ml.png",
    "description": "مشروب برتقال طبيعي ومنعش من لمار بحجم 200 مل.",
    "flavor": "برتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "200 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "suntop_mixed_fruit_drink_125ml",
    "name": "عصير سن توب فواكه مشكلة 125 مل",
    "nameEn": "Suntop Mixed Fruit Drink 125ml",
    "category": "drinks",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سن توب (Suntop)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/suntop_mixed_fruit_drink_125ml.png",
    "description": "مشروب فواكه مشكلة لذيذ وغني بنسبة عالية من فيتامين سي من سن توب بحجم 125 مل.",
    "flavor": "فواكه مشكلة",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "125 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "fruty_peach_instant_drink_powder_sachet",
    "name": "مسحوق مشروب سريع التحضير بنكهة الخوخ فروتي لتحضير 1 لتر",
    "nameEn": "Fruty Peach Instant Drink Powder Sachet 1L",
    "category": "drinks",
    "price": 6,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فروتي (Fruty)",
    "weight": "لتحضير 1 لتر",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/fruty_peach_instant_drink_powder_sachet.png",
    "description": "مسحوق مشروب سريع التحضير بطعم الخوخ اللذيذ والمنعش من فروتي، محلى وجاهز للتحضير الفوري بإضافة الماء فقط.",
    "flavor": "خوخ",
    "sizes": [
      {
        "name": "عبوة قياسية (6 ج.م)",
        "weight": "1 لتر",
        "price": 6,
        "selected": true
      }
    ]
  },
  {
    "id": "yalla_smoozy_mixed_berries_40g",
    "name": "مسحوق سموزي توت مشكل بمسحوق الفاكهة الطبيعية يلا سموزي 40 جم",
    "nameEn": "Yalla Smoozy Mixed Berries Instant Smoothie Mix 40g",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "يلا سموزي (Yalla Smoozy)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/yalla_smoozy_mixed_berries_40g.png",
    "description": "خلطة سموزي سريعة التحضير بمسحوق الفاكهة الطبيعية ونكهة التوت المشكل المنعشة، فقط أضف الثلج واخفق لعمل 1 لتر.",
    "flavor": "توت مشكل",
    "sizes": [
      {
        "name": "عبوة 40 جم (15 ج.م)",
        "weight": "40 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "yalla_smoozy_pina_colada_40g",
    "name": "مسحوق سموزي بينا كولادا أناناس وجوز هند يلا سموزي 40 جم",
    "nameEn": "Yalla Smoozy Pina Colada Instant Smoothie Mix 40g",
    "category": "drinks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "يلا سموزي (Yalla Smoozy)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/yalla_smoozy_pina_colada_40g.png",
    "description": "خلطة سموزي استوائية سريعة التحضير بنكهة البينا كولادا الغنية بالأناناس وجوز الهند ومسحوق الفاكهة الطبيعية.",
    "flavor": "بينا كولادا (أناناس وجوز هند)",
    "sizes": [
      {
        "name": "عبوة 40 جم (15 ج.م)",
        "weight": "40 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "tang_mango_powder_drink_2l",
    "name": "مسحوق مشروب سريع التحضير بطعم المانجو تانج لتحضير 2 لتر",
    "nameEn": "Tang Mango Flavored Instant Drink Powder 2L",
    "category": "drinks",
    "price": 6,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تانج (Tang)",
    "weight": "لتحضير 2 لتر",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/tang_mango_powder_drink_2l.png",
    "description": "مسحوق مشروب تانج سريع التحضير بطعم المانجو الطبيعي الغني بالفيتامينات C و D والزنك لدعم المناعة والنشاط.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (6 ج.م)",
        "weight": "لتحضير 2 لتر",
        "price": 6,
        "selected": true
      }
    ]
  },
  {
    "id": "afia_sunflower_oil_1_6l",
    "name": "زيت عباد الشمس النقي عافية يدعم المناعة 1.6 لتر",
    "nameEn": "Afia Pure Sunflower Oil 1.6L",
    "category": "groceries",
    "price": 195,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "عافية (Afia)",
    "weight": "1.6 لتر",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/afia_sunflower_oil_1_6l.png",
    "description": "زيت عباد شمس صافي 100% عالي الجودة من عافية خفيف وصحي للطهي والقلي ومدعم بالفيتامينات لتعزيز المناعة.",
    "flavor": "عباد الشمس",
    "sizes": [
      {
        "name": "عبوة قياسية (195 ج.م)",
        "weight": "1.6 لتر",
        "price": 195,
        "selected": true
      }
    ]
  },
  {
    "id": "dolphin_light_chunk_tuna_185g",
    "name": "تونة دولفين قطع في زيت نباتي 185 جم",
    "nameEn": "Dolphin Chunk Light Meat Tuna in Vegetable Oil 185g",
    "category": "groceries",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دولفين (Dolphin)",
    "weight": "185 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/dolphin_light_chunk_tuna_185g.png",
    "description": "تونة دولفين قطع لحم أبيض فاخرة في زيت نباتي نقي، غنية بالبروتين والأوميجا 3 وسهلة الفتح لوجبة سريعة وصحية.",
    "flavor": "تونة قطع",
    "sizes": [
      {
        "name": "عبوة قياسية (38 ج.م)",
        "weight": "185 جم",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "smart_mixed_cooking_oil_700ml",
    "name": "زيت خليط للطبخ والقلي سمارت 700 مل",
    "nameEn": "Smart Blended Cooking & Frying Oil 700ml",
    "category": "groceries",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سمارت (Smart)",
    "weight": "700 مل",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/smart_mixed_cooking_oil_700ml.png",
    "description": "زيت خليط نقي واقتصادي للطبخ والتحمير والقلي من سمارت، مناسب لمختلف الأكلات والاحتياجات اليومية.",
    "flavor": "زيت خليط",
    "sizes": [
      {
        "name": "زجاجة 700 مل (45 ج.م)",
        "weight": "700 مل",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "crystal_sunflower_oil_5l",
    "name": "زيت عباد الشمس النقي كريستال حجم عائلي 5 لتر",
    "nameEn": "Crystal Pure Sunflower Oil Family Size 5L",
    "category": "groceries",
    "price": 95,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كريستال (Crystal)",
    "weight": "5 لتر",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/crystal_sunflower_oil_5l.png",
    "description": "زيت عباد شمس نقي 100% ممتاز من كريستال بحجم عائلي 5 لتر، خفيف وصحي للطبخ والقلي اليومي بدون كوليسترول.",
    "flavor": "عباد الشمس",
    "sizes": [
      {
        "name": "زجاجة 800 مل (95 ج.م)",
        "weight": "800 مل",
        "price": 95,
        "selected": true
      },
      {
        "name": "زجاجة 1.6 لتر (185 ج.م)",
        "weight": "1.6 لتر",
        "price": 185
      },
      {
        "name": "زجاجة عائلية 2.2 لتر (255 ج.م)",
        "weight": "2.2 لتر",
        "price": 255
      }
    ]
  },
  {
    "id": "crystal_pure_corn_oil_2_2l",
    "name": "زيت ذرة نقي كريستال عبوة بيد 2.2 لتر",
    "nameEn": "Crystal Pure Corn Oil with Handle 2.2L",
    "category": "groceries",
    "price": 310,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كريستال (Crystal)",
    "weight": "2.2 لتر",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/crystal_pure_corn_oil_2_2l.png",
    "description": "زيت ذرة نقي 100% فاخر من كريستال، يعطي نكهة ذهبية مميزة وخفيف على المعدة ومثالي لكافة الطبخات والحلويات.",
    "flavor": "ذرة",
    "sizes": [
      {
        "name": "عبوة قياسية (310 ج.م)",
        "weight": "2.2 لتر",
        "price": 310,
        "selected": true
      }
    ]
  },
  {
    "id": "helwa_cooking_frying_oil_2_25l",
    "name": "زيت خليط للطبخ والقلي والتحمير حلوة 2.25 لتر",
    "nameEn": "Helwa Blended Cooking & Frying Oil 2.25L",
    "category": "groceries",
    "price": 155,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلوة (Helwa)",
    "weight": "2.25 لتر",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/helwa_cooking_frying_oil_2_25l.png",
    "description": "زيت خليط اقتصادي عالي الجودة مخصص للتحمير والقلي من حلوة، يمنح الأكلات قرمشة ذهبية وخفة فائقة.",
    "flavor": "زيت خليط",
    "sizes": [
      {
        "name": "زجاجة 2.25 لتر (155 ج.م)",
        "weight": "2.25 لتر",
        "price": 155,
        "selected": true
      }
    ]
  },
  {
    "id": "wadi_food_natural_vinegar_1l",
    "name": "خل أبيض طبيعي نقي وادي فود 1 لتر",
    "nameEn": "Wadi Food Natural Pure White Vinegar 1L",
    "category": "groceries",
    "price": 22,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "وادي فود (Wadi Food)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/wadi_food_natural_vinegar_1l.png",
    "description": "خل أبيض طبيعي نقي 100% عالي الجودة من وادي فود، مثالي لتتبيل السلطات واللحوم وأغراض الطبخ والتخليل.",
    "flavor": "خل أبيض طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (22 ج.م)",
        "weight": "1 لتر",
        "price": 22,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_chicken_stock_24_cubes",
    "name": "مرقة دجاج كنور فاين فودز عبوة التوفير 24 مكعب",
    "nameEn": "Knorr Chicken Stock 24 Cubes Value Pack",
    "category": "groceries",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "24 مكعب",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/knorr_chicken_stock_24_cubes.png",
    "description": "مكعبات مرقة دجاج كنور الفاخرة المصنوعة من خلاصة التوابل والأعشاب الطبيعية لنكهة غنية وشهية لجميع الطبخات.",
    "flavor": "دجاج",
    "sizes": [
      {
        "name": "علبة 24 مكعب (42 ج.م)",
        "weight": "24 مكعب",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "heinz_creamy_mayonnaise_twin_pack",
    "name": "عرض مايونيز هاينز الأصلي برطمانين (قطعتين)",
    "nameEn": "Heinz Creamy Original Mayonnaise Twin Pack (2 Jars)",
    "category": "groceries",
    "price": 48,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هاينز (Heinz)",
    "weight": "2 × 310 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/heinz_creamy_mayonnaise_twin_pack.png",
    "description": "عرض توفيري مميز من مايونيز هاينز الكريمي الغني بالقوام الناعم والمذاق اللذيذ للسندوتشات والوجبات والسلطات.",
    "flavor": "مايونيز كريمي أصلي",
    "sizes": [
      {
        "name": "عبوة قياسية (48 ج.م)",
        "weight": "2 برطمان",
        "price": 48,
        "selected": true
      }
    ]
  },
  {
    "id": "el_bawadi_pure_sesame_tahina_480g",
    "name": "طحينة بيضاء سمسم محمص نقي 100% البوادي 480 جم",
    "nameEn": "El Bawadi Pure Roasted Sesame Tahina 480g",
    "category": "groceries",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "البوادي (El Bawadi)",
    "weight": "480 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/el_bawadi_pure_sesame_tahina_480g.png",
    "description": "طحينة بيضاء فاخرة مصنوعة من 100% سمسم محمص ومطحون بعناية من البوادي بقوام ناعم وطعم أصيل.",
    "flavor": "طحينة سمسم",
    "sizes": [
      {
        "name": "عبوة 480 جم (75 ج.م)",
        "weight": "480 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "cadbury_moro_chocolate_bar_1_5x_364",
    "name": "شوكولاتة كادبوري مورو بالكراميل والنوجا حجم أكبر 1.5X",
    "nameEn": "Cadbury Moro Chocolate Bar with Caramel & Nougat 1.5X",
    "category": "sweets",
    "price": 30,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كادبوري (Cadbury)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/cadbury_moro_chocolate_bar_1_5x_364.png",
    "description": "لوح شوكولاتة كادبوري مورو الشهيرة بحشوة غنية من الكراميل السايح والنوجا المغطاة بشوكولاتة الحليب الفاخرة.",
    "flavor": "شوكولاتة بالحليب مع الكراميل والنوجا",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "50 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_cake_chef_baking_powder_23g",
    "name": "بيكنج بودر كيك شيف مع محسنات الكيك دريم 23 جم",
    "nameEn": "Dreem Cake Chef Baking Powder with Improvers 23g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "23 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/dreem_cake_chef_baking_powder_23g.png",
    "description": "بيكنج بودر كيك شيف بتركيبة محسنة ومبتكرة من دريم لضمان كيكة هشة ومرتفعة وبلون فاتح ومثالي في كل مرة.",
    "flavor": "بيكنج بودر ومحسن كيك",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "23 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_vanillin_sugar_2g",
    "name": "فانيليا بالسكر دريم برائحة مميزة 2 جم",
    "nameEn": "Dreem Vanillin Sugar Sachet 2g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "2 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/dreem_vanillin_sugar_2g.png",
    "description": "فانيليا بالسكر نقية وعالية الجودة من دريم تمنح الحلويات والمخبوزات والكيكات نكهة فانيليا غنية ورائحة زكية.",
    "flavor": "فانيليا",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "2 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_instant_dry_yeast_12g",
    "name": "خميرة جافة فورية ممتازة دريم 12 جم",
    "nameEn": "Dreem Premium Instant Dry Yeast 12g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "12 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/dreem_instant_dry_yeast_12g.png",
    "description": "خميرة جافة فورية عالية الفعالية وسريعة التخمير من دريم لنتائج مضمونة وعجينة هشة للمخبوزات والمعجنات والبيتزا.",
    "flavor": "خميرة فورية",
    "sizes": [
      {
        "name": "كيس 12 جم (5 ج.م)",
        "weight": "12 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "cooks_fine_iodized_salt_shaker_700g",
    "name": "ملح طعام مكرر يودي ناعم كوكس ملاحة 700 جم",
    "nameEn": "Cook's Fine Iodized Table Salt Shaker 700g",
    "category": "groceries",
    "price": 18,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكس (Cook's)",
    "weight": "700 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/cooks_fine_iodized_salt_shaker_700g.png",
    "description": "ملح طعام مكرر يودي ناعم عالي النقاء والجودة في عبوة ملاحة مريحة ومحكمة الغلق لسهولة الاستخدام اليومي.",
    "flavor": "ملح يودي ناعم",
    "sizes": [
      {
        "name": "عبوة قياسية (18 ج.م)",
        "weight": "700 جم",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_spaghetti_pasta_400g",
    "name": "مكرونة اسباجيتي الملكة 400 جم",
    "nameEn": "El Maleka Spaghetti Pasta 400g",
    "category": "groceries",
    "price": 14.5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/el_maleka_spaghetti_pasta_400g.png",
    "description": "مكرونة اسباجيتي فاخرة من الملكة مصنوعة من أجود أنواع دقيق القمح لتحافظ على قوامها المتماسك والمثالي بعد السلق.",
    "flavor": "اسباجيتي",
    "sizes": [
      {
        "name": "كيس 400 جم (14.5 ج.م)",
        "weight": "400 جم",
        "price": 14.5,
        "selected": true
      },
      {
        "name": "كيس 1 كجم عائلي (34 ج.م)",
        "weight": "1 كجم",
        "price": 34
      }
    ]
  },
  {
    "id": "dolphin_solid_light_meat_tuna_200g",
    "name": "تونة دولفين صلبة قطعة واحدة في زيت نباتي 200 جم",
    "nameEn": "Dolphin Solid Light Meat Tuna in Vegetable Oil 200g",
    "category": "groceries",
    "price": 68,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دولفين (Dolphin)",
    "weight": "200 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/dolphin_solid_light_meat_tuna_200g.png",
    "description": "تونة صلبة فاخرة قطعة واحدة في زيت نباتي نقي من دولفين، غنية بالبروتين والأوميجا 3 لوجبة صحية ومميزة.",
    "flavor": "تونة صلبة قطعة واحدة",
    "sizes": [
      {
        "name": "عبوة قياسية (68 ج.م)",
        "weight": "200 جم",
        "price": 68,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_penne_pasta_400g",
    "name": "مكرونة قلم فرن الملكة 400 جم",
    "nameEn": "El Maleka Penne Rigate Pasta 400g",
    "category": "groceries",
    "price": 14.5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/el_maleka_penne_pasta_400g.png",
    "description": "مكرونة قلم فرن الملكة من أجود أنواع دقيق القمح الفاخر، تحافظ على قوامها ولا تتعجن ومثالية لصواني البشاميل والطواجن.",
    "flavor": "مكرونة فرن بنة",
    "sizes": [
      {
        "name": "كيس 400 جم (14.5 ج.م)",
        "weight": "400 جم",
        "price": 14.5,
        "selected": true
      },
      {
        "name": "كيس 1 كجم عائلي (34 ج.م)",
        "weight": "1 كجم",
        "price": 34
      }
    ]
  },
  {
    "id": "fern_pure_cow_ghee_700g",
    "name": "سمن بقري طبيعي نقي فيرن 700 جم",
    "nameEn": "Fern Pure Natural Cow Ghee 700g",
    "category": "groceries",
    "price": 285,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فيرن (Fern)",
    "weight": "700 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/fern_pure_cow_ghee_700g.png",
    "description": "سمن بقري طبيعي نقي 100% ممتاز من فيرن برائحة وطعم السمن البلدي الأصيل لجميع وصفات الطبخ والحلويات الشرقية.",
    "flavor": "سمن بقري طبيعي",
    "sizes": [
      {
        "name": "عبوة قياسية (285 ج.م)",
        "weight": "700 جم",
        "price": 285,
        "selected": true
      }
    ]
  },
  {
    "id": "cooks_baking_powder_sachet_16g",
    "name": "بيكنج بودر كوكس محسنات كيك 16 جم",
    "nameEn": "Cook's Baking Powder Sachet 16g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكس (Cook's)",
    "weight": "16 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/cooks_baking_powder_sachet_16g.png",
    "description": "مسحوق بيكنج بودر كوكس عالي الجودة بمحسنات الكيك لضمان قوام هش ومرتفع ومثالي للكيك وجميع أنواع المخبوزات.",
    "flavor": "بيكنج بودر",
    "sizes": [
      {
        "name": "كيس 16 جم (5 ج.م)",
        "weight": "16 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "number_one_tomato_paste_jar_300g",
    "name": "صلصة طماطم مركزة رقم 1 برطمان 300 جم",
    "nameEn": "No.1 Concentrated Tomato Paste Jar 300g",
    "category": "groceries",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "رقم 1 (No. 1)",
    "weight": "300 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/number_one_tomato_paste_jar_300g.png",
    "description": "صلصة طماطم مركزة نقية مصنوعة من أجود حبات الطماطم الطازجة بلون أحمر غني وقوام كثيف لجميع الأكلات والمكرونات.",
    "flavor": "طماطم مركزة",
    "sizes": [
      {
        "name": "برطمان 300 جم (20 ج.م)",
        "weight": "300 جم",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "el_rashidi_el_mizan_plain_halawa_500g",
    "name": "حلاوة طحينية سادة الرشيدي الميزان 500 جم",
    "nameEn": "El Rashidi El Mizan Plain Halawa 500g",
    "category": "sweets",
    "price": 68,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الرشيدي الميزان (El Rashidi El Mizan)",
    "weight": "500 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/el_rashidi_el_mizan_plain_halawa_500g.png",
    "description": "حلاوة طحينية سادة فاخرة من الرشيدي الميزان مصنوعة من أجود أنواع السمسم الطبيعي الصافي.",
    "flavor": "سادة",
    "sizes": [
      {
        "name": "عبوة قياسية (68 ج.م)",
        "weight": "500 جم",
        "price": 68,
        "selected": true
      }
    ]
  },
  {
    "id": "rehana_natural_cane_vinegar_1l",
    "name": "خل قصب طبيعي نقي ريحانة 1 لتر",
    "nameEn": "Rehana Natural Cane Vinegar 1L",
    "category": "groceries",
    "price": 18,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريحانة (Rehana)",
    "weight": "1 لتر",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/rehana_natural_cane_vinegar_1l.png",
    "description": "خل قصب طبيعي نقي بتركيز 5% من ريحانة مثالي لإعداد السلطات وتتبيل مختلف الأطباق.",
    "flavor": "خل قصب طبيعي",
    "sizes": [
      {
        "name": "زجاجة 1 لتر (18 ج.م)",
        "weight": "1 لتر",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_vermicelli_pasta_1kg",
    "name": "مكرونة شعرية الملكة 1 كجم",
    "nameEn": "El Maleka Vermicelli Pasta 1kg",
    "category": "groceries",
    "price": 34,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/el_maleka_vermicelli_pasta_1kg.png",
    "description": "مكرونة شعرية فاخرة من الملكة مصنوعة من دقيق القمح الفاخر وسريعة التحضير للأرز بالخلطة والشوربات.",
    "flavor": "شعرية",
    "sizes": [
      {
        "name": "عبوة قياسية (34 ج.م)",
        "weight": "1 كجم",
        "price": 34,
        "selected": true
      }
    ]
  },
  {
    "id": "el_doha_fine_white_sugar_1kg",
    "name": "سكر أبيض ناعم الضحى 1 كجم",
    "nameEn": "El Doha Fine White Sugar 1kg",
    "category": "groceries",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الضحى (El Doha)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/el_doha_fine_white_sugar_1kg.png",
    "description": "سكر أبيض ناعم نقي وعالي الجودة من الضحى مثالي لتحلية المشروبات والحلويات والمخبوزات.",
    "flavor": "سكر أبيض ناعم",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "1 كجم",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "imtenan_clover_honey_800g",
    "name": "عسل نحل طبيعي نوارة البرسيم إمتنان 800 جم",
    "nameEn": "Imtenan Natural Clover Honey 800g",
    "category": "groceries",
    "price": 145,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إمتنان (Imtenan)",
    "weight": "800 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/imtenan_clover_honey_800g.png",
    "description": "عسل نحل طبيعي 100% بنوارة البرسيم من إمتنان غني بالطاقة ومثالي للتحلية الصحية اليومية.",
    "flavor": "نوارة البرسيم",
    "sizes": [
      {
        "name": "عبوة قياسية (145 ج.م)",
        "weight": "800 جم",
        "price": 145,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_creme_caramel_value_pack_2pcs",
    "name": "كريم كراميل دريم عرض توفير قطعتين",
    "nameEn": "Dreem Creme Caramel Value Pack 2pcs",
    "category": "sweets",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "عبوة توفير 2 قطعة",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/dreem_creme_caramel_value_pack_2pcs.png",
    "description": "مسحوق كريم كراميل دريم مع صوص الكراميل الطبيعي بقوام غني وسلس في عبوة توفير قطعتين.",
    "flavor": "كراميل طبيعي",
    "sizes": [
      {
        "name": "عبوة توفير قطعتين (35 ج.م)",
        "weight": "2 قطعة",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "maggi_chicken_stock_cubes_12pcs",
    "name": "مرقة دجاج ماجي 12 مكعب",
    "nameEn": "Maggi Chicken Stock Cubes 12pcs",
    "category": "groceries",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ماجي (Maggi)",
    "weight": "12 مكعب",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/maggi_chicken_stock_cubes_12pcs.png",
    "description": "مكعبات مرقة الدجاج من ماجي خالية من المواد الحافظة المضافة وتمنح أطباقك نكهة غنية ومميزة.",
    "flavor": "دجاج",
    "sizes": [
      {
        "name": "علبة 12 مكعب (20 ج.م)",
        "weight": "12 مكعب",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_baking_powder_16g",
    "name": "بيكنج بودر دريم 16 جم",
    "nameEn": "Dreem Baking Powder 16g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "16 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/dreem_baking_powder_16g.png",
    "description": "بيكنج بودر دريم بتركيبة جديدة ومحسنة تضمن لك كيك هش ومخبوزات بارتفاع ممتاز.",
    "flavor": "بيكنج بودر",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "16 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_strawberry_jelly_value_pack_3pcs",
    "name": "جيلي فراولة دريم عرض توفير 3 قطع",
    "nameEn": "Dreem Strawberry Jelly Value Pack 3pcs",
    "category": "sweets",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "عبوة توفير 3 قطع",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/dreem_strawberry_jelly_value_pack_3pcs.png",
    "description": "مسحوق جيلي بنكهة الفراولة اللذيذة والمنعشة من دريم في عبوة اقتصادية توفير 3 قطع.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (42 ج.م)",
        "weight": "3 قطع",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_whipping_cream_powder_45g",
    "name": "كريم شانتيه دريم مسحوق 45 جم",
    "nameEn": "Dreem Whipping Cream Powder 45g",
    "category": "sweets",
    "price": 22,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/dreem_whipping_cream_powder_45g.png",
    "description": "مسحوق كريم شانتيه دريم لتحضير كريمة خفق غنية وناعمة لتزيين الكيك والتورتات والحلويات.",
    "flavor": "كريمة خفق",
    "sizes": [
      {
        "name": "عبوة قياسية (22 ج.م)",
        "weight": "45 جم",
        "price": 22,
        "selected": true
      }
    ]
  },
  {
    "id": "heinz_classic_mayo_jar_310g",
    "name": "مايونيز كلاسيك هاينز برطمان 310 جم",
    "nameEn": "Heinz Classic Mayo Jar 310g",
    "category": "groceries",
    "price": 48,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هاينز (Heinz)",
    "weight": "310 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/heinz_classic_mayo_jar_310g.png",
    "description": "مايونيز هاينز الكلاسيكي الأصلي بقوام كريمي ناعم ونكهة غنية مثالية للسندوتشات والسلطات.",
    "flavor": "مايونيز كلاسيك",
    "sizes": [
      {
        "name": "عبوة قياسية (48 ج.م)",
        "weight": "310 جم",
        "price": 48,
        "selected": true
      }
    ]
  },
  {
    "id": "harvest_plain_fava_beans_400g",
    "name": "فول مدمس سادة هارفست 400 جم",
    "nameEn": "Harvest Plain Fava Beans 400g",
    "category": "groceries",
    "price": 17,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هارفست (Harvest)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/harvest_plain_fava_beans_400g.png",
    "description": "فول مدمس مصري كلاسيكي عالي البروتين وخالي من المواد الحافظة من هارفست لوجبة فطور شهية.",
    "flavor": "سادة",
    "sizes": [
      {
        "name": "عبوة قياسية (17 ج.م)",
        "weight": "400 جم",
        "price": 17,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_far_east_potato_seasoning_30g",
    "name": "تتبيلة البطاطس توابل الشرق الأقصى كنور",
    "nameEn": "Knorr Potato Seasoning Far East Flavors 30g",
    "category": "groceries",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/knorr_far_east_potato_seasoning_30g.png",
    "description": "خلطة تتبيلة البطاطس توابل الشرق الأقصى من كنور تضفي مذاقاً لذيذاً ومقرمشاً على البطاطس المقلية.",
    "flavor": "توابل الشرق الأقصى",
    "sizes": [
      {
        "name": "كيس تتبيلة (10 ج.م)",
        "weight": "30 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "cooks_vanillin_with_sugar_pouch",
    "name": "فانيليا بالسكر كوكس كيس",
    "nameEn": "Cook's Vanillin with Sugar Pouch",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكس (Cook's)",
    "weight": "1.5 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/cooks_vanillin_with_sugar_pouch.png",
    "description": "فانيليا نقية ممزوجة بالسكر من كوكس تمنح الحلويات والمخبوزات رائحة شهية ونكهة لا تقاوم.",
    "flavor": "فانيليا بالسكر",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "1.5 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "gannah_yellow_butter_ghee_2_5kg",
    "name": "سمن نباتي بطعم وريحة الزبدة الصفراء جنة 2.5 كجم",
    "nameEn": "Gannah Yellow Butter Flavor Vegetable Ghee 2.5kg",
    "category": "groceries",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جنة (Gannah)",
    "weight": "2.5 كجم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/gannah_yellow_butter_ghee_2_5kg.png",
    "description": "سمن نباتي نقي غير مهدرج 100% بطعم ورائحة الزبدة الصفراء اللذيذة من جنة لجميع أغراض الطبخ والحلويات.",
    "flavor": "طعم وريحة الزبدة الصفراء",
    "sizes": [
      {
        "name": "عبوة قياسية (295 ج.م)",
        "weight": "2.5 كجم",
        "price": 295,
        "selected": true
      }
    ]
  },
  {
    "id": "heinz_mustard_squeeze_235g",
    "name": "مستردة هاينز عبوة ضاغطة 235 جم",
    "nameEn": "Heinz Yellow Mustard Squeeze Bottle 235g",
    "category": "groceries",
    "price": 32,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هاينز (Heinz)",
    "weight": "235 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/heinz_mustard_squeeze_235g.png",
    "description": "مستردة هاينز الصفراء الكلاسيكية بنكهتها المميزة والقوية في عبوة ضاغطة سهلة الاستخدام.",
    "flavor": "مستردة كلاسيك",
    "sizes": [
      {
        "name": "عبوة قياسية (32 ج.م)",
        "weight": "235 جم",
        "price": 32,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_11_spice_mix_35g_391",
    "name": "خلطة الـ 11 بهار كنور",
    "nameEn": "Knorr 11 Spice Mix Seasoning 35g",
    "category": "groceries",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/knorr_11_spice_mix_35g_391.png",
    "description": "خلطة بهارات كنور المبتكرة المكونة من 11 تابل وعشب طبيعي لتتبيل اللحوم والخضار بمذاق أقوى بكثير من السبع بهارات.",
    "flavor": "الـ 11 بهار",
    "sizes": [
      {
        "name": "كيس بهارات (10 ج.م)",
        "weight": "35 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_dark_cooking_chocolate_200g_392",
    "name": "شوكولاتة خام للطبخ غامقة دريم 200 جم",
    "nameEn": "Dreem Dark Cooking Chocolate Bar 200g",
    "category": "sweets",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "200 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/dreem_dark_cooking_chocolate_200g_392.png",
    "description": "لوح شوكولاتة خام داكنة للطبخ والحلويات من دريم بنكهة الكاكاو الغنية سهلة الذوبان والتزيين.",
    "flavor": "شوكولاتة خام غامقة",
    "sizes": [
      {
        "name": "لوح 200 جم (65 ج.م)",
        "weight": "200 جم",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "regina_penne_pasta_400g",
    "name": "مكرونة قلم فرن ريجينا 400 جم",
    "nameEn": "Regina Penne Pasta 400g",
    "category": "groceries",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريجينا (Regina)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/regina_penne_pasta_400g.png",
    "description": "مكرونة فرن إيطالية فاخرة من ريجينا مصنوعة من سميد القمح الصلب النقي 100%.",
    "flavor": "مكرونة فرن / قلم",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "400 جم",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "trident_watermelon_flavor_gum_7pcs",
    "name": "لبان ترايدنت بنكهة البطيخ خالي من السكر 7 قطع",
    "nameEn": "Trident Watermelon Flavor Sugar Free Chewing Gum 7 Pcs",
    "category": "sweets",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ترايدنت (Trident)",
    "weight": "7 قطع",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/trident_watermelon_flavor_gum_7pcs.png",
    "description": "لبان ترايدنت خالي من السكر بنكهة البطيخ المنعشة بطعم قوي يدوم طويلاً، عبوة 7 قطع.",
    "flavor": "بطيخ",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "7 قطع",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "molto_xxl_chocolate_hazelnut_croissant",
    "name": "كرواسون مولتو إكس إكس إل بالشوكولاتة والبندق",
    "nameEn": "Molto XXL Chocolate and Hazelnut Croissant",
    "category": "snacks",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "مولتو (Molto)",
    "weight": "حجم XXL",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/molto_xxl_chocolate_hazelnut_croissant.png",
    "description": "كرواسون مولتو هش وطازج بحجم كبير XXL محشو بكريمة الشوكولاتة والبندق اللذيذة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "قطعة XXL (15 ج.م)",
        "weight": "حجم XXL",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "chiclets_spearmint_gum_10pcs",
    "name": "لبان تشيكلتس بنكهة النعناع الأخضر 10 حبات",
    "nameEn": "Chiclets Spearmint Flavor Chewing Gum 10 Pcs",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تشيكلتس (Chiclets)",
    "weight": "10 حبات",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/chiclets_spearmint_gum_10pcs.png",
    "description": "علكة تشيكلتس الكلاسيكية المنعشة بنكهة النعناع الأخضر الطبيعي، عبوة 10 حبات.",
    "flavor": "نعناع أخضر",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "10 حبات",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "trident_spearmint_flavor_gum_7pcs",
    "name": "لبان ترايدنت بنكهة النعناع الأخضر خالي من السكر 7 قطع",
    "nameEn": "Trident Spearmint Flavor Sugar Free Chewing Gum 7 Pcs",
    "category": "sweets",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ترايدنت (Trident)",
    "weight": "7 قطع",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/trident_spearmint_flavor_gum_7pcs.png",
    "description": "لبان ترايدنت المنعش الخالي من السكر بنكهة النعناع الأخضر المنعش ونكهة تدوم طويلاً، 7 قطع.",
    "flavor": "نعناع أخضر",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "7 قطع",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "trident_watermelon_gum_pack_7pcs",
    "name": "لبان ترايدنت بنكهة البطيخ خالي من السكر 7 قطع",
    "nameEn": "Trident Watermelon Sugar Free Gum 7 Pcs",
    "category": "sweets",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ترايدنت (Trident)",
    "weight": "7 قطع",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/trident_watermelon_gum_pack_7pcs.png",
    "description": "لبان ترايدنت بنكهة البطيخ الشهية خالي من السكر لانتعاش يدوم طويلاً في الفم، 7 قطع.",
    "flavor": "بطيخ",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "7 قطع",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_regular_vegetar_mix_35g",
    "name": "فيجيتار كنور عادي خلطة تتبيل 35 جم",
    "nameEn": "Knorr Regular Vegetar Seasoning Mix 35g",
    "category": "groceries",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/knorr_regular_vegetar_mix_35g.png",
    "description": "خلطة فيجيتار كنور العادية الشهيرة لتحضير ألذ بانيه ودجاج مقرمش بنكهة غنية وقرمشة لا تقاوم.",
    "flavor": "عادي / متبل",
    "sizes": [
      {
        "name": "كيس 35 جم (10 ج.م)",
        "weight": "35 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_orange_vanilla_flavor_5g",
    "name": "نكهة فانيليا بالبرتقال دريم 5 جم",
    "nameEn": "Dreem Orange Vanilla Flavor Sachet 5g",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "5 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/dreem_orange_vanilla_flavor_5g.png",
    "description": "نكهة فانيليا مركزة بالبرتقال من دريم تعطي رائحة ومذاقاً مميزاً للكيك والحلويات والمخبوزات.",
    "flavor": "فانيليا بالبرتقال",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "5 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "el_bawadi_plain_halawa_290g",
    "name": "حلاوة طحينية سادة البوادي 290 جم",
    "nameEn": "El Bawadi Plain Halawa Tahinia 290g",
    "category": "sweets",
    "price": 42,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "البوادي (El Bawadi)",
    "weight": "290 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/el_bawadi_plain_halawa_290g.png",
    "description": "حلاوة طحينية فاخرة سادة من البوادي مصنوعة من أجود بذور السمسم وقوام متماسك وطعم غني.",
    "flavor": "طحينية سادة",
    "sizes": [
      {
        "name": "علبة 290 جم (42 ج.م)",
        "weight": "290 جم",
        "price": 42,
        "selected": true
      }
    ]
  },
  {
    "id": "harvest_plain_mashed_fava_beans_pack_3",
    "name": "عرض فول مدمس سادة مصفى هارفيست 3 علب",
    "nameEn": "Harvest Plain Mashed Fava Beans Promo Pack 3 Cans",
    "category": "groceries",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هارفيست (Harvest)",
    "weight": "3 علب × 400 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/harvest_plain_mashed_fava_beans_pack_3.png",
    "description": "عرض اقتصادي مكون من 3 علب فول مدمس سادة مصفى جاهز للأكل من هارفيست لتحضير أشهى وجبات الفطور.",
    "flavor": "سادة مصفى",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "3 علب × 400 جم",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "heinz_mayonnaise_pouch_285g",
    "name": "مايونيز هاينز كيس مع غطاء صب 285 جم",
    "nameEn": "Heinz Mayonnaise Spout Pouch 285g",
    "category": "groceries",
    "price": 48,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هاينز (Heinz)",
    "weight": "285 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/heinz_mayonnaise_pouch_285g.png",
    "description": "مايونيز هاينز الغني بالقوام الكريمي والمذاق اللذيذ في كيس عملي وسهل الاستخدام مع غطاء صب.",
    "flavor": "مايونيز كلاسيك",
    "sizes": [
      {
        "name": "كيس 285 جم (48 ج.م)",
        "weight": "285 جم",
        "price": 48,
        "selected": true
      }
    ]
  },
  {
    "id": "rawaby_ghee_cream_flavor_1_5kg",
    "name": "سمن نباتي بطعم القشطة روابي 1.5 كجم",
    "nameEn": "Rawaby Vegetable Ghee Cream Flavor 1.5kg",
    "category": "groceries",
    "price": 185,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "روابي (Rawaby)",
    "weight": "1.5 كجم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/rawaby_ghee_cream_flavor_1_5kg.png",
    "description": "سمن نباتي نقي غير مهدرج 100% من روابي بطعم ورائحة القشطة الفلاحي ليمنح طعامك نكهة شرقية أصيلة.",
    "flavor": "بطعم القشطة البلدي",
    "sizes": [
      {
        "name": "عبوة قياسية (185 ج.م)",
        "weight": "1.5 كجم",
        "price": 185,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_tomato_puree_sachet_280g",
    "name": "صلصة طماطم بيوريه كنور فاين فودز 280 جم",
    "nameEn": "Knorr Fine Foods Tomato Puree Sachet 280g",
    "category": "groceries",
    "price": 18,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "280 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/knorr_tomato_puree_sachet_280g.png",
    "description": "بيوريه طماطم طبيعي ومكثف من كنور بدون مواد حافظة ومناسب لجميع أنواع الطبخ والمكرونة.",
    "flavor": "طماطم بيوريه طبيعية",
    "sizes": [
      {
        "name": "كيس 280 جم (18 ج.م)",
        "weight": "280 جم",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_vegetable_stock_cubes_12pcs",
    "name": "مرقة خضروات كنور فاين فودز 12 مكعب",
    "nameEn": "Knorr Fine Foods Vegetable Stock 12 Cubes",
    "category": "groceries",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "12 مكعب",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/knorr_vegetable_stock_cubes_12pcs.png",
    "description": "مكعبات مرقة الخضروات الطبيعية من كنور بتوليفة من الأعشاب والبهارات لتعزيز نكهة الشوربة والطبخات النباتية.",
    "flavor": "خضروات طبيعية",
    "sizes": [
      {
        "name": "علبة 12 مكعب (20 ج.م)",
        "weight": "12 مكعب",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "chiclets_strawberry_chewing_gum_10pcs",
    "name": "لبان تشكلتس بنكهة الفراولة 10 قطع",
    "nameEn": "Chiclets Strawberry Flavor Chewing Gum 10 Pieces",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تشكلتس (Chiclets)",
    "weight": "10 قطع",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/chiclets_strawberry_chewing_gum_10pcs.png",
    "description": "علكة تشكلتس الكلاسيكية المغطاة بالسكر بنكهة الفراولة اللذيذة والمنعشة.",
    "flavor": "فراولة",
    "sizes": [
      {
        "name": "عبوة 10 قطع",
        "weight": "10 قطع",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "sweetal_zero_calorie_sweetener_jar_250g",
    "name": "محلي دايت سويتال خالي من السعرات بودرة 250 جم",
    "nameEn": "Sweetal Calorie Free Sweetener Powder Tub 250g",
    "category": "groceries",
    "price": 95,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سويتال (Sweetal)",
    "weight": "250 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/sweetal_zero_calorie_sweetener_jar_250g.png",
    "description": "بديل سكر خالي تماماً من السعرات الحرارية والأسبرتام من سويتال مناسب للشاي والقهوة والحلويات أثناء الحمية الغذائية.",
    "flavor": "محلي خالي من السعرات والأسبرتام",
    "sizes": [
      {
        "name": "جردل 250 جم (95 ج.م)",
        "weight": "250 جم",
        "price": 95,
        "selected": true
      }
    ]
  },
  {
    "id": "clorets_original_mint_gum_12pcs",
    "name": "لبان كلوريتس بنكهة النعناع الأصلي 12 قطعة",
    "nameEn": "Clorets Original Mint Flavor Chewing Gum 12 Pcs",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كلوريتس (Clorets)",
    "weight": "12 قطعة (16.8 جم)",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/clorets_original_mint_gum_12pcs.png",
    "description": "علكة كلوريتس الفعالة في إنعاش رائحة الفم بفضل خلاصة الكلوروفيل ونكهة النعناع المنعشة.",
    "flavor": "نعناع أصلي مع أكتيزول كلوروفيل",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "16.8 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "clorets_cinnamint_gum_12pcs",
    "name": "لبان كلوريتس بنكهة القرفة والنعناع سينامينت 12 قطعة",
    "nameEn": "Clorets Cinnamint Flavor Chewing Gum 12 Pcs",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كلوريتس (Clorets)",
    "weight": "12 قطعة (16.8 جم)",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/clorets_cinnamint_gum_12pcs.png",
    "description": "لبان كلوريتس بمزيج القرفة الدافئة والنعناع المنعش لانتعاش فوري يدوم طويلاً.",
    "flavor": "قرفة ونعناع (سينامينت)",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "16.8 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "dreem_cake_chef_baking_powder_24pcs",
    "name": "بيكنج بودر كيك شيف دريم علبة 24 كيس",
    "nameEn": "Dreem Cake Chef Baking Powder Pack of 24 Sachets",
    "category": "groceries",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دريم (Dreem)",
    "weight": "24 كيس × 23 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/dreem_cake_chef_baking_powder_24pcs.png",
    "description": "بيكنج بودر كيك شيف مع محسنات الكيك من دريم لنتائج مثالية وكيك هش مرتفع وفاتح اللون، عبوة توفيرية 24 كيس.",
    "flavor": "بيكنج بودر ومحسن كيك",
    "sizes": [
      {
        "name": "عبوة قياسية (5 ج.م)",
        "weight": "24 كيس × 23 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "chipsy_cheese_potato_chips_85g",
    "name": "شيبسي رقائق بطاطس بطعم الجبنة 85 جم",
    "nameEn": "Chipsy Cheese Flavored Potato Chips 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيبسي (Chipsy)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/chipsy_cheese_potato_chips_85g.png",
    "description": "رقائق بطاطس طبيعية مقرمشة بنكهة الجبنة اللذيذة والمفضلة من شيبسي مصر.",
    "flavor": "جبنة متبلة",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "galaxy_flutes_chocolate_wafer_22_5g",
    "name": "شوكولاتة جلاكسي فلوتس ويفر مقرمش 22.5 جم",
    "nameEn": "Galaxy Flutes Crispy Chocolate Wafer Rolls 22.5g",
    "category": "sweets",
    "price": 30,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جلاكسي (Galaxy)",
    "weight": "22.5 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/galaxy_flutes_chocolate_wafer_22_5g.png",
    "description": "أصابع ويفر هشة مقرمشة محشوة ومغطاة بشوكولاتة جلاكسي الحريرية والناعمة بالحليب.",
    "flavor": "شوكولاتة بالحليب وويفر مقرمش",
    "sizes": [
      {
        "name": "عبوة قياسية (30 ج.م)",
        "weight": "22.5 جم",
        "price": 30,
        "selected": true
      }
    ]
  },
  {
    "id": "sweetal_stevia_zero_calorie_sweetener_tub_250g",
    "name": "محلي دايت سويتال ستيفيا بودرة خالي من السعرات 250 جم",
    "nameEn": "Sweetal Stevia Zero Calorie Sweetener Powder 250g",
    "category": "groceries",
    "price": 135,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سويتال (Sweetal)",
    "weight": "250 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/sweetal_stevia_zero_calorie_sweetener_tub_250g.png",
    "description": "سكر دايت ستيفيا نباتي طبيعي خالي من السعرات ومن المرارة في عبوة جردل سعة 250 جم مناسب للطبخ والمشروبات.",
    "flavor": "ستيفيا طبيعي خالي من السعرات",
    "sizes": [
      {
        "name": "جردل 250 جم (135 ج.م)",
        "weight": "250 جم",
        "price": 135,
        "selected": true
      }
    ]
  },
  {
    "id": "sweetal_stevia_sweetener_50_sachets",
    "name": "محلي دايت سويتال ستيفيا أكياس 50 كيس",
    "nameEn": "Sweetal Stevia Calorie Free Sweetener 50 Sachets",
    "category": "groceries",
    "price": 85,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سويتال (Sweetal)",
    "weight": "50 كيس (100 جم)",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/sweetal_stevia_sweetener_50_sachets.png",
    "description": "أكياس سكر دايت سويتال ستيفيا خالية تماماً من السعرات والأسبرتام والمواد الحافظة للتحلية اليومية.",
    "flavor": "ستيفيا طبيعي خالي من السعرات",
    "sizes": [
      {
        "name": "علبة 50 كيس (85 ج.م)",
        "weight": "50 كيس",
        "price": 85,
        "selected": true
      }
    ]
  },
  {
    "id": "sweetal_sweetener_tablets_dispenser_50tabs",
    "name": "أقراص محلي دايت سويتال خالي من السعرات 50 قرص",
    "nameEn": "Sweetal Sweetener Dispenser 50 Tablets",
    "category": "groceries",
    "price": 50,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سويتال (Sweetal)",
    "weight": "50 قرص",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/sweetal_sweetener_tablets_dispenser_50tabs.png",
    "description": "ديسبنسر أقراص محلي سويتال خالي من السعرات سهل الحمل والتنقل مع قرص يعادل ملعقتين سكر.",
    "flavor": "محلي أقراص مركز",
    "sizes": [
      {
        "name": "عبوة 50 قرص",
        "weight": "50 قرص",
        "price": 50,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_elbow_pasta_1kg",
    "name": "مكرونة الملكة هلالية 1 كجم",
    "nameEn": "El Maleka Elbow Pasta 1kg",
    "category": "groceries",
    "price": 34,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/el_maleka_elbow_pasta_1kg.png",
    "description": "مكرونة الملكة هلالية فاخرة مصنوعة من أجود أنواع دقيق القمح الفاخر تحافظ على قوامها بعد السلق.",
    "flavor": "هلالية (إلبو)",
    "sizes": [
      {
        "name": "عبوة قياسية (34 ج.م)",
        "weight": "1 كجم",
        "price": 34,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_hot_vegetar_mix_35g",
    "name": "فيجيتار كنور حار خلطة تتبيل المقليات 35 جم",
    "nameEn": "Knorr Hot Vegetar Crispy Coating Mix Sachet 35g",
    "category": "groceries",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/knorr_hot_vegetar_mix_35g.png",
    "description": "خلطة بقسماط وتوابل حارة من كنور فيجيتار لتغليف وتتبيل الدجاج والبانيه وقرمشة مثالية بدون مواد حافظة.",
    "flavor": "حار ومتبل",
    "sizes": [
      {
        "name": "كيس 35 جم (10 ج.م)",
        "weight": "35 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "tuc_original_salted_crackers_8pcs",
    "name": "بسكويت تيك مملح سادة مقرمش عرض 6+2 مجاناً",
    "nameEn": "TUC Original Salted Crackers Promo Pack (6+2 Free)",
    "category": "snacks",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تيك (TUC)",
    "weight": "8 قطع",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/tuc_original_salted_crackers_8pcs.png",
    "description": "مقرمشات بسكويت تيك الذهبية والمملحة بخفة، خفيفة وهشة ومثالية للتصبيرة والمقبلات.",
    "flavor": "مملح كلاسيك",
    "sizes": [
      {
        "name": "عبوة 8 قطع (10 ج.م)",
        "weight": "8 قطع",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_bechamel_sauce_mix_75g",
    "name": "خلطة البشاميل السريعة كنور 75 جم",
    "nameEn": "Knorr Bechamel Sauce Mix 75g",
    "category": "groceries",
    "price": 18,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "75 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/knorr_bechamel_sauce_mix_75g.png",
    "description": "خلطة البشاميل الفورية من كنور لتحضير صلصة بشاميل كريمية وشهية في 5 دقائق بدون تكتل.",
    "flavor": "بشاميل كلاسيك",
    "sizes": [
      {
        "name": "كيس 75 جم (18 ج.م)",
        "weight": "75 جم",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "crystal_yellow_butter_flavor_ghee_1_5kg",
    "name": "سمن نباتي كريستال بطعم وريحة الزبدة الصفراء 1.5 كجم",
    "nameEn": "Crystal Yellow Butter Flavor Vegetable Ghee 1.5kg",
    "category": "groceries",
    "price": 92,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كريستال (Crystal)",
    "weight": "1.5 كجم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/crystal_yellow_butter_flavor_ghee_1_5kg.png",
    "description": "سمن كريستال نباتي نقي غير مهدرج بنكهة الزبدة الصفراء النيوزيلندية الفاخرة للطبخ والحلويات الشرقية.",
    "flavor": "بطعم ورائحة الزبدة الصفراء",
    "sizes": [
      {
        "name": "عبوة قياسية (92 ج.م)",
        "weight": "1.5 كجم",
        "price": 92,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_small_rings_pasta_1kg",
    "name": "مكرونة الملكة مرمرية حلقات صغيرة 1 كجم",
    "nameEn": "El Maleka Small Rings Pasta 1kg",
    "category": "groceries",
    "price": 34,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/el_maleka_small_rings_pasta_1kg.png",
    "description": "مكرونة مرمرية حلقات صغيرة من الملكة مصنوعة من دقيق القمح الفاخر مثالية للتحمير والشوربات والكشري.",
    "flavor": "مرمرية (حلقات صغيرة)",
    "sizes": [
      {
        "name": "عبوة قياسية (34 ج.م)",
        "weight": "1 كجم",
        "price": 34,
        "selected": true
      }
    ]
  },
  {
    "id": "vitrac_creamy_strawberry_jam_430g",
    "name": "مربى فراولة كريمي فيتراك 430 جم",
    "nameEn": "Vitrac Creamy Strawberry Jam 430g",
    "category": "sweets",
    "price": 45,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فيتراك (Vitrac)",
    "weight": "430 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/vitrac_creamy_strawberry_jam_430g.png",
    "description": "مربى فراولة فيتراك قوام كريمي ناعم وقابل للدهن بسهولة مصنوعة من ثمار الفراولة الطازجة.",
    "flavor": "فراولة كريمي",
    "sizes": [
      {
        "name": "عبوة قياسية (45 ج.م)",
        "weight": "430 جم",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "dolphin_shredded_tuna_140g",
    "name": "تونة دولفين مفتتة في زيت نباتي 140 جم",
    "nameEn": "Dolphin Shredded Tuna in Vegetable Oil 140g",
    "category": "groceries",
    "price": 38,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دولفين (Dolphin)",
    "weight": "140 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/dolphin_shredded_tuna_140g.png",
    "description": "لحم تونة دولفين مفتت ومعبأ في زيت نباتي نقي غني بالأوميجا 3 وجاهز للاستخدام الفوري في السلطات والسندوتشات.",
    "flavor": "مفتتة في زيت نباتي",
    "sizes": [
      {
        "name": "علبة 140 جم (38 ج.م)",
        "weight": "140 جم",
        "price": 38,
        "selected": true
      }
    ]
  },
  {
    "id": "knorr_syrian_shawerma_mix_35g",
    "name": "خلطة بهارات الشاورما السوري كنور 35 جم",
    "nameEn": "Knorr Syrian Shawerma Seasoning Mix 35g",
    "category": "groceries",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كنور (Knorr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/knorr_syrian_shawerma_mix_35g.png",
    "description": "خلطة بهارات الشاورما السوري الأصلية من كنور لتحضير أشهى وألذ شاورما بتتبيلة متوازنة ومميزة.",
    "flavor": "شاورما سوري",
    "sizes": [
      {
        "name": "كيس 35 جم (12 ج.م)",
        "weight": "35 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "lion_potato_chips_salt_45g",
    "name": "شيبسي ليون بطاطس بالملح 45 جم",
    "nameEn": "Lion Salt Potato Chips 45g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليون (Lion)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/lion_potato_chips_salt_45g.png",
    "description": "رقائق بطاطس طبيعية مقرمشة ومملحة بنكهة الملح الكلاسيكية من ليون.",
    "flavor": "ملح",
    "sizes": [
      {
        "name": "كيس صغير (5 ج.م)",
        "weight": "صغير",
        "price": 5
      },
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس سوبر جامبو 65 جم (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس ماكسي عائلي 133 جم (15 ج.م)",
        "weight": "133 جم",
        "price": 15
      },
      {
        "name": "كيس بارتي جامبو 175 جم (20 ج.م)",
        "weight": "175 جم",
        "price": 20
      }
    ]
  },
  {
    "id": "cocoa_lovers_sandwich_biscuit_39g",
    "name": "بسكويت ساندوتش كوكوا لفرز بكريمة الكاكاو 39 جم",
    "nameEn": "Cocoa Lovers Cocoa Biscuit with Cocoa Cream 39g",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكوا لفرز (Cocoa Lovers)",
    "weight": "39 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/cocoa_lovers_sandwich_biscuit_39g.png",
    "description": "بسكويت كاكاو محشو بكريمة الكاكاو الغنية ومغطى بالشوكولاتة اللذيذة.",
    "flavor": "كاكاو وشوكولاتة",
    "sizes": [
      {
        "name": "قطعة 39 جم (7 ج.م)",
        "weight": "39 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "sweetal_zero_calorie_sweetener_100_sticks",
    "name": "بديل السكر سويتال زيرو كالوري 100 ستيك",
    "nameEn": "Sweetal Zero Calorie Sweetener 100 Sticks",
    "category": "groceries",
    "price": 110,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سويتال (Sweetal)",
    "weight": "100 ستيك",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/sweetal_zero_calorie_sweetener_100_sticks.png",
    "description": "محلي خالٍ من السعرات الحرارية والأسبارتام مناسب للدايت ومتبعي الحميات الغذائية ولمرضى السكر.",
    "flavor": "بديل سكر محلي",
    "sizes": [
      {
        "name": "علبة 100 كيس (110 ج.م)",
        "weight": "100 ستيك",
        "price": 110,
        "selected": true
      }
    ]
  },
  {
    "id": "el_maleka_vermicelli_pasta_400g",
    "name": "مكرونة شعرية ملوكي الملكة 400 جم",
    "nameEn": "El Maleka Moloki Vermicelli Pasta 400g",
    "category": "groceries",
    "price": 14.5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الملكة (El Maleka)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/el_maleka_vermicelli_pasta_400g.png",
    "description": "مكرونة شعرية مصرية فاخرة مصنوعة من دقيق القمح الفاخر لتحضير أشهى أطباق الأرز والحلويات.",
    "flavor": "شعرية",
    "sizes": [
      {
        "name": "كيس 400 جم (14.5 ج.م)",
        "weight": "400 جم",
        "price": 14.5,
        "selected": true
      },
      {
        "name": "كيس 1 كجم عائلي (34 ج.م)",
        "weight": "1 كجم",
        "price": 34
      }
    ]
  },
  {
    "id": "imtenan_spring_blossom_honey_800g",
    "name": "عسل نحل زهور الربيع نقي طبيعي إمتنان 800 جم",
    "nameEn": "Imtenan Spring Blossom Pure Natural Honey 800g",
    "category": "groceries",
    "price": 145,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إمتنان (Imtenan)",
    "weight": "800 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/imtenan_spring_blossom_honey_800g.png",
    "description": "عسل نحل طبيعي نقي 100% مستخلص من رحيق أزهار الربيع لتعزيز المناعة والصحة والنشاط اليومي.",
    "flavor": "زهور الربيع",
    "sizes": [
      {
        "name": "عبوة قياسية (145 ج.م)",
        "weight": "800 جم",
        "price": 145,
        "selected": true
      }
    ]
  },
  {
    "id": "crystal_corn_oil_800ml",
    "name": "زيت ذرة نقي كريستال 800 مل",
    "nameEn": "Crystal Pure Corn Oil 800ml",
    "category": "groceries",
    "price": 115,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كريستال (Crystal)",
    "weight": "800 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/crystal_corn_oil_800ml.png",
    "description": "زيت ذرة نقي وصحي 100% خالي من الكوليسترول من كريستال للطهي والقلي الخفيف وإعداد أشهى الأطباق.",
    "flavor": "زيت ذرة نقي",
    "sizes": [
      {
        "name": "زجاجة 800 مل (115 ج.م)",
        "weight": "800 مل",
        "price": 115,
        "selected": true
      },
      {
        "name": "زجاجة 1.6 لتر (225 ج.م)",
        "weight": "1.6 لتر",
        "price": 225
      },
      {
        "name": "زجاجة عائلية 2.2 لتر (310 ج.م)",
        "weight": "2.2 لتر",
        "price": 310
      }
    ]
  },
  {
    "id": "regina_orzo_rice_shape_pasta_400g",
    "name": "مكرونة لسان عصفور ريجينا 400 جم",
    "nameEn": "Regina Orzo Rice Shape Pasta 400g",
    "category": "groceries",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريجينا (Regina)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/regina_orzo_rice_shape_pasta_400g.png",
    "description": "مكرونة لسان عصفور فاخرة مصنوعة من سميد القمح الصلب 100% تمنح الشوربة قواماً وطعماً رائعين.",
    "flavor": "لسان عصفور",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "400 جم",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "givrex_frozen_minced_molokhia_400g",
    "name": "ملوخية مخروطة مجمدة جيفريكس 400 جم",
    "nameEn": "Givrex Frozen Minced Molokhia 400g",
    "category": "frozen",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جيفريكس (Givrex)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/givrex_frozen_minced_molokhia_400g.png",
    "description": "ملوخية خضراء مخروطة طازجة مجمدة سريعا للحفاظ على قيمتها الغذائية وطعمها اللذيذ من جيفريكس.",
    "flavor": "ملوخية خضراء",
    "sizes": [
      {
        "name": "عبوة قياسية (20 ج.م)",
        "weight": "400 جم",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "basma_frozen_mixed_vegetables_400g",
    "name": "خضار مشكل مجمد بسمة 400 جم",
    "nameEn": "Basma Frozen Mixed Vegetables 400g",
    "category": "frozen",
    "price": 26,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسمة (Basma)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/basma_frozen_mixed_vegetables_400g.png",
    "description": "تشكيلة خضروات طازجة مجمدة بجودة عالية تشمل البازلاء والجزر والفاصوليا الخضراء من بسمة.",
    "flavor": "خضار مشكل",
    "sizes": [
      {
        "name": "عبوة قياسية (26 ج.م)",
        "weight": "400 جم",
        "price": 26,
        "selected": true
      }
    ]
  },
  {
    "id": "basma_frozen_green_okra_zero_400g",
    "name": "بامية خضراء زيرو مجمدة بسمة 400 جم",
    "nameEn": "Basma Frozen Green Okra Zero 400g",
    "category": "frozen",
    "price": 40,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسمة (Basma)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/basma_frozen_green_okra_zero_400g.png",
    "description": "بامية خضراء صغيرة الحجم نقاوة أولى (زيرو) مجمدة طازجة ومقمعة جاهزة للطبخ مباشرة من بسمة.",
    "flavor": "بامية زيرو",
    "sizes": [
      {
        "name": "عبوة قياسية (40 ج.م)",
        "weight": "400 جم",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "basma_frozen_green_peas_400g",
    "name": "بسلة خضراء مجمدة بسمة 400 جم",
    "nameEn": "Basma Frozen Green Peas 400g",
    "category": "frozen",
    "price": 28,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسمة (Basma)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/basma_frozen_green_peas_400g.png",
    "description": "بازلاء خضراء طبيعية طازجة وسريعة التجميد تحتفظ بلونها الأخضر الزاهي وطعمها السكري من بسمة.",
    "flavor": "بسلة خضراء",
    "sizes": [
      {
        "name": "عبوة قياسية (28 ج.م)",
        "weight": "400 جم",
        "price": 28,
        "selected": true
      }
    ]
  },
  {
    "id": "basma_frozen_cut_spinach_400g",
    "name": "سبانخ خضراء مجمدة مقطعة بسمة 400 جم",
    "nameEn": "Basma Frozen Cut Green Spinach 400g",
    "category": "frozen",
    "price": 22,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسمة (Basma)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/basma_frozen_cut_spinach_400g.png",
    "description": "أوراق سبانخ خضراء مغسولة ومقطعة ومجمدة بطرق متطورة للحفاظ على كامل فوائد الحديد والفيتامينات من بسمة.",
    "flavor": "سبانخ خضراء",
    "sizes": [
      {
        "name": "عبوة قياسية (22 ج.م)",
        "weight": "400 جم",
        "price": 22,
        "selected": true
      }
    ]
  },
  {
    "id": "basma_frozen_minced_molokhia_400g",
    "name": "ملوخية خضراء مخروطة مجمدة بسمة 400 جم",
    "nameEn": "Basma Frozen Minced Green Molokhia 400g",
    "category": "frozen",
    "price": 22,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسمة (Basma)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/basma_frozen_minced_molokhia_400g.png",
    "description": "ملوخية خضراء مصرية ممتازة مخروطة ناعمة ومجمدة تمنحك طعماً وقواماً كالمطهية طازجة من بسمة.",
    "flavor": "ملوخية خضراء",
    "sizes": [
      {
        "name": "كيس 400 جم (22 ج.م)",
        "weight": "400 جم",
        "price": 22,
        "selected": true
      },
      {
        "name": "كيس عائلي 800 جم (40 ج.م)",
        "weight": "800 جم",
        "price": 40
      }
    ]
  },
  {
    "id": "atyab_spicy_chicken_strips_1kg",
    "name": "تشيكن ستربس دجاج حار أطياب 1 كجم",
    "nameEn": "Atyab Spicy Chicken Strips 1kg",
    "category": "frozen",
    "price": 320,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/atyab_spicy_chicken_strips_1kg.png",
    "description": "أصابع صدور دجاج حارة مقرمشة 100% لحم صافي متبلة بخلطة سبايسي شهية ومميزة من أطياب.",
    "flavor": "حار",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (320 ج.م)",
        "weight": "1 كجم",
        "price": 320,
        "selected": true
      },
      {
        "name": "عبوة اقتصادية 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "farm_frites_pommes_frites_1kg",
    "name": "بطاطس بوم فريت نصف مقلية ومجمدة فارم فريتس 1 كجم",
    "nameEn": "Farm Frites Pommes Frites French Fries 1kg",
    "category": "frozen",
    "price": 66,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فارم فريتس (Farm Frites)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/farm_frites_pommes_frites_1kg.png",
    "description": "أصابع بطاطس طبيعية نصف مقلية ومجمدة سريعة التحضير ومقرمشة من فارم فريتس.",
    "flavor": "بوم فريت",
    "sizes": [
      {
        "name": "كيس بوم فريت 1 كجم (66 ج.م)",
        "weight": "1 كجم",
        "price": 66,
        "selected": true
      },
      {
        "name": "كيس رفيعة 1 كجم Thin (70 ج.م)",
        "weight": "1 كجم",
        "price": 70
      },
      {
        "name": "كيس عائلي 2.5 كجم (165 ج.م)",
        "weight": "2.5 كجم",
        "price": 165
      }
    ]
  },
  {
    "id": "atyab_regular_chicken_strips_1kg",
    "name": "تشيكن ستربس دجاج عادي أطياب 1 كجم",
    "nameEn": "Atyab Regular Chicken Strips 1kg",
    "category": "frozen",
    "price": 320,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/atyab_regular_chicken_strips_1kg.png",
    "description": "أصابع صدور دجاج مقرمشة 100% لحم دجاج صافي بالتتبيلة الأصلية الشهية غير الحارة من أطياب.",
    "flavor": "عادي",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (320 ج.م)",
        "weight": "1 كجم",
        "price": 320,
        "selected": true
      },
      {
        "name": "عبوة اقتصادية 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "farm_frites_pommes_frites_2_5kg",
    "name": "بطاطس بوم فريت نصف مقلية ومجمدة فارم فريتس 2.5 كجم",
    "nameEn": "Farm Frites Pommes Frites French Fries 2.5kg",
    "category": "frozen",
    "price": 165,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فارم فريتس (Farm Frites)",
    "weight": "2.5 كجم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/farm_frites_pommes_frites_2_5kg.png",
    "description": "عبوة عائلية اقتصادية من بطاطس فارم فريتس بوم فريت النصف مقلية سريعة التحضير وعالية القرمشة.",
    "flavor": "بوم فريت",
    "sizes": [
      {
        "name": "كيس عائلي 2.5 كجم (165 ج.م)",
        "weight": "2.5 كجم",
        "price": 165,
        "selected": true
      },
      {
        "name": "كيس بوم فريت 1 كجم (66 ج.م)",
        "weight": "1 كجم",
        "price": 66
      },
      {
        "name": "كيس رفيعة 1 كجم Thin (70 ج.م)",
        "weight": "1 كجم",
        "price": 70
      }
    ]
  },
  {
    "id": "farm_frites_thin_fries_1kg",
    "name": "بطاطس رفيعة مقلية ومجمدة فارم فريتس 1 كجم",
    "nameEn": "Farm Frites Thin Cut French Fries 1kg",
    "category": "frozen",
    "price": 70,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فارم فريتس (Farm Frites)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/farm_frites_thin_fries_1kg.png",
    "description": "أصابع بطاطس رفيعة مقرمشة إضافية ولذيذة جاهزة للقلي السريع من فارم فريتس.",
    "flavor": "بطاطس رفيعة",
    "sizes": [
      {
        "name": "كيس رفيعة 1 كجم Thin (70 ج.م)",
        "weight": "1 كجم",
        "price": 70,
        "selected": true
      },
      {
        "name": "كيس بوم فريت 1 كجم (66 ج.م)",
        "weight": "1 كجم",
        "price": 66
      },
      {
        "name": "كيس عائلي 2.5 كجم (165 ج.م)",
        "weight": "2.5 كجم",
        "price": 165
      }
    ]
  },
  {
    "id": "koki_chicken_strips_pure_breast_meat_1kg",
    "name": "تشيكن ستربس لحم صدور صافي سوبر توفير كوكي 1 كجم",
    "nameEn": "Koki Chicken Strips Pure Breast Meat Super Saver 1kg",
    "category": "frozen",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/koki_chicken_strips_pure_breast_meat_1kg.png",
    "description": "ستربس دجاج فاخر من لحم صدور الدجاج الصافي بالتتبيلة المميزة والمقرمشة بحجم سوبر توفير من كوكي.",
    "flavor": "عادي",
    "sizes": [
      {
        "name": "كيس سوبر توفير 1 كجم (295 ج.م)",
        "weight": "1 كجم",
        "price": 295,
        "selected": true
      },
      {
        "name": "كيس اقتصادي 400 جم (140 ج.م)",
        "weight": "400 جم",
        "price": 140
      }
    ]
  },
  {
    "id": "halwani_bros_jumbo_beef_burger_1kg",
    "name": "برجر بقري جامبو حلواني اخوان 1 كجم",
    "nameEn": "Halwani Bros Jumbo Beef Burger 1kg",
    "category": "frozen",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني اخوان (Halwani Bros)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/halwani_bros_jumbo_beef_burger_1kg.png",
    "description": "قطع برجر بقري جامبو فاخرة ومتبلة بأجود التوابل والبهارات لمذاق الشواء الفريد من حلواني إخوان.",
    "flavor": "برجر بقري جامبو",
    "sizes": [
      {
        "name": "عبوة جامبو 1 كجم 16 قطعة (295 ج.م)",
        "weight": "1 كجم",
        "price": 295,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع 400 جم (145 ج.م)",
        "weight": "400 جم",
        "price": 145
      }
    ]
  },
  {
    "id": "atyab_crunchy_chicken_pane_regular_20pcs",
    "name": "بانية دجاج مقرمش عادي مطهي بالكامل أطياب 20 قطعة",
    "nameEn": "Atyab Fully Cooked Crunchy Chicken Pane Regular 20 Pcs",
    "category": "frozen",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "20 قطعة",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/atyab_crunchy_chicken_pane_regular_20pcs.png",
    "description": "قطع بانيه دجاج مقرمشة وشهية مطهية بالكامل ومحضرة من 100% صدور دجاج صافية من أطياب.",
    "flavor": "عادي",
    "sizes": [
      {
        "name": "عبوة 20 قطعة 1 كجم (295 ج.م)",
        "weight": "1 كجم",
        "price": 295,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع 400 جم (145 ج.م)",
        "weight": "400 جم",
        "price": 145
      }
    ]
  },
  {
    "id": "halwani_bros_crunchy_chicken_strips_regular_1kg",
    "name": "ستربس الدجاج كرانشي عادي حلواني اخوان 1 كجم",
    "nameEn": "Halwani Bros Regular Crunchy Chicken Strips 1kg",
    "category": "frozen",
    "price": 325,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني اخوان (Halwani Bros)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/halwani_bros_crunchy_chicken_strips_regular_1kg.png",
    "description": "ستربس دجاج مقرمش وغني بالنكهة بالتتبيلة الأصلية غير الحارة من حلواني إخوان.",
    "flavor": "عادي",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (325 ج.م)",
        "weight": "1 كجم",
        "price": 325,
        "selected": true
      },
      {
        "name": "عبوة 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "el_tawabel_el_sharkeya_beef_burger_30pcs",
    "name": "برجر بقري التوابل الشرقية 30 قطعة (زيادة 20% مجاناً)",
    "nameEn": "El Tawabel El Sharkeya Beef Burger 30 Pieces (+20% Free)",
    "category": "frozen",
    "price": 110,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "التوابل الشرقية (El Tawabel El Sharkeya)",
    "weight": "30 قطعة",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/el_tawabel_el_sharkeya_beef_burger_30pcs.png",
    "description": "برجر لحم بقري بتتبيلة التوابل الشرقية الغنية، عبوة اقتصادية عائلية تحتوي على 30 قطعة.",
    "flavor": "برجر بقري",
    "sizes": [
      {
        "name": "عبوة 30 قطعة (110 ج.م)",
        "weight": "30 قطعة",
        "price": 110,
        "selected": true
      }
    ]
  },
  {
    "id": "halwani_bros_crunchy_chicken_strips_spicy_1kg",
    "name": "ستربس الدجاج كرانشي حار حلواني اخوان 1 كجم",
    "nameEn": "Halwani Bros Spicy Crunchy Chicken Strips 1kg",
    "category": "frozen",
    "price": 325,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني اخوان (Halwani Bros)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/halwani_bros_crunchy_chicken_strips_spicy_1kg.png",
    "description": "ستربس دجاج كرانشي حار بخلطة تتبيلة مقرمشة وحارة مميزة من حلواني إخوان.",
    "flavor": "حار",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (325 ج.م)",
        "weight": "1 كجم",
        "price": 325,
        "selected": true
      },
      {
        "name": "عبوة 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "atyab_pane_chicken_burger_6pcs",
    "name": "برجر دجاج بانية أطياب 6 قطع",
    "nameEn": "Atyab Pane Chicken Burger 6 Pieces",
    "category": "frozen",
    "price": 85,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "6 قطع",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/atyab_pane_chicken_burger_6pcs.png",
    "description": "برجر دجاج بانيه مقرمش ولذيذ من أطياب 6 قطع سريع وسهل التحضير.",
    "flavor": "دجاج بانيه",
    "sizes": [
      {
        "name": "علبة 6 قطع (85 ج.م)",
        "weight": "6 قطع",
        "price": 85,
        "selected": true
      },
      {
        "name": "علبة عائلية 12 قطعة (160 ج.م)",
        "weight": "12 قطعة",
        "price": 160
      }
    ]
  },
  {
    "id": "koki_beef_burger_20pcs",
    "name": "برجر بقري كوكي 20 قطعة",
    "nameEn": "Koki Beef Burger 20 Pieces",
    "category": "frozen",
    "price": 185,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "20 قطعة",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/koki_beef_burger_20pcs.png",
    "description": "برجر لحم بقري اقتصادي ولذيذ من كوكي 20 قطعة مثالي للوجبات والسندوتشات العائلية.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "عبوة 20 قطعة عائلي (185 ج.م)",
        "weight": "20 قطعة",
        "price": 185,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع (95 ج.م)",
        "weight": "8 قطع",
        "price": 95
      }
    ]
  },
  {
    "id": "halwani_bros_crunchy_chicken_strips_400g",
    "name": "ستربس الدجاج كرانشي حلواني إخوان 400 جم",
    "nameEn": "Halwani Bros Crunchy Chicken Strips 400g",
    "category": "frozen",
    "price": 325,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني إخوان (Halwani Bros)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/halwani_bros_crunchy_chicken_strips_400g.png",
    "description": "أصابع صدور دجاج كرانشي مقرمشة عالية الجودة والتتبيل من حلواني إخوان 400 جم.",
    "flavor": "كرانشي مقرمش",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (325 ج.م)",
        "weight": "1 كجم",
        "price": 325,
        "selected": true
      },
      {
        "name": "عبوة 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "atyab_chicken_strips_regular_400g",
    "name": "تشيكن ستربس أطياب دجاج عادي 400 جم",
    "nameEn": "Atyab Chicken Strips Regular 400g",
    "category": "frozen",
    "price": 155,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "400 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/atyab_chicken_strips_regular_400g.png",
    "description": "تشيكن ستربس صدور دجاج فاخرة متبلة ومقرمشة من أطياب بخلطة كلاسيكية مميزة 400 جم.",
    "flavor": "عادي (Regular)",
    "sizes": [
      {
        "name": "عبوة اقتصادية 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155,
        "selected": true
      },
      {
        "name": "عبوة سوبر 1 كجم (320 ج.م)",
        "weight": "1 كجم",
        "price": 320
      }
    ]
  },
  {
    "id": "halwani_bros_oriental_sausage_350g",
    "name": "سجق شرقي حلواني إخوان 350 جم",
    "nameEn": "Halwani Bros Oriental Sausages 350g",
    "category": "frozen",
    "price": 115,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني إخوان (Halwani Bros)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/halwani_bros_oriental_sausage_350g.png",
    "description": "سجق شرقي ممتاز متبل بأشهى البهارات والتوابل الشرقية الأصيلة من حلواني إخوان.",
    "flavor": "سجق شرقي متبل",
    "sizes": [
      {
        "name": "عبوة قياسية (115 ج.م)",
        "weight": "350 جم",
        "price": 115,
        "selected": true
      }
    ]
  },
  {
    "id": "halwani_bros_beef_cocktail_sausage_350g",
    "name": "سوسيس كوكتيل بقري حلواني إخوان 350 جم",
    "nameEn": "Halwani Bros Beef Cocktail Sausage 350g",
    "category": "frozen",
    "price": 115,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني إخوان (Halwani Bros)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/halwani_bros_beef_cocktail_sausage_350g.png",
    "description": "سوسيس كوكتيل بقري شهي ولذيذ من حلواني إخوان 350 جم مناسب للفطور والمقبلات والطبخ.",
    "flavor": "بقري (Beef)",
    "sizes": [
      {
        "name": "عبوة قياسية (115 ج.م)",
        "weight": "350 جم",
        "price": 115,
        "selected": true
      }
    ]
  },
  {
    "id": "chiquitita_beef_burger_1kg",
    "name": "برجر بقري شيكيتيتا 1 كجم",
    "nameEn": "Chiquitita Beef Burger 1kg",
    "category": "frozen",
    "price": 90,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكيتيتا (Chiquitita)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/chiquitita_beef_burger_1kg.png",
    "description": "برجر بقري اقتصادي ولذيذ سريع وسهل التحضير من شيكيتيتا 1 كجم.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "كيس 1 كجم (90 ج.م)",
        "weight": "1 كجم",
        "price": 90,
        "selected": true
      }
    ]
  },
  {
    "id": "halwani_bros_beef_burger_8pcs_400g",
    "name": "بيف برجر حلواني إخوان 8 قطع 400 جم",
    "nameEn": "Halwani Bros Beef Burger 8 Pieces 400g",
    "category": "frozen",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني إخوان (Halwani Bros)",
    "weight": "8 قطع (400 جم)",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/halwani_bros_beef_burger_8pcs_400g.png",
    "description": "برجر بقري فاخر ومتبل من حلواني إخوان عبوة 8 قطع (400 جم) لنكهة البرجر الغنية.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "عبوة جامبو 1 كجم 16 قطعة (295 ج.م)",
        "weight": "1 كجم",
        "price": 295,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع 400 جم (145 ج.م)",
        "weight": "400 جم",
        "price": 145
      }
    ]
  },
  {
    "id": "koki_crunchy_chicken_nuggets_with_fries_60pcs",
    "name": "ناجتس دجاج كرانشي كوكي 60 قطعة مع بطاطس",
    "nameEn": "Koki Crunchy Chicken Nuggets with Fries 60 Pieces",
    "category": "frozen",
    "price": 245,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "60 قطعة",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/koki_crunchy_chicken_nuggets_with_fries_60pcs.png",
    "description": "ناجتس دجاج كرانشي مقرمش من كوكي عبوة عائلية 60 قطعة مع بطاطس هدية لوجبة متكاملة ولذيذة.",
    "flavor": "كرانشي مقرمش",
    "sizes": [
      {
        "name": "عرض سوبر 60 قطعة مع بطاطس (245 ج.م)",
        "weight": "60 قطعة",
        "price": 245,
        "selected": true
      },
      {
        "name": "عبوة 20 قطعة (115 ج.م)",
        "weight": "20 قطعة",
        "price": 115
      }
    ]
  },
  {
    "id": "koki_chicken_burger_8pcs",
    "name": "برجر دجاج كوكي 8 قطع",
    "nameEn": "Koki Chicken Burger 8 Pieces",
    "category": "frozen",
    "price": 185,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "8 قطع",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/koki_chicken_burger_8pcs.png",
    "description": "برجر دجاج شهي وسريع التحضير من كوكي 8 قطع، مقرمش من الخارج وطري من الداخل.",
    "flavor": "دجاج",
    "sizes": [
      {
        "name": "عبوة 20 قطعة عائلي (185 ج.م)",
        "weight": "20 قطعة",
        "price": 185,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع (95 ج.م)",
        "weight": "8 قطع",
        "price": 95
      }
    ]
  },
  {
    "id": "atyab_chicken_nuggets_fully_cooked_20pcs",
    "name": "ناجتس دجاج أطياب مطهية بالكامل 20 قطعة",
    "nameEn": "Atyab Fully Cooked Chicken Nuggets 20 Pieces",
    "category": "frozen",
    "price": 135,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "20 قطعة",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/atyab_chicken_nuggets_fully_cooked_20pcs.png",
    "description": "ناجتس دجاج شهية ومطهية بالكامل من أطياب 20 قطعة سريعة وسهلة التحضير للأطفال والعائلة.",
    "flavor": "دجاج مطهي بالكامل",
    "sizes": [
      {
        "name": "عبوة 20 قطعة (135 ج.م)",
        "weight": "20 قطعة",
        "price": 135,
        "selected": true
      },
      {
        "name": "عبوة 40 قطعة توفير (245 ج.م)",
        "weight": "40 قطعة",
        "price": 245
      }
    ]
  },
  {
    "id": "atyab_oriental_sausages_350g",
    "name": "سجق شرقي أطياب 350 جم",
    "nameEn": "Atyab Oriental Sausages 350g",
    "category": "frozen",
    "price": 185,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "350 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/atyab_oriental_sausages_350g.png",
    "description": "سجق شرقي لحم بقري بخلطة وتوابل شرقية أصيلة ولذيذة من أطياب 350 جم.",
    "flavor": "سجق شرقي",
    "sizes": [
      {
        "name": "طبق 700 جم (185 ج.م)",
        "weight": "700 جم",
        "price": 185,
        "selected": true
      },
      {
        "name": "طبق 350 جم (98 ج.م)",
        "weight": "350 جم",
        "price": 98
      }
    ]
  },
  {
    "id": "atyab_chicken_strips_regular_1kg",
    "name": "تشيكن ستربس أطياب دجاج 1 كجم",
    "nameEn": "Atyab Chicken Strips 1kg",
    "category": "frozen",
    "price": 320,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أطياب (Atyab)",
    "weight": "1 كجم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/atyab_chicken_strips_regular_1kg.png",
    "description": "ستربس صدور دجاج متبلة ومقرمشة من أطياب كيس بحجم عائلي 1 كجم لنكهة رائعة ومقرمشة.",
    "flavor": "عادي (Regular)",
    "sizes": [
      {
        "name": "عبوة سوبر 1 كجم (320 ج.م)",
        "weight": "1 كجم",
        "price": 320,
        "selected": true
      },
      {
        "name": "عبوة اقتصادية 400 جم (155 ج.م)",
        "weight": "400 جم",
        "price": 155
      }
    ]
  },
  {
    "id": "dayem_oriental_sausages_700g",
    "name": "سجق شرقي دايم 700 جم",
    "nameEn": "Dayem Oriental Sausages 700g",
    "category": "frozen",
    "price": 120,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دايم (Dayem)",
    "weight": "700 جم",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/dayem_oriental_sausages_700g.png",
    "description": "سجق شرقي متبل لذيذ واقتصادي من دايم 700 جم مناسب للطبخ والسندوتشات العائلية.",
    "flavor": "سجق شرقي",
    "sizes": [
      {
        "name": "كيس 700 جم (120 ج.م)",
        "weight": "700 جم",
        "price": 120,
        "selected": true
      }
    ]
  },
  {
    "id": "chiquitita_beef_hot_dog_25pcs",
    "name": "هوت دوج بقري شيكيتيتا 25 قطعة",
    "nameEn": "Chiquitita Beef Hot Dog 25 Pieces",
    "category": "frozen",
    "price": 95,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شيكيتيتا (Chiquitita)",
    "weight": "25 قطعة",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/chiquitita_beef_hot_dog_25pcs.png",
    "description": "هوت دوج بقري لذيذ واقتصادي من شيكيتيتا 25 قطعة سريع التحضير ومثالي للسندوتشات.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "كيس 25 قطعة (95 ج.م)",
        "weight": "25 قطعة",
        "price": 95,
        "selected": true
      }
    ]
  },
  {
    "id": "koki_beef_hot_dog_12pcs",
    "name": "هوت دوج بقري كوكي 12 قطعة",
    "nameEn": "Koki Beef Hot Dog 12 Pieces",
    "category": "frozen",
    "price": 110,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "12 قطعة",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/koki_beef_hot_dog_12pcs.png",
    "description": "هوت دوج بيف بقري شهي ومتبل من كوكي 12 قطعة لسندوتشات سريعة ومميزة.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "عبوة 12 قطعة (110 ج.م)",
        "weight": "12 قطعة",
        "price": 110,
        "selected": true
      },
      {
        "name": "عبوة 24 قطعة توفير (195 ج.م)",
        "weight": "24 قطعة",
        "price": 195
      }
    ]
  },
  {
    "id": "koki_spicy_crunchy_chicken_pane_20pcs",
    "name": "بانيه دجاج كرانشي حار كوكي سوبر توفير 20 قطعة",
    "nameEn": "Koki Spicy Crunchy Chicken Pane Super Saver 20 Pieces",
    "category": "frozen",
    "price": 265,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "20 قطعة",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/koki_spicy_crunchy_chicken_pane_20pcs.png",
    "description": "صدور دجاج بانيه كرانشي مقرمشة وحارة سوبر توفير من كوكي 20 قطعة بطعم سبايسي مميز.",
    "flavor": "حار (Spicy)",
    "sizes": [
      {
        "name": "عبوة 20 قطعة 1 كجم (265 ج.م)",
        "weight": "1 كجم",
        "price": 265,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع 400 جم (130 ج.م)",
        "weight": "400 جم",
        "price": 130
      }
    ]
  },
  {
    "id": "koki_gold_gourmet_beef_burger_6pcs",
    "name": "برجر بقري جورميه كوكي جولد 6 قطع",
    "nameEn": "Koki Gold Gourmet Beef Burger 6 Pieces",
    "category": "frozen",
    "price": 185,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي جولد (Koki Gold)",
    "weight": "6 قطع",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/koki_gold_gourmet_beef_burger_6pcs.png",
    "description": "برجر بقري جورميه فاخر 100% لحم بقري صافي من كوكي جولد 6 قطع لطعم وجودة استثنائية.",
    "flavor": "بيف جورميه",
    "sizes": [
      {
        "name": "عبوة 20 قطعة عائلي (185 ج.م)",
        "weight": "20 قطعة",
        "price": 185,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع (95 ج.م)",
        "weight": "8 قطع",
        "price": 95
      }
    ]
  },
  {
    "id": "halwani_bros_beef_burger_16pcs_800g",
    "name": "بيف برجر حلواني إخوان 16 قطعة 800 جم",
    "nameEn": "Halwani Bros Beef Burger 16 Pieces 800g",
    "category": "frozen",
    "price": 295,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "حلواني إخوان (Halwani Bros)",
    "weight": "16 قطعة (800 جم)",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/halwani_bros_beef_burger_16pcs_800g.png",
    "description": "بيف برجر حلواني إخوان عبوة عائلية 16 قطعة (800 جم) بنكهة غنية ولحم بقري ممتاز.",
    "flavor": "لحم بقري",
    "sizes": [
      {
        "name": "عبوة جامبو 1 كجم 16 قطعة (295 ج.م)",
        "weight": "1 كجم",
        "price": 295,
        "selected": true
      },
      {
        "name": "عبوة 8 قطع 400 جم (145 ج.م)",
        "weight": "400 جم",
        "price": 145
      }
    ]
  },
  {
    "id": "koki_crunchy_chicken_drumsticks_8pcs",
    "name": "دبابيس دجاج كرانشي كوكي 8 قطع",
    "nameEn": "Koki Crunchy Chicken Drumsticks 8 Pieces",
    "category": "frozen",
    "price": 235,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كوكي (Koki)",
    "weight": "8 قطع",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/koki_crunchy_chicken_drumsticks_8pcs.png",
    "description": "دبابيس دجاج كرانشي متبلة بخلطة مقرمشة ولذيذة من كوكي سريعة التحضير.",
    "flavor": "كرانشي مقرمش",
    "sizes": [
      {
        "name": "عبوة قياسية (235 ج.م)",
        "weight": "8 قطع",
        "price": 235,
        "selected": true
      }
    ]
  },
  {
    "id": "lipton_yellow_label_fine_tea_250g",
    "name": "شاي ليبتون العلامة الصفراء ناعم 250 جم",
    "nameEn": "Lipton Yellow Label Fine Black Tea 250g",
    "category": "drinks",
    "price": 52,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليبتون (Lipton)",
    "weight": "250 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/lipton_yellow_label_fine_tea_250g.png",
    "description": "شاي أسود فاخر العلامة الصفراء توليفة جديدة بجودة عالية ومذاق قوي من ليبتون 250 جم.",
    "flavor": "شاي أسود ناعم",
    "sizes": [
      {
        "name": "عبوة ناعم 250 جم (52 ج.م)",
        "weight": "250 جم",
        "price": 52,
        "selected": true
      },
      {
        "name": "عبوة خرز 250 جم (55 ج.م)",
        "weight": "250 جم",
        "price": 55
      },
      {
        "name": "عبوة 500 جم (95 ج.م)",
        "weight": "500 جم",
        "price": 95
      },
      {
        "name": "علبة 100 فتلة (115 ج.م)",
        "weight": "100 فتلة",
        "price": 115
      }
    ]
  },
  {
    "id": "el_arosa_tea_fine_kenyan_250g",
    "name": "شاي العروسة أسود كيني فاخر 250 جم",
    "nameEn": "El Arosa Kenya Black Tea 250g",
    "category": "drinks",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "العروسة (El Arosa)",
    "weight": "250 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/el_arosa_tea_fine_kenyan_250g.png",
    "description": "شاي العروسة أسود كيني فاخر 250 جم توليفة غنية بنكهة أصيلة ولون ذهبي رائع للشاي المصري الأصيل.",
    "flavor": "شاي أسود كيني",
    "sizes": [
      {
        "name": "عبوة ربع كيلو 250 جم (55 ج.م)",
        "weight": "250 جم",
        "price": 55,
        "selected": true
      },
      {
        "name": "باكو وسط 100 جم (32.5 ج.م)",
        "weight": "100 جم",
        "price": 32.5
      },
      {
        "name": "باكو صغير 40 جم (9 ج.م)",
        "weight": "40 جم",
        "price": 9
      },
      {
        "name": "علبة 100 فتلة (85 ج.م)",
        "weight": "100 فتلة",
        "price": 85
      }
    ]
  },
  {
    "id": "lipton_yellow_label_kharaz_tea_250g",
    "name": "شاي ليبتون العلامة الصفراء خرز 250 جم",
    "nameEn": "Lipton Yellow Label Granulated Kharaz Tea 250g",
    "category": "drinks",
    "price": 52,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليبتون (Lipton)",
    "weight": "250 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/lipton_yellow_label_kharaz_tea_250g.png",
    "description": "شاي ليبتون العلامة الصفراء شاي خرز محبب 250 جم لمذاق مركز وثقيل بنكهة ممتازة.",
    "flavor": "شاي خرز",
    "sizes": [
      {
        "name": "عبوة ناعم 250 جم (52 ج.م)",
        "weight": "250 جم",
        "price": 52,
        "selected": true
      },
      {
        "name": "عبوة خرز 250 جم (55 ج.م)",
        "weight": "250 جم",
        "price": 55
      },
      {
        "name": "عبوة 500 جم (95 ج.م)",
        "weight": "500 جم",
        "price": 95
      },
      {
        "name": "علبة 100 فتلة (115 ج.م)",
        "weight": "100 فتلة",
        "price": 115
      }
    ]
  },
  {
    "id": "lipton_yellow_label_tea_100_bags",
    "name": "شاي ليبتون العلامة الصفراء فتلة 100 كيس",
    "nameEn": "Lipton Yellow Label Tea 100 Tea Bags",
    "category": "drinks",
    "price": 115,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليبتون (Lipton)",
    "weight": "100 فتلة",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/lipton_yellow_label_tea_100_bags.png",
    "description": "شاي أسود ليبتون العلامة الصفراء أكياس فتلة عبوة 100 كيس شاي لتجربة شاي يومية سريعة ومثالية.",
    "flavor": "شاي أسود فتلة",
    "sizes": [
      {
        "name": "علبة 100 فتلة (115 ج.م)",
        "weight": "100 فتلة",
        "price": 115,
        "selected": true
      },
      {
        "name": "علبة 25 فتلة (35 ج.م)",
        "weight": "25 فتلة",
        "price": 35
      },
      {
        "name": "عبوة 250 جم ناعم (52 ج.م)",
        "weight": "250 جم",
        "price": 52
      }
    ]
  },
  {
    "id": "lipton_yellow_label_tea_100_bags_box",
    "name": "شاي ليبتون العلامة الصفراء أكياس 100 فتلة",
    "nameEn": "Lipton Yellow Label Black Tea Bags 100 Pieces",
    "category": "drinks",
    "price": 115,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ليبتون (Lipton)",
    "weight": "100 فتلة",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/lipton_yellow_label_tea_100_bags_box.png",
    "description": "شاي ليبتون العلامة الصفراء توليفة جديدة ومميزة 100 فتلة غني بالنكهة واللون الرائع.",
    "flavor": "شاي أسود فتلة",
    "sizes": [
      {
        "name": "علبة 100 فتلة (115 ج.م)",
        "weight": "100 فتلة",
        "price": 115,
        "selected": true
      },
      {
        "name": "علبة 25 فتلة (35 ج.م)",
        "weight": "25 فتلة",
        "price": 35
      },
      {
        "name": "عبوة 250 جم ناعم (52 ج.م)",
        "weight": "250 جم",
        "price": 52
      }
    ]
  },
  {
    "id": "el_arosa_black_tea_40g",
    "name": "شاي العروسة أسود ناعم 40 جم",
    "nameEn": "El Arosa Black Tea 40g",
    "category": "drinks",
    "price": 9,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "شاي العروسة (El Arosa Tea)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/el_arosa_black_tea_40g.png",
    "description": "شاي أسود كيني ناعم ومميز من العروسة، يمنحك مذاقاً غنياً ولوناً رائعاً في عبوة 40 جم.",
    "flavor": "شاي أسود كيني ناعم",
    "sizes": [
      {
        "name": "باكو صغير 40 جم (9 ج.م)",
        "weight": "40 جم",
        "price": 9,
        "selected": true
      },
      {
        "name": "باكو وسط 100 جم (32.5 ج.م)",
        "weight": "100 جم",
        "price": 32.5
      },
      {
        "name": "عبوة ربع كيلو 250 جم (55 ج.م)",
        "weight": "250 جم",
        "price": 55
      },
      {
        "name": "علبة 100 فتلة (85 ج.م)",
        "weight": "100 فتلة",
        "price": 85
      }
    ]
  },
  {
    "id": "isis_anise_herbal_tea_20bags",
    "name": "أعشاب ينسون إيزيس طبيعي 20 فتلة + 15% مجاناً",
    "nameEn": "ISIS Natural Anise Herbal Tea 20 Bags + 15% Free",
    "category": "drinks",
    "price": 35,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إيزيس (ISIS Organic)",
    "weight": "20 فتلة",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/isis_anise_herbal_tea_20bags.png",
    "description": "مشروب أعشاب ينسون طبيعي ونقي 100% من إيزيس لتهدئة المعدة والاسترخاء، عبوة توفيرية 20 كيس فلتر.",
    "flavor": "ينسون",
    "sizes": [
      {
        "name": "عبوة 20 كيس (35 ج.م)",
        "weight": "20 كيس فلتر",
        "price": 35,
        "selected": true
      }
    ]
  },
  {
    "id": "isis_hibiscus_herbal_tea_100bags",
    "name": "كركديه إيزيس أعشاب طبيعية 100 فتلة",
    "nameEn": "ISIS Natural Hibiscus Herbal Tea 100 Bags",
    "category": "drinks",
    "price": 130,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إيزيس (ISIS Organic)",
    "weight": "100 فتلة",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/isis_hibiscus_herbal_tea_100bags.png",
    "description": "مشروب كركديه طبيعي 100% منعش وصحي من إيزيس، عبوة عائلية اقتصادية تحتوي على 100 كيس فلتر.",
    "flavor": "كركديه",
    "sizes": [
      {
        "name": "عبوة 100 كيس (130 ج.م)",
        "weight": "100 كيس فلتر",
        "price": 130,
        "selected": true
      }
    ]
  },
  {
    "id": "isis_peppermint_herbal_tea_12bags",
    "name": "أعشاب نعناع إيزيس طبيعي 12 فتلة",
    "nameEn": "ISIS Peppermint Herbal Tea 12 Bags",
    "category": "drinks",
    "price": 25,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "إيزيس (ISIS Organic)",
    "weight": "12 فتلة",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/isis_peppermint_herbal_tea_12bags.png",
    "description": "شاي أعشاب نعناع فلفلي طبيعي منعش ومهدئ من إيزيس، عبوة مدمجة تحتوي على 12 كيس فلتر.",
    "flavor": "نعناع",
    "sizes": [
      {
        "name": "عبوة 12 كيس (25 ج.م)",
        "weight": "12 كيس فلتر",
        "price": 25,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_classic_instant_coffee_jar_190g",
    "name": "نسكافيه كلاسيك قهوة سريعة الذوبان برطمان 190 جم",
    "nameEn": "Nescafe Classic Instant Coffee Jar 190g",
    "category": "drinks",
    "price": 285,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "190 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/nescafe_classic_instant_coffee_jar_190g.png",
    "description": "قهوة نسكافيه كلاسيك سريعة التحضير بحبيبات غنية بنكهة قوية ومميزة، في برطمان زجاجي 190 جم يكفي حتى 105 أكواب.",
    "flavor": "كلاسيك",
    "sizes": [
      {
        "name": "برطمان 190 جم (285 ج.م)",
        "weight": "190 جم",
        "price": 285,
        "selected": true
      },
      {
        "name": "برطمان 95 جم (145 ج.م)",
        "weight": "95 جم",
        "price": 145
      },
      {
        "name": "كيس 18 جم (18 ج.م)",
        "weight": "18 جم",
        "price": 18
      }
    ]
  },
  {
    "id": "nescafe_gold_instant_coffee_jar_190g",
    "name": "نسكافيه جولد قهوة سريعة التحضير برطمان 190 جم",
    "nameEn": "Nescafe Gold Instant Coffee Jar 190g",
    "category": "drinks",
    "price": 345,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "190 جم",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/nescafe_gold_instant_coffee_jar_190g.png",
    "description": "قهوة نسكافيه جولد الفاخرة سريعة التحضير بحبيبات ذهبية ورائحة أرابيكا غنية ومذاق ناعم لا يقاوم.",
    "flavor": "جولد",
    "sizes": [
      {
        "name": "عبوة قياسية (345 ج.م)",
        "weight": "190 جم",
        "price": 345,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_classic_instant_coffee_pouch_18g",
    "name": "نسكافيه كلاسيك كيس قهوة سريعة الذوبان 18 جم",
    "nameEn": "Nescafe Classic Instant Coffee Pouch 18g",
    "category": "drinks",
    "price": 18,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/nescafe_classic_instant_coffee_pouch_18g.png",
    "description": "كيس نسكافيه كلاسيك قهوة سريعة التحضير 18 جم يكفي لعمل 10 أكواب قهوة غنية ومركزة.",
    "flavor": "كلاسيك",
    "sizes": [
      {
        "name": "عبوة قياسية (18 ج.م)",
        "weight": "18 جم",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "abu_auf_turkish_coffee_plain_light_200g",
    "name": "قهوة تركي فاتح سادة أبو عوف 200 جم",
    "nameEn": "Abu Auf Plain Light Turkish Coffee 200g",
    "category": "drinks",
    "price": 195,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أبو عوف (Abu Auf)",
    "weight": "200 جم",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/abu_auf_turkish_coffee_plain_light_200g.png",
    "description": "بن تركي فاتح سادة عالي الجودة من أبو عوف بتحميص مميز ومذاق قهوة أصيل ومثالي للصباح.",
    "flavor": "فاتح سادة",
    "sizes": [
      {
        "name": "كيس 200 جم فاتح سادة (195 ج.م)",
        "weight": "200 جم",
        "price": 195,
        "selected": true
      },
      {
        "name": "كيس 100 جم (100 ج.م)",
        "weight": "100 جم",
        "price": 100
      }
    ]
  },
  {
    "id": "nescafe_3in1_original_coffee_stick",
    "name": "نسكافيه 3 في 1 كلاسيك أوريجينال كيس واحد",
    "nameEn": "Nescafe 3in1 Original Coffee Stick",
    "category": "drinks",
    "price": 18,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/nescafe_3in1_original_coffee_stick.png",
    "description": "ظرف قهوة نسكافيه 3 في 1 أوريجينال سريع التحضير بمزيج مثالي ومتوازن من القهوة ومبيض القهوة والسكر.",
    "flavor": "أوريجينال 3 في 1",
    "sizes": [
      {
        "name": "عبوة قياسية (18 ج.م)",
        "weight": "18 جم",
        "price": 18,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_2in1_sugar_free_coffee_stick",
    "name": "نسكافيه 2 في 1 خالي من السكر كيس واحد",
    "nameEn": "Nescafe 2in1 Sugar Free Coffee Stick",
    "category": "drinks",
    "price": 6,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "11.7 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/nescafe_2in1_sugar_free_coffee_stick.png",
    "description": "ظرف نسكافيه 2 في 1 خالي من السكر يجمع بين القهوة الغنية ومبيض القهوة لتجربة ناعمة بدون سكر مضاف.",
    "flavor": "2 في 1 خالي من السكر",
    "sizes": [
      {
        "name": "ظرف فردي 18 جم (6 ج.م)",
        "weight": "ظرف",
        "price": 6,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف (70 ج.م)",
        "weight": "12 ظرف",
        "price": 70
      },
      {
        "name": "علبة 24 ظرف توفير (138 ج.م)",
        "weight": "24 ظرف",
        "price": 138
      }
    ]
  },
  {
    "id": "nescafe_3in1_rich_coffee_stick",
    "name": "نسكافيه 3 في 1 ريتش قهوة غنية كيس واحد",
    "nameEn": "Nescafe 3in1 Rich Coffee Stick",
    "category": "drinks",
    "price": 6,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "20 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/nescafe_3in1_rich_coffee_stick.png",
    "description": "ظرف نسكافيه 3 في 1 ريتش بتركيز قهوة أقوى ومذاق أغنى لعشاق القهوة المركزة مع الكريمة والسكر.",
    "flavor": "ريتش غني",
    "sizes": [
      {
        "name": "ظرف فردي 18 جم (6 ج.م)",
        "weight": "ظرف",
        "price": 6,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف (70 ج.م)",
        "weight": "12 ظرف",
        "price": 70
      },
      {
        "name": "علبة 24 ظرف توفير (138 ج.م)",
        "weight": "24 ظرف",
        "price": 138
      }
    ]
  },
  {
    "id": "nescafe_gold_3in1_coffee_box_12sticks",
    "name": "نسكافيه جولد 3 في 1 علبة 12 ظرف",
    "nameEn": "Nescafe Gold 3in1 Coffee Box 12 Sticks",
    "category": "drinks",
    "price": 345,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "12 ظرف",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/nescafe_gold_3in1_coffee_box_12sticks.png",
    "description": "علبة نسكافيه جولد 3 في 1 تحتوي على 12 ظرف فاخر من القهوة الذهبية الفاخرة مع الكريمة والسكر الناعم.",
    "flavor": "جولد 3 في 1",
    "sizes": [
      {
        "name": "عبوة قياسية (345 ج.م)",
        "weight": "12 × 20 جم",
        "price": 345,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_3in1_caramel_coffee_box_24sticks",
    "name": "نسكافيه 3 في 1 بالكراميل علبة 24 ظرف",
    "nameEn": "Nescafe 3in1 Caramel Coffee Box 24 Sticks",
    "category": "drinks",
    "price": 138,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "24 ظرف",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/nescafe_3in1_caramel_coffee_box_24sticks.png",
    "description": "علبة نسكافيه 3 في 1 بنكهة الكراميل اللذيذة تحتوي على 24 ظرف لتستمتع بمذاق القهوة الغنية بالكراميل الكريمي في أي وقت.",
    "flavor": "كراميل",
    "sizes": [
      {
        "name": "عبوة قياسية (138 ج.م)",
        "weight": "24 × 18 جم",
        "price": 138,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_3in1_chocolate_coffee_box_24sticks",
    "name": "نسكافيه 3 في 1 بالشوكولاتة علبة 24 ظرف",
    "nameEn": "Nescafe 3in1 Chocolate Coffee Box 24 Sticks",
    "category": "drinks",
    "price": 138,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "24 ظرف",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/nescafe_3in1_chocolate_coffee_box_24sticks.png",
    "description": "علبة نسكافيه 3 في 1 بطعم الشوكولاتة اللذيذة تحتوي على 24 ظرف لتحضير مشروب قهوة موكا شوكولاتة دافئ وغني.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (138 ج.م)",
        "weight": "24 × 18 جم",
        "price": 138,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_3in1_chocolate_coffee_stick",
    "name": "نسكافيه 3 في 1 بطعم الشوكولاتة كيس واحد",
    "nameEn": "Nescafe 3in1 Chocolate Coffee Stick",
    "category": "drinks",
    "price": 6,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/nescafe_3in1_chocolate_coffee_stick.png",
    "description": "ظرف قهوة سريعة التحضير نسكافيه 3 في 1 بطعم الشوكولاتة اللذيذة ومزيج القهوة والكريمة والسكر.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "ظرف فردي 18 جم (6 ج.م)",
        "weight": "ظرف",
        "price": 6,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف (70 ج.م)",
        "weight": "12 ظرف",
        "price": 70
      },
      {
        "name": "علبة 24 ظرف توفير (138 ج.م)",
        "weight": "24 ظرف",
        "price": 138
      }
    ]
  },
  {
    "id": "nescafe_cappuccino_unsweetened_stick",
    "name": "نسكافيه كابتشينو غير محلى كيس واحد",
    "nameEn": "Nescafe Cappuccino Unsweetened Coffee Stick",
    "category": "drinks",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "14.2 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/nescafe_cappuccino_unsweetened_stick.png",
    "description": "ظرف نسكافيه كابتشينو برغوة كريمية غنية وكثيفة بدون سكر لتحضير كوب كابتشينو إيطالي فاخر في ثوانٍ.",
    "flavor": "كابتشينو غير محلى",
    "sizes": [
      {
        "name": "كيس فردي (12 ج.م)",
        "weight": "14.2 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_vanilla_latte_stick",
    "name": "نسكافيه فانيليا لاتيه كيس واحد",
    "nameEn": "Nescafe Vanilla Latte Coffee Stick",
    "category": "drinks",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "22.4 جم",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/nescafe_vanilla_latte_stick.png",
    "description": "ظرف نسكافيه فانيليا لاتيه برغوة حريرية ونكهة الفانيليا الناعمة لتحضير مشروب لاتيه كريمي فاخر.",
    "flavor": "فانيليا لاتيه",
    "sizes": [
      {
        "name": "كيس فردي (12 ج.م)",
        "weight": "22.4 جم",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "bonjorno_mazago_mix_4in1_sachet",
    "name": "بونجورنو كافيه مزاجو ميكس 4 في 1 ظرف واحد",
    "nameEn": "Bonjorno Cafe Mazago Mix 4in1 Sachet",
    "category": "drinks",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "14 جم",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/bonjorno_mazago_mix_4in1_sachet.png",
    "description": "ظرف بونجورنو كافيه مزاجو ميكس 4 في 1 بمزيج غني من القهوة والشيكوريا والكريمر والسكر لمذاق مصري أصيل وتظبيط للمزاج.",
    "flavor": "مزاجو ميكس 4 في 1",
    "sizes": [
      {
        "name": "ظرف فردي في الخمسينة (5 ج.م)",
        "weight": "ظرف",
        "price": 5,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف توفير (65 ج.م)",
        "weight": "12 ظرف",
        "price": 65
      }
    ]
  },
  {
    "id": "bonjorno_coffee_mix_3in1_12sachets",
    "name": "بونجورنو كوفي ميكس 3 في 1 عرض 12 كيس",
    "nameEn": "Bonjorno Coffee Mix 3in1 Pack of 12 Sachets",
    "category": "drinks",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "12 كيس",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/bonjorno_coffee_mix_3in1_12sachets.png",
    "description": "عرض بونجورنو كوفي ميكس 3 في 1 يحتوي على 12 ظرف قهوة سريعة التحضير بالكريمة والسكر بطعم غني ومحبوب.",
    "flavor": "كوفي ميكس 3 في 1",
    "sizes": [
      {
        "name": "عبوة قياسية (65 ج.م)",
        "weight": "12 ظرف",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "bonjorno_cappuccino_double_shot_box_12sachets",
    "name": "بونجورنو كابتشينو دوبل شوت علبة 12 ظرف",
    "nameEn": "Bonjorno Cappuccino Double Shot Box 12 Sachets",
    "category": "drinks",
    "price": 85,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "12 ظرف",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/bonjorno_cappuccino_double_shot_box_12sachets.png",
    "description": "علبة كابتشينو بونجورنو دوبل شوت جديدة بقهوة أكثر ورغوة كريمية غنية وكثيفة تحتوي على 12 ظرف.",
    "flavor": "كابتشينو دوبل شوت",
    "sizes": [
      {
        "name": "علبة 12 ظرف (85 ج.م)",
        "weight": "12 ظرف",
        "price": 85,
        "selected": true
      }
    ]
  },
  {
    "id": "break_coffee_cappuccino_mocha_box_8sticks",
    "name": "بريك كوفي كابتشينو موكا علبة 8 أظرف",
    "nameEn": "Break Coffee Break Cappuccino Mocha Box 8 Sticks",
    "category": "drinks",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بريك كوفي (Break Coffee)",
    "weight": "8 أظرف",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/break_coffee_cappuccino_mocha_box_8sticks.png",
    "description": "علبة بريك كوفي كابتشينو موكا تحتوي على 8 أظرف قهوة سريعة التحضير بمذاق الموكا الغني والشوكولاتة مع رغوة رائعة.",
    "flavor": "كابتشينو موكا بالشوكولاتة",
    "sizes": [
      {
        "name": "علبة 8 أظرف (55 ج.م)",
        "weight": "8 أظرف",
        "price": 55,
        "selected": true
      }
    ]
  },
  {
    "id": "break_coffee_cappuccino_hazelnut_box_8sticks",
    "name": "بريك كوفي كابتشينو بندق علبة 8 أظرف",
    "nameEn": "Break Coffee Break Cappuccino Hazelnut Box 8 Sticks",
    "category": "drinks",
    "price": 55,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بريك كوفي (Break Coffee)",
    "weight": "8 أظرف",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/break_coffee_cappuccino_hazelnut_box_8sticks.png",
    "description": "علبة كابتشينو بريك كوفي بنكهة البندق اللذيذة ورغوة غنية كريمية تحتوي على 8 أظرف سريعة التحضير.",
    "flavor": "كابتشينو بالبندق",
    "sizes": [
      {
        "name": "علبة 8 أظرف (55 ج.م)",
        "weight": "8 × 18.5 جم",
        "price": 55,
        "selected": true
      }
    ]
  },
  {
    "id": "bonjorno_coffee_mix_fel_khamseena_box_12sachets",
    "name": "بونجورنو كوفي ميكس في الخمسينة علبة 12 ظرف",
    "nameEn": "Bonjorno Coffee Mix Fel Khamseena Box 12 Sachets",
    "category": "drinks",
    "price": 65,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "12 ظرف",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/bonjorno_coffee_mix_fel_khamseena_box_12sachets.png",
    "description": "علبة بونجورنو كوفي ميكس في الخمسينة بمذاق مظبوط ومحبوب لكوب شاي/قهوة في الخمسينة، تحتوي على 12 ظرف.",
    "flavor": "كوفي ميكس في الخمسينة",
    "sizes": [
      {
        "name": "عبوة قياسية (65 ج.م)",
        "weight": "12 ظرف",
        "price": 65,
        "selected": true
      }
    ]
  },
  {
    "id": "bonjorno_cappuccino_hazelnut_box_12sachets",
    "name": "بونجورنو كابتشينو بالبندق علبة 12 ظرف",
    "nameEn": "Bonjorno Cappuccino Hazelnut Box 12 Sachets",
    "category": "drinks",
    "price": 85,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "12 ظرف",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/bonjorno_cappuccino_hazelnut_box_12sachets.png",
    "description": "علبة كابتشينو بونجورنو بنكهة البندق الشهية مع رغوة غنية وفاخرة تحتوي على 12 ظرف سهل وسريع التحضير.",
    "flavor": "كابتشينو بالبندق",
    "sizes": [
      {
        "name": "علبة 12 ظرف (85 ج.م)",
        "weight": "12 ظرف",
        "price": 85,
        "selected": true
      }
    ]
  },
  {
    "id": "bonjorno_cappuccino_vanilla_sachet",
    "name": "بونجورنو كابتشينو بالفانيليا كيس واحد",
    "nameEn": "Bonjorno Cappuccino Vanilla Sachet",
    "category": "drinks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو كافيه (Bonjorno Cafe)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/bonjorno_cappuccino_vanilla_sachet.png",
    "description": "ظرف بونجورنو كابتشينو بنكهة الفانيليا الناعمة ورغوة كثيفة لمشروب قهوة سريع ولذيذ في أي وقت.",
    "flavor": "كابتشينو بالفانيليا",
    "sizes": [
      {
        "name": "ظرف فردي (7 ج.م)",
        "weight": "ظرف",
        "price": 7,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف توفير (85 ج.م)",
        "weight": "12 ظرف",
        "price": 85
      }
    ]
  },
  {
    "id": "bonjorno_coffeemix_fel_khamseena_sachet",
    "name": "كوفي ميكس بونجورنو كافيه في الخمسينة ظرف",
    "nameEn": "Bonjorno Cafe Coffee Mix Fel Khamseena Sachet",
    "category": "drinks",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو (Bonjorno)",
    "weight": "12 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/bonjorno_coffeemix_fel_khamseena_sachet.png",
    "description": "مشروب قهوة سريع التحضير كوفي ميكس في الخمسينة من بونجورنو لمذاق قهوة مصري أصيل ومميز.",
    "flavor": "كوفي ميكس",
    "sizes": [
      {
        "name": "ظرف فردي في الخمسينة (5 ج.م)",
        "weight": "ظرف",
        "price": 5,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف توفير (65 ج.م)",
        "weight": "12 ظرف",
        "price": 65
      }
    ]
  },
  {
    "id": "bonjorno_cappuccino_hazelnut_stick",
    "name": "كابتشينو بونجورنو بنكهة البندق ستيك",
    "nameEn": "Bonjorno Cafe Cappuccino Hazelnut Stick",
    "category": "drinks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو (Bonjorno)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/bonjorno_cappuccino_hazelnut_stick.png",
    "description": "كابتشينو سريع التحضير برغوة كريمية غنية ونكهة البندق اللذيذة من بونجورنو كافيه.",
    "flavor": "بندق",
    "sizes": [
      {
        "name": "ظرف فردي (7 ج.م)",
        "weight": "ظرف",
        "price": 7,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف توفير (85 ج.م)",
        "weight": "12 ظرف",
        "price": 85
      }
    ]
  },
  {
    "id": "bonjorno_cappuccino_double_shot_stick",
    "name": "كابتشينو بونجورنو دوبل شوت قهوة أكثر ستيك",
    "nameEn": "Bonjorno Cafe Cappuccino Double Shot Stick",
    "category": "drinks",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بونجورنو (Bonjorno)",
    "weight": "18 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/bonjorno_cappuccino_double_shot_stick.png",
    "description": "كابتشينو بونجورنو دوبل شوت بنكهة قهوة أقوى ومضاعفة مع رغوة غنية لبداية يوم مليئة بالطاقة.",
    "flavor": "دوبل شوت قهوة مركزة",
    "sizes": [
      {
        "name": "ظرف فردي (7 ج.م)",
        "weight": "ظرف",
        "price": 7,
        "selected": true
      },
      {
        "name": "علبة 12 ظرف توفير (85 ج.م)",
        "weight": "12 ظرف",
        "price": 85
      }
    ]
  },
  {
    "id": "nescafe_spanish_latte_can_250ml",
    "name": "مشروب قهوة مثلجة نسكافيه سبانش لاتيه كان 250 مل",
    "nameEn": "Nescafe Spanish Latte Iced Coffee Can 250ml",
    "category": "drinks",
    "price": 45,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/nescafe_spanish_latte_can_250ml.png",
    "description": "مشروب قهوة مثلجة جاهز للشرب بنكهة السبانش لاتيه الغنية بالحليب المحلى من نسكافيه.",
    "flavor": "سبانش لاتيه",
    "sizes": [
      {
        "name": "كان (45 ج.م)",
        "weight": "250 مل",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_latte_can_250ml",
    "name": "مشروب قهوة مثلجة نسكافيه لاتيه كان 250 مل",
    "nameEn": "Nescafe Latte Iced Coffee Can 250ml",
    "category": "drinks",
    "price": 45,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/nescafe_latte_can_250ml.png",
    "description": "مشروب قهوة مثلجة لاتيه كلاسيكي متوازن النكهة ومنعش من نسكافيه في عبوة كان جاهزة للشرب.",
    "flavor": "لاتيه بالحليب",
    "sizes": [
      {
        "name": "كان (45 ج.م)",
        "weight": "250 مل",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "nescafe_latte_can_250ml_alt",
    "name": "مشروب قهوة مثلجة نسكافيه لاتيه كان 250 مل",
    "nameEn": "Nescafe Latte Iced Coffee Can 250ml",
    "category": "drinks",
    "price": 45,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نسكافيه (Nescafe)",
    "weight": "250 مل",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/nescafe_latte_can_250ml_alt.png",
    "description": "مشروب قهوة مثلجة لاتيه كلاسيكي متوازن النكهة ومنعش من نسكافيه في عبوة كان جاهزة للشرب.",
    "flavor": "لاتيه بالحليب",
    "sizes": [
      {
        "name": "كان (45 ج.م)",
        "weight": "250 مل",
        "price": 45,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_combo_vanilla_caramel_cone",
    "name": "أيس كريم فرايداي كومبو فانيليا وكراميل كون",
    "nameEn": "Friday Combo Vanilla and Caramel Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/friday_combo_vanilla_caramel_cone.png",
    "description": "كون أيس كريم فرايداي كومبو اللذيذ بطبقات الفانيليا والكراميل الغنية مع طبقة مقرمشة من المكسرات والشوكولاتة.",
    "flavor": "فانيليا وكراميل",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_vanilla_chocolate_cone",
    "name": "أيس كريم فرايداي فولكانو فانيليا وشوكولاتة كون",
    "nameEn": "Friday Volcano Vanilla and Chocolate Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/friday_volcano_vanilla_chocolate_cone.png",
    "description": "أيس كريم فرايداي فولكانو في بسكويت كون مقرمش بنكهة الفانيليا وصوص الشوكولاتة الغني.",
    "flavor": "فانيليا وشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_very_good_ice_cream_cone",
    "name": "أيس كريم فرايداي فيري جود كون للأطفال",
    "nameEn": "Friday Very Good Kids Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/friday_very_good_ice_cream_cone.png",
    "description": "كون أيس كريم فيري جود مبهج للأطفال من فرايداي بنكهات الفواكه والفانيليا اللذيذة.",
    "flavor": "فانيليا وفراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_royal_vanilla_cone",
    "name": "أيس كريم فرايداي رويال فانيليا كون",
    "nameEn": "Friday Royal Vanilla Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/friday_royal_vanilla_cone.png",
    "description": "كون أيس كريم رويال الفاخر بنكهة الفانيليا الكريمية مع طبقة الشوكولاتة والمكسرات من فرايداي.",
    "flavor": "فانيليا مع صوص ومكسرات",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "gerley_conata_ice_cream_cone",
    "name": "أيس كريم جيرلي كوناتا فانيليا وكراميل كون",
    "nameEn": "Gerley Conata Vanilla and Caramel Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جيرلي (Gerley)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/gerley_conata_ice_cream_cone.png",
    "description": "أيس كريم كوناتا المقرمش من جيرلي بنكهة الفانيليا الغنية وصوص الكراميل اللذيذ مع المكسرات.",
    "flavor": "فانيليا وصوص كراميل",
    "sizes": [
      {
        "name": "قطعة (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_royal_chocolate_cone",
    "name": "أيس كريم فرايداي رويال شوكولاتة كون",
    "nameEn": "Friday Royal Chocolate Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/friday_royal_chocolate_cone.png",
    "description": "كون أيس كريم فرايداي رويال الغني بشوكولاتة كريمية ومغطى بقطع المكسرات وصوص الشوكولاتة الفاخر.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_dark_chocolate_stick",
    "name": "أيس كريم فرايداي فولكانو دارك شوكليت ستيك",
    "nameEn": "Friday Volcano Dark Chocolate Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "90 مل",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/friday_volcano_dark_chocolate_stick.png",
    "description": "أيس كريم ستيك فرايداي فولكانو مغطى بطبقة سميكة من الشوكولاتة الداكنة الفاخرة مع حشوة شوكولاتة غنية.",
    "flavor": "شوكولاتة داكنة (دارك شوكليت)",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "90 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_combo_vanilla_cookies_cone",
    "name": "أيس كريم فرايداي كومبو فانيليا وكوكيز كون",
    "nameEn": "Friday Combo Vanilla and Cookies Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "110 مل",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/friday_combo_vanilla_cookies_cone.png",
    "description": "كون أيس كريم كومبو من فرايداي بنكهة الفانيليا وقطع بسكويت الكوكيز المقرمشة.",
    "flavor": "فانيليا وكوكيز أوريو",
    "sizes": [
      {
        "name": "قطعة (10 ج.م)",
        "weight": "110 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_mango_zebdia_ice_cream_stick",
    "name": "أيس كريم فرايداي مانجو زبدية طبيعي ستيك",
    "nameEn": "Friday Natural Zebdia Mango Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "85 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/friday_mango_zebdia_ice_cream_stick.png",
    "description": "ستيك أيس كريم فرايداي بنكهة المانجو الزبدية الطبيعية المنعشة والمحبوبة.",
    "flavor": "مانجو زبدية طبيعية",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "85 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_combo_extra_kunafa_pistachio_cone",
    "name": "أيس كريم فرايداي كومبو إكسترا كنافة وبستاشيو كون",
    "nameEn": "Friday Combo Extra Kunafa Pistachio Ice Cream Cone",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "125 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/friday_combo_extra_kunafa_pistachio_cone.png",
    "description": "إصدار كومبو إكسترا المميز من فرايداي بحشوة الكنافة المقرمشة وزبدة الفستق (البستاشيو) الفاخرة.",
    "flavor": "كنافة وبستاشيو",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "125 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_molotov_chocolate_cone",
    "name": "أيس كريم فرايداي مولوتوف غرقان شوكولاتة كون",
    "nameEn": "Friday Molotov Double Chocolate Ice Cream Cone",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "140 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/friday_molotov_chocolate_cone.png",
    "description": "كون أيس كريم فرايداي مولوتوف الغني بصوص الشوكولاتة الذائبة وأصابع البسكويت المقرمشة لعشاق الشوكولاتة.",
    "flavor": "شوكولاتة دبل مع أصابع بسكويت",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "140 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_vanilla_stick",
    "name": "أيس كريم فرايداي فولكانو فانيليا ومكسرات ستيك",
    "nameEn": "Friday Volcano Vanilla Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "90 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/friday_volcano_vanilla_stick.png",
    "description": "أيس كريم فرايداي فولكانو فانيليا كريمية مغطاة بطبقة مقرمشة من شوكولاتة الحليب والمكسرات اللذيذة.",
    "flavor": "فانيليا مغطاة بشوكولاتة ومكسرات",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "90 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_double_chocolate_stick",
    "name": "أيس كريم فرايداي دبل شوكولاتة كريسبي ستيك",
    "nameEn": "Friday Double Chocolate Crispy Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "90 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/friday_double_chocolate_stick.png",
    "description": "أيس كريم ستيك فرايداي دبل شوكولاتة غني بطبقة شوكولاتة سميكة وحبيبات مقرمشة.",
    "flavor": "دبل شوكولاتة مع كريسبي",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "90 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_kimo_cono_super_chocolate_cone",
    "name": "أيس كريم كيمو كونو نستله سوبر شوكولاتة كون",
    "nameEn": "Nestle Kimo Cono Super Chocolate Ice Cream Cone",
    "category": "sweets",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيمو كونو (Kimo Cono / Nestle)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/nestle_kimo_cono_super_chocolate_cone.png",
    "description": "كون كيمو كونو الكلاسيكي من نستله المحشو بأيس كريم شوكولاتة كريمية ومغطى بقطع وصوص الشوكولاتة المقرمشة.",
    "flavor": "سوبر شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "120 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_snykers_chocolate_cookies_stick",
    "name": "أيس كريم فرايداي سنيكرز شوكليت كوكيز ستيك",
    "nameEn": "Friday Snykers Chocolate Cookies Ice Cream Stick",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "90 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/friday_snykers_chocolate_cookies_stick.png",
    "description": "أيس كريم فرايداي سنيكرز المغطى بالشوكولاتة البيضاء الغنية وحبيبات بسكويت الكوكيز المقرمشة.",
    "flavor": "شوكولاتة بيضاء مع قطع كوكيز",
    "sizes": [
      {
        "name": "ستيك (15 ج.م)",
        "weight": "90 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_freitag_pistachio_stick",
    "name": "أيس كريم فرايداي فرايتاج بستاشيو فستق ستيك",
    "nameEn": "Friday Freitag Pistachio Ice Cream Stick",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "90 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/friday_freitag_pistachio_stick.png",
    "description": "ستيك أيس كريم فرايتاج الفاخر من فرايداي المغطى بطبقة غنية ومقرمشة من صوص الفستق وقطع البستاشيو الطبيعية.",
    "flavor": "بستاشيو (فستق حلبي)",
    "sizes": [
      {
        "name": "عبوة قياسية (15 ج.م)",
        "weight": "90 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_dolce_sandwich_cookie_chocolate",
    "name": "أيس كريم ساندوتش دولسي كوكيز شوكولاتة",
    "nameEn": "Dolce Chocolate Cookie Ice Cream Sandwich",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "دولسي (Dolce)",
    "weight": "100 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/nestle_dolce_sandwich_cookie_chocolate.png",
    "description": "ساندوتش أيس كريم دولسي بطبقتين من بسكويت الكوكيز الطري مع الشوكولاتة وحشوة أيس كريم شوكولاتة غنية.",
    "flavor": "شوكولاتة وكوكيز شوكولاتة",
    "sizes": [
      {
        "name": "قطعة (15 ج.م)",
        "weight": "100 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_carnavalita_cup_vanilla_chocolate",
    "name": "أيس كريم كرنفاليتا نستله كب فانيليا وشوكولاتة",
    "nameEn": "Nestle Carnavalita Vanilla and Chocolate Ice Cream Cup",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كرنفاليتا (Carnavalita / Nestle)",
    "weight": "140 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/nestle_carnavalita_cup_vanilla_chocolate.png",
    "description": "كوب أيس كريم كرنفاليتا الكلاسيكي من نستله بمزيج متناغم من الفانيليا الناعمة وصوص الشوكولاتة اللذيذ.",
    "flavor": "فانيليا وشوكولاتة",
    "sizes": [
      {
        "name": "كوب (15 ج.م)",
        "weight": "140 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_squizz_mango_stick",
    "name": "أيس كريم سكويز نستله مانجو ستيك",
    "nameEn": "Nestle Squizz Mango Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "سكويز (Squizz / Nestle)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/nestle_squizz_mango_stick.png",
    "description": "ستيك أيس كريم سكويز المنعش من نستله بنكهة المانجو الطبيعية واللذيذة للأطفال والكبار.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "ستيك (10 ج.م)",
        "weight": "70 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "gersey_4u_vanilla_biscuit_cone",
    "name": "أيس كريم كونو جيرسي فور يو فانيليا وبسكويت",
    "nameEn": "Gersey 4U Vanilla & Biscuit Cone Ice Cream",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جيرسي (Gersey)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/gersey_4u_vanilla_biscuit_cone.png",
    "description": "أيس كريم كونو مقرمش من جيرسي بنكهة الفانيليا الغنية وقطع البسكويت اللذيذة.",
    "flavor": "فانيليا وبسكويت",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "120 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_carnavalita_vanilla_chocolate_tub",
    "name": "أيس كريم نستله كرنفاليتا فانيليا وشوكولاتة",
    "nameEn": "Nestle Carnavalita Vanilla & Chocolate Ice Cream Tub",
    "category": "sweets",
    "price": 40,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله كرنفاليتا (Nestle Carnavalita)",
    "weight": "500 مل",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/nestle_carnavalita_vanilla_chocolate_tub.png",
    "description": "علبة أيس كريم ميكس غنية بنكهتي الفانيليا الناعمة والشوكولاتة اللذيذة من نستله كرنفاليتا.",
    "flavor": "فانيليا وشوكولاتة",
    "sizes": [
      {
        "name": "علبة (40 ج.م)",
        "weight": "500 مل",
        "price": 40,
        "selected": true
      }
    ]
  },
  {
    "id": "gersey_fass_mango_stick",
    "name": "أيس كريم استيك جيرسي فص مانجو طبيعي",
    "nameEn": "Gersey Fass Natural Mango Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جيرسي (Gersey)",
    "weight": "65 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/gersey_fass_mango_stick.png",
    "description": "استيك أيس كريم منعش بنكهة المانجو الطبيعية اللذيذة من جيرسي.",
    "flavor": "مانجو طبيعي",
    "sizes": [
      {
        "name": "قطعة واحدة (10 ج.م)",
        "weight": "65 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "gersey_cocoa_chocolate_cone",
    "name": "أيس كريم كونو جيرسي شوكولاتة وكاكاو",
    "nameEn": "Gersey Cocoa with Chocolate Cone Ice Cream",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "جيرسي (Gersey)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/gersey_cocoa_chocolate_cone.png",
    "description": "كونو أيس كريم كاكاو مغطى بصوص الشوكولاتة الغنية في بسكويت مقرمش من جيرسي.",
    "flavor": "شوكولاتة وكاكاو",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "120 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_watermelon_stick",
    "name": "أيس كريم استيك فرايداي بطيخ",
    "nameEn": "Friday Watermelon Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "65 مل",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/friday_watermelon_stick.png",
    "description": "استيك أيس كريم فرايداي على شكل ونكهة البطيخ المنعشة مع حبيبات الشوكولاتة اللذيذة.",
    "flavor": "بطيخ",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "65 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_cookies_wich_sandwich",
    "name": "ساندوتش أيس كريم فرايداي كوكيز ويتش",
    "nameEn": "Friday Cookies Wich Ice Cream Sandwich",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "80 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/friday_cookies_wich_sandwich.png",
    "description": "ساندوتش أيس كريم مميز من فرايداي بطبقتين من بسكويت الكوكيز المقرمش وحشوة الأيس كريم اللذيذة.",
    "flavor": "كوكيز وفانيليا",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "80 جم",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_vanilla_stick_531",
    "name": "أيس كريم استيك فرايداي فولكانو فانيليا وشوكولاتة",
    "nameEn": "Friday Volcano Vanilla & Chocolate Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/friday_volcano_vanilla_stick_531.png",
    "description": "أيس كريم استيك فرايداي فولكانو بالفانيليا مغطى بطبقة شوكولاتة مقرمشة مع قطع المكسرات.",
    "flavor": "فانيليا وشوكولاتة بالمكسرات",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_snykers_chocolate_cookies_stick_532",
    "name": "أيس كريم استيك فرايداي اسنيكرز كوكيز شوكولاتة",
    "nameEn": "Friday Snykers Chocolate Cookies Ice Cream Stick",
    "category": "sweets",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "75 مل",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/friday_snykers_chocolate_cookies_stick_532.png",
    "description": "أيس كريم فرايداي اسنيكرز بنكهة الكوكيز الغنية ومغطى بالشوكولاتة البيضاء اللذيذة.",
    "flavor": "شوكولاتة وكوكيز",
    "sizes": [
      {
        "name": "قطعة واحدة (20 ج.م)",
        "weight": "75 مل",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_fresh_milk_strawberry_stick",
    "name": "أيس كريم استيك فرايداي فريش ميلك فراولة",
    "nameEn": "Friday Fresh Milk Strawberry Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "60 مل",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/friday_fresh_milk_strawberry_stick.png",
    "description": "استيك أيس كريم منعش بالحليب الطبيعي ونكهة الفراولة الطبيعية اللذيذة من فرايداي.",
    "flavor": "حليب وفراولة",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "60 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_bob_cantaloupe_stick",
    "name": "أيس كريم استيك فرايداي بوب كانتالوب",
    "nameEn": "Friday Bob Cantaloupe Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "50 مل",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/friday_bob_cantaloupe_stick.png",
    "description": "أيس كريم استيك دوار ومنعش بنكهة الكانتالوب اللذيذة للأطفال من فرايداي.",
    "flavor": "كانتالوب",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "50 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_mocha_coffee_stick",
    "name": "أيس كريم استيك فرايداي فولكانو قهوة موكا",
    "nameEn": "Friday Volcano Mocha Coffee Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/friday_volcano_mocha_coffee_stick.png",
    "description": "أيس كريم استيك غني بنكهة قهوة الموكا ومغطى بالشوكولاتة البيضاء والقهوة من فرايداي.",
    "flavor": "قهوة موكا",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_double_chocolate_stick_536",
    "name": "أيس كريم استيك فرايداي دبل شوكولاتة",
    "nameEn": "Friday Double Chocolate Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "75 مل",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/friday_double_chocolate_stick_536.png",
    "description": "أيس كريم فانيليا غني مغطى بطبقتين من الشوكولاتة اللذيذة المقرمشة من فرايداي.",
    "flavor": "دبل شوكولاتة وفانيليا",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "75 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_volcano_chocolate_stick",
    "name": "أيس كريم استيك فرايداي فولكانو شوكولاتة",
    "nameEn": "Friday Volcano Chocolate Ice Cream Stick",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/friday_volcano_chocolate_stick.png",
    "description": "أيس كريم استيك شوكولاتة غنية مغطى بطبقة شوكولاتة مقرمشة من فرايداي.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "70 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_banana_stick",
    "name": "أيس كريم استيك فرايداي موزة",
    "nameEn": "Friday Banana Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "45 مل",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/friday_banana_stick.png",
    "description": "أيس كريم استيك بنكهة الموز اللذيذة والحليب المنعش من فرايداي.",
    "flavor": "موز وحليب",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "45 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_combo_extra_kunafa_pistachio_cone_539",
    "name": "أيس كريم كونو فرايداي كومبو إكسترا كنافة بستاشيو",
    "nameEn": "Friday Combo Extra Kunafa Pistachio Cone Ice Cream",
    "category": "sweets",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/friday_combo_extra_kunafa_pistachio_cone_539.png",
    "description": "كونو أيس كريم فاخر من فرايداي بنكهة الفستق ومغطى بطبقة من الكنافة المقرمشة وصوص الفستق.",
    "flavor": "كنافة وبستاشيو",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "120 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_mango_natural_stick",
    "name": "أيس كريم استيك فرايداي مانجو طبيعي",
    "nameEn": "Friday Natural Mango Ice Cream Stick",
    "category": "sweets",
    "price": 8,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "60 مل",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/friday_mango_natural_stick.png",
    "description": "استيك أيس كريم منعش بنكهة المانجو الطبيعية الغنية من فرايداي.",
    "flavor": "مانجو",
    "sizes": [
      {
        "name": "عبوة قياسية (8 ج.م)",
        "weight": "60 مل",
        "price": 8,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_5g_chocolate_cookies_cup",
    "name": "كوب أيس كريم فرايداي 5G شوكولاتة وكوكيز",
    "nameEn": "Friday 5G Chocolate & Cookies Ice Cream Cup",
    "category": "sweets",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "140 مل",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/friday_5g_chocolate_cookies_cup.png",
    "description": "كوب أيس كريم فاخر من فرايداي 5G بنكهة الشوكولاتة الغنية وقطع الكوكيز المقرمشة وصوص الشوكولاتة.",
    "flavor": "شوكولاتة وكوكيز",
    "sizes": [
      {
        "name": "كوب واحد (20 ج.م)",
        "weight": "140 مل",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_caramel_biscuit_cup",
    "name": "كوب أيس كريم فرايداي كراميل وبسكويت",
    "nameEn": "Friday Caramel Biscuit Ice Cream Cup",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/friday_caramel_biscuit_cup.png",
    "description": "كوب أيس كريم كريمي بنكهة الكراميل الغنية وقطع البسكويت المقرمشة من فرايداي.",
    "flavor": "كراميل وبسكويت",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_5g_chocolate_cookies_cup_alt",
    "name": "كوب أيس كريم فرايداي فايف جي شوكولاتة وكوكيز",
    "nameEn": "Friday 5G Chocolate & Cookies Ice Cream Cup",
    "category": "sweets",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "140 مل",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/friday_5g_chocolate_cookies_cup_alt.png",
    "description": "كوب أيس كريم فاخر بنكهة الشوكولاتة وصوص الشوكولاتة مع قطع الكوكيز من فرايداي 5G.",
    "flavor": "شوكولاتة وكوكيز",
    "sizes": [
      {
        "name": "كوب واحد (20 ج.م)",
        "weight": "140 مل",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_5g_vanilla_caramel_cookies_cup",
    "name": "كوب أيس كريم فرايداي 5G فانيليا وكراميل وكوكيز",
    "nameEn": "Friday 5G Vanilla, Caramel & Cookies Ice Cream Cup",
    "category": "sweets",
    "price": 20,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "140 مل",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/friday_5g_vanilla_caramel_cookies_cup.png",
    "description": "كوب أيس كريم فانيليا ناعمة مع صوص الكراميل الغني وقطع الكوكيز المقرمشة من فرايداي 5G.",
    "flavor": "فانيليا وكراميل وكوكيز",
    "sizes": [
      {
        "name": "كوب واحد (20 ج.م)",
        "weight": "140 مل",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_mega_vanilla_almond_stick",
    "name": "أيس كريم استيك ميجا نستله فانيليا ولوز",
    "nameEn": "Nestle Mega Vanilla & Almond Ice Cream Stick",
    "category": "sweets",
    "price": 25,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله ميجا (Nestle Mega)",
    "weight": "85 مل",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/nestle_mega_vanilla_almond_stick.png",
    "description": "أيس كريم استيك ميجا الغني بالفانيليا الطبيعية المغطى بشوكولاتة الحليب الفاخرة وقطع اللوز المحمص المقرمش.",
    "flavor": "فانيليا ولوز وشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (25 ج.م)",
        "weight": "85 مل",
        "price": 25,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_mega_chocolate_almond_stick",
    "name": "أيس كريم استيك ميجا نستله شوكولاتة ولوز",
    "nameEn": "Nestle Mega Chocolate & Almond Ice Cream Stick",
    "category": "sweets",
    "price": 25,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله ميجا (Nestle Mega)",
    "weight": "85 مل",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/nestle_mega_chocolate_almond_stick.png",
    "description": "أيس كريم استيك ميجا الغني بالشوكولاتة الكثيفة ومغطى بطبقة شوكولاتة الحليب وقطع اللوز المقرمشة.",
    "flavor": "شوكولاتة ولوز",
    "sizes": [
      {
        "name": "عبوة قياسية (25 ج.م)",
        "weight": "85 مل",
        "price": 25,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_squizz_lemon_mint_stick",
    "name": "أيس كريم استيك نستله سكويز ليمون ونعناع",
    "nameEn": "Nestle Squizz Lemon Mint Ice Cream Stick",
    "category": "sweets",
    "price": 15,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله سكويز (Nestle Squizz)",
    "weight": "70 مل",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/nestle_squizz_lemon_mint_stick.png",
    "description": "استيك أيس كريم منعش بنكهة عصير الليمون الطبيعي والنعناع المنعش من نستله سكويز.",
    "flavor": "ليمون ونعناع",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "70 مل",
        "price": 15,
        "selected": true
      }
    ]
  },
  {
    "id": "nestle_kimo_kono_vanilla",
    "name": "أيس كريم كونو نستله كيمو فانيليا وشوكولاتة",
    "nameEn": "Nestle Kimo Kono Vanilla Ice Cream Cone",
    "category": "sweets",
    "price": 12,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "نستله كيمو (Nestle Kimo)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/nestle_kimo_kono_vanilla.png",
    "description": "كونو أيس كريم فانيليا غنية وصوص الشوكولاتة في بسكويت مقرمش مع حبيبات البندق من كيمو نستله.",
    "flavor": "فانيليا وشوكولاتة وبندق",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "120 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "oreo_ice_cream_sandwich",
    "name": "ساندوتش أيس كريم أوريو",
    "nameEn": "Oreo Ice Cream Sandwich",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أوريو (Oreo)",
    "weight": "135 مل",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/oreo_ice_cream_sandwich.png",
    "description": "ساندوتش أيس كريم فاخر بحشوة الفانيليا مع فتات بسكويت أوريو بين قطعتين عملاقتين من بسكويت أوريو المقرمش.",
    "flavor": "بسكويت أوريو وفانيليا",
    "sizes": [
      {
        "name": "باكو 6 قطع (10 ج.م)",
        "weight": "6 قطع",
        "price": 10,
        "selected": true
      },
      {
        "name": "علبة 12 باكو توفير (110 ج.م)",
        "weight": "12 باكو",
        "price": 110
      }
    ]
  },
  {
    "id": "kimo_cono_chocolate_hazelnut_ice_cream",
    "name": "أيس كريم كيمو كونو شوكولاتة وبندق نستله",
    "nameEn": "Nestle Kimo Cono Chocolate & Hazelnut Ice Cream Cone",
    "category": "frozen",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيمو كونو (Kimo Cono)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/kimo_cono_chocolate_hazelnut_ice_cream.png",
    "description": "مخروط أيس كريم كيمو كونو الشهير من نستله بنكهة الشوكولاتة الغنية وقطع البندق المقرمشة مع طبقة شوكولاتة لذيذة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "120 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "kitkat_ice_cream_cone",
    "name": "أيس كريم كيت كات كونو شوكولاتة وفانيليا وويفر",
    "nameEn": "KitKat Vanilla & Chocolate Ice Cream Cone with Wafer",
    "category": "frozen",
    "price": 20,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيت كات (KitKat)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/kitkat_ice_cream_cone.png",
    "description": "أيس كريم كيت كات الفاخر في مخروط كونو مقرمش بمزيج الشوكولاتة والفانيليا وقطع أصابع ويفر كيت كات.",
    "flavor": "شوكولاتة وفانيليا وويفر كيت كات",
    "sizes": [
      {
        "name": "كونو قياسي (20 ج.م)",
        "weight": "120 مل",
        "price": 20,
        "selected": true
      }
    ]
  },
  {
    "id": "kimo_cono_chocolate_vanilla_ice_cream",
    "name": "أيس كريم كيمو كونو شوكولاتة وفانيليا نستله",
    "nameEn": "Nestle Kimo Cono Chocolate & Vanilla Ice Cream Cone",
    "category": "frozen",
    "price": 12,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "كيمو كونو (Kimo Cono)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 132,
    "image": "images/kimo_cono_chocolate_vanilla_ice_cream.png",
    "description": "مخروط أيس كريم كيمو كونو الكلاسيكي بمزيج الفانيليا الناعمة والشوكولاتة في بسكويت مقرمش.",
    "flavor": "شوكولاتة وفانيليا",
    "sizes": [
      {
        "name": "عبوة قياسية (12 ج.م)",
        "weight": "120 مل",
        "price": 12,
        "selected": true
      }
    ]
  },
  {
    "id": "friday_combo_vanilla_cookies_ice_cream",
    "name": "أيس كريم فريداي كومبو فانيليا وكوكيز",
    "nameEn": "Friday Combo Vanilla & Cookies Ice Cream Cone",
    "category": "frozen",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريداي (Friday)",
    "weight": "120 مل",
    "rating": 4.9,
    "reviewsCount": 133,
    "image": "images/friday_combo_vanilla_cookies_ice_cream.png",
    "description": "كونو أيس كريم فريداي كومبو الشهير بطعم الفانيليا وقطع الكوكيز المقرمشة بسعر اقتصادي مميز.",
    "flavor": "فانيليا وكوكيز",
    "sizes": [
      {
        "name": "كونو 10 جنيه",
        "weight": "120 مل",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "bisco_misr_datto_date_filled_biscuits",
    "name": "بسكويت داتو محشو بالعجوة بسكو مصر قطعتين",
    "nameEn": "Bisco Misr Datto Date Filled Biscuits 2 Pieces",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسكو مصر (Bisco Misr)",
    "weight": "قطعتين",
    "rating": 4.9,
    "reviewsCount": 134,
    "image": "images/bisco_misr_datto_date_filled_biscuits.png",
    "description": "بسكويت داتو الفاخر والمغذي من بسكو مصر محشو بأجود أنواع معجون التمر الطبيعي، وجبة خفيفة ومغذية.",
    "flavor": "عجوة / تمر طبيعي",
    "sizes": [
      {
        "name": "باكو 2 قطعة (5 ج.م)",
        "weight": "قطعتين",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "bisco_misr_nice_coconut_biscuits",
    "name": "بسكويت بسكو نايس بجوز الهند بسكو مصر",
    "nameEn": "Bisco Misr Nice Coconut Biscuits",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسكو مصر (Bisco Misr)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 135,
    "image": "images/bisco_misr_nice_coconut_biscuits.png",
    "description": "بسكويت بسكو نايس الهش بنكهة جوز الهند المميزة والمزين بحبيبات السكر اللذيذة من بسكو مصر.",
    "flavor": "جوز الهند وحبيبات السكر",
    "sizes": [
      {
        "name": "باكو فردي (5 ج.م)",
        "weight": "45 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "bisco_misr_luxe_plain_biscuits_12pcs",
    "name": "بسكويت لوكس سادة بسكو مصر حجم أكبر 12 قطعة",
    "nameEn": "Bisco Misr Luxe Original Plain Biscuits 12 Pieces",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسكو مصر (Bisco Misr)",
    "weight": "12 قطعة",
    "rating": 4.9,
    "reviewsCount": 136,
    "image": "images/bisco_misr_luxe_plain_biscuits_12pcs.png",
    "description": "بسكويت لوكس السادة الكلاسيكي المقرمش من بسكو مصر، الرفيق المثالي لكوب الشاي بالحليب.",
    "flavor": "سادة",
    "sizes": [
      {
        "name": "باكو 12 قطعة (5 ج.م)",
        "weight": "12 قطعة",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "fairy_plain_tea_biscuits",
    "name": "بسكويت فيري سادة للشاي والقهوة",
    "nameEn": "Fairy Plain Tea & Coffee Biscuits",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فيري (Fairy)",
    "weight": "60 جم",
    "rating": 4.9,
    "reviewsCount": 137,
    "image": "images/fairy_plain_tea_biscuits.png",
    "description": "بسكويت شاي خفيف وهش مناسب لغموس الشاي والقهوة أو لتحضير أشهى الحلويات المنزلية.",
    "flavor": "سادة",
    "sizes": [
      {
        "name": "باكو قياسي (5 ج.م)",
        "weight": "60 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "oreo_original_cookies_6pcs",
    "name": "بسكويت أوريو الأصلي محشو بكريمة الفانيليا 6 قطع",
    "nameEn": "Oreo Original Vanilla Creme Sandwich Cookies 6 Pieces",
    "category": "sweets",
    "price": 10,
    "isEgyptian": false,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "أوريو (Oreo)",
    "weight": "6 قطع",
    "rating": 4.9,
    "reviewsCount": 138,
    "image": "images/oreo_original_cookies_6pcs.png",
    "description": "بسكويت الكاكاو الأسطوري أوريو المحشو بكريمة الفانيليا الغنية، لف وتذوق واغمس في الحليب.",
    "flavor": "شوكولاتة وكريمة فانيليا",
    "sizes": [
      {
        "name": "باكو 6 قطع (10 ج.م)",
        "weight": "6 قطع",
        "price": 10,
        "selected": true
      },
      {
        "name": "علبة 12 باكو توفير (110 ج.م)",
        "weight": "12 باكو",
        "price": 110
      }
    ]
  },
  {
    "id": "el_shamadan_mega_chocolate_wafer",
    "name": "ويفر الشمعدان ميجا محشو ومغطى بالشوكولاتة",
    "nameEn": "El Shamadan Mega Chocolate Coated Wafer",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 139,
    "image": "images/el_shamadan_mega_chocolate_wafer.png",
    "description": "ويفر الشمعدان ميجا كبير الحجم بطبقات مقرمشة محشوة ومغطاة بطبقة غنية من شوكولاتة الحليب.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "40 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_katakito_wafer",
    "name": "شوكولاتة ويفر كتاكيتو الشمعدان الأصلية",
    "nameEn": "El Shamadan Katakito Original Chocolate Wafer Bar",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "28 جم",
    "rating": 4.9,
    "reviewsCount": 140,
    "image": "images/el_shamadan_katakito_wafer.png",
    "description": "شوكولاتة كتاكيتو التاريخية من الشمعدان، ويفر مقرمش مغطى بطبقة سميكة ولذيذة من الشوكولاتة.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "28 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_crispy_chocolate_wafer",
    "name": "ويفر الشمعدان كريسبي محشو ومغطى بالشوكولاتة",
    "nameEn": "El Shamadan Crispy Chocolate Coated Wafer",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 141,
    "image": "images/el_shamadan_crispy_chocolate_wafer.png",
    "description": "رقائق ويفر الشمعدان كريسبي الهشة محشوة بكريمة الشوكولاتة ومغطاة بأجود أنواع الشوكولاتة.",
    "flavor": "شوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "30 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_mega_white_chocolate_wafer",
    "name": "ويفر الشمعدان ميجا محشو ومغطى بالشوكولاتة البيضاء نباتي",
    "nameEn": "El Shamadan Mega Vegan White Chocolate Wafer",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 142,
    "image": "images/el_shamadan_mega_white_chocolate_wafer.png",
    "description": "ويفر نباتي فاخر من الشمعدان ميجا محشو ومغطى بكريمة الشوكولاتة البيضاء الغنية بطعم مميز وقرمشة رائعة.",
    "flavor": "شوكولاتة بيضاء",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "40 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_mega_vegan_chocolate_wafer",
    "name": "ويفر الشمعدان ميجا نباتي محشو ومغطى بالشوكولاتة",
    "nameEn": "El Shamadan Mega Vegan Chocolate Covered Wafer",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 143,
    "image": "images/el_shamadan_mega_vegan_chocolate_wafer.png",
    "description": "ويفر مقرمش كبير الحجم من الشمعدان مناسب للنباتيين ومغطى بطبقة لذيذة من الشوكولاتة.",
    "flavor": "شوكولاتة نباتي",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "40 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_hd_chocolate_wafer",
    "name": "ويفر إتش دي الشمعدان كاكاو محشو بكريمة الشوكولاتة",
    "nameEn": "El Shamadan HD Cocoa Wafer with Chocolate Cream",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 144,
    "image": "images/el_shamadan_hd_chocolate_wafer.png",
    "description": "بسكويت ويفر كاكاو عالي الجودة من الشمعدان HD محشو بكريمة الشوكولاتة الناعمة لعشاق الكاكاو المركز.",
    "flavor": "كاكاو وشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "30 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "el_shamadan_nawaem_sweet_biscuits",
    "name": "بسكويت نواعم سادة ناعم حلو الشمعدان",
    "nameEn": "El Shamadan Nawaem Sweet Soft Plain Biscuits",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "الشمعدان (El Shamadan)",
    "weight": "50 جم",
    "rating": 4.9,
    "reviewsCount": 145,
    "image": "images/el_shamadan_nawaem_sweet_biscuits.png",
    "description": "بسكويت نواعم الأصلي الدائري من الشمعدان بقوامه الناعم الدائب وطعمه الحلو المتوازن.",
    "flavor": "سادة حلو / زبدة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "50 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "lambada_double_extra_chocolate_wafer",
    "name": "ويفر لمبادا دبل إكسترا محشو بكريمة الشوكولاتة",
    "nameEn": "Lambada Double Extra Chocolate Cream Wafers",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "لمبادا (Lambada)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 146,
    "image": "images/lambada_double_extra_chocolate_wafer.png",
    "description": "ويفر لمبادا دبل إكسترا الشهير بطبقات الويفر المقرمشة وحشوة كريمة الشوكولاتة المضاعفة.",
    "flavor": "شوكولاتة دبل إكسترا",
    "sizes": [
      {
        "name": "باكو فردي (5 ج.م)",
        "weight": "30 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "bisco_misr_vanilla_wafers",
    "name": "بسكويت ويفر بسكو مصر محشو بكريمة الفانيليا",
    "nameEn": "Bisco Misr Vanilla Cream Wafers",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "بسكو مصر (Bisco Misr)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 147,
    "image": "images/bisco_misr_vanilla_wafers.png",
    "description": "ويفر بسكو مصر الكلاسيكي الخفيف والمقرمش بحشوة كريمة الفانيليا الغنية بالنكهة.",
    "flavor": "فانيليا",
    "sizes": [
      {
        "name": "باكو فردي (5 ج.م)",
        "weight": "35 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "rave_cocoa_chocolate_wafer",
    "name": "بسكويت ويفر ريف كاكاو محشو بكريمة الشوكولاتة",
    "nameEn": "Rave Cocoa Wafer Filled with Chocolate Cream",
    "category": "sweets",
    "price": 5,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "ريف (Rave)",
    "weight": "35 جم",
    "rating": 4.9,
    "reviewsCount": 148,
    "image": "images/rave_cocoa_chocolate_wafer.png",
    "description": "ويفر ريف المقرمش بطعم الكاكاو وحشوة الشوكولاتة اللذيذة لوجبة خفيفة سريعة وممتعة.",
    "flavor": "كاكاو وشوكولاتة",
    "sizes": [
      {
        "name": "باكو فردي (5 ج.م)",
        "weight": "35 جم",
        "price": 5,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_block_cappuccino_cream_wafer",
    "name": "ويفر فريسكا بلوك بكريمة الكابتشينو إيديتا",
    "nameEn": "Freska Block Cappuccino Cream Wafer Finger",
    "category": "sweets",
    "price": 75,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "30 جم",
    "rating": 4.9,
    "reviewsCount": 149,
    "image": "images/freska_block_cappuccino_cream_wafer.png",
    "description": "أصابع ويفر فريسكا بلوك المقرمشة جداً والمحشوة بكريمة الكابتشينو الغنية بنكهة القهوة الفاخرة.",
    "flavor": "كابتشينو",
    "sizes": [
      {
        "name": "عبوة قياسية (75 ج.م)",
        "weight": "30 جم",
        "price": 75,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_fingers_cocoa_hazelnut_8pcs",
    "name": "ويفر فريسكا فينجرز بكريمة الكاكاو والبندق إيديتا 8 قطع",
    "nameEn": "Freska Fingers Cocoa & Hazelnut Cream Wafer 8 Pieces",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "8 قطع",
    "rating": 4.9,
    "reviewsCount": 120,
    "image": "images/freska_fingers_cocoa_hazelnut_8pcs.png",
    "description": "أصابع ويفر فريسكا فينجرز المقرمشة بحجم أكبر 8 قطع محشوة بكريمة الكاكاو والبندق الفاخرة.",
    "flavor": "كاكاو وبندق",
    "sizes": [
      {
        "name": "باكو 8 قطع (10 ج.م)",
        "weight": "8 قطع",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_fingers_cocoa_hazelnut_cream",
    "name": "ويفر فريسكا فينجرز كاكاو محشو بكريمة الكاكاو والبندق",
    "nameEn": "Freska Fingers Cocoa Wafer with Cocoa and Hazelnut Cream",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "40 جم",
    "rating": 4.9,
    "reviewsCount": 121,
    "image": "images/freska_fingers_cocoa_hazelnut_cream.png",
    "description": "ويفر كاكاو فريسكا فينجرز المقرمش من إيديتا محشو بكريمة الكاكاو الغنية والبندق المحمص.",
    "flavor": "كاكاو وبندق",
    "sizes": [
      {
        "name": "باكو قياسي (10 ج.م)",
        "weight": "40 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_choco_sticks_hazelnut_2pcs",
    "name": "أصابع ويفر فريسكا شوكو ستيكس بالشوكولاتة والبندق قطعتين",
    "nameEn": "Freska Choco Sticks Wafer Filled & Coated with Chocolate & Hazelnut 2 Pieces",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "قطعتين",
    "rating": 4.9,
    "reviewsCount": 122,
    "image": "images/freska_choco_sticks_hazelnut_2pcs.png",
    "description": "أصابع ويفر فريسكا رول المقرمشة المحشوة بكريمة البندق والمغطاة بالشوكولاتة اللذيذة.",
    "flavor": "شوكولاتة وبندق",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "قطعتين",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_fingers_vegan_cocoa_cream_6pcs",
    "name": "ويفر فريسكا فينجرز نباتي بكريمة الكاكاو 6 قطع",
    "nameEn": "Freska Fingers Vegan Cocoa Cream Wafers 6 Pieces",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "6 قطع",
    "rating": 4.9,
    "reviewsCount": 123,
    "image": "images/freska_fingers_vegan_cocoa_cream_6pcs.png",
    "description": "ويفر مقرمش نباتي 100% فريسكا فينجرز من إيديتا محشو بكريمة الكاكاو اللذيذة 6 قطع.",
    "flavor": "كاكاو نباتي",
    "sizes": [
      {
        "name": "باكو 6 قطع (10 ج.م)",
        "weight": "6 قطع",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_choco_bar_white_chocolate_wafer",
    "name": "ويفر فريسكا شوكو بار بالشوكولاتة ومغطى بالشوكولاتة البيضاء",
    "nameEn": "Freska Choco Bar White Chocolate Coated Wafer",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "27 جم",
    "rating": 4.9,
    "reviewsCount": 124,
    "image": "images/freska_choco_bar_white_chocolate_wafer.png",
    "description": "بار ويفر فريسكا المقرمش المحشو بكريمة الشوكولاتة والمغطى بطبقة ناعمة من الشوكولاتة البيضاء.",
    "flavor": "شوكولاتة بيضاء وشوكولاتة",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "27 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_sticks_cocoa_hazelnut_27g",
    "name": "ويفر أصابع فريسكا ستيكس محشو بكريمة الكاكاو والبندق 27 جم",
    "nameEn": "Freska Sticks Rolled Wafer Cocoa & Hazelnut Cream 27g",
    "category": "sweets",
    "price": 7,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "27 جم",
    "rating": 4.9,
    "reviewsCount": 125,
    "image": "images/freska_sticks_cocoa_hazelnut_27g.png",
    "description": "أصابع رول ويفر هشة ومقرمشة محشوة بكريمة غنية من الكاكاو والبندق اللذيذ من إيديتا.",
    "flavor": "بندق وكاكاو",
    "sizes": [
      {
        "name": "عبوة قياسية (7 ج.م)",
        "weight": "27 جم",
        "price": 7,
        "selected": true
      }
    ]
  },
  {
    "id": "freska_choco_bar_wafer_28g",
    "name": "ويفر فريسكا شوكو بار مقرمش مغطى بالشوكولاتة 28 جم",
    "nameEn": "Freska Choco Bar Crispy Wafer Coated with Milk Chocolate 28g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فريسكا (Freska)",
    "weight": "28 جم",
    "rating": 4.9,
    "reviewsCount": 126,
    "image": "images/freska_choco_bar_wafer_28g.png",
    "description": "بار ويفر مقرمش من فريسكا مغطى بطبقة سميكة ولذيذة من شوكولاتة الحليب الفاخرة.",
    "flavor": "شوكولاتة الحليب",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "28 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "todo_bomb_chocolate_cake_cream_38g",
    "name": "كيك تودو بومب شوكولاتة محشو بالكريمة ومغطى بالكاكاو 38 جم",
    "nameEn": "TODO Bomb Chocolate Cake with Cream Filling & Cocoa Coating 38g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تودو (TODO)",
    "weight": "38 جم",
    "rating": 4.9,
    "reviewsCount": 127,
    "image": "images/todo_bomb_chocolate_cake_cream_38g.png",
    "description": "كيك شوكولاتة طري ولذيذ محشو بكريمة الفانيليا البيضاء ومغطى بالكامل بطبقة كاكاو شهية.",
    "flavor": "شوكولاتة وكريمة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "38 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "twinkies_double_cream_vanilla_cake_45g",
    "name": "كيك توينكيز كريمة مضاعفة فانيليا 45 جم",
    "nameEn": "Twinkies Double Cream Golden Sponge Cake 45g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "توينكيز (Twinkies)",
    "weight": "45 جم",
    "rating": 4.9,
    "reviewsCount": 128,
    "image": "images/twinkies_double_cream_vanilla_cake_45g.png",
    "description": "كيك إسفنجي ذهبي محشو بضعف كمية الكريمة اللذيذة والناعمة لنكهة غنية وممتعة.",
    "flavor": "فانيليا وكريمة مضاعفة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "45 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "hohos_rolled_chocolate_cake_cream_38g",
    "name": "كيك هوهوز رول شوكولاتة محشو بالكريمة ومغطى بالكاكاو 38 جم",
    "nameEn": "HOHOS Rolled Chocolate Cake with Cream Filling & Cocoa Coating 38g",
    "category": "sweets",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "هوهوز (HOHOS)",
    "weight": "38 جم",
    "rating": 4.9,
    "reviewsCount": 129,
    "image": "images/hohos_rolled_chocolate_cake_cream_38g.png",
    "description": "سويسرول كيك الشوكولاتة الكلاسيكي الملفوف بحشوة الكريمة الغنية ومغطى بطبقة شوكولاتة كاكاو مقرمشة.",
    "flavor": "شوكولاتة وكريمة",
    "sizes": [
      {
        "name": "عبوة قياسية (10 ج.م)",
        "weight": "38 جم",
        "price": 10,
        "selected": true
      }
    ]
  },
  {
    "id": "tiger_excellence_smoked_cheese_chips_85g",
    "name": "شيبس تايجر إكسلانس بطعم الجبنة المدخنة 85 جم",
    "nameEn": "Tiger Excellence Smoked Cheese Potato Chips 85g",
    "category": "snacks",
    "price": 10,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "تايجر (Tiger)",
    "weight": "85 جم",
    "rating": 4.9,
    "reviewsCount": 130,
    "image": "images/tiger_excellence_smoked_cheese_chips_85g.png",
    "description": "رقائق بطاطس مقرمشة وطبيعية 100% بنكهة الجبنة المدخنة الفاخرة من سلسلة تايجر إكسلانس.",
    "flavor": "جبنة مدخنة",
    "sizes": [
      {
        "name": "كيس وسط (7 ج.م)",
        "weight": "وسط",
        "price": 7
      },
      {
        "name": "كيس كبير 85 جم (10 ج.م)",
        "weight": "85 جم",
        "price": 10,
        "selected": true
      },
      {
        "name": "كيس جامبو (15 ج.م)",
        "weight": "جامبو",
        "price": 15
      }
    ]
  },
  {
    "id": "friday_freitag_chocolate_hazelnut_cone_110ml",
    "name": "أيس كريم فرايداي فريتاج كون شوكولاتة بالبندق 110 مل",
    "nameEn": "Friday Freitag Chocolate Hazelnut Ice Cream Cone 110ml",
    "category": "frozen",
    "price": 15,
    "isEgyptian": true,
    "badge": "سعر المستهلك الرسمي 🏷️",
    "brand": "فرايداي (Friday)",
    "weight": "110 مل",
    "rating": 4.9,
    "reviewsCount": 131,
    "image": "images/friday_freitag_chocolate_hazelnut_cone_110ml.png",
    "description": "بسكويت كون مقرمش محشو بأيس كريم الشوكولاتة الغنية ومغطى بقطع البندق وصوص الشوكولاتة اللذيذ.",
    "flavor": "شوكولاتة بالبندق",
    "sizes": [
      {
        "name": "قطعة واحدة (15 ج.م)",
        "weight": "110 مل",
        "price": 15,
        "selected": true
      }
    ]
  }
];

// تصدير البيانات للواجهة
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES_DATA, PRODUCTS_DATA };
}
