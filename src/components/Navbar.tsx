"use client";
import Link from "next/link";
export default function Navbar() {
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/user", label: "User" },
    { href: "/merchant", label: "Merchant" },
    { href: "/platform", label: "Platform" },
    { href: "/kpi", label: "KPI" },
    { href: "/about", label: "About" },
  ];
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
      <h1 className="font-semibold text-lg text-yellow-400">Cashup</h1>
      <div className="flex space-x-4 text-sm">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-yellow-400">{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}
