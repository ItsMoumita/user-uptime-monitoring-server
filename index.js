// title: uptime monitoring application 


// dependencies 
const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url');



// app object - module scaffolding 
const app = {};


// configuration
app.config = {
    port: 3000
};



// create server 
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listening on port ${app.config.port}`);
    })

}



// handle request response 
app.handleReqRes = (req,res) => {
    // get the url and parse it 
    const parsedUrl = url.parse(req.url , true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;
    // console.log(headersObject)

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer)=> {
              realData += decoder.write(buffer);
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);

         res.end('Hello World');
    })

   
}  


// start the server 
app.createServer();


