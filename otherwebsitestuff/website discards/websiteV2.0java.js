function createList(items) {

  if (!Array.isArray(items)) {
    throw new TypeError('Input must be an array');
  }


  return [...items];
}

const myItems = [
  "West Tiger 3",
  "Issaquah to Preston",
  "Bridle Trails",
  "Redmond Watershed/Powerline Trails",
  "Young’s Lake",
  "Tolt Pipeline Trail",
  "Discovery Park Loop",
  "Puget Powerline Trail",
  "360 Park Main Loop Trail",
  "Snoqualmie Valley Trail North",
  "WaterLine Trail",
  "Mercer Slough/Bellevue Blueberry Loop",
  "Evans Creek Reserve",
  "Preston to Fall City",
  "Palouse to Cascade",
  "Grand Ridge Park",
  "Magnuson Park Mix",
  "CLC Trail",
  "East Trail to Tolt Trail",
  "Kirkland Corridor Trail",
  "Tuscany Equestrian Trail",
  "Pioneer Park",
  "Cross Kirkland Corridor" 
];
return myItems;

const itemList = createList(myItems);

console.log(itemList);
