export async function fetchArso(url: string, revalidateSeconds: number) {
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url, { signal: controller.signal, next: { revalidate: revalidateSeconds } });
    if (!res.ok) throw new Error(`ARSO ${res.status} for ${url}`);
    return await res.text();
  } catch (e) {
    console.error("ARSO fetch error:", (e as Error).message);
    throw new Error("ARSO vir trenutno ni dosegljiv.");
  } finally { clearTimeout(t); }
}
