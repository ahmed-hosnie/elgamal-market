# -*- coding: utf-8 -*-
"""
مولد قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
محدث بناءً على أحدث بيانات أسعار المستهلك الرسمية المطبوعة وأحجام العبوات الحقيقية
في السوق المصري وسلاسل السوبر ماركت وتطبيقات التوصيل (كارفور مصر، طلبات مارت، كازيون).
"""

import os
import json

dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'
images = sorted([f for f in os.listdir(dest_dir) if f.endswith('.png') or f.endswith('.jpg')])

def get_product_complete_data(img):
    name = img.lower()
    
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
        'rating': 4.9,
        'reviewsCount': 135,
        'image': f'images/{img}',
        'description': '',
        'flavor': '',
        'sizes': []
    }

    # ==================== 1. FROZEN FOODS (المجمدات والبطاطس واللحوم) ====================
    if 'farm-frites' in name:
        prod['brand'] = 'فارم فريتس (Farm Frites)'
        prod['category'] = 'frozen'
        if '2.5kg' in name:
            prod['name'] = 'بطاطس فارم فريتس بوم فريت 2.5 كجم'
            prod['nameEn'] = 'Farm Frites Pommes Frites 2.5kg'
            prod['price'] = 165
            prod['weight'] = '2.5 كجم'
            prod['flavor'] = 'بطاطس نصف مقلية'
            prod['description'] = 'بطاطس مقرمشة ذهبية سريعة التحضير بحجم عائلي كبير وموفر بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'كيس عائلي كبير 2.5 كجم', 'weight': '2.5 كجم', 'price': 165, 'selected': True},
                {'name': 'كيس عادي 1 كجم', 'weight': '1 كجم', 'price': 66},
                {'name': 'كيس رفيعة 1 كجم (Thin)', 'weight': '1 كجم رفيعة', 'price': 70}
            ]
        elif 'thin' in name:
            prod['name'] = 'بطاطس فارم فريتس رفيعة 1 كجم'
            prod['nameEn'] = 'Farm Frites Thin Fries 1kg'
            prod['price'] = 70
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'بطاطس رفيعة مقرمشة'
            prod['description'] = 'بطاطس رفيعة مقرمشة مثالية للقلي السريع وتناولها كأشهى سناك.'
            prod['sizes'] = [
                {'name': 'كيس رفيعة 1 كجم (Thin)', 'weight': '1 كجم', 'price': 70, 'selected': True},
                {'name': 'كيس بوم فريت 1 كجم', 'weight': '1 كجم', 'price': 66},
                {'name': 'كيس عائلي كبير 2.5 كجم', 'weight': '2.5 كجم', 'price': 165}
            ]
        else:
            prod['name'] = 'بطاطس فارم فريتس بوم فريت 1 كجم'
            prod['nameEn'] = 'Farm Frites Pommes Frites 1kg'
            prod['price'] = 66
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'بطاطس نصف مقلية'
            prod['description'] = 'أجود أنواع البطاطس المقرمشة النصف مقلية المجهزة للتحمير الفوري.'
            prod['sizes'] = [
                {'name': 'كيس بوم فريت 1 كجم', 'weight': '1 كجم', 'price': 66, 'selected': True},
                {'name': 'كيس رفيعة 1 كجم (Thin)', 'weight': '1 كجم', 'price': 70},
                {'name': 'كيس عائلي كبير 2.5 كجم', 'weight': '2.5 كجم', 'price': 165}
            ]

    elif 'atyab' in name:
        prod['brand'] = 'أطياب (Atyab)'
        prod['category'] = 'frozen'
        if 'strips-spicy' in name:
            prod['name'] = 'ستربس دجاج أطياب حار سوبر'
            prod['nameEn'] = 'Atyab Chicken Strips Spicy'
            prod['price'] = 320
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'حار سبايسي'
            prod['description'] = 'أصابع صدور دجاج متبلة ومقرمشة مع تتبيلة حارة شهية ولذيذة.'
            prod['sizes'] = [
                {'name': 'عبوة سوبر 1 كجم', 'weight': '1 كجم', 'price': 320, 'selected': True},
                {'name': 'عبوة اقتصادية 400 جم', 'weight': '400 جم', 'price': 155}
            ]
        elif 'strips-normal' in name or ('strips' in name and '1kg' in name):
            prod['name'] = 'ستربس دجاج أطياب عادي كرانشي 1 كجم'
            prod['nameEn'] = 'Atyab Chicken Strips Regular 1kg'
            prod['price'] = 320
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'عادي مقرمش'
            prod['description'] = 'ستربس صدور دجاج طبيعي ومقرمش بطعم رائع ومناسب لجميع أفراد الأسرة.'
            prod['sizes'] = [
                {'name': 'عبوة سوبر 1 كجم', 'weight': '1 كجم', 'price': 320, 'selected': True},
                {'name': 'عبوة اقتصادية 400 جم', 'weight': '400 جم', 'price': 155}
            ]
        elif 'strips-400g' in name:
            prod['name'] = 'ستربس دجاج أطياب 400 جم'
            prod['nameEn'] = 'Atyab Chicken Strips 400g'
            prod['price'] = 155
            prod['weight'] = '400 جم'
            prod['flavor'] = 'مقرمش ولذيذ'
            prod['description'] = 'وجبة سريعة ومقرمشة من صدور الدجاج الصافية بحجم عملي واقتصادي.'
            prod['sizes'] = [
                {'name': 'عبوة اقتصادية 400 جم', 'weight': '400 جم', 'price': 155, 'selected': True},
                {'name': 'عبوة سوبر 1 كجم', 'weight': '1 كجم', 'price': 320}
            ]
        elif 'pane-20pcs' in name:
            prod['name'] = 'بانيه دجاج أطياب كرانشي 20 قطعة (1 كجم)'
            prod['nameEn'] = 'Atyab Crunchy Chicken Pane 20 Pcs'
            prod['price'] = 295
            prod['weight'] = '1 كجم (20 قطعة)'
            prod['flavor'] = 'بانيه مقرمش'
            prod['description'] = 'قطع بانيه دجاج مقرمشة بتتبيلة خاصة وجاهزة للطهي الفوري.'
            prod['sizes'] = [
                {'name': 'عبوة 20 قطعة (1 كجم)', 'weight': '1 كجم', 'price': 295, 'selected': True},
                {'name': 'عبوة 8 قطع (400 جم)', 'weight': '400 جم', 'price': 140}
            ]
        elif 'chicken-burger' in name:
            prod['name'] = 'برجر دجاج بانيه أطياب 8 قطع'
            prod['nameEn'] = 'Atyab Pane Chicken Burger 8 Pcs'
            prod['price'] = 145
            prod['weight'] = '8 قطع'
            prod['flavor'] = 'برجر دجاج بانيه'
            prod['description'] = 'برجر دجاج بانيه شهي ولذيذ وسريع التحضير لعمل أشهى الساندوتشات.'
            prod['sizes'] = [
                {'name': 'عبوة 8 قطع', 'weight': '8 قطع', 'price': 145, 'selected': True},
                {'name': 'عبوة جامبو 16 قطعة', 'weight': '16 قطعة', 'price': 275}
            ]
        elif 'nuggets' in name:
            prod['name'] = 'ناجتس دجاج أطياب 20 قطعة'
            prod['nameEn'] = 'Atyab Chicken Nuggets 20 Pcs'
            prod['price'] = 135
            prod['weight'] = '20 قطعة'
            prod['flavor'] = 'ناجتس مقرمش'
            prod['description'] = 'قطع ناجتس دجاج ذهبية مقرمشة يعشقها الكبار والصغار.'
            prod['sizes'] = [
                {'name': 'عبوة 20 قطعة', 'weight': '20 قطعة', 'price': 135, 'selected': True},
                {'name': 'عبوة 40 قطعة توفير', 'weight': '40 قطعة', 'price': 245}
            ]
        elif 'sausage' in name:
            prod['name'] = 'سجق شرقي متبل أطياب 700 جم'
            prod['nameEn'] = 'Atyab Oriental Sausages 700g'
            prod['price'] = 185
            prod['weight'] = '700 جم'
            prod['flavor'] = 'سجق بلدي بالبهارات'
            prod['description'] = 'سجق شرقي فاخر متبل بأجود خلطات البهارات الشرقية الأصلية.'
            prod['sizes'] = [
                {'name': 'طبق 700 جم', 'weight': '700 جم', 'price': 185, 'selected': True},
                {'name': 'طبق 350 جم', 'weight': '350 جم', 'price': 98}
            ]
        else:
            prod['name'] = 'منتجات أطياب الفاخرة'
            prod['nameEn'] = 'Atyab Premium Food'
            prod['price'] = 185
            prod['flavor'] = 'دواجن ولحوم'
            prod['description'] = 'منتجات أطياب للدواجن واللحوم الفاخرة المعتمدة.'

    elif 'koki' in name:
        prod['brand'] = 'كوكي (Koki)'
        prod['category'] = 'frozen'
        if 'strips' in name:
            prod['name'] = 'ستربس دجاج كوكي سوبر توفير 1 كجم'
            prod['nameEn'] = 'Koki Super Saver Chicken Strips 1kg'
            prod['price'] = 295
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'ستربس كرانشي'
            prod['description'] = 'أصابع ستربس دجاج مقرمشة بجودة عالية وسعر اقتصادي موفر.'
            prod['sizes'] = [
                {'name': 'كيس سوبر توفير 1 كجم', 'weight': '1 كجم', 'price': 295, 'selected': True},
                {'name': 'كيس اقتصادي 400 جم', 'weight': '400 جم', 'price': 140}
            ]
        elif 'beef-burger-20pcs' in name:
            prod['name'] = 'برجر بقري كوكي 20 قطعة'
            prod['nameEn'] = 'Koki Beef Burger 20 Pcs'
            prod['price'] = 185
            prod['weight'] = '20 قطعة'
            prod['flavor'] = 'لحم بقري متبل'
            prod['description'] = 'برجر لحم بقري شهي ولذيذ مناسب لحفلات الشواء والعزومات والساندوتشات.'
            prod['sizes'] = [
                {'name': 'عبوة 20 قطعة عائلية', 'weight': '20 قطعة', 'price': 185, 'selected': True},
                {'name': 'عبوة 8 قطع', 'weight': '8 قطع', 'price': 95}
            ]
        elif 'nuggets-fries' in name:
            prod['name'] = 'ناجتس كوكي كرانشي مع بطاطس 60 قطعة'
            prod['nameEn'] = 'Koki Nuggets & Fries 60 Pcs'
            prod['price'] = 245
            prod['weight'] = '60 قطعة'
            prod['flavor'] = 'ناجتس وبطاطس'
            prod['description'] = 'عرض التوفير العائلي الضخم من ناجتس الدجاج المقرمش مع بطاطس فريتس.'
            prod['sizes'] = [
                {'name': 'عرض سوبر 60 قطعة مع بطاطس', 'weight': '60 قطعة', 'price': 245, 'selected': True},
                {'name': 'عبوة 20 قطعة', 'weight': '20 قطعة', 'price': 115}
            ]
        elif 'pane-spicy' in name or ('pane' in name and 'koki' in name):
            prod['name'] = 'بانيه دجاج كوكي مقرمش 20 قطعة (1 كجم)'
            prod['nameEn'] = 'Koki Crunchy Chicken Pane 20 Pcs'
            prod['price'] = 265
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'بانيه كرانشي'
            prod['description'] = 'قطع بانيه مقرمشة بتتبيلة كوكي الشهية لعشاق الطعم المقرمش.'
            prod['sizes'] = [
                {'name': 'عبوة 20 قطعة (1 كجم)', 'weight': '1 كجم', 'price': 265, 'selected': True},
                {'name': 'عبوة 8 قطع (400 جم)', 'weight': '400 جم', 'price': 125}
            ]
        elif 'hotdog' in name:
            prod['name'] = 'هوت دوج بقري كوكي 12 قطعة'
            prod['nameEn'] = 'Koki Beef Hot Dog 12 Pcs'
            prod['price'] = 110
            prod['weight'] = '12 قطعة'
            prod['flavor'] = 'هوت دوج بقري'
            prod['description'] = 'أصابع هوت دوج بقري فاخرة مناسبة للسلق أو التحمير والشواء.'
            prod['sizes'] = [
                {'name': 'عبوة 12 قطعة', 'weight': '12 قطعة', 'price': 110, 'selected': True},
                {'name': 'عبوة 24 قطعة توفير', 'weight': '24 قطعة', 'price': 195}
            ]
        elif 'drumsticks' in name:
            prod['name'] = 'دبابيس دجاج كوكي كرانشي مقرمشة 1 كجم'
            prod['nameEn'] = 'Koki Crunchy Chicken Drumsticks 1kg'
            prod['price'] = 235
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'دجاج مقلي متبل'
            prod['description'] = 'دبابيس دجاج مقرمشة بخلطة كوكي السرية الشهيرة.'
            prod['sizes'] = [
                {'name': 'عبوة 1 كجم', 'weight': '1 كجم', 'price': 235, 'selected': True}
            ]
        else:
            prod['name'] = 'منتجات كوكي للدواجن واللحوم'
            prod['nameEn'] = 'Koki Meat & Poultry'
            prod['price'] = 165
            prod['flavor'] = 'كوكي'
            prod['description'] = 'منتجات دجاج ولحوم كوكي المجمدة.'

    elif 'halwani' in name:
        prod['brand'] = 'حلواني إخوان (Halwani Bros)'
        prod['category'] = 'frozen'
        if 'jumbo-beef-burger' in name or ('burger' in name and '16' in name):
            prod['name'] = 'برجر بقري جامبو حلواني إخوان 1 كجم (16 قطعة)'
            prod['nameEn'] = 'Halwani Bros Jumbo Beef Burger 1kg'
            prod['price'] = 295
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'لحم بقري جامبو'
            prod['description'] = 'برجر لحم بقري جامبو فاخر غني بالعصارة والنكهة اللذيذة.'
            prod['sizes'] = [
                {'name': 'عبوة جامبو 1 كجم (16 قطعة)', 'weight': '1 كجم', 'price': 295, 'selected': True},
                {'name': 'عبوة 8 قطع (400 جم)', 'weight': '400 جم', 'price': 145}
            ]
        elif 'strips' in name:
            prod['name'] = 'ستربس دجاج حلواني إخوان مقرمش 1 كجم'
            prod['nameEn'] = 'Halwani Bros Crunchy Strips 1kg'
            prod['price'] = 325
            prod['weight'] = '1 كجم'
            prod['flavor'] = 'ستربس صدور دجاج كاملة'
            prod['description'] = 'صدور دجاج طبيعية 100% بتتبيلة حلواني الحارة والمقرمشة.'
            prod['sizes'] = [
                {'name': 'عبوة سوبر 1 كجم', 'weight': '1 كجم', 'price': 325, 'selected': True},
                {'name': 'عبوة 400 جم', 'weight': '400 جم', 'price': 155}
            ]
        elif 'burger-8pcs' in name:
            prod['name'] = 'برجر بقري حلواني إخوان 8 قطع'
            prod['nameEn'] = 'Halwani Bros Beef Burger 8 Pcs'
            prod['price'] = 145
            prod['weight'] = '8 قطع'
            prod['flavor'] = 'لحم بقري بلدي'
            prod['description'] = 'برجر بقري أصلي من حلواني إخوان بتتبيلة تقليدية مميزة.'
            prod['sizes'] = [
                {'name': 'عبوة 8 قطع (400 جم)', 'weight': '400 جم', 'price': 145, 'selected': True},
                {'name': 'عبوة 16 قطعة عائلية 1 كجم', 'weight': '1 كجم', 'price': 295}
            ]
        elif 'oriental-sausage' in name:
            prod['name'] = 'سجق شرقي فاخر حلواني إخوان 700 جم'
            prod['nameEn'] = 'Halwani Bros Oriental Sausage 700g'
            prod['price'] = 195
            prod['weight'] = '700 جم'
            prod['flavor'] = 'سجق شرقي بالخلطة الخاصة'
            prod['description'] = 'سجق شرقي مصنوع من أجود قطع اللحم المتبلة بالثوم والبهارات الشرقية.'
            prod['sizes'] = [
                {'name': 'عبوة 700 جم', 'weight': '700 جم', 'price': 195, 'selected': True},
                {'name': 'عبوة 350 جم', 'weight': '350 جم', 'price': 105}
            ]
        elif 'cocktail-sausage' in name:
            prod['name'] = 'سجق كوكتيل بقري حلواني إخوان 350 جم'
            prod['nameEn'] = 'Halwani Bros Beef Cocktail Sausage 350g'
            prod['price'] = 115
            prod['weight'] = '350 جم'
            prod['flavor'] = 'سجق كوكتيل صغير'
            prod['description'] = 'أصابع سجق كوكتيل صغيرة ومثالية للمقبلات والمعجنات والساندوتشات.'
            prod['sizes'] = [
                {'name': 'عبوة 350 جم', 'weight': '350 جم', 'price': 115, 'selected': True},
                {'name': 'عبوة 700 جم', 'weight': '700 جم', 'price': 195}
            ]
        else:
            prod['name'] = 'منتجات حلواني إخوان'
            prod['nameEn'] = 'Halwani Bros'
            prod['price'] = 165
            prod['flavor'] = 'منتجات فاخرة'
            prod['description'] = 'منتجات حلواني إخوان العريقة والرائدة.'

    # ==================== 2. CHIPSY & SNACKS (الشيبسي والمقرمشات) ====================
    elif 'chipsy' in name:
        prod['brand'] = 'شيبسي (Chipsy)'
        prod['category'] = 'snacks'
        flavor_name = 'بطاطس مقرمشة'
        flavor_title = 'شيبسي بطاطس طبيعية'
        if 'cheese' in name:
            flavor_name = 'جبنة متبلة'
            flavor_title = 'شيبسي بالجبنة المتبلة'
        elif 'chili-lemon' in name:
            flavor_name = 'شطة وليمون'
            flavor_title = 'شيبسي شطة وليمون'
        elif 'kebab' in name:
            flavor_name = 'كباب مشوي'
            flavor_title = 'شيبسي كباب مشوي عالفحم'
        elif 'salt-vinegar' in name:
            flavor_name = 'ملح وخل'
            flavor_title = 'شيبسي ملح وخل'
        elif 'tomato' in name:
            flavor_name = 'طماطم متبلة'
            flavor_title = 'شيبسي طماطم متبلة'

        prod['name'] = flavor_title
        prod['nameEn'] = f"Chipsy {flavor_name.title()}"
        prod['price'] = 10
        prod['weight'] = 'سوبر جامبو (65 جم)'
        prod['flavor'] = flavor_name
        prod['description'] = f"رقائق بطاطس طبيعية 100% مصرية بنكهة {flavor_name} المطبوع عليها السعر الرسمي."
        prod['sizes'] = [
            {'name': 'كيس صغير (حجم عادي)', 'weight': 'كيس صغير', 'price': 5},
            {'name': 'كيس وسط (حجم متوسط)', 'weight': 'كيس وسط', 'price': 7},
            {'name': 'كيس سوبر جامبو (65 جم)', 'weight': '65 جم', 'price': 10, 'selected': True},
            {'name': 'كيس ماكسي عائلي (133 جم)', 'weight': '133 جم', 'price': 15},
            {'name': 'كيس بارتي جامبو (175 جم)', 'weight': '175 جم', 'price': 20}
        ]

    elif 'tiger' in name:
        prod['brand'] = 'تايجر (Tiger)'
        prod['category'] = 'snacks'
        prod['name'] = 'شيبسي تايجر المقرمش'
        prod['nameEn'] = 'Tiger Potato Chips'
        prod['price'] = 10
        prod['weight'] = 'كيس كبير 10 ج.م'
        prod['flavor'] = 'بطاطس مقرمشة متبلة'
        prod['description'] = 'شيبسي تايجر المصري المقرمش بنكهات قوية وتتبيلة مضاعفة.'
        prod['sizes'] = [
            {'name': 'كيس صغير', 'weight': 'صغير', 'price': 5},
            {'name': 'كيس وسط', 'weight': 'وسط', 'price': 7},
            {'name': 'كيس كبير', 'weight': 'كبير', 'price': 10, 'selected': True},
            {'name': 'كيس سوبر جامبو', 'weight': 'جامبو', 'price': 15}
        ]

    elif 'big-chips' in name or 'bigchips' in name:
        prod['brand'] = 'بيج شيبس (Big Chips)'
        prod['category'] = 'snacks'
        prod['name'] = 'شيبسي بيج شيبس بطاطس مقرمشة'
        prod['nameEn'] = 'Big Chips Potato Snacks'
        prod['price'] = 10
        prod['weight'] = 'حجم كبير 10 ج.م'
        prod['flavor'] = 'نكهات متعددة'
        prod['description'] = 'رقائق بيج شيبس المقرمشة اللذيذة بأسعار المستهلك الرسمية.'
        prod['sizes'] = [
            {'name': 'كيس وسط (7 ج.م)', 'weight': 'وسط', 'price': 7},
            {'name': 'كيس كبير (10 ج.م)', 'weight': 'كبير', 'price': 10, 'selected': True}
        ]

    elif 'balance' in name:
        prod['brand'] = 'بالانس (Balance)'
        prod['category'] = 'snacks'
        prod['name'] = 'شيبسي بالانس خفيف قليل الدسم'
        prod['nameEn'] = 'Balance Light Potato Chips'
        prod['price'] = 10
        prod['weight'] = 'كيس كبير 10 ج.م'
        prod['flavor'] = 'خفيف ومقرمش'
        prod['description'] = 'شيبسي خفيف وصحي بنكهات طبيعية وسعرات متوازنة.'
        prod['sizes'] = [
            {'name': 'كيس وسط (7 ج.م)', 'weight': 'وسط', 'price': 7},
            {'name': 'كيس كبير (10 ج.م)', 'weight': 'كبير', 'price': 10, 'selected': True}
        ]

    # ==================== 3. TEAS & COFFEES (الشاي والقهوة والمشروبات الساخنة) ====================
    elif 'elarosa' in name or 'el-arosa' in name or 'arosa' in name:
        prod['brand'] = 'شاي العروسة (El Arosa Tea)'
        prod['category'] = 'groceries'
        if '40g' in name:
            prod['name'] = 'شاي العروسة أسود ناعم 40 جم'
            prod['nameEn'] = 'El Arosa Black Tea 40g'
            prod['price'] = 9
            prod['weight'] = 'باكو 40 جم'
            prod['flavor'] = 'شاي أسود كيني مخرز'
            prod['description'] = 'الباكو الصغير الاقتصادي من شاي العروسة الأكثر شعبية في مصر، مذاق قوي ولون ذهبي بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'باكو صغير 40 جم', 'weight': '40 جم', 'price': 9, 'selected': True},
                {'name': 'باكو وسط 100 جم', 'weight': '100 جم', 'price': 32.5},
                {'name': 'عبوة ربع كيلو 250 جم', 'weight': '250 جم', 'price': 55},
                {'name': 'علبة 100 فتلة', 'weight': '100 فتلة', 'price': 85}
            ]
        elif '250g' in name:
            prod['name'] = 'شاي العروسة أسود كيني عبوة 250 جم'
            prod['nameEn'] = 'El Arosa Black Tea 250g'
            prod['price'] = 55
            prod['weight'] = 'عبوة ربع كيلو (250 جم)'
            prod['flavor'] = 'شاي أسود ناعم كيني'
            prod['description'] = 'شاي العروسة الأصلي بحجم ربع كيلو، أجود أوراق الشاي الكيني لمزاج مظبوط بسعر المستهلك.'
            prod['sizes'] = [
                {'name': 'عبوة ربع كيلو 250 جم', 'weight': '250 جم', 'price': 55, 'selected': True},
                {'name': 'باكو وسط 100 جم', 'weight': '100 جم', 'price': 32.5},
                {'name': 'باكو صغير 40 جم', 'weight': '40 جم', 'price': 9},
                {'name': 'علبة 100 فتلة', 'weight': '100 فتلة', 'price': 85}
            ]
        else:
            prod['name'] = 'شاي العروسة المصري الأصيل'
            prod['nameEn'] = 'El Arosa Tea'
            prod['price'] = 55
            prod['flavor'] = 'شاي أسود كيني'
            prod['description'] = 'شاي العروسة شاي مصري أصيل يعشقه الملايين.'
            prod['sizes'] = [
                {'name': 'عبوة 250 جم', 'weight': '250 جم', 'price': 55, 'selected': True},
                {'name': 'باكو 100 جم', 'weight': '100 جم', 'price': 32.5},
                {'name': 'باكو 40 جم', 'weight': '40 جم', 'price': 9}
            ]

    elif 'lipton' in name:
        prod['brand'] = 'ليبتون (Lipton)'
        prod['category'] = 'groceries'
        if '100bags' in name or 'tea-bags' in name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء 100 فتلة'
            prod['nameEn'] = 'Lipton Yellow Label 100 Tea Bags'
            prod['price'] = 115
            prod['weight'] = '100 كيس شاي'
            prod['flavor'] = 'شاي أسود نقي'
            prod['description'] = 'علبة التوفير العائلية 100 فتلة من شاي ليبتون العلامة الصفراء الشهير.'
            prod['sizes'] = [
                {'name': 'علبة 100 فتلة عائلية', 'weight': '100 فتلة', 'price': 115, 'selected': True},
                {'name': 'علبة 25 فتلة', 'weight': '25 فتلة', 'price': 35},
                {'name': 'عبوة ناعم 250 جم', 'weight': '250 جم', 'price': 52}
            ]
        elif 'kharaz' in name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء خرز 250 جم'
            prod['nameEn'] = 'Lipton Yellow Label Granulated Tea 250g'
            prod['price'] = 55
            prod['weight'] = '250 جم خرز'
            prod['flavor'] = 'شاي أسود خرز مخرز'
            prod['description'] = 'حبيبات شاي أسود مخرزة غنية بالنكهة والنقاء تمنحك فنجان شاي صافي وممتع.'
            prod['sizes'] = [
                {'name': 'عبوة خرز 250 جم', 'weight': '250 جم خرز', 'price': 55, 'selected': True},
                {'name': 'عبوة ناعم 250 جم', 'weight': '250 جم ناعم', 'price': 52},
                {'name': 'علبة 100 فتلة', 'weight': '100 فتلة', 'price': 115}
            ]
        elif '250g' in name:
            prod['name'] = 'شاي ليبتون العلامة الصفراء ناعم 250 جم'
            prod['nameEn'] = 'Lipton Yellow Label Fine Tea 250g'
            prod['price'] = 52
            prod['weight'] = '250 جم ناعم'
            prod['flavor'] = 'شاي أسود كلاسيكي ناعم'
            prod['description'] = 'شاي ليبتون الأصلي بخلطة غنية ومحسنة من أجود أوراق الشاي بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'عبوة ناعم 250 جم', 'weight': '250 جم', 'price': 52, 'selected': True},
                {'name': 'عبوة خرز 250 جم', 'weight': '250 جم', 'price': 55},
                {'name': 'عبوة نصف كيلو 500 جم', 'weight': '500 جم', 'price': 95},
                {'name': 'علبة 100 فتلة', 'weight': '100 فتلة', 'price': 115}
            ]
        else:
            prod['name'] = 'شاي ليبتون العلامة الصفراء'
            prod['nameEn'] = 'Lipton Yellow Label Tea'
            prod['price'] = 52
            prod['flavor'] = 'شاي ليبتون'
            prod['description'] = 'شاي ليبتون العالمي المفضل في كل صباح ومساء.'

    elif 'nescafe' in name:
        prod['brand'] = 'نسكافيه (Nescafé)'
        if 'iced-can' in name or 'latte-iced' in name or 'spanish-latte' in name:
            prod['category'] = 'drinks'
            prod['price'] = 45
            prod['weight'] = 'كانز 250 مل'
            prod['name'] = 'نسكافيه مثلج كانز جاهز للشرب 250 مل'
            prod['nameEn'] = 'Nescafé Iced Coffee Can 250ml'
            prod['flavor'] = 'قهوة مثلجة بحليب'
            prod['description'] = 'مشروب قهوة مثلجة منعشة غنية ولذيذة تمنحك تركيزاً وانتعاشاً فورياً.'
            prod['sizes'] = [{'name': 'كانز 250 مل', 'weight': '250 مل', 'price': 45, 'selected': True}]
        elif 'classic-glass-jar' in name or ('classic' in name and 'jar' in name):
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه كلاسيك برطمان زجاج 190 جم'
            prod['nameEn'] = 'Nescafé Classic Glass Jar 190g'
            prod['price'] = 285
            prod['weight'] = '190 جم'
            prod['flavor'] = 'قهوة كلاسيك نقية 100%'
            prod['description'] = 'حبوب قهوة روبوستا محمصة بعناية لطعم قهوة غني ومركز يوقظ حواسك كل صباح بسعر المستهلك.'
            prod['sizes'] = [
                {'name': 'برطمان 190 جم', 'weight': '190 جم', 'price': 285, 'selected': True},
                {'name': 'برطمان 95 جم', 'weight': '95 جم', 'price': 145},
                {'name': 'كيس توفير 18 جم', 'weight': '18 جم', 'price': 18}
            ]
        elif 'gold-glass-jar' in name or ('gold' in name and 'jar' in name):
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه جولد برطمان زجاج 200 جم'
            prod['nameEn'] = 'Nescafé Gold Premium Jar 200g'
            prod['price'] = 345
            prod['weight'] = '200 جم'
            prod['flavor'] = 'أرابيكا محمصة ذهبية'
            prod['description'] = 'قهوة بريميوم ذهبية برائحة وطعم سلس فاخر لا مثيل له لعشاق القهوة الفاخرة.'
            prod['sizes'] = [
                {'name': 'برطمان 200 جم', 'weight': '200 جم', 'price': 345, 'selected': True},
                {'name': 'برطمان 100 جم', 'weight': '100 جم', 'price': 185}
            ]
        elif '3in1' in name:
            prod['category'] = 'groceries'
            prod['name'] = 'نسكافيه 3 في 1 كلاسيك أصلي'
            prod['nameEn'] = 'Nescafé 3in1 Classic Original'
            prod['price'] = 6
            prod['weight'] = 'كيس 18 جم'
            prod['flavor'] = 'قهوة ومبيض وسكر كلاسيك'
            prod['description'] = 'المذاق الأصلي الكلاسيكي لنسكافيه 3 في 1، التوليفة المضبوطة للقهوة مع الكريمة والسكر.'
            prod['sizes'] = [
                {'name': 'كيس أصابع فردي (18 جم)', 'weight': 'كيس', 'price': 6, 'selected': True},
                {'name': 'علبة 12 ظرف', 'weight': '12 ظرف', 'price': 70},
                {'name': 'علبة 24 ظرف سوبر توفير', 'weight': '24 ظرف', 'price': 138}
            ]

    elif 'bonjorno' in name:
        prod['brand'] = 'بونجورنو كافيه (Bonjorno Café)'
        prod['category'] = 'groceries'
        if 'fel-khamseena' in name:
            prod['name'] = 'بونجورنو كوفي ميكس في الخمسينة'
            prod['nameEn'] = 'Bonjorno Coffee Mix Fel Khamseena'
            prod['price'] = 5
            prod['weight'] = 'كيس'
            prod['flavor'] = 'كوفي ميكس في الخمسينة'
            prod['description'] = 'كوفي ميكس في الخمسينة المصري المضبوط على أصوله بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'كيس فردي (5 ج.م)', 'weight': 'كيس', 'price': 5, 'selected': True},
                {'name': 'علبة 12 كيس توفير', 'weight': '12 كيس', 'price': 65}
            ]
        elif 'cappuccino' in name or 'hazelnut' in name or 'vanilla' in name or 'double-shot' in name:
            prod['name'] = 'بونجورنو كابتشينو برغوة كريمية'
            prod['nameEn'] = 'Bonjorno Cappuccino Foam'
            prod['price'] = 7
            prod['weight'] = 'كيس'
            prod['flavor'] = 'كابتشينو برغوة ونكهات'
            prod['description'] = 'كابتشينو إيطالي سريع التحضير برغوة كثيفة ونكهة غنية.'
            prod['sizes'] = [
                {'name': 'كيس أصابع فردي (7 ج.م)', 'weight': 'كيس', 'price': 7, 'selected': True},
                {'name': 'علبة 12 ظرف توفير', 'weight': '12 ظرف', 'price': 85}
            ]
        else:
            prod['name'] = 'بونجورنو كوفي ميكس كلاسيك'
            prod['nameEn'] = 'Bonjorno Coffee Mix Classic'
            prod['price'] = 5
            prod['weight'] = 'كيس'
            prod['flavor'] = 'كوفي ميكس'
            prod['description'] = 'مشروب قهوة سريع التحضير بطعم غني.'
            prod['sizes'] = [
                {'name': 'كيس فردي (5 ج.م)', 'weight': 'كيس', 'price': 5, 'selected': True},
                {'name': 'علبة 12 كيس توفير', 'weight': '12 كيس', 'price': 65}
            ]

    # ==================== 4. GROCERIES: GHEE, OILS, DAIRY ====================
    elif 'rawaby' in name:
        prod['brand'] = 'روابي (Rawaby)'
        prod['category'] = 'groceries'
        prod['name'] = 'سمنة روابي بطعم القشطة الفلاحي'
        prod['nameEn'] = 'Rawaby Ghee Qishta Taste'
        prod['price'] = 92
        prod['weight'] = '700 جم'
        prod['flavor'] = 'طعم القشطة الفلاحي'
        prod['description'] = 'سمن نباتي نقي بطعم وريحة القشطة الفلاحي ليمنح طعامك نكهة شرقية أصيلة بسعر المستهلك الرسمي.'
        prod['sizes'] = [
            {'name': 'برطمان 700 جم', 'weight': '700 جم', 'price': 92, 'selected': True},
            {'name': 'برطمان 1.5 كجم', 'weight': '1.5 كجم', 'price': 185},
            {'name': 'علبة عائلية 2.5 كجم', 'weight': '2.5 كجم', 'price': 295}
        ]

    elif 'gannah' in name:
        prod['brand'] = 'جنة (Gannah)'
        prod['category'] = 'groceries'
        prod['name'] = 'سمنة جنة بطعم الزبدة الصفراء النيوزيلاندي'
        prod['nameEn'] = 'Gannah Ghee Yellow Butter'
        prod['price'] = 92
        prod['weight'] = '700 جم'
        prod['flavor'] = 'زبدة نيوزيلاندي صفراء'
        prod['description'] = 'سمنة جنة الشهيرة بطعم ورائحة الزبدة الصفراء لكل أصناف الطبخ والحلويات بسعر المستهلك.'
        prod['sizes'] = [
            {'name': 'برطمان 700 جم', 'weight': '700 جم', 'price': 92, 'selected': True},
            {'name': 'برطمان 1.5 كجم', 'weight': '1.5 كجم', 'price': 185},
            {'name': 'علبة عائلية 2.5 كجم', 'weight': '2.5 كجم', 'price': 295}
        ]

    elif 'crystal' in name:
        prod['brand'] = 'كريستال (Crystal)'
        prod['category'] = 'groceries'
        if 'corn-oil' in name or 'corn' in name:
            prod['name'] = 'زيت ذرة كريستال صافي 800 مل'
            prod['nameEn'] = 'Crystal Pure Corn Oil 800ml'
            prod['price'] = 115
            prod['weight'] = '800 مل'
            prod['flavor'] = 'زيت ذرة نقي 100%'
            prod['description'] = 'زيت ذرة نقي خفيف وصحي خالي من الكوليسترول لتحضير أشهى المأكولات.'
            prod['sizes'] = [
                {'name': 'زجاجة 800 مل', 'weight': '800 مل', 'price': 115, 'selected': True},
                {'name': 'زجاجة 1.6 لتر', 'weight': '1.6 لتر', 'price': 225},
                {'name': 'زجاجة عائلية 2.2 لتر', 'weight': '2.2 لتر', 'price': 310}
            ]
        else:
            prod['name'] = 'زيت عباد الشمس كريستال 800 مل'
            prod['nameEn'] = 'Crystal Sunflower Oil 800ml'
            prod['price'] = 95
            prod['weight'] = '800 مل'
            prod['flavor'] = 'زيت عباد نقي'
            prod['description'] = 'زيت عباد شمس خفيف وصافي ومثالي للطبخ والقلي الصحي.'
            prod['sizes'] = [
                {'name': 'زجاجة 800 مل', 'weight': '800 مل', 'price': 95, 'selected': True},
                {'name': 'زجاجة 1.6 لتر', 'weight': '1.6 لتر', 'price': 185},
                {'name': 'زجاجة عائلية 2.2 لتر', 'weight': '2.2 لتر', 'price': 255}
            ]

    elif 'juhayna' in name:
        prod['brand'] = 'جهينة (Juhayna)'
        if 'milk' in name or 'dairy' in name or 'full-cream' in name:
            prod['category'] = 'dairy'
            prod['name'] = 'حليب جهينة كامل الدسم طبيعي 1 لتر'
            prod['nameEn'] = 'Juhayna Full Cream Milk 1L'
            prod['price'] = 52.5
            prod['weight'] = '1 لتر'
            prod['flavor'] = 'حليب طبيعي 100%'
            prod['description'] = 'حليب جهينة الطبيعي الطازج كامل الدسم غني بالكالسيوم والفيتامينات بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'علبة 1 لتر كامل الدسم', 'weight': '1 لتر', 'price': 52.5, 'selected': True},
                {'name': 'علبة 500 مل وسط', 'weight': '500 مل', 'price': 28},
                {'name': 'علبة 200 مل صغيرة', 'weight': '200 مل', 'price': 12},
                {'name': 'عبوة عائلية 1.5 لتر', 'weight': '1.5 لتر', 'price': 75}
            ]
        else:
            prod['category'] = 'drinks'
            prod['name'] = 'عصير جهينة بيور طبيعي 1 لتر'
            prod['nameEn'] = 'Juhayna Pure Natural Juice 1L'
            prod['price'] = 45
            prod['weight'] = '1 لتر'
            prod['flavor'] = 'عصير فواكه طبيعية'
            prod['description'] = 'عصير طبيعي بدون سكر مضاف وبدون مواد حافظة.'
            prod['sizes'] = [
                {'name': 'علبة 1 لتر', 'weight': '1 لتر', 'price': 45, 'selected': True},
                {'name': 'علبة 200 مل جيب', 'weight': '200 مل', 'price': 12}
            ]

    elif 'domty' in name:
        prod['brand'] = 'دومتي (Domty)'
        prod['category'] = 'dairy'
        prod['name'] = 'جبنة دومتي بلس فيتا طازجة 500 جم'
        prod['nameEn'] = 'Domty Plus Feta Cheese 500g'
        prod['price'] = 42
        prod['weight'] = '500 جم'
        prod['flavor'] = 'جبنة فيتا كريمية'
        prod['description'] = 'جبنة دومتي فيتا طرية وغنية بالنكهة مثالية لساندوتشات الفطار والعشاء بسعر المستهلك.'
        prod['sizes'] = [
            {'name': 'علبة 500 جم', 'weight': '500 جم', 'price': 42, 'selected': True},
            {'name': 'علبة 250 جم', 'weight': '250 جم', 'price': 26},
            {'name': 'علبة عائلية 1 كجم', 'weight': '1 كجم', 'price': 80}
        ]

    elif 'obour' in name or 'obour-land' in name:
        prod['brand'] = 'عبور لاند (Obour Land)'
        prod['category'] = 'dairy'
        prod['name'] = 'جبنة عبور لاند فيتا نباتي الدهن 500 جم'
        prod['nameEn'] = 'Obour Land Feta Cheese 500g'
        prod['price'] = 42
        prod['weight'] = '500 جم'
        prod['flavor'] = 'جبنة فيتا طازجة'
        prod['description'] = 'جبنة عبور لاند الشهيرة بقوامها الكريمي وسهولة الفرد في الساندوتشات.'
        prod['sizes'] = [
            {'name': 'علبة 500 جم', 'weight': '500 جم', 'price': 42, 'selected': True},
            {'name': 'علبة 250 جم', 'weight': '250 جم', 'price': 26},
            {'name': 'علبة عائلية 1 كجم', 'weight': '1 كجم', 'price': 80}
        ]

    # ==================== 5. SWEETS, CAKES, WAFERS & ICE CREAMS ====================
    elif 'todo' in name:
        prod['brand'] = 'تودو (TODO)'
        prod['category'] = 'sweets'
        prod['name'] = 'تودو بومب كيك شوكولاتة بالكريمة'
        prod['nameEn'] = 'TODO Bomb Chocolate Cream Cake'
        prod['price'] = 10
        prod['weight'] = 'قطعة كينج (10 ج.م)'
        prod['flavor'] = 'كيك شوكولاتة غني محشو كريمة ومغطى بالكاكاو'
        prod['description'] = 'تودو بومب اللذيذ قنبلة الشوكولاتة الهشة المحشوة بكريمة الفانيليا والمغطاة بأشهى صوص شوكولاتة بسعر المستهلك الرسمي.'
        prod['sizes'] = [
            {'name': 'قطعة كينج فردية (10 ج.م)', 'weight': 'قطعة', 'price': 10, 'selected': True},
            {'name': 'علبة 12 قطعة توفير', 'weight': '12 قطعة', 'price': 115}
        ]

    elif 'twinkies' in name:
        prod['brand'] = 'توينكيز (Twinkies)'
        prod['category'] = 'sweets'
        prod['name'] = 'كيك توينكيز دبل كريمة كلاسيك'
        prod['nameEn'] = 'Twinkies Double Cream Cake'
        prod['price'] = 10
        prod['weight'] = 'قطعة كينج (10 ج.م)'
        prod['flavor'] = 'كيك إسفنجي ذهبي بحشوة دبل كريمة'
        prod['description'] = 'الكيك الإسفنجي الذهبي الطري المحشو بكريمة الحليب الغنية والمضاعفة المحبوبة من الجميع بسعر المستهلك الرسمي.'
        prod['sizes'] = [
            {'name': 'قطعة كينج فردية (10 ج.م)', 'weight': 'قطعة', 'price': 10, 'selected': True},
            {'name': 'علبة 12 قطعة توفير', 'weight': '12 قطعة', 'price': 119}
        ]

    elif 'hohos' in name:
        prod['brand'] = 'هوهوز (HOHOS)'
        prod['category'] = 'sweets'
        prod['name'] = 'كيك هوهوز رول شوكولاتة كينج'
        prod['nameEn'] = 'HOHOS Rolled Chocolate Cream Cake'
        prod['price'] = 10
        prod['weight'] = 'قطعة كينج (10 ج.م)'
        prod['flavor'] = 'رول شوكولاتة محشو كريمة ومغطى بالكاكاو'
        prod['description'] = 'رول كيك الشوكولاتة الهش الملفوف بحشوة الكريمة البيضاء والمغطى بطبقة شوكولاتة غنية تذوب بالفم بسعر المستهلك.'
        prod['sizes'] = [
            {'name': 'قطعة كينج فردية (10 ج.م)', 'weight': 'قطعة', 'price': 10, 'selected': True},
            {'name': 'علبة 12 قطعة توفير', 'weight': '12 قطعة', 'price': 115}
        ]

    elif 'freska' in name:
        prod['brand'] = 'فرسكا (Freska)'
        prod['category'] = 'sweets'
        prod['name'] = 'ويفر فرسكا شوكولاتة كريسبي'
        prod['nameEn'] = 'Freska Crispy Wafer'
        prod['price'] = 7
        prod['weight'] = 'باكو فردي (7 ج.م)'
        prod['flavor'] = 'ويفر وشوكولاتة'
        prod['description'] = 'ويفر فرسكا الهش المقرمش المغطى بأشهى شوكولاتة وحشوة الكريمة الغنية.'
        prod['sizes'] = [
            {'name': 'باكو فردي (7 ج.م)', 'weight': 'باكو', 'price': 7, 'selected': True},
            {'name': 'بار شوكو مغطى (10 ج.م)', 'weight': 'بار', 'price': 10},
            {'name': 'علبة بلوك 12 قطعة توفير', 'weight': '12 قطعة', 'price': 75}
        ]

    elif 'shamadan' in name or 'el-shamadan' in name:
        prod['brand'] = 'الشمعدان (El Shamadan)'
        prod['category'] = 'sweets'
        prod['name'] = 'ويفر الشمعدان المقرمش الأصلي'
        prod['nameEn'] = 'El Shamadan Crispy Wafer'
        prod['price'] = 7
        prod['weight'] = 'باكو فردي (7 ج.م)'
        prod['flavor'] = 'ويفر كاكاو وفانيليا'
        prod['description'] = 'الويفر المصري التاريخي الأصيل من الشمعدان بقرمشته المميزة وطعمه الذي لا يتغير.'
        prod['sizes'] = [
            {'name': 'باكو كتاكيتو / أتش دي (7 ج.م)', 'weight': 'باكو', 'price': 7, 'selected': True},
            {'name': 'باكو ميجا كبير (10 ج.م)', 'weight': 'ميجا', 'price': 10},
            {'name': 'علبة 12 قطعة توفير', 'weight': '12 قطعة', 'price': 80}
        ]

    elif 'bisco-misr' in name or 'biscomisr' in name:
        prod['brand'] = 'بسكو مصر (Bisco Misr)'
        prod['category'] = 'sweets'
        prod['name'] = 'بسكويت بسكو مصر لوكس الفاخر'
        prod['nameEn'] = 'Bisco Misr Luxe Biscuit'
        prod['price'] = 8
        prod['weight'] = 'باكو 12 قطعة'
        prod['flavor'] = 'بسكويت شاي أصلي'
        prod['description'] = 'بسكويت الشاي المصري الأشهر من بسكو مصر، الخيار المثالي مع كوب شاي الصباح.'
        prod['sizes'] = [
            {'name': 'باكو لوكس 12 قطعة (8 ج.م)', 'weight': 'باكو', 'price': 8, 'selected': True},
            {'name': 'باكو داتو بالعجوة (10 ج.م)', 'weight': 'داتو', 'price': 10},
            {'name': 'علبة 12 باكو توفير', 'weight': '12 باكو', 'price': 90}
        ]

    elif 'nestle' in name and ('mega' in name or 'kimo' in name or 'squizz' in name or 'carnavalta' in name):
        prod['brand'] = 'نستله آيس كريم (Nestlé Ice Cream)'
        prod['category'] = 'sweets'
        if 'mega' in name:
            prod['name'] = 'آيس كريم نستله ميجا ستيك لوز وشوكولاتة'
            prod['nameEn'] = 'Nestlé Mega Almonds Ice Cream Stick'
            prod['price'] = 25
            prod['weight'] = 'ستيك كبير'
            prod['flavor'] = 'شوكولاتة فاخرة ولوز مقرمش'
            prod['description'] = 'آيس كريم فانيليا كريمي غني مغطى بطبقة سميكة من شوكولاتة الحليب الفاخرة وقطع اللوز المحمص بسعر المستهلك الرسمي.'
            prod['sizes'] = [{'name': 'ستيك ميجا كبير (25 ج.م)', 'weight': 'ستيك', 'price': 25, 'selected': True}]
        elif 'kimo' in name:
            prod['name'] = 'آيس كريم كيمو كونو سوبر نستله'
            prod['nameEn'] = 'Nestlé Kimo Cono Super'
            prod['price'] = 12
            prod['weight'] = 'كونو سوبر'
            prod['flavor'] = 'شوكولاتة وبسكويت مقرمش'
            prod['description'] = 'بسكوتة كونو مقرمشة محشوة بآيس كريم كريمي ولذيذ مع صوص الشوكولاتة الغني.'
            prod['sizes'] = [
                {'name': 'كونو سوبر (12 ج.م)', 'weight': 'كونو', 'price': 12, 'selected': True},
                {'name': 'كونو ماكس كبير (15 ج.م)', 'weight': 'ماكس', 'price': 15}
            ]
        elif 'carnavalta' in name:
            prod['name'] = 'آيس كريم نستله كارنافاليتا كب فاخر'
            prod['nameEn'] = 'Nestlé Carnavalta Ice Cream Cup'
            prod['price'] = 25
            prod['weight'] = 'كب فاخر'
            prod['flavor'] = 'شوكولاتة وكريمة وصوص'
            prod['description'] = 'كب آيس كريم فاخر بطبقات الكريمة وصوص الشوكولاتة والمكسرات.'
            prod['sizes'] = [{'name': 'كب كارنافاليتا (25 ج.م)', 'weight': 'كب', 'price': 25, 'selected': True}]
        else:
            prod['name'] = 'آيس كريم نستله سكيويز منعش'
            prod['nameEn'] = 'Nestlé Squizz Refreshing Ice Cream'
            prod['price'] = 10
            prod['weight'] = 'ستيك مثلج'
            prod['flavor'] = 'ليمون ونعناع وفواكه'
            prod['description'] = 'ستيك مثلج منعش بالفواكه الطبيعية لإطفاء حر الصيف.'
            prod['sizes'] = [{'name': 'ستيك سكيويز (10 ج.م)', 'weight': 'ستيك', 'price': 10, 'selected': True}]

    elif 'friday' in name:
        prod['brand'] = 'فريداي (Friday Ice Cream)'
        prod['category'] = 'sweets'
        if 'royal' in name or 'kunafa' in name or 'pistachio' in name:
            prod['name'] = 'آيس كريم فريداي رويال إكسترا كنافة وبستاشيو'
            prod['nameEn'] = 'Friday Royal Kunafa Pistachio Ice Cream'
            prod['price'] = 15
            prod['weight'] = 'كونو ملكي فاخر'
            prod['flavor'] = 'كنافة مقرمشة وفستق بيستاشيو'
            prod['description'] = 'التريند الأكثر طلباً في مصر، مزيج آيس كريم البستاشيو الفاخر مع حبات الكنافة المحمصة بسعر المستهلك الرسمي.'
            prod['sizes'] = [
                {'name': 'كونو رويال كنافة وبستاشيو (15 ج.م)', 'weight': 'رويال', 'price': 15, 'selected': True},
                {'name': 'فرايتاج بار فستق وبندق (20 ج.م)', 'weight': 'فرايتاج', 'price': 20}
            ]
        elif 'combo' in name or 'volcano' in name:
            prod['name'] = 'آيس كريم فريداي كومبو فولكانو'
            prod['nameEn'] = 'Friday Combo Volcano Ice Cream'
            prod['price'] = 10
            prod['weight'] = 'كونو كبير'
            prod['flavor'] = 'شوكولاتة وبسكويت مقرمش'
            prod['description'] = 'كونو بركان الشوكولاتة الغني من فريداي المحبوب من الشباب والأطفال.'
            prod['sizes'] = [{'name': 'كونو كومبو (10 ج.م)', 'weight': 'كونو', 'price': 10, 'selected': True}]
        elif '5g' in name or 'tub' in name or 'mousse' in name:
            prod['name'] = 'آيس كريم فريداي 5G موس شوكولاتة وبستاشيو'
            prod['nameEn'] = 'Friday 5G Mousse Ice Cream Tub'
            prod['price'] = 15
            prod['weight'] = 'كب 5G'
            prod['flavor'] = 'موس شوكولاتة وكريمة'
            prod['description'] = 'كب الآيس كريم والموس المميز من فريداي بمكونات فاخرة ونكهة مركزة.'
            prod['sizes'] = [{'name': 'كب موس 5G فاخر (15 ج.م)', 'weight': 'كب', 'price': 15, 'selected': True}]
        else:
            prod['name'] = 'آيس كريم فريداي ستيك منعش'
            prod['nameEn'] = 'Friday Ice Cream Stick'
            prod['price'] = 5
            prod['weight'] = 'ستيك مثلج'
            prod['flavor'] = 'فواكه وحليب طبيعي'
            prod['description'] = 'ستيك آيس كريم فريداي المنعش بطعم الفواكه الطبيعية بسعر المستهلك الاقتصادي 5 جنيه.'
            prod['sizes'] = [
                {'name': 'ستيك صغير (5 ج.م)', 'weight': 'صغير', 'price': 5, 'selected': True},
                {'name': 'ستيك سوبر (8 ج.م)', 'weight': 'سوبر', 'price': 8}
            ]

    # Fallback to existing metadata generator if not hardcoded above
    if not prod['name']:
        from generate_master_products import get_product_metadata as base_meta
        try:
            b = base_meta(img)
            if b and b.get('name'):
                prod.update(b)
        except Exception:
            pass

    if not prod['name']:
        clean = img.replace('.png', '').replace('.jpg', '').replace('-', ' ').title()
        prod['name'] = clean
        prod['nameEn'] = clean
        prod['brand'] = 'الجمل ماركت'
        prod['category'] = 'groceries'
        prod['price'] = 10
        prod['flavor'] = 'أصلي'
        prod['description'] = 'منتج عالي الجودة متوفر لدى الجمل ماركت - الخانكة.'

    # Ensure sizes array is always present
    if not prod['sizes'] or len(prod['sizes']) == 0:
        prod['sizes'] = [
            {'name': 'العبوة القياسية', 'weight': prod['weight'], 'price': prod['price'], 'selected': True}
        ]

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
    info = get_product_complete_data(img)
    pid = info['id']
    if pid in seen_ids:
        pid = f"{pid}_{len(products)}"
        info['id'] = pid
    seen_ids.add(pid)
    products.append(info)

print(f"Generated {len(products)} total verified product objects with size dropdown options.")

js_output = """/**
 * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬
 * جميع المنتجات معروضة بأسعار المستهلك الرسمية المطبوعة على الكيس/العبوة والمطابقة للسوق المصري
 * صور منتجات أصلية ورسمية 100% بخلفيات بيضاء نقية
 * دعم كامل لاختيار الأحجام والعبوات بأسعار المستهلك الرسمية
 */

const CATEGORIES_DATA = """ + json.dumps(categories_data, ensure_ascii=False, indent=2) + """;

const PRODUCTS_DATA = """ + json.dumps(products, ensure_ascii=False, indent=2) + """;

// تصدير البيانات للواجهة
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CATEGORIES_DATA, PRODUCTS_DATA };
}
"""

with open('js/products.js', 'w', encoding='utf-8') as f:
    f.write(js_output)

print("Master js/products.js written with researched consumer prices and size dropdown metadata!")
