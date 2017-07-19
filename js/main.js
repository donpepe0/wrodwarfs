var attr_osm = 'Map data &copy; <a href="http://openstreetmap.org/">OpenStreetMap</a> contributors',
attr_overpass = 'POI via <a href="http://www.overpass-api.de/">Overpass API</a>';
var osm = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {opacity: 1, attribution: [attr_osm, attr_overpass].join(', ')});

var map = new L.Map('map').addLayer(osm).setView(new L.LatLng( 51.101, 17.037), 15);

//OverPassAPI overlay
var opl = new L.OverPassLayer({
  
  query: "area[name='Wrocław'];node(area)[artwork_type='dwarf'][name];out;",
});

map.addLayer(opl);