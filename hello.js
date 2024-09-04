const hostname = '0.0.0.0';  // Bind to all interfaces
const port = process.env.PORT || 2001;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome to Lakhwinder Singh');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
