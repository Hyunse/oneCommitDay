// Main Starting point
const express = require('express'),
  http = require('http'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  app = express();

// App Set Up
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));

// Router
const router = require('./router');
app.use(router);

// Server Set Up
const port = process.env.PORT || 3090,
  server = http.createServer(app);

server.listen(port);

console.log(`Server[ Authentication ] Listening On :: ${port}`);
