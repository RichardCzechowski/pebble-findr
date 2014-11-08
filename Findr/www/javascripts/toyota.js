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
    e.preventDefault();
    var carId = $(this).find("input[type=text]").val();
    // Hit GitHub API

    $.ajax({
      type: "POST",
      url: "https://api-jp-t-itc.com/GetVehicleInfo",
      crossDomain: true,
      data:[{
        developerkey: 'e862c3949fbe', 
        responseformat: 'json',
        vid: 'ITCUS_VID_052',
        infoids: '[Posn, VehBehvr]'
      }],
      dataType: "jsonp",
      success: function(data){ console.log(data)},
      error: function(err){console.log(err)}
    })
    });

  var userSource   = $("#user-template").html();
  var userTemplate = Handlebars.compile(userSource);

  var refreshUser = function(user) {
    var userHtml = userTemplate(user);
    $("#user-info").html(userHtml);
  };


});
