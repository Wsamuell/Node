const { readFile, writeFile, readFileSync, writeFileSync } = require('fs'); //syncronous

writeFileSync('./write-tester.txt', 'sup sammy', { flag: 'a' });

readFile('./write-tester.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  const newContent = `${data} \n sup sammy`;
  writeFile(
    './write-tester.txt',
    `${newContent}`,
    { flag: 'a' },
    (err, newContent) => {
      if (err) {
        console.log(err);
      }
      console.log(newContent);
    }
  );
});
// writeFile('./write-tester.txt', 'sup sammy', { flag: 'a' });

// non call back version
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

readFile('./write-tester.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(data);
  }
});
