import csv
import os

def load_city_map(file_path=None):
    if file_path is None:
        # Dynamically resolve the file path relative to the script's location
        file_path = os.path.join(os.path.dirname(__file__), '../../data_files/city_name.csv')

    CITY_URL_MAP = {}
    with open(file_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            city_key = row['city_name'].lower().strip()
            state_path = row['state_name'].lower().replace(' ', '-')
            city_path = row['city_name'].lower().replace(' ', '-')
            CITY_URL_MAP[city_key] = (state_path, city_path)

    CITY_URL_MAP.update({   # special cases
        "chandigarh": ("chandigarh", "chandigarh"),
        "bangalore": ("karnataka", "bengaluru"),
        "puducherry": ("puducherry", "pondicherry"),
        "noida": ("uttar-pradesh", "noida"),
        "gurgaon": ("haryana", "gurugram")
    })
    return CITY_URL_MAP
