import * as functions from './fileSystem-CRUD.mjs'
import http from 'http'
import url from 'url'

const server = http.createServer((req, res) => {
    let status = 200
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        const parsedUrl = url.parse(req.url, true)
        const path = parsedUrl.pathname
        if (path === "/get") {
            let q = parsedUrl.query;
            if (q.location !== undefined) {
                res.writeHead(status, { "Content-Type": "text/plain" });
                let data = functions.getWeatherData(q.location);
                if (data !== undefined) {
                    console.log(data, "data");
                    res.write(JSON.stringify(data));
                    res.end()
                }
            }
            else {
                res.write("City not found");
                res.end();
            }
        }
        if (path === "/city") {
            res.end(JSON.stringify(functions.getData()))
        }
    }
    catch (err) {
        console.log(err);
    }

})
server.listen(5000);