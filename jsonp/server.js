/**
 * Created by apple on 17/2/18.
 */
const http = require('http');

const url = require('url');


http.createServer(function(req,res){
    let urlObj = url.parse(req.url, true);
    let pathname = urlObj.pathname;

    if(pathname == '/books') {
        res.end("show(['nodejs','java'])")
    }


}).listen(8080);