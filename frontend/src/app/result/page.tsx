"use client";
import { useSearchParams } from "next/navigation";
import ProgressBar from "../../components/ProgressBar";
import RiskBadge from "../../components/RiskBadge";
import LoanCard from "../../components/LoanCard";

export default function Result() {
  const params = useSearchParams();
  const credit_score = Number(params.get("credit_score")) || 0;
  const risk_level = params.get("risk_level") || "Low";
  const loan_amount = Number(params.get("loan_amount")) || 0;

  return (
    <div className="max-w-xl mx-auto py-16 space-y-6">
      <h2 className="text-3xl font-bold text-center">Your Credit Dashboard</h2>

      <div>
        <h3 className="font-semibold mb-2">Credit Score</h3>
        <ProgressBar value={(credit_score / 900) * 100} />
      </div>

      <div className="flex justify-center mt-4">
        <RiskBadge risk={risk_level} />
      </div>

      <LoanCard amount={loan_amount} />

      {/* Optional: SHAP chart can be added once backend /explain is integrated */}
    </div>
  );
}
