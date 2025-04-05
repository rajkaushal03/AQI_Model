from app import app, db
from flask import request, jsonify  # type: ignore

# Get AQI by city
@app.route("/aqi/<city>", methods=["GET"])
def get_aqi_by_city(city):
    city = city.title()
    print(f"Requested city: {city}")  # Optional: log to console
    return jsonify({"city": city}), 200
