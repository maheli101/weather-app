
    document.getElementById("searchBtn").addEventListener("click",()=>{
        let searchVal = document.getElementById("search").value;
        
        let reop={
            method:'GET'
        }

        fetch("http://api.weatherapi.com/v1/current.json?key=857f8dbf110d4b16bb471113241503&q=colombo",reop)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            document.getElementById("city").innerHTML=data["location"]["name"];
            document.getElementById("time").innerHTML=data["location"]["localtime"];
            document.getElementById("temp").innerHTML=data["current"]["temp_c"];
            document.getElementById("weather").innerHTML=data["current"]["condition"]["text"];
            document.getElementById("img").src=data["current"]["condition"]["icon"];
        })
        .then(error => console.log("error",error))
    });
  
