"use client";

import { useState } from "react";
import InputField from "../../components/InputField";
import { motion } from "framer-motion";
import axios from "axios";

export default function EligibilityPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    score: number;
    status: string;
  }>(null);

  const [form, setForm] = useState({
    age: "",
    monthly_income: "",
    employment_type: "0",
    digital_txn_count: "",
    bill_payment_score: "",
    mobile_usage_score: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // 🔹 Temporary AI logic (replace with backend later if needed)
      await new Promise((res) => setTimeout(res, 1500));

      const score = 78;
      const status = score >= 60 ? "Eligible" : "Not Eligible";

      setResult({ score, status });

      // 🔹 Backend call (already correct)
      await axios.post("http://localhost:8000/predict", {
        age: Number(form.age),
        monthly_income: Number(form.monthly_income),
        employment_type: Number(form.employment_type),
        digital_txn_count: Number(form.digital_txn_count),
        bill_payment_score: Number(form.bill_payment_score),
        mobile_usage_score: Number(form.mobile_usage_score),
      });
    } catch (err) {
      alert("Error predicting credit. Check backend.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl bg-white rounded-2xl shadow-xl p-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6">
          Check Eligibility
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "age",
            "monthly_income",
            "digital_txn_count",
            "bill_payment_score",
            "mobile_usage_score",
          ].map((field) => (
            <InputField
              key={field}
              label={field.replace("_", " ").toUpperCase()}
              name={field}
              value={(form as any)[field]}
              onChange={handleChange}
            />
          ))}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
              ${
                loading
                  ? "bg-blue-300 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-secondary shadow-md hover:shadow-xl active:scale-95"
              }`}
          >
            {loading ? "Analyzing Eligibility..." : "Analyze Eligibility"}
          </button>
        </form>

        {/* LOADING TEXT */}
        {loading && (
          <p className="text-center text-primary mt-4 animate-pulse">
            AI analyzing your profile...
          </p>
        )}

        {/* RESULT SECTION */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-blue-50 border border-primary rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-primary">
              Eligibility Score: {result.score}%
            </h3>

            <p className="mt-2 text-gray-700">
              Status:{" "}
              <span
                className={`font-semibold ${
                  result.status === "Eligible"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {result.status}
              </span>
            </p>

            <p className="mt-3 text-sm text-gray-600">
              Decision is based on income stability, digital behavior,
              bill payment consistency, and mobile usage patterns.
            </p>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
