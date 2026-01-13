from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np
import joblib
import os
import shap


# ---------------------------
# App Initialization
# ---------------------------
app = FastAPI(
    title="AI Credit Scoring API",
    description="AI-driven credit scoring for underserved markets",
    version="1.0.0"
)

# ---------------------------
# Load ML Model
# ---------------------------
MODEL_PATH = os.path.join("model", "model.pkl")
model = joblib.load(MODEL_PATH)

# ---------------------------
# SHAP Explainer (STEP 3D.3)
# ---------------------------
explainer = shap.TreeExplainer(model)

FEATURE_NAMES = [
    "age",
    "monthly_income",
    "employment_type",
    "digital_txn_count",
    "bill_payment_score",
    "mobile_usage_score"
]

# ---------------------------
# Request Schema (STEP 3C.1)
# ---------------------------
class CreditRequest(BaseModel):
    age: int
    monthly_income: float
    employment_type: int  # 0=Farmer, 1=Gig, 2=Salaried
    digital_txn_count: int
    bill_payment_score: float
    mobile_usage_score: float

# ---------------------------
# Business Logic (STEP 3C.2)
# ---------------------------
def calculate_credit_score(probability: float) -> int:
    # Scale probability (0–1) → credit score (300–900)
    return int(300 + probability * 600)


def classify_risk(probability: float) -> str:
    if probability >= 0.75:
        return "Low"
    elif probability >= 0.45:
        return "Medium"
    else:
        return "High"


def recommend_loan_amount(risk: str, income: float) -> int:
    if risk == "Low":
        return int(income * 6)
    elif risk == "Medium":
        return int(income * 3)
    else:
        return int(income * 1)

# ---------------------------
# Health Check Endpoint (3B)
# ---------------------------
@app.get("/health")
def health_check():
    return {"status": "ok", "model_loaded": True}

# ---------------------------
# Prediction Endpoint (STEP 3C.3)
# ---------------------------
@app.post("/predict")
def predict_credit(data: CreditRequest):
    features = np.array([[
        data.age,
        data.monthly_income,
        data.employment_type,
        data.digital_txn_count,
        data.bill_payment_score,
        data.mobile_usage_score
    ]])

    repayment_probability = model.predict_proba(features)[0][1]

    credit_score = calculate_credit_score(repayment_probability)
    risk_level = classify_risk(repayment_probability)
    loan_amount = recommend_loan_amount(risk_level, data.monthly_income)

    return {
        "repayment_probability": round(float(repayment_probability), 2),
        "credit_score": credit_score,
        "risk_level": risk_level,
        "loan_amount": loan_amount
    }

# ---------------------------
# Explainable AI Endpoint (STEP 3D.4)
# ---------------------------
@app.post("/explain")
def explain_credit_decision(data: CreditRequest):
    features = np.array([[
        data.age,
        data.monthly_income,
        data.employment_type,
        data.digital_txn_count,
        data.bill_payment_score,
        data.mobile_usage_score
    ]])

    shap_values = explainer.shap_values(features)

    # Binary classification → use positive class (index 1)
    contributions = shap_values[1][0]

    explanation = {
        feature: round(float(value), 4)
        for feature, value in zip(FEATURE_NAMES, contributions)
    }

    return {
        "feature_contributions": explanation
    }
