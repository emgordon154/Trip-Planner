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

buildMarker('hotels', [-73.980537 ,40.763439]).addTo(map);
buildMarker('activities', [-74.009151, 40.705086]).addTo(map);
buildMarker('activities', [-87.6354, 51.8885]).addTo(map);

// const header = document.getElementsByClassName('header')[0];
// header.addEventListener('hover', (event) => {
//   header.classList.add('hover')
// })