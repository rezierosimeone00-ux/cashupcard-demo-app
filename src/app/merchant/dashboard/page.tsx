export default function MerchantDashboardPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">Merchant Dashboard</h1>
        <p className="subtle">Key metrics and performance summary for your store.</p>
      </div>
      <div className="card p-8">
        <ul className="list-disc pl-5 text-gray-700">
          <li>Active Cards: 432</li>
          <li>Transactions: 1,287</li>
          <li>Sales: $48,350</li>
          <li>Avg Receipt: $37.57</li>
        </ul>
        <a href="/merchant/txfeed" className="inline-block bg-black text-white px-5 py-2 mt-4 rounded hover:bg-gray-800">View Transactions</a>
      </div>
    </div>
  );
}
