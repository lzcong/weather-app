import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import axios from "axios";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: ""
  });

  
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("请输入城市名"); 
    } else {
      const response = await axios.get(
        `/weather/${form.city}`
      )

      console.log(response);
      setWeather({ data: response.data });
    }
    // const response = await axios.get(`/weather/guangzhou`)
    // console.log(response)
    // setWeather({ data: response.data })
    // console.log(weather)
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    // if (name === "country") {
    //   setForm({ ...form, country: value });
    // }
  };
  return (
    <div className="weather">
      <span className="title">Weather App</span>
      <br />
      <form>
        <input
          type="text"
          placeholder="城市"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        {/* <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        /> */}
        <button className="getweather" onClick={(e) => weatherData(e)}>
          提交
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={ weather.data } />
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
