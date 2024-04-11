const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
setInterval(() => {
    const time = new Date();
    time.getMonth();
    time.getDay();
    time.getHours();
})
getWeatherData()

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude} = success.coords;

        fetch('https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}').then(r =>{} )

        console.log(data)
        showWeatherData(data);
    })
}

function showWeatherData(data) {
    let otherDayForecast = ''
    data.daily.forEach((day, idx) => {
        if (idx === 0) {
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt * 1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>'`

        } else {
            otherDayForecast += `
            <div class="weather-forecast-item">
            <div class="day">${window.moment(day.dt * 1000).format('ddd')}</div>
            <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
            <div class="temp">Night - ${day.temp.night}&#176;C</div>
            <div class="temp">Day - ${day.temp.day}&#176;C</div>
</div>
            `
        }
    })
    weatherForecastEl.innerHTML = otherDayForecast;
}