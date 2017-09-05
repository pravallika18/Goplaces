function produceSearch(term) {
    var _params = {
        radius : 11000,
        name : term,
        location : app.modules.mapsProvider.getLatLng(),
        key : 'KEY'
    };
    var service = new google.maps.places.PlacesService(map_inst);
    service.search(_params, requestSucceeded);
}