var express = require('express')
var app = express();
var request = require('request');
var car;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  console.log(req)
  console.log(res)
  res.send(car)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

app.get("https://findrserver.herokuapp.com/:id", function (req, res){
  request.post('https://api-jp-t-itc.com:443/GetVehicleInfo', {form:{
    developerkey:'40548194aeaa',
    responseformat:'json',
    vid: req.params.id,
    infoids:'[Posn,VehBehvr]'

  }}, function(err, httpResponse, body){
    console.log(body);
    res.json(body);
  });
});
