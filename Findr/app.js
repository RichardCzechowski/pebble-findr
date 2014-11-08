var express = require('express');
var app = express()
var request = require('request');


request.post('https://api-jp-t-itc.com:443/GetVehicleInfo', {form:{
  developerkey:'40548194aeaa',
  responseformat:'json',
  vid:'ITCUS_VID_052',
  infoids:'[Posn,VehBehvr]'

}}, function(err, httpResponse, body){
  console.log(body);
});
/*
res.setHeader("Content-Type", "application/json");
if (!!req.query.callback) {
  rrr = req.query.callback+"("+JSON.stringify(rtn)+");";
} else {
  rrr = JSON.stringify(rtn);
}
res.send(rrr)*/

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
