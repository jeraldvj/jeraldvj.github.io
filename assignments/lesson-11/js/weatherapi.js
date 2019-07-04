let forecastRequest = new XMLHttpRequest();
let apiURLstringFore = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=5155b328d398b92be7cd1e1112e8e8da';

forecastRequest.open('Get' , apiURLstringFore, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let forecastData = JSON.parse(forecastRequest.responseText);
    console.log(forecastData);
    var c = 0; 

    for (let i = 0; i < forecastData.list.length; i++) {
        var str = forecastData.list[i].dt_txt;
        var x = str.indexOf("8", 10);        
        if ("12" == x) {            
            var temp = parseFloat(forecastData.list[i].main.temp);            
            document.getElementById('cc-temp'+ c).innerHTML = Math.round(temp);


            let icon = "http://openweathermap.org/img/w/" + forecastData.list[i].weather[0].icon + ".png";
            let desc = forecastData.list[i].weather[0].description;

            document.getElementById('cc-img'+ c).setAttribute('src' , icon);
            document.getElementById('cc-img'+ c).setAttribute('alt' , desc);
            
            c += 1;
            if (c == 5) {
                break;
            } 
        }
    }
}

let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=5155b328d398b92be7cd1e1112e8e8da';

weatherRequest.open('Get' , apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);

    document.getElementById('curr').innerHTML = weatherData.weather[0].description;
    document.getElementById('temp').innerHTML = Math.round(weatherData.main.temp);
    document.getElementById('hum').innerHTML = weatherData.main.humidity;
    document.getElementById('windSpd').innerHTML = Math.round(weatherData.wind.speed*10)/10;
    
}