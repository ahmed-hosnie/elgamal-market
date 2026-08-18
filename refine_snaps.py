import subprocess
import os
import shutil

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
gallery_dir = os.path.join(workspace_dir, 'gallery')
artifact_gallery = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\gallery'

def capture(html_code, fname, width=481, height=850):
    tmp = os.path.join(workspace_dir, 'temp_snap.html')
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(html_code)
    out = os.path.join(gallery_dir, fname)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={width},{height}',
        '--virtual-time-budget=2000',
        f'--screenshot={out}',
        'file:///' + tmp.replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(out):
        shutil.copy(out, os.path.join(artifact_gallery, fname))
        print(f"Generated {fname} -> Size: {os.path.getsize(out)} bytes")

base_html = open(os.path.join(workspace_dir, 'index.html'), 'r', encoding='utf-8').read()

# 2. Departments
js_dept = '<script>window.addEventListener("load", () => { document.getElementById("departmentsSection").scrollIntoView(); });</script>'
capture(base_html.replace('</body>', js_dept + '</body>'), 'mob_2_departments.png')

# 3. Products Grid
js_prod = '<script>window.addEventListener("load", () => { document.getElementById("productsGrid").scrollIntoView(); });</script>'
capture(base_html.replace('</body>', js_prod + '</body>'), 'mob_3_products_grid.png')

# 7. Footer
js_foot = '<script>window.addEventListener("load", () => { document.querySelector("footer").scrollIntoView(); });</script>'
capture(base_html.replace('</body>', js_foot + '</body>'), 'mob_7_footer.png')

# 9. Desktop Catalog Grid
js_desk_cat = '<script>window.addEventListener("load", () => { document.getElementById("catalogSection").scrollIntoView(); });</script>'
capture(base_html.replace('</body>', js_desk_cat + '</body>'), 'desk_2_catalog.png', width=1280, height=850)

print("Refined captures completed!")
