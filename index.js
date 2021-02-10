// const http = require('http');
const express = require('express');

// const handleAllRequest = (requestObject, responseObject) => {
//   const url = requestObject.url;
//   responseObject.setHeader('content-type', 'text/html');
//   if (url === '/signup') {
//     responseObject.send('<h1>Welcome to signup page</h1>');
//   } else if (url === '/login') {
//     responseObject.send('<h2>Login page</h2>');
//   } else if (url === '/contact') {
//     responseObject.send('Contact page');
//   } else if (url === '/') {
//     responseObject.send('Home paged');
//   } else {
//     responseObject.send('404 page not found');
//   }
// };
const handleLoginRequest = (req, res) => {
  res.send(`<form action="/login" method="post">	
  <input type="submit">
</form>`);
};

const handleLoginPut = (req, res) => {
  res.send('This is login put');
};

const handleLoginDelete = (req, res) => {
  res.send('This is login delete');
};

const handleLoginPost = (req, res) => {
  res.send('This is login post');
};
// const server = http.createServer(handleAllRequest);
const server = express();

server.get('/login', handleLoginRequest);
server.put('/login', handleLoginPut);
server.delete('/delete', handleLoginDelete);
server.post('/login', handleLoginPost);
// server.use('/login', handleLoginRequest);
// server.use('/register', handleRegisterRequest);
// server.use(handleAllRequest);

server.listen(3000, '127.0.0.1', () => {
  console.log('server running');
});
