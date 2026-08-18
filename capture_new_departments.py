import subprocess
import os
import shutil
from PIL import Image, ImageDraw

edge_exe = r'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
workspace_dir = r'c:\Users\HP\Desktop\elgamal market'
gallery_dir = os.path.join(workspace_dir, 'gallery')
artifact_gallery = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93'

def capture_screen(html_str, out_filename, w=481, h=920):
    tmp = os.path.join(workspace_dir, 'temp_dept_test.html')
    with open(tmp, 'w', encoding='utf-8') as f:
        f.write(html_str)
    out_p = os.path.join(gallery_dir, out_filename)
    cmd = [
        edge_exe,
        '--headless',
        '--disable-gpu',
        '--hide-scrollbars',
        f'--window-size={w},{h}',
        '--virtual-time-budget=2500',
        f'--screenshot={out_p}',
        'file:///' + tmp.replace('\\', '/')
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(out_p):
        shutil.copy(out_p, os.path.join(artifact_gallery, out_filename))
        print(f'Captured {out_filename}')

def build_perfect_iphone(screen_path, out_name):
    if not os.path.exists(screen_path):
        return
    screen = Image.open(screen_path).convert('RGBA')
    screen_w = 390
    screen_h = 844
    phone_screen = Image.new('RGBA', (screen_w, screen_h), (8, 18, 32, 255))
    content_h = screen_h - 44
    resized_content = screen.resize((screen_w, content_h), Image.Resampling.LANCZOS)
    phone_screen.paste(resized_content, (0, 44))
    
    bezel = 12
    phone_w = screen_w + (bezel * 2)
    phone_h = screen_h + (bezel * 2)
    
    canvas_w = phone_w + 60
    canvas_h = phone_h + 60
    canvas = Image.new('RGBA', (canvas_w, canvas_h), (245, 247, 250, 255))
    draw = ImageDraw.Draw(canvas)
    
    phone_x = 30
    phone_y = 30
    
    for i in range(16):
        alpha = int(24 - i * 1.4)
        draw.rounded_rectangle(
            (phone_x - i, phone_y - i, phone_x + phone_w + i, phone_y + phone_h + i),
            radius=50 + i,
            fill=(0, 0, 0, max(alpha, 0))
        )
        
    draw.rounded_rectangle(
        (phone_x, phone_y, phone_x + phone_w, phone_y + phone_h),
        radius=48,
        fill=(15, 23, 42, 255),
        outline=(71, 85, 105, 255),
        width=3
    )
    
    screen_mask = Image.new('L', (screen_w, screen_h), 0)
    m_draw = ImageDraw.Draw(screen_mask)
    m_draw.rounded_rectangle((0, 0, screen_w, screen_h), radius=38, fill=255)
    canvas.paste(phone_screen, (phone_x + bezel, phone_y + bezel), screen_mask)
    
    island_w = 100
    island_h = 24
    island_x = phone_x + (phone_w - island_w) // 2
    island_y = phone_y + bezel + 9
    draw.rounded_rectangle(
        (island_x, island_y, island_x + island_w, island_y + island_h),
        radius=12,
        fill=(0, 0, 0, 255)
    )
    draw.ellipse((island_x + island_w - 20, island_y + 6, island_x + island_w - 8, island_y + 18), fill=(20, 20, 30, 255))
    draw.text((phone_x + bezel + 28, phone_y + bezel + 12), '9:41', fill=(255, 255, 255, 255))
    
    bx = phone_x + phone_w - bezel - 48
    by = phone_y + bezel + 15
    draw.rounded_rectangle((bx, by, bx + 22, by + 11), radius=3, outline=(255, 255, 255, 255), width=1)
    draw.rectangle((bx + 2, by + 2, bx + 16, by + 9), fill=(34, 197, 94, 255))
    draw.rectangle((bx + 23, by + 3, bx + 24, by + 8), fill=(255, 255, 255, 255))
    
    hx = phone_x + (phone_w - 120) // 2
    hy = phone_y + phone_h - bezel - 8
    draw.rounded_rectangle((hx, hy, hx + 120, hy + 4), radius=2, fill=(255, 255, 255, 180))
    
    out_path = os.path.join(gallery_dir, out_name)
    canvas.save(out_path, 'PNG')
    shutil.copy(out_path, os.path.join(artifact_gallery, out_name))
    print(f'Rendered: {out_name}')

base_index = open(os.path.join(workspace_dir, 'index.html'), 'r', encoding='utf-8').read()

# 1. Main Home Screen with 8 New Departments
capture_screen(base_index, 'new_departments_homepage.png', w=481, h=920)
build_perfect_iphone(os.path.join(gallery_dir, 'new_departments_homepage.png'), 'phone_screen_new_departments.png')

# 2. Ice Cream Department View
ic_snippet = '<script>window.addEventListener("load", () => { setTimeout(() => { filterByCategory("icecream"); }, 800); });</script>'
capture_screen(base_index.replace('</body>', ic_snippet + '</body>'), 'icecream_department_catalog.png', w=481, h=920)
build_perfect_iphone(os.path.join(gallery_dir, 'icecream_department_catalog.png'), 'phone_screen_icecream_department.png')

# 3. Snacks Department View
snack_snippet = '<script>window.addEventListener("load", () => { setTimeout(() => { filterByCategory("snacks"); }, 800); });</script>'
capture_screen(base_index.replace('</body>', snack_snippet + '</body>'), 'snacks_department_catalog.png', w=481, h=920)
build_perfect_iphone(os.path.join(gallery_dir, 'snacks_department_catalog.png'), 'phone_screen_snacks_department.png')

# 4. Sweets Department View
sweet_snippet = '<script>window.addEventListener("load", () => { setTimeout(() => { filterByCategory("sweets"); }, 800); });</script>'
capture_screen(base_index.replace('</body>', sweet_snippet + '</body>'), 'sweets_department_catalog.png', w=481, h=920)
build_perfect_iphone(os.path.join(gallery_dir, 'sweets_department_catalog.png'), 'phone_screen_sweets_department.png')

print('All updated category screens and mockups generated successfully!')
