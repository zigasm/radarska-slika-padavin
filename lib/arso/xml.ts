export function textBetween(xml: string, tag: string): string[] {
  const r = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "gi");
  const out: string[] = [];
  let m;
  while ((m = r.exec(xml))) out.push(strip(m[1]));
  return out;
}

export function strip(s: string) {
  return s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
