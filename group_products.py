import json
import re

with open('js/products.js', 'r', encoding='utf-8') as f:
    text = f.read()

match_cats = re.search(r'const CATEGORIES_DATA = (\[.*?\]);', text, re.DOTALL)
match_prods = re.search(r'const PRODUCTS_DATA = (\[.*?\]);', text, re.DOTALL)

if match_cats and match_prods:
    categories = json.loads(match_cats.group(1))
    products = json.loads(match_prods.group(1))
    
    cat_order = {
        'dairy': 1,
        'noodles': 2,
        'groceries': 3,
        'drinks': 4,
        'snacks': 5,
        'sweets': 6,
        'frozen': 7,
        'energy': 8
    }
    
    def sort_key(p):
        cat = p.get('category', 'other')
        cat_prio = cat_order.get(cat, 99)
        brand = p.get('brand', '')
        name = p.get('name', '')
        return (cat_prio, brand, name)
        
    products_sorted = sorted(products, key=sort_key)
    
    header = '/**\n * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market\n * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬\n * إجمالي المنتجات: 582 منتج مرتبة ومجمعة حسب الأصناف المتشابهة والعلامات التجارية\n */\n\n'
    
    cats_str = 'const CATEGORIES_DATA = ' + json.dumps(categories, ensure_ascii=False, indent=2) + ';\n\n'
    prods_str = 'const PRODUCTS_DATA = ' + json.dumps(products_sorted, ensure_ascii=False, indent=2) + ';\n'
    
    with open('js/products.js', 'w', encoding='utf-8') as f:
        f.write(header + cats_str + prods_str)
        
    print('Successfully sorted 582 products in js/products.js!')
