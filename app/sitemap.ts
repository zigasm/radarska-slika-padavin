import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"; const paths=["/","/radarska-slika-padavin","/vremenska-napoved","/vremenska-opozorila","/padavine","/nevihte","/sneg","/vreme/obala","/veter-in-morje","/viri-in-pogoji"]; return paths.map((p)=>({url:`${base}${p}`})); }
