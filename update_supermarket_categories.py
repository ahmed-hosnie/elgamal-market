import json
import re

with open('js/products.js', 'r', encoding='utf-8') as f:
    text = f.read()

match_cats = re.search(r'const CATEGORIES_DATA = (\[.*?\]);', text, re.DOTALL)
match_prods = re.search(r'const PRODUCTS_DATA = (\[.*?\]);', text, re.DOTALL)

if match_prods:
    products = json.loads(match_prods.group(1))
    
    # Ice cream keywords (cones, sticks, tubs, cups, sandwiches)
    icecream_brands = ['friday', 'dolce', 'carnavale', 'sultana', 'chocobar', 'cone']
    icecream_terms = ['آيس كريم', 'ايس كريم', 'جيلاتي', 'كونو', 'ميجا', 'استيك', 'ستيك', 'ساندوتش آيس', 'ice cream']
    
    # Savory snacks / chips
    snacks_brands = ['chipsy', 'doritos', 'tiger', 'fox', 'pringles', 'bake rolz', 'bake stix', 'sunbites', 'windows', 'crunchy', 'jaguar', 'karate']
    snacks_terms = ['شيبسي', 'دوريتوس', 'تايجر', 'فوكس', 'برينجلز', 'بيك رولز', 'بيكريتس', 'صن بايتس', 'ويندوز', 'كرانشي', 'مقرمشات', 'شيبس', 'سناكس ذرة', 'تسالي', 'لب سوبر', 'فول سوداني']
    
    # Sweets & chocolates
    sweets_terms = ['شوكولاتة', 'كادبوري', 'جلاكسي', 'كيت كات', 'مارس', 'سنيكرز', 'تويكس', 'أوريو', 'بسكويت', 'ويفر', 'كيك', 'هوهوز', 'توينكيز', 'مولتو', 'لبان', 'مارشميلو', 'نوتيلا', 'بيمبو', 'لوتس', 'حلوى', 'بونبون', 'كاندي']
    
    for p in products:
        name_l = p.get('name', '').lower()
        brand_l = p.get('brand', '').lower()
        id_l = p.get('id', '').lower()
        curr_cat = p.get('category', '')
        
        # 1. Ice Cream Check
        is_ic = any(b in brand_l or b in id_l for b in icecream_brands) or any(t in name_l for t in icecream_terms)
        if is_ic and 'شاي مثلج' not in name_l and 'مشروب' not in name_l and 'ويفر' not in name_l:
            p['category'] = 'icecream'
            continue
            
        # 2. Savory Snacks Check
        is_snack = any(b in brand_l or b in id_l for b in snacks_brands) or any(t in name_l for t in snacks_terms)
        if is_snack and not any(t in name_l for t in ['شوكولاتة', 'كيك', 'بسكويت', 'ويفر']):
            p['category'] = 'snacks'
            continue
            
        # 3. Sweets Check
        if curr_cat in ['snacks', 'sweets'] or any(t in name_l for t in sweets_terms):
            p['category'] = 'sweets'
            
    # Sort order
    cat_order = {
        'dairy': 1,
        'noodles': 2,
        'groceries': 3,
        'drinks': 4,
        'snacks': 5,
        'sweets': 6,
        'icecream': 7,
        'frozen': 8,
        'energy': 9
    }
    
    def sort_key(p):
        cat = p.get('category', 'other')
        cat_prio = cat_order.get(cat, 99)
        brand = p.get('brand', '')
        name = p.get('name', '')
        return (cat_prio, brand, name)
        
    products_sorted = sorted(products, key=sort_key)
    
    # New Standard Categories
    new_categories = [
        { "id": "all", "name": "جميع المنتجات", "icon": "fas fa-border-all" },
        { "id": "snacks", "name": "السناكس والمقرمشات 🥔", "icon": "fas fa-cookie-bite" },
        { "id": "sweets", "name": "الحلويات والشوكولاتة 🍫", "icon": "fas fa-candy-cane" },
        { "id": "icecream", "name": "المثلجات والآيس كريم 🍦", "icon": "fas fa-ice-cream" },
        { "id": "dairy", "name": "الألبان ومنتجاتها 🧀", "icon": "fas fa-cheese" },
        { "id": "noodles", "name": "النودلز وسريعة التحضير 🍜", "icon": "fas fa-bowl-food" },
        { "id": "groceries", "name": "مستلزمات الطبخ والبيت 🥫", "icon": "fas fa-box-open" },
        { "id": "drinks", "name": "المشروبات والعصائر 🥤", "icon": "fas fa-wine-bottle" },
        { "id": "frozen", "name": "المجمدات واللحوم 🍗", "icon": "fas fa-snowflake" },
        { "id": "energy", "name": "مشروبات الطاقة ⚡", "icon": "fas fa-bolt" }
    ]
    
    header = '/**\n * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market\n * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬\n * إجمالي المنتجات: 582 منتج مرتبة ومقسمة بدقة عالية\n */\n\n'
    cats_str = 'const CATEGORIES_DATA = ' + json.dumps(new_categories, ensure_ascii=False, indent=2) + ';\n\n'
    prods_str = 'const PRODUCTS_DATA = ' + json.dumps(products_sorted, ensure_ascii=False, indent=2) + ';\n'
    
    with open('js/products.js', 'w', encoding='utf-8') as f:
        f.write(header + cats_str + prods_str)
        
    print('Updated js/products.js successfully!')
