function getweather() {
    var city = document.getElementById("city").value;
    var countrycode = document.getElementById("Countrycode").value;
    var weatherTable = document.getElementById("weatherTable");

    var weathersettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://aerisweather1.p.rapidapi.com/forecasts/" + city + "," + countrycode + "?plimit=24",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
            "x-rapidapi-host": "aerisweather1.p.rapidapi.com"
        }
    };

    $.ajax(weathersettings).done(function (response) {
        var weatherData = response.response[0].periods;
        var tableHTML = '<tr><th>Valid Time</th><th>Min Temperture(C)</th><th>Max Temperture(C)</th></tr>';

        for (var i = 0, len = weatherData.length; i < len; i++) {
            var row = '<tr>';
            row += '<td>' + weatherData[i].validTime + '</td>';
            row += '<td>' + weatherData[i].minTempC + '</td>';
            row += '<td>' + weatherData[i].maxTempC + '</td>';
            row += '</tr>';
            tableHTML += row;
        }

        weatherTable.innerHTML = tableHTML;
    });
}
