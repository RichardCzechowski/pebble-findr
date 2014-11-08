$(function(){
  var data={location: "half dome, ca"};
  function initialize(data) {
    var mapOptions = {
      zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': data.location}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize(data));


  $("#locateCar").on("click", function(e) {
    //    e.preventDefault();
    //  var carId = $(this).find("input[type=text]").val();
    // Hit GitHub API
    
       $.ajax({
type: "POST",
url: "https://api-jp-t-itc.com/GetVehicleInfo",
jsonp: "jsonp_callback",
crossDomain: true,
data:[{
developerkey: 'e862c3949fbe', 
responseformat: 'json',
vid: 'ITCUS_VID_052',
infoids: '[Posn, VehBehvr]'
}],
success: function(data){ console.log(data)},
error: function(err){console.log(err)}
})

var userSource   = $("#user-template").html();
var userTemplate = Handlebars.compile(userSource);

var refreshUser = function(user) {
var userHtml = userTemplate(user);
$("#user-info").html(userHtml);
};
  /*
     var xmlhttp;
     if (window.XMLHttpRequest)
     {// code for IE7+, Firefox, Chrome, Opera, Safari
     xmlhttp=new XMLHttpRequest();
     }
     else
     {// code for IE6, IE5
     xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
     }
     xmlhttp.onreadystatechange=function()
     {
     if (xmlhttp.readyState==4 && xmlhttp.status==200)
     {
     document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
     }
     }
     xmlhttp.open("POST","https://api-jp-t-itc.com/GetVehicleInfo",true);
     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
     xmlhttp.send("developerkey=e862c3949fbe&responseformat=json&vid=ITCUS_VID_052&infoids=[Posn, VehBehvr]");

     });*/

var  vehicleData=  {
      "vehicleinfo": [
        {
        "vid": "ITCUS_VID_052",
        "userid": "ITCUS_USERID_052",
        "data": [
          {
          "createtime": "2014-11-08 08:58:58",
          "Posn": {
            "MapMtchg": 1,
            "lat": 37.369038,
            "lon": -122.03641
          },
          "Spd": 23.6,
          "ALat": -0.7,
          "ALgt": 0.6,
          "YawRate": -0.3,
          "AccrPedlRat": 39,
          "BrkIndcr": 0,
          "SteerAg": -1,
          "TrsmGearPosn": "D",
          "EngN": 1590,
          "OdoDst": 6854,
          "DrvgMod": 0,
          "EcoDrvgSts": 3
        }
        ]
      }
      ]
    };

    console.log(vehicleData.vehicleinfo[0].data[0].Posn);
  });
  });
