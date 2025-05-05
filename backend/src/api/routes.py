from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.session import get_db
from schemas.air_quality import (
    CityRequest, AirQualityResponse,
    HealthImpactRequest, HealthImpactResponse
)
from services.scraper import get_air_quality_data
from services.air_quality import save_air_quality_to_db
from services.health_predictor import predict_health_impact
from db.models import AirQuality
from core.city_loader import load_city_map
from typing import List


router = APIRouter()
CITY_URL_MAP = load_city_map()


@router.get("/details/{city}", response_model=AirQualityResponse)
def create_air_quality(city: str, db: Session = Depends(get_db)):
    # Get air quality data for the city
    air_data = get_air_quality_data(city)

    # Health impact prediction
    features = [
        air_data["aqi"], air_data["pm10"], air_data["pm2_5"],
        air_data["no2"], air_data["so2"], air_data["o3"]
    ]

    # Predict health impact based on air quality data
    health_score, risk_class = predict_health_impact(features)

    # Add the health score and risk class to the air_data
    air_data["health_score"] = health_score
    air_data["risk_class"] = ['Low', 'Moderate', 'High'][risk_class]

    # Save the air quality and health impact data to the database
    data =  save_air_quality_to_db(db, air_data)
    
    return data



@router.get("/air-quality/", response_model=List[AirQualityResponse])
def read_air_qualities(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(AirQuality).offset(skip).limit(limit).all()



@router.get("/cities")
def get_available_cities():
    try:
        return {"cities": [city for city in CITY_URL_MAP]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

