import subprocess
import os

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

def capture(html_content, out_name, height=900):
    temp_file = 'temp_render.html'
    with open(temp_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    out_path = os.path.abspath(out_name)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size=481,{height}',
        '--virtual-time-budget=2500',
        f'--screenshot={out_path}',
        'file:///' + os.path.abspath(temp_file).replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    print(f"Captured {out_name}: exists={os.path.exists(out_path)}")

base_html = open('index.html', 'r', encoding='utf-8').read()

# 1. Home View
capture(base_html, 'mobile_view_1_home.png', height=900)

# 2. Products Grid View
products_script = '<script>window.addEventListener("load", () => { setTimeout(() => { document.getElementById("catalogSection").scrollIntoView(); }, 800); });</script>'
capture(base_html.replace('</body>', products_script + '</body>'), 'mobile_view_2_products.png', height=950)

# 3. Cart Drawer View
cart_script = '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("chipsy_salt_vinegar_15egp", 2); addToCart("juhayna_full_cream_milk_1l", 1); openCart(); }, 800); });</script>'
capture(base_html.replace('</body>', cart_script + '</body>'), 'mobile_view_3_cart.png', height=900)

# 4. Filter Drawer View
filter_script = '<script>window.addEventListener("load", () => { setTimeout(() => { toggleMobileFilter(true); }, 800); });</script>'
capture(base_html.replace('</body>', filter_script + '</body>'), 'mobile_view_4_filter.png', height=900)

print("All 4 views captured!")
