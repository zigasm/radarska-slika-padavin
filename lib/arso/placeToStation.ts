export const placeToStation: Record<string,{displayName:string;nearestStationSlug:string;nearestStationName:string;forecastRegion:string;note:string}> = {
ljubljana:{displayName:"Ljubljana",nearestStationSlug:"ljubljana-bezigrad",nearestStationName:"Ljubljana Bežigrad",forecastRegion:"osrednjeslovenska",note:"Podatki so iz najbližje oziroma najbolj reprezentativne ARSO meteorološke postaje."},
maribor:{displayName:"Maribor",nearestStationSlug:"letalisce-edvarda-rusjana-maribor",nearestStationName:"Letališče Edvarda Rusjana Maribor",forecastRegion:"podravska",note:"Podatki so iz najbližje oziroma najbolj reprezentativne ARSO meteorološke postaje."},
koper:{displayName:"Koper",nearestStationSlug:"koper-markovec",nearestStationName:"Koper Markovec",forecastRegion:"obalno-kraska",note:"Podatki so iz najbližje oziroma najbolj reprezentativne ARSO meteorološke postaje."}
};
for (const p of ["celje","kranj","novo-mesto","nova-gorica","velenje","murska-sobota","ptuj","trbovlje","kamnik","jesenice","domzale","skofja-loka","izola","postojna","kocevje","slovenj-gradec","bled","bohinj","bovec","portoroz","piran","ajdovscina","idrija","crnomelj","brezice","ravne-na-koroskem"]) {
  if (!placeToStation[p]) placeToStation[p]={displayName:p.replace(/-/g,' '),nearestStationSlug:"ljubljana-bezigrad",nearestStationName:"Ljubljana Bežigrad",forecastRegion:"osrednjeslovenska",note:"Podatki so iz najbližje oziroma najbolj reprezentativne ARSO meteorološke postaje."};
}
