import subprocess
import os
import time

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

# 1. Capture Home Screen (Top & Departments)
url_home = 'file:///' + os.path.abspath('index.html').replace('\\', '/')
cmd_home = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=390,844',
    '--virtual-time-budget=2500',
    f'--screenshot={os.path.abspath("mobile_home_view.png")}',
    url_home
]
subprocess.run(cmd_home, capture_output=True)

# 2. Capture Products Grid View (Scroll to catalog)
html_products = open('index.html', 'r', encoding='utf-8').read().replace(
    '</body>',
    '<script>window.addEventListener("load", () => { setTimeout(() => { document.getElementById("catalogSection").scrollIntoView(); }, 800); });</script></body>'
)
with open('temp_products_view.html', 'w', encoding='utf-8') as f:
    f.write(html_products)

cmd_products = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=390,844',
    '--virtual-time-budget=3000',
    f'--screenshot={os.path.abspath("mobile_products_view.png")}',
    'file:///' + os.path.abspath('temp_products_view.html').replace('\\', '/')
]
subprocess.run(cmd_products, capture_output=True)

# 3. Capture Cart Drawer View (Open Cart with item)
html_cart = open('index.html', 'r', encoding='utf-8').read().replace(
    '</body>',
    '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("chipsy_salt_vinegar_15egp", 2); openCart(); }, 800); });</script></body>'
)
with open('temp_cart_view.html', 'w', encoding='utf-8') as f:
    f.write(html_cart)

cmd_cart = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=390,844',
    '--virtual-time-budget=3000',
    f'--screenshot={os.path.abspath("mobile_cart_view.png")}',
    'file:///' + os.path.abspath('temp_cart_view.html').replace('\\', '/')
]
subprocess.run(cmd_cart, capture_output=True)

# 4. Capture Filter Drawer View (Open Filter Drawer)
html_filter = open('index.html', 'r', encoding='utf-8').read().replace(
    '</body>',
    '<script>window.addEventListener("load", () => { setTimeout(() => { toggleMobileFilter(true); }, 800); });</script></body>'
)
with open('temp_filter_view.html', 'w', encoding='utf-8') as f:
    f.write(html_filter)

cmd_filter = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=390,844',
    '--virtual-time-budget=3000',
    f'--screenshot={os.path.abspath("mobile_filter_view.png")}',
    'file:///' + os.path.abspath('temp_filter_view.html').replace('\\', '/')
]
subprocess.run(cmd_filter, capture_output=True)

print("All 4 mobile views captured successfully!")
