const key = "62d7b24b58937e7248017a9b40700e14"


function viewData(data) {
  console.log(data)
  document.querySelector(".city").innerHTML = "Tempo em " + data.name
  document.querySelector(".temp").innerHTML =  data.main.temp + "°C"
  document.querySelector(".text-prev").innerHTML = data.weather[0].description
  document.querySelector(".humidity").innerHTML = "Umidade: " + data.main.humidity +"%"
  document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
}

async function searchCity(city) {

  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
  
  viewData(data)
}


function clickedTheButton() {
  const city = document.querySelector(".input-city").value

  searchCity(city)
}