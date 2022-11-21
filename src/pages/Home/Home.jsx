import axios from "axios";

import { useEffect, useState } from "react";
import { Humidity } from "../../components/Humidity";
import { Tempo } from "../../components/Tempo";
import { NextHours } from "../../components/NextHours";
import "./style.css";

export function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Alegre,ES,BR&appid=61d493da40ec6d0f6e0bec09461e5e87&units=metric
  `;

  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData(url) {
      const user = await axios.get(url);
      setData({
        city: user.data.name,
        temp: user.data.main.temp.toFixed(),
        humidity: user.data.main.humidity,
        feels_like: user.data.main.feels_like.toFixed(),
        description: user.data.weather[0].description,
        icon: user.data.weather[0].icon,
      });
    }
    fetchData(url);
  }, []);
  const icon = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;

  return (
    <div className="background_image">
      <Tempo />
      <div className="color">
        <header className="header_temp">
          <div className="icon_temp">
            <h1>{data.city}</h1>
            <img src={icon} />
          </div>
          <h2>Temperatura: {data.temp} C°</h2>
        </header>
      </div>
      <Humidity
        humidity={data.humidity}
        feels_like={data.feels_like}
        description={data.description}
      />
    </div>
  );
}
