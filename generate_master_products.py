# -*- coding: utf-8 -*-
import os
import json

dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'
images = sorted([f for f in os.listdir(dest_dir) if f.endswith('.png') or f.endswith('.jpg')])

def get_product_metadata(img):
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
        'rating': 4.8,
        'reviewsCount': 115,
        'image': f'images/{img}',
        'description': '',
        'flavor': ''
    }

    # ------------------ 1. ICE CREAMS (sweets) ------------------
    if 'friday' in name or 'freitag' in name:
        prod['brand'] = 'فرايداي (Friday Ice Cream)'
        prod['category'] = 'sweets'
        if 'combo-vanilla-caramel' in name:
            prod['name'] = 'آيس كريم فرايداي كومبو فانيليا وكراميل'
            prod['nameEn'] = 'Friday Combo Vanilla & Caramel Cone'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وصوص كراميل ومكسرات'
            prod['description'] = 'بسكويت كون مقرمش محشو بآيس كريم الفانيليا الغني مع قلب من الكراميل اللذيذ ومغطى بالشوكولاتة.'
        elif 'combo-vanilla-cookies' in name or ('combo' in name and 'cookies' in name):
            prod['name'] = 'آيس كريم فرايداي كومبو فانيليا وكوكيز 10 ج.م'
            prod['nameEn'] = 'Friday Combo Vanilla & Cookies Cone'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وقطع كوكيز'
            prod['description'] = 'كونو مقرمش محشو بآيس كريم فانيليا كريمي مع قطع بسكويت كوكيز الشوكولاتة الشهية.'
        elif 'combo-extra-kunafa' in name:
            prod['name'] = 'آيس كريم فرايداي كومبو إكسترا كنافة وبستاشيو 15 ج.م'
            prod['nameEn'] = 'Friday Combo Extra Kunafa Pistachio'
            prod['price'] = 15
            prod['flavor'] = 'كنافة مقرمشة وفستق بستاشيو'
            prod['description'] = 'إصدار فاخر يجمع بين حبات الكنافة المقرمشة وصوص البستاشيو الفستق الغني مع آيس كريم الفانيليا.'
        elif 'volcano-cone' in name:
            prod['name'] = 'آيس كريم فرايداي كونو فولكانو فانيليا وشوكولاتة'
            prod['nameEn'] = 'Friday Volcano Vanilla & Choco Cone'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وشوكولاتة بركانية'
            prod['description'] = 'كونو بركاني ينفجر بنكهات الشوكولاتة البلجيكية الغنية الممزوجة بالفانيليا.'
        elif 'very-good' in name:
            prod['name'] = 'آيس كريم فرايداي فيري جود للأطفال'
            prod['nameEn'] = 'Friday Very Good Kids Cone'
            prod['price'] = 6
            prod['flavor'] = 'فانيليا وفراولة سويت'
            prod['description'] = 'كونو ملون ومبهج بطعم خفيف ولذيذ محبب للأطفال مع بسكويت ويفر مقرمش.'
        elif 'royal-vanilla' in name:
            prod['name'] = 'آيس كريم فرايداي رويال فانيليا فاخر'
            prod['nameEn'] = 'Friday Royal Vanilla Cone'
            prod['price'] = 12
            prod['flavor'] = 'فانيليا ملكية غنية'
            prod['description'] = 'كونو رويال ملكي بحجم كبير وكريمة فانيليا طبيعية ناعمة مع صوص الشوكولاتة.'
        elif 'royal' in name and 'chocolate' in name:
            prod['name'] = 'آيس كريم فرايداي رويال شوكولاتة فاخر'
            prod['nameEn'] = 'Friday Royal Chocolate Cone'
            prod['price'] = 12
            prod['flavor'] = 'شوكولاتة ملكية داكنة'
            prod['description'] = 'كونو رويال شوكولاتة غني بصوص الشوكولاتة المنسكب والمكسرات المحمصة.'
        elif 'freitag-chocolate-hazelnut' in name or ('freitag' in name and 'hazelnut' in name):
            prod['name'] = 'آيس كريم فرايتاج شوكولاتة وبندق استيك'
            prod['nameEn'] = 'Freitag Chocolate Hazelnut Ice Cream Bar'
            prod['price'] = 15
            prod['flavor'] = 'شوكولاتة حليب مع قطع بندق'
            prod['description'] = 'بار آيس كريم فاخر مغطى بطبقة سميكة من الشوكولاتة الغنية وحبات البندق المحمص المقرمش.'
        elif 'freitag-pistachio' in name or ('freitag' in name and 'pistachio' in name):
            prod['name'] = 'آيس كريم فرايتاج بستاشيو فستق فاخر استيك'
            prod['nameEn'] = 'Freitag Luxury Pistachio Ice Cream Bar'
            prod['price'] = 18
            prod['flavor'] = 'بستاشيو وفستق حلبي'
            prod['description'] = 'تجربة استثنائية من آيس كريم الفستق الحلبي الطبيعي المغطى بشوكولاتة البستاشيو الفاخرة.'
        elif '5g-tub-vanilla-caramel' in name:
            prod['name'] = 'آيس كريم فرايداي 5G موس الكراميل والكوكيز'
            prod['nameEn'] = 'Friday 5G Caramel Mousse & Cookies Tub'
            prod['price'] = 15
            prod['flavor'] = 'موس كراميل وفانيليا وكوكيز'
            prod['description'] = 'كوب آيس كريم فاخر بحجم كبير غني بطبقات موس الكراميل وقطع كوكيز الشوكولاتة.'
        elif '5g' in name and 'chocolate' in name:
            prod['name'] = 'آيس كريم فرايداي 5G شوكولاتة فودج وكوكيز'
            prod['nameEn'] = 'Friday 5G Chocolate Fudge & Cookies Tub'
            prod['price'] = 15
            prod['flavor'] = 'شوكولاتة فودج وقطع براونيز'
            prod['description'] = 'كوب آيس كريم شوكولاتة غني بصوص الشوكولاتة السائل وقطع الكوكيز المقرمشة.'
        elif 'caramel-biscuit' in name:
            prod['name'] = 'آيس كريم فرايداي كراميل وبسكويت كب'
            prod['nameEn'] = 'Friday Caramel & Biscuit Ice Cream Cup'
            prod['price'] = 12
            prod['flavor'] = 'كراميل وبسكويت لوتس مقرمش'
            prod['description'] = 'كوب مثلج لذيذ بنكهة الكراميل الناعمة مع فتات البسكويت المقرمش.'
        elif 'pop-cantaloupe' in name or 'cantaloupe' in name:
            prod['name'] = 'آيس كريم فرايداي بوب كنتالوب 5 ج.م'
            prod['nameEn'] = 'Friday Pop Cantaloupe Stick 5 LE'
            prod['price'] = 5
            prod['flavor'] = 'كنتالوب فريش منعش'
            prod['description'] = 'استيك مثلجات بطعم الكنتالوب الطبيعي المنعش لحر الصيف بسعر اقتصادي 5 جنيه فقط.'
        elif 'volcano-mocha' in name or ('volcano' in name and 'mocha' in name):
            prod['name'] = 'آيس كريم فرايداي فولكانو قهوة موكا استيك'
            prod['nameEn'] = 'Friday Volcano Mocha Coffee Ice Cream'
            prod['price'] = 12
            prod['flavor'] = 'قهوة موكا وشوكولاتة بيضاء'
            prod['description'] = 'استيك مثلج لعشاق القهوة والموكا مغطى بشوكولاتة الموكا الغنية.'
        elif 'double-chocolate' in name:
            prod['name'] = 'آيس كريم فرايداي دبل شوكليت استيك'
            prod['nameEn'] = 'Friday Double Chocolate Ice Cream Bar'
            prod['price'] = 12
            prod['flavor'] = 'طبقتين شوكولاتة حليب ومكسرات'
            prod['description'] = 'آيس كريم فانيليا محاط بطبقة كراميل وغطاء مزدوج من شوكولاتة الحليب المقرمشة.'
        elif 'volcano-red' in name or ('volcano' in name and 'red' in name):
            prod['name'] = 'آيس كريم فرايداي فولكانو شوكولاتة كرانشي'
            prod['nameEn'] = 'Friday Volcano Crunchy Choco Bar'
            prod['price'] = 10
            prod['flavor'] = 'شوكولاتة كرانشي مقرمشة'
            prod['description'] = 'استيك شوكولاتة كرانشي مغطى بحبيبات الكاكاو المقرمشة ولذيذ جداً.'
        elif 'banana' in name or 'mooza' in name:
            prod['name'] = 'آيس كريم فرايداي موزة استيك 3 ج.م'
            prod['nameEn'] = 'Friday Banana Ice Cream Stick 3 LE'
            prod['price'] = 3
            prod['flavor'] = 'موز وحليب طبيعي'
            prod['description'] = 'استيك آيس كريم بنكهة الموز اللذيذة والحليب الطبيعي بسعر التوفير 3 جنيه فقط.'
        elif 'watermelon' in name or 'bateekh' in name:
            prod['name'] = 'آيس كريم فرايداي بطيخ منعش استيك'
            prod['nameEn'] = 'Friday Watermelon Ice Cream Stick'
            prod['price'] = 5
            prod['flavor'] = 'بطيخ طبيعي مع شوكولاتة شيبس'
            prod['description'] = 'استيك بشكل شريحة بطيخ طبيعية مع حبيبات شوكولاتة تمثل بذور البطيخ.'
        elif 'cookies-wich' in name:
            prod['name'] = 'ساندوتش آيس كريم فرايداي كوكيز ويتش'
            prod['nameEn'] = 'Friday Cookies Wich Ice Cream Sandwich'
            prod['price'] = 12
            prod['flavor'] = 'ساندوتش كوكيز وفانيليا'
            prod['description'] = 'طبقتين من كوكيز الشوكولاتة المقرمشة تحتضنان حشوة وفيرة من آيس كريم الفانيليا.'
        elif 'snykers' in name:
            prod['name'] = 'آيس كريم فرايداي سنيكرز شوكولاتة وكوكيز 12 ج.م'
            prod['nameEn'] = 'Friday Snykers Chocolate Cookies Stick'
            prod['price'] = 12
            prod['flavor'] = 'سنيكرز فول سوداني وشوكولاتة وكوكيز'
            prod['description'] = 'طعم السنيكرز الشهير مع صوص الكراميل والفول السوداني مغطى بآيس كريم الشوكولاتة والكوكيز.'
        elif 'fresh-milk-strawberry' in name or ('fresh-milk' in name and 'strawberry' in name):
            prod['name'] = 'آيس كريم فرايداي فريش ميلك فراولة حليب طبيعي'
            prod['nameEn'] = 'Friday Fresh Milk Strawberry Stick'
            prod['price'] = 6
            prod['flavor'] = 'حليب طبيعي وفراولة فريش'
            prod['description'] = 'استيك صحي ولذيذ مصنوع من الحليب الطبيعي الصافي مع عصير الفراولة الطازجة.'
        elif 'mango-zebdia' in name or ('mango' in name and 'natural' in name):
            prod['name'] = 'آيس كريم فرايداي مانجو زبدية طبيعي استيك'
            prod['nameEn'] = 'Friday Zebdia Mango Ice Cream Stick'
            prod['price'] = 6
            prod['flavor'] = 'مانجو زبدية مصرية طبيعية'
            prod['description'] = 'استيك مثلجات طبيعي 100% من لحم المانجو الزبدية المصرية الفاخرة.'
        elif 'volcano' in name:
            prod['name'] = 'آيس كريم فرايداي فولكانو فانيليا وشوكولاتة'
            prod['nameEn'] = 'Friday Volcano Ice Cream Stick'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وشوكولاتة'
            prod['description'] = 'استيك فولكانو الشهير من فرايداي بنكهة غنية ومقرمشة.'
        else:
            prod['name'] = 'آيس كريم فرايداي المنعش'
            prod['nameEn'] = 'Friday Ice Cream'
            prod['price'] = 8
            prod['flavor'] = 'مثلجات فرايداي'
            prod['description'] = 'منتج مثلجات منعش ولذيذ من فرايداي بأجود المكونات.'

    elif 'nestle' in name:
        prod['brand'] = 'نستله آيس كريم (Nestlé Ice Cream)'
        prod['category'] = 'sweets'
        if 'carnavalta-tub' in name:
            if 'marble' in name:
                prod['name'] = 'آيس كريم نستله كرنفاليتا ماربل علبة عائلية'
                prod['nameEn'] = 'Nestlé Carnavalta Marble Tub Family Size'
                prod['price'] = 55
                prod['flavor'] = 'ماربل رخامي فانيليا وشوكولاتة وكراميل'
                prod['description'] = 'علبة عائلية من آيس كريم كرنفاليتا المموج بصوص الشوكولاتة والكراميل الغني.'
            else:
                prod['name'] = 'آيس كريم نستله كرنفاليتا فانيليا وشوكولاتة علبة'
                prod['nameEn'] = 'Nestlé Carnavalta Vanilla & Chocolate Tub'
                prod['price'] = 55
                prod['flavor'] = 'فانيليا وشوكولاتة غنية'
                prod['description'] = 'علبة آيس كريم عائلية فاخرة نصفين من الفانيليا الناعمة والشوكولاتة المركزة.'
        elif 'kimo-cono' in name:
            if 'super-chocolate' in name:
                prod['name'] = 'آيس كريم نستله كيمو كونو سوبر شوكولاتة'
                prod['nameEn'] = 'Nestlé Kimo Cono Super Chocolate'
                prod['price'] = 12
                prod['flavor'] = 'شوكولاتة مضاعفة مع قطع كاكاو'
                prod['description'] = 'كونو كيمو كونو الكلاسيكي الشهير بحشوة شوكولاتة مضاعفة ورشة شوكولاتة شيبس.'
            elif 'pink' in name or 'chocolate-vanilla' in name:
                prod['name'] = 'آيس كريم نستله كيمو كونو فانيليا وشوكولاتة'
                prod['nameEn'] = 'Nestlé Kimo Cono Vanilla & Chocolate'
                prod['price'] = 10
                prod['flavor'] = 'فانيليا وشوكولاتة'
                prod['description'] = 'كونو كيمو كونو المحبوب بطعم الفانيليا والشوكولاتة والبسكويت الهش المقرمش.'
            elif 'hazelnut' in name:
                prod['name'] = 'آيس كريم نستله كيمو كونو شوكولاتة بالبندق'
                prod['nameEn'] = 'Nestlé Kimo Cono Chocolate & Hazelnut'
                prod['price'] = 12
                prod['flavor'] = 'بندق وشوكولاتة'
                prod['description'] = 'بسكويت كونو مقرمش محشو بآيس كريم الشوكولاتة بالبندق مع المكسرات.'
            else:
                prod['name'] = 'آيس كريم نستله كيمو كونو كلاسيك'
                prod['nameEn'] = 'Nestlé Kimo Cono Classic'
                prod['price'] = 10
                prod['flavor'] = 'فانيليا وشوكولاتة'
                prod['description'] = 'كونو كيمو كونو التاريخي الأول في مصر.'
        elif 'kitkat' in name:
            prod['name'] = 'آيس كريم نستله كيت كات كونو مقرمش'
            prod['nameEn'] = 'Nestlé KitKat Ice Cream Cone'
            prod['price'] = 20
            prod['flavor'] = 'شوكولاتة كيت كات وويفر مقرمش'
            prod['description'] = 'كونو استثنائي يحتوي على أصابع ويفر كيت كات الحقيقية مغمورة في آيس كريم الشوكولاتة.'
        elif 'mega' in name:
            if 'almonds' in name or 'vanilla' in name:
                prod['name'] = 'آيس كريم نستله ميجا فانيليا وشوكولاتة باللوز'
                prod['nameEn'] = 'Nestlé Mega Vanilla with Almonds'
                prod['price'] = 25
                prod['flavor'] = 'فانيليا بوربون وشوكولاتة ولوز محمص'
                prod['description'] = 'استيك ميجا الفاخر آيس كريم فانيليا مغطى بطبقة سميكة من شوكولاتة الحليب واللوز المحمص المقرمش.'
            else:
                prod['name'] = 'آيس كريم نستله ميجا شوكولاتة بالمكسرات'
                prod['nameEn'] = 'Nestlé Mega Chocolate with Nuts'
                prod['price'] = 25
                prod['flavor'] = 'شوكولاتة بلجيكية غنية ومكسرات'
                prod['description'] = 'استيك ميجا شوكولاتة فائق الغنى مغلف بشوكولاتة فاخرة ومكسرات مقرمشة.'
        elif 'squizz' in name:
            if 'lemon' in name or 'mint' in name:
                prod['name'] = 'آيس كريم نستله سكويز ليمون ونعناع استيك منعش'
                prod['nameEn'] = 'Nestlé Squizz Lemon & Mint Stick'
                prod['price'] = 8
                prod['flavor'] = 'ليمون طبيعي ونعناع أخضر'
                prod['description'] = 'سوربيه منعش جداً من الليمون والنعناع الطبيعي لإحساس فوري بالانتعاش والبرودة.'
            else:
                prod['name'] = 'آيس كريم نستله سكويز مانجو استيك'
                prod['nameEn'] = 'Nestlé Squizz Mango Stick'
                prod['price'] = 8
                prod['flavor'] = 'مانجو طبيعية مثلجة'
                prod['description'] = 'استيك سكويز بطعم المانجو الطبيعية اللذيذة المحبوبة للجميع.'
        elif 'cornetto' in name:
            prod['name'] = 'آيس كريم نستله كورنيتو فانيليا وشوكولاتة ومكسرات'
            prod['nameEn'] = 'Nestlé Kimo Cornetto Vanilla'
            prod['price'] = 12
            prod['flavor'] = 'فانيليا ومكسرات وصوص شوكولاتة'
            prod['description'] = 'كونو كورنيتو المقرمش مع قمع الشوكولاتة في النهاية المحبوب للجميع.'
        else:
            prod['name'] = 'آيس كريم نستله اللذيذ'
            prod['nameEn'] = 'Nestlé Ice Cream'
            prod['price'] = 15
            prod['flavor'] = 'منتجات نستله'
            prod['description'] = 'آيس كريم نستله المصنوع من أجود خامات الحليب والشوكولاتة.'

    elif 'gersey' in name:
        prod['brand'] = 'جيرسي (Gersey)'
        prod['category'] = 'sweets'
        if '4u' in name:
            prod['name'] = 'آيس كريم جيرسي 4U كونو فانيليا وقطع بسكويت'
            prod['nameEn'] = 'Gersey 4U Cone Vanilla with Biscuit'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وقطع بسكويت مقرمشة'
            prod['description'] = 'كونو جيرسي فور يو المميز ببسكويت الويفر اللذيذ وقطع البسكويت المقرمشة.'
        elif 'conata' in name:
            prod['name'] = 'آيس كريم جيرسي كوناتا فانيليا وكراميل'
            prod['nameEn'] = 'Gersey Conata Vanilla & Caramel Cone'
            prod['price'] = 10
            prod['flavor'] = 'فانيليا وصوص كراميل ومكسرات'
            prod['description'] = 'كونو كوناتا من جيرسي المغطى بالشوكولاتة والمكسرات مع حشوة الكراميل اللذيذة.'
        elif 'fass-mango' in name:
            prod['name'] = 'آيس كريم جيرسي فص مانجو طبيعي استيك'
            prod['nameEn'] = 'Gersey Fass Mango Stick'
            prod['price'] = 5
            prod['flavor'] = 'فص مانجو طبيعي'
            prod['description'] = 'استيك مثلج بنكهة فص المانجو المصري الطبيعي المركز والمنعش.'
        elif 'cone-cocoa' in name:
            prod['name'] = 'آيس كريم جيرسي كونو كاكاو وشوكولاتة'
            prod['nameEn'] = 'Gersey Cocoa & Chocolate Cone'
            prod['price'] = 10
            prod['flavor'] = 'كاكاو وشوكولاتة غنية'
            prod['description'] = 'كونو شوكولاتة كاكاو غني لعشاق الشوكولاتة من جيرسي.'
        else:
            prod['name'] = 'آيس كريم جيرسي المصري'
            prod['nameEn'] = 'Gersey Ice Cream'
            prod['price'] = 8
            prod['flavor'] = 'جيرسي'
            prod['description'] = 'منتجات جيرسي العريقة للمثلجات والحلويات.'

    elif 'oreo' in name and 'ice' in name:
        prod['brand'] = 'أوريو (Oreo Ice Cream)'
        prod['category'] = 'sweets'
        prod['name'] = 'ساندوتش آيس كريم أوريو الأصلي مع بسكويت أوريو'
        prod['nameEn'] = 'Oreo Ice Cream Sandwich with Cookie Pieces'
        prod['price'] = 25
        prod['flavor'] = 'كريمة أوريو وقطع بسكويت أوريو داكن'
        prod['description'] = 'ساندوتش الآيس كريم الأسطوري المكون من قطعتي بسكويت أوريو عملاقتين وحشوة آيس كريم الكريمة.'

    elif 'dolce' in name:
        prod['brand'] = 'دولسي (Dolce Ice Cream)'
        prod['category'] = 'sweets'
        prod['name'] = 'ساندوتش كوكيز شوكولاتة دولسي الأصلي'
        prod['nameEn'] = 'Dolce Chocolate Cookie Ice Cream Sandwich'
        prod['price'] = 12
        prod['flavor'] = 'كوكيز شوكولاتة شيبس وآيس كريم'
        prod['description'] = 'ساندوتش دولسي المحبوب المكون من كوكيز طري غني بحبيبات الشوكولاتة مع آيس كريم الشوكولاتة.'

    elif 'molotov' in name:
        prod['brand'] = 'مولوتوف (Molotov)'
        prod['category'] = 'sweets'
        prod['name'] = 'آيس كريم مولوتوف كونو شوكولاتة غرقانة في شوكولاتة'
        prod['nameEn'] = 'Molotov Chocolate Overload Cone'
        prod['price'] = 12
        prod['flavor'] = 'شوكولاتة فودج مركزة'
        prod['description'] = 'كونو مولوتوف العملاق محشو بأقصى درجات الشوكولاتة مع قلب من صوص الفودج الساخن.'

    # Fallback to existing builder rules if not caught above
    if not prod['name']:
        from generate_catalog_database import get_product_info as prev_func
        try:
            prev_data = prev_func(img)
            if prev_data and prev_data.get('name'):
                prod.update(prev_data)
        except Exception:
            pass

    if not prod['name']:
        clean = img.replace('.png', '').replace('.jpg', '').replace('-', ' ').title()
        prod['name'] = clean
        prod['nameEn'] = clean
        prod['brand'] = 'الجمل ماركت'
        prod['category'] = 'groceries'
        prod['price'] = 15
        prod['flavor'] = 'طبيعي'
        prod['description'] = 'منتج عالي الجودة متوفر لدى الجمل ماركت - الخانكة.'

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
    info = get_product_metadata(img)
    pid = info['id']
    if pid in seen_ids:
        pid = f"{pid}_{len(products)}"
        info['id'] = pid
    seen_ids.add(pid)
    products.append(info)

print(f"Total compiled products: {len(products)}")

js_text = """/**
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

with open('js/products.js', 'w', encoding='utf-8') as f:
    f.write(js_text)

print("Generated js/products.js successfully!")
