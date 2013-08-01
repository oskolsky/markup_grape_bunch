var Map = function() {

  this.initialize = function(point, images) {
    var myLatlng = new google.maps.LatLng(41.87, -87.66);
    var 
        mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl:    false,
          streetViewControl: false,
          zoomControl:       false
      };
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    var 
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          icon: images
        });
  };

};