export default function RegisterPage() {
  return (
    <div className="space-y-8">
      <div className="section-head">
        <h1 className="font-semibold">User Registration</h1>
        <p className="subtle">Map your postal code to an H3 cell and enter the demo.</p>
      </div>
      <div className="card p-8 max-w-md">
        <form className="space-y-4">
          <input className="border p-2 w-full rounded" placeholder="Full Name" />
          <input className="border p-2 w-full rounded" placeholder="Postal Code" />
          <a href="/user/drop" className="block bg-black text-white text-center py-2 rounded hover:bg-gray-800 transition">Access Drop</a>
        </form>
      </div>
    </div>
  );
}
