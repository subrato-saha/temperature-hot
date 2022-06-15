function searchMethod(){
    const locationInput = document.getElementById("input-location").value;
    
    if (locationInput != ""){
        fetch ("https://api.openweathermap.org/data/2.5/weather?q="+locationInput+"&appid=4b142be1f90d130cf2f06586f711464a&units=metric")
        .then(data => data.json())
        .then(data => {
            const locationName = data.name;
            const currentTemp = data.main.temp;
            const mainWeather = data.weather[0].main;
            const icon = data.weather[0].icon;

            const mainImg = document.getElementById("main-img");
            const location = document.getElementById("location-name");
            const tempCount = document.getElementById("temp");
            const weatherType = document.getElementById("weather-type");

            mainImg.src = "https://openweathermap.org/img/wn/"+icon+"@2x.png"
            location.innerText = locationName;
            tempCount.innerText = currentTemp;
            weatherType.innerText = mainWeather;

            const mainunit = document.getElementById("weather-status");
            mainunit.style.display = "block"
        });
    }else{
        alert("Please Enter a Location to get WEATHER DATA");
    }
}
