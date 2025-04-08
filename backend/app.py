from flask import Flask,jsonify  # type: ignore
from flask_sqlalchemy import SQLAlchemy  # type: ignore
from flask_cors import CORS  # type: ignore

app = Flask(__name__)
CORS(app)

# SQLite database setup
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///aqi_data.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize database
db = SQLAlchemy(app)

# import routes  # Import routes after db setup

# Create the database and the table
with app.app_context():
    db.create_all()

import routes


@app.route("/", methods=["GET"])
def home():
    return jsonify({ })

if __name__ == "__main__":
    app.run(debug=True)
