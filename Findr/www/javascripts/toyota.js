$(function(){

  function initialize(lat, lon) {
    var latlng = new google.maps.LatLng(lat,lon);
    var mapOptions = {
      zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'location': latlng}, function(results, status) {
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
  google.maps.event.addDomListener(window, 'load', initialize(40.730885,-73.997383));


  $("#locateCar").on("click", function(e) {
    //    e.preventDefault();
    //  var carId = $(this).find("input[type=text]").val();
    // Hit GitHub API

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

      var lat= vehicleData.vehicleinfo[0].data[0].Posn.lat;
      var lon=  vehicleData.vehicleinfo[0].data[0].Posn.lon;
      console.log(lat, lon);
      initialize(lat, lon);
    });
    });
