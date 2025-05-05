# filepath: c:\projects\web projects\final-year project\test\backend\src\main.py
import sys
import os

# Add the src folder to the Python path
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
from api.routes import router as api_router
from core.logging_config import setup_logging
from db.session import get_db

app = FastAPI()

setup_logging()
app.include_router(api_router)