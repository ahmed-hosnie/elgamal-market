import subprocess
import os
import shutil
from PIL import Image

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
gallery_dir = os.path.join(workspace_dir, 'gallery')
artifact_gallery = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\gallery'

os.makedirs(gallery_dir, exist_ok=True)
os.makedirs(artifact_gallery, exist_ok=True)

def render_and_save(html_code, out_name, width=481, height=900):
    tmp_file = os.path.join(workspace_dir, 'temp_master_snap.html')
    with open(tmp_file, 'w', encoding='utf-8') as f:
        f.write(html_code)
    
    out_path = os.path.join(gallery_dir, out_name)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={width},{height}',
        '--virtual-time-budget=2500',
        f'--screenshot={out_path}',
        'file:///' + tmp_file.replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(out_path):
        shutil.copy(out_path, os.path.join(artifact_gallery, out_name))
        print(f'Captured {out_name} -> {os.path.getsize(out_path)} bytes')

base_index = open(os.path.join(workspace_dir, 'index.html'), 'r', encoding='utf-8').read()
base_admin = open(os.path.join(workspace_dir, 'admin.html'), 'r', encoding='utf-8').read()

print("1. Capturing Mobile Screens...")
# 01. Mobile Home View
render_and_save(base_index, 'gallery_01_mobile_home.png', width=481, height=920)

# 02. Mobile Cart Drawer View
cart_js = '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("chipsy_salt_vinegar_15egp", 2); addToCart("indomie_special_chicken_noodles_70g", 3); openCart(); }, 800); });</script>'
render_and_save(base_index.replace('</body>', cart_js + '</body>'), 'gallery_04_mobile_cart.png', width=481, height=850)

# 03. Mobile Filter Drawer View
filter_js = '<script>window.addEventListener("load", () => { setTimeout(() => { toggleMobileFilter(true); }, 800); });</script>'
render_and_save(base_index.replace('</body>', filter_js + '</body>'), 'gallery_05_mobile_filter.png', width=481, height=850)

# 04. Mobile WhatsApp Checkout Modal View
checkout_js = '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("el_doha_egyptian_white_rice_1kg", 2); openCheckoutModal(); }, 800); });</script>'
render_and_save(base_index.replace('</body>', checkout_js + '</body>'), 'gallery_06_mobile_checkout.png', width=481, height=850)

# 05. Mobile Products Grid (Tall crop)
tall_mob_js = '<script>window.addEventListener("load", () => { setTimeout(() => {}, 800); });</script>'
render_and_save(base_index.replace('</body>', tall_mob_js + '</body>'), 'temp_tall_mob.png', width=481, height=2200)

tall_img = Image.open(os.path.join(gallery_dir, 'temp_tall_mob.png'))
w, h = tall_img.size
# Crop Departments
img_dept = tall_img.crop((0, 380, w, 1150))
img_dept.save(os.path.join(gallery_dir, 'gallery_02_mobile_departments.png'))
img_dept.save(os.path.join(artifact_gallery, 'gallery_02_mobile_departments.png'))
# Crop Products
img_prod = tall_img.crop((0, 780, w, 1750))
img_prod.save(os.path.join(gallery_dir, 'gallery_03_mobile_products.png'))
img_prod.save(os.path.join(artifact_gallery, 'gallery_03_mobile_products.png'))

print("2. Capturing Desktop Screens...")
# 07. Desktop Full Store
render_and_save(base_index, 'gallery_07_desktop_home.png', width=1280, height=850)

# 08. Desktop Quick View Modal
quick_js = '<script>window.addEventListener("load", () => { setTimeout(() => { openQuickView("doritos_nacho_cheese_48g"); }, 800); });</script>'
render_and_save(base_index.replace('</body>', quick_js + '</body>'), 'gallery_08_desktop_quickview.png', width=1280, height=850)

print("3. Capturing Admin Dashboard Screens...")
# 09. Admin Login Lock Screen
render_and_save(base_admin, 'gallery_09_admin_login.png', width=1280, height=750)

# 10. Admin Overview Dashboard
admin_auth_js = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); });</script>'
render_and_save(base_admin.replace('</body>', admin_auth_js + '</body>'), 'gallery_10_admin_overview.png', width=1280, height=850)

# 11. Admin Add New Product Modal (Live Photo Preview)
admin_add_js = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); document.getElementById("newProductModal").style.display = "flex"; });</script>'
render_and_save(base_admin.replace('</body>', admin_add_js + '</body>'), 'gallery_11_admin_add_product.png', width=1280, height=850)

# 12. Admin Edit Product Modal (Edit Name, Brand, Price, Image)
admin_edit_js = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); openEditModal("chipsy_salt_vinegar_15egp"); });</script>'
render_and_save(base_admin.replace('</body>', admin_edit_js + '</body>'), 'gallery_12_admin_edit_product.png', width=1280, height=850)

print("ALL MASTER GALLERY SCREENSHOTS CAPTURED SUCCESSFULLY!")
