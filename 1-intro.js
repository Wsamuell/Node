const amount = 12;

if (amount < 10) {
  console.log('small number');
} else {
  console.log('large number');
}

console.log(`hey it's my first node app!!!`);
// console.log(__dirname);
console.log(__filename);
// console.log(module);
// console.log(process);
const path = require('path');
console.log(path.sep);

const filePath = path.join('/intro.js');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'intro.js');
console.log(absolute);
