"use client";
import { useState } from "react";

export default function ScoreSimulator() {
  const [income, setIncome] = useState(20000);
  const [txns, setTxns] = useState(20);

  const estimatedScore = Math.min(900, 300 + income / 100 + txns * 2);

  return (
    <div className="p-6 border rounded-xl bg-white shadow">
      <h3 className="text-xl font-semibold mb-4">How Your Score Works</h3>

      <label>Monthly Income: ₹{income}</label>
      <input
        type="range"
        min="5000"
        max="60000"
        value={income}
        onChange={(e) => setIncome(Number(e.target.value))}
        className="w-full"
      />

      <label className="mt-4 block">Digital Transactions: {txns}</label>
      <input
        type="range"
        min="0"
        max="200"
        value={txns}
        onChange={(e) => setTxns(Number(e.target.value))}
        className="w-full"
      />

      <p className="mt-4 font-bold text-green-600">
        Estimated Credit Score: {estimatedScore}
      </p>
    </div>
  );
}
