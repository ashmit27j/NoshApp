import firebase_admin
from firebase_admin import credentials, firestore
import pandas as pd
import ast
import os

# --- CONFIGURATION ---
# Ensure these files are in the same folder as this script
SERVICE_ACCOUNT_PATH = 'serviceAccountKey.json' 
CSV_PATH = 'nosh_db.csv'

# Initialize Firebase
if not firebase_admin._apps:
    if not os.path.exists(SERVICE_ACCOUNT_PATH):
        print(f"❌ Error: {SERVICE_ACCOUNT_PATH} not found!")
        exit()
    cred = credentials.Certificate(SERVICE_ACCOUNT_PATH)
    firebase_admin.initialize_app(cred)

db = firestore.client()

def to_string_array(val):
    """
    Ensures data becomes a native Python List of Strings.
    This creates the 'Array' type (Blue icon) in Firestore,
    which fixes the empty dropdowns in RecipeView.swift.
    """
    if pd.isna(val) or str(val).strip() == "":
        return []
    
    val_str = str(val).strip()
    
    try:
        # Handles "[...]" and "{...}" string formats from your CSV
        parsed = ast.literal_eval(val_str)
        if isinstance(parsed, dict):
            # Convert Map to Array: {"Milk": "100g"} -> ["Milk: 100g"]
            return [f"{k}: {v}" if v else str(k) for k, v in parsed.items()]
        if isinstance(parsed, list):
            return [str(item) for item in parsed]
    except (ValueError, SyntaxError):
        # Fallback for plain text: split by newline or comma
        if '\n' in val_str:
            return [i.strip() for i in val_str.split('\n') if i.strip()]
        return [i.strip() for i in val_str.split(',') if i.strip()]
    
    return [val_str]

def map_difficulty(val):
    """
    Maps numeric difficulty from CSV to Strings used by your
    DifficultySelector.swift and Nosh.swift logic.
    """
    mapping = {1: "Beginner", 2: "Novice", 3: "Intermediate", 4: "Professional"}
    try:
        return mapping.get(int(val), "Beginner")
    except:
        return "Beginner"

def reinitialize_recipes():
    print("📖 Reading CSV...")
    
    # FIX: Using 'utf-8-sig' to handle Excel BOM and special characters
    # If this fails, we fallback to 'latin1'
    try:
        df = pd.read_csv(CSV_PATH, encoding='utf-8-sig')
    except UnicodeDecodeError:
        df = pd.read_csv(CSV_PATH, encoding='latin1')

    recipes_ref = db.collection('recipes')

    print(f"🚀 Uploading {len(df)} recipes to Firestore...")

    for _, row in df.iterrows():
        # Mapping columns to the exact Swift property names in your code
        recipe_data = {
            "id": str(row.get('id', '')),
            "name": str(row.get('name', '')),
            "description": str(row.get('description', '')),
            "category_id": int(row.get('category_id', 0)),
            "difficulty": map_difficulty(row.get('difficulty', 1)), 
            "time_to_cook": int(row.get('time_to_cook', 0)),
            "servingSize": int(row.get('servingSize', 2)), 
            "imageName": str(row.get('image', '')),        
            "nutritional_content": str(row.get('nutritional_content', '')),
            "preferences": int(row.get('preferences', 0)),
            
            # These become Firestore 'Arrays' (Blue icon)
            "ingredients": to_string_array(row.get('ingredients')),
            "steps": to_string_array(row.get('steps'))
        }

        # Use the ID from the CSV as the Document ID
        doc_id = recipe_data["id"]
        if doc_id:
            recipes_ref.document(doc_id).set(recipe_data)
            print(f"✅ Successfully Reinitialized: {recipe_data['name']}")

if __name__ == "__main__":
    reinitialize_recipes()
    print("\n✨ Database is now synchronized with Nosh models. Restart your app!")