import axios from "axios";
import { useState, useEffect } from "react";

export function NextHours() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=-20.7636&lon=-41.5331&cnt=3&appid=61d493da40ec6d0f6e0bec09461e5e87&units=metric`;

  const [data, setData] = useState({});

  useEffect(() => {
    async function useEffectData(value) {
      const weather = await axios.get(value);
      setData({
        lista: weather.data.list.map((lista) => lista.main.temp),
      });
    }
    useEffectData(url);
  }, []);

  return (
    <>
      <>{data.lista}</>
    </>
  );
}
