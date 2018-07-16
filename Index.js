const http = require("http");
const figlet = require("figlet");
const port = process.env.port || 3000; 

const handler = (req,res) => {
    console.log("Server received request. ");
    figlet('Hello World !?!!', (err,data) => {
        if(err) {
            console.log('Something went wrong ...');
            console.log(err);
            return;
        }
        res.end(data);
    });
}

const server = http.createServer(handler);

server.listen(port, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`Server listening on port: ${port}`);
    }
}
);


