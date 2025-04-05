from app import db

# AQI Data Model
class AqiData(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # Auto-increment ID
    city = db.Column(db.String(100), nullable=False)
    state = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(50), nullable=False, default="India")
    aqi = db.Column(db.Integer, nullable=False)  # AQI value
    status = db.Column(db.String(50), nullable=False)  # AQI Category (Good, Moderate, etc.)
    timestamp = db.Column(db.DateTime, server_default=db.func.now())  # Auto timestamp

    # Convert DB data to JSON format
    def to_json(self):
        return {
            "id": self.id,
            "city": self.city,
            "state": self.state,
            "country": self.country,
            "aqi": self.aqi,
            "status": self.status,
            "timestamp": self.timestamp.isoformat()
        }
    