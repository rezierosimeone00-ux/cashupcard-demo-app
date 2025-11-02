import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Cashup Card — TRL-5 Unified Demo",
  description: "Hybrid Agentic AI Demo – Cashup TRL-5.5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-200 text-gray-900 min-h-screen">
        <nav className="flex items-center justify-between px-6 py-4 bg-black text-white sticky top-0 z-50 shadow-md">
          <div className="font-bold text-yellow-400 text-lg">Cashup</div>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            {/* General */}
            <Link href="/" className="hover:text-yellow-400 transition">Dashboard</Link>

            {/* User */}
            <Link href="/user/register" className="hover:text-yellow-400 transition">User Register</Link>
            <Link href="/user/drop" className="hover:text-yellow-400 transition">User Drop</Link>
            <Link href="/user/wallet" className="hover:text-yellow-400 transition">User Wallet</Link>

            {/* Merchant */}
            <Link href="/merchant/notify" className="hover:text-yellow-400 transition">Merchant Notify</Link>
            <Link href="/merchant/dashboard" className="hover:text-yellow-400 transition">Merchant Dashboard</Link>
            <Link href="/merchant/txfeed" className="hover:text-yellow-400 transition">Merchant TxFeed</Link>
            <Link href="/merchant/settlement" className="hover:text-yellow-400 transition">Merchant Settlement</Link>

            {/* Platform */}
            <Link href="/platform/data" className="hover:text-yellow-400 transition">Platform Data</Link>
            <Link href="/platform/flywheel" className="hover:text-yellow-400 transition">Platform Flywheel</Link>

            {/* KPI + About */}
            <Link href="/kpi" className="hover:text-yellow-400 transition">KPI</Link>
            <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          </div>
        </nav>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}

