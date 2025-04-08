from app import app
from flask import request, jsonify  # type: ignore
import json
import requests
from requests.exceptions import RequestException


def get_temp_and_humidity_data(city: str) -> dict:
    
    url = "https://n8n.nikkuv.site/webhook/e847d323-eba6-40c5-a3db-ad659444bd22"
    params = {"city": city}

    try:
        response = requests.get(url, params=params, timeout=10)
        return parse_malformed_json(response.text)
    except RequestException as e:
        print(f"Request failed for current data: {e}")
        return {}


def get_AQI_data(city: str) -> dict:
    
    url = "https://n8n.nikkuv.site/webhook/98d4d9b4-8276-45e3-a539-9e3f061ddada"
    params = {"city": city}

    try:
        response = requests.get(url, params=params, timeout=10)
        return parse_malformed_json(response.text)
    except RequestException as e:
        print(f"Request failed for past data: {e}")
        return {}


def parse_malformed_json(raw_text: str) -> dict:
    
    try:
        cleaned = raw_text.strip('` \n')
        if cleaned.startswith('json\\n') or cleaned.startswith('json\n'):
            cleaned = cleaned.split('\n', 1)[1]
        return json.loads(cleaned)
    except json.JSONDecodeError as e:
        print(f"Failed to parse JSON: {e}")
        return {}


def combine_both_json(response1: dict, response2: dict) -> dict:
    
    merged_data = response1.copy()
    merged_data['yearly'] = response2
    return merged_data


def main(city: str) -> dict:
    
    temp_and_hum_data = get_temp_and_humidity_data(city)
    AQI_data = get_AQI_data(city)
    return combine_both_json(temp_and_hum_data, AQI_data)




    
# Get AQI by city
@app.route("/aqi/<city>", methods=["GET"])
def get_aqi_by_city(city):
    try:
        city = city.title()
        if city:
            result = main(city)
            return jsonify(result), 200
        else:
            return jsonify({"msg": "City name cannot be empty"}), 400
    except KeyboardInterrupt:
        return jsonify({"error": "Execution interrupted by user."})

