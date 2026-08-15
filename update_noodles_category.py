# -*- coding: utf-8 -*-
"""
تحديث قسم النودلز والشعرية سريعة التحضير في products.js و app.js
"""

import json

# 1. Update js/products.js
with open('js/products.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Load products
idx = content.find('const PRODUCTS_DATA = ')
sub = content[idx + len('const PRODUCTS_DATA = '):]
end_idx = sub.rfind(';\n\n// تصدير')
if end_idx == -1: end_idx = sub.rfind(';')
products = json.loads(sub[:end_idx].strip())

# Update products category to noodles if it is indomie or kelloggs noodles
noodles_count = 0
for p in products:
    pid = p['id'].lower()
    name = p['name'].lower()
    if 'indomie' in pid or 'إندومي' in name or 'kellogg' in pid or ('نودلز' in name and 'شعرية' in name):
        p['category'] = 'noodles'
        noodles_count += 1

print(f"Updated {noodles_count} products to category 'noodles'.")

# Update CATEGORIES_DATA
categories = [
  {
    "id": "all",
    "name": "جميع المنتجات",
    "icon": "fas fa-border-all"
  },
  {
    "id": "egyptian",
    "name": "منتجات مصرية 🇪🇬",
    "icon": "fas fa-flag",
    "isSpecial": True
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
]

new_js = f"""/**
 * قاعدة بيانات منتجات "الجمل ماركت" - El-Gamal Market
 * فرع: الخانكة - منطقة الحتة - محافظة القليوبية 🛒🇪🇬
 * إجمالي المنتجات: {len(products)} منتج
 */

const CATEGORIES_DATA = {json.dumps(categories, ensure_ascii=False, indent=2)};

const PRODUCTS_DATA = {json.dumps(products, ensure_ascii=False, indent=2)};

// تصدير البيانات للواجهة
if (typeof module !== 'undefined' && module.exports) {{
  module.exports = {{ CATEGORIES_DATA, PRODUCTS_DATA }};
}}
"""

with open('js/products.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print("Updated js/products.js successfully with noodles category!")
