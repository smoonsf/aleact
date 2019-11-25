const express = require('express');

const server = express();

server.use(express.static('app'));
server.use('/',express.static(__dirname + '/app/index.html'));

server.listen(3000, function () {
console.log('ALEACT DEV SERVER listening on port 3000!');
});