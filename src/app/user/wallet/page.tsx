export default function WalletPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">Wallet</h1>
        <p className="subtle">Your virtual prepaid card is active. Balance: $100 (paid $80).</p>
      </div>
      <div className="card p-8 text-center">
        <p className="text-gray-700 text-sm mb-4">Earn top-up bonus after 2 reloads.</p>
        <a href="/merchant/notify" className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800">Continue to Merchant</a>
      </div>
    </div>
  );
}
