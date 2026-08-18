import subprocess
import os

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

def capture_admin(html_content, out_name, width=1280, height=800):
    temp_file = 'temp_admin_render.html'
    with open(temp_file, 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    out_path = os.path.abspath(out_name)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={width},{height}',
        '--virtual-time-budget=2000',
        f'--screenshot={out_path}',
        'file:///' + os.path.abspath(temp_file).replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    print(f"Captured {out_name}: exists={os.path.exists(out_path)}")

base_admin = open('admin.html', 'r', encoding='utf-8').read()

# 1. Login Screen View
capture_admin(base_admin, 'admin_view_1_login.png', width=1280, height=750)

# 2. Main Dashboard Overview
dash_script = '''
<script>
window.addEventListener("DOMContentLoaded", () => {
  sessionStorage.setItem("elgamal_admin_auth", "true");
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminApp").style.display = "grid";
  renderAdminProducts();
});
</script>
'''
capture_admin(base_admin.replace('</body>', dash_script + '</body>'), 'admin_view_2_dashboard.png', width=1280, height=850)

# 3. Add New Product Modal View
add_prod_script = '''
<script>
window.addEventListener("DOMContentLoaded", () => {
  sessionStorage.setItem("elgamal_admin_auth", "true");
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminApp").style.display = "grid";
  renderAdminProducts();
  document.getElementById("newProductModal").style.display = "flex";
});
</script>
'''
capture_admin(base_admin.replace('</body>', add_prod_script + '</body>'), 'admin_view_3_add_product.png', width=1280, height=850)

# 4. Edit Product Price Modal View
edit_price_script = '''
<script>
window.addEventListener("DOMContentLoaded", () => {
  sessionStorage.setItem("elgamal_admin_auth", "true");
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminApp").style.display = "grid";
  renderAdminProducts();
  openEditModal("doritos_nacho_cheese_48g");
});
</script>
'''
capture_admin(base_admin.replace('</body>', edit_price_script + '</body>'), 'admin_view_4_edit_price.png', width=1280, height=850)

print("All 4 Admin Dashboard views captured!")
