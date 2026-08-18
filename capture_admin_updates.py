import subprocess
import os
import shutil

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
gallery_dir = os.path.join(workspace_dir, 'gallery')
artifact_gallery = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93'

admin_html = open(os.path.join(workspace_dir, 'admin.html'), 'r', encoding='utf-8').read()

# 1. Admin Products List with Delete & Out of Stock Buttons
auth_snippet = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); });</script>'
tmp_admin = os.path.join(workspace_dir, 'temp_admin_test.html')
with open(tmp_admin, 'w', encoding='utf-8') as f:
    f.write(admin_html.replace('</body>', auth_snippet + '</body>'))

out_admin = os.path.join(gallery_dir, 'admin_features_delete_stock.png')
cmd1 = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1280,850',
    '--virtual-time-budget=2500',
    f'--screenshot={out_admin}',
    'file:///' + tmp_admin.replace('\\', '/')
]
subprocess.run(cmd1, capture_output=True)
if os.path.exists(out_admin):
    shutil.copy(out_admin, os.path.join(artifact_gallery, 'admin_features_delete_stock.png'))
    print('Captured admin_features_delete_stock.png')

# 2. Edit Modal with Delete Button and Stock Toggle
edit_snippet = '<script>window.addEventListener("DOMContentLoaded", () => { sessionStorage.setItem("elgamal_admin_auth", "true"); document.getElementById("loginScreen").style.display = "none"; document.getElementById("adminApp").style.display = "grid"; renderAdminProducts(); openEditModal("doritos_nacho_cheese_48g"); });</script>'
tmp_edit = os.path.join(workspace_dir, 'temp_edit_test.html')
with open(tmp_edit, 'w', encoding='utf-8') as f:
    f.write(admin_html.replace('</body>', edit_snippet + '</body>'))

out_edit = os.path.join(gallery_dir, 'admin_edit_with_delete_modal.png')
cmd2 = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=1280,850',
    '--virtual-time-budget=2500',
    f'--screenshot={out_edit}',
    'file:///' + tmp_edit.replace('\\', '/')
]
subprocess.run(cmd2, capture_output=True)
if os.path.exists(out_edit):
    shutil.copy(out_edit, os.path.join(artifact_gallery, 'admin_edit_with_delete_modal.png'))
    print('Captured admin_edit_with_delete_modal.png')
