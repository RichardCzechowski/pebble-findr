$(function(){
  var car = false;

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

  if (car==true){
    getData();
  }
  else{
    getLoc();
  }
  function getLoc(){
    navigator.geolocation.getCurrentPosition(getLatLong);
  }
  function getLatLong(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;
initialize(lat,lon);
  }
  function getData() {
    $.getJSON('http://localhost:5000/cars/052', function(data){

      console.log(data) // Handles the callback when the data returns
      var obj = jQuery.parseJSON(data)
      var lat= obj.vehicleinfo[0].data[0].Posn.lat;
      var lon= obj.vehicleinfo[0].data[0].Posn.lon;
      console.log(lat, lon);
      initialize(lat, lon);

    });
  }


});
