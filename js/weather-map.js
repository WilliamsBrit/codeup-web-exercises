function getWeatherData() {
    const limit = 4; // Replace with the desired limit
    const cityName = document.getElementById('cityName').value;
    const geoCodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${WEATHER_API_KEY}`;
    fetch(geoCodeUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            globalData = data;
            const firstResponse = data[0];
            const latitude = firstResponse.lat;
            const longitude = firstResponse.lon;
            map.setCenter([longitude, latitude]);





            weatherDataCards(latitude,longitude)
        })



}
function weatherDataCards(latitude,longitude) {
    let weatherCard = document.querySelector("#weatherCards")
    let html = ""
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + WEATHER_API_KEY + "&units=imperial")
        .then(data => data.json())
        .then(result => {
            console.log(result)
            const day = result.list;


            for (let i = 0; i < day.length; i += 8) {
                const weather = day[i]

                const date = new Date(weather.dt * 1000);


                const weatherInfo = weather.main.temp;
                const tempLike = weather.main.feels_like;
                const description = weather.weather[0].description;
                const humidity = weather.main.humidity;
                // language=html
                html += `
                    <div class="card" style="width: 18rem;">
                        <p>${date.toLocaleDateString()}</p>
                        <div> Temp: ${weatherInfo}</div>
                        <p>Feels Like: ${tempLike}</p>
                        <p>${description}</p>
                    </div>`

            }
            weatherCard.innerHTML = html;

        })
}
document.getElementById('weather-form').addEventListener('submit', function (event) {
    event.preventDefault();
    getWeatherData();
});

