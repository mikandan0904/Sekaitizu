
var map = L.map('map').setView([20, 0], 2); 

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var countryData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "日本", "id": "JP" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [[137.0, 35.0], [139.0, 35.0], [139.0, 33.0], [137.0, 33.0], [137.0, 35.0]]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "アメリカ", "id": "US" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [[-100.0, 40.0], [-120.0, 40.0], [-120.0, 30.0], [-100.0, 30.0], [-100.0, 40.0]]
                ]
            }
        },
    ]
};

var countriesLayer = L.geoJSON(countryData, {
    style: function (feature) {
        return {
            color: 'blue',
            weight: 2,
            fillColor: '#66ccff',
            fillOpacity: 0.3
        };
    },
    onEachFeature: function (feature, layer) {
        layer.on('click', function () {
            map.fitBounds(layer.getBounds());

            alert('選択した国: ' + feature.properties.name);
        });

        layer.on('mouseover', function () {
            layer.setStyle({
                fillOpacity: 0.7,
                fillColor: 'yellow'
            });
        });

        layer.on('mouseout', function () {
            layer.setStyle({
                fillOpacity: 0.3,
                fillColor: '#66ccff' 
            });
        });

        layer.bindPopup(feature.properties.name);
    }
}).addTo(map);

// ここまでで、クリックした国を拡大表示したり、ハイライトしたりできるようになります！
