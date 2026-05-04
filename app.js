const http = require("http");
const fs = require('fs');
const { compileFunction } = require("vm");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        fs.readFile('555', (err, data) => {
            let filedata = "No Data available";
            if (!err) {
                filedata = data.toString();
            }

            res.write(`<h1> ${filedata}</h1>`);
            res.write(

                `
            <form action="/message" method = POST>
            <lable> Name :</lable>
            <input type= text name = "username"></input>
            <button type = "submit"> Add </button>
            </form>

            `
            );
            return res.end();
        });
    }
    else if (url === '/message') {
        // res.end(
        //     " <h1> Message Page </h1>"
        // );
        let dataChunks = [];
        req.on('data', (chunks) => {
            console.log(chunks);
            dataChunks.push(chunks);
        })

        req.on('end', () => {
            let combineBuffer = Buffer.concat(dataChunks);
            console.log(combineBuffer);
            let value = combineBuffer.toString().split('=')[1];
            console.log(value);
            fs.writeFile('555', value, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            })
        });
    }
    else {
        if (req.url === '/read') {
            fs.readFile('555', (err, dataChunks) => {
                console.log(dataChunks.toString());
                res.write(`<h1> Data form the file is: ${dataChunks.toString()} </h1>`);
                res.end();

            })
        }
    }
});


const port = 3000;

server.listen(port, () => {
    console.log("Server is running");
})