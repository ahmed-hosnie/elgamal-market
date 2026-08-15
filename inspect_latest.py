import os
from PIL import Image

src_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\.user_uploaded'

files = [
    'media_1786697067602.png',
    'media_1786697070512.png',
    'media_1786697074940.png',
    'media_1786697079515.png',
    'media_1786697092466.png',
    'media_1786697098785.png',
    'media_1786697102578.png',
    'media_1786697166813.png',
    'media_1786697251918.png',
    'media_1786697267743.png',
    'media_1786697281468.png',
    'media_1786697284927.png',
    'media_1786697286467.png',
    'media_1786697302821.png',
    'media_1786697343224.png',
    'media_1786697349980.png',
    'media_1786697355672.png',
]

for f in files:
    path = os.path.join(src_dir, f)
    if os.path.exists(path):
        img = Image.open(path)
        print(f"{f}: size={img.size}, mode={img.mode}")
