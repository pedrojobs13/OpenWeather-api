import { useEffect, useState } from "react";
import "./style.css";
export function Tempo() {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    function dataTime() {
      const minuto = new Date();
      setTemp(
        `0${minuto.getDate()} / 0${
          1 + minuto.getMonth()
        } / ${minuto.getFullYear()}`
      );
    }
    dataTime();
  },[]);
  return (
    <div className="container">
      <div className="tempo">
        <h2>{temp}</h2>
      </div>
    </div>
  );
}
