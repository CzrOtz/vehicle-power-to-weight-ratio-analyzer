import React, { useState } from 'react';
import '../styles/interfaceStyles.css';

function Interface() {
  const [power, setPower] = useState("");
  const [weight, setWeight] = useState("");
  const [cylinder, setCylinder] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [scaleCylinders, setScaleCylinders] = useState(""); // State for scaled cylinders
  const [scaleDisplacement, setScaleDisplacement] = useState(""); // State for scaled displacement
  const [showGeneralResults, setShowGeneralResults] = useState(false);
  const [showScaleResults, setShowScaleResults] = useState(false);
  const [error, setError] = useState(""); // State for error message

  const powerToWeight = (power, weight) => {
    return (Number(weight) / Number(power)).toFixed(2);
  };

  const powerToCylinder = (power, cylinder) => {
    return (Number(power) / Number(cylinder)).toFixed(2);
  };

  const powerToDisplacement = (power, displacement) => {
    return (Number(power) / Number(displacement)).toFixed(2);
  };

  const GeneralDisplay = () => {
    return (
      <div id="general-results" className="results">
        <div>Power to Weight Ratio: {powerToWeight(power, weight)}</div>
        <div>Power to Cylinder Ratio: {powerToCylinder(power, cylinder)}</div>
        <div>Power to Displacement Ratio: {powerToDisplacement(power, displacement)}</div>
      </div>
    );
  };

  const scalePowerPerLiter = (power, displacement, scaleDisplacement) => {
    const newPower = powerToDisplacement(power, displacement) * scaleDisplacement;
    return newPower.toFixed(2);
  };

  const scalePowerPerCylinder = (power, cylinder, scaleCylinders) => {
    const newPower = powerToCylinder(power, cylinder) * scaleCylinders;
    return newPower.toFixed(2);
  };

  const ScaleDisplay = () => {
    const scaledPowerByCylinders = scalePowerPerCylinder(power, cylinder, scaleCylinders);
    const scaledPowerByDisplacement = scalePowerPerLiter(power, displacement, scaleDisplacement);

    return (
      <div id="scale-results" className="results">
        <div>Scaled Power by Cylinders: {scaledPowerByCylinders} HP</div>
        <div>Scaled Power by Displacement: {scaledPowerByDisplacement} HP</div>
      </div>
    );
  };

  const handleInputChange = (setter, setShowResults) => (e) => {
    const value = e.target.value;
    if (!/^\d*\.?\d*$/.test(value)) {
      setError("Enter numbers only");
      setter("");
    } else {
      setError("");
      setter(value);
    }
    setShowGeneralResults(false); // Hide the general results when any input changes
    setShowResults(false); // Hide the scaled results when the scaling input changes
  };

  return (
    <div id="interface">
      {/* <nav className="navbar">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Info</button>
        <button className="navbar-button">Interface</button>
      </nav> */}

      <form id="general-inputs" className="input-form">
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="power">Enter Power</label>
          <input id="power" className="input" type="text" value={power} placeholder="Set power" onChange={handleInputChange(setPower, setShowScaleResults)} />
        </div>

        <div className="input-group">
          <label htmlFor="weight">Enter Weight</label>
          <input id="weight" className="input" type="text" value={weight} placeholder="Set weight" onChange={handleInputChange(setWeight, setShowScaleResults)} />
        </div>

        <div className="input-group">
          <label htmlFor="cylinder">Enter Cylinder</label>
          <input id="cylinder" className="input" type="text" value={cylinder} placeholder="Set cylinder" onChange={handleInputChange(setCylinder, setShowScaleResults)} />
        </div>

        <div className="input-group">
          <label htmlFor="displacement">Enter Displacement</label>
          <input id="displacement" className="input" type="text" value={displacement} placeholder="Set displacement" onChange={handleInputChange(setDisplacement, setShowScaleResults)} />
        </div>
      </form>
      <button id="show-general-results" className="button" onClick={() => setShowGeneralResults(true)}>Show General Results</button>

      {showGeneralResults && <GeneralDisplay />}

      {/* Scaling Inputs */}
      <form id="scale-inputs" className="input-form">
        <div className="input-group">
          <label htmlFor="scale-cylinders">If this vehicle had {scaleCylinders} cylinders </label>
          <input
            id="scale-cylinders"
            className="input"
            type="text"
            value={scaleCylinders}
            placeholder="Scale cylinders"
            onChange={handleInputChange(setScaleCylinders, setShowScaleResults)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="scale-displacement">If this vehicle's engine was {scaleDisplacement} liters </label>
          <input
            id="scale-displacement"
            className="input"
            type="text"
            value={scaleDisplacement}
            placeholder="Scale displacement"
            onChange={handleInputChange(setScaleDisplacement, setShowScaleResults)}
          />
        </div>
      </form>
      <button id="show-scale-results" className="button" style={{ marginTop: '40px' }} onClick={() => setShowScaleResults(true)}>Show Scale Results</button>

      {showScaleResults && <ScaleDisplay />}
    </div>
  );
}

export default Interface;


