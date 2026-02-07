from PIL import Image
import sys

def process_logo(image_path, output_path):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        datas = img.getdata()
        
        newData = []
        threshold = 30
        
        for item in datas:
            # item is (r, g, b, a)
            if item[0] < threshold and item[1] < threshold and item[2] < threshold:
                # Make it transparent
                newData.append((0, 0, 0, 0))
            else:
                newData.append(item)
        
        img.putdata(newData)
        
        # Now crop to content (non-transparent area)
        bbox = img.getbbox()
        
        if bbox:
            # Add a small padding
            padding = 10
            left, upper, right, lower = bbox
            width, height = img.size
            
            left = max(0, left - padding)
            upper = max(0, upper - padding)
            right = min(width, right + padding)
            lower = min(height, lower + padding)
            
            cropped_img = img.crop((left, upper, right, lower))
            cropped_img.save(output_path)
            print(f"Successfully processed and cropped {image_path} to {output_path}")
        else:
            print("No content found after background removal.")
            
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python crop_logo.py <input_path> <output_path>")
        sys.exit(1)
    
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    process_logo(input_path, output_path)
