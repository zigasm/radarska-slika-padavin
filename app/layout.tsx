import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Vreme Slovenija",
  description: "Vreme Slovenija: radar padavin, napoved in opozorila.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sl">
      <body>
        <header className="sticky top-0 z-10 bg-sky-700 text-white">
          <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto p-3 text-sm whitespace-nowrap">
            <Link href="/radarska-slika-padavin">Radarska slika padavin</Link>
            <Link href="/vremenska-napoved">Vremenska napoved</Link>
            <Link href="/vreme/ljubljana">Vreme po krajih</Link>
            <Link href="/vremenska-opozorila">Vremenska opozorila</Link>
            <Link href="/padavine">Padavine</Link>
            <Link href="/veter-in-morje">Morje in obala</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl p-4">{children}</main>
      </body>
    </html>
  );
}
