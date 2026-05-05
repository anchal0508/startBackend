const fs = require('fs');


const requestHandler = (req, res)=>{
     const { url, method} = req;

    if(url === '/'){
        fs.readFile('555', (err, data)=>{
            let fileData = !err ? data.toString() : "No data Available";

            res.setHeader('Content-Type', 'text/html');

            res.write(`<h1> ${fileData}</h1>`);

            res.write(`
                <form action = "/message" method = "POST">Anchal koshta
                        <input type= "text" name = "username"></input>
                        <button type = "submit"> Go </button>
                </form>
                    `);
            res.end();
        });
    }

    else if(url === '/message' && method == "POST"){
        let data = [];

        req.on('data', (chunks) => {
            console.log(chunks.toString());
            res.statusCode = 302;
            data.push(chunks);
        })
        req.on('end', () => {
            const parseData = Buffer.concat(data).toString();
            const value = parseData.split('=')[1];

            fs.writeFile('555', value, (err) => {
                console.log('Done');

                res.setHeader('Location', '/');
                return res.end();
            })
        })
    }
}


const secondFunction = () =>{
    console.log('Another function');
}
// module.exports.handler =  requestHandler;
// module.exports.test =  secondFunction;


// module.exports = {
//     handler : requestHandler,
//     test : secondFunction
// }

module.exports.handler = requestHandler;
module.exports.test = secondFunction;