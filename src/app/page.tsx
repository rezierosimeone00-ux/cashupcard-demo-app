export default function Dashboard() {
  const metrics = [
    { label: "GMV", value: "$225,000" },
    { label: "ARR", value: "$180,000" },
    { label: "ROI (BASE)", value: "0.62" },
    { label: "ROI (VIRAL)", value: "2.41" },
    { label: "LTV:CAC", value: "1.62 / 3.41" },
    { label: "ARPU", value: "$10.44" },
  ];
  const drops = [
    { id:"GTA-001", area:"Toronto", population:30000, cap:"3%", cards:900, merchant:"Metro Downtown", status:"active" },
    { id:"GTA-002", area:"Mississauga", population:25000, cap:"3%", cards:750, merchant:"PetSmart Central", status:"active" },
    { id:"GTA-004", area:"Oakville", population:13333, cap:"3%", cards:400, merchant:"Sobeys Lakeshore", status:"active" },
  ];
  const agents = [
    { name:"Uplift Engine", event:"Computing uplift ratios (β)", confidence:98 },
    { name:"KPI Monitor", event:"Normalizing viral ROI", confidence:96 },
    { name:"Data Stream", event:"Updating H3 cell stats (GTA)", confidence:97 },
  ];
  return (
    <div className="space-y-8">
      <div className="section-head flex justify-between">
        <h1 className="font-semibold">Cashup Card — TRL-5.5 Live Demo</h1>
        <p className="subtle">Pay 80 → Get 100 · 25% uplift · 8% fee</p>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold">GTA Pilot — Live Metrics & Agent Logs</h2>
        <p className="subtle">Dataset 83,333 pop · cap 3% → ≈2,500 cards · 25% uplift</p>
      </div>

      <h3 className="text-lg font-semibold text-white/90">Key Metrics</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="card p-5 text-center">
            <div className="text-xs text-gray-600 uppercase tracking-wide">{m.label}</div>
            <div className="text-2xl font-bold text-gray-900 mt-1">{m.value}</div>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold text-white/90">Active Drop Cells (GTA)</h3>
      <div className="overflow-hidden rounded-2xl shadow-md border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-gray-200 text-gray-800">
            <tr>
              <th className="p-3 text-left">Cell</th>
              <th className="p-3 text-left">Area</th>
              <th className="p-3 text-right">Population</th>
              <th className="p-3 text-right">Cap%</th>
              <th className="p-3 text-right">Cards</th>
              <th className="p-3 text-left">Merchant</th>
              <th className="p-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-900">
            {drops.map((d) => (
              <tr key={d.id} className="border-t border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-medium">{d.id}</td>
                <td className="p-3">{d.area}</td>
                <td className="p-3 text-right">{d.population.toLocaleString()}</td>
                <td className="p-3 text-right">{d.cap}</td>
                <td className="p-3 text-right">{d.cards}</td>
                <td className="p-3">{d.merchant}</td>
                <td className="p-3 text-center text-green-600 font-semibold">{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-white/90">Agentic AI — Live Log</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {agents.map((a) => (
          <div key={a.name} className="card p-5">
            <div className="font-semibold">{a.name}</div>
            <div className="text-sm mt-1 text-gray-700">{a.event}</div>
            <div className="mt-3 text-xs text-green-700 font-semibold">{a.confidence}% ok</div>
          </div>
        ))}
      </div>
    </div>
  );
}
