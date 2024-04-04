
import './App.css';
import Main from './components/weatherapp/Main';
import clear_icon from "./components/Assets/clear.jpg";
import cloud_icon from "./components/Assets/cloud.png";
import drizzle_icon from "./components/Assets/drizzle.png";
import humid_icon from "./components/Assets/humid.jpg";
import rain_icon from "./components/Assets/rain.jpg"
import search_icon from "./components/Assets/search.jpg"
import snow_icon from "./components/Assets/snow.jpg"
import wind_icon from "./components/Assets/wind.png"
import { useState } from 'react';




function App() {
  let api_key="3c02a0bf419649c9894410d5932ce617"
  const [wicon,setwicon]=useState(cloud_icon)
  const search=async ()=>{
    let element=document.getElementsByClassName("city_name");
    if(element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
    
    let response= await fetch(url);
    let data=await response.json();

    let humidity=document.getElementsByClassName("humidpercent");
    let wind=document.getElementsByClassName("windspeed");
    let temerature=document.getElementsByClassName("temp");
    let location=document.getElementsByClassName("city");

    humidity[0].innerHTML=data.main.humidity+"%";
    wind[0].innerHTML=data.wind.speed+"Km/h";
    temerature[0].innerHTML=data.main.temp+"°C";
    location[0].innerHTML=data.name;

    if(data.weather[0].icon==="01d" ||data.weather[0].icon==="01n" ){
      setwicon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n" ){
      setwicon(cloud_icon);
    }
    else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n" ){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n" ){
      setwicon(drizzle_icon);
    }
    else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n" ){
      setwicon(rain_icon);
    }
    else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n" ){
      setwicon(rain_icon);
    }
     else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n" ){
      setwicon(snow_icon);
    }
    else{
    setwicon(clear_icon);
    }




  }
  return (
    <div className='container'>
      <div className='topbar'>
        <input type='text' className="city_name" placeholder='Search'></input>
       <div className='search_icon'>
          <img onClick={()=>{search()}} src={search_icon}></img>
       </div>
      </div>
      <div className='middlecontent'>
        <div className='weatherimg'>
          <img src={wicon}></img>
        </div>
        <div className='temp'>15°C</div>
        <div className='city'>London</div>

      </div>
      <div className='bottomcontent'>
        <div className='humidity'>
            <div className='humidimg'>
              <img src={humid_icon}></img>
              </div>
              <div >
              <div className='humidpercent'>70</div>
              <div className='text'>Humidity</div>
              </div>
              
        </div>
        <div className='wind'>
        <div className='windimg'>
              <img src={wind_icon}></img>
              
            </div>
            <div >
            <div className='windspeed'>5.14 Km/h</div>
              <div className='text'>Wind Speed</div>
            </div>

        </div>
      </div>



   
    </div>
  );
}

export default App;
