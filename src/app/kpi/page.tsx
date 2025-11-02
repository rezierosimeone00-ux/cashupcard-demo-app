export default function KPIPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">KPI Intelligence Dashboard</h1>
      </div>
      <div className="card p-8">
        <ul className="list-disc pl-5 text-gray-700">
          <li>GMV: $225,000</li>
          <li>ARR: $180,000</li>
          <li>ROI Base: 0.62 / Viral: 2.41</li>
          <li>LTV:CAC: 1.62 / 3.41</li>
          <li>ARPU: $10.44</li>
        </ul>
        <a href="/about" className="inline-block bg-black text-white px-5 py-2 mt-4 rounded hover:bg-gray-800">Final Vision</a>
      </div>
    </div>
  );
}
