import React from "react";
import "./displayweather.css";
// import Icons from "node_modules/qweather-icons";


function DisplayWeather(props) {
  const { data } = props;
  // const iconurl =
  //   Icons + "/" +
  //   `${data.code !== 404 ? data.now.icon : null}` +
  //   ".svg";
  return (
    <div className="displayweather">
      {data.code !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {/* {city} Weather */}
            </span>
            <span className="cardsubtitle">
              当前时间 {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {data.now.temp}
              <sup>o</sup>
            </h1>
            {/* <span className="weather-main">{data.now.temp}</span> */}
            {/* <img className="weather-icon" src="./node_modules/qweather-icons/icons/101.svg" alt="QWeather Icons" srcSet="" /> */}
            <span className="weather-description">
              {" "}
              {data.now.text}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
              <tbody>
              <tr>
                  <td>
                    <h4>云量</h4>
                  </td>
                  <td>
                    <span>
                      {data.now.cloud}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>相对湿度</h4>
                  </td>
                  <td>
                    <span>{data.now.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>大气压强</h4>
                  </td>
                  <td>
                    <span>{data.now.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>能见度</h4>
                  </td>
                  <td>
                    <span>{data.now.vis} Km</span>
                  </td>
                </tr>
              </tbody>
              </table>
            </div>

            <div className="section2">
              <table>
                <tbody>
                <tr>
                  <td>
                    <h4>风速</h4>
                  </td>
                  <td>
                    <span>{data.now.windSpeed} km/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>风向</h4>
                  </td>
                  <td>
                    <span>
                      {data.now.windDir}
                      {/* <sup>o</sup>  */}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>体感温度</h4>
                  </td>
                  <td>
                    <span>
                      {data.now.feelsLike}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>露点温度</h4>
                  </td>
                  <td>
                    <span>
                      {data.now.dew}
                    </span>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
}

export default DisplayWeather;
