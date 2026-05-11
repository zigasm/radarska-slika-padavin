import Link from "next/link";
import type { Metadata } from "next";
import RadarCard from "@/components/RadarCard";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = { title: "Vreme Slovenija – radarska slika padavin in vremenska napoved", description: "Vreme Slovenija, radar padavin, opozorila in napoved.", alternates: { canonical: "/" } };

export default function Home() { return <div className="space-y-6"><h1 className="text-3xl font-bold">Vreme Slovenija – radarska slika padavin in vremenska napoved</h1><RadarCard /><AdSlot id="homepage-mid" /><section><h2 className="text-xl font-semibold">Hitre povezave</h2><div className="flex gap-3"><Link href="/radarska-slika-padavin">Radar</Link><Link href="/vremenska-napoved">Napoved</Link></div></section><section><h2 className="text-xl font-semibold">FAQ</h2><p>Kdaj se radar osveži? Približno vsakih 5 minut.</p></section><p className="text-xs">Vir podatkov: ARSO / meteo.si</p></div>; }
