/*
  CATALOGUE DATA
  ----------------------------------------------------
  This is the ONLY file you need to edit to put your own
  wallpaper designs into the catalogue.

  Each object below = one page. Fill in your real details
  and swap the placeholder image paths for your own photos.

  - swatch   : a hex colour representing the dominant tone
               of the design (used for the corner "punch" chip)
  - image    : path to a photo of the pattern itself,
               ideally shot flat / close-up (min. 1200px wide)
  - roomImage: optional — a photo of the wallpaper on a wall
               in a styled room. Leave as "" to hide it.

  Keep this array at 18 entries to match the 21-page layout
  (cover + intro + 18 patterns + back cover = 21).
  If you add/remove entries, also adjust pageIndicator logic
  in js/app.js if needed (it just reads book.getPageCount()
  automatically, so you usually don't need to touch it).
*/

const CATALOGUE = [
  {
    code: "AW-101",
    name: "Florence Damask",
    family: "Heritage",
    swatch: "#B08D57",
    description: "A hand-drawn damask reworked at a generous scale, printed in soft metallic ink on a matte ground.",
    width: "53 cm",
    repeat: "64 cm straight",
    finish: "Non-woven, matte metallic",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-102",
    name: "Marlow Stripe",
    family: "Modern Classic",
    swatch: "#2C4A44",
    description: "A tailored pinstripe with an irregular hand-inked edge, giving a woven, textile-like depth.",
    width: "53 cm",
    repeat: "Free match",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-103",
    name: "Kioko Leaf",
    family: "Botanical",
    swatch: "#4B5E3A",
    description: "Oversized banana-leaf silhouettes layered in tonal greens for a still, jungle-quiet room.",
    width: "70 cm",
    repeat: "126 cm half-drop",
    finish: "Paste-the-wall vinyl",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-104",
    name: "Dusk Ombre",
    family: "Colourwash",
    swatch: "#B5645A",
    description: "A slow hand-blended gradient moving from clay to dusk rose, seamless across each drop.",
    width: "53 cm",
    repeat: "None — continuous",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-105",
    name: "Alder Grain",
    family: "Texture",
    swatch: "#8A7A66",
    description: "A close photographic study of alder woodgrain, printed at true scale for a panelled, architectural look.",
    width: "70 cm",
    repeat: "70 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-106",
    name: "Verona Trellis",
    family: "Heritage",
    swatch: "#3C4A6B",
    description: "A restrained geometric trellis inspired by wrought ironwork, in ink blue on chalk white.",
    width: "53 cm",
    repeat: "32 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-107",
    name: "Estuary Marble",
    family: "Texture",
    swatch: "#9CA9A5",
    description: "Veined marble reimagined as a soft, low-contrast wash — a quiet backdrop with real depth up close.",
    width: "70 cm",
    repeat: "Free match",
    finish: "Non-woven, satin",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-108",
    name: "Meadow Sprig",
    family: "Botanical",
    swatch: "#C9A227",
    description: "Loosely scattered wildflower sprigs on unbleached linen-textured ground.",
    width: "53 cm",
    repeat: "48 cm half-drop",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-109",
    name: "Cassia Check",
    family: "Modern Classic",
    swatch: "#6E5849",
    description: "A softened windowpane check, hand-inked so no two lines fall perfectly straight.",
    width: "53 cm",
    repeat: "20 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-110",
    name: "Nocturne Bloom",
    family: "Botanical",
    swatch: "#2E2A38",
    description: "Deep midnight ground with peonies rendered in fine, almost engraved linework.",
    width: "70 cm",
    repeat: "126 cm half-drop",
    finish: "Paste-the-wall vinyl",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-111",
    name: "Solaia Fresco",
    family: "Colourwash",
    swatch: "#D8A46A",
    description: "A plaster-effect wash in warm ochre, formulated to mimic hand-limewashed walls.",
    width: "53 cm",
    repeat: "None — continuous",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-112",
    name: "Harbour Weave",
    family: "Texture",
    swatch: "#7C8A99",
    description: "A woven basketweave texture photographed and printed at true scale for a tactile, nautical feel.",
    width: "70 cm",
    repeat: "70 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-113",
    name: "Petra Ikat",
    family: "Heritage",
    swatch: "#A14E3C",
    description: "A hand-drawn ikat motif in brick and ivory, echoing traditional woven textiles.",
    width: "53 cm",
    repeat: "64 cm half-drop",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-114",
    name: "Willowmere",
    family: "Botanical",
    swatch: "#5C6B4E",
    description: "Trailing willow branches rendered in a single ink tone on a soft sage ground.",
    width: "53 cm",
    repeat: "100 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-115",
    name: "Ledger Stripe",
    family: "Modern Classic",
    swatch: "#1F2937",
    description: "A crisp architectural stripe in graphite and chalk, sized for a considered study or hallway.",
    width: "53 cm",
    repeat: "Free match",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-116",
    name: "Terracotta Grove",
    family: "Colourwash",
    swatch: "#BE6E4D",
    description: "A sun-warmed gradient from terracotta to sand, evoking an evening grove.",
    width: "53 cm",
    repeat: "None — continuous",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-117",
    name: "Linen Fold",
    family: "Texture",
    swatch: "#D9CFBB",
    description: "The soft irregularity of pressed linen, captured close and printed in a barely-there natural tone.",
    width: "70 cm",
    repeat: "70 cm straight",
    finish: "Non-woven, matte",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  },
  {
    code: "AW-118",
    name: "Amara Paisley",
    family: "Heritage",
    swatch: "#8C3B4A",
    description: "A romantic paisley redrawn at intimate scale, in wine and antique gold.",
    width: "53 cm",
    repeat: "64 cm half-drop",
    finish: "Non-woven, matte metallic",
    image: "images/patterns/placeholder.jpg",
    roomImage: "images/rooms/placeholder-room.jpg"
  }
];
