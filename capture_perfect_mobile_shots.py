import subprocess
import os
import time

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
html_url = 'file:///' + os.path.abspath('index.html').replace('\\', '/')

def capture_shot(out_name, width=390, height=844, virtual_time=3000):
    out_path = os.path.abspath(out_name)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={width},{height}',
        f'--virtual-time-budget={virtual_time}',
        f'--screenshot={out_path}',
        html_url
    ]
    subprocess.run(cmd, capture_output=True, text=True)
    print(f"Captured {out_name}: exists={os.path.exists(out_path)} size={os.path.getsize(out_path) if os.path.exists(out_path) else 0}")

# 1. Home top view
capture_shot('mobile_screen_home.png', width=390, height=844)

# 2. Scroll to departments and products view (longer viewport)
capture_shot('mobile_screen_products.png', width=390, height=1400)

print("Mobile captures completed!")
