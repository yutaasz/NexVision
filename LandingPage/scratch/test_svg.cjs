const fs = require('fs');

try {
  const svg = fs.readFileSync('c:/Users/vitor/Documents/Faculdade/ProgramacaoWeb/2-Bimestre/LandingPage/src/assets/logo.svg', 'utf8');
  
  const tags = svg.match(/<[a-zA-Z]+/g) || [];
  console.log("SVG tags found:", [...new Set(tags)]);
  
  const matches = svg.match(/(d|points|x|y|cx|cy|rx|ry|x1|y1|x2|y2)="[^"]+"/g) || [];
  console.log("Attributes found:", matches.length);
} catch(e) {
  console.error(e);
}
