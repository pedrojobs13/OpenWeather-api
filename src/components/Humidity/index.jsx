import { React } from "react";
import "./style.css";
export function Humidity({humidity, description, feels_like }) {
  return (
    <main className="description">
      <div className="description_colaction">
        <h3>Umidade</h3>
        <p>{humidity} %</p>
      </div>
      <div className="description_colaction">
        <h3>Sensação Térmica</h3>
        <p>{feels_like} C°</p>
      </div>
      <div className="description_colaction">
        <h3>Descrição</h3>
        <p>{description}</p>
      </div>
    </main>
  );
}
