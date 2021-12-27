import React from "react";
import { useState } from "react/cjs/react.development";
import { postRequest } from "../../servces";
import '../AQI/style.css';

const AQI = () => {
  const [pollutant, setPollutant] = useState("PM10");
  const [concentration, setConcentration] = useState();
  const [unit, setUnit] = useState("");
  const [aqi, setAqi] = useState();
  const [aqiCategry, setAqiCategory] = useState();
  const [cautionStatements, setCautionStatements] = useState();
  const [color, setColor] = useState();

  const pollutants = ["PM10", "PM2.5", "CO", "N2O", "O3", "SO2", "NH3", "PB"];

  const handleCalculate = async () => {
    let result = await postRequest("/aqi/aqi-calculator", {
      pollutant,
      concentration,
    });
    if(result?.data?.payload?.result >= 0){
        setAqi(result.data.payload.result);
        setAqiCategory(result.data.payload.category.concern);
        setColor(result.data.payload.category.color);
        setCautionStatements(result.data.payload.category.statement);
    }
    console.log(result);
  };
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-6">
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <h3 className="text-dark fw-bold">AQI Calculator</h3>
          <hr />
          <label htmlFor="pollutantName" className="form-label">
            Select a Pollutant:
          </label>
          <select
            type="text"
            name="pollutantName"
            value={pollutant}
            onChange={(e) => setPollutant(e.target.value)}
            className="form-control"
          >
            {pollutants.map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </select>
          <label htmlFor="unit" className="form-label">
            Enter Unit:
          </label>
          <input
            type="text"
            name="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="form-control"
          />
          <label htmlFor="concentration" className="form-label">
            Enter Concentration:
          </label>
          <input
            type="number"
            name="concentration"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            className="form-control"
          />
          <div className="d-flex justify-content-center">
            <button
              type="submit"
              onClick={() => handleCalculate()}
              className="btn btn-primary my-3"
            >
              Calculate
            </button>
          </div>
          <hr />
          <label htmlFor="aqiValue" className="form-label">
            AQI:
          </label>
          <input
            type="text"
            name="aqiValue"
            value={aqi}
            disabled={true}
            className="form-control"
          />
          <label htmlFor="pollutantName" className="form-label">
            AQI Category:
          </label>
          <input
            type="text"
            name="pollutantName"
            value={aqiCategry}
            disabled={true}
            className={`form-control ${color}`}
          />
          <label htmlFor="cautionStatements" className="form-label">
            Cautionary Statements:
          </label>
          <textarea
            rows={5}
            name="cautionStatements"
            value={cautionStatements}
            disabled={true}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
};

export default AQI;
