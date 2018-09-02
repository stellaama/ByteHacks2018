function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";

    // // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = "#B7AFA3";
}

// Initialize and add the map for supply tracking
 function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: {lat: 18.237215, lng: -66.517899}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: 18.150688, lng: -65.818912},
        {lat: 18.083827, lng: -65.873639},
        {lat: 18.371456, lng:  -66.167216},
        {lat: 18.176335, lng: -66.913783},
        {lat: 18.336096, lng: -66.997783},
        {lat: 18.234883, lng: -66.720194},
        {lat: 18.432367, lng: -66.464868},
        {lat: 18.116314, lng: -66.175839}
      ]


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
