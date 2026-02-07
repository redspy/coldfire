from PIL import Image
import base64
import os
import sys

def process_and_convert(input_path, output_svg_path):
    print(f"Processing {input_path}...")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        # Threshold for white/background
        # Adjust if needed. 200 is a safe bet for "white or very light gray"
        threshold = 200 
        
        for item in datas:
            # Check brightness (average of RGB)
            brightness = (item[0] + item[1] + item[2]) / 3
            
            if brightness > threshold:
                # It's white/light -> Make Transparent
                newData.append((255, 255, 255, 0))
            else:
                # It's dark/text -> Make White
                newData.append((255, 255, 255, 255))
                
        img.putdata(newData)
        
        # Crop the image to the bounding box of non-transparent areas
        bbox = img.getbbox()
        if bbox:
            print(f"Cropping from {img.size} to {bbox}")
            img = img.crop(bbox)
        
        # Save as temp PNG to get base64
        temp_png = "temp_logo.png"
        img.save(temp_png, "PNG")
        
        # Create SVG wrapper
        with open(temp_png, "rb") as f:
            png_data = f.read()
            b64_data = base64.b64encode(png_data).decode('utf-8')
            
        w, h = img.size
        svg_content = f'''<svg width="{w}" height="{h}" viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <image href="data:image/png;base64,{b64_data}" width="{w}" height="{h}"/>
</svg>'''

        with open(output_svg_path, "w") as f:
            f.write(svg_content)
            
        print(f"Successfully generated {output_svg_path}")
        
        # Cleanup
        if os.path.exists(temp_png):
            os.remove(temp_png)
            
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Paths are relative to where the script is run
    input_file = "assets/images/xize.png"
    output_file = "assets/images/logo_hero.svg"
    
    if len(sys.argv) > 1:
        input_file = sys.argv[1]
    if len(sys.argv) > 2:
        output_file = sys.argv[2]
        
    process_and_convert(input_file, output_file)
