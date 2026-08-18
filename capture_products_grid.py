import subprocess
import os

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

base_html = open('index.html', 'r', encoding='utf-8').read()
products_script = '<script>window.addEventListener("load", () => { setTimeout(() => { window.scrollTo(0, 1150); }, 800); });</script>'
temp_file = 'temp_products_render.html'
with open(temp_file, 'w', encoding='utf-8') as f:
    f.write(base_html.replace('</body>', products_script + '</body>'))

cmd = [
    edge_exe,
    '--headless',
    '--disable-gpu',
    '--hide-scrollbars',
    '--window-size=481,950',
    '--virtual-time-budget=2500',
    f'--screenshot={os.path.abspath("mobile_view_2_products.png")}',
    'file:///' + os.path.abspath(temp_file).replace('\\', '/')
]
subprocess.run(cmd, capture_output=True)
print("Captured mobile_view_2_products.png successfully!")
