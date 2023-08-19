const http = require('http');
// this is syncronious and will block the code
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Landing Page');
  }
  if (req.url === '/about') {
    res.end('About Page');
  }
  res.end(`Error Nigga`);
});

server.listen(3000, 'localhost', () => {
  console.log('Server is running...');
});
