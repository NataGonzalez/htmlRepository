var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/IframeCanvas.html');
});


app.listen(process.env.PORT || 3000);
