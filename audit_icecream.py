import json
import re

with open('js/products.js', 'r', encoding='utf-8') as f:
    text = f.read()

match_cats = re.search(r'const CATEGORIES_DATA = (\[.*?\]);', text, re.DOTALL)
match_prods = re.search(r'const PRODUCTS_DATA = (\[.*?\]);', text, re.DOTALL)

if match_prods:
    products = json.loads(match_prods.group(1))
    
    icecream_keywords = [
        'آيس كريم', 'ايس كريم', 'جيلاتي', 'كونو', 'ميجا', 'استيك', 'فراداي', 
        'دولسي', 'ستيك', 'ايس', 'ice cream', 'mega', 'friday', 'dolce', 
        'carnavale', 'sultana', 'chocobar', 'cone', 'ساندوتش آيس'
    ]
    
    ic_products = []
    for p in products:
        name = p.get('name', '').lower()
        desc = p.get('description', '').lower()
        brand = p.get('brand', '').lower()
        
        # Check if it's really ice cream and not hot iced tea or something unrelated
        if any(kw in name or kw in desc or kw in brand for kw in icecream_keywords):
            if 'شاي مثلج' not in name and 'مشروب بارد' not in name:
                ic_products.append(p)
                
    print(f'Total ice cream products identified: {len(ic_products)}')
    with open('ic_list.json', 'w', encoding='utf-8') as f_out:
        json.dump([{'id': p['id'], 'cat': p['category'], 'name': p['name'], 'brand': p['brand']} for p in ic_products], f_out, ensure_ascii=False, indent=2)
