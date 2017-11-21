console.log("HHHIIIIIII");

const mapboxgl = require('mapbox-gl');
const buildMarker = require('./marker');

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1nb3Jkb24xNTQiLCJhIjoiY2phOXVmNGk5MGt0eDMycXVweWEybmVrciJ9.Q310T3dOqbZ8ctXakShBWQ';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const fullstackNY =
  document.createElement('div');

  fullstackNY.style.width = "32px";
  fullstackNY.style.height = "39px";
  fullstackNY.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const fsnyMarker = new mapboxgl.Marker(fullstackNY)
  .setLngLat([-74.009151, 40.705086])
    .addTo(map);

console.log(fsnyMarker)

const fullstackChicago =
  document.createElement('div')

  fullstackChicago.style.width = "32px";
  fullstackChicago.style.height = "39px";
  fullstackChicago.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";


  new mapboxgl.Marker(fullstackChicago)
  .setLngLat([-87.6354, 51.8885])
  .addTo(map);

buildMarker('hotels', [-73.980537 ,40.763439]).addTo(map);
