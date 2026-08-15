# -*- coding: utf-8 -*-
import os
import shutil

src_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\.user_uploaded'
dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'

ice_cream_map = {
    # Friday, Nestle, Gersey, Dolce Ice Creams
    'media_1786698045709.png': 'friday-combo-vanilla-caramel-cone.png',
    'media_1786698053585.png': 'friday-volcano-cone-icecream.png',
    'media_1786698068830.png': 'friday-very-good-pink-cone.png',
    'media_1786698072023.png': 'friday-royal-vanilla-cone.png',
    'media_1786698078492.png': 'freitag-chocolate-hazelnut-stick.png',
    'media_1786698084284.png': 'gersey-4u-cone-vanilla-biscuit.png',
    'media_1786698088715.png': 'nestle-carnavalta-tub-vanilla-chocolate.png',
    'media_1786698102381.png': 'gersey-fass-mango-stick.png',
    'media_1786698105976.png': 'gersey-cone-cocoa-chocolate.png',
    'media_1786698145521.png': 'oreo-ice-cream-sandwich.png',
    'media_1786698163892.png': 'nestle-kimo-cono-chocolate-hazelnut.png',
    'media_1786698172614.png': 'nestle-kitkat-cone-ice-cream.png',
    'media_1786698194628.png': 'nestle-kimo-cono-pink-chocolate.png',
    'media_1786698234808.png': 'friday-combo-vanilla-cookies-cone.png',
    'media_1786698238604.png': 'friday-5g-tub-vanilla-caramel.png',
    'media_1786698241582.png': 'nestle-mega-vanilla-almonds-stick.png',
    'media_1786698249229.png': 'nestle-mega-chocolate-nuts-stick.png',
    'media_1786698260688.png': 'nestle-squizz-lemon-mint-stick.png',
    'media_1786698277960.png': 'nestle-kimo-cornetto-vanilla.png',
    'media_1786698298483.png': 'friday-combo-extra-kunafa-pistachio.png',
    'media_1786698301690.png': 'friday-mango-natural-stick.png',
    'media_1786698313792.png': 'friday-5g-tub-chocolate-mousse.png',
    'media_1786698418905.png': 'friday-caramel-biscuit-cup.png',
    'media_1786698423329.png': 'friday-5g-chocolate-cookies-cup.png',
    'media_1786698429965.png': 'friday-pop-cantaloupe-stick.png',
    'media_1786698439382.png': 'friday-volcano-mocha-coffee-stick.png',
    'media_1786698460982.png': 'friday-double-chocolate-stick.png',
    'media_1786698477577.png': 'friday-volcano-red-chocolate-stick.png',
    'media_1786698483571.png': 'friday-banana-mooza-stick.png',
    'media_1786698486897.png': 'friday-watermelon-stick.png',
    'media_1786698490651.png': 'friday-cookies-wich-sandwich.png',
    'media_1786698494906.png': 'friday-volcano-blue-vanilla-stick.png',
}

for src_f, dest_f in ice_cream_map.items():
    s_path = os.path.join(src_dir, src_f)
    d_path = os.path.join(dest_dir, dest_f)
    if os.path.exists(s_path):
        shutil.copyfile(s_path, d_path)

print(f"Copied {len(ice_cream_map)} ice cream images to images/. Total images: {len(os.listdir(dest_dir))}")
