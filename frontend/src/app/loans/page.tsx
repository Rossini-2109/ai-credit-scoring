"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import LoanCard from "@/components/LoanCard";

export default function LoansPage() {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/loan-products")
      .then((res) => setLoans(res.data.loan_products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
        Loan Marketplace
      </h1>

      <div className="grid gap-6 max-w-6xl mx-auto md:grid-cols-2 lg:grid-cols-3">
        {loans.map((loan, index) => (
          <LoanCard key={index} loan={loan} />
        ))}
      </div>
    </main>
  );
}
