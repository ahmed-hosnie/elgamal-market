import subprocess
import os
import shutil

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
artifact_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93'

gallery_dir = os.path.join(workspace_dir, 'gallery')
os.makedirs(gallery_dir, exist_ok=True)

artifact_gallery = os.path.join(artifact_dir, 'gallery')
os.makedirs(artifact_gallery, exist_ok=True)

def take_shot(html_str, filename, width=481, height=844):
    temp_html = os.path.join(workspace_dir, 'temp_gallery_render.html')
    with open(temp_html, 'w', encoding='utf-8') as f:
        f.write(html_str)
    
    out_path = os.path.join(gallery_dir, filename)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={width},{height}',
        '--virtual-time-budget=2500',
        f'--screenshot={out_path}',
        'file:///' + temp_html.replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    
    # Copy to artifact dir as well
    if os.path.exists(out_path):
        shutil.copy(out_path, os.path.join(artifact_gallery, filename))
        print(f"Generated {filename} -> Size: {os.path.getsize(out_path)} bytes")

base_index = open(os.path.join(workspace_dir, 'index.html'), 'r', encoding='utf-8').read()
base_admin = open(os.path.join(workspace_dir, 'admin.html'), 'r', encoding='utf-8').read()

print("Capturing Mobile Gallery...")
# 1. Mobile Home (Header, Hero, Features)
take_shot(base_index, 'mob_1_header_hero.png', width=481, height=850)

# 2. Mobile Departments
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { document.getElementById("departmentsSection").scrollIntoView(); }, 800); });</script></body>'),
          'mob_2_departments.png', width=481, height=850)

# 3. Mobile Products Grid (2-columns)
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { window.scrollTo(0, 1050); }, 800); });</script></body>'),
          'mob_3_products_grid.png', width=481, height=850)

# 4. Mobile Cart Drawer
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("chipsy_salt_vinegar_15egp", 2); addToCart("indomie_special_chicken_noodles_70g", 3); openCart(); }, 800); });</script></body>'),
          'mob_4_cart_drawer.png', width=481, height=850)

# 5. Mobile Filter Drawer
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { toggleMobileFilter(true); }, 800); });</script></body>'),
          'mob_5_filter_drawer.png', width=481, height=850)

# 6. Mobile WhatsApp Checkout Modal
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { addToCart("el_doha_egyptian_white_rice_1kg", 2); openCheckoutModal(); }, 800); });</script></body>'),
          'mob_6_whatsapp_checkout.png', width=481, height=850)

# 7. Mobile Footer
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { window.scrollTo(0, 99999); }, 800); });</script></body>'),
          'mob_7_footer.png', width=481, height=850)


print("Capturing Desktop Gallery...")
# 8. Desktop Home & Hero
take_shot(base_index, 'desk_1_header_hero.png', width=1280, height=850)

# 9. Desktop Catalog Grid & Sidebar
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { document.getElementById("catalogSection").scrollIntoView(); }, 800); });</script></body>'),
          'desk_2_catalog.png', width=1280, height=850)

# 10. Desktop Quick View Modal
take_shot(base_index.replace('</body>', '<script>window.addEventListener("load", () => { setTimeout(() => { openQuickView("doritos_nacho_cheese_48g"); }, 800); });</script></body>'),
          'desk_3_quick_view.png', width=1280, height=850)


print("Capturing Admin Dashboard Gallery...")
# 11. Admin Login Screen
take_shot(base_admin, 'admin_1_login.png', width=1280, height=750)

# 12. Admin Dashboard Overview
admin_auth_script = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); });</script>'
take_shot(base_admin.replace('</body>', admin_auth_script + '</body>'), 'admin_2_overview.png', width=1280, height=850)

# 13. Admin Add Product Modal
admin_add_script = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); document.getElementById("newProductModal").style.display = "flex"; });</script>'
take_shot(base_admin.replace('</body>', admin_add_script + '</body>'), 'admin_3_add_product.png', width=1280, height=850)

# 14. Admin Edit Price Modal
admin_edit_script = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); openEditModal("chipsy_salt_vinegar_15egp"); });</script>'
take_shot(base_admin.replace('</body>', admin_edit_script + '</body>'), 'admin_4_edit_price.png', width=1280, height=850)

print("ALL SCREENSHOTS CAPTURED SUCCESSFULLY!")
