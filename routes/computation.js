var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        if(value === null)
        {
            value=Math.round(Math.random()*999);
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.write('<br>Math.fround() applied to ' + value + ' is ' + Math.fround(value))
        res.write('<br>Math.random() applied to ' + value + ' is ' + Math.random(value))
        res.write('<br>Math.round() applied to ' + value + ' is ' + Math.round(value))
        res.end()
    }

});

module.exports = router;