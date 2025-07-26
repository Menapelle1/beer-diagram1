import React from "react";
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const beerStyles = [
  {
    category: "Pale Ale",
    styles: [
      {
        name: "American Pale Ale (APA)",
        abv: "5.0–6.5%",
        ibu: "30–50",
        srm: "6–14",
        profile: "Agrumato, floreale, maltato",
        origin: "USA",
        temp: "7–10°C",
        brands: ["Sierra Nevada Pale Ale", "Ballast Point Pale Ale", "Founders Pale Ale", "Firestone Walker Pale 31", "Deschutes Mirror Pond"]
      },
      {
        name: "English Pale Ale",
        abv: "4.0–5.5%",
        ibu: "20–40",
        srm: "6–14",
        profile: "Terroso, erbaceo, caramello",
        origin: "Inghilterra",
        temp: "10–12°C",
        brands: ["Fuller's London Pride", "Timothy Taylor's Landlord", "Greene King IPA", "Bass Pale Ale", "Adnams Southwold Bitter"]
      }
    ]
  },
  {
    category: "Dark Ales",
    styles: [
      {
        name: "Stout",
        abv: "4.0–7.0%",
        ibu: "30–50",
        srm: "30–40",
        profile: "Cioccolato, caffè, tostato",
        origin: "Irlanda",
        temp: "10–13°C",
        brands: ["Guinness Draught", "Murphy's Irish Stout", "Left Hand Milk Stout", "Samuel Smith Oatmeal Stout", "BrewDog Jet Black Heart"]
      },
      {
        name: "Porter",
        abv: "4.5–6.0%",
        ibu: "25–50",
        srm: "20–30",
        profile: "Maltato, cioccolato scuro",
        origin: "Inghilterra",
        temp: "10–13°C",
        brands: ["Fuller's London Porter", "Founders Porter", "Anchor Porter", "Samuel Smith Taddy Porter", "Deschutes Black Butte Porter"]
      }
    ]
  },
  {
    category: "Belgian Ales",
    styles: [
      {
        name: "Tripel",
        abv: "7.5–9.5%",
        ibu: "20–45",
        srm: "4–9",
        profile: "Fruttato, speziato, alcolico",
        origin: "Belgio",
        temp: "8–12°C",
        brands: ["Westmalle Tripel", "La Trappe Tripel", "Chimay Tripel", "St. Bernardus Tripel", "Tripel Karmeliet"]
      },
      {
        name: "Saison",
        abv: "5.0–7.0%",
        ibu: "20–35",
        srm: "5–14",
        profile: "Pepato, secco, agrumato",
        origin: "Belgio",
        temp: "7–10°C",
        brands: ["Saison Dupont", "Boulevard Tank 7", "Brasserie Fantôme", "Blaugies Saison d'Épeautre", "Saison Brett"]
      }
    ]
  },
  {
    category: "Wheat Ales",
    styles: [
      {
        name: "Hefeweizen",
        abv: "4.9–5.6%",
        ibu: "8–15",
        srm: "2–8",
        profile: "Banana, chiodi di garofano, morbido",
        origin: "Germania",
        temp: "6–8°C",
        brands: ["Weihenstephaner", "Paulaner", "Franziskaner", "Ayinger", "Schneider Weisse"]
      },
      {
        name: "Berliner Weisse",
        abv: "2.5–4.0%",
        ibu: "3–8",
        srm: "2–4",
        profile: "Acida, leggera, rinfrescante",
        origin: "Germania",
        temp: "4–6°C",
        brands: ["Berliner Kindl", "Dogfish Head Festina Pêche", "Fritz Briem 1809", "The Bruery Hottenroth", "Naked Berliner"]
      }
    ]
  },
  {
    category: "Strong Lagers",
    styles: [
      {
        name: "Bock",
        abv: "6.3–7.2%",
        ibu: "20–30",
        srm: "14–22",
        profile: "Maltato, corposo",
        origin: "Germania",
        temp: "8–10°C",
        brands: ["Einbecker Ur‑Bock", "Spaten Bock", "Paulaner Salvator", "Ayinger Celebrator", "Shiner Bock"]
      },
      {
        name: "Doppelbock",
        abv: "7.0–10.0%",
        ibu: "16–26",
        srm: "17–30",
        profile: "Dolce, ricco, maltato",
        origin: "Germania",
        temp: "9–11°C",
        brands: ["Ayinger Celebrator", "Weihenstephaner Korbinian", "Spaten Optimator", "Paulaner Salvator", "Andechs Doppelbock"]
      },
      {
        name: "Eisbock",
        abv: "9.0–14.0%",
        ibu: "25–35",
        srm: "28–40",
        profile: "Intenso, alcolico",
        origin: "Germania",
        temp: "10–12°C",
        brands: ["Kulmbacher Eisbock", "Schneider Aventinus Eisbock", "Eggenberg Samichlaus", "Korbinian Eisbock", "Tactical Nuclear Penguin"]
      }
    ]
  },
  {
    category: "Pale Lagers",
    styles: [
      {
        name: "German Pils",
        abv: "4.6–5.2%",
        ibu: "25–45",
        srm: "2–5",
        profile: "Croccante, erbaceo",
        origin: "Germania",
        temp: "4–6°C",
        brands: ["Bitburger", "Jever", "Warsteiner", "Krombacher", "Paulaner Pils"]
      },
      {
        name: "Czech Pils",
        abv: "4.2–5.4%",
        ibu: "30–45",
        srm: "3–6",
        profile: "Maltato, bilanciato",
        origin: "Repubblica Ceca",
        temp: "4–6°C",
        brands: ["Pilsner Urquell", "Budweiser Budvar", "Kozel Premium", "Staropramen", "Bernard Pils"]
      }
    ]
  },
  {
    category: "Amber Lagers",
    styles: [
      {
        name: "Vienna Lager",
        abv: "4.5–5.5%",
        ibu: "18–30",
        srm: "10–16",
        profile: "Maltato, leggermente tostato",
        origin: "Austria",
        temp: "6–8°C",
        brands: ["Negra Modelo", "Samuel Adams Boston Lager", "Brooklyn Lager", "Great Lakes Eliot Ness", "Devils Backbone Vienna Lager"]
      },
      {
        name: "Märzen",
        abv: "5.0–6.0%",
        ibu: "18–25",
        srm: "8–15",
        profile: "Pane tostato, morbido",
        origin: "Germania",
        temp: "6–8°C",
        brands: ["Paulaner Oktoberfest Märzen", "Spaten Oktoberfest", "Ayinger Märzen", "Hacker‑Pschorr Märzen", "Sierra Nevada Oktoberfest"]
      }
    ]
  },
  {
    category: "Dark Lagers",
    styles: [
      {
        name: "Schwarzbier",
        abv: "4.4–5.4%",
        ibu: "20–35",
        srm: "25–40",
        profile: "Tostato, secco",
        origin: "Germania",
        temp: "8–10°C",
        brands: ["Köstritzer", "Einbecker Schwarzbier", "Sam Adams Black Lager", "Xingu", "Mönchshof"]
      },
      {
        name: "Dunkel",
        abv: "4.5–5.6%",
        ibu: "18–28",
        srm: "14–28",
        profile: "Caramello, maltato",
        origin: "Germania",
        temp: "7–9°C",
        brands: ["Ayinger Dunkel", "Hofbräu Dunkel", "Spaten Dunkel", "Andechs Dunkel", "Weltenburger Kloster Dunkel"]
      }
    ]
  },
  {
    category: "Specialty Lagers",
    styles: [
      {
        name: "India Pale Lager (IPL)",
        abv: "5.5–7.0%",
        ibu: "40–60",
        srm: "5–10",
        profile: "Luppolato, secco",
        origin: "USA",
        temp: "6–8°C",
        brands: ["Jack's Abby Hoponius Union", "Sam Adams Double Agent IPL", "Devils Backbone IPL", "Founders PC Pils", "Kona Castaway IPL"]
      },
      {
        name: "Baltic Porter",
        abv: "7.0–9.5%",
        ibu: "35–45",
        srm: "30–40",
        profile: "Dolce, tostato, alcolico",
        origin: "Regione baltica",
        temp: "10–13°C",
        brands: ["Sinebrychoff Porter", "Baltika No. 6", "Zywiec Porter", "Okocim Porter", "Uinta Sea Legs"]
      }
    ]
  },
  {
    category: "Regional Lagers",
    styles: [
      {
        name: "American Light Lager",
        abv: "4.1–4.5%",
        ibu: "8–12",
        srm: "2–4",
        profile: "Leggera, neutra",
        origin: "USA",
        temp: "3–5°C",
        brands: ["Bud Light", "Coors Light", "Miller Lite", "Michelob Ultra", "Keystone Light"]
      },
      {
        name: "Japanese Rice Lager",
        abv: "4.5–5.0%",
        ibu: "10–20",
        srm: "2–4",
        profile: "Pulita, leggera",
        origin: "Giappone",
        temp: "4–6°C",
        brands: ["Asahi Super Dry", "Sapporo Premium", "Kirin Ichiban", "Hitachino Nest Lager", "Orion Lager"]
      }
    ]
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e1e2f] to-[#141420] text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Alta e Bassa Fermentazione</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {beerStyles.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">{section.category}</h2>
            <div className="space-y-4">
              {section.styles.map((style, idx) => (
                <TooltipProvider key={idx}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.div whileHover={{ scale: 1.02 }} className="cursor-pointer">
                        <Card className="bg-white/10 backdrop-blur-md text-white border-white/20">
                          <CardContent className="p-4">
                            <p className="font-medium text-lg">{style.name}</p>
                            <p className="text-sm opacity-70">{style.profile}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-sm bg-white text-black p-4 rounded-xl shadow-xl">
                      <p className="font-semibold mb-1">ABV: {style.abv}</p>
                      <p>IBU: {style.ibu}</p>
                      <p>SRM: {style.srm}</p>
                      <p>Origine: {style.origin}</p>
                      <p>Temperatura di servizio: {style.temp}</p>
                      <p className="mt-2 font-semibold">Esempi:</p>
                      <ul className="list-disc ml-5 text-sm">
                        {style.brands.map((brand, i) => (<li key={i}>{brand}</li>))}
                      </ul>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
