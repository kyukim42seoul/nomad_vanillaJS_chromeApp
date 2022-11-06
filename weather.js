const req = ["f9ba", "e7c0", "6a4b", "32c4", "0790", "0e72", "4d8b", "ef73"];


function geoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const reqest = `${req[6]}${req[3]}${req[1]}${req[7]}${req[2]}${req[0]}${req[5]}${req[4]}`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${reqest}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector(".weather span:first-child");
        const city = document.querySelector(".weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
        city.innerText = ` ${data.name}`;
    });
}

function geoFail() {
    alert("Fail!");
}

const position = navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
