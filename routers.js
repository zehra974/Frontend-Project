const http = require("node:http");
const fileSystem = require("node:fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fileSystem.readFile("./public/index.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/about") {
        fileSystem.readFile("./public/about.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } else if (req.url === "/contact") {
        fileSystem.readFile("./public/contact.html", (error, data) => {
            if (error) throw error;
            res.end(data);
        });
    } 
});

server.listen(8000, "localhost", () => {
    console.log("Server is running at: http://localhost:8000");
});
