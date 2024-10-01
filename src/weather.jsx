import {useState, React} from "react";
import axios from "axios";
import './weather.css';

const Weather = () => {

    const api_key = process.env.REACT_APP_API_KEY;
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    //fetching data from weather API
    const fetchWeatherData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
          );
          console.log(response.data) // Log the entire response data to the console
          setWeatherData(response.data);
          setErrorMessage('');
        } catch (error) {
          setWeatherData(null);
          if (error.response && error.response.status === 404) {
            setErrorMessage("City not found. Please check your input and try again.");
            console.log("City not found! Please check your input and try again.", error);
          }
          else {
            setErrorMessage("An error occurred while fetching weather data.");
            console.log("An error occurred while fetching weather data.", error);
          }
        }
      };

      //submit button function
      const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
      };

    return (
        <div className="container">

          <div className="header">
            <h1>Weather App</h1> 
            <p>Find out the weather in any city right now!</p>
          </div>
          
          <div className="search">            
              <form className="searchBar" onSubmit={handleSubmit}>
                  <input
                  type="text"
                  placeholder="Enter city name"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                  />
                  <button type="submit">Search</button>
              </form>
          </div>

          {weatherData &&
                      <div className="weather-details">
                          <h2>{weatherData.name}</h2>
                          <p>{weatherData.weather[0].description}</p>
                          <p>Temperature: {weatherData.main.temp} celsius</p>
                          <p>Feels Like: {weatherData.main.feels_like} celsius</p>
                      </div>
          }

          {errorMessage && 
                      <div className="error-details">
                          <h2>oops!</h2>
                          <p>{errorMessage}</p>
                      </div>}
        </div>
    );
}

export default Weather;