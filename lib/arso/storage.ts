import { promises as fs } from "fs";
import path from "path";

const base = path.join(process.cwd(), "public/cache/radar");

export async function saveRadarGif(buffer: Buffer, name: string) {
  await fs.mkdir(base, { recursive: true });
  const full = path.join(base, name);
  await fs.writeFile(full, buffer);
  await fs.writeFile(path.join(base, "latest.json"), JSON.stringify({ name, updatedAt: new Date().toISOString() }));
  return `/cache/radar/${name}`;
}

export async function readLatestRadar() {
  try {
    const raw = await fs.readFile(path.join(base, "latest.json"), "utf8");
    const d = JSON.parse(raw) as { name: string; updatedAt: string };
    return { imageUrl: `/cache/radar/${d.name}`, updatedAt: d.updatedAt };
  } catch {
    return null;
  }
}
