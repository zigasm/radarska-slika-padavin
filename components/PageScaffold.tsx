import AdSlot from "./AdSlot";

export default function PageScaffold({ title, children }: { title: string; children: React.ReactNode }) {
  return <><h1 className="mb-4 text-3xl font-bold">{title}</h1>{children}<AdSlot id="sidebar-desktop" /></>;
}
