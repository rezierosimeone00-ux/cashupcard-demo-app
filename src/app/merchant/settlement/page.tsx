export default function SettlementPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">Settlement Dashboard</h1>
        <p className="subtle">$80 → Cashup (Stripe) → $100 spend → −8% fee → $72 payout to merchant.</p>
      </div>
      <div className="card p-8 text-center">
        <a href="/platform/data" className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800">View Insights</a>
      </div>
    </div>
  );
}
