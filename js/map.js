


let map = L.map('map1').setView([51.22004551892721, 4.4384030222973605], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// plaats icon.png als marker op de map
let markerIconP1 = L.icon({
  iconUrl: './assets/logoLHL.png',
  iconSize: [30,30],
  iconAnchor: [0, 60],
  popupAnchor: [0, 0]
});

L.marker([51.22004551892721, 4.4384030222973605], { icon: markerIconP1 }).addTo(map);

