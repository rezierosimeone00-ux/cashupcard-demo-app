import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Cashup Card — TRL-5 Unified Demo",
  description: "Hybrid Agentic AI Demo – Cashup TRL-5.5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto p-8">{children}</main>
      </body>
    </html>
  );
}
