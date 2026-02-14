// title: uptime monitoring application 


// dependencies 
const http = require('http');



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
    res.end("hello world");
}  


// start the server 
app.createServer();


