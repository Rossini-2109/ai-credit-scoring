export default function LoanCard({ loan }: any) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-semibold mb-2">{loan.name}</h2>

      <p className="text-gray-600 mb-1">
        Interest: <b>{loan.interest_rate}%</b>
      </p>

      <p className="text-gray-600 mb-1">
        Tenure: <b>{loan.tenure} years</b>
      </p>

      <p className="text-gray-600 mb-4">
        Min Score: <b>{loan.min_score}</b>
      </p>

      <button className="w-full bg-primary text-white py-2 rounded-lg font-medium">
        Apply Now
      </button>
    </div>
  );
}
