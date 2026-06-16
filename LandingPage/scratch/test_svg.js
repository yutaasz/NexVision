const fs = require('fs');

try {
  const svg = fs.readFileSync('c:/Users/vitor/Documents/Faculdade/ProgramacaoWeb/2-Bimestre/LandingPage/src/assets/logo.svg', 'utf8');
  
  // Look for any elements and print them
  const tags = svg.match(/<[a-zA-Z]+/g) || [];
  console.log("SVG tags found:", [...new Set(tags)]);
  
  // Find all coordinates in any d, points, x, y, cx, cy, rx, ry attributes
  const allCoords = [];
  const matches = svg.match(/(d|points|x|y|cx|cy|rx|ry|x1|y1|x2|y2)="[^"]+"/g) || [];
  matches.forEach(m => {
    const coords = m.match(/-?\d+(\.\d+)?/g) || [];
    coords.forEach(c => allCoords.push(parseFloat(c)));
  });

  // Let's also parse path data more carefully to find actual coords
  // We can just find all numbers in the file that are part of svg drawing coordinates
  // But our previous bounding box of d path coordinates was minX: 162.16, maxX: 449, minY: 63, maxY: 345
  // Let's print the matches list length
  console.log("Attributes found:", matches.length);
} catch(e) {
  console.error(e);
}
