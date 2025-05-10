
let map = L.map('map').setView([41.8902, 12.4922], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

loadDiary();

function searchCity() {
    const city = document.getElementById("cityInput").value;
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            map.setView([lat, lon], 14);
            loadPOI(lat, lon);
        }
    });
}

function loadPOI(lat, lon) {
    const radius = 3000;
    const apiKey = '5ae2e3f221c38a28845f05b6';
    fetch(`https://api.opentripmap.com/0.1/en/places/radius?radius=${radius}&lon=${lon}&lat=${lat}&format=json&apikey=${apiKey}&kinds=monuments,architecture,interesting_places`)
    .then(res => res.json())
    .then(data => {
        data.forEach(poi => {
            const marker = L.marker([poi.point.lat, poi.point.lon]).addTo(map);
            marker.bindPopup(poi.name);
            marker.on('click', () => addToDiary(poi.name));
        });
    });
}

function addToDiary(name) {
    const list = document.getElementById("visitedList");
    if (![...list.children].some(li => li.textContent === name)) {
        const li = document.createElement("li");
        li.textContent = name;
        list.appendChild(li);
        saveDiary();
    }
}

function saveDiary() {
    const items = [...document.getElementById("visitedList").children].map(li => li.textContent);
    localStorage.setItem("diario", JSON.stringify(items));
}

function loadDiary() {
    const stored = localStorage.getItem("diario");
    if (stored) {
        const list = document.getElementById("visitedList");
        JSON.parse(stored).forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            list.appendChild(li);
        });
    }
}
