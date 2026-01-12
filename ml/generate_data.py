import numpy as np
import pandas as pd

# Reproducibility
np.random.seed(42)

# Number of records
n = 5000

# Generate features
df = pd.DataFrame({
    "age": np.random.randint(21, 60, n),
    "monthly_income": np.random.randint(5000, 60000, n),
    "employment_type": np.random.choice([0, 1, 2], n),
    # 0 = Farmer, 1 = Gig, 2 = Salaried
    "digital_txn_count": np.random.randint(0, 200, n),
    "bill_payment_score": np.random.rand(n),
    "mobile_usage_score": np.random.rand(n),
})

# Target variable (synthetic but logical)
df["repayment_status"] = (
    (df["monthly_income"] > 15000).astype(int)
    & (df["bill_payment_score"] > 0.4).astype(int)
    & (df["digital_txn_count"] > 10).astype(int)
)

# Save dataset
df.to_csv("credit_data.csv", index=False)

print("✅ Synthetic dataset generated: credit_data.csv")
