# filepath: c:\projects\web projects\final-year project\test\backend\src\main.py
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
from api.routes import router as api_router
from core.logging_config import setup_logging
from db.session import get_db
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

# Add the src folder to the Python path


app = FastAPI()

setup_logging()

# Include API routes
app.include_router(api_router)

# Serve static frontend
frontend_path = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "dist")
frontend_path = os.path.abspath(frontend_path)

app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

# Optional: serve index.html for any unmatched route (SPA fallback)
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    index_path = os.path.join(frontend_path, "index.html")
    return FileResponse(index_path)