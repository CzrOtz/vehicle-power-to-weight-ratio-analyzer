import React, { useState } from 'react';


function Interface() {
  const [power, setPower] = useState("");
  const [weight, setWeight] = useState("");
  const [cylinder, setCylinder] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [scaleCylinders, setScaleCylinders] = useState(""); // State for scaled cylinders
  const [scaleDisplacement, setScaleDisplacement] = useState(""); // State for scaled displacement
  const [showGeneralResults, setShowGeneralResults] = useState(false);
  const [showScaleResults, setShowScaleResults] = useState(false);

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
      <div>
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
      <div>
        <div>Scaled Power by Cylinders: {scaledPowerByCylinders} HP</div>
        <div>Scaled Power by Displacement: {scaledPowerByDisplacement} HP</div>
      </div>
    );
  };

  const handleInputChange = (setter, setShowResults) => (e) => {
    setter(e.target.value);
    setShowGeneralResults(false); // Hide the general results when any input changes
    setShowResults(false); // Hide the scaled results when the scaling input changes
  };

  return (
    <div>
      <form>
        <div>Enter Power</div>
        <input type="text" value={power} placeholder="Set power" onChange={handleInputChange(setPower, setShowScaleResults)} />

        <div>Enter Weight</div>
        <input type="text" value={weight} placeholder="Set weight" onChange={handleInputChange(setWeight, setShowScaleResults)} />

        <div>Enter Cylinder</div>
        <input type="text" value={cylinder} placeholder="Set cylinder" onChange={handleInputChange(setCylinder, setShowScaleResults)} />

        <div>Enter Displacement</div>
        <input type="text" value={displacement} placeholder="Set displacement" onChange={handleInputChange(setDisplacement, setShowScaleResults)} />
      </form>
      <button onClick={() => setShowGeneralResults(true)}>Show General Results</button>

      {showGeneralResults && <GeneralDisplay />}

      {/* Scaling Inputs */}
      <form>
        <div>If this vehicle had {scaleCylinders} cylinders </div>
        <input
          type="text"
          value={scaleCylinders}
          placeholder="Scale cylinders"
          onChange={handleInputChange(setScaleCylinders, setShowScaleResults)}
        />

        <div>If this vehicle's engine was {scaleDisplacement} liters </div>
        <input
          type="text"
          value={scaleDisplacement}
          placeholder="Scale displacement"
          onChange={handleInputChange(setScaleDisplacement, setShowScaleResults)}
        />
      </form>
      <button onClick={() => setShowScaleResults(true)}>Show Scale Results</button>

      {showScaleResults && <ScaleDisplay />}
    </div>
  );
}

export default Interface;