const button = document.getElementById("search_button");
const input = document.getElementById("city_input");

const cityName = document.getElementById('city_name');
const cityTemp = document.getElementById('city_temp');
const cityTime = document.getElementById('city_time');
const tempFeels = document.getElementById('feels');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const uvindex = document.getElementById('uv');
const cloudCover = document.getElementById('clouds');
const condition = document.getElementById('condition');

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherstack.com/current?access_key=b19de85fa2d6d64ed18d0d5c40e79821&query=${cityName}`
    );
    return await promise.json();
}

button.addEventListener('click', async () => {
    //console.log(input.value);
    // alert('Clicked');

    const value = input.value;
    const result = await getData(value);

    console.log(result);

    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temperature}°C`;
    tempFeels.innerText = `${result.current.feelslike}°C`;
    humidity.innerText = `${result.current.humidity}%`;
    wind.innerText = `${result.current.wind_speed} km/h`;
    latitude.innerText = `${result.location.lat}°`;
    longitude.innerText = `${result.location.lon}°`;
    sunrise.innerText = `${result.current.astro.sunrise}`;
    sunset.innerText = `${result.current.astro.sunset}`;
    pressure.innerText = `${result.current.pressure} hPa`;
    visibility.innerText = `${result.current.visibility} km`;
    uvindex.innerText = `${result.current.uv_index}`;
    cloudCover.innerText = `${result.current.cloudcover}%`;
    condition.innerText = `${result.current.weather_descriptions[0]}`;
})