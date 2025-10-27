mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmUzbmsiLCJhIjoiY21oOXJoMnd5MGU3ZDJqcHhqOGYxOGd1YSJ9.cyu6FHCrcG3ppE5UtYTT7w';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/laure3nk/cmh9rputb000001sm3vwuf5c0', // your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });