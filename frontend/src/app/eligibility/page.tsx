"use client";
import { useState } from "react";
import InputField from "../../components/InputField";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function EligibilityForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    age: "",
    monthly_income: "",
    employment_type: "0",
    digital_txn_count: "",
    bill_payment_score: "",
    mobile_usage_score: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8000/predict", {
        age: Number(form.age),
        monthly_income: Number(form.monthly_income),
        employment_type: Number(form.employment_type),
        digital_txn_count: Number(form.digital_txn_count),
        bill_payment_score: Number(form.bill_payment_score),
        mobile_usage_score: Number(form.mobile_usage_score)
      });
      router.push({
        pathname: "/result",
        query: {
          credit_score: res.data.credit_score,
          risk_level: res.data.risk_level,
          loan_amount: res.data.loan_amount
        }
      });
    } catch (err) {
      alert("Error predicting credit. Check backend.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto py-16">
      <h2 className="text-3xl font-bold mb-6 text-center">Check Eligibility</h2>
      {["age", "monthly_income", "digital_txn_count", "bill_payment_score", "mobile_usage_score"].map((field) => (
        <InputField
          key={field}
          label={field.replace("_", " ").toUpperCase()}
          name={field}
          value={(form as any)[field]}
          onChange={handleChange}
        />
      ))}

      <motion.button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-3 mt-4 rounded-lg font-bold text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
        whileHover={!loading ? { scale: 1.05 } : {}}
        whileTap={!loading ? { scale: 0.95 } : {}}
      >
        {loading ? "Calculating..." : "Submit"}
      </motion.button>
    </div>
  );
}
