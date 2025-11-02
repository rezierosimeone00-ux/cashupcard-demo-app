export default function TxFeedPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">Live Transaction Feed</h1>
        <p className="subtle">Example: $24.60 → +$6.15 uplift (25%).</p>
      </div>
      <div className="card p-8 text-center">
        <a href="/merchant/settlement" className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800">Settle Drop</a>
      </div>
    </div>
  );
}
