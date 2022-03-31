function initMap() {
  const mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(14.624927171339964, -90.51814831207724),
    styles: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "hue": "#e7ecf0"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -70
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "saturation": -60
          }
        ]
      }
    ],
    disableDefaultUI: true
  };

  const mapElement = document.getElementById('map');
  const map = new google.maps.Map(mapElement, mapOptions);
  const marker = new google.maps.Marker({
    position: new google.maps.LatLng(14.624953114171339, -90.51681793827254),
    map: map,
    title: 'Headquaters Guatemala - Prolubri',
    icon: {
      url: '/icons/marker.svg',
      scaledSize: new google.maps.Size(25, 36),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32),
    }
  });
}