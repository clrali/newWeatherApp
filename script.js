let weather = {
    "apiKey":"ccf25a80eb96e2151835e9d943fb5714",
    // get the data for a certain city from the api 
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        // extract the corresponding information from each section of the json file
        const{name} = data; 
        // extract the icon and description from weather section + turn them into variables
        // need to do index 0 because weather is actually an array in the json file
        const{icon, description} = data.weather[0];
        // extract the temp and humidity from the main section + turn them into variables
        const{temp, humidity} = data.main; 
        const{speed} = data.wind; 
        // used below line to test if all fields were accessed from json file 
        // console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description; 
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    },
    search: function() {
        // takes in the name of the city that was searched and passes it into the fetchWeather function
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
    // allows the user to search by clicking the search button 
    document
        .querySelector(".search button")
        .addEventListener("click", function() {
            weather.search();
        }); 

    // allows the user to search by pressing the enter key (need to fix)
    document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if(eventKey == "Enter"){
            weather.search(); 
        }
    });