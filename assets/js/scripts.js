$(document).ready(function() {

	// When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(59.945, 30.3717),

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType": "all","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "all","elementType": "labels.text","stylers": [{"visibility": "on"}]},{"featureType": "all","elementType": "labels.text.fill","stylers": [{"color": "#000000"}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "on"}]},{"featureType": "administrative","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "landscape","elementType": "all","stylers": [{"color": "#ffffff"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"weight": 1}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"weight": 0.8}]},{"featureType": "road","elementType": "labels","stylers": [{"visibility": "on"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "water","elementType": "all","stylers": [{"visibility": "off"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map-spb');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.945, 30.3717),
            map: map
        });
    }

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init2);

    function init2() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(55.7503, 37.6728),

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType": "all","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "all","elementType": "labels.text","stylers": [{"visibility": "on"}]},{"featureType": "all","elementType": "labels.text.fill","stylers": [{"color": "#000000"}]},{"featureType": "all","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"}]},{"featureType": "all","elementType": "labels.icon","stylers": [{"visibility": "on"}]},{"featureType": "administrative","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "landscape","elementType": "all","stylers": [{"color": "#ffffff"}]},{"featureType": "poi","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"color": "#000000"},{"weight": 1}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#000000"},{"weight": 0.8}]},{"featureType": "road","elementType": "labels","stylers": [{"visibility": "on"}]},{"featureType": "transit","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "water","elementType": "all","stylers": [{"visibility": "off"}]}]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map-msk');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        // Let's also add a marker while we're at it
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.7503, 37.6728),
            map: map
        });
    }

    //

	$('.locations .buttons .item').on('click', function(event) {
		var buttons = $('.locations .buttons .item'),
			curid = $(this).data('id'),
			containerBlock = $('.locations-type');
		containerBlock.hide();
		$('#'+curid).fadeIn(700);
		buttons.removeClass('active');
		$(this).addClass('active');
		event.stopPropagation();
	});

	//

	$('.cities .city').on('click', function() {
		var maps = $('.map-item'),
			tabs = $('.cities .city');
		if ( $(this).hasClass('spb') ) {
			maps.hide();
			tabs.removeClass('active');
			$(this).addClass('active');
			$('#map-spb').fadeIn(700);
		} else if ( $(this).hasClass('msk') ) {
			maps.hide();
			tabs.removeClass('active');
			$(this).addClass('active');
			$('#map-msk').fadeIn(700);
		}
		return false;
	});
});