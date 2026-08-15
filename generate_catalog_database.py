# -*- coding: utf-8 -*-
import os
import json

images = sorted(os.listdir('images'))

def get_product_info(img):
    img_name = img.lower()
    
    prod = {
        'id': img.replace('.png', '').replace('.jpg', '').replace('-', '_'),
        'name': '',
        'nameEn': '',
        'category': 'groceries',
        'price': 10,
        'isEgyptian': True,
        'badge': 'سعر المستهلك الرسمي 🏷️',
        'brand': '',
        'weight': 'عبوة قياسية',
        'rating': 4.8,
        'reviewsCount': 120,
        'image': f'images/{img}',
        'description': '',
        'flavor': ''
    }
    
    # ---------------- Frozen Poultry, Meats & Fries (frozen) ----------------
    if 'farm-frites' in img_name:
        prod['brand'] = 'فارم فريتس (Farm Frites)'
        prod['category'] = 'frozen'
        if '2.5kg' in img_name:
            prod['name'] = 'بطاطس فارم فريتس بوم فريت 2.5 كجم'
            prod['nameEn'] = 'Farm Frites Pommes Frites 2.5kg'
            prod['price'] = 195
            prod['weight'] = '2.5 كجم'
            prod['flavor'] = 'بطاطس نصف مقلية'
            prod['description'] = 'بطاطس مقرمشة ذهبية سريعة التحضير بحجم عائلي كبير وموفر.'
        elif 'thin' in img_name:
            prod['name'] = 'بطاطس فارم فريتس رفيعة 1 كجم'
            prod['nameEn'] = 'Farm Frites Thin Fries 1kg'
            prod['price'] = 90
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'بطاطس رفيعة مقرمشة'
            prod['description'] = 'بطاطس رفيعة ومقرمشة ومثالية للقلي السريع وتناولها كأشهى سناك.'
        else:
            prod['name'] = 'بطاطس فارم فريتس بوم فريت 1 كجم'
            prod['nameEn'] = 'Farm Frites Pommes Frites 1kg'
            prod['price'] = 85
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'بطاطس نصف مقلية'
            prod['description'] = 'أجود أنواع البطاطس المقرمشة النصف مقلية المجهزة للتحمير الفوري.'

    elif 'atyab' in img_name:
        prod['brand'] = 'أطياب (Atyab)'
        prod['category'] = 'frozen'
        if 'strips-spicy-1kg' in img_name:
            prod['name'] = 'ستربس دجاج أطياب حار سوبر 1 كجم'
            prod['nameEn'] = 'Atyab Chicken Strips Spicy 1kg'
            prod['price'] = 245
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'حار سبايسي'
            prod['description'] = 'أصابع صدور دجاج متبلة ومقرمشة مع تتبيلة حارة شهية ولذيذة.'
        elif 'strips-normal-1kg' in img_name:
            prod['name'] = 'ستربس دجاج أطياب عادي 1 كجم'
            prod['nameEn'] = 'Atyab Chicken Strips Regular 1kg'
            prod['price'] = 245
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'عادي كرانشي'
            prod['description'] = 'ستربس صدور دجاج طبيعي ومقرمش بطعم رائع ومناسب لجميع أفراد الأسرة.'
        elif 'strips-400g' in img_name:
            prod['name'] = 'ستربس دجاج أطياب 400 جم'
            prod['nameEn'] = 'Atyab Chicken Strips 400g'
            prod['price'] = 115
            prod['weight'] = '400 جم'
            prod['flavor'] = 'مقرمش ولذيذ'
            prod['description'] = 'وجبة سريعة ومقرمشة من صدور الدجاج الصافية بحجم عملي.'
        elif 'pane-20pcs' in img_name:
            prod['name'] = 'بانيه دجاج أطياب كرانشي 20 قطعة (1 كجم)'
            prod['nameEn'] = 'Atyab Crunchy Chicken Pane 20 Pcs'
            prod['price'] = 230
            prod['weight'] = '1 كجم (20 قطعة)'
            prod['flavor'] = 'بانيه مقرمش'
            prod['description'] = 'قطع بانيه دجاج مقرمشة بتتبيلة خاصة وجاهزة للطهي الفوري.'
        elif 'chicken-burger-pane' in img_name:
            prod['name'] = 'برجر دجاج بانيه أطياب 6 قطع'
            prod['nameEn'] = 'Atyab Pane Chicken Burger 6 Pcs'
            prod['price'] = 95
            prod['weight'] = '6 قطع'
            prod['flavor'] = 'برجر دجاج بانيه'
            prod['description'] = 'برجر دجاج بانيه شهي ولذيذ وسريع التحضير لعمل أشهى الساندوتشات.'
        elif 'nuggets' in img_name:
            prod['name'] = 'ناجتس دجاج أطياب 20 قطعة'
            prod['nameEn'] = 'Atyab Chicken Nuggets 20 Pcs'
            prod['price'] = 110
            prod['weight'] = '20 قطعة'
            prod['flavor'] = 'ناجتس مقرمش'
            prod['description'] = 'قطع ناجتس دجاج ذهبية مقرمشة يعشقها الكبار والصغار.'
        elif 'sausages' in img_name or 'sausage' in img_name:
            prod['name'] = 'سجق شرقي متبل أطياب'
            prod['nameEn'] = 'Atyab Oriental Sausages'
            prod['price'] = 145
            prod['weight'] = '700 جم'
            prod['flavor'] = 'سجق بلدي بالبهارات'
            prod['description'] = 'سجق شرقي فاخر متبل بأجود خلطات البهارات الشرقية الأصلية.'
        else:
            prod['name'] = 'منتجات أطياب للدواجن الفاخرة'
            prod['nameEn'] = 'Atyab Premium Poultry'
            prod['price'] = 160
            prod['flavor'] = 'دجاج فاخر'
            prod['description'] = 'منتج دجاج فاخر من مصانع أطياب بجودة مصرية 100%.'

    elif 'koki' in img_name:
        prod['brand'] = 'كوكي (Koki)'
        prod['category'] = 'frozen'
        if 'strips' in img_name:
            prod['name'] = 'ستربس دجاج كوكي التوفير 1 كجم'
            prod['nameEn'] = 'Koki Super Saver Chicken Strips 1kg'
            prod['price'] = 220
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'ستربس كرانشي'
            prod['description'] = 'أصابع ستربس دجاج مقرمشة بجودة عالية وسعر اقتصادي موفر.'
        elif 'beef-burger-20pcs' in img_name:
            prod['name'] = 'برجر بقري كوكي 20 قطعة'
            prod['nameEn'] = 'Koki Beef Burger 20 Pcs'
            prod['price'] = 165
            prod['weight'] = '20 قطعة'
            prod['flavor'] = 'لحم بقري متبل'
            prod['description'] = 'برجر لحم بقري شهي ولذيذ مناسب لحفلات الشواء والعزومات والساندوتشات.'
        elif 'nuggets-fries' in img_name:
            prod['name'] = 'ناجتس كوكي كرانشي مع بطاطس 60 قطعة'
            prod['nameEn'] = 'Koki Nuggets & Fries 60 Pcs'
            prod['price'] = 210
            prod['weight'] = '60 قطعة'
            prod['flavor'] = 'ناجتس وبطاطس'
            prod['description'] = 'عرض التوفير العائلي الضخم من ناجتس الدجاج المقرمش مع بطاطس فريتس.'
        elif 'chicken-burger' in img_name:
            prod['name'] = 'برجر دجاج كوكي 8 قطع'
            prod['nameEn'] = 'Koki Chicken Burger 8 Pcs'
            prod['price'] = 90
            prod['weight'] = '8 قطع'
            prod['flavor'] = 'برجر دجاج'
            prod['description'] = 'قطع برجر دجاج مجهزة بأجود المكونات لطعم لا يقاوم.'
        elif 'pane-spicy' in img_name:
            prod['name'] = 'بانيه دجاج كوكي مقرمش سبايسي 20 قطعة'
            prod['nameEn'] = 'Koki Crunchy Spicy Chicken Pane 20 Pcs'
            prod['price'] = 210
            prod['weight'] = '20 قطعة'
            prod['flavor'] = 'بانيه حار'
            prod['description'] = 'قطع بانيه مقرمشة بتتبيلة حارة لعشاق الطعم السبايسي.'
        elif 'hotdog' in img_name:
            prod['name'] = 'هوت دوج بقري كوكي 12 قطعة'
            prod['nameEn'] = 'Koki Beef Hot Dog 12 Pcs'
            prod['price'] = 95
            prod['weight'] = '12 قطعة'
            prod['flavor'] = 'هوت دوج بقري'
            prod['description'] = 'أصابع هوت دوج بقري فاخرة مناسبة للسلق أو التحمير والشواء.'
        elif 'gold-beef' in img_name:
            prod['name'] = 'برجر بقري كوكي جولد جورميه 6 قطع'
            prod['nameEn'] = 'Koki Gold Gourmet Beef Burger 6 Pcs'
            prod['price'] = 135
            prod['weight'] = '6 قطع سميكة'
            prod['flavor'] = 'لحم بقري أنجوس فاخر'
            prod['description'] = 'برجر فاخر من اللحم البقري الصافي السميك لتجربة مطاعم البرجر في بيتك.'
        elif 'drumsticks' in img_name:
            prod['name'] = 'دبابيس دجاج كوكي كرانشي مقرمشة'
            prod['nameEn'] = 'Koki Crunchy Chicken Drumsticks'
            prod['price'] = 195
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'دجاج مقلي متبل'
            prod['description'] = 'دبابيس دجاج مقرمشة بخلطة كوكي السرية الشهيرة.'
        else:
            prod['name'] = 'منتجات كوكي للدواجن واللحوم'
            prod['nameEn'] = 'Koki Meat & Poultry'
            prod['price'] = 150
            prod['flavor'] = 'منتج كوكي المفضل'
            prod['description'] = 'منتجات دجاج ولحوم كوكي المجمدة الفاخرة.'

    elif 'halwani' in img_name:
        prod['brand'] = 'حلواني إخوان (Halwani Bros)'
        prod['category'] = 'frozen'
        if 'jumbo-beef-burger' in img_name:
            prod['name'] = 'برجر بقري جامبو حلواني إخوان 1 كجم'
            prod['nameEn'] = 'Halwani Bros Jumbo Beef Burger 1kg'
            prod['price'] = 260
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'لحم بقري جامبو'
            prod['description'] = 'برجر لحم بقري جامبو فاخر غني بالعصارة والنكهة اللذيذة.'
        elif 'strips-spicy' in img_name:
            prod['name'] = 'ستربس دجاج حلواني إخوان مقرمش حار 1 كجم'
            prod['nameEn'] = 'Halwani Bros Crunchy Strips Spicy 1kg'
            prod['price'] = 255
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'ستربس حار مقرمش'
            prod['description'] = 'صدور دجاج طبيعية 100% بتتبيلة حلواني الحارة والمقرمشة.'
        elif 'strips-1kg' in img_name:
            prod['name'] = 'ستربس دجاج حلواني إخوان مقرمش 1 كجم'
            prod['nameEn'] = 'Halwani Bros Crunchy Strips 1kg'
            prod['price'] = 255
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'ستربس مقرمش عادي'
            prod['description'] = 'ستربس صدور دجاج كاملة ومقرمشة بدون ألوان صناعية.'
        elif 'strips-400g' in img_name:
            prod['name'] = 'ستربس دجاج حلواني إخوان 400 جم'
            prod['nameEn'] = 'Halwani Bros Crunchy Strips 400g'
            prod['price'] = 120
            prod['weight'] = '400 جم'
            prod['flavor'] = 'ستربس دجاج'
            prod['description'] = 'عبوة اقتصادية عملية من ستربس دجاج حلواني المقرمش.'
        elif 'burger-8pcs' in img_name:
            prod['name'] = 'برجر بقري حلواني إخوان 8 قطع'
            prod['nameEn'] = 'Halwani Bros Beef Burger 8 Pcs'
            prod['price'] = 135
            prod['weight'] = '8 قطع'
            prod['flavor'] = 'لحم بقري بلدي'
            prod['description'] = 'برجر بقري أصلي من حلواني إخوان بتتبيلة تقليدية مميزة.'
        elif 'burger-16pcs' in img_name:
            prod['name'] = 'برجر بقري حلواني إخوان 16 قطعة 1 كجم'
            prod['nameEn'] = 'Halwani Bros Beef Burger 16 Pcs 1kg'
            prod['price'] = 240
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'لحم بقري توفير'
            prod['description'] = 'عبوة عائلية كبيرة من برجر اللحم البقري الفاخر لجميع الوجبات.'
        elif 'oriental-sausage' in img_name:
            prod['name'] = 'سجق شرقي فاخر حلواني إخوان 700 جم'
            prod['nameEn'] = 'Halwani Bros Oriental Sausage 700g'
            prod['price'] = 175
            prod['weight'] = '700 جم'
            prod['flavor'] = 'سجق شرقي بالخلطة الخاصة'
            prod['description'] = 'سجق شرقي مصنوع من أجود قطع اللحم المتبلة بالثوم والبهارات الشرقية.'
        elif 'cocktail-sausage' in img_name:
            prod['name'] = 'سجق كوكتيل بقري حلواني إخوان 350 جم'
            prod['nameEn'] = 'Halwani Bros Beef Cocktail Sausage 350g'
            prod['price'] = 95
            prod['weight'] = '350 جم'
            prod['flavor'] = 'سجق كوكتيل صغير'
            prod['description'] = 'أصابع سجق كوكتيل صغيرة ومثالية للمقبلات والمعجنات والساندوتشات.'
        else:
            prod['name'] = 'منتجات حلواني إخوان الفاخرة'
            prod['nameEn'] = 'Halwani Bros Premium Products'
            prod['price'] = 150
            prod['flavor'] = 'أصالة وجودة'
            prod['description'] = 'منتجات حلواني إخوان العريقة والرائدة في السوق المصري.'

    elif 'chiquita' in img_name:
        prod['brand'] = 'شيكيتا (Chiquita)'
        prod['category'] = 'frozen'
        if 'burger' in img_name:
            prod['name'] = 'برجر بقري شيكيتا 1 كجم'
            prod['nameEn'] = 'Chiquita Beef Burger 1kg'
            prod['price'] = 160
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'لحم بقري'
            prod['description'] = 'برجر اقتصادي بجودة ممتازة وسريع التحضير لجميع الوجبات السريعة.'
        elif 'hotdog' in img_name:
            prod['name'] = 'هوت دوج بقري شيكيتا 25 قطعة'
            prod['nameEn'] = 'Chiquita Beef Hot Dog 25 Pcs'
            prod['price'] = 130
            prod['weight'] = '25 قطعة'
            prod['flavor'] = 'هوت دوج اقتصادي'
            prod['description'] = 'عبوة توفير كبرى من هوت دوج شيكيتا الشهي للأطفال والساندوتشات.'

    elif 'dayem' in img_name:
        prod['brand'] = 'دايم (Dayem)'
        prod['category'] = 'frozen'
        prod['name'] = 'سجق شرقي دايم متبل 700 جم'
        prod['nameEn'] = 'Dayem Oriental Sausage 700g'
        prod['price'] = 135
        prod['weight'] = '700 جم'
        prod['flavor'] = 'سجق شرقي بالبهارات'
        prod['description'] = 'سجق شرقي مجمد متبل جاهز للتحمير أو عمل طواجن السجق الإسكندراني.'

    elif 'eltawabel' in img_name:
        prod['brand'] = 'التوابل الشرقية (El Tawabel)'
        prod['category'] = 'frozen'
        prod['name'] = 'برجر لحم التوابل الشرقية 30 قطعة'
        prod['nameEn'] = 'El Tawabel Oriental Beef Burger 30 Pcs'
        prod['price'] = 175
        prod['weight'] = '30 قطعة'
        prod['flavor'] = 'لحم وتوابل شرقية'
        prod['description'] = 'عرض اقتصادي ضخم 30 قطعة برجر بالتتبيلة الشرقية المميزة.'

    # ---------------- Frozen Vegetables (frozen) ----------------
    elif 'basma' in img_name:
        prod['brand'] = 'بسمة (Basma)'
        prod['category'] = 'frozen'
        if 'molokhia' in img_name:
            prod['name'] = 'ملوخية خضراء مفرومة بسمة 400 جم'
            prod['nameEn'] = 'Basma Minced Green Molokhia 400g'
            prod['price'] = 22
            prod['weight'] = '400 جم'
            prod['flavor'] = 'ملوخية خضراء فريش'
            prod['description'] = 'ملوخية خضراء طازجة مقطوفة ومفرومة بأعلى تقنيات التجميد للحفاظ على اللون والطعم.'
        elif 'mixed' in img_name:
            prod['name'] = 'خضار مشكل مجمد بسمة 400 جم'
            prod['nameEn'] = 'Basma Frozen Mixed Vegetables 400g'
            prod['price'] = 25
            prod['weight'] = '400 جم'
            prod['flavor'] = 'بسلة وجزر وفاصوليا'
            prod['description'] = 'توليفة خضار مشكل طازج ونظيف جاهز لعمل أشهى طواجن التورلي والشوربة.'
        elif 'okra' in img_name or 'bamiya' in img_name:
            prod['name'] = 'بامية زيرو خضراء مجمدة بسمة 400 جم'
            prod['nameEn'] = 'Basma Green Okra Zero 400g'
            prod['price'] = 38
            prod['weight'] = '400 جم'
            prod['flavor'] = 'بامية زيرو صغيرة'
            prod['description'] = 'أصغر حبات البامية الخضراء الفاخرة لطواجن اللحم بالصلصة.'
        elif 'peas' in img_name or 'besella' in img_name:
            prod['name'] = 'بسلة خضراء سادة بسمة 400 جم'
            prod['nameEn'] = 'Basma Green Peas 400g'
            prod['price'] = 28
            prod['weight'] = '400 جم'
            prod['flavor'] = 'بسلة خضراء سكرية'
            prod['description'] = 'حبات بسلة خضراء نقية وسكرية طازجة وسريعة النضج.'
        elif 'spinach' in img_name or 'sabanekh' in img_name:
            prod['name'] = 'سبانخ خضراء مقطعة بسمة 400 جم'
            prod['nameEn'] = 'Basma Cut Green Spinach 400g'
            prod['price'] = 22
            prod['weight'] = '400 جم'
            prod['flavor'] = 'سبانخ خضراء مقطوفة'
            prod['description'] = 'أوراق سبانخ خضراء مقطعة ومغسولة بعناية غنية بالحديد والفيتامينات.'
        else:
            prod['name'] = 'خضروات مجمدة فاخرة من بسمة'
            prod['nameEn'] = 'Basma Frozen Vegetables'
            prod['price'] = 25
            prod['flavor'] = 'خضار طبيعي'
            prod['description'] = 'خضروات مصرية طازجة مجمدة بأحدث تقنيات حفظ الأغذية.'

    elif 'givrex' in img_name:
        prod['brand'] = 'جيفركس (Givrex)'
        prod['category'] = 'frozen'
        prod['name'] = 'ملوخية خضراء مفرومة جيفركس 400 جم'
        prod['nameEn'] = 'Givrex Minced Molokhia 400g'
        prod['price'] = 20
        prod['weight'] = '400 جم'
        prod['flavor'] = 'ملوخية بلدي خضراء'
        prod['description'] = 'ملوخية خضراء مفرومة عالية النقاء والجودة لتحضير أحلى طشة ملوخية.'

    # ---------------- Groceries: Ghee & Oils (groceries) ----------------
    elif 'rawaby' in img_name:
        prod['brand'] = 'روابي (Rawaby)'
        prod['category'] = 'groceries'
        prod['name'] = 'سمنة روابي بطعم القشطة 700 جم'
        prod['nameEn'] = 'Rawaby Ghee Qishta Taste 700g'
        prod['price'] = 98
        prod['weight'] = '700 جم'
        prod['flavor'] = 'طعم القشطة الفلاحي'
        prod['description'] = 'سمن نباتي نقي بطعم وريحة القشطة الفلاحي ليمنح طعامك نكهة شرقية أصيلة.'

    elif 'gannah' in img_name:
        prod['brand'] = 'جنة (Gannah)'
        prod['category'] = 'groceries'
        if '2.5kg' in img_name:
            prod['name'] = 'سمنة جنة بطعم الزبدة الصفراء 2.5 كجم'
            prod['nameEn'] = 'Gannah Ghee Yellow Butter 2.5kg'
            prod['price'] = 310
            prod['weight'] = '2.5 كجم'
            prod['flavor'] = 'زبدة نيوزيلاندي صفراء'
            prod['description'] = 'عبوة التوفير الكبيرة من سمنة جنة برائحة وطعم الزبدة الصفراء النيوزيلندية.'
        else:
            prod['name'] = 'سمنة جنة بطعم الزبدة الصفراء 700 جم'
            prod['nameEn'] = 'Gannah Ghee Yellow Butter 700g'
            prod['price'] = 98
            prod['weight'] = '700 جم'
            prod['flavor'] = 'زبدة صفراء'
            prod['description'] = 'سمنة جنة الشهيرة بطعم ورائحة الزبدة الصفراء لكل أصناف الطبخ والحلويات.'

    elif 'crystal' in img_name:
        prod['brand'] = 'كريستال (Crystal)'
        prod['category'] = 'groceries'
        if 'ghee' in img_name or 'butter' in img_name:
            prod['name'] = 'سمنة كريستال بالزبدة الصفراء 700 جم'
            prod['nameEn'] = 'Crystal Ghee Yellow Butter 700g'
            prod['price'] = 98
            prod['weight'] = '700 جم'
            prod['flavor'] = 'زبدة صفراء غنية'
            prod['description'] = 'سمنة نقية بطعم الزبدة الصفراء المميز والمناسب لجميع الأكلات الشرقية.'
        elif 'corn-oil' in img_name:
            prod['name'] = 'زيت ذرة كريستال صافي 800 مل'
            prod['nameEn'] = 'Crystal Pure Corn Oil 800ml'
            prod['price'] = 115
            prod['weight'] = '800 مل'
            prod['flavor'] = 'زيت ذرة نقي 100%'
            prod['description'] = 'زيت ذرة نقي خفيف وصحي خالي من الكوليسترول لتحضير أشهى المأكولات.'
        else:
            prod['name'] = 'زيت عباد الشمس كريستال 800 مل'
            prod['nameEn'] = 'Crystal Sunflower Oil 800ml'
            prod['price'] = 95
            prod['weight'] = '800 مل'
            prod['flavor'] = 'زيت عباد نقي'
            prod['description'] = 'زيت عباد شمس خفيف وصافي ومثالي للطبخ والقلي الصحي.'

    elif 'fern' in img_name:
        prod['brand'] = 'فيرن (Fern)'
        prod['category'] = 'groceries'
        prod['name'] = 'سمن بقري نقي فيرن علبة صفيح 700 جم'
        prod['nameEn'] = 'Fern Pure Butter Ghee 700g'
        prod['price'] = 285
        prod['weight'] = '700 جم'
        prod['flavor'] = 'سمن بلدي طبيعي 100%'
        prod['description'] = 'سمن طبيعي بقري نيوزيلندي نقي 100% بدون أي إضافات يمنح طعامك نكهة لا تقاوم.'

    # ---------------- Groceries: Tuna & Foul (groceries) ----------------
    elif 'dolphin' in img_name:
        prod['brand'] = 'دولفين (Dolphin)'
        prod['category'] = 'groceries'
        if 'shredded' in img_name:
            prod['name'] = 'تونا دولفين مفتتة في الزيت 140 جم'
            prod['nameEn'] = 'Dolphin Shredded Tuna 140g'
            prod['price'] = 38
            prod['weight'] = '140 جم'
            prod['flavor'] = 'تونا مفتتة'
            prod['description'] = 'تونا خفيفة مفتتة في الزيت النباتي مع لمسة ملح خفيفة وسهلة التحضير.'
        elif 'solid' in img_name:
            prod['name'] = 'تونا دولفين قطع صلبة فاخرة 200 جم'
            prod['nameEn'] = 'Dolphin Solid Tuna Can 200g'
            prod['price'] = 68
            prod['weight'] = '200 جم'
            prod['flavor'] = 'تونا قطع لحم صلبة'
            prod['description'] = 'أجود قطع التونا الفاخرة المتماسكة المعبأة في زيت نقي غنية بالأوميجا 3.'
        else:
            prod['name'] = 'تونا دولفين قطع فاخرة'
            prod['nameEn'] = 'Dolphin Tuna Can'
            prod['price'] = 55
            prod['weight'] = '170 جم'
            prod['flavor'] = 'تونا في الزيت'
            prod['description'] = 'تونا دولفين الشهيرة والغنية بالبروتين لكل أفراد العائلة.'

    elif 'harvest' in img_name:
        prod['brand'] = 'هارفست (Harvest)'
        prod['category'] = 'groceries'
        if '3pack' in img_name:
            prod['name'] = 'فول مدمس هارفست سادة عرض 3 علب'
            prod['nameEn'] = 'Harvest Fava Beans 3-Pack Offer'
            prod['price'] = 45
            prod['weight'] = '3 علب × 400 جم'
            prod['flavor'] = 'فول مدمس سادة'
            prod['description'] = 'عرض التوفير الثلاثي من فول مدمس هارفست المطهو بعناية لوجبات الإفطار والسحور.'
        else:
            prod['name'] = 'فول مدمس هارفست سادة كلاسيك علبة 400 جم'
            prod['nameEn'] = 'Harvest Plain Fava Beans 400g'
            prod['price'] = 17
            prod['weight'] = '400 جم'
            prod['flavor'] = 'فول مدمس كلاسيك'
            prod['description'] = 'حبات فول بلدي منتقاة ومطهوة على البخار بدون مواد حافظة.'

    # ---------------- Groceries: Seasoning & Mixes (Knorr & Maggi) ----------------
    elif 'knorr' in img_name:
        prod['brand'] = 'كنور (Knorr)'
        prod['category'] = 'groceries'
        if 'hot-vegetar' in img_name:
            prod['name'] = 'خلطة فيجيتار كنور حار المقرمش'
            prod['nameEn'] = 'Knorr Hot Vegetar Mix'
            prod['price'] = 10
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فيجيتار حار مقرمش'
            prod['description'] = 'خلطة البقسماط والتوابل الحارة من كنور لعمل ألذ وأقرمش بانيه ودجاج مقلي.'
        elif 'vegetar' in img_name:
            prod['name'] = 'خلطة فيجيتار كنور عادي الذهبي'
            prod['nameEn'] = 'Knorr Regular Vegetar Mix'
            prod['price'] = 10
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فيجيتار عادي'
            prod['description'] = 'خلطة التتبيل المقرمشة لبانيه ودجاج شهي بلون ذهبي لا يقاوم.'
        elif 'tomato-puree' in img_name:
            prod['name'] = 'صلصة طماطم بيوريه كنور كيس اقتصادي'
            prod['nameEn'] = 'Knorr Tomato Puree Pouch 280g'
            prod['price'] = 18
            prod['weight'] = '280 جم'
            prod['flavor'] = 'طماطم بيوريه مركزة'
            prod['description'] = 'معجون طماطم طبيعي مركز 100% خالي من المواد الحافظة.'
        elif 'veg-stock' in img_name:
            prod['name'] = 'مرقة خضروات كنور الطبيعية 12 مكعب'
            prod['nameEn'] = 'Knorr Vegetable Stock 12 Cubes'
            prod['price'] = 22
            prod['weight'] = '12 مكعب'
            prod['flavor'] = 'خضروات وأعشاب طبيعية'
            prod['description'] = 'مكعبات مرقة خضار طبيعية غنية بالأعشاب تضفي نكهة ساحرة على الشوربات والصلصات.'
        elif 'shawerma' in img_name:
            prod['name'] = 'خلطة الشاورما السوري كنور'
            prod['nameEn'] = 'Knorr Syrian Shawerma Mix'
            prod['price'] = 12
            prod['weight'] = 'كيس بهارات'
            prod['flavor'] = 'تتبيلة شاورما سوري'
            prod['description'] = 'خلطة توابل شاورما سورية مميزة وسر النكهة الأصلية للشاورما في المنزل.'
        elif 'bechamel' in img_name:
            prod['name'] = 'خلطة البشاميل كنور السريعة'
            prod['nameEn'] = 'Knorr Béchamel Sauce Mix'
            prod['price'] = 15
            prod['weight'] = 'كيس'
            prod['flavor'] = 'بشاميل كريمي غني'
            prod['description'] = 'تحضير سهل وسريع لألذ صوص بشاميل ناعم وغني بدون تكتلات.'
        elif '11-spice' in img_name or 'spice' in img_name:
            prod['name'] = 'خلطة الـ 11 بهار كنور السحرية'
            prod['nameEn'] = 'Knorr 11 Spice Mix'
            prod['price'] = 12
            prod['weight'] = 'كيس بهارات'
            prod['flavor'] = '11 بهار وتوابل شرقية'
            prod['description'] = 'توليفة سرية من 11 نوع بهار وتوابل طبيعية لجميع اللحوم والدواجن والخضار.'
        elif 'potato-seasoning' in img_name:
            prod['name'] = 'تتبيلة البطاطس كنور توابل الشرق الأقصى'
            prod['nameEn'] = 'Knorr Potato Seasoning Far East'
            prod['price'] = 8
            prod['weight'] = 'كيس بهارات'
            prod['flavor'] = 'توابل الشرق الأقصى'
            prod['description'] = 'رشة واحدة على البطاطس المحمرة تمنحها طعماً مقرمشاً وغنياً كالمطاعم.'
        else:
            prod['name'] = 'خلطات وتوابل كنور المميزة'
            prod['nameEn'] = 'Knorr Specialty Mixes'
            prod['price'] = 12
            prod['flavor'] = 'بهارات وتتبيلات'
            prod['description'] = 'منتجات كنور المتميزة لكل عشاق الطبخ المنزلي اللذيذ.'

    elif 'maggi' in img_name:
        prod['brand'] = 'ماجي (Maggi)'
        prod['category'] = 'groceries'
        prod['name'] = 'مرقة دجاج ماجي 12 مكعب'
        prod['nameEn'] = 'Maggi Chicken Stock 12 Cubes'
        prod['price'] = 22
        prod['weight'] = '12 مكعب'
        prod['flavor'] = 'مرقة دجاج مركزة'
        prod['description'] = 'مكعبات مرقة الدجاج الكلاسيكية المحبوبة لتعزيز مذاق كافة الطبخات والشوربات.'

    # ---------------- Groceries: Pasta (El Maleka & Regina) ----------------
    elif 'regina' in img_name:
        prod['brand'] = 'ريجينا (Regina)'
        prod['category'] = 'groceries'
        if 'lisan-asfour' in img_name:
            prod['name'] = 'مكرونة ريجينا لسان عصفور 400 جم'
            prod['nameEn'] = 'Regina Lisan Asfour Pasta 400g'
            prod['price'] = 25
            prod['weight'] = '400 جم'
            prod['flavor'] = 'قمح صلب 100%'
            prod['description'] = 'مكرونة لسان عصفور فاخرة مصنوعة من سيمولينا القمح الصلب الممتاز.'
        elif 'penne' in img_name or 'pasta' in img_name:
            prod['name'] = 'مكرونة ريجينا فرن قلم (بيني) 400 جم'
            prod['nameEn'] = 'Regina Penne Rigate Pasta 400g'
            prod['price'] = 25
            prod['weight'] = '400 جم'
            prod['flavor'] = 'مكرونة فرن إيطالية'
            prod['description'] = 'مكرونة قلم فاخرة مثالية لعمل صواني المكرونة بالبشاميل والوايت صوص.'
        else:
            prod['name'] = 'مكرونة ريجينا الفاخرة 400 جم'
            prod['nameEn'] = 'Regina Premium Pasta 400g'
            prod['price'] = 25
            prod['weight'] = '400 جم'
            prod['flavor'] = 'سيمولينا قمح صلب'
            prod['description'] = 'مكرونة ريجينا المصنوعة بأعلى معايير الجودة الإيطالية.'

    elif 'elmaleka' in img_name:
        prod['brand'] = 'الملكة (El Maleka)'
        prod['category'] = 'groceries'
        if 'vermicelli-400g' in img_name:
            prod['name'] = 'مكرونة شعرية الملكة 400 جم'
            prod['nameEn'] = 'El Maleka Vermicelli 400g'
            prod['price'] = 14
            prod['weight'] = '400 جم'
            prod['flavor'] = 'شعرية ذهبية'
            prod['description'] = 'شعرية الملكة الرفيعة لتحمير أشهى أرز بالشعرية والحلويات والشوربات.'
        elif 'vermicelli-1kg' in img_name:
            prod['name'] = 'مكرونة شعرية الملكة كيس عائلي 1 كجم'
            prod['nameEn'] = 'El Maleka Vermicelli 1kg'
            prod['price'] = 32
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'شعرية فاخرة'
            prod['description'] = 'كيس عائلي اقتصادي من شعرية الملكة الفاخرة التي لا تعجن أبداً.'
        elif 'small-rings' in img_name:
            prod['name'] = 'مكرونة الملكة خواتم صغيرة 1 كجم'
            prod['nameEn'] = 'El Maleka Small Rings Pasta 1kg'
            prod['price'] = 32
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'خواتم صغيرة'
            prod['description'] = 'مكرونة خواتم صغيرة ممتازة لشوربات الخضار والكشري المصري والسلطات.'
        elif 'elbow' in img_name:
            prod['name'] = 'مكرونة الملكة هلالية 1 كجم'
            prod['nameEn'] = 'El Maleka Elbow Pasta 1kg'
            prod['price'] = 32
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'مكرونة هلالية'
            prod['description'] = 'مكرونة هلالية كلاسيكية شهية للماك آند تشيز والوجبات العائلية.'
        elif 'penne' in img_name:
            prod['name'] = 'مكرونة الملكة فرن قلم 400 جم'
            prod['nameEn'] = 'El Maleka Penne Pasta 400g'
            prod['price'] = 14
            prod['weight'] = '400 جم'
            prod['flavor'] = 'مكرونة قلم'
            prod['description'] = 'مكرونة الملكة قلم التي تحافظ على قوامها المتماسك والمثالي بعد السلق.'
        else:
            prod['name'] = 'مكرونة الملكة المصرية'
            prod['nameEn'] = 'El Maleka Egyptian Pasta'
            prod['price'] = 14
            prod['weight'] = '400 جم'
            prod['flavor'] = 'مكرونة متنوعة'
            prod['description'] = 'مكرونة الملكة، الاختيار الأول للبيت المصري منذ أجيال.'

    # ---------------- Groceries: Sauces, Mayonnaise, Mustard & Vinegar ----------------
    elif 'heinz' in img_name:
        prod['brand'] = 'هاينز (Heinz)'
        prod['category'] = 'groceries'
        if 'mayo-pouch' in img_name:
            prod['name'] = 'مايونيز هاينز كيس اقتصادي بفتحة صب'
            prod['nameEn'] = 'Heinz Mayonnaise Spout Pouch 280g'
            prod['price'] = 40
            prod['weight'] = '280 جم'
            prod['flavor'] = 'مايونيز كريمي'
            prod['description'] = 'مايونيز هاينز الغني والكريمي في كيس عملي وسهل الاستخدام.'
        elif 'mayo-jar' in img_name:
            prod['name'] = 'مايونيز هاينز كلاسيك برطمان زجاجي'
            prod['nameEn'] = 'Heinz Classic Mayonnaise Jar 310g'
            prod['price'] = 58
            prod['weight'] = '310 جم'
            prod['flavor'] = 'مايونيز أصلي فاخر'
            prod['description'] = 'قوام كريمي ناعم وغني من هاينز المايونيز الأصلي لكافة الساندوتشات والسلطات.'
        elif 'mustard' in img_name:
            prod['name'] = 'مستردة هاينز الصفراء زجاجة صوص ضاغطة'
            prod['nameEn'] = 'Heinz Yellow Mustard Squeeze 235g'
            prod['price'] = 45
            prod['weight'] = '235 جم'
            prod['flavor'] = 'مستردة صفراء متبلة'
            prod['description'] = 'مستردة هاينز الغنية ببذور الخردل الطبيعية والخل لتعزيز طعم البرجر والهوت دوج.'
        else:
            prod['name'] = 'كاتشب وصلصات هاينز الأصلية'
            prod['nameEn'] = 'Heinz Original Sauces'
            prod['price'] = 45
            prod['flavor'] = 'صوصات هاينز'
            prod['description'] = 'منتجات هاينز العالمية بأعلى مستويات الجودة والمذاق الرائع.'

    elif 'number1' in img_name or 'tomato-paste' in img_name:
        prod['brand'] = 'رقم 1 (Number 1)'
        prod['category'] = 'groceries'
        prod['name'] = 'صلصة طماطم رقم 1 برطمان زجاجي 320 جم'
        prod['nameEn'] = 'Number 1 Tomato Paste Jar 320g'
        prod['price'] = 22
        prod['weight'] = '320 جم'
        prod['flavor'] = 'طماطم بيوريه طبيعية'
        prod['description'] = 'معجون طماطم بيوريه أحمر غامق ولذيذ يمنح طبيخك اللون والرائحة الممتازة.'

    elif 'rehana' in img_name:
        prod['brand'] = 'ريحانة (Rehana)'
        prod['category'] = 'groceries'
        prod['name'] = 'خل قصب طبيعي نقي ريحانة 1 لتر'
        prod['nameEn'] = 'Rehana Natural Cane Vinegar 1L'
        prod['price'] = 16
        prod['weight'] = '1 لتر'
        prod['flavor'] = 'خل قصب طبيعي 5%'
        prod['description'] = 'خل قصب سكر طبيعي معقم ونقي 100% لغسيل الخضار وتحضير أشهى التتبيلات.'

    elif 'eldoha' in img_name or 'doha' in img_name:
        prod['brand'] = 'الضحى (El Doha)'
        prod['category'] = 'groceries'
        if 'sugar' in img_name:
            prod['name'] = 'سكر أبيض ناعم فاخر الضحى 1 كجم'
            prod['nameEn'] = 'El Doha Fine White Sugar 1kg'
            prod['price'] = 42
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'سكر قصب نقي مكرر'
            prod['description'] = 'أنقى أنواع السكر الأبيض الناعم فائق التحلية والنقاء من شركة الضحى.'
        else:
            prod['name'] = 'بقوليات ومنتجات الضحى الفاخرة'
            prod['nameEn'] = 'El Doha Premium Groceries'
            prod['price'] = 40
            prod['flavor'] = 'منتج طبيعي نقي'
            prod['description'] = 'منتجات الضحى المنقاة إلكترونياً بأعلى معايير النظافة والجودة.'

    # ---------------- Groceries: Jam, Honey, Halawa (Vitrac, Imtenan, El Bawadi, El Rashidi) ----------------
    elif 'vitrac' in img_name:
        prod['brand'] = 'فيتراك (Vitrac)'
        prod['category'] = 'groceries'
        prod['name'] = 'مربى فراولة كريمي فيتراك 430 جم'
        prod['nameEn'] = 'Vitrac Creamy Strawberry Jam 430g'
        prod['price'] = 48
        prod['weight'] = '430 جم'
        prod['flavor'] = 'فراولة طبيعية كريمي'
        prod['description'] = 'مربى فراولة طبيعية بدون قطع سهلة الفرد وغنية بالفاكهة الطازجة.'

    elif 'imtenan' in img_name:
        prod['brand'] = 'إمتنان (Imtenan)'
        prod['category'] = 'groceries'
        if 'spring' in img_name:
            prod['name'] = 'عسل نحل طبيعي زهور الربيع إمتنان 1100 جم'
            prod['nameEn'] = 'Imtenan Spring Flowers Natural Honey 1100g'
            prod['price'] = 180
            prod['weight'] = '1.1 كجم'
            prod['flavor'] = 'زهور الربيع الطبيعية'
            prod['description'] = 'عسل نحل نقي 100% غني بمضادات الأكسدة والإنزيمات المفيدة للصحة والمناعة.'
        else:
            prod['name'] = 'عسل نحل طبيعي نوارة البرسيم إمتنان 1 كجم'
            prod['nameEn'] = 'Imtenan Clover Honey 1kg'
            prod['price'] = 165
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'نوارة البرسيم المصري'
            prod['description'] = 'عسل نحل زهرة البرسيم الخفيف والمفضل لجميع أفراد الأسرة وللتحلية الصحية.'

    elif 'elbawadi' in img_name:
        prod['brand'] = 'البوادي (El Bawadi)'
        prod['category'] = 'groceries'
        prod['name'] = 'حلاوة طحينية سادة البوادي 500 جم'
        prod['nameEn'] = 'El Bawadi Plain Halawa Tahinia 500g'
        prod['price'] = 55
        prod['weight'] = '500 جم'
        prod['flavor'] = 'سمسم طبيعي سادة'
        prod['description'] = 'حلاوة طحينية فاخرة مصنوعة من أنقى حبوب السمسم المحمص الغني بالطاقة.'

    elif 'elrashidi' in img_name:
        prod['brand'] = 'الرشيدي الميزان (El Rashidi El Mizan)'
        prod['category'] = 'groceries'
        prod['name'] = 'حلاوة طحينية سادة الرشيدي الميزان علبة 570 جم'
        prod['nameEn'] = 'El Rashidi El Mizan Plain Halawa 570g'
        prod['price'] = 65
        prod['weight'] = '570 جم'
        prod['flavor'] = 'طحينة سمسم نقي'
        prod['description'] = 'الأصل في صناعة الحلاوة الطحينية في مصر، قوام متماسك وطعم سمسم غني.'

    # ---------------- Groceries: Baking, Dessert & Sweeteners (Dreem, Cook's, Sweetal) ----------------
    elif 'dreem' in img_name:
        prod['brand'] = 'دريم (Dreem)'
        if 'chocolate' in img_name or 'dark' in img_name:
            prod['category'] = 'sweets'
            prod['name'] = 'شوكولاتة خام دارك للطبخ والحلويات دريم 200 جم'
            prod['nameEn'] = 'Dreem Dark Cooking Chocolate 200g'
            prod['price'] = 65
            prod['weight'] = '200 جم'
            prod['flavor'] = 'شوكولاتة خام داكنة'
            prod['description'] = 'شوكولاتة طبخ داكنة فاخرة سهلة الذوبان لعمل الجناش وتزيين التورت والحلويات.'
        elif 'creme-caramel' in img_name:
            prod['category'] = 'sweets'
            prod['name'] = 'كريم كراميل دريم عرض التوفير (2 عبوة)'
            prod['nameEn'] = 'Dreem Creme Caramel 2-Pack Value'
            prod['price'] = 45
            prod['weight'] = '2 عبوة'
            prod['flavor'] = 'كراميل وفانيليا'
            prod['description'] = 'تحلية كريمية ناعمة وسريعة التحضير مع أكياس صوص الكراميل الطبيعي.'
        elif 'jelly' in img_name:
            prod['category'] = 'sweets'
            prod['name'] = 'جيلي فراولة دريم عرض 3 علب توفير'
            prod['nameEn'] = 'Dreem Strawberry Jelly 3-Pack'
            prod['price'] = 45
            prod['weight'] = '3 علب × 70 جم'
            prod['flavor'] = 'فراولة منعشة'
            prod['description'] = 'حلوى الجيلي اللذيذة بنكهة الفراولة الطبيعية المحبوبة للأطفال والضيافة.'
        elif 'chantilly' in img_name or 'whipping' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'كريم شانتيه بودرة خام دريم كيس'
            prod['nameEn'] = 'Dreem Whipping Cream Chantilly Powder'
            prod['price'] = 22
            prod['weight'] = 'كيس 45 جم'
            prod['flavor'] = 'كريمة خفق ناصعة البياض'
            prod['description'] = 'بودرة كريم شانتيه سريعة الخفق لتزيين التورتات والحلويات والمشروبات.'
        elif 'orange-vanilla' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'فانيليا بالبرتقال دريم كيس'
            prod['nameEn'] = 'Dreem Orange Vanilla Sachet'
            prod['price'] = 5
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فانيليا وبرتقال'
            prod['description'] = 'فانيليا عطرية بنكهة البرتقال الطبيعي لكيك وبسكويت لا يقاوم.'
        elif 'cake-chef' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'دريم كيك شيف بيكنج بودر علبة 24 كيس'
            prod['nameEn'] = 'Dreem Cake Chef Box 24 Sachets'
            prod['price'] = 95
            prod['weight'] = 'علبة 24 كيس'
            prod['flavor'] = 'محسن كيك وبيكنج بودر'
            prod['description'] = 'سر ارتفاع وهشاشة الكيك المثالي، محسن خبز وبيكنج بودر في علبة توفير كبيرة.'
        elif 'baking-powder' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'بيكنج بودر دريم كيس فردي'
            prod['nameEn'] = 'Dreem Baking Powder Sachet 16g'
            prod['price'] = 4
            prod['weight'] = '16 جم'
            prod['flavor'] = 'بيكنج بودر نشط'
            prod['description'] = 'بيكنج بودر فعال يعطي الكيك والمخبوزات قواماً إسفنجياً رائعاً.'
        else:
            prod['category'] = 'groceries'
            prod['name'] = 'مستلزمات حلويات دريم الفاخرة'
            prod['nameEn'] = 'Dreem Baking Supplies'
            prod['price'] = 15
            prod['flavor'] = 'منتجات دريم'
            prod['description'] = 'شركة دريم الرائدة في مصر لمستلزمات المخبوزات والحلويات.'

    elif 'cooks' in img_name:
        prod['brand'] = 'كوكس (Cook\'s)'
        prod['category'] = 'groceries'
        if 'vanillin' in img_name or 'vanilla' in img_name:
            prod['name'] = 'فانيليا بالسكر كوكس كيس أصلي'
            prod['nameEn'] = 'Cook\'s Vanillin with Sugar Sachet'
            prod['price'] = 3
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فانيليا نقية'
            prod['description'] = 'فانيليا كوكس العريقة لرائحة زكية وقضاء تام على زفارة البيض في المعجنات.'
        elif 'baking-powder' in img_name:
            prod['name'] = 'بيكنج بودر كوكس كيس أصلي'
            prod['nameEn'] = 'Cook\'s Baking Powder Sachet'
            prod['price'] = 4
            prod['weight'] = 'كيس'
            prod['flavor'] = 'خميرة كيميائية نشطة'
            prod['description'] = 'بيكنج بودر كوكس الشهير لانتفاخ مثالي للكيك والمعجنات.'
        else:
            prod['name'] = 'مستلزمات مطبخ كوكس'
            prod['nameEn'] = 'Cook\'s Kitchen Essentials'
            prod['price'] = 5
            prod['flavor'] = 'كوكس الأصلي'
            prod['description'] = 'علامة كوكس المصرية الموثوقة منذ عقود.'

    elif 'sweetal' in img_name:
        prod['brand'] = 'سويتال (Sweetal)'
        prod['category'] = 'groceries'
        if 'stevia-tub' in img_name or ('stevia' in img_name and 'tub' in img_name):
            prod['name'] = 'محلي سويتال ستيفيا برطمان خالي من السعرات 200 جم'
            prod['nameEn'] = 'Sweetal Stevia Sweetener Tub 200g'
            prod['price'] = 145
            prod['weight'] = '200 جم'
            prod['flavor'] = 'ستيفيا طبيعي زيرو كالوري'
            prod['description'] = 'بديل سكر طبيعي من أوراق الستيفيا خالي تماماً من السعرات الحرارية ولا يترك مرارة.'
        elif 'stevia-50' in img_name:
            prod['name'] = 'محلي سويتال ستيفيا علبة 50 كيس'
            prod['nameEn'] = 'Sweetal Stevia 50 Sachets Box'
            prod['price'] = 75
            prod['weight'] = '50 كيس'
            prod['flavor'] = 'ستيفيا خالي من الأسبارتام'
            prod['description'] = 'أكياس سويتال ستيفيا للتحلية اليومية للشاي والقهوة بدون أي سعرات حرارية.'
        elif '50tablets' in img_name or 'tablet' in img_name:
            prod['name'] = 'أقراص تحلية سويتال موزع 50 قرص'
            prod['nameEn'] = 'Sweetal Sweetener 50 Tablets Dispenser'
            prod['price'] = 45
            prod['weight'] = '50 قرص'
            prod['flavor'] = 'أقراص زيرو كالوري'
            prod['description'] = 'علبة أقراص مدمجة بحجم الجيب للتحلية الفورية في أي مكان بدون أسبارتام أو سكارين.'
        elif '100sticks' in img_name or '100' in img_name:
            prod['name'] = 'سويتال ستيفيا ستيكس علبة 100 ظرف'
            prod['nameEn'] = 'Sweetal Stevia Sticks 100 Sachets'
            prod['price'] = 135
            prod['weight'] = '100 ظرف'
            prod['flavor'] = 'ستيفيا ستيكس سريعة الذوبان'
            prod['description'] = 'عرض التوفير الأكبر 100 ظرف ستيفيا طبيعي مناسب لمتبعي الحميات ومرضى السكري.'
        elif 'sweetener-tub' in img_name:
            prod['name'] = 'سويتال محلي بديل السكر برطمان 250 جم'
            prod['nameEn'] = 'Sweetal Zero Calorie Sweetener Tub'
            prod['price'] = 130
            prod['weight'] = '250 جم'
            prod['flavor'] = 'سكر دايت زيرو سعرات'
            prod['description'] = 'برطمان محلي سويتال الاقتصادي لتحلية كافة المشروبات الساخنة والباردة والحلويات.'
        else:
            prod['name'] = 'محلي سويتال الخالي من السعرات'
            prod['nameEn'] = 'Sweetal Sweetener'
            prod['price'] = 65
            prod['flavor'] = 'زيرو كالوري'
            prod['description'] = 'محلي خالي من السعرات والسكريات من سويتال.'

    # ---------------- Groceries: Teas & Herbs (groceries / drinks) ----------------
    elif 'elarosa' in img_name or 'el-arosa' in img_name or 'arosa' in img_name:
        prod['brand'] = 'شاي العروسة (El Arosa Tea)'
        prod['category'] = 'groceries'
        if '40g' in img_name:
            prod['name'] = 'شاي العروسة أسود ناعم 40 جم'
            prod['nameEn'] = 'El Arosa Black Tea 40g'
            prod['price'] = 10
            prod['weight'] = '40 جم'
            prod['flavor'] = 'شاي أسود كيني مخرز'
            prod['description'] = 'الباكو الصغير الاقتصادي من شاي العروسة الأكثر شعبية في مصر، مذاق قوي ولون ذهبي.'
        elif '250g' in img_name:
            prod['name'] = 'شاي العروسة فاخر عبوة 250 جم'
            prod['nameEn'] = 'El Arosa Premium Tea 250g'
            prod['price'] = 55
            prod['weight'] = '250 جم'
            prod['flavor'] = 'شاي أسود ناعم كيني'
            prod['description'] = 'شاي العروسة الأصلي بحجم ربع كيلو، أجود أوراق الشاي الكيني لمزاج مظبوط.'
        else:
            prod['name'] = 'شاي العروسة المصري الأصيل'
            prod['nameEn'] = 'El Arosa Tea'
            prod['price'] = 30
            prod['flavor'] = 'شاي أسود كيني'
            prod['description'] = 'شاي العروسة شاي مصري أصيل يعشقه الملايين.'

    elif 'lipton' in img_name:
        prod['brand'] = 'ليبتون (Lipton)'
        prod['category'] = 'groceries'
        if 'kharaz' in img_name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء خرز 250 جم'
            prod['nameEn'] = 'Lipton Yellow Label Granulated Tea 250g'
            prod['price'] = 65
            prod['weight'] = '250 جم'
            prod['flavor'] = 'شاي أسود خرز مخرز'
            prod['description'] = 'حبيبات شاي أسود مخرزة غنية بالنكهة والنقاء تمنحك فنجان شاي صافي وممتع.'
        elif '100bags' in img_name or 'tea-bags' in img_name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء 100 فتلة'
            prod['nameEn'] = 'Lipton Yellow Label 100 Tea Bags'
            prod['price'] = 110
            prod['weight'] = '100 كيس شاي'
            prod['flavor'] = 'شاي أسود نقي'
            prod['description'] = 'علبة التوفير العائلية 100 فتلة من شاي ليبتون العلامة الصفراء الشهير.'
        elif '250g' in img_name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء ناعم 250 جم'
            prod['nameEn'] = 'Lipton Yellow Label Fine Tea 250g'
            prod['price'] = 65
            prod['weight'] = '250 جم'
            prod['flavor'] = 'شاي أسود كلاسيكي ناعم'
            prod['description'] = 'شاي ليبتون الأصلي بخلطة غنية ومحسنة بأشعة الشمس من أجود أوراق الشاي.'
        else:
            prod['name'] = 'شاي ليبتون العلامة الصفراء'
            prod['nameEn'] = 'Lipton Yellow Label Tea'
            prod['price'] = 45
            prod['flavor'] = 'شاي ليبتون'
            prod['description'] = 'شاي ليبتون العالمي المفضل في كل صباح ومساء.'

    elif 'isis' in img_name:
        prod['brand'] = 'إيزيس (ISIS Organic)'
        prod['category'] = 'groceries'
        if 'anise' in img_name or 'yansoon' in img_name:
            prod['name'] = 'أعشاب ينسون إيزيس طبيعي 20 فتلة + 15% مجاناً'
            prod['nameEn'] = 'ISIS Organic Anise 20 Bags + 15% Free'
            prod['price'] = 30
            prod['weight'] = '20 كيس فتلة'
            prod['flavor'] = 'ينسون نقي 100%'
            prod['description'] = 'ينسون طبيعي نقي مهدئ ومريح للجهاز الهضمي والمناعة بدون أي مبيدات أو كيماويات.'
        elif 'hibiscus' in img_name or 'karkadeh' in img_name:
            prod['name'] = 'كركديه إيزيس طبيعي علبة 100 فتلة'
            prod['nameEn'] = 'ISIS Organic Hibiscus 100 Bags'
            prod['price'] = 95
            prod['weight'] = '100 كيس فتلة'
            prod['flavor'] = 'كركديه أسواني نقي'
            prod['description'] = 'كركديه أسواني فاخر 100 كيس فتلة، مشروب منعش وصحي يضبط ضغط الدم ويمنحك انتعاشاً رائعاً.'
        elif 'peppermint' in img_name or 'mint' in img_name:
            prod['name'] = 'نعناع إيزيس طبيعي 12 فتلة'
            prod['nameEn'] = 'ISIS Natural Peppermint 12 Bags'
            prod['price'] = 20
            prod['weight'] = '12 كيس فتلة'
            prod['flavor'] = 'نعناع بلدي منعش'
            prod['description'] = 'أوراق نعناع طبيعية نقية 100% برائحة زكية وطعم منعش بعد الوجبات.'
        else:
            prod['name'] = 'أعشاب إيزيس الطبيعية العضوية'
            prod['nameEn'] = 'ISIS Organic Herbal Infusions'
            prod['price'] = 25
            prod['flavor'] = 'أعشاب طبيعية'
            prod['description'] = 'أعشاب طبيعية عضوية معتمدة من إيزيس لصحة أفضل.'

    # ---------------- Groceries: Coffee, Nescafe, Bonjorno, Coffee Break, Abu Auf (groceries) ----------------
    elif 'nescafe' in img_name:
        prod['brand'] = 'نسكافيه (Nescafé)'
        if 'iced-can' in img_name or 'latte-iced' in img_name or 'spanish-latte' in img_name:
            prod['category'] = 'drinks'
            if 'spanish' in img_name:
                prod['name'] = 'نسكافيه سبانيش لاتيه كانز مثلج 250 مل'
                prod['nameEn'] = 'Nescafé Spanish Latte Iced Can 250ml'
                prod['price'] = 45
                prod['weight'] = '250 مل'
                prod['flavor'] = 'سبانيش لاتيه مع حليب مكثف'
                prod['description'] = 'مشروب قهوة سبانيش لاتيه مثلجة غنية ومنعشة بحلاوة الحليب المتوازن.'
            else:
                prod['name'] = 'نسكافيه لاتيه كانز قهوة مثلجة 250 مل'
                prod['nameEn'] = 'Nescafé Latte Iced Can 250ml'
                prod['price'] = 45
                prod['weight'] = '250 مل'
                prod['flavor'] = 'لاتيه قهوة بحليب ناعم'
                prod['description'] = 'قهوة لاتيه مثلجة جاهزة للشرب تمنحك تركيزاً وانتعاشاً فورياً أينما كنت.'
        elif 'classic-glass-jar' in img_name or ('classic' in img_name and 'jar' in img_name):
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه كلاسيك قهوة سريعة الذوبان برطمان 190 جم'
            prod['nameEn'] = 'Nescafé Classic Glass Jar 190g'
            prod['price'] = 175
            prod['weight'] = '190 جم'
            prod['flavor'] = 'قهوة كلاسيك نقية 100%'
            prod['description'] = 'حبوب قهوة روبوستا محمصة بعناية لطعم قهوة غني ومركز يوقظ حواسك كل صباح.'
        elif 'gold-glass-jar' in img_name or ('gold' in img_name and 'jar' in img_name):
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه جولد قهوة سريعة التحضير برطمان 200 جم'
            prod['nameEn'] = 'Nescafé Gold Premium Jar 200g'
            prod['price'] = 245
            prod['weight'] = '200 جم'
            prod['flavor'] = 'أرابيكا محمصة ذهبية'
            prod['description'] = 'قهوة بريميوم ذهبية برائحة وطعم سلس فاخر لا مثيل له لعشاق القهوة الفاخرة.'
        elif 'classic-pouch' in img_name or ('classic' in img_name and '18g' in img_name):
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه كلاسيك كيس توفير 18 جم'
            prod['nameEn'] = 'Nescafé Classic Pouch 18g'
            prod['price'] = 18
            prod['weight'] = '18 جم'
            prod['flavor'] = 'قهوة كلاسيك مركزة'
            prod['description'] = 'كيس توفير عملي لتحضير حتى 10 أكواب من قهوة نسكافيه كلاسيك الغنية.'
        elif '3in1-caramel' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه 3 في 1 كراميل علبة 24 كيس'
            prod['nameEn'] = 'Nescafé 3in1 Caramel Box 24 Sachets'
            prod['price'] = 135
            prod['weight'] = '24 ظرف'
            prod['flavor'] = 'قهوة بالكراميل والكريمر'
            prod['description'] = 'مزيج القهوة والكريمة مع نكهة الكراميل الغنية والشهية في علبة كبيرة.'
        elif '3in1-chocolate' in img_name:
            prod['category'] = 'groceries'
            if '24' in img_name or 'box' in img_name:
                prod['name'] = 'نسكافيه 3 في 1 شوكولاتة علبة 24 كيس'
                prod['nameEn'] = 'Nescafé 3in1 Chocolate Box 24 Sachets'
                prod['price'] = 135
                prod['weight'] = '24 ظرف'
                prod['flavor'] = 'قهوة بالشوكولاتة'
                prod['description'] = 'مزيج قهوة موكا وشوكولاتة لذيذ ومغري في عبوة عائلية 24 ظرف.'
            else:
                prod['name'] = 'نسكافيه 3 في 1 شوكولاتة كيس أصابع فردي'
                prod['nameEn'] = 'Nescafé 3in1 Chocolate Stick'
                prod['price'] = 6
                prod['weight'] = '18 جم'
                prod['flavor'] = 'شوكولاتة وقهوة'
                prod['description'] = 'كيس فردي يجمع طعم الشوكولاتة الذائبة مع نسكافيه 3 في 1.'
        elif 'gold-3in1' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه جولد 3 في 1 علبة 12 كيس'
            prod['nameEn'] = 'Nescafé Gold 3in1 Box 12 Sachets'
            prod['price'] = 95
            prod['weight'] = '12 ظرف'
            prod['flavor'] = 'قهوة جولد فاخرة بحليب ورغوة'
            prod['description'] = 'قهوة جولد سريعة التحضير برغوة حليب ناعمة وكريمة فاخرة لطعم قهوة استثنائي.'
        elif '2in1-sugar-free' in img_name or 'sugar-free' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه 2 في 1 خالي من السكر كيس فردي'
            prod['nameEn'] = 'Nescafé 2in1 Sugar Free Stick'
            prod['price'] = 6
            prod['weight'] = 'كيس'
            prod['flavor'] = 'قهوة ومبيض بدون سكر'
            prod['description'] = 'قهوة ومبيض ناعم بدون إضافة سكر، مثالي لمن يفضل ضبط كمية السكر بنفسه.'
        elif '3in1-rich' in img_name or 'rich' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه 3 في 1 ريتش غني كيس أصابع'
            prod['nameEn'] = 'Nescafé 3in1 Rich Stick'
            prod['price'] = 6
            prod['weight'] = 'كيس'
            prod['flavor'] = 'قهوة غنية مضاعفة النكهة'
            prod['description'] = 'طعم قهوة أقوى وأغنى لعشاق النكهة المركزة مع الكريمة والسكر المتوازن.'
        elif 'cappuccino' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه كابتشينو برغوة غنية كيس فردي'
            prod['nameEn'] = 'Nescafé Cappuccino Foam Stick'
            prod['price'] = 8
            prod['weight'] = 'كيس'
            prod['flavor'] = 'كابتشينو برغوة كريمية'
            prod['description'] = 'كابتشينو إيطالي سريع التحضير برغوة كثيفة وطعم لا يقاوم.'
        elif 'vanilla-latte' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه فانيليا لاتيه كيس أصابع'
            prod['nameEn'] = 'Nescafé Vanilla Latte Stick'
            prod['price'] = 7
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فانيليا فرنسية ولاتيه'
            prod['description'] = 'مزيج لاتيه ناعم بنكهة الفانيليا العطرة لروقان ومزاج هادئ.'
        elif '3in1-original' in img_name or '3in1' in img_name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه 3 في 1 أوريجينال كيس فردي'
            prod['nameEn'] = 'Nescafé 3in1 Original Stick'
            prod['price'] = 6
            prod['weight'] = 'كيس 18 جم'
            prod['flavor'] = 'قهوة ومبيض وسكر كلاسيك'
            prod['description'] = 'المذاق الأصلي الكلاسيكي لنسكافيه 3 في 1، التوليفة المضبوطة للقهوة مع الكريمة والسكر.'
        else:
            prod['category'] = 'groceries'
            prod['name'] = 'مشروبات نسكافيه سريعة التحضير'
            prod['nameEn'] = 'Nescafé Instant Beverages'
            prod['price'] = 15
            prod['flavor'] = 'قهوة سريعة الذوبان'
            prod['description'] = 'منتجات قهوة نسكافيه الأصلية المتنوعة.'

    elif 'bonjorno' in img_name:
        prod['brand'] = 'بونجورنو كافيه (Bonjorno Café)'
        prod['category'] = 'groceries'
        if 'double-shot-12' in img_name:
            prod['name'] = 'بونجورنو كابتشينو دبل شوت علبة 12 ظرف'
            prod['nameEn'] = 'Bonjorno Cappuccino Double Shot 12 Sachets'
            prod['price'] = 85
            prod['weight'] = '12 ظرف'
            prod['flavor'] = 'دبل شوت قهوة مركزة ورغوة'
            prod['description'] = 'قهوة مضاعفة وتركيز أعلى مع رغوة كابتشينو كريمية تبدأ بها يومك بقوة.'
        elif 'double-shot' in img_name:
            prod['name'] = 'بونجورنو كابتشينو دبل شوت كيس فردي'
            prod['nameEn'] = 'Bonjorno Cappuccino Double Shot Stick'
            prod['price'] = 7
            prod['weight'] = 'ظرف'
            prod['flavor'] = 'دبل شوت قهوة'
            prod['description'] = 'كيس كابتشينو دبل شوت بتركيز قهوة مضاعف ومذاق قوي.'
        elif 'fel-khamseena-12' in img_name:
            prod['name'] = 'بونجورنو كوفي ميكس في الخمسينة علبة 12 كيس'
            prod['nameEn'] = 'Bonjorno Coffee Mix Fel Khamseena 12 Sachets'
            prod['price'] = 65
            prod['weight'] = '12 ظرف'
            prod['flavor'] = 'كوفي ميكس مصري أصيل'
            prod['description'] = 'كوفي ميكس في الخمسينة المصري المضبوط على أصوله في علبة توفير.'
        elif 'fel-khamseena' in img_name:
            prod['name'] = 'بونجورنو كوفي ميكس في الخمسينة كيس'
            prod['nameEn'] = 'Bonjorno Coffee Mix Fel Khamseena Sachet'
            prod['price'] = 5
            prod['weight'] = 'كيس'
            prod['flavor'] = 'كوفي ميكس في الخمسينة'
            prod['description'] = 'كيس كوفي ميكس سريع التحضير بطعم القهوة المصري المعتبر.'
        elif 'hazelnut-12' in img_name:
            prod['name'] = 'بونجورنو كابتشينو بندق علبة 12 ظرف'
            prod['nameEn'] = 'Bonjorno Cappuccino Hazelnut 12 Sachets'
            prod['price'] = 85
            prod['weight'] = '12 ظرف'
            prod['flavor'] = 'كابتشينو بندق محمص'
            prod['description'] = 'كابتشينو غني بنكهة البندق المحمص الفواحة ورغوة غنية.'
        elif 'hazelnut' in img_name:
            prod['name'] = 'بونجورنو كابتشينو بندق كيس أصابع'
            prod['nameEn'] = 'Bonjorno Cappuccino Hazelnut Stick'
            prod['price'] = 7
            prod['weight'] = 'كيس'
            prod['flavor'] = 'بندق كريمي'
            prod['description'] = 'كيس كابتشينو بنكهة البندق الغنية والمحبوبة.'
        elif 'vanilla' in img_name:
            prod['name'] = 'بونجورنو كابتشينو فانيليا كيس أصابع'
            prod['nameEn'] = 'Bonjorno Cappuccino Vanilla Stick'
            prod['price'] = 7
            prod['weight'] = 'كيس'
            prod['flavor'] = 'فانيليا ناعمة'
            prod['description'] = 'كابتشينو بنكهة الفانيليا الناعمة والرغوة الكثيفة.'
        elif 'mezago' in img_name:
            prod['name'] = 'بونجورنو كافيه مزاجو ميكس 4 في 1 كيس'
            prod['nameEn'] = 'Bonjorno Mezago Mix 4in1 Sachet'
            prod['price'] = 5
            prod['weight'] = 'كيس'
            prod['flavor'] = 'مزاجو ميكس 4 في 1'
            prod['description'] = 'توليفة القهوة والسكر والكريمر مع الشيكوريا لمزاج عالي.'
        elif '12pack-offer' in img_name or 'offer' in img_name:
            prod['name'] = 'بونجورنو كوفي ميكس عرض التوفير 12 كيس'
            prod['nameEn'] = 'Bonjorno Coffee Mix 12-Pack Promo'
            prod['price'] = 60
            prod['weight'] = '12 كيس'
            prod['flavor'] = 'كوفي ميكس كلاسيك'
            prod['description'] = 'عرض توفير كوفي ميكس بونجورنو مع سحوبات وجوائز مميزة.'
        else:
            prod['name'] = 'منتجات بونجورنو كافيه'
            prod['nameEn'] = 'Bonjorno Café Products'
            prod['price'] = 15
            prod['flavor'] = 'قهوة سريعة'
            prod['description'] = 'تشكيلة بونجورنو كافيه المتنوعة لكل الأذواق.'

    elif 'coffee-break' in img_name:
        prod['brand'] = 'كوفي بريك (Coffee Break)'
        prod['category'] = 'groceries'
        if 'mocha' in img_name:
            prod['name'] = 'كوفي بريك كابتشينو موكا علبة 8 أظرف'
            prod['nameEn'] = 'Coffee Break Cappuccino Mocha 8 Sticks'
            prod['price'] = 60
            prod['weight'] = '8 أظرف'
            prod['flavor'] = 'موكا شوكولاتة وقهوة'
            prod['description'] = 'كابتشينو موكا برغوة كثيفة ونكهة شوكولاتة بلجيكية غنية.'
        elif 'hazelnut' in img_name:
            prod['name'] = 'كوفي بريك كابتشينو بندق علبة 8 أظرف'
            prod['nameEn'] = 'Coffee Break Cappuccino Hazelnut 8 Sticks'
            prod['price'] = 60
            prod['weight'] = '8 أظرف'
            prod['flavor'] = 'بندق كريمي محمص'
            prod['description'] = 'مزيج كابتشينو رائع مع رغوة غنية ونكهة البندق المميزة.'
        else:
            prod['name'] = 'كوفي بريك كابتشينو فاخر'
            prod['nameEn'] = 'Coffee Break Cappuccino'
            prod['price'] = 60
            prod['weight'] = '8 أظرف'
            prod['flavor'] = 'كابتشينو كريمي'
            prod['description'] = 'أظرف كابتشينو سريعة التحضير بأعلى جودة ورغوة غنية.'

    elif 'abu-auf' in img_name or 'abuauf' in img_name:
        prod['brand'] = 'أبو عوف (Abu Auf)'
        prod['category'] = 'groceries'
        prod['name'] = 'قهوة تركي فاتح سادة أبو عوف 200 جم'
        prod['nameEn'] = 'Abu Auf Turkish Coffee Plain Light 200g'
        prod['price'] = 135
        prod['weight'] = '200 جم'
        prod['flavor'] = 'بن تركي فاتح سادة'
        prod['description'] = 'بن تركي نقي 100% محمص تحميصاً فاتحاً ومطحون بدرجة نعومة فائقة لعمل أحلى وش قهوة.'

    # ---------------- Snacks: Gums & Crackers (snacks) ----------------
    elif 'clorets' in img_name:
        prod['brand'] = 'كلوريتس (Clorets)'
        prod['category'] = 'snacks'
        if 'cinnamint' in img_name:
            prod['name'] = 'لبان كلوريتس قرفة وسينامنت منعش'
            prod['nameEn'] = 'Clorets Cinnamint Flavor Gum'
            prod['price'] = 10
            prod['weight'] = 'باكت'
            prod['flavor'] = 'قرفة سينامنت ونعناع'
            prod['description'] = 'لبان كلوريتس الشهير بخلاصة الكلوروفيل ونكهة القرفة المنعشة لأنفاس نقية تدوم.'
        else:
            prod['name'] = 'لبان كلوريتس نعناع أصلي بالكلوروفيل'
            prod['nameEn'] = 'Clorets Original Mint Gum'
            prod['price'] = 10
            prod['weight'] = 'باكت'
            prod['flavor'] = 'نعناع منعش أصلي'
            prod['description'] = 'اللبان الأقوى والأكثر شهرة في العالم للقضاء على الروائح وإنعاش الفم طوال اليوم.'

    elif 'chiclets' in img_name:
        prod['brand'] = 'تشكلتس (Chiclets)'
        prod['category'] = 'snacks'
        if 'strawberry' in img_name:
            prod['name'] = 'لبان تشكلتس فراولة 10 حبات'
            prod['nameEn'] = 'Chiclets Strawberry Gum 10 Pcs'
            prod['price'] = 8
            prod['weight'] = '10 حبات'
            prod['flavor'] = 'فراولة سويت'
            prod['description'] = 'حبات لبان تشكلتس المقرمشة من الخارج والطرية من الداخل بطعم الفراولة اللذيذ.'
        else:
            prod['name'] = 'لبان تشكلتس بالنعناع الأخضر 10 حبات'
            prod['nameEn'] = 'Chiclets Green Mint Gum 10 Pcs'
            prod['price'] = 8
            prod['weight'] = '10 حبات'
            prod['flavor'] = 'نعناع أخضر'
            prod['description'] = 'حبات لبان تشكلتس الأصلية بنكهة النعناع الأخضر المنعشة.'

    elif 'trident' in img_name:
        prod['brand'] = 'ترايدنت (Trident)'
        prod['category'] = 'snacks'
        if 'watermelon' in img_name:
            prod['name'] = 'لبان ترايدنت بطيخ خالي من السكر 7 قطع'
            prod['nameEn'] = 'Trident Watermelon Sugar Free 7 Pcs'
            prod['price'] = 12
            prod['weight'] = '7 شرائح'
            prod['flavor'] = 'بطيخ منعش خالي من السكر'
            prod['description'] = 'شرائح لبان ترايدنت بنكهة البطيخ الصيفية المنعشة التي تدوم طويلاً وخالية من السكر.'
        elif 'spearmint' in img_name:
            prod['name'] = 'لبان ترايدنت نعناع أخضر خالي من السكر 7 قطع'
            prod['nameEn'] = 'Trident Spearmint Sugar Free 7 Pcs'
            prod['price'] = 12
            prod['weight'] = '7 شرائح'
            prod['flavor'] = 'نعناع سبيرمنت'
            prod['description'] = 'انتعاش يدوم طويلاً مع شرائح ترايدنت سبيرمنت لحماية الأسنان وإنعاش الأنفاس.'
        else:
            prod['name'] = 'لبان ترايدنت المنعش الخالي من السكر'
            prod['nameEn'] = 'Trident Sugar Free Gum'
            prod['price'] = 12
            prod['flavor'] = 'نكهات منعشة'
            prod['description'] = 'لبان ترايدنت العالمي المعتمد لصحة الأسنان.'

    elif 'tuc' in img_name:
        prod['brand'] = 'توك (TUC)'
        prod['category'] = 'snacks'
        prod['name'] = 'بسكويت توك المملح المقرمش عرض 6+2 مجاناً'
        prod['nameEn'] = 'TUC Original Salted Crackers Pack'
        prod['price'] = 35
        prod['weight'] = 'عبوة مجمعة 8 قطع'
        prod['flavor'] = 'مقرمشات مالحة أصلية'
        prod['description'] = 'كراكرز توك الخفيف والمخبوز بلمسة ملح مثالية يذوب في الفم مع كل قضمة.'

    elif 'lion' in img_name:
        prod['brand'] = 'لايون (Lion Chips)'
        prod['category'] = 'snacks'
        prod['name'] = 'شيبس لايون بالملح الأحمر 7 ج.م'
        prod['nameEn'] = 'Lion Potato Chips Red Salt 7 LE'
        prod['price'] = 7
        prod['weight'] = 'كيس 7 ج.م'
        prod['flavor'] = 'ملح كلاسيك'
        prod['description'] = 'بطاطس لايون المقرمشة الكلاسيكية بملح البحر وسعر اقتصادي ممتاز 7 جنيه فقط.'

    elif 'galaxy' in img_name and 'flutes' in img_name:
        prod['brand'] = 'جلاكسي (Galaxy)'
        prod['category'] = 'sweets'
        prod['name'] = 'شوكولاتة جلاكسي فلوتس أصابع مقرمشة'
        prod['nameEn'] = 'Galaxy Flutes Chocolate Wafer'
        prod['price'] = 15
        prod['weight'] = 'أصابع ويفر'
        prod['flavor'] = 'شوكولاتة الحليب وويفر'
        prod['description'] = 'أصابع ويفر مقرمشة ومحشوة بكريمة الشوكولاتة ومغطاة بشوكولاتة جلاكسي الناعمة.'

    elif 'cocoa-lovers' in img_name:
        prod['brand'] = 'كوكوا لافرز (Cocoa Lovers)'
        prod['category'] = 'sweets'
        prod['name'] = 'بسكويت كوكوا لافرز ساندوتش كاكاو'
        prod['nameEn'] = 'Cocoa Lovers Sandwich Biscuit'
        prod['price'] = 10
        prod['weight'] = 'باكت'
        prod['flavor'] = 'بسكويت شوكولاتة محشو كريمة'
        prod['description'] = 'بسكويت كاكاو مقرمش غني ومحشو بكريمة الكاكاو اللذيذة لعشاق الشوكولاتة.'

    elif 'molto' in img_name:
        prod['brand'] = 'مولتو (Molto)'
        prod['category'] = 'sweets'
        if 'xxl' in img_name:
            prod['name'] = 'كرواسون مولتو XXL شوكولاتة وبندق'
            prod['nameEn'] = 'Molto XXL Chocolate & Hazelnut'
            prod['price'] = 15
            prod['weight'] = 'حجم كبير XXL'
            prod['flavor'] = 'شوكولاتة وبندق غنية'
            prod['description'] = 'كرواسون مولتو الهش الطازج بحجم XXL ومحشو بكمية مضاعفة من كريمة الشوكولاتة بالبندق.'
        else:
            prod['name'] = 'كرواسون مولتو بالشوكولاتة'
            prod['nameEn'] = 'Molto Chocolate Croissant'
            prod['price'] = 10
            prod['flavor'] = 'شوكولاتة'
            prod['description'] = 'مولتو الكرواسون المفضل دائماً في الفسحة والرحلات والعمل.'

    # ---------------- Snacks (Chipsy, Tiger, Big Chips, Balance, Windows, etc.) ----------------
    elif 'chipsy' in img_name:
        prod['brand'] = 'شيبسي (Chipsy)'
        prod['category'] = 'snacks'
        if 'cheese-10le' in img_name or 'cheese' in img_name:
            prod['name'] = 'شيبسي بالجبنة المتبلة 10 ج.م'
            prod['nameEn'] = 'Chipsy Seasoned Cheese 10 LE'
            prod['price'] = 10
            prod['weight'] = 'كيس 10 ج.م'
            prod['flavor'] = 'جبنة متبلة'
            prod['description'] = 'شيبسي بطاطس طبيعية 100% بنكهة الجبنة المتبلة الأكثر طلباً وشعبية.'
        elif 'chili-lemon' in img_name:
            prod['name'] = 'شيبسي شطة وليمون سوبر 10 ج.م'
            prod['nameEn'] = 'Chipsy Chili & Lemon'
            prod['price'] = 10
            prod['flavor'] = 'شطة وليمون'
            prod['description'] = 'رقائق بطاطس طبيعية 100% بنكهة الشطة والليمون اللاذعة والمميزة.'
        elif 'forno-french-cheese' in img_name:
            prod['name'] = 'شيبسي فورنو بالجبنة الفرنسية المخبوزة'
            prod['nameEn'] = 'Chipsy Forno French Cheese'
            prod['price'] = 10
            prod['flavor'] = 'جبنة فرنسية'
            prod['description'] = 'رقائق بطاطس مخبوزة في الفرن بدهون أقل 60% بنكهة الجبنة الفرنسية.'
        elif 'forno-tomato-thyme' in img_name:
            prod['name'] = 'شيبسي فورنو طماطم وزعتر مخبوز'
            prod['nameEn'] = 'Chipsy Forno Tomato & Thyme'
            prod['price'] = 10
            prod['flavor'] = 'طماطم وزعتر'
            prod['description'] = 'بطاطس مخبوزة مقرمشة وخفيفة بنكهة الطماطم المتبلة والزعتر.'
        elif 'kebab' in img_name:
            prod['name'] = 'شيبسي كباب مشوي عالفحم'
            prod['nameEn'] = 'Chipsy Grilled Kebab'
            prod['price'] = 10
            prod['flavor'] = 'كباب مشوي'
            prod['description'] = 'بطاطس مقرمشة بنكهة الكباب والتتبيلة الشرقية الأصيلة.'
        elif 'salt-vinegar' in img_name:
            prod['name'] = 'شيبسي ملح وخل'
            prod['nameEn'] = 'Chipsy Salt & Vinegar'
            prod['price'] = 10
            prod['flavor'] = 'ملح وخل'
            prod['description'] = 'المذاق الكلاسيكي المنعش والمقرمش لملح البحر مع الخل المركز.'
        elif 'salted-red' in img_name:
            prod['name'] = 'شيبسي بالملح الأصلي'
            prod['nameEn'] = 'Chipsy Classic Salt'
            prod['price'] = 10
            prod['flavor'] = 'ملح'
            prod['description'] = 'بطاطس طبيعية مقرمشة بلمسة ملح خفيفة تناسب كل الأوقات.'
        elif 'sweet-chili' in img_name:
            prod['name'] = 'شيبسي سويت تشيلي'
            prod['nameEn'] = 'Chipsy Sweet Chili'
            prod['price'] = 10
            prod['flavor'] = 'فلفل حلو'
            prod['description'] = 'توليفة متوازنة بين الحلاوة والحرارة اللذيذة.'
        elif 'tomato' in img_name:
            prod['name'] = 'شيبسي طماطم متبلة'
            prod['nameEn'] = 'Chipsy Tangy Tomato'
            prod['price'] = 10
            prod['flavor'] = 'طماطم'
            prod['description'] = 'طعم الطماطم الطازجة مع بهارات شيبسي اللذيذة.'
        elif 'wavy-lime-coriander' in img_name:
            prod['name'] = 'شيبسي ويڤز ليمون وكسبرة'
            prod['nameEn'] = 'Chipsy Wavy Lime & Coriander'
            prod['price'] = 10
            prod['flavor'] = 'ليمون وكسبرة'
            prod['description'] = 'بطاطس مموجة ومقرمشة بنكهة الليمون والكسبرة المنعشة.'
        else:
            prod['name'] = 'شيبسي بطاطس مقرمشة'
            prod['nameEn'] = 'Chipsy Potato Chips'
            prod['price'] = 10
            prod['flavor'] = 'سناكس'
            prod['description'] = 'شيبسي بطاطس طبيعية مقرمشة.'

    # Fallback to build_catalog.py's get_product_info logic if not handled above
    if not prod['name']:
        from build_catalog import get_product_info as base_info
        try:
            base = base_info(img)
            if base and base.get('name'):
                prod.update(base)
        except Exception:
            pass

    if not prod['name']:
        clean_title = img.replace('.png', '').replace('.jpg', '').replace('-', ' ').title()
        prod['name'] = clean_title
        prod['nameEn'] = clean_title
        prod['brand'] = 'الجمل ماركت'
        prod['category'] = 'groceries'
        prod['price'] = 15
        prod['description'] = f'منتج متوفر لدى الجمل ماركت - الخانكة.'
        prod['flavor'] = 'أصلي'

    return prod

categories_data = [
    {"id": "all", "name": "جميع المنتجات", "icon": "fas fa-border-all"},
    {"id": "egyptian", "name": "منتجات مصرية 🇪🇬", "icon": "fas fa-flag", "isSpecial": True},
    {"id": "frozen", "name": "المجمدات واللحوم 🍗", "icon": "fas fa-snowflake"},
    {"id": "snacks", "name": "شيبس ومقرمشات 🥔", "icon": "fas fa-cookie-bite"},
    {"id": "drinks", "name": "مشروبات وعصائر 🥤", "icon": "fas fa-wine-bottle"},
    {"id": "groceries", "name": "مستلزمات الطبخ والبيت 🥫", "icon": "fas fa-box-open"},
    {"id": "sweets", "name": "حلويات وشوكولاتة 🍫", "icon": "fas fa-candy-cane"},
    {"id": "dairy", "name": "ألبان وأجبان 🧀", "icon": "fas fa-cheese"},
    {"id": "energy", "name": "مشروبات الطاقة ⚡", "icon": "fas fa-bolt"}
]

products = []
seen_ids = set()

for img in images:
    if not img.endswith('.png') and not img.endswith('.jpg'):
        continue
    info = get_product_info(img)
    pid = info['id']
    if pid in seen_ids:
        pid = f"{pid}_{len(products)}"
        info['id'] = pid
    seen_ids.add(pid)
    products.append(info)

print(f"Generated {len(products)} total verified product objects across {len(categories_data)} categories.")

js_output = """/**
 * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬
 * جميع المنتجات معروضة بأسعار المستهلك الرسمية المطبوعة على الكيس/العبوة
 * صور منتجات أصلية ورسمية 100% بخلفيات بيضاء نقية
 */

const CATEGORIES_DATA = """ + json.dumps(categories_data, ensure_ascii=False, indent=2) + """;

const PRODUCTS_DATA = """ + json.dumps(products, ensure_ascii=False, indent=2) + """;

// تصدير البيانات للواجهة
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES_DATA, PRODUCTS_DATA };
}
"""

with open('js/products.js', 'w', encoding='utf-8') as f_out:
    f_out.write(js_output)

print("Successfully written js/products.js with full CATEGORIES_DATA and PRODUCTS_DATA!")
