import subprocess
import os
import shutil

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
gallery_dir = os.path.join(workspace_dir, 'gallery')
artifact_gallery = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\gallery'

devices = [
    {
        'name': 'phone_view_1_small_360.png',
        'desc': 'Small Android / Galaxy A Series (360px)',
        'width': 466, # 360 + 106 headless OS gutter
        'height': 800
    },
    {
        'name': 'phone_view_2_standard_390.png',
        'desc': 'Standard iPhone 13/14/15/16 (390px)',
        'width': 481, # 390 + 91 headless OS gutter
        'height': 850
    },
    {
        'name': 'phone_view_3_promax_430.png',
        'desc': 'Large iPhone Pro Max / Plus (430px)',
        'width': 536, # 430 + 106 headless OS gutter
        'height': 920
    }
]

url = 'file:///' + os.path.join(workspace_dir, 'index.html').replace('\\', '/')

for dev in devices:
    out_path = os.path.join(gallery_dir, dev['name'])
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f"--window-size={dev['width']},{dev['height']}",
        '--virtual-time-budget=2500',
        f'--screenshot={out_path}',
        url
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(out_path):
        shutil.copy(out_path, os.path.join(artifact_gallery, dev['name']))
        print(f"Captured {dev['name']} ({dev['desc']}) -> {os.path.getsize(out_path)} bytes")

print("All responsive mobile device tests captured!")
