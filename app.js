//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
  key: "5fd072c3ee577a15703ff68d6bdb9ea0",
  baseUrl :"https://api.openweathermap.org/data/2.5/weather"
}

//event listner function on keypress
const searchInputBox = document.getElementById('location');
searchInputBox.addEventListener('keypress', (event)=>{

  if(event.keyCode == 13){
  console.log(searchInputBox.value);
  getWeatherReport(searchInputBox.value);
}
});

//get weather report
function getWeatherReport(city){
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
    return weather.json();
  }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather){
 console.log(weather);

 let city = document.getElementById('city');
 city.innerHTML= `${weather.name}, ${weather.sys.country}`;

 let temperature = document.getElementById('temp');
 temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

 let minMaxTemp = document.getElementById('min-max');
 minMaxTemp.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C [ Min ] / ${Math.ceil(weather.main.temp_max)}&deg;C [ Max ]`;

 let weatherType = document.getElementById('weather');
 weatherType.innerHTML= `${weather.weather[0].main}`;

 let date= document.getElementById('date');
 let todayDate=new Date();
 date.innerHTML=dateManage(todayDate);

// change background
if(weatherType.textContent=='Haze'){
  document.body.style.backgroundImage= "url('img/haze.jpg')";

} else if(weatherType.textContent=='Clouds'){
  document.body.style.backgroundImage= "url('img/coluds.jpg')";

} else if(weatherType.textContent=='Rain'){
  document.body.style.backgroundImage= "url('img/rain.jpg')";

}  else if(weatherType.textContent=='Snow'){
  document.body.style.backgroundImage= "url('img/snow.jpg')";

} else if(weatherType.textContent=='Thunderstorm'){
  document.body.style.backgroundImage= "url('img/thunder.jpg')";

}else if(weatherType.textContent=='Clear'){
  document.body.style.backgroundImage= "url('img/clear.jpg')";
}









//date manage
function dateManage(dateArg){

  let days= ["Sunday", "Monday", "Tuesday", "Wednesday" ,"Thrusday", "Friday", "Saturday"];

  let months= ["January", "Feburary", "March", "April" ,"May", "June", "July", "August","September", "October","November", "December"];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} [ ${day} ] ${year}`;
}

}


