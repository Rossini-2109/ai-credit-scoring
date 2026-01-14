interface Props {
  amount: number;
}

export default function LoanCard({ amount }: Props) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-2">Recommended Loan Amount</h3>
      <p className="text-2xl font-bold">${amount.toLocaleString()}</p>
    </div>
  );
}
