export default function AdSlot({ id }: { id: string }) {
  return <aside className="my-4 min-h-24 rounded border border-dashed border-slate-400 bg-white p-4 text-center text-sm">Oglaševalski prostor: {id}</aside>;
}
