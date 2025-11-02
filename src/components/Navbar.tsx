"use client";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/user/register", label: "User Register" },
    { href: "/user/drop", label: "User Drop" },
    { href: "/user/wallet", label: "User Wallet" },
    { href: "/merchant/notify", label: "Merchant Notify" },
    { href: "/merchant/dashboard", label: "Merchant Dashboard" },
    { href: "/merchant/txfeed", label: "Merchant TxFeed" },
    { href: "/merchant/settlement", label: "Merchant Settlement" },
    { href: "/platform/data", label: "Platform Data" },
    { href: "/platform/flywheel", label: "Platform Flywheel" },
    { href: "/kpi", label: "KPI" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="font-bold text-yellow-400 text-lg">Cashup</div>
      <div className="flex flex-wrap items-center gap-5 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-yellow-400 transition">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
