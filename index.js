import http from 'http';
import path from 'path';
import fs from 'fs';

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  let filepath;

  switch (req.url) {
    case '/':
      filepath = './index.html';
      break;
    case '/about': 
      filepath = './about.html';
      break;
    case '/contact-me':
      filepath = './contact-me.html';
      break;
    default:
      filepath = './404.html';
      break;
  }

  const fullpath = path.resolve(filepath);

  fs.readFile(fullpath, (err, content) => {
    if (err) {
      res.end('Server Error');
      return;
    }

    res.end(content);
  })
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
})