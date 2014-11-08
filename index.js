var express = require('express');
var app = express()
var request = require('request');
var car;

request.post('https://api-jp-t-itc.com:443/GetVehicleInfo', {form:{
  developerkey:'40548194aeaa',
  responseformat:'json',
  vid:'ITCUS_VID_052',
  infoids:'[Posn,VehBehvr]'

}}, function(err, httpResponse, body){
  console.log(body);
  car = body;
});
/*
res.setHeader("Content-Type", "application/json");
if (!!req.query.callback) {
  rrr = req.query.callback+"("+JSON.stringify(rtn)+");";
} else {
  rrr = JSON.stringify(rtn);
}
res.send(rrr)*/

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!'+ car)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
