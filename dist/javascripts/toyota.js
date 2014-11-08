$(function(){
  var carlat;
  var carlon;
  var peblat;
  var peblon;
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  var car= '052'
  var aliases={mom: "052", dad: "100"}
  $('select').change(function(){
    newRoute();
    console.log("change");
  });
  newRoute();
  function newRoute(){
    getLoc();
    getData();
  };

  function initialize(carlat, carlon, peblat, peblon) {
    console.log(carlat, carlon, peblat, peblon)
    var carlatlon = new google.maps.LatLng(carlat,carlon);
    var peblatlon = new google.maps.LatLng(peblat, peblon);
    console.log(carlatlon+" and " + peblatlon);
    directionsDisplay = new google.maps.DirectionsRenderer();
    var mapOptions = {
      zoom:7,
      center:carlatlon 
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
    calcRoute(carlatlon, peblatlon);
  }

  function calcRoute(carlatlon, peblatlon) {
    var start = carlatlon;
    var end = peblatlon;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }

  function getLoc(){
    navigator.geolocation.getCurrentPosition(getLatLon);
  }

  function getLatLon(position){
    peblat = position.coords.latitude;
    peblon = position.coords.longitude;
  }

  /* $('#locateCar').on('click', function(){
     car = $('#carInput').val();
     console.log(car)
     getData();
     });*/

  setTimeout(function(){
      car="052";
      getData();
      }, 3000);

  function getData() {
    $.getJSON('https://findrserver.herokuapp.com/cars/'+car, function(data){
        var obj = jQuery.parseJSON(data)
        carlat= obj.vehicleinfo[0].data[0].Posn.lat;
        carlon= obj.vehicleinfo[0].data[0].Posn.lon;
        initialize(carlat,carlon,parseFloat(peblat),parseFloat(peblon));
        });
  }

});
