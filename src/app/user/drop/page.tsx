export default function DropPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">Access Drop</h1>
        <p className="subtle">Pay $80 → Get $100 (+25%) — cap 3% per area, timer 24h.</p>
      </div>
      <div className="card p-8 text-center">
        <a href="/user/wallet" className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800">Activate Card</a>
      </div>
    </div>
  );
}
