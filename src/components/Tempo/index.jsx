import { useEffect, useState } from "react";
import "./style.css";
export function Tempo() {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    function dataTime() {
      const minuto = new Date();
      function sobZero(minuto) {
        if (minuto.getDate() < 10) {
          return `0${minuto.getDate()}`;
        } else {
          return `${minuto.getDate()}`;
        }
      }
      function sobZeroMonth(minuto) {
        if (minuto.getMonth() < 10) {
          return `0${minuto.getMonth()}`;
        } else {
          return `${minuto.getMonth()}`;
        }
      }
      setTemp(
        `${sobZero(minuto)} / ${
          1 + Number(sobZeroMonth(minuto))
        } / ${minuto.getFullYear()}`
      );
    }
    dataTime();
  }, []);
  return (
    <div className="container">
      <div className="tempo">
        <h2>{temp}</h2>
      </div>
    </div>
  );
}
