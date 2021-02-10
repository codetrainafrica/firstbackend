const http = require('http');

const handleAllRequest = (requestObject, responseObject) => {
  const url = requestObject.url;
  responseObject.setHeader('content-type', 'text/html');
  if (url === '/signup') {
    responseObject.write('<h1>Welcome to signup page</h1>');
    responseObject.end();
  } else if (url === '/login') {
    responseObject.write('<h2>Login page</h2>');
    responseObject.end();
  } else if (url === '/contact') {
    responseObject.write('Contact page');
    responseObject.end();
  } else if (url === '/') {
    responseObject.write('Home paged');
    responseObject.end();
  } else {
    responseObject.write('404 page not found');
    responseObject.end();
  }
};
const server = http.createServer(handleAllRequest);

server.listen(3000, '127.0.0.1', () => {
  console.log('server running');
});
