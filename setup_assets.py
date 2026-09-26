import os
import shutil
from PIL import Image, ImageDraw, ImageFont

scratch_dir = r"C:\Users\rjik\.gemini\antigravity\scratch"
target_dir = os.path.join(scratch_dir, "imako-solution")
images_dir = os.path.join(target_dir, "public", "images")
os.makedirs(images_dir, exist_ok=True)

# Copy Imako logo if exists
src_logo = os.path.join(scratch_dir, "imaco-academy", "public", "imako-logo.png")
dst_logo = os.path.join(target_dir, "public", "imako-logo.png")
if os.path.exists(src_logo):
    shutil.copy2(src_logo, dst_logo)
    print("Copied imako-logo.png")

# Brand colors: Sky Blue (56, 189, 248), Red (239, 68, 68), White (255, 255, 255)
SKY_BLUE = (56, 189, 248)
RED = (239, 68, 68)
WHITE = (255, 255, 255)
DARK_BG = (10, 16, 26)

projects = [
    {
        "filename": "portfolio-bisrat-hotel.jpg",
        "title": "Bisrat Hotel",
        "subtitle": "Luxury Hospitality & Dining Platform",
        "accent": SKY_BLUE,
        "secondary": RED,
        "tag": "HOSPITALITY",
        "stat": "Adama • 24/7 Power • High-Speed WiFi"
    },
    {
        "filename": "portfolio-nisir-adama-football-academy.jpg",
        "title": "Nisir Adama Football Academy",
        "subtitle": "Youth Sports & Multilingual Portal",
        "accent": RED,
        "secondary": SKY_BLUE,
        "tag": "SPORTS TECH",
        "stat": "200+ Players • Digital CBE/Telebirr CMS"
    },
    {
        "filename": "portfolio-eyana-hotel.jpg",
        "title": "Eyana Hotel (Canopy)",
        "subtitle": "Canopy Resort & Event Experience",
        "accent": SKY_BLUE,
        "secondary": RED,
        "tag": "HOTEL & CANOPY",
        "stat": "Online Reservations • Event Bookings"
    },
    {
        "filename": "portfolio-dr-abdi-speciality-dental.jpg",
        "title": "Dr. Abdi Specialty Dental Clinic",
        "subtitle": "Advanced Dental Care & Patient Intake",
        "accent": SKY_BLUE,
        "secondary": RED,
        "tag": "HEALTHCARE",
        "stat": "Automated Appointments • Clinical Credentialing"
    },
    {
        "filename": "portfolio-hailu-dental-no1.jpg",
        "title": "Hailu Specialty Dental Clinic",
        "subtitle": "Premier Orthodontics & Dental Care",
        "accent": RED,
        "secondary": SKY_BLUE,
        "tag": "HEALTHCARE",
        "stat": "Smile Gallery • Consultation Funnel"
    },
    {
        "filename": "portfolio-aalam-media.jpg",
        "title": "Aalam Media",
        "subtitle": "Creative Production & Digital Studio",
        "accent": SKY_BLUE,
        "secondary": RED,
        "tag": "CREATIVE MEDIA",
        "stat": "Production Showcase • Cinematic Showcase"
    },
    {
        "filename": "portfolio-husen-online-marketing.jpg",
        "title": "Husen Online Marketing",
        "subtitle": "Performance Marketing & Growth System",
        "accent": RED,
        "secondary": SKY_BLUE,
        "tag": "DIGITAL MARKETING",
        "stat": "Lead Engine • Growth Audits • High ROI"
    }
]

width, height = 1200, 750

for p in projects:
    img = Image.new("RGB", (width, height), DARK_BG)
    draw = ImageDraw.Draw(img)
    
    # Smooth Sky Blue & Red atmospheric gradients
    for y in range(height):
        factor = y / height
        r = int(DARK_BG[0] * (1 - factor) + 18 * factor)
        g = int(DARK_BG[1] * (1 - factor) + 26 * factor)
        b = int(DARK_BG[2] * (1 - factor) + 40 * factor)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Grid lines
    for x in range(0, width, 50):
        draw.line([(x, 0), (x, height)], fill=(20, 32, 50))
    for y in range(0, height, 50):
        draw.line([(0, y), (width, y)], fill=(20, 32, 50))

    # Glowing geometric frame
    accent = p["accent"]
    draw.rectangle([40, 40, width - 40, height - 40], outline=accent, width=2)
    draw.rectangle([46, 46, width - 46, height - 46], outline=(30, 45, 70), width=1)
    
    # Corner brackets in Brand Red
    corner_len = 50
    draw.line([(35, 35), (35 + corner_len, 35)], fill=p["secondary"], width=4)
    draw.line([(35, 35), (35, 35 + corner_len)], fill=p["secondary"], width=4)
    draw.line([(width - 35, 35), (width - 35 - corner_len, 35)], fill=p["secondary"], width=4)
    draw.line([(width - 35, 35), (width - 35, 35 + corner_len)], fill=p["secondary"], width=4)
    draw.line([(35, height - 35), (35 + corner_len, height - 35)], fill=p["secondary"], width=4)
    draw.line([(35, height - 35), (35, height - 35 - corner_len)], fill=p["secondary"], width=4)
    draw.line([(width - 35, height - 35), (width - 35 - corner_len, height - 35)], fill=p["secondary"], width=4)
    draw.line([(width - 35, height - 35), (width - 35, height - 35 - corner_len)], fill=p["secondary"], width=4)

    # Accent decorative pill tag
    draw.rounded_rectangle([90, 90, 320, 135], radius=8, fill=(15, 25, 40), outline=accent, width=2)

    try:
        font_large = ImageFont.truetype("arial.ttf", 46)
        font_medium = ImageFont.truetype("arial.ttf", 26)
        font_small = ImageFont.truetype("arial.ttf", 18)
        font_tag = ImageFont.truetype("arial.ttf", 16)
    except:
        font_large = ImageFont.load_default()
        font_medium = font_large
        font_small = font_large
        font_tag = font_large

    draw.text((115, 102), p["tag"], fill=accent, font=font_tag)
    
    # Title & Subtitle in White & Sky Blue
    draw.text((90, 240), p["title"], fill=WHITE, font=font_large)
    draw.text((90, 310), p["subtitle"], fill=(190, 210, 235), font=font_medium)
    draw.text((90, 370), "Engineered & Scaled by Imako Solution (AI & Web Systems)", fill=p["secondary"], font=font_small)
    
    # Impact Box
    draw.rounded_rectangle([90, 480, width - 90, 640], radius=12, fill=(12, 18, 30), outline=(35, 50, 75), width=2)
    draw.text((120, 510), "KEY IMPACT OVERVIEW", fill=accent, font=font_small)
    draw.text((120, 550), p["stat"], fill=WHITE, font=font_medium)
    draw.text((120, 595), "LIVE CASE STUDY • TAP TO LAUNCH PRODUCTION SITE", fill=(140, 160, 190), font=font_small)

    out_path = os.path.join(images_dir, p["filename"])
    img.save(out_path, "JPEG", quality=92)
    print(f"Generated brand {p['filename']}")

print("All brand assets regenerated with Sky Blue, Red, and White.")
