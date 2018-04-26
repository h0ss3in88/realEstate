const http = require('http');
let app = require('../src/server/app');

let server = http.createServer(app);
server.listen(app.get('port'),() => {
    console.log('application running');
});