const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Landing Page');
    res.end();
  }
  if (req.url === '/about') {
    res.end('About Page');
  }
  res.end(`
  <h1> Try again sucker! </h1>
  `);
});
server.listen(3000, () => {
  console.log('Server is running...');
});
