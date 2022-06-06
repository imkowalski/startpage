async function getWeather(api) {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=56.481681281370754&lon=9.623765423299895&appid=" + api);
    const data = await response.json();
    document.getElementById("tem").innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    document.getElementById("icon").src = await getIcon(data.weather[0].icon);
    document.getElementById("desc").innerHTML = data.weather[0].description;

}
async function getIcon(icon) {
    const icon_url = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
    return icon_url;
}
getWeather(localStorage.getItem("api"))