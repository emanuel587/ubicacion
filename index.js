// Inicializa la plataforma con tu clave de API
var platform = new H.service.Platform({
    apikey: "PierLOW4jlGurxDWa3jyTUrcrZyj5GCZY-x4BYHjMJo"
});


if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        // Crea un mapa centrado en la ubicación actual
        var defaultLayers = platform.createDefaultLayers();
        var map = new H.Map(document.getElementById('map'),
            defaultLayers.vector.normal.map, {
            center: { lat: latitude, lng: longitude },
            zoom: 15
        });

        // Crea un marcador en la ubicación actual
        var marker = new H.map.Marker({ lat: latitude, lng: longitude });
        map.addObject(marker);
    });
}
