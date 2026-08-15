import os
import shutil

src_dir = r'C:\Users\HP\.gemini\antigravity\brain\bc22e49c-1f41-4f54-b8be-c918950b6a93\.user_uploaded'
dest_dir = r'c:\Users\HP\Desktop\elgamal market\images'

# Let's get the list of recent uploads in chronological order
files = [f for f in os.listdir(src_dir) if f.startswith('media_17866965') or f.startswith('media_17866966') or f.startswith('media_17866967') or f.startswith('media_17866968') or f.startswith('media_17866969') or f.startswith('media_1786697')]
files.sort()
print(f"Total new upload files found: {len(files)}")
for f in files:
    print(f, os.path.getsize(os.path.join(src_dir, f)))
