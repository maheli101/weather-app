
document.getElementById("searchBtn").addEventListener("click", () => {
    let searchVal = document.getElementById("search").value;

    let reop = {
        method: 'GET'
    }

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=857f8dbf110d4b16bb471113241503&q=${searchVal}`, reop)
        .then(response => response.json())
        .then(data => {


            document.getElementById("city").innerHTML = data["location"]["name"];
            document.getElementById("time").innerHTML = data["location"]["localtime"];
            document.getElementById("temp").innerHTML = data["current"]["temp_c"] + "°C";
            document.getElementById("weather").innerHTML = data["current"]["condition"]["text"];
            document.getElementById("img").src = `http:${data["current"]["condition"]["icon"]}`;
            document.getElementById("feelsLike").innerHTML = data["current"]["feelslike_c"] + "°C";
            document.getElementById("humidity").innerHTML = data["current"]["humidity"];
            document.getElementById("windSpeed").innerHTML = data["current"]["wind_kph"] + "km/h";
            document.getElementById("uv").innerHTML = data["current"]["uv"];






            let condition = data["current"]["condition"]["text"];
            console.log(condition);

            switch (condition) {
                case ("Sunny"):
                    document.body.style.backgroundImage = "url('img/sun2.jpg')";
                    break;


                case ("Partly cloudy"):
                    document.body.style.backgroundImage = "url('img/partly cloudy.jpg')";
                    break;

                case ("Patchy rain nearby"):
                case ("Moderate rain"):
                case ("Light rain"):
                case ("Light sleet showers"):
                    document.body.style.backgroundImage = "url('img/patchy rain.jpg')";
                    break;

                case ("Clear"):
                    document.body.style.backgroundImage = "url('img/clear.jpg')";
                    break;

                case ("Overcast"):
                    document.body.style.backgroundImage = "url('img/overcast.jpg')";
                    break;

                case ("Mist"):
                    document.body.style.backgroundImage = "url('img/mist.jpg')";
                    break;






            }
       

const startDate = new Date(`${data.forecast.forecastday[0].date}`);
let currentDate = new Date(startDate);

for (let i = 0; i < 7; i++) {
    const formatDate = currentDate.toISOString().split('T')[0];

    fetch(`http://api.weatherapi.com/v1/forecast.json?key=857f8dbf110d4b16bb471113241503&q=${searchVal}&days=10&aqi=yes&dt=${formatDate}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(`dateF${i + 1}`).innerHTML = `${data.forecast.forecastday[0].date}`;
            document.getElementById(`tempF${i + 1}`).innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} °C`;
            document.getElementById(`imgF${i + 1}`).src = `http:${data.forecast.forecastday[0].day.condition.icon}`;
            document.getElementById(`weatherF${i + 1}`).innerHTML = ` ${data.forecast.forecastday[0].day.condition.text}`;


        })
        .catch(error => {
            console.error("Error:", error);
        });

    currentDate.setDate(currentDate.getDate() + 1);
}


const startDates = new Date(`${ data.forecast.forecastday[0].date }`);
let currentDates = new Date(startDates);

for (let i = 7; i >= 1; i--) {

    const formatDates = currentDates.toISOString().split('T')[0];

    fetch(`https://api.weatherapi.com/v1/history.json?key=6d203a6eea184286be395957240703&q=${searchVal}&dt=${formatDates}`)
                  .then(response => response.json())
            .then(data => {
                document.getElementById(`dateH${ i }`).innerHTML = `${ data.forecast.forecastday[0].date }`;
                document.getElementById(`tempH${ i }`).innerHTML = `${ data.forecast.forecastday[0].day.avgtemp_c } °C`;
                document.getElementById(`imgH${ i }`).src =` http:${ data.forecast.forecastday[0].day.condition.icon }`;
                document.getElementById(`weatherH${ i }`).innerHTML = `${ data.forecast.forecastday[0].day.condition.text }`;



            })
            .catch(error => {
                console.error("Error:", error);
            });

    currentDates.setDate(currentDates.getDate() - 1);
}
(error => console.log("error", error));
      });
  
  });
