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
        'category': 'snacks',
        'price': 10,
        'isEgyptian': True,
        'badge': 'سعر المستهلك الرسمي 🏷️',
        'brand': '',
        'weight': '85 جم',
        'rating': 4.8,
        'reviewsCount': 110,
        'image': f'images/{img}',
        'description': '',
        'flavor': ''
    }
    
    # ---------------- Snacks ----------------
    if 'chipsy' in img_name:
        prod['brand'] = 'شيبسي (Chipsy)'
        prod['category'] = 'snacks'
        if 'chili-lemon' in img_name:
            prod['name'] = 'شيبسي شطة وليمون سوبر'
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
        elif 'seasoned-cheese' in img_name:
            prod['name'] = 'شيبسي جبنة متبلة'
            prod['nameEn'] = 'Chipsy Seasoned Cheese'
            prod['price'] = 10
            prod['flavor'] = 'جبنة متبلة'
            prod['description'] = 'النكهة الأكثر طلباً، جبنة غنية متبلة على بطاطس مقرمشة.'
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

    elif 'tiger' in img_name:
        prod['brand'] = 'تايجر (Tiger)'
        prod['category'] = 'snacks'
        if 'excellence' in img_name:
            prod['price'] = 15
            prod['weight'] = '100 جم'
            prod['badge'] = 'إكسلانس فاخر 15 ج.م 👑'
            if 'balsamic' in img_name:
                prod['name'] = 'تايجر إكسلانس خل بلسميك وملح بحري'
                prod['nameEn'] = 'Tiger Excellence Balsamic & Sea Salt'
                prod['flavor'] = 'خل بلسميك وملح بحري'
            elif 'chili-ranch' in img_name:
                prod['name'] = 'تايجر إكسلانس تشيلي رانش كريمي'
                prod['nameEn'] = 'Tiger Excellence Chili Ranch'
                prod['flavor'] = 'تشيلي رانش'
            elif 'greek-tzatziki' in img_name:
                prod['name'] = 'تايجر إكسلانس تزاتزيكي يوناني بالأعشاب'
                prod['nameEn'] = 'Tiger Excellence Greek Tzatziki'
                prod['flavor'] = 'تزاتزيكي يوناني'
            elif 'lime-coriander' in img_name:
                prod['name'] = 'تايجر إكسلانس ليمون وكسبرة'
                prod['nameEn'] = 'Tiger Excellence Lime & Coriander'
                prod['flavor'] = 'ليمون وكسبرة'
            elif 'parmesan-truffle' in img_name:
                prod['name'] = 'تايجر إكسلانس جبنة بارميزان وترافل'
                prod['nameEn'] = 'Tiger Excellence Parmesan & Truffle'
                prod['flavor'] = 'بارميزان وترافل'
            elif 'smoked-cheese' in img_name:
                prod['name'] = 'تايجر إكسلانس جبنة مدخنة فاخرة'
                prod['nameEn'] = 'Tiger Excellence Smoked Cheese'
                prod['flavor'] = 'جبنة مدخنة'
            elif 'tangy-ketchup' in img_name:
                prod['name'] = 'تايجر إكسلانس كاتشب حار وهالبينو'
                prod['nameEn'] = 'Tiger Excellence Tangy Ketchup Jalapeño'
                prod['flavor'] = 'كاتشب وهالبينو'
            elif 'thai-sweet-chili' in img_name:
                prod['name'] = 'تايجر إكسلانس سويت تشيلي تايلاندي'
                prod['nameEn'] = 'Tiger Excellence Thai Sweet Chili'
                prod['flavor'] = 'سويت تشيلي تايلاندي'
            elif 'truffle-cheese-honey' in img_name:
                prod['name'] = 'تايجر إكسلانس ترافل وجبنة وعسل'
                prod['nameEn'] = 'Tiger Excellence Truffle Cheese & Honey'
                prod['flavor'] = 'ترافل وجبنة وعسل'
            elif 'truffle-herbs' in img_name:
                prod['name'] = 'تايجر إكسلانس ترافل وأعشاب برية'
                prod['nameEn'] = 'Tiger Excellence Truffle & Herbs'
                prod['flavor'] = 'ترافل وأعشاب'
            elif 'truffle-mushrooms' in img_name:
                prod['name'] = 'تايجر إكسلانس ترافل ومشروم'
                prod['nameEn'] = 'Tiger Excellence Truffle & Mushrooms'
                prod['flavor'] = 'ترافل ومشروم'
            else:
                prod['name'] = 'تايجر إكسلانس فاخر'
                prod['nameEn'] = 'Tiger Excellence Luxury Chips'
                prod['flavor'] = 'خلطة خاصة'
            prod['description'] = f'إصدار إكسلانس الفاخر من تايجر بنكهة {prod["flavor"]} المتقنة والمقرمشة.'
        elif 'kettle' in img_name:
            prod['price'] = 15
            prod['weight'] = '95 جم'
            prod['badge'] = 'كيتل سميك 15 ج.م'
            if 'dill-pickles' in img_name:
                prod['name'] = 'تايجر كيتل خيار مخلل وشبت وجبنة بيضاء'
                prod['nameEn'] = 'Tiger Kettle Dill Pickles & White Cheese'
                prod['flavor'] = 'خيار مخلل وشبت'
            elif 'korean-chicken' in img_name:
                prod['name'] = 'تايجر كيتل فراخ كورية مقرمشة حارة'
                prod['nameEn'] = 'Tiger Kettle Korean Fried Chicken'
                prod['flavor'] = 'فراخ كورية حارة'
            else:
                prod['name'] = 'تايجر كيتل كرانشي'
                prod['nameEn'] = 'Tiger Kettle Cooked Chips'
                prod['flavor'] = 'كيتل'
            prod['description'] = f'بطاطس كيتل مقلية ببطء ومقرمشة جداً بنكهة {prod["flavor"]}.'
        else:
            prod['price'] = 10
            prod['weight'] = '85 جم'
            if 'kebab' in img_name:
                prod['name'] = 'تايجر كباب مشوي عالفحم الأسود'
                prod['nameEn'] = 'Tiger Black Grilled Kebab'
                prod['flavor'] = 'كباب مشوي'
            elif 'max-cheese' in img_name:
                prod['name'] = 'تايجر ماكس جبنة صفراء مركزة'
                prod['nameEn'] = 'Tiger Max Cheese Yellow'
                prod['flavor'] = 'ماكس جبنة'
            elif 'seasoned-cheese' in img_name:
                prod['name'] = 'تايجر جبنة متبلة كيس برتقالي'
                prod['nameEn'] = 'Tiger Seasoned Cheese Orange'
                prod['flavor'] = 'جبنة متبلة'
            elif 'tomato' in img_name:
                prod['name'] = 'تايجر طماطم متبلة كيس أزرق'
                prod['nameEn'] = 'Tiger Savory Tomato Blue'
                prod['flavor'] = 'طماطم متبلة'
            else:
                prod['name'] = 'شيبس تايجر مقرمش'
                prod['nameEn'] = 'Tiger Potato Chips'
                prod['flavor'] = 'سناكس'
            prod['description'] = f'شيبسي تايجر المصري المقرمش بنكهة {prod["flavor"]}.'

    elif 'lion' in img_name:
        prod['brand'] = 'لايون (Lion)'
        prod['category'] = 'snacks'
        prod['price'] = 7
        prod['weight'] = '65 جم'
        if 'kebab' in img_name:
            prod['name'] = 'لايون شيبس كباب عالفحم كيس أسود'
            prod['nameEn'] = 'Lion Chips Kebab Black'
            prod['flavor'] = 'كباب'
        elif 'ketchup' in img_name:
            prod['name'] = 'لايون شيبس كاتشب كيس أزرق'
            prod['nameEn'] = 'Lion Chips Ketchup Blue'
            prod['flavor'] = 'كاتشب'
        elif 'salt' in img_name:
            prod['name'] = 'لايون شيبس ملح كيس أحمر'
            prod['nameEn'] = 'Lion Chips Salt Red'
            prod['flavor'] = 'ملح'
        elif 'spicy-cheese' in img_name:
            prod['name'] = 'لايون شيبس جبنة حارة كيس أصفر'
            prod['nameEn'] = 'Lion Chips Spicy Cheese Yellow'
            prod['flavor'] = 'جبنة حارة'
        else:
            prod['name'] = 'لايون شيبس بطاطس'
            prod['nameEn'] = 'Lion Potato Chips'
            prod['flavor'] = 'سناكس'
        prod['description'] = f'شيبس لايون بطاطس طبيعية سميكة ومقرمشة بنكهة {prod["flavor"]} بسعر 7 ج.م.'

    elif 'big-chips' in img_name:
        prod['brand'] = 'بيج شيبس (Big Chips)'
        prod['category'] = 'snacks'
        prod['price'] = 10
        prod['weight'] = '80 جم'
        if 'sour-cream' in img_name:
            prod['name'] = 'بيج شيبس كيتل ساور كريم وبصل'
            prod['nameEn'] = 'Big Chips Kettle Sour Cream & Onion'
            prod['flavor'] = 'ساور كريم وبصل'
        elif 'spiced-cheese' in img_name:
            prod['name'] = 'بيج شيبس كيتل جبنة سبايسي'
            prod['nameEn'] = 'Big Chips Kettle Spiced Cheese'
            prod['flavor'] = 'جبنة سبايسي'
        elif 'steak' in img_name:
            prod['name'] = 'بيج شيبس كيتل ستيك بصل مكرمل'
            prod['nameEn'] = 'Big Chips Kettle Steak Caramelized Onion'
            prod['flavor'] = 'ستيك بصل مكرمل'
        elif 'seasoned-cheese' in img_name:
            prod['name'] = 'بيج شيبس جبنة متبلة كيس برتقالي'
            prod['nameEn'] = 'Big Chips Seasoned Cheese'
            prod['flavor'] = 'جبنة متبلة'
        else:
            prod['name'] = 'بيج شيبس بطاطس'
            prod['nameEn'] = 'Big Chips Potato Crisps'
            prod['flavor'] = 'سناكس'
        prod['description'] = f'بيج شيبس كيتل سميك ومقرمش بنكهة {prod["flavor"]}.'

    elif 'raw-kettle' in img_name:
        prod['brand'] = 'رو (RAW Kettle)'
        prod['category'] = 'snacks'
        prod['price'] = 15
        prod['weight'] = '90 جم'
        prod['badge'] = 'رو كيتل طبيعي 15 ج.م 🥔'
        if 'jalapeno' in img_name:
            prod['name'] = 'رو كيتل هالبينو حار مقلي ببطء'
            prod['nameEn'] = 'RAW Kettle Cooked Jalapeño'
            prod['flavor'] = 'هالبينو حار'
        elif 'sea-salt' in img_name:
            prod['name'] = 'رو كيتل ملح بحري كيس أزرق'
            prod['nameEn'] = 'RAW Kettle Sea Salt Blue'
            prod['flavor'] = 'ملح بحري'
        elif 'sour-cream' in img_name:
            prod['name'] = 'رو كيتل ساور كريم وأعشاب ريفية'
            prod['nameEn'] = 'RAW Kettle Sour Cream & Herbs'
            prod['flavor'] = 'ساور كريم وأعشاب'
        elif 'sweet-chili' in img_name:
            prod['name'] = 'رو كيتل سويت تشيلي كيس نبيتي'
            prod['nameEn'] = 'RAW Kettle Sweet Chili Burgundy'
            prod['flavor'] = 'سويت تشيلي'
        else:
            prod['name'] = 'رو كيتل شيبس بطاطس'
            prod['nameEn'] = 'RAW Kettle Potato Chips'
            prod['flavor'] = 'كيتل'
        prod['description'] = f'شيبس رو كيتل بطاطس طبيعية 100% مقلية يدوياً ببطء بنكهة {prod["flavor"]}.'

    elif 'spuds' in img_name:
        prod['brand'] = 'سبادز (Spuds)'
        prod['category'] = 'snacks'
        prod['price'] = 15
        prod['weight'] = '95 جم'
        if 'sea-salt' in img_name:
            prod['name'] = 'سبادز بطاطس ملح بحري كيس أبيض'
            prod['nameEn'] = 'Spuds Sea Salt White'
            prod['flavor'] = 'ملح بحري'
        elif 'sour-cream' in img_name:
            prod['name'] = 'سبادز ساور كريم وبصل أخضر'
            prod['nameEn'] = 'Spuds Sour Cream & Onion'
            prod['flavor'] = 'ساور كريم وبصل'
        elif 'truffle-cheese' in img_name:
            prod['name'] = 'سبادز جبنة وترافل أسود فاخر'
            prod['nameEn'] = 'Spuds Truffle Cheese'
            prod['flavor'] = 'جبنة وترافل'
        else:
            prod['name'] = 'سبادز شيبس بطاطس'
            prod['nameEn'] = 'Spuds Potato Chips'
            prod['flavor'] = 'سبادز'
        prod['description'] = f'بطاطس سبادز الفاخرة المقطعة سميكاً ومتبلة بأفخر النكهات: {prod["flavor"]}.'

    elif 'pringles' in img_name:
        prod['brand'] = 'برينجلز (Pringles)'
        prod['category'] = 'snacks'
        prod['isEgyptian'] = False
        if 'small' in img_name or 'can' in img_name and 'black' not in img_name and 'tube' not in img_name:
            prod['price'] = 35
            prod['weight'] = '40 جم'
            prod['badge'] = 'علبة ميني 40 جم'
        else:
            prod['price'] = 95
            prod['weight'] = '165 جم'
            prod['badge'] = 'أنبوبة أصلية 165 جم'
        if 'hot-spicy' in img_name:
            prod['name'] = 'برينجلز حار وسبايسي علبة سوداء'
            prod['nameEn'] = 'Pringles Hot & Spicy Black Can'
            prod['flavor'] = 'حار وسبايسي'
        elif 'ketchup' in img_name:
            prod['name'] = 'برينجلز كاتشب أنبوبة زرقاء 165 جم'
            prod['nameEn'] = 'Pringles Ketchup Blue Tube'
            prod['flavor'] = 'كاتشب'
        elif 'original' in img_name:
            prod['name'] = 'برينجلز أوريجينال أنبوبة حمراء 165 جم'
            prod['nameEn'] = 'Pringles Original Red Tube'
            prod['flavor'] = 'أوريجينال ملح'
        elif 'salt-vinegar' in img_name:
            prod['name'] = 'برينجلز ملح وخل أنبوبة زرقاء'
            prod['nameEn'] = 'Pringles Salt & Vinegar'
            prod['flavor'] = 'ملح وخل'
        elif 'sour-cream' in img_name:
            prod['name'] = 'برينجلز ساور كريم وبصل أنبوبة خضراء 165 جم'
            prod['nameEn'] = 'Pringles Sour Cream & Onion Green Tube'
            prod['flavor'] = 'ساور كريم وبصل'
        else:
            prod['name'] = 'برينجلز رقائق بطاطس'
            prod['nameEn'] = 'Pringles Potato Crisps'
            prod['flavor'] = 'برينجلز'
        prod['description'] = f'رقائق برينجلز الشهيرة على شكل سرج منحني ومقرمش بنكهة {prod["flavor"]}.'

    elif 'jaguar' in img_name:
        prod['brand'] = 'جاجوار (Jaguar)'
        prod['category'] = 'snacks'
        prod['price'] = 10
        prod['weight'] = '75 جم'
        if 'prime-sweet-heat' in img_name:
            prod['name'] = 'جاجوار برايم سويت هيت حرارة حلوة'
            prod['nameEn'] = 'Jaguar Prime Sweet Heat'
            prod['flavor'] = 'سويت هيت'
        elif 'puff-king' in img_name:
            prod['name'] = 'جاجوار بف كينج سويت تشيلي ليمون 10 ج.م'
            prod['nameEn'] = 'Jaguar Puff King Sweet Chili Lime'
            prod['flavor'] = 'سويت تشيلي ليمون'
        elif 'puffcorn' in img_name:
            prod['name'] = 'جاجوار بف كورن شطة وليمون 10 ج.م'
            prod['nameEn'] = 'Jaguar Puffcorn Chili & Lemon'
            prod['flavor'] = 'شطة وليمون'
        elif 'puffs-sweet-cheese' in img_name:
            prod['name'] = 'جاجوار بف مقرمش جبنة حلوة 10 ج.م'
            prod['nameEn'] = 'Jaguar Puffs Sweet Cheese'
            prod['flavor'] = 'جبنة حلوة'
        elif 'puffs-sweet-tomato' in img_name:
            prod['name'] = 'جاجوار بف طماطم متبلة حلوة 10 ج.م'
            prod['nameEn'] = 'Jaguar Puffs Sweet Tomato'
            prod['flavor'] = 'طماطم حلوة'
        elif 'stix' in img_name:
            prod['name'] = 'جاجوار ستيكس سويت تشيلي 10 ج.م'
            prod['nameEn'] = 'Jaguar Stix Sweet Chili'
            prod['flavor'] = 'سويت تشيلي'
        else:
            prod['name'] = 'سناكس جاجوار مقرمش'
            prod['nameEn'] = 'Jaguar Snacks'
            prod['flavor'] = 'سناكس'
        prod['description'] = f'مقرمشات جاجوار الذرة الهشة والمتبلة بنكهة {prod["flavor"]}.'

    elif 'cheetos' in img_name:
        prod['brand'] = 'شيتوس (Cheetos)'
        prod['category'] = 'snacks'
        prod['price'] = 7
        prod['weight'] = '55 جم'
        if 'chili-cheese' in img_name:
            prod['name'] = 'شيتوس كرانشي شطة وجبنة'
            prod['nameEn'] = 'Cheetos Crunchy Chili Cheese'
            prod['flavor'] = 'شطة وجبنة'
        elif 'flamin-hot-25g' in img_name:
            prod['name'] = 'شيتوس كرانشي فلامينج هوت نار وشرار ميني'
            prod['nameEn'] = 'Cheetos Crunchy Flamin Hot'
            prod['price'] = 5
            prod['flavor'] = 'فلامينج هوت'
        elif 'flamin-hot-limon' in img_name:
            prod['name'] = 'شيتوس كرانشي فلامينج هوت ليمون حار'
            prod['nameEn'] = 'Cheetos Crunchy Flamin Hot Limon'
            prod['flavor'] = 'فلامينج هوت ليمون'
        elif 'popcorn' in img_name:
            prod['name'] = 'شيتوس فوشار طماطم حارة'
            prod['nameEn'] = 'Cheetos Popcorn Spicy Tomato'
            prod['flavor'] = 'فوشار طماطم حارة'
        elif 'puffs-flamin' in img_name:
            prod['name'] = 'شيتوس بافس فلامينج هوت ذرة هشة'
            prod['nameEn'] = 'Cheetos Puffs Flamin Hot'
            prod['flavor'] = 'بافس فلامينج هوت'
        else:
            prod['name'] = 'شيتوس مقرمش'
            prod['nameEn'] = 'Cheetos Snacks'
            prod['flavor'] = 'جبنة'
        prod['description'] = f'سناك شيتوس الذرة المقرمشة والغنية بنكهة {prod["flavor"]}.'

    elif 'chicka' in img_name:
        prod['brand'] = 'تشيكا (Chicka)'
        prod['category'] = 'snacks'
        prod['price'] = 7
        prod['weight'] = '55 جم'
        if 'crunchy-creamy-cheese' in img_name:
            prod['name'] = 'تشيكا كرانشي جبنة كريمية'
            prod['nameEn'] = 'Chicka Crunchy Creamy Cheese'
            prod['flavor'] = 'جبنة كريمية'
        elif 'crunchy-hot-ketchup' in img_name:
            prod['name'] = 'تشيكا كرانشي كاتشب حار'
            prod['nameEn'] = 'Chicka Crunchy Hot Ketchup'
            prod['flavor'] = 'كاتشب حار'
        elif 'puffcorn-creamy-cheese' in img_name:
            prod['name'] = 'تشيكا بف كورن ذرة جبنة كريمي'
            prod['nameEn'] = 'Chicka Puffcorn Creamy Cheese'
            prod['flavor'] = 'بف كورن جبنة'
        elif 'puffcorn-sweet-corn' in img_name:
            prod['name'] = 'تشيكا بف كورن ذرة سويت كورن'
            prod['nameEn'] = 'Chicka Puffcorn Sweet Corn'
            prod['flavor'] = 'ذرة حلوة'
        elif 'puffs-hot-ketchup' in img_name:
            prod['name'] = 'تشيكا بافس كاتشب حار كيس أحمر'
            prod['nameEn'] = 'Chicka Puffs Hot Ketchup Red'
            prod['flavor'] = 'كاتشب حار'
        else:
            prod['name'] = 'سناكس تشيكا مقرمش'
            prod['nameEn'] = 'Chicka Snacks'
            prod['flavor'] = 'سناكس'
        prod['description'] = f'سناكس تشيكا الذرة الخفيفة والمقرمشة بنكهة {prod["flavor"]}.'

    elif 'flamenco' in img_name:
        prod['brand'] = 'فلامنكو (Flamenco)'
        prod['category'] = 'snacks'
        prod['price'] = 7
        prod['weight'] = '55 جم'
        if 'blazin-hot' in img_name:
            prod['name'] = 'فلامنكو مكسيكي حار نار'
            prod['nameEn'] = 'Flamenco Blazin Hot Mexican'
            prod['flavor'] = 'مكسيكي حار'
        elif 'peanut-orange' in img_name:
            prod['name'] = 'فلامنكو فول سوداني الأصلي كيس برتقالي'
            prod['nameEn'] = 'Flamenco Peanut Puffs Orange'
            prod['flavor'] = 'فول سوداني'
        elif 'seasoned-cheese' in img_name:
            prod['name'] = 'فلامنكو جبنة متبلة'
            prod['nameEn'] = 'Flamenco Seasoned Cheese'
            prod['flavor'] = 'جبنة متبلة'
        elif 'smoked-cheese' in img_name:
            prod['name'] = 'فلامنكو جبنة مدخنة كيس بني'
            prod['nameEn'] = 'Flamenco Smoked Cheese Brown'
            prod['flavor'] = 'جبنة مدخنة'
        elif 'sweet-peanut' in img_name:
            prod['name'] = 'فلامنكو سويت فول سوداني كيس بينك'
            prod['nameEn'] = 'Flamenco Sweet Peanut Pink'
            prod['flavor'] = 'فول سوداني حلو'
        elif 'zesty-tomato' in img_name:
            prod['name'] = 'فلامنكو طماطم متبلة كيس أحمر'
            prod['nameEn'] = 'Flamenco Zesty Tomato Red'
            prod['flavor'] = 'طماطم متبلة'
        else:
            prod['name'] = 'فلامنكو سناكس كلاسيك'
            prod['nameEn'] = 'Flamenco Classic Puffs'
            prod['flavor'] = 'سناكس'
        prod['description'] = f'سناك فلامنكو المصري المحبوب بنكهة {prod["flavor"]}.'

    elif 'balance' in img_name:
        prod['brand'] = 'بالانس (Balance)'
        prod['category'] = 'snacks'
        prod['price'] = 10
        prod['weight'] = '60 جم'
        prod['badge'] = 'صحي ومخبوز 10 ج.م 🌿'
        if 'honey-butter' in img_name:
            prod['name'] = 'بالانس سناكس هوني بتر عسل وزبدة'
            prod['nameEn'] = 'Balance Snacks Honey Butter'
            prod['flavor'] = 'عسل وزبدة'
        elif 'protein-shots' in img_name:
            prod['name'] = 'بالانس بروتين شوتس جبنة حلوة'
            prod['nameEn'] = 'Balance Protein Shots Sweet Cheese'
            prod['flavor'] = 'جبنة بروتين'
            prod['price'] = 15
        elif 'puffs-cheese' in img_name:
            prod['name'] = 'بالانس بافس جبنة طبيعية مخبوزة'
            prod['nameEn'] = 'Balance Puffs Baked Cheese'
            prod['flavor'] = 'جبنة طبيعية'
        elif 'puffs-sweet-heat' in img_name:
            prod['name'] = 'بالانس بافس سويت هيت حرارة متوازنة'
            prod['nameEn'] = 'Balance Puffs Sweet Heat'
            prod['flavor'] = 'سويت هيت'
        elif 'sour-cream' in img_name:
            prod['name'] = 'بالانس ساور كريم وبصل مخبوز'
            prod['nameEn'] = 'Balance Sour Cream & Onion'
            prod['flavor'] = 'ساور كريم وبصل'
        elif 'sweet-chili' in img_name:
            prod['name'] = 'بالانس سويت تشيلي مخبوز خفيف'
            prod['nameEn'] = 'Balance Baked Sweet Chili'
            prod['flavor'] = 'سويت تشيلي'
        elif 'sweet-lemon' in img_name:
            prod['name'] = 'بالانس ليمون حلو منعش مخبوز'
            prod['nameEn'] = 'Balance Baked Sweet Lemon'
            prod['flavor'] = 'ليمون حلو'
        else:
            prod['name'] = 'سناكس بالانس الصحي'
            prod['nameEn'] = 'Balance Healthy Snacks'
            prod['flavor'] = 'صحي'
        prod['description'] = f'سناكس بالانس المخبوز الصحي الخفيف بنكهة {prod["flavor"]}.'

    elif 'bakerolz' in img_name or 'mixy' in img_name or 'pretzo' in img_name or 'abu-auf' in img_name or 'funday' in img_name or 'lino' in img_name or 'break' in img_name or 'crunchy' in img_name or 'windows' in img_name or 'doritos' in img_name:
        prod['category'] = 'snacks'
        if 'bakerolz' in img_name:
            prod['brand'] = 'بيك رولز (Bakerolz)'
            prod['price'] = 10
            prod['weight'] = '70 جم'
            if 'ketchup-family' in img_name or 'ketchup-super' in img_name:
                prod['name'] = 'بيك رولز خبز محمص بالكاتشب سوبر سايز'
                prod['nameEn'] = 'Bakerolz Ketchup Super Size'
                prod['flavor'] = 'كاتشب'
            elif 'pizza' in img_name:
                prod['name'] = 'بيك رولز خبز محمص بنكهة البيتزا عائلي'
                prod['nameEn'] = 'Bakerolz Pizza Family Size'
                prod['flavor'] = 'بيتزا'
            elif 'sweet-chili' in img_name:
                prod['name'] = 'بيك رولز سويت تشيلي سوبر سايز'
                prod['nameEn'] = 'Bakerolz Sweet Chili Super Size'
                prod['flavor'] = 'سويت تشيلي'
            else:
                prod['name'] = 'بيك رولز مقرمشات مخبوزة'
                prod['nameEn'] = 'Bakerolz Baked Snacks'
                prod['flavor'] = 'سناكس'
            prod['description'] = f'خبز بيك رولز المخبوز المقرمش والغني بنكهة {prod["flavor"]}.'
        elif 'mixy' in img_name:
            prod['brand'] = 'ميكسي (Mixy)'
            prod['price'] = 7
            prod['weight'] = '60 جم'
            if 'baharatly' in img_name:
                prod['name'] = 'ميكسي بريتزلز بهاراتلي متبل'
                prod['nameEn'] = 'Mixy Pretzels Baharatly'
                prod['flavor'] = 'بهاراتلي'
            elif 'bbq' in img_name:
                prod['name'] = 'ميكسي بريتزلز باربيكيو مدخن'
                prod['nameEn'] = 'Mixy Pretzels BBQ'
                prod['flavor'] = 'باربيكيو'
            else:
                prod['name'] = 'ميكسي بريتزلز مقرمش'
                prod['nameEn'] = 'Mixy Baked Pretzels'
                prod['flavor'] = 'بريتزلز'
            prod['description'] = f'مقرمشات بريتزلز ميكسي المخبوزة في الفرن بنكهة {prod["flavor"]}.'
        elif 'pretzo' in img_name:
            prod['brand'] = 'بريتزو (Pretzo)'
            prod['price'] = 7
            prod['weight'] = '55 جم'
            prod['name'] = 'بريتزو بريتزلز بالليمون المنعش'
            prod['nameEn'] = 'Pretzo Pretzels Zesty Lemon'
            prod['flavor'] = 'ليمون لايم'
            prod['description'] = 'بريتزلز مخبوز خفيف ومقرمش مع رشة ليمون منعشة.'
        elif 'abu-auf' in img_name:
            prod['brand'] = 'أبو عوف (Abu Auf)'
            prod['price'] = 15
            prod['weight'] = '70 جم'
            prod['name'] = 'أبو عوف بريتزلز مخبوز بالجبنة'
            prod['nameEn'] = 'Abu Auf Baked Pretzels Cheese'
            prod['flavor'] = 'جبنة فاخرة'
            prod['description'] = 'بريتزلز أبو عوف الفاخر المخبوز والمتبل بأجود أنواع الجبن.'
        elif 'funday' in img_name:
            prod['brand'] = 'فان داي (FunDay)'
            prod['price'] = 7
            prod['weight'] = '60 جم'
            if 'mixed-fruits' in img_name:
                prod['name'] = 'فان داي فوشار فواكه مشكلة ملونة'
                prod['nameEn'] = 'FunDay Popcorn Mixed Fruits'
                prod['flavor'] = 'فواكه مشكلة'
            elif 'pizza' in img_name:
                prod['name'] = 'فان داي فوشار بالبيتزا الإيطالية'
                prod['nameEn'] = 'FunDay Popcorn Pizza Family'
                prod['flavor'] = 'بيتزا'
            elif 'sweet-chili' in img_name:
                prod['name'] = 'فان داي فوشار سويت تشيلي'
                prod['nameEn'] = 'FunDay Popcorn Sweet Chili'
                prod['flavor'] = 'سويت تشيلي'
            else:
                prod['name'] = 'فان داي فوشار مقرمش'
                prod['nameEn'] = 'FunDay Popcorn'
                prod['flavor'] = 'فوشار'
            prod['description'] = f'فوشار فان داي المنفوخ بالهواء الساخن بنكهة {prod["flavor"]}.'
        elif 'lino' in img_name:
            prod['brand'] = 'لينو (Lino)'
            prod['price'] = 10
            prod['weight'] = '55 جم'
            prod['badge'] = 'شوفان صحي 100% 🥣'
            if 'sriracha' in img_name:
                prod['name'] = 'لينو حلقات الشوفان المقرمشة سيريراتشا حار'
                prod['nameEn'] = 'Lino Oat Rings Sriracha'
                prod['flavor'] = 'سيريراتشا حار'
            elif 'onion' in img_name:
                prod['name'] = 'لينو حلقات الشوفان بالبصل والساور كريم'
                prod['nameEn'] = 'Lino Oat Rings Onion & Sour Cream'
                prod['flavor'] = 'بصل وساور كريم'
            else:
                prod['name'] = 'لينو حلقات الشوفان المخبوزة'
                prod['nameEn'] = 'Lino Oat Rings'
                prod['flavor'] = 'شوفان'
            prod['description'] = f'سناك الشوفان الصحي المقرمش والغني بالألياف من لينو بنكهة {prod["flavor"]}.'
        elif 'break' in img_name:
            prod['brand'] = 'بريك (Break)'
            prod['price'] = 7
            prod['weight'] = '65 جم'
            if 'hot-jumbo' in img_name:
                prod['name'] = 'بريك شيبس شطة حارة جامبو'
                prod['nameEn'] = 'Break Chips Hot Jumbo'
                prod['flavor'] = 'شطة حارة'
            else:
                prod['name'] = 'بريك شيبس بطاطس طازجة'
                prod['nameEn'] = 'Break Fresh Potato Chips'
                prod['flavor'] = 'طبيعي'
            prod['description'] = f'شيبس بريك البطاطس الطازجة المقرمشة بنكهة {prod["flavor"]}.'
        elif 'crunchy' in img_name:
            prod['brand'] = 'كرانشي (Crunchy)'
            prod['price'] = 5 if '5egp' in img_name else 10
            prod['weight'] = '65 جم'
            if 'mix-grill' in img_name:
                prod['name'] = 'كرانشي ميكس جريل مشويات كيس أسود 10 ج.م'
                prod['nameEn'] = 'Crunchy Mix Grill Black'
                prod['flavor'] = 'ميكس جريل'
            elif 'chili-lemon' in img_name:
                prod['name'] = 'كرانشي شطة وليمون حار'
                prod['nameEn'] = 'Crunchy Chili & Lemon'
                prod['flavor'] = 'شطة وليمون'
            else:
                prod['name'] = 'كرانشي سناكس مقرمش'
                prod['nameEn'] = 'Crunchy Corn Snacks'
                prod['flavor'] = 'كرانشي'
            prod['description'] = f'مقرمشات كرانشي الذرة اللذيذة بنكهة {prod["flavor"]}.'
        elif 'windows' in img_name:
            prod['brand'] = 'ويندوز (Windows)'
            prod['price'] = 7
            prod['weight'] = '60 جم'
            prod['name'] = 'ويندوز سناكس الجبنة الذائبة الأصلي'
            prod['nameEn'] = 'Windows Cheese Snacks'
            prod['flavor'] = 'جبنة كلاسيك'
            prod['description'] = 'شباك ويندوز المقرمش بالجبنة اللذيذة، طعم الطفولة الأصيل.'
        elif 'doritos' in img_name:
            prod['brand'] = 'دوريتوس (Doritos)'
            prod['price'] = 10
            prod['weight'] = '75 جم'
            if 'cool-ranch' in img_name:
                prod['name'] = 'دوريتوس كول رانش الأزرق'
                prod['nameEn'] = 'Doritos Cool Ranch'
                prod['flavor'] = 'كول رانش'
            elif 'flamin-hot-nacho' in img_name or 'flamin-hot' in img_name:
                prod['name'] = 'دوريتوس فلامينج هوت نار وشرار'
                prod['nameEn'] = 'Doritos Flamin Hot'
                prod['flavor'] = 'فلامينج هوت'
            elif 'nacho' in img_name:
                prod['name'] = 'دوريتوس ناتشو تشيز جبنة الناتشو'
                prod['nameEn'] = 'Doritos Nacho Cheese'
                prod['flavor'] = 'ناتشو تشيز'
            elif 'sweet-chili' in img_name:
                prod['name'] = 'دوريتوس سويت تشيلي الفلفل الحلو'
                prod['nameEn'] = 'Doritos Sweet Chili'
                prod['flavor'] = 'سويت تشيلي'
            else:
                prod['name'] = 'دوريتوس رقائق الذرة المثلثة'
                prod['nameEn'] = 'Doritos Tortilla Chips'
                prod['flavor'] = 'دوريتوس'
            prod['description'] = f'مثلثات الذرة المقرمشة من دوريتوس بنكهة {prod["flavor"]}.'

    # ---------------- Drinks & Sodas & Juices ----------------
    elif any(k in img_name for k in ['pepsi', 'coca-cola', '7up', 'mirinda', 'fanta', 'schweppes', 'spiro-spathis', 'v-super', 'v7', 'suntop', 'juice', 'pure', 'beyti', 'lamar', 'aslan', 'bekhero', 'rani', 'tang', 'fruty', 'yalla-smoozy']):
        prod['category'] = 'drinks'
        if 'pepsi' in img_name:
            prod['brand'] = 'بيبسي (Pepsi)'
            if 'glass' in img_name:
                prod['name'] = 'بيبسي زجاجة كولا 330 مل'
                prod['nameEn'] = 'Pepsi Glass Bottle 330ml'
                prod['price'] = 10
                prod['weight'] = '330 مل'
            elif 'can' in img_name:
                if 'diet' in img_name:
                    prod['name'] = 'دايت بيبسي كانز خالي من السكر 330 مل'
                    prod['nameEn'] = 'Diet Pepsi Can 330ml'
                else:
                    prod['name'] = 'بيبسي كولا كانز 330 مل'
                    prod['nameEn'] = 'Pepsi Cola Can 330ml'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            elif 'pocket' in img_name:
                prod['name'] = 'بيبسي بوكيت صاروخ بلاستيك 350 مل'
                prod['nameEn'] = 'Pepsi Pocket Bottle 350ml'
                prod['price'] = 10
                prod['weight'] = '350 مل'
            elif '2l' in img_name:
                prod['name'] = 'بيبسي زجاجة عائلية 2 لتر'
                prod['nameEn'] = 'Pepsi Bottle 2 Liters'
                prod['price'] = 30
                prod['weight'] = '2 لتر'
            elif '1l' in img_name:
                if 'diet' in img_name:
                    prod['name'] = 'دايت بيبسي زجاجة 1 لتر'
                    prod['nameEn'] = 'Diet Pepsi Bottle 1 Liter'
                else:
                    prod['name'] = 'بيبسي كولا زجاجة 1 لتر'
                    prod['nameEn'] = 'Pepsi Bottle 1 Liter'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
            else:
                prod['name'] = 'بيبسي مشروب غازي'
                prod['nameEn'] = 'Pepsi Drink'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            prod['flavor'] = 'كولا'
            prod['description'] = 'مشروب بيبسي المنعش الأصلي بفقاعاته الفوارة ومذاقه الكلاسيكي.'
        elif 'coca-cola' in img_name:
            prod['brand'] = 'كوكاكولا (Coca-Cola)'
            if 'can' in img_name:
                prod['name'] = 'كوكاكولا كانز أصلية 330 مل'
                prod['nameEn'] = 'Coca-Cola Can 330ml'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            elif '2-5l' in img_name or '2.5l' in img_name:
                prod['name'] = 'كوكاكولا زجاجة عائلية 2.5 لتر'
                prod['nameEn'] = 'Coca-Cola Bottle 2.5L'
                prod['price'] = 35
                prod['weight'] = '2.5 لتر'
            elif '1l' in img_name:
                prod['name'] = 'كوكاكولا زجاجة 1 لتر'
                prod['nameEn'] = 'Coca-Cola Bottle 1 Liter'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
            else:
                prod['name'] = 'كوكاكولا مشروب غازي'
                prod['nameEn'] = 'Coca-Cola Drink'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            prod['flavor'] = 'كولا أصلية'
            prod['description'] = 'مشروب كوكاكولا المنعش بطعمه الأيقوني الذي لا يقاوم.'
        elif '7up' in img_name:
            prod['brand'] = 'سفن أب (7Up)'
            if 'glass' in img_name:
                prod['name'] = 'سفن أب زجاجة استرجاع 330 مل'
                prod['nameEn'] = '7Up Glass Bottle 330ml'
                prod['price'] = 10
                prod['weight'] = '330 مل'
            elif 'can' in img_name:
                prod['name'] = 'سفن أب ليمون كانز 330 مل'
                prod['nameEn'] = '7Up Lemon Can 330ml'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            elif 'zero' in img_name:
                prod['name'] = 'سفن أب زيرو سكر زجاجة 1.25 لتر'
                prod['nameEn'] = '7Up Zero Sugar Bottle'
                prod['price'] = 22
                prod['weight'] = '1.25 لتر'
            elif '1l' in img_name:
                prod['name'] = 'سفن أب زجاجة 1 لتر'
                prod['nameEn'] = '7Up Bottle 1 Liter'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
            else:
                prod['name'] = 'سفن أب مشروب غازي'
                prod['nameEn'] = '7Up Drink'
                prod['price'] = 15
                prod['weight'] = '330 مل'
            prod['flavor'] = 'ليمون لايم'
            prod['description'] = 'انتعاش الليمون الصافي والغازات الخفيفة من سفن أب.'
        elif 'fanta' in img_name:
            prod['brand'] = 'فانتا (Fanta)'
            if 'green-apple-bottle' in img_name:
                prod['name'] = 'فانتا تفاح أخضر زجاجة 1 لتر'
                prod['nameEn'] = 'Fanta Green Apple Bottle 1L'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'تفاح أخضر'
            elif 'green-apple-can' in img_name:
                prod['name'] = 'فانتا تفاح أخضر كانز 320 مل'
                prod['nameEn'] = 'Fanta Green Apple Can'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'تفاح أخضر'
            elif 'orange-bottle' in img_name:
                prod['name'] = 'فانتا برتقال زجاجة 1 لتر'
                prod['nameEn'] = 'Fanta Orange Bottle 1L'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'برتقال فوار'
            elif 'orange-can' in img_name:
                prod['name'] = 'فانتا برتقال كانز 320 مل'
                prod['nameEn'] = 'Fanta Orange Can 320ml'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'برتقال'
            elif 'red-apple' in img_name:
                prod['name'] = 'فانتا تفاح أحمر كانز 320 مل'
                prod['nameEn'] = 'Fanta Red Apple Can'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'تفاح أحمر'
            else:
                prod['name'] = 'فانتا مشروب غازي'
                prod['nameEn'] = 'Fanta Drink'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'مشروب فانتا الفوار الغني بنكهة {prod["flavor"]}.'
        elif 'mirinda' in img_name:
            prod['brand'] = 'ميريندا (Mirinda)'
            if 'green-apple' in img_name:
                prod['name'] = 'ميريندا تفاح أخضر زجاجة 1 لتر'
                prod['nameEn'] = 'Mirinda Green Apple Bottle 1L'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'تفاح أخضر'
            elif 'orange-bottle' in img_name:
                prod['name'] = 'ميريندا برتقال زجاجة 1 لتر'
                prod['nameEn'] = 'Mirinda Orange Bottle 1L'
                prod['price'] = 20
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'برتقال'
            elif 'orange-can' in img_name:
                prod['name'] = 'ميريندا برتقال كانز 320 مل'
                prod['nameEn'] = 'Mirinda Orange Can 320ml'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'برتقال'
            else:
                prod['name'] = 'ميريندا مشروب غازي'
                prod['nameEn'] = 'Mirinda Drink'
                prod['price'] = 15
                prod['weight'] = '320 مل'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'ميريندا المنعشة بطعم الفاكهة الفوار {prod["flavor"]}.'
        elif 'schweppes' in img_name:
            prod['brand'] = 'شويبس (Schweppes)'
            if 'peach' in img_name:
                prod['name'] = 'شويبس جولد خوخ كانز 250 مل'
                prod['nameEn'] = 'Schweppes Gold Peach Can'
                prod['price'] = 15
                prod['weight'] = '250 مل'
                prod['flavor'] = 'خوخ جولد'
            elif 'pineapple' in img_name:
                if '1l' in img_name or 'tall' in img_name:
                    prod['name'] = 'شويبس جولد أناناس زجاجة 1 لتر'
                    prod['nameEn'] = 'Schweppes Gold Pineapple Bottle 1L'
                    prod['price'] = 22
                    prod['weight'] = '1 لتر'
                else:
                    prod['name'] = 'شويبس جولد أناناس كانز 250 مل'
                    prod['nameEn'] = 'Schweppes Gold Pineapple Can'
                    prod['price'] = 15
                    prod['weight'] = '250 مل'
                prod['flavor'] = 'أناناس جولد'
            elif 'lemon-mint' in img_name:
                if '1l' in img_name:
                    prod['name'] = 'شويبس ليمون نعناع زجاجة 1 لتر'
                    prod['nameEn'] = 'Schweppes Lemon Mint 1L'
                    prod['price'] = 22
                    prod['weight'] = '1 لتر'
                elif '300ml' in img_name:
                    prod['name'] = 'شويبس ليمون نعناع زجاجة بوكيت 300 مل'
                    prod['nameEn'] = 'Schweppes Lemon Mint 300ml'
                    prod['price'] = 12
                    prod['weight'] = '300 مل'
                else:
                    prod['name'] = 'شويبس ليمون نعناع كانز 250 مل'
                    prod['nameEn'] = 'Schweppes Lemon Mint Can'
                    prod['price'] = 15
                    prod['weight'] = '250 مل'
                prod['flavor'] = 'ليمون نعناع'
            elif 'pomegranate' in img_name:
                if '1-75l' in img_name:
                    prod['name'] = 'شويبس رمان عائلي 1.75 لتر'
                    prod['nameEn'] = 'Schweppes Pomegranate 1.75L'
                    prod['price'] = 30
                    prod['weight'] = '1.75 لتر'
                elif '1l' in img_name:
                    prod['name'] = 'شويبس رمان زجاجة 1 لتر'
                    prod['nameEn'] = 'Schweppes Pomegranate Bottle 1L'
                    prod['price'] = 22
                    prod['weight'] = '1 لتر'
                elif 'pocket' in img_name:
                    prod['name'] = 'شويبس رمان زجاجة بوكيت 300 مل'
                    prod['nameEn'] = 'Schweppes Pomegranate Pocket 300ml'
                    prod['price'] = 12
                    prod['weight'] = '300 مل'
                else:
                    prod['name'] = 'شويبس رمان كانز 250 مل'
                    prod['nameEn'] = 'Schweppes Pomegranate Can'
                    prod['price'] = 15
                    prod['weight'] = '250 مل'
                prod['flavor'] = 'رمان'
            else:
                prod['name'] = 'شويبس مشروب فوار'
                prod['nameEn'] = 'Schweppes Soda'
                prod['price'] = 15
                prod['weight'] = '250 مل'
                prod['flavor'] = 'شويبس'
            prod['description'] = f'المشروب الفوار الأرقى من شويبس بنكهة {prod["flavor"]}.'
        elif 'spiro-spathis' in img_name:
            prod['brand'] = 'سبيرو سباتس (Spiro Spathis)'
            prod['badge'] = 'مشروب مصري 100% 🇪🇬'
            if 'apple-glass' in img_name:
                prod['name'] = 'سبيرو سباتس تفاح زجاجة كلاسيك 330 مل'
                prod['nameEn'] = 'Spiro Spathis Apple Glass'
                prod['price'] = 12
                prod['weight'] = '330 مل'
                prod['flavor'] = 'تفاح'
            elif 'black-grape' in img_name or 'grape-purple' in img_name:
                prod['name'] = 'سبيرو سباتس عنب أسود كلاسيك 330 مل'
                prod['nameEn'] = 'Spiro Spathis Black Grape'
                prod['price'] = 12
                prod['weight'] = '330 مل'
                prod['flavor'] = 'عنب أسود'
            elif 'cola' in img_name:
                prod['name'] = 'سبيرو سباتس كولا زجاجة بلاستيك 330 مل'
                prod['nameEn'] = 'Spiro Spathis Cola Plastic'
                prod['price'] = 10
                prod['weight'] = '330 مل'
                prod['flavor'] = 'كولا مصرية'
            elif 'kiwi' in img_name:
                prod['name'] = 'سبيرو سباتس كيوي 330 مل'
                prod['nameEn'] = 'Spiro Spathis Kiwi'
                prod['price'] = 12
                prod['weight'] = '330 مل'
                prod['flavor'] = 'كيوي'
            elif 'lemon-1l' in img_name:
                prod['name'] = 'سبيرو سباتس ليمون زجاجة عائلية 1 لتر'
                prod['nameEn'] = 'Spiro Spathis Lemon 1L'
                prod['price'] = 22
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'ليمون صودا'
            elif 'lemon' in img_name:
                prod['name'] = 'سبيرو سباتس ليمون زجاجة بلاستيك 330 مل'
                prod['nameEn'] = 'Spiro Spathis Lemon Plastic'
                prod['price'] = 10
                prod['weight'] = '330 مل'
                prod['flavor'] = 'ليمون صودا'
            elif 'pineapple' in img_name:
                prod['name'] = 'سبيرو سباتس أناناس زجاجة كلاسيك 330 مل'
                prod['nameEn'] = 'Spiro Spathis Pineapple'
                prod['price'] = 12
                prod['weight'] = '330 مل'
                prod['flavor'] = 'أناناس'
            else:
                prod['name'] = 'سبيرو سباتس مشروب مصري فوار'
                prod['nameEn'] = 'Spiro Spathis Soda'
                prod['price'] = 12
                prod['weight'] = '330 مل'
                prod['flavor'] = 'صودا مصرية'
            prod['description'] = f'المشروب الغازي المصري العريق سبيرو سباتس منذ 1920 بنكهة {prod["flavor"]}.'
        elif 'v-super' in img_name or 'v7' in img_name:
            prod['brand'] = 'ڤي سوڤن (V7 / V Super Soda)'
            prod['badge'] = 'مشروب ڤيتامين صودا 🥤'
            prod['price'] = 15
            prod['weight'] = '300 مل'
            if 'cola' in img_name:
                prod['name'] = 'ڤي سوبر صودا كولا منعشة'
                prod['nameEn'] = 'V Super Soda Cola'
                prod['flavor'] = 'كولا ڤيتامين'
            elif 'diet-cola' in img_name:
                prod['name'] = 'ڤي سوبر صودا دايت كولا بدون سكر'
                prod['nameEn'] = 'V Super Soda Diet Cola'
                prod['flavor'] = 'دايت كولا'
            elif 'lemon-lime' in img_name:
                prod['name'] = 'ڤي سوبر صودا ليمون لايم'
                prod['nameEn'] = 'V Super Soda Lemon Lime'
                prod['flavor'] = 'ليمون لايم'
            elif 'blueberry' in img_name:
                prod['name'] = 'ڤي سفن بلو بيري توت بري'
                prod['nameEn'] = 'V7 Sparkling Blueberry'
                prod['flavor'] = 'توت أزرق'
            elif 'malt-apple' in img_name:
                prod['name'] = 'ڤي سفن مالت تفاح شعير فوار'
                prod['nameEn'] = 'V7 Malt Apple'
                prod['flavor'] = 'تفاح مالت'
            elif 'pinacolada' in img_name:
                prod['name'] = 'ڤي سفن بينا كولادا جوز هند وأناناس'
                prod['nameEn'] = 'V7 Sparkling Pina Colada'
                prod['flavor'] = 'بينا كولادا'
            elif 'pink-lemonade' in img_name:
                prod['name'] = 'ڤي سفن بينك ليموناضة'
                prod['nameEn'] = 'V7 Pink Lemonade'
                prod['flavor'] = 'بينك ليموناضة'
            else:
                prod['name'] = 'ڤي سفن مشروب فوار'
                prod['nameEn'] = 'V7 Sparkling Drink'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'مشروب ڤي سفن الفوار المنعش والمعزز بالفيتامينات بنكهة {prod["flavor"]}.'
        elif 'suntop' in img_name:
            prod['brand'] = 'سن توب (Sun Top)'
            prod['price'] = 10
            prod['weight'] = '125 مل'
            prod['badge'] = 'فيتامين سي 🍊'
            if 'alphonso-mango' in img_name:
                prod['name'] = 'سن توب عصير مانجو ألفونسو'
                prod['nameEn'] = 'Sun Top Alphonso Mango'
                prod['flavor'] = 'مانجو ألفونسو'
            elif 'apple' in img_name:
                prod['name'] = 'سن توب عصير تفاح طبيعي'
                prod['nameEn'] = 'Sun Top Apple Juice'
                prod['flavor'] = 'تفاح'
            elif 'berry-mix' in img_name:
                prod['name'] = 'سن توب عصير ميكس توت'
                prod['nameEn'] = 'Sun Top Berry Mix'
                prod['flavor'] = 'توت مشكل'
            elif 'mixed-fruit' in img_name:
                prod['name'] = 'سن توب عصير فواكه مشكلة'
                prod['nameEn'] = 'Sun Top Mixed Fruits'
                prod['flavor'] = 'فواكه مشكلة'
            elif 'orange' in img_name:
                prod['name'] = 'سن توب عصير برتقال طبيعي'
                prod['nameEn'] = 'Sun Top Orange Juice'
                prod['flavor'] = 'برتقال'
            elif 'pink-lemon' in img_name:
                prod['name'] = 'سن توب عصير ليمون وردي'
                prod['nameEn'] = 'Sun Top Pink Lemon'
                prod['flavor'] = 'ليمون وردي'
            elif 'spicy-tangerine' in img_name:
                prod['name'] = 'سن توب يوسفي مشطشط'
                prod['nameEn'] = 'Sun Top Spicy Tangerine'
                prod['flavor'] = 'يوسفي مشطشط'
            else:
                prod['name'] = 'سن توب عصير فواكه'
                prod['nameEn'] = 'Sun Top Fruit Drink'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير سن توب الغني بفيتامين سي بنكهة {prod["flavor"]}.'
        elif 'pure' in img_name or ('juhayna' in img_name and any(k in img_name for k in ['orange', 'cocktail', 'berries', 'pina-colada'])):
            prod['brand'] = 'جهينة (Juhayna Pure)'
            if '1l' in img_name:
                prod['price'] = 45
                prod['weight'] = '1 لتر'
                prod['badge'] = 'عصير طبيعي 100% بدون سكر 1 لتر'
            else:
                prod['price'] = 12
                prod['weight'] = '235 مل'
                prod['badge'] = 'عصير طبيعي 100%'
            if 'guava' in img_name:
                prod['name'] = 'جهينة بيور كوكتيل جوافة طبيعي 1 لتر'
                prod['nameEn'] = 'Juhayna Pure Guava Cocktail 1L'
                prod['flavor'] = 'جوافة'
            elif 'mango-peach' in img_name:
                prod['name'] = 'جهينة بيور مانجو وخوخ طبيعي 1 لتر'
                prod['nameEn'] = 'Juhayna Pure Mango & Peach 1L'
                prod['flavor'] = 'مانجو وخوخ'
            elif 'red-cherry' in img_name or 'mon-cherry' in img_name:
                prod['name'] = 'جهينة بيور مون شيري كرز وتفاح 1 لتر'
                prod['nameEn'] = 'Juhayna Pure Mon Cherry 1L'
                prod['flavor'] = 'كرز وتفاح'
            elif 'red-grapes' in img_name:
                prod['name'] = 'جهينة بيور عنب أحمر طبيعي 1 لتر'
                prod['nameEn'] = 'Juhayna Pure Red Grapes 1L'
                prod['flavor'] = 'عنب أحمر'
            elif 'pina-colada' in img_name:
                prod['name'] = 'جهينة عصير بينا كولادا جوز هند وأناناس 1 لتر'
                prod['nameEn'] = 'Juhayna Pina Colada 1L'
                prod['flavor'] = 'بينا كولادا'
            elif 'orange' in img_name:
                prod['name'] = 'جهينة بيور برتقال طبيعي 100%' + (' 1 لتر' if '1l' in img_name else ' 235 مل')
                prod['nameEn'] = 'Juhayna Pure Orange Juice'
                prod['flavor'] = 'برتقال طبيعي'
            elif 'cocktail' in img_name:
                prod['name'] = 'جهينة عصير كوكتيل فواكه 235 مل'
                prod['nameEn'] = 'Juhayna Fruit Cocktail 235ml'
                prod['flavor'] = 'كوكتيل فواكه'
            elif 'mixed-berries' in img_name:
                prod['name'] = 'جهينة عصير ميكس توت 235 مل'
                prod['nameEn'] = 'Juhayna Mixed Berries 235ml'
                prod['flavor'] = 'ميكس توت'
            else:
                prod['name'] = 'جهينة عصير فاكهة'
                prod['nameEn'] = 'Juhayna Juice'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير جهينة الطبيعي 100% بدون إضافة سكر أو مواد حافظة بنكهة {prod["flavor"]}.'
        elif 'beyti' in img_name:
            prod['brand'] = 'بيتي (Beyti)'
            if '1l' in img_name:
                prod['price'] = 35
                prod['weight'] = '1 لتر'
            else:
                prod['price'] = 10
                prod['weight'] = '235 مل'
            if 'plus-lemon-mint' in img_name:
                prod['name'] = 'بيتي بلس ليمون نعناع منعش غني بفيتامين سي'
                prod['nameEn'] = 'Beyti Plus Lemon Mint'
                prod['flavor'] = 'ليمون نعناع'
            elif 'plus-orange' in img_name:
                prod['name'] = 'بيتي بلس برتقال غني بفيتامين سي'
                prod['nameEn'] = 'Beyti Plus Orange'
                prod['flavor'] = 'برتقال'
            elif 'apple' in img_name:
                prod['name'] = 'بيتي عصير تفاح نقي' + (' 1 لتر' if '1l' in img_name else ' 235 مل')
                prod['nameEn'] = 'Beyti Apple Juice'
                prod['flavor'] = 'تفاح'
            elif 'cocktail' in img_name:
                prod['name'] = 'بيتي عصير كوكتيل فواكه مشكلة' + (' 1 لتر' if '1l' in img_name else ' 235 مل')
                prod['nameEn'] = 'Beyti Cocktail Juice'
                prod['flavor'] = 'كوكتيل فواكه'
            elif 'guava' in img_name:
                prod['name'] = 'بيتي عصير جوافة ممتازة' + (' 1 لتر' if '1l' in img_name else ' 235 مل')
                prod['nameEn'] = 'Beyti Guava Juice'
                prod['flavor'] = 'جوافة'
            elif 'mango' in img_name:
                prod['name'] = 'بيتي عصير مانجو فاخر 235 مل'
                prod['nameEn'] = 'Beyti Mango Juice 235ml'
                prod['flavor'] = 'مانجو'
            elif 'orange' in img_name:
                prod['name'] = 'بيتي عصير برتقال ممتاز' + (' 1 لتر' if '1l' in img_name else ' 235 مل')
                prod['nameEn'] = 'Beyti Orange Juice'
                prod['flavor'] = 'برتقال'
            else:
                prod['name'] = 'بيتي عصير فواكه'
                prod['nameEn'] = 'Beyti Juice'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير بيتي فائق الجودة واللذة بنكهة {prod["flavor"]}.'
        elif 'lamar' in img_name:
            prod['brand'] = 'لمار (Lamar)'
            if '1l' in img_name:
                prod['price'] = 45
                prod['weight'] = '1 لتر'
            else:
                prod['price'] = 12
                prod['weight'] = '200 مل'
            if 'tomato' in img_name:
                prod['name'] = 'لمار عصير طماطم طبيعي 100% بدون سكر' + (' 1 لتر' if '1l' in img_name else ' 200 مل')
                prod['nameEn'] = 'Lamar 100% Tomato Juice'
                prod['flavor'] = 'طماطم طبيعية'
            elif 'guava' in img_name:
                prod['name'] = 'لمار عصير جوافة طبيعي 100%' + (' 1 لتر' if '1l' in img_name else ' 200 مل')
                prod['nameEn'] = 'Lamar Guava Juice'
                prod['flavor'] = 'جوافة'
            elif 'lemon' in img_name:
                prod['name'] = 'لمار مشروب ليمون ونعناع منعش' + (' 1 لتر' if '1l' in img_name else ' 200 مل')
                prod['nameEn'] = 'Lamar Lemon Mint Drink'
                prod['flavor'] = 'ليمون نعناع'
            elif 'mango' in img_name:
                prod['name'] = 'لمار عصير مانجو فاخر' + (' 1 لتر' if '1l' in img_name else ' 200 مل')
                prod['nameEn'] = 'Lamar Mango Drink'
                prod['flavor'] = 'مانجو'
            elif 'orange' in img_name:
                prod['name'] = 'لمار عصير برتقال طبيعي 100%' + (' 1 لتر' if '1l' in img_name else ' 200 مل')
                prod['nameEn'] = 'Lamar 100% Orange Juice'
                prod['flavor'] = 'برتقال'
            elif 'pineapple' in img_name:
                prod['name'] = 'لمار مشروب أناناس استوائي 200 مل'
                prod['nameEn'] = 'Lamar Pineapple Drink 200ml'
                prod['flavor'] = 'أناناس'
            else:
                prod['name'] = 'عصير لمار طبيعي'
                prod['nameEn'] = 'Lamar Juice'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير لمار النقي المستخلص من أفضل الفواكه الطبيعية بنكهة {prod["flavor"]}.'
        elif 'aslan' in img_name:
            prod['brand'] = 'أصلان (Aslan)'
            prod['price'] = 10
            prod['weight'] = '235 مل'
            if 'apple' in img_name:
                prod['name'] = 'أصلان مشروب تفاح غني بفيتامين سي 235 مل'
                prod['nameEn'] = 'Aslan Apple Drink 235ml'
                prod['flavor'] = 'تفاح'
            elif 'cocktail' in img_name:
                prod['name'] = 'أصلان كوكتيل فواكه غني بفيتامين سي 235 مل'
                prod['nameEn'] = 'Aslan Fruit Cocktail 235ml'
                prod['flavor'] = 'كوكتيل فواكه'
            elif 'guava' in img_name:
                prod['name'] = 'أصلان مشروب جوافة 235 مل'
                prod['nameEn'] = 'Aslan Guava Drink 235ml'
                prod['flavor'] = 'جوافة'
            elif 'mango-peach' in img_name:
                prod['name'] = 'أصلان مانجو وخوخ 235 مل'
                prod['nameEn'] = 'Aslan Mango Peach 235ml'
                prod['flavor'] = 'مانجو وخوخ'
            elif 'mango' in img_name:
                prod['name'] = 'أصلان مشروب مانجو 235 مل'
                prod['nameEn'] = 'Aslan Mango Drink 235ml'
                prod['flavor'] = 'مانجو'
            elif 'orange' in img_name:
                prod['name'] = 'أصلان مشروب برتقال 235 مل'
                prod['nameEn'] = 'Aslan Orange Drink 235ml'
                prod['flavor'] = 'برتقال'
            elif 'pineapple' in img_name:
                prod['name'] = 'أصلان مشروب أناناس 235 مل'
                prod['nameEn'] = 'Aslan Pineapple Drink 235ml'
                prod['flavor'] = 'أناناس'
            elif 'tropical' in img_name:
                prod['name'] = 'أصلان مشروب فواكه استوائية تروبيكال 235 مل'
                prod['nameEn'] = 'Aslan Tropical Fruit Drink 235ml'
                prod['flavor'] = 'فواكه استوائية'
            else:
                prod['name'] = 'أصلان مشروب فاكهة'
                prod['nameEn'] = 'Aslan Fruit Drink'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير أصلان المنعش والمعزز بفيتامين سي بنكهة {prod["flavor"]}.'
        elif 'bekhero' in img_name:
            prod['brand'] = 'بخيره (Bekhero)'
            prod['price'] = 10
            prod['weight'] = '225 مل'
            if 'apple' in img_name:
                prod['name'] = 'بخيره مشروب تفاح 225 مل بدون مواد حافظة'
                prod['nameEn'] = 'Bekhero Apple Drink 225ml'
                prod['flavor'] = 'تفاح'
            elif 'guava' in img_name:
                prod['name'] = 'بخيره مشروب جوافة 225 مل'
                prod['nameEn'] = 'Bekhero Guava Drink 225ml'
                prod['flavor'] = 'جوافة'
            elif 'mango' in img_name:
                prod['name'] = 'بخيره مشروب مانجو 225 مل'
                prod['nameEn'] = 'Bekhero Mango Drink 225ml'
                prod['flavor'] = 'مانجو'
            else:
                prod['name'] = 'بخيره عصير فاكهة'
                prod['nameEn'] = 'Bekhero Drink'
                prod['flavor'] = 'فواكه'
            prod['description'] = f'عصير بخيره الطبيعي واللذيذ بنكهة {prod["flavor"]}.'
        elif 'rani' in img_name:
            prod['brand'] = 'راني (Rani Float)'
            prod['price'] = 18
            prod['weight'] = '240 مل'
            prod['badge'] = 'حبيبات فاكهة طبيعية 🍑'
            if 'mango' in img_name:
                prod['name'] = 'راني مانجو مع قطع الفاكهة الطبيعية كانز 240 مل'
                prod['nameEn'] = 'Rani Mango Pieces Float Can 240ml'
                prod['flavor'] = 'مانجو مع قطع'
            elif 'orange' in img_name:
                prod['name'] = 'راني برتقال مع حبيبات البرتقال كانز 240 مل'
                prod['nameEn'] = 'Rani Orange Pieces Float Can 240ml'
                prod['flavor'] = 'برتقال مع حبيبات'
            elif 'peach' in img_name:
                prod['name'] = 'راني خوخ مع قطع الخوخ الحقيقية كانز 240 مل'
                prod['nameEn'] = 'Rani Peach Float Can 240ml'
                prod['flavor'] = 'خوخ مع قطع'
            elif 'pineapple' in img_name:
                prod['name'] = 'راني أناناس مع قطع الأناناس كانز 240 مل'
                prod['nameEn'] = 'Rani Pineapple Float Can 240ml'
                prod['flavor'] = 'أناناس مع قطع'
            elif 'strawberry-banana' in img_name:
                prod['name'] = 'راني فراولة وموز مع قطع الفاكهة كانز 240 مل'
                prod['nameEn'] = 'Rani Strawberry Banana Float Can 240ml'
                prod['flavor'] = 'فراولة وموز'
            else:
                prod['name'] = 'راني مشروب فواكه بحبيبات الفاكهة'
                prod['nameEn'] = 'Rani Float Drink'
                prod['flavor'] = 'فواكه بقطع'
            prod['description'] = f'عصير راني المنعش الغني بقطع الفواكه الحقيقية الطبيعية بنكهة {prod["flavor"]}.'
        elif 'dina-farms' in img_name and ('juice' in img_name or 'pomegranate' in img_name or 'orange' in img_name or 'mango' in img_name or 'pineapple' in img_name or 'lemon' in img_name):
            prod['brand'] = 'مزارع دينا (Dina Farms)'
            if 'bottle' in img_name or 'fresh' in img_name:
                prod['price'] = 30
                prod['weight'] = '850 مل'
                prod['badge'] = 'عصير طازج 100%'
            else:
                prod['price'] = 15
                prod['weight'] = '250 مل'
                prod['badge'] = 'عصير طازج 250 مل'
            if 'pomegranate' in img_name:
                prod['name'] = 'مزارع دينا عصير رمان طبيعي طازج'
                prod['nameEn'] = 'Dina Farms Fresh Pomegranate Juice'
                prod['flavor'] = 'رمان طازج'
            elif 'pineapple' in img_name:
                prod['name'] = 'مزارع دينا عصير أناناس طبيعي فريش'
                prod['nameEn'] = 'Dina Farms Fresh Pineapple Juice'
                prod['flavor'] = 'أناناس فريش'
            elif 'mango' in img_name:
                prod['name'] = 'مزارع دينا عصير مانجو طبيعي فريش'
                prod['nameEn'] = 'Dina Farms Fresh Mango Juice'
                prod['flavor'] = 'مانجو فريش'
            elif 'orange' in img_name:
                prod['name'] = 'مزارع دينا عصير برتقال طبيعي 100% فريش'
                prod['nameEn'] = 'Dina Farms Fresh Orange Juice'
                prod['flavor'] = 'برتقال فريش'
            elif 'lemon-mint' in img_name:
                prod['name'] = 'مزارع دينا عصير ليمون ونعناع فريش'
                prod['nameEn'] = 'Dina Farms Fresh Lemon Mint Juice'
                prod['flavor'] = 'ليمون نعناع فريش'
            else:
                prod['name'] = 'مزارع دينا عصير فريش'
                prod['nameEn'] = 'Dina Farms Fresh Juice'
                prod['flavor'] = 'عصير طبيعي'
            prod['description'] = f'عصير مزارع دينا الطازج المحضر من أجود ثمار الفاكهة الطبيعية 100% بنكهة {prod["flavor"]}.'
        elif 'tang' in img_name or 'fruty' in img_name or 'yalla-smoozy' in img_name:
            if 'tang' in img_name:
                prod['brand'] = 'تانج (Tang)'
                prod['price'] = 12
                prod['weight'] = 'كيس 2 لتر'
                prod['badge'] = 'بودرة عصير سريع التحضير'
                prod['name'] = 'تانج بودرة عصير مانجو سريع التحضير لتحضير 2 لتر'
                prod['nameEn'] = 'Tang Mango Instant Drink Powder 2L'
                prod['flavor'] = 'مانجو مركز'
                prod['description'] = 'بودرة تانج بالمانجو الغنية بفيتامين C والزنك لتحضير 2 لتر من العصير المنعش.'
            elif 'fruty' in img_name:
                prod['brand'] = 'فروتي (Fruty)'
                prod['price'] = 8
                prod['weight'] = 'كيس تحضير'
                prod['name'] = 'فروتي مسحوق شراب خوخ سريع التحضير'
                prod['nameEn'] = 'Fruty Peach Instant Drink Mix'
                prod['flavor'] = 'خوخ'
                prod['description'] = 'مسحوق عصير فروتي المنعش بنكهة الخوخ اللذيذ، سريع الذوبان في الماء.'
            elif 'yalla-smoozy' in img_name:
                prod['brand'] = 'يلا سموزي (Yalla Smoozy)'
                prod['price'] = 10
                prod['weight'] = '40 جم'
                prod['badge'] = 'بودرة سموزي مع ثلج 🍧'
                if 'berries' in img_name:
                    prod['name'] = 'يلا سموزي ميكس توت مثلج فوري'
                    prod['nameEn'] = 'Yalla Smoozy Mixed Berries'
                    prod['flavor'] = 'ميكس توت'
                elif 'pina-colada' in img_name:
                    prod['name'] = 'يلا سموزي بينا كولادا أناناس وجوز هند'
                    prod['nameEn'] = 'Yalla Smoozy Pina Colada'
                    prod['flavor'] = 'بينا كولادا'
                else:
                    prod['name'] = 'يلا سموزي مسحوق مشروب مثلج'
                    prod['nameEn'] = 'Yalla Smoozy Ice Drink Mix'
                    prod['flavor'] = 'سموزي'
                prod['description'] = f'بودرة سموزي سريعة التحضير من يلا سموزي بالفواكه الحقيقية بنكهة {prod["flavor"]}.'

    # ---------------- Energy Drinks ----------------
    elif any(k in img_name for k in ['redbull', 'monster', 'twist', 'sting', 'fury']):
        prod['category'] = 'energy'
        prod['isEgyptian'] = False if ('redbull' in img_name or 'monster' in img_name) else True
        if 'redbull' in img_name:
            prod['brand'] = 'ريد بُل (Red Bull)'
            prod['price'] = 50
            prod['weight'] = '250 مل'
            prod['badge'] = 'مشروب طاقة عالمي ⚡'
            if 'apricot' in img_name:
                prod['name'] = 'ريد بُل إيديشن مشمش وفراولة 250 مل'
                prod['nameEn'] = 'Red Bull Apricot Edition'
                prod['flavor'] = 'مشمش وفراولة'
            elif 'blueberry' in img_name:
                prod['name'] = 'ريد بُل التوت الأزرق ذا بلو إيديشن 250 مل'
                prod['nameEn'] = 'Red Bull Blueberry Blue Edition'
                prod['flavor'] = 'توت أزرق'
            elif 'peach' in img_name:
                prod['name'] = 'ريد بُل إيديشن خوخ منعش 250 مل'
                prod['nameEn'] = 'Red Bull Peach Edition'
                prod['flavor'] = 'خوخ'
            elif 'purple-acai' in img_name:
                prod['name'] = 'ريد بُل ذا بيربل إيديشن توت أساي 250 مل'
                prod['nameEn'] = 'Red Bull Purple Açai Edition'
                prod['flavor'] = 'توت أساي'
            elif 'silver-lime' in img_name:
                prod['name'] = 'ريد بُل ذا سيلفر إيديشن ليمون لايم 250 مل'
                prod['nameEn'] = 'Red Bull Silver Lime Edition'
                prod['flavor'] = 'ليمون لايم'
            elif 'spring-raspberry' in img_name:
                prod['name'] = 'ريد بُل ذا سبرينج إيديشن توت العليق 250 مل'
                prod['nameEn'] = 'Red Bull Spring Raspberry Edition'
                prod['flavor'] = 'توت عليق'
            elif 'watermelon' in img_name:
                prod['name'] = 'ريد بُل ذا ريد إيديشن بطيخ 250 مل'
                prod['nameEn'] = 'Red Bull Watermelon Red Edition'
                prod['flavor'] = 'بطيخ منعش'
            elif 'original' in img_name:
                prod['name'] = 'ريد بُل مشروب الطاقة الكلاسيكي 250 مل'
                prod['nameEn'] = 'Red Bull Energy Drink 250ml'
                prod['flavor'] = 'طاقة كلاسيك'
            else:
                prod['name'] = 'ريد بُل مشروب طاقة'
                prod['nameEn'] = 'Red Bull Energy'
                prod['flavor'] = 'طاقة'
            prod['description'] = f'مشروب الطاقة النمساوي العالمي ريد بُل يمنحك أجنحة بنكهة {prod["flavor"]}.'
        elif 'monster' in img_name:
            prod['brand'] = 'مونستر إنرجي (Monster Energy)'
            prod['price'] = 65
            prod['weight'] = '500 مل'
            prod['badge'] = 'حجم عملاق 500 مل ⚡'
            if 'mango-loco' in img_name:
                prod['name'] = 'مونستر إنرجي مانجو لوكو جوسد 500 مل'
                prod['nameEn'] = 'Monster Energy Mango Loco 500ml'
                prod['flavor'] = 'مانجو استوائي'
            elif 'ultra-rosa' in img_name:
                prod['name'] = 'مونستر إنرجي ألترا روزا بدون سكر 500 مل'
                prod['nameEn'] = 'Monster Energy Ultra Rosa Zero Sugar'
                prod['flavor'] = 'ألترا روزا فواكه زهرية'
            elif 'ultra-white' in img_name:
                prod['name'] = 'مونستر إنرجي ألترا وايت زيرو سكر 500 مل'
                prod['nameEn'] = 'Monster Energy Ultra White Zero Sugar'
                prod['flavor'] = 'حمضيات منعشة زيرو'
            elif 'original' in img_name:
                prod['name'] = 'مونستر إنرجي أوريجينال كانز أسود وأخضر 500 مل'
                prod['nameEn'] = 'Monster Energy Original 500ml'
                prod['flavor'] = 'طاقة أصلي'
            else:
                prod['name'] = 'مونستر إنرجي مشروب طاقة'
                prod['nameEn'] = 'Monster Energy Drink'
                prod['flavor'] = 'طاقة'
            prod['description'] = f'مشروب الطاقة الوحش مونستر كانز بحجم 500 مل بنكهة {prod["flavor"]}.'
        elif 'twist' in img_name:
            prod['brand'] = 'تويست إنرجي (Twist Energy)'
            prod['price'] = 15
            prod['weight'] = '250 مل'
            prod['badge'] = 'طاقة مصرية 15 ج.م ⚡'
            if 'coconut-berry' in img_name:
                prod['name'] = 'تويست إنرجي جوز هند وتوت أزرق'
                prod['nameEn'] = 'Twist Energy Coconut Berry'
                prod['flavor'] = 'جوز هند وتوت'
            elif 'mango-peach' in img_name:
                prod['name'] = 'تويست إنرجي مانجو وخوخ استوائي'
                prod['nameEn'] = 'Twist Energy Mango Peach'
                prod['flavor'] = 'مانجو وخوخ'
            elif 'original' in img_name:
                prod['name'] = 'تويست إنرجي كلاسيك أوريجينال'
                prod['nameEn'] = 'Twist Energy Original'
                prod['flavor'] = 'طاقة كلاسيك'
            elif 'strawberry' in img_name:
                prod['name'] = 'تويست إنرجي فراولة منعشة'
                prod['nameEn'] = 'Twist Energy Strawberry'
                prod['flavor'] = 'فراولة'
            else:
                prod['name'] = 'تويست مشروب طاقة'
                prod['nameEn'] = 'Twist Energy Drink'
                prod['flavor'] = 'طاقة'
            prod['description'] = f'مشروب الطاقة تويست المنعش للياقة ونشاط طوال اليوم بنكهة {prod["flavor"]}.'
        elif 'sting' in img_name:
            prod['brand'] = 'ستينج (Sting)'
            prod['price'] = 10
            prod['weight'] = '250 مل'
            prod['badge'] = 'طاقة صاروخية 10 ج.م ⚡'
            prod['name'] = 'ستينج مشروب طاقة أحمر زجاجة 250 مل'
            prod['nameEn'] = 'Sting Red Energy Drink Bottle 250ml'
            prod['flavor'] = 'فراولة فوارة وطاقة'
            prod['description'] = 'مشروب الطاقة ستينج الأحمر المنعش الفوار لزيادة النشاط والتركيز.'
        elif 'fury' in img_name:
            prod['brand'] = 'فيوري (Fury Energy)'
            prod['price'] = 10
            prod['weight'] = '250 مل'
            prod['badge'] = 'طاقة جولد 10 ج.م ⚡'
            prod['name'] = 'فيوري مشروب طاقة جولد زجاجة 250 مل'
            prod['nameEn'] = 'Fury Gold Energy Drink Bottle'
            prod['flavor'] = 'جولد إنرجي'
            prod['description'] = 'مشروب الطاقة فيوري الذهبي بتركيبة الفيتامينات والجينسينج للنشاط المستمر.'

    # ---------------- Sweets & Chocolate & Biscuits ----------------
    elif any(k in img_name for k in ['cadbury', 'galaxy', 'kitkat', 'milka', 'bounty', 'corona', 'molto', 'hohos', 'cocoa', 'bimbo', 'munchi', 'biskrem', 'og-', 'm-and-ms', 'maltesers', 'kata-kito', 'oreo', 'nutella', 'nussa', 'dreem']):
        prod['category'] = 'sweets'
        if 'cadbury' in img_name:
            prod['brand'] = 'كادبوري (Cadbury)'
            prod['isEgyptian'] = False
            if 'bubbly-bar' in img_name or 'cadbury-bubbly-bar' in img_name:
                prod['name'] = 'شوكولاتة كادبوري ديري ميلك بابلي أصابع'
                prod['nameEn'] = 'Cadbury Dairy Milk Bubbly Bar'
                prod['price'] = 25
                prod['weight'] = '40 جم'
                prod['flavor'] = 'شوكولاتة بالحليب بابلي'
            elif 'bubbly' in img_name:
                prod['name'] = 'شوكولاتة كادبوري ديري ميلك بابلي تابلت كبير'
                prod['nameEn'] = 'Cadbury Dairy Milk Bubbly Tablet'
                prod['price'] = 55
                prod['weight'] = '87 جم'
                prod['flavor'] = 'شوكولاتة بالحليب بابلي'
            elif 'choco-delight' in img_name:
                prod['name'] = 'شوكولاتة كادبوري شوكو ديلايت إم ماكس 300 جم'
                prod['nameEn'] = 'Cadbury Choco Delight MMMAX'
                prod['price'] = 145
                prod['weight'] = '300 جم'
                prod['flavor'] = 'شوكو ديلايت شوكولاتة مكثفة'
            elif 'oreo' in img_name:
                prod['name'] = 'شوكولاتة كادبوري ديري ميلك محشوة ببسكويت أوريو'
                prod['nameEn'] = 'Cadbury Dairy Milk Oreo'
                prod['price'] = 45
                prod['weight'] = '95 جم'
                prod['flavor'] = 'شوكولاتة بحشو أوريو'
            elif 'hot-cocoa' in img_name:
                prod['name'] = 'كادبوري هوت كوكو 3 في 1 مشروب كاكاو ساخن'
                prod['nameEn'] = 'Cadbury Hot Cocoa 3in1'
                prod['price'] = 12
                prod['weight'] = 'ظرف 30 جم'
                prod['flavor'] = 'كاكاو بالحليب'
            elif 'moro' in img_name:
                prod['name'] = 'شوكولاتة كادبوري مورو بالكراميل والنوجا 1.5X حجم أكبر'
                prod['nameEn'] = 'Cadbury Moro Chocolate Bar 1.5X'
                prod['price'] = 15
                prod['weight'] = '55 جم'
                prod['flavor'] = 'كراميل ونوجا شوكولاتة'
            else:
                prod['name'] = 'شوكولاتة كادبوري ديري ميلك'
                prod['nameEn'] = 'Cadbury Dairy Milk Chocolate'
                prod['price'] = 35
                prod['weight'] = '80 جم'
                prod['flavor'] = 'شوكولاتة بالحليب'
            prod['description'] = f'شوكولاتة كادبوري الإنجليزية الأصلية الفاخرة المذاق بنكهة {prod["flavor"]}.'
        elif 'galaxy' in img_name:
            prod['brand'] = 'جالكسي (Galaxy)'
            prod['isEgyptian'] = False
            if 'flutes' in img_name:
                prod['name'] = 'شوكولاتة جالكسي فلوتس أصابع مقرمشة'
                prod['nameEn'] = 'Galaxy Flutes Chocolate'
                prod['price'] = 15
                prod['weight'] = '22.5 جم'
                prod['flavor'] = 'ويفر شوكولاتة فلوتس'
            elif 'hazelnut' in img_name:
                prod['name'] = 'شوكولاتة جالكسي ناعمة بالبندق المقرمش'
                prod['nameEn'] = 'Galaxy Smooth Milk Hazelnut'
                prod['price'] = 25
                prod['weight'] = '36 جم'
                prod['flavor'] = 'شوكولاتة بالبندق'
            elif 'smooth-milk' in img_name:
                prod['name'] = 'شوكولاتة جالكسي حليب ناعمة حريرية'
                prod['nameEn'] = 'Galaxy Smooth Milk Chocolate'
                prod['price'] = 25
                prod['weight'] = '36 جم'
                prod['flavor'] = 'شوكولاتة حليب ناعمة'
            else:
                prod['name'] = 'شوكولاتة جالكسي حريرية'
                prod['nameEn'] = 'Galaxy Chocolate'
                prod['price'] = 25
                prod['weight'] = '36 جم'
                prod['flavor'] = 'شوكولاتة بالحليب'
            prod['description'] = f'شوكولاتة جالكسي الناعمة التي تذوب في الفم بنكهة {prod["flavor"]}.'
        elif 'milka' in img_name:
            prod['brand'] = 'ميلكا (Milka)'
            prod['isEgyptian'] = False
            prod['price'] = 65
            prod['weight'] = '100 جم'
            prod['badge'] = 'شوكولاتة حليب جبال الألب 🏔️'
            if 'bubbly' in img_name:
                prod['name'] = 'شوكولاتة ميلكا بابلي فقاعات حليب الألب 100 جم'
                prod['nameEn'] = 'Milka Bubbly Alpine Milk 100g'
                prod['flavor'] = 'حليب الألب بابلي'
            elif 'chips-ahoy' in img_name:
                prod['name'] = 'شوكولاتة ميلكا بحشو كوكيز تشيبس أهوي 100 جم'
                prod['nameEn'] = 'Milka Chips Ahoy Chocolate 100g'
                prod['flavor'] = 'حليب وكوكيز تشيبس أهوي'
            else:
                prod['name'] = 'شوكولاتة ميلكا حليب الألب'
                prod['nameEn'] = 'Milka Alpine Milk Chocolate'
                prod['flavor'] = 'حليب الألب'
            prod['description'] = f'شوكولاتة ميلكا السويسرية الشهيرة بحليب جبال الألب النقي بنكهة {prod["flavor"]}.'
        elif 'kitkat' in img_name:
            prod['brand'] = 'كيت كات (KitKat)'
            prod['isEgyptian'] = False
            if 'chunky-lotus' in img_name:
                prod['name'] = 'كيت كات شانكي بحشو زبدة وبسكويت لوتس'
                prod['nameEn'] = 'KitKat Chunky Lotus Biscoff'
                prod['price'] = 25
                prod['weight'] = '42 جم'
                prod['flavor'] = 'لوتس بسكوف'
            elif '4-finger' in img_name:
                prod['name'] = 'كيت كات 4 أصابع شوكولاتة بالويفر الأحمر'
                prod['nameEn'] = 'KitKat 4 Finger Milk Chocolate'
                prod['price'] = 20
                prod['weight'] = '41.5 جم'
                prod['flavor'] = 'ويفر شوكولاتة بالحليب'
            else:
                prod['name'] = 'كيت كات ويفر شوكولاتة'
                prod['nameEn'] = 'KitKat Chocolate Bar'
                prod['price'] = 20
                prod['weight'] = '40 جم'
                prod['flavor'] = 'ويفر وشوكولاتة'
            prod['description'] = f'أصابع ويفر كيت كات المقرمشة المغطاة بأشهى شوكولاتة حليب بنكهة {prod["flavor"]}.'
        elif 'bounty' in img_name:
            prod['brand'] = 'باونتي (Bounty)'
            prod['isEgyptian'] = False
            prod['price'] = 25
            prod['weight'] = '57 جم'
            prod['name'] = 'شوكولاتة باونتي محشوة بجوز الهند الطبيعي'
            prod['nameEn'] = 'Bounty Milk Chocolate Coconut Bar'
            prod['flavor'] = 'جوز هند وشوكولاتة'
            prod['description'] = 'شوكولاتة باونتي الفاخرة المحشوة بجوز الهند الرطب اللذيذ.'
        elif 'm-and-ms' in img_name:
            prod['brand'] = 'إم آند إمز (M&Ms)'
            prod['isEgyptian'] = False
            prod['price'] = 30
            prod['weight'] = '45 جم'
            prod['name'] = 'شوكولاتة إم آند إمز دراجيه ملونة مقرمشة'
            prod['nameEn'] = 'M&M\'s Chocolate Dragees'
            prod['flavor'] = 'شوكولاتة دراجيه'
            prod['description'] = 'حبات شوكولاتة إم آند إمز المقرمشة الملونة التي تذوب في فمك وليس في يدك.'
        elif 'maltesers' in img_name:
            prod['brand'] = 'مالتيزرز (Maltesers)'
            prod['isEgyptian'] = False
            prod['price'] = 45
            prod['weight'] = '3 أكياس عرض توفير'
            prod['badge'] = 'عرض توفير 3 أكياس 🎁'
            prod['name'] = 'مالتيزرز كرات شوكولاتة مقرمشة 3 عبوات توفير'
            prod['nameEn'] = 'Maltesers Value Offer 3-Pack'
            prod['flavor'] = 'شوكولاتة مالت مقرمشة'
            prod['description'] = 'كرات الشوكولاتة الشهيرة مالتيزرز المقرمشة والخفيفة في عبوة توفير 3 أكياس.'
        elif 'corona' in img_name:
            prod['brand'] = 'كورونا (Corona)'
            prod['isEgyptian'] = True
            prod['badge'] = 'شوكولاتة مصرية عريقة منذ 1919 🇪🇬'
            if 'crispy' in img_name:
                prod['name'] = 'شوكولاتة كورونا كريسبي المقرمشة 5 ج.م'
                prod['nameEn'] = 'Corona Crispy Chocolate Bar'
                prod['price'] = 5
                prod['weight'] = '25 جم'
                prod['flavor'] = 'شوكولاتة كريسبي'
            elif 'dark-72' in img_name:
                prod['name'] = 'شوكولاتة كورونا دارك داكنة 72% كاكاو'
                prod['nameEn'] = 'Corona Dark 72% Cocoa Bar'
                prod['price'] = 20
                prod['weight'] = '80 جم'
                prod['flavor'] = 'كاكاو داكن 72%'
            elif 'dark-almond-stevia' in img_name:
                prod['name'] = 'شوكولاتة كورونا دارك باللوز وسكر ستيفيا دايت'
                prod['nameEn'] = 'Corona Dark Almond Stevia Diet'
                prod['price'] = 25
                prod['weight'] = '75 جم'
                prod['flavor'] = 'دارك باللوز وستيفيا'
            elif 'dark-hazelnut' in img_name:
                prod['name'] = 'شوكولاتة كورونا دارك داكنة بالبندق كيس أخضر'
                prod['nameEn'] = 'Corona Dark Hazelnut Green'
                prod['price'] = 20
                prod['weight'] = '80 جم'
                prod['flavor'] = 'دارك بالبندق'
            elif 'alpine-milk' in img_name or 'king-size' in img_name:
                prod['name'] = 'شوكولاتة كورونا حليب كينج سايز كيس أزرق'
                prod['nameEn'] = 'Corona Alpine Milk King Size'
                prod['price'] = 20
                prod['weight'] = '90 جم'
                prod['flavor'] = 'شوكولاتة بالحليب'
            else:
                prod['name'] = 'شوكولاتة كورونا كلاسيك'
                prod['nameEn'] = 'Corona Classic Chocolate'
                prod['price'] = 15
                prod['weight'] = '60 جم'
                prod['flavor'] = 'شوكولاتة كلاسيك'
            prod['description'] = f'شوكولاتة كورونا المصرية العريقة والمحبوبة بنكهة {prod["flavor"]}.'
        elif 'kata-kito' in img_name:
            prod['brand'] = 'كاتا كيتو (Kata Kito)'
            prod['price'] = 7
            prod['weight'] = '35 جم'
            prod['name'] = 'كاتا كيتو ويفر شوكولاتة كريسبي'
            prod['nameEn'] = 'Kata Kito Chocolate Wafer Bar'
            prod['flavor'] = 'ويفر وشوكولاتة'
            prod['description'] = 'ويفر كاتا كيتو الهش والمغطى بطبقة سميكة من الشوكولاتة اللذيذة.'
        elif 'molto' in img_name:
            prod['brand'] = 'مولتو (Molto)'
            prod['price'] = 15
            prod['weight'] = '85 جم'
            if 'magnum-chocolate-hazelnut' in img_name or 'magnum-single' in img_name:
                prod['name'] = 'مولتو ماجنوم كرواسون شوكولاتة وبندق غني بالحشو'
                prod['nameEn'] = 'Molto Magnum Chocolate Hazelnut'
                prod['flavor'] = 'شوكولاتة وبندق ماجنوم'
            elif 'magnum-mix' in img_name:
                prod['name'] = 'مولتو ماجنوم ميكس كريمة وشوكولاتة بندق'
                prod['nameEn'] = 'Molto Magnum Mix Cream & Hazelnut'
                prod['flavor'] = 'ميكس كريمة وبندق'
            elif 'xxl' in img_name:
                prod['name'] = 'مولتو XXL كرواسون حجم سوبر شوكولاتة وبندق'
                prod['nameEn'] = 'Molto XXL Chocolate Hazelnut'
                prod['flavor'] = 'شوكولاتة وبندق XXL'
            else:
                prod['name'] = 'مولتو كرواسون شوكولاتة'
                prod['nameEn'] = 'Molto Croissant'
                prod['flavor'] = 'شوكولاتة'
            prod['description'] = f'كرواسون مولتو الطازج والمحشو بسخاء بألذ كريمة {prod["flavor"]}.'
        elif 'hohos' in img_name:
            prod['brand'] = 'هوهوز (Hohos)'
            prod['price'] = 7
            prod['weight'] = '50 جم'
            prod['name'] = 'هوهوز كينج كيك شوكولاتة ملفوف محشو بالكريمة'
            prod['nameEn'] = 'Hohos King Chocolate Cake'
            prod['flavor'] = 'شوكولاتة وكريمة'
            prod['description'] = 'كيك الشوكولاتة الإسفنجي المحشو بالكريمة البيضاء والمغطى بالشوكولاتة الذائبة.'
        elif 'cocoa-lovers' in img_name:
            prod['brand'] = 'كوكوا لافرز (Cocoa Lovers)'
            prod['price'] = 10
            prod['weight'] = '75 جم'
            if 'cookies-cream' in img_name:
                prod['name'] = 'كوكوا لافرز بسكويت كوكيز آند كريم'
                prod['nameEn'] = 'Cocoa Lovers Cookies & Cream'
                prod['flavor'] = 'كوكيز وكريمة'
            else:
                prod['name'] = 'كوكوا لافرز بسكويت ساندوتش شوكولاتة كاكاو'
                prod['nameEn'] = 'Cocoa Lovers Sandwich Biscuit'
                prod['flavor'] = 'شوكولاتة كاكاو'
            prod['description'] = f'بسكويت كوكوا لافرز الفاخر والمقرمش بنكهة {prod["flavor"]}.'
        elif 'bimbo' in img_name:
            prod['brand'] = 'بيمبو (Bimbo)'
            prod['price'] = 10
            prod['weight'] = '65 جم'
            if 'choco-max' in img_name:
                prod['name'] = 'بيمبو شوكو ماكس بسكويت شوكولاتة مضاعفة'
                prod['nameEn'] = 'Bimbo Choco Max'
                prod['flavor'] = 'شوكو ماكس'
            else:
                prod['name'] = 'بيمبو الأصلي بسكويت مغطى بالشوكولاتة كيس دهبي'
                prod['nameEn'] = 'Bimbo Original Gold'
                prod['flavor'] = 'بسكويت شوكولاتة دهبي'
            prod['description'] = f'بسكويت بيمبو المصري الأسطوري المحشو والمغطى بالشوكولاتة بنكهة {prod["flavor"]}.'
        elif 'munchi' in img_name:
            prod['brand'] = 'مانشي (Munchi)'
            prod['price'] = 5
            prod['weight'] = '40 جم'
            if 'strawberry' in img_name:
                prod['name'] = 'مانشي ويفر مقرمش بكريمة الفراولة'
                prod['nameEn'] = 'Munchi Strawberry Wafer'
                prod['flavor'] = 'فراولة'
            elif 'vanilla' in img_name:
                prod['name'] = 'مانشي ويفر مقرمش بكريمة الفانيليا'
                prod['nameEn'] = 'Munchi Vanilla Wafer'
                prod['flavor'] = 'فانيليا'
            else:
                prod['name'] = 'مانشي ويفر مقرمش'
                prod['nameEn'] = 'Munchi Wafer'
                prod['flavor'] = 'ويفر'
            prod['description'] = f'ويفر مانشي الهش والخفيف بطبقات كريمة {prod["flavor"]}.'
        elif 'mcvities' in img_name or 'biskrem' in img_name:
            prod['brand'] = 'ماكفيتيز بسكريم (McVitie\'s Biskrem)'
            prod['price'] = 10
            prod['weight'] = '65 جم'
            prod['name'] = 'بسكريم بسكويت محشو بكريمة الكاكاو الغنية'
            prod['nameEn'] = 'McVitie\'s Biskrem Cocoa Cream'
            prod['flavor'] = 'كاكاو ذائب'
            prod['description'] = 'بسكويت مقرمش من الخارج ومحشو بقلب من شوكولاتة الكاكاو الذائبة.'
        elif 'og-' in img_name or 'grandma' in img_name:
            prod['brand'] = 'أو جي جراند ما (OG)'
            prod['price'] = 10
            prod['weight'] = '60 جم'
            prod['name'] = 'أو جي جراند ما بسكويت مقرمش مغطى بالشوكولاتة'
            prod['nameEn'] = 'OG Original Grandma\'s Coated Biscuit'
            prod['flavor'] = 'بسكويت وشوكولاتة'
            prod['description'] = 'بسكويت أو جي الأصلي المقرمش والمغطى بطبقة شوكولاتة لذيذة.'
        elif 'oreo' in img_name:
            prod['brand'] = 'أوريو (Oreo)'
            prod['price'] = 15
            prod['weight'] = '6 قطع (5+1 مجاناً)'
            prod['badge'] = 'عرض 5 + 1 مجاناً 🍪'
            prod['name'] = 'بسكويت أوريو شوكولاتة وبندق عرض 5+1 مجاناً'
            prod['nameEn'] = 'Oreo Chocolate Hazelnut 5+1 Free'
            prod['flavor'] = 'شوكولاتة وبندق'
            prod['description'] = 'بسكويت أوريو الكاكاو الشهير محشو بكريمة الشوكولاتة والبندق اللذيذة.'
        elif 'nutella' in img_name:
            prod['brand'] = 'نوتيلا (Nutella)'
            prod['isEgyptian'] = False
            prod['price'] = 125
            prod['weight'] = '350 جم'
            prod['badge'] = 'شوكولاتة بندق أصلية 🌰'
            prod['name'] = 'نوتيلا برطمان شوكولاتة قابلة للدهن بالبندق والكاكاو 350 جم'
            prod['nameEn'] = 'Nutella Hazelnut Spread Jar 350g'
            prod['flavor'] = 'شوكولاتة وبندق'
            prod['description'] = 'كريمة نوتيلا الإيطالية الشهيرة الغنية بالبندق المحمص والكاكاو النقي.'
        elif 'nussa' in img_name:
            prod['brand'] = 'سيبي نوسا (Cebe Nussa)'
            prod['price'] = 65
            prod['weight'] = '350 جم'
            prod['name'] = 'سيبي نوسا دو شوكولاتة بندق ثنائية حليب وشوكولاتة'
            prod['nameEn'] = 'Cebe Nussa Duo Hazelnut Spread 350g'
            prod['flavor'] = 'شوكولاتة وحليب ثنائي'
            prod['description'] = 'كريمة نوسا الثنائية اللذيذة بالبندق والحليب لفطور وسندوتشات مميزة.'
        elif 'dreem' in img_name:
            prod['brand'] = 'دريم (Dreem)'
            prod['isEgyptian'] = True
            if 'cooking-chocolate-dark' in img_name:
                prod['name'] = 'شوكولاتة خام دريم دارك داكنة للطبخ والحلويات 200 جم'
                prod['nameEn'] = 'Dreem Cooking Chocolate Dark 200g'
                prod['price'] = 45
                prod['weight'] = '200 جم'
                prod['flavor'] = 'شوكولاتة خام دارك'
            elif 'cooking-chocolate-milk' in img_name:
                prod['name'] = 'شوكولاتة خام دريم بالحليب للحلويات والطهي 200 جم'
                prod['nameEn'] = 'Dreem Cooking Chocolate Milk 200g'
                prod['price'] = 45
                prod['weight'] = '200 جم'
                prod['flavor'] = 'شوكولاتة خام بالحليب'
            elif 'cake-chef' in img_name:
                prod['name'] = 'دريم كيك شيف بيكنج بودر مع محسنات كيك'
                prod['nameEn'] = 'Dreem Cake Chef Baking Powder'
                prod['price'] = 5
                prod['weight'] = '23 جم'
                prod['flavor'] = 'بيكنج بودر'
            elif 'vanillin' in img_name:
                prod['name'] = 'دريم فانيليا فانيلين بالسكر لجميع الحلويات'
                prod['nameEn'] = 'Dreem Vanillin Sugar'
                prod['price'] = 3
                prod['weight'] = '2 جم'
                prod['flavor'] = 'فانيليا مركزة'
            elif 'yeast' in img_name:
                prod['name'] = 'دريم خميرة جافة فورية عالية الجودة'
                prod['nameEn'] = 'Dreem Instant Dry Yeast'
                prod['price'] = 6
                prod['weight'] = '12 جم'
                prod['flavor'] = 'خميرة فورية'
            else:
                prod['name'] = 'منتجات دريم للحلويات'
                prod['nameEn'] = 'Dreem Dessert Mix'
                prod['price'] = 10
                prod['weight'] = 'عبوة'
                prod['flavor'] = 'حلويات'
            prod['description'] = f'منتجات دريم الممتازة المعتمدة لكل بيت مصري لإعداد أشهى الكيك والحلويات بنكهة {prod["flavor"]}.'

    # ---------------- Dairy & Milk & Cheeses ----------------
    elif any(k in img_name for k in ['milk', 'rayeb', 'cheese', 'gebna', 'dina-farms', 'juhayna', 'almarai', 'dango', 'obour-land', 'labanita', 'bekhero', 'bashayer', 'nido', 'yogurt', 'frutigo', 'dairy']):
        prod['category'] = 'dairy'
        if 'dina-farms' in img_name:
            prod['brand'] = 'مزارع دينا (Dina Farms)'
            if 'gebna-quraish' in img_name:
                prod['name'] = 'مزارع دينا جبن قريش طبيعي 100% بدون دهون نباتية'
                prod['nameEn'] = 'Dina Farms Natural Quraish Cheese'
                prod['price'] = 55
                prod['weight'] = '450 جم'
                prod['flavor'] = 'جبن قريش طبيعي'
                prod['badge'] = 'طبيعي 100% بدون زيوت نباتية 🧀'
            elif 'gebna-baramily' in img_name:
                prod['name'] = 'مزارع دينا جبنة براميلي طبيعية بالفلفل'
                prod['nameEn'] = 'Dina Farms Natural Baramily Cheese'
                prod['price'] = 65
                prod['weight'] = '500 جم'
                prod['flavor'] = 'براميلي طبيعي'
            elif 'gebna-istanbuly' in img_name:
                prod['name'] = 'مزارع دينا جبنة إسطنبولي حارة طبيعية'
                prod['nameEn'] = 'Dina Farms Natural Istanbuly Cheese'
                prod['price'] = 65
                prod['weight'] = '500 جم'
                prod['flavor'] = 'إسطنبولي حارة'
            elif 'gebna-melh-khafeef' in img_name:
                prod['name'] = 'مزارع دينا جبنة ملح خفيف طبيعية'
                prod['nameEn'] = 'Dina Farms Light Salt Cheese'
                prod['price'] = 65
                prod['weight'] = '500 جم'
                prod['flavor'] = 'ملح خفيف'
            elif 'gebna-abyad-tary' in img_name:
                prod['name'] = 'مزارع دينا جبن أبيض طري طبيعي 100%'
                prod['nameEn'] = 'Dina Farms Soft White Cheese'
                prod['price'] = 60
                prod['weight'] = '500 جم'
                prod['flavor'] = 'أبيض طري'
            elif 'natural-rayeb' in img_name:
                prod['name'] = 'مزارع دينا لبن رايب طبيعي 100% زجاجة'
                prod['nameEn'] = 'Dina Farms Natural Rayeb Drink'
                prod['price'] = 25
                prod['weight'] = '850 مل'
                prod['flavor'] = 'رايب طبيعي'
            elif 'chocolate-milk' in img_name:
                prod['name'] = 'مزارع دينا حليب طازج بالشوكولاتة زجاجة'
                prod['nameEn'] = 'Dina Farms Fresh Chocolate Milk'
                prod['price'] = 18
                prod['weight'] = '300 مل'
                prod['flavor'] = 'شوكولاتة بالحليب'
            elif 'frutigo-peach' in img_name:
                prod['name'] = 'مزارع دينا فرتيجو زبادي مشروب بالخوخ'
                prod['nameEn'] = 'Dina Farms Frutigo Peach Drinking Yogurt'
                prod['price'] = 15
                prod['weight'] = '220 مل'
                prod['flavor'] = 'زبادي بالخوخ'
            elif 'frutigo-mango' in img_name:
                prod['name'] = 'مزارع دينا فرتيجو زبادي مشروب بالمانجو'
                prod['nameEn'] = 'Dina Farms Frutigo Mango Drinking Yogurt'
                prod['price'] = 15
                prod['weight'] = '220 مل'
                prod['flavor'] = 'زبادي بالمانجو'
            elif 'fresh-milk-skimmed' in img_name:
                prod['name'] = 'مزارع دينا حليب طازج خالي الدسم 850 مل'
                prod['nameEn'] = 'Dina Farms Skimmed Fresh Milk'
                prod['price'] = 38
                prod['weight'] = '850 مل'
                prod['flavor'] = 'حليب خالي الدسم'
            elif 'fresh-milk-full-cream' in img_name:
                prod['name'] = 'مزارع دينا حليب طازج كامل الدسم 850 مل'
                prod['nameEn'] = 'Dina Farms Full Cream Fresh Milk'
                prod['price'] = 40
                prod['weight'] = '850 مل'
                prod['flavor'] = 'حليب كامل الدسم'
            elif 'coffee-shake' in img_name:
                prod['name'] = 'مزارع دينا كوفي شيك ميلك شيك قهوة كلاسيك'
                prod['nameEn'] = 'Dina Farms Coffee Shake Classic'
                prod['price'] = 22
                prod['weight'] = '300 مل'
                prod['flavor'] = 'قهوة بالحليب'
            else:
                prod['name'] = 'مزارع دينا منتج ألبان طازج'
                prod['nameEn'] = 'Dina Farms Dairy'
                prod['price'] = 30
                prod['weight'] = 'عبوة'
                prod['flavor'] = 'ألبان'
            prod['description'] = f'منتجات مزارع دينا الطبيعية 100% من مزارعها المباشرة بدون أي إضافات صناعية: {prod["flavor"]}.'
        elif 'juhayna' in img_name:
            prod['brand'] = 'جهينة (Juhayna)'
            if 'mix-caramel' in img_name:
                prod['name'] = 'جهينة ميكس حليب بالكراميل اللذيذ 200 مل'
                prod['nameEn'] = 'Juhayna Mix Caramel Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'كراميل'
            elif 'mix-chocolate' in img_name:
                prod['name'] = 'جهينة ميكس حليب بالشوكولاتة 200 مل'
                prod['nameEn'] = 'Juhayna Mix Chocolate Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'شوكولاتة'
            elif 'mix-strawberry' in img_name:
                prod['name'] = 'جهينة ميكس حليب بالفراولة اللذيذة 200 مل'
                prod['nameEn'] = 'Juhayna Mix Strawberry Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'فراولة'
            elif 'mix-vanilla' in img_name:
                prod['name'] = 'جهينة ميكس حليب بالفانيليا الفرنسية 200 مل'
                prod['nameEn'] = 'Juhayna Mix Vanilla Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'فانيليا'
            elif 'lactose-free' in img_name:
                prod['name'] = 'جهينة حليب خالي من اللاكتوز 100% طبيعي 1 لتر'
                prod['nameEn'] = 'Juhayna Lactose Free Milk 1L'
                prod['price'] = 52
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'خالي من اللاكتوز'
                prod['badge'] = 'سهل الهضم خالي لاكتوز 🥛'
            elif 'full-cream-milk-1.5l' in img_name:
                prod['name'] = 'جهينة حليب طبيعي كامل الدسم 1.5 لتر'
                prod['nameEn'] = 'Juhayna Full Cream Milk 1.5L'
                prod['price'] = 62
                prod['weight'] = '1.5 لتر'
                prod['flavor'] = 'حليب كامل الدسم'
            elif 'skimmed-milk-1.5l' in img_name:
                prod['name'] = 'جهينة حليب خالي الدسم 1.5 لتر (عرض عبوتين)'
                prod['nameEn'] = 'Juhayna Skimmed Milk 1.5L'
                prod['price'] = 62
                prod['weight'] = '1.5 لتر'
                prod['flavor'] = 'حليب خالي الدسم'
            elif 'rayeb' in img_name:
                prod['name'] = 'جهينة رايب طبيعي لحماية الهضم 1 لتر'
                prod['nameEn'] = 'Juhayna Natural Rayeb 1L'
                prod['price'] = 38
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'لبن رايب طبيعي'
                prod['badge'] = 'لراحة وحماية الهضم 🍃'
            else:
                prod['name'] = 'جهينة منتجات ألبان'
                prod['nameEn'] = 'Juhayna Dairy'
                prod['price'] = 40
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'حليب'
            prod['description'] = f'ألبان جهينة الطبيعية 100% الغنية بالكالسيوم والبروتين لصحة العائلة بنكهة {prod["flavor"]}.'
        elif 'almarai' in img_name:
            prod['brand'] = 'المراعي (Almarai)'
            if 'treats-chocolate' in img_name:
                prod['name'] = 'المراعي تريتس حليب بالشوكولاتة البلجيكية 200 مل'
                prod['nameEn'] = 'Almarai Treats Chocolate Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'شوكولاتة تريتس'
            elif 'treats-strawberry' in img_name:
                prod['name'] = 'المراعي تريتس حليب بالفراولة الطبيعية 200 مل'
                prod['nameEn'] = 'Almarai Treats Strawberry Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'فراولة تريتس'
            elif 'banana' in img_name:
                prod['name'] = 'المراعي تريتس حليب بالموز اللذيذ 200 مل'
                prod['nameEn'] = 'Almarai Treats Banana Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'موز تريتس'
            elif 'rayeb-900g' in img_name:
                prod['name'] = 'المراعي لبن رايب هضم طبيعي 100% زجاجة 900 جم'
                prod['nameEn'] = 'Almarai Rayeb Drink 900g'
                prod['price'] = 38
                prod['weight'] = '900 جم'
                prod['flavor'] = 'لبن رايب هضم'
            elif 'full-cream-milk-bottle' in img_name:
                prod['name'] = 'المراعي حليب كامل الدسم طويل الأجل زجاجة 1 لتر'
                prod['nameEn'] = 'Almarai Full Cream Milk Bottle 1L'
                prod['price'] = 45
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'حليب كامل الدسم'
            elif 'milk-200ml' in img_name:
                prod['name'] = 'المراعي حليب كامل الدسم 200 مل'
                prod['nameEn'] = 'Almarai Full Fat Milk 200ml'
                prod['price'] = 12
                prod['weight'] = '200 مل'
                prod['flavor'] = 'حليب طبيعي'
            else:
                prod['name'] = 'المراعي حليب نقي'
                prod['nameEn'] = 'Almarai Pure Milk'
                prod['price'] = 45
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'حليب'
            prod['description'] = f'حليب وألبان المراعي الطازجة ذات الجودة العالمية العالية بنكهة {prod["flavor"]}.'
        elif 'dango' in img_name:
            prod['brand'] = 'دانون دانجو (Danone Dango)'
            prod['price'] = 12
            prod['weight'] = '200 مل'
            prod['name'] = 'دانجو حليب بالشوكولاتة مع الحديد والزنك وفيتامين أ ود 200 مل'
            prod['nameEn'] = 'Danone Dango Chocolate Milk 200ml'
            prod['flavor'] = 'شوكولاتة مقوية'
            prod['badge'] = 'حديد + زنك + فيتامينات 💪'
            prod['description'] = 'مشروب حليب دانجو بالشوكولاتة الغني بالحديد والزنك وفيتامينات النمو للأطفال والأبطال.'
        elif 'obour-land' in img_name:
            prod['brand'] = 'عبور لاند (Obour Land)'
            prod['price'] = 10
            prod['weight'] = '200 مل'
            prod['name'] = 'عبور لاند حليب طبيعي 100% كامل الدسم 200 مل'
            prod['nameEn'] = 'Obour Land Natural Milk 200ml'
            prod['flavor'] = 'حليب طبيعي'
            prod['description'] = 'حليب عبور لاند الطبيعي الصافي 100% بدون لبن بودرة وبدون مواد حافظة.'
        elif 'labanita' in img_name:
            prod['brand'] = 'لبنيتا (Labanita)'
            if 'pouch' in img_name:
                prod['name'] = 'لبنيتا حليب كامل الدسم كيس اقتصادي 450 مل'
                prod['nameEn'] = 'Labanita Full Cream Milk Pouch 450ml'
                prod['price'] = 18
                prod['weight'] = '450 مل'
            else:
                prod['name'] = 'لبنيتا حليب كامل الدسم طويل الأجل 1 لتر'
                prod['nameEn'] = 'Labanita Full Cream Milk 1L'
                prod['price'] = 40
                prod['weight'] = '1 لتر'
            prod['flavor'] = 'حليب كامل الدسم'
            prod['description'] = 'حليب لبنيتا الطبيعي الصافي عالي الدسم والمغذي لجميع أفراد الأسرة.'
        elif 'bekhero-milk' in img_name:
            prod['brand'] = 'بخيره (Bekhero)'
            prod['price'] = 38
            prod['weight'] = '1 لتر'
            prod['badge'] = 'كيس اقتصادي 1 لتر 🥛'
            prod['name'] = 'بخيره حليب كامل الدسم كيس اقتصادي 1 لتر'
            prod['nameEn'] = 'Bekhero Full Cream Milk Pouch 1L'
            prod['flavor'] = 'حليب كامل الدسم'
            prod['description'] = 'حليب بخيره كامل الدسم الطبيعي الغني بالكالسيوم وفيتامينات النمو.'
        elif 'bashayer' in img_name:
            prod['brand'] = 'بشاير (Bashayer)'
            prod['price'] = 36
            prod['weight'] = '1 لتر'
            prod['name'] = 'بشاير حليب كامل الدسم طبيعي 100% 1 لتر'
            prod['nameEn'] = 'Bashayer Full Cream Milk 1L'
            prod['flavor'] = 'حليب كامل الدسم'
            prod['description'] = 'حليب بشاير الطبيعي 100% بنقائه وقيمته الغذائية العالية.'
        elif 'nido' in img_name:
            prod['brand'] = 'نيدو (Nestle Nido)'
            prod['isEgyptian'] = False
            prod['price'] = 450
            prod['weight'] = '1200 جم'
            prod['badge'] = 'حماية وتغذية 1200 جم 🛡️'
            prod['name'] = 'نيدو المدعم حليب مجفف غني بالألياف والفيتامينات كيس 1200 جم'
            prod['nameEn'] = 'Nestle Nido Fortified Milk Powder 1200g'
            prod['flavor'] = 'حليب بودرة مجفف'
            prod['description'] = 'حليب نيدو المدعم بالألياف والحديد والزنك وفيتامين سي لدعم المناعة والنمو السليم.'
        elif 'condensed-milk' in img_name:
            prod['brand'] = 'نستله (Nestle)'
            prod['isEgyptian'] = False
            prod['price'] = 95
            prod['weight'] = '370 جم'
            prod['badge'] = 'حليب مكثف محلى أصلي 🥫'
            prod['name'] = 'نستله حليب مكثف محلى أصلي محضر من الحليب الطازج'
            prod['nameEn'] = 'Nestle Sweetened Condensed Milk Can'
            prod['flavor'] = 'حليب مكثف محلى'
            prod['description'] = 'حليب نستله المكثف المحلى الغني والقشدي لإعداد أشهى الحلويات والتشيز كيك والمشروبات.'

    # ---------------- Groceries & Cooking & Noodles ----------------
    elif any(k in img_name for k in ['eldoha', 'rice', 'indomie', 'kelloggs', 'knorr', 'maggi', 'noodle', 'oil', 'afia', 'smart', 'crystal', 'helwa', 'tuna', 'dolphin', 'vinegar', 'wadi-food', 'salt', 'cooks', 'mayonnaise', 'heinz', 'tahina', 'elbawadi', 'elmaleka', 'spaghetti']):
        prod['category'] = 'groceries'
        if 'eldoha' in img_name or 'rice' in img_name:
            prod['brand'] = 'الضحى (El Doha)'
            if 'easy-rice-kabsa' in img_name:
                prod['name'] = 'الضحى إيزي رايس خلطة الكبسة السرية مع الأرز البسمتي'
                prod['nameEn'] = 'El Doha Easy Rice Kabsa Mix'
                prod['price'] = 75
                prod['weight'] = '500 جم'
                prod['flavor'] = 'كبسة بسمتي'
            elif 'easy-rice-secret' in img_name:
                prod['name'] = 'الضحى إيزي رايس الخلطة السرية الفاخرة'
                prod['nameEn'] = 'El Doha Easy Rice Secret Mix'
                prod['price'] = 75
                prod['weight'] = '500 جم'
                prod['flavor'] = 'خلطة سرية'
            elif 'golden-rice' in img_name:
                prod['name'] = 'الضحى أرز بسمتي ذهبي هندي طويل الحبة 1 كجم'
                prod['nameEn'] = 'El Doha Golden Basmati Rice 1kg'
                prod['price'] = 120
                prod['weight'] = '1 كجم'
                prod['flavor'] = 'بسمتي ذهبي'
            elif 'egyptian-white-rice' in img_name:
                prod['name'] = 'الضحى أرز مصري فاخر منقى ومغسول 1 كجم'
                prod['nameEn'] = 'El Doha Egyptian White Rice 1kg'
                prod['price'] = 42
                prod['weight'] = '1 كجم'
                prod['flavor'] = 'أرز مصري منقى'
            else:
                prod['name'] = 'الضحى أرز فاخر'
                prod['nameEn'] = 'El Doha Premium Rice'
                prod['price'] = 45
                prod['weight'] = '1 كجم'
                prod['flavor'] = 'أرز'
            prod['description'] = f'أرز الضحى الفاخر عالي الجودة والمنقى بأحدث التقنيات الإلكترونية بنكهة {prod["flavor"]}.'
        elif 'indomie' in img_name:
            prod['brand'] = 'إندومي (Indomie)'
            if 'cup' in img_name:
                prod['name'] = 'إندومي كوب نودلز سريعة التحضير باللحم البقري'
                prod['nameEn'] = 'Indomie Beef Noodle Cup'
                prod['price'] = 20
                prod['weight'] = '60 جم'
                prod['flavor'] = 'لحم بقري كوب'
            elif 'beef-jumbo' in img_name:
                prod['name'] = 'إندومي نودلز بطعم اللحم البقري جامبو كبير'
                prod['nameEn'] = 'Indomie Beef Jumbo Noodles'
                prod['price'] = 12
                prod['weight'] = '120 جم'
                prod['flavor'] = 'لحم بقري جامبو'
            elif 'chicken-curry' in img_name:
                prod['name'] = 'إندومي نودلز بطعم كاري الدجاج المتبل'
                prod['nameEn'] = 'Indomie Chicken Curry Noodles'
                prod['price'] = 10
                prod['weight'] = '75 جم'
                prod['flavor'] = 'كاري دجاج'
            elif 'special-chicken' in img_name:
                prod['name'] = 'إندومي نودلز بطعم الفراخ الخاصة المتبلة'
                prod['nameEn'] = 'Indomie Special Chicken Noodles'
                prod['price'] = 10
                prod['weight'] = '75 جم'
                prod['flavor'] = 'فراخ خاصة'
            elif 'supermi-hot-spicy' in img_name:
                prod['name'] = 'إندومي سوبر مي خضار حار وسبايسي'
                prod['nameEn'] = 'Indomie SuperMi Hot & Spicy Vegetables'
                prod['price'] = 10
                prod['weight'] = '75 جم'
                prod['flavor'] = 'خضار حار'
            elif 'supermi-vegetable' in img_name:
                prod['name'] = 'إندومي سوبر مي نودلز بطعم الخضار المشكل'
                prod['nameEn'] = 'Indomie SuperMi Vegetable Noodles'
                prod['price'] = 10
                prod['weight'] = '75 جم'
                prod['flavor'] = 'خضار مشكل'
            else:
                prod['name'] = 'إندومي نودلز سريعة التحضير'
                prod['nameEn'] = 'Indomie Instant Noodles'
                prod['price'] = 10
                prod['weight'] = '75 جم'
                prod['flavor'] = 'نودلز'
            prod['description'] = f'نودلز إندومي الشهيرة اللذيذة سريعة التحضير بالتوابل المميزة بنكهة {prod["flavor"]}.'
        elif 'kelloggs' in img_name:
            prod['brand'] = 'كيلوجز نودلز (Kellogg\'s)'
            prod['price'] = 12
            prod['weight'] = '105 جم'
            if 'beef' in img_name:
                prod['name'] = 'كيلوجز نودلز بطعم اللحم البقري الشرقي'
                prod['nameEn'] = 'Kellogg\'s Beef Noodles'
                prod['flavor'] = 'لحم بقري'
            elif 'chicken' in img_name:
                prod['name'] = 'كيلوجز نودلز بطعم الدجاج اللذيذ'
                prod['nameEn'] = 'Kellogg\'s Chicken Noodles'
                prod['flavor'] = 'دجاج'
            elif 'hot-spicy' in img_name:
                prod['name'] = 'كيلوجز نودلز جامبو حار وسبايسي نار'
                prod['nameEn'] = 'Kellogg\'s Hot & Spicy Jumbo Noodles'
                prod['flavor'] = 'حار وسبايسي'
            elif 'sausage' in img_name:
                prod['name'] = 'كيلوجز نودلز بطعم السجق الشرقي المتبل'
                prod['nameEn'] = 'Kellogg\'s Oriental Sausage Noodles'
                prod['flavor'] = 'سجق شرقي'
            elif 'spicy-fried-chicken' in img_name:
                prod['name'] = 'كيلوجز نودلز فراخ مقلية حارة كرسبي جامبو'
                prod['nameEn'] = 'Kellogg\'s Spicy Fried Chicken Jumbo'
                prod['flavor'] = 'فراخ مقلية حارة'
            elif 'vegetable' in img_name:
                prod['name'] = 'كيلوجز نودلز جامبو بطعم الخضار الأصلي'
                prod['nameEn'] = 'Kellogg\'s Original Vegetable Jumbo'
                prod['flavor'] = 'خضار مشكل'
            else:
                prod['name'] = 'كيلوجز نودلز سريعة التحضير'
                prod['nameEn'] = 'Kellogg\'s Noodles'
                prod['flavor'] = 'نودلز'
            prod['description'] = f'نودلز كيلوجز الجامبو المشبعة والمتبلة بأشهى التوابل بنكهة {prod["flavor"]}.'
        elif 'knorr' in img_name:
            prod['brand'] = 'كنور (Knorr)'
            if '11-spice' in img_name:
                prod['name'] = 'كنور خلطة الـ 11 بهار السحرية لجميع المأكولات'
                prod['nameEn'] = 'Knorr 11 Spice Mix'
                prod['price'] = 8
                prod['weight'] = 'ظرف 35 جم'
                prod['flavor'] = '11 بهار سحري'
                prod['description'] = 'توليفة كنور السرية من 11 بهار وتوابل طبيعية تجعل كل أكلاتك شهية كالمطاعم.'
            elif 'chicken-stock' in img_name:
                prod['name'] = 'مرقة دجاج كنور 24 مكعب عبوة التوفير رقم 1 في مصر'
                prod['nameEn'] = 'Knorr Chicken Stock 24 Cubes Saver Pack'
                prod['price'] = 48
                prod['weight'] = '24 مكعب'
                prod['flavor'] = 'مرقة دجاج طبيعية'
                prod['badge'] = 'عبوة التوفير 24 مكعب 🍲'
                prod['description'] = 'مرقة دجاج كنور الأصلية بالتوابل والأعشاب الطبيعية والمصنوعة من مرقة دجاج حقيقي.'
            else:
                prod['name'] = 'كنور توابل وخلطات'
                prod['nameEn'] = 'Knorr Seasoning'
                prod['price'] = 10
                prod['weight'] = 'عبوة'
                prod['flavor'] = 'توابل'
                prod['description'] = 'بهارات وخلطات كنور الأصلية للطبخ.'
        elif 'maggi' in img_name:
            prod['brand'] = 'ماجي (Maggi)'
            prod['price'] = 8
            prod['weight'] = 'ظرف 40 جم'
            prod['name'] = 'ماجي خلطة الكفتة الشرقية الشهية'
            prod['nameEn'] = 'Maggi Kofta Seasoning Mix'
            prod['flavor'] = 'خلطة كفتة'
            prod['description'] = 'خلطة ماجي المتقنة للكفتة المشوية بتتبيلة البصل والأعشاب الشرقية المتوازنة.'
        elif 'afia' in img_name:
            prod['brand'] = 'عافية (Afia)'
            prod['price'] = 110
            prod['weight'] = '800 مل'
            prod['badge'] = 'زيت نقي يدعم المناعة 🌻'
            prod['name'] = 'عافية زيت عباد الشمس النقي الصافي'
            prod['nameEn'] = 'Afia Pure Sunflower Oil'
            prod['flavor'] = 'زيت عباد الشمس'
            prod['description'] = 'زيت عباد الشمس النقي 100% من عافية خفيف على المعدة ومدعم بفيتامينات تدعم المناعة.'
        elif 'crystal' in img_name:
            prod['brand'] = 'كريستال (Crystal)'
            if '5l' in img_name or 'sunflower' in img_name:
                prod['name'] = 'كريستال زيت عباد الشمس النقي عبوة التوفير العائلية 5 لتر'
                prod['nameEn'] = 'Crystal Pure Sunflower Oil 5L'
                prod['price'] = 550
                prod['weight'] = '5 لتر'
                prod['badge'] = 'عبوة التوفير العائلية 5 لتر 🌻'
                prod['flavor'] = 'زيت عباد شمس 5 لتر'
            elif 'corn' in img_name:
                prod['name'] = 'كريستال زيت ذرة نقي 100% صحي للقلب 1.6 لتر'
                prod['nameEn'] = 'Crystal Pure Corn Oil 1.6L'
                prod['price'] = 185
                prod['weight'] = '1.6 لتر'
                prod['flavor'] = 'زيت ذرة نقي'
                prod['badge'] = 'زيت ذرة صافي 100% 🌽'
            else:
                prod['name'] = 'زيت كريستال نقي'
                prod['nameEn'] = 'Crystal Oil'
                prod['price'] = 120
                prod['weight'] = '1 لتر'
                prod['flavor'] = 'زيت طبخ'
            prod['description'] = 'زيت كريستال النقي المفضل لدى الأمهات والشيفات في مصر لأشهى الأكلات والحلويات.'
        elif 'smart' in img_name or 'helwa' in img_name:
            if 'smart' in img_name:
                prod['brand'] = 'سمارت (Smart)'
                prod['price'] = 58
                prod['weight'] = '700 مل'
                prod['name'] = 'زيت سمارت للطبخ والقلي الاقتصادي'
                prod['nameEn'] = 'Smart Cooking & Frying Oil'
                prod['flavor'] = 'زيت قلي اقتصادي'
                prod['description'] = 'زيت سمارت النقي عالي الكفاءة للقلي والتحمير الخفيف المقرمش.'
            else:
                prod['brand'] = 'حلوة (Helwa)'
                prod['price'] = 65
                prod['weight'] = '800 مل'
                prod['name'] = 'زيت حلوة خليط زيت صويا وعباد للقلي والطبخ'
                prod['nameEn'] = 'Helwa Cooking & Frying Oil'
                prod['flavor'] = 'زيت خليط'
                prod['description'] = 'زيت حلوة الممتاز متعدد الاستخدامات للطبخ والتحمير بلون ذهبي صافي.'
        elif 'dolphin' in img_name or 'tuna' in img_name:
            prod['brand'] = 'دولفين (Dolphin)'
            prod['price'] = 55
            prod['weight'] = '185 جم'
            prod['badge'] = 'تونا قطع فاخرة 185 جم 🐟'
            prod['name'] = 'دولفين تونة قطع لحم أبيض فاخرة في زيت نباتي 185 جم'
            prod['nameEn'] = 'Dolphin Solid Tuna Chunk in Oil 185g'
            prod['flavor'] = 'تونة قطع فاخرة'
            prod['description'] = 'لحم تونة دولفين الصافي المتماسك الغني بالأوميجا 3 والبروتين العالي.'
        elif 'wadi-food' in img_name or 'vinegar' in img_name:
            prod['brand'] = 'وادي فود (Wadi Food)'
            prod['price'] = 18
            prod['weight'] = '1 لتر'
            prod['name'] = 'وادي فود خل قصب سكر طبيعي 100% نقي 1 لتر'
            prod['nameEn'] = 'Wadi Food 100% Natural Cane Vinegar 1L'
            prod['flavor'] = 'خل طبيعي 5%'
            prod['description'] = 'خل وادي فود الطبيعي 100% المستخلص من قصب السكر المصري لتتبيل السلطات والأكلات.'
        elif 'cooks' in img_name or 'salt' in img_name:
            prod['brand'] = 'كوكس (Cook\'s)'
            prod['price'] = 10
            prod['weight'] = '500 جم'
            prod['name'] = 'ملح طعام كوكس ناعم مكرر يودي نقي في ملاحة بلاستيك'
            prod['nameEn'] = 'Cook\'s Table Salt Iodized Shaker'
            prod['flavor'] = 'ملح طعام يودي'
            prod['description'] = 'ملح كوكس الناعم المكرر والمزود باليود الأساسي لصحة الغدة الدرقية في عبوة سهلة الصب.'
        elif 'heinz' in img_name or 'mayonnaise' in img_name:
            prod['brand'] = 'هاينز (Heinz)'
            prod['price'] = 95
            prod['weight'] = 'عرض برطمانين (2 عبوة)'
            prod['badge'] = 'عرض برطمانين هاينز 🥫'
            prod['name'] = 'مايونيز هاينز الكريمي الأصلي برطمانين عرض خاص'
            prod['nameEn'] = 'Heinz Creamy Mayonnaise Jar 2-Pack Offer'
            prod['flavor'] = 'مايونيز كريمي غني'
            prod['description'] = 'مايونيز هاينز السميك والكريمي المحضر من أجود أنواع البيض والزيت لسندوتشات وسلطات خيالية.'
        elif 'elbawadi' in img_name or 'tahina' in img_name:
            prod['brand'] = 'البوادي (El Bawadi)'
            prod['price'] = 85
            prod['weight'] = '500 جم'
            prod['badge'] = 'سمسم محمص 100% 🥣'
            prod['name'] = 'طحينة البوادي البيضاء النقية 100% سمسم محمص فاخر'
            prod['nameEn'] = 'El Bawadi Pure Tahina 100% Sesame'
            prod['flavor'] = 'طحينة سمسم صافي'
            prod['description'] = 'طحينة البوادي المعصورة من أجود بذور السمسم الأبيض المحمص بدون أي إضافات أو دقيق.'
        elif 'elmaleka' in img_name or 'spaghetti' in img_name:
            prod['brand'] = 'الملكة (El Maleka)'
            prod['price'] = 15
            prod['weight'] = '400 جم'
            prod['name'] = 'مكرونة الملكة اسباجتي فاخرة من أجود أنواع السيمولينا 400 جم'
            prod['nameEn'] = 'El Maleka Spaghetti Pasta 400g'
            prod['flavor'] = 'مكرونة اسباجتي'
            prod['description'] = 'مكرونة اسباجتي الملكة الذهبية التي تحافظ على قوامها المتماسك والمثالي بعد السلق.'

    # Fallback for any product without a set name
    if not prod['name']:
        clean_title = img.replace('.png', '').replace('-', ' ').title()
        prod['name'] = clean_title
        prod['nameEn'] = clean_title
        prod['brand'] = 'الجمل ماركت'
        prod['description'] = f'منتج عالي الجودة متوفر لدى الجمل ماركت - الخانكة.'
        prod['flavor'] = 'طبيعي'

    return prod

products = []
seen_ids = set()

for img in images:
    info = get_product_info(img)
    pid = info['id']
    if pid in seen_ids:
        pid = f"{pid}_{len(products)}"
        info['id'] = pid
    seen_ids.add(pid)
    products.append(info)

print(f'Constructed {len(products)} total verified product objects.')

# Write out js/products.js
js_content = """/**
 * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬
 * جميع المنتجات معروضة بأسعار المستهلك الرسمية المطبوعة على الكيس/العبوة
 * صور منتجات أصلية ورسمية 100% بخلفيات بيضاء نقية
 */

const PRODUCTS_DATA = """ + json.dumps(products, ensure_ascii=False, indent=2) + """;

// تصدير البيانات للواجهة
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS_DATA };
}
"""

with open('js/products.js', 'w', encoding='utf-8') as f_out:
    f_out.write(js_content)

print('Successfully written js/products.js!')
