var express = require('express');
 
var app = express();
app.get('/', function (req, res) {
 res.send('mspr demo');
});//listen to port 3000 by default

app.listen(process.env.PORT || 3200); 
module.exports = app;