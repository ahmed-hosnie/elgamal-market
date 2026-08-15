# -*- coding: utf-8 -*-
import os
import shutil

src_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\.user_uploaded'
dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'

remaining_map = {
    'media_1786698501942.png': 'friday-snykers-chocolate-cookies-stick.png',
    'media_1786698517791.png': 'friday-fresh-milk-strawberry-stick.png',
    'media_1786698534652.png': 'friday-snykers-cookies-vanilla-stick.png',
    'media_1786698538405.png': 'freitag-pistachio-luxury-stick.png',
    'media_1786698549001.png': 'dolce-cookie-sandwich-chocolate.png',
    'media_1786698572489.png': 'nestle-carnavalta-tub-marble.png',
    'media_1786698576391.png': 'nestle-squizz-mango-stick.png',
    'media_1786698580677.png': 'friday-combo-extra-kunafa-pistachio-blue.png',
    'media_1786698583977.png': 'molotov-chocolate-cone.png',
    'media_1786698587465.png': 'friday-mango-zebdia-natural-stick.png',
    'media_1786698592942.png': 'friday-volcano-cone-icecream-blue.png',
    'media_1786698601631.png': 'friday-double-chocolate-almonds-stick.png',
    'media_1786698608608.png': 'nestle-kimo-cono-super-chocolate.png',
}

for src_f, dest_f in remaining_map.items():
    s_path = os.path.join(src_dir, src_f)
    d_path = os.path.join(dest_dir, dest_f)
    if os.path.exists(s_path):
        shutil.copyfile(s_path, d_path)

print(f"Copied {len(remaining_map)} items to images/. Total images: {len(os.listdir(dest_dir))}")
