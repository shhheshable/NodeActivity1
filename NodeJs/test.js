const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    // Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'Index.html';
            break;
        case '/About':
            path += 'About.html';
            break;
        case '/Contacts':
            path += 'Contacts.html';
            break;
        case '/Shop':
            path += 'Shop.html';
            break;
        default:
            path += '404.html';
            break;
    }

    // Send the correct HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.statusCode = 500;
            res.end('Error: Unable to load page');
        } else {
            res.statusCode = 200;
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});
