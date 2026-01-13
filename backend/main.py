from fastapi import FastAPI
import joblib
import os

app = FastAPI(
    title="AI Credit Scoring API",
    description="AI-driven credit scoring for underserved markets",
    version="1.0.0"
)

# Load ML model
MODEL_PATH = os.path.join("model", "model.pkl")
model = joblib.load(MODEL_PATH)


@app.get("/health")
def health_check():
    return {"status": "ok", "model_loaded": True}
