 function initMap(){
            var map = new google.maps.Map(document.getElementsById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var location = [
                {lat: 40.785091, lg: -73.968285 },
                {lat: 41.084045, lg: -73.874345 },
                {lat: 40.754932, lg: -73.984016 }

            ];
            var markers= locations.map(function(location,i){
                return new google.maps.Marker({
                    position:location,
                    label: labels[i % labels.length]
                 });
            });
         new MarkerClusterer(map, markers, {
    imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}