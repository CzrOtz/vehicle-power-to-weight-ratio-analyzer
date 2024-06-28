
import './App.css';
import React, { useState } from 'react';



//   return (
//     <div>
//       <h1>Information</h1>
//       <p>This program is designed for a general understanding of power to weigth ratio on a vehcile</p>
//       <p>Currently the power to weight ratio is expressed as pounds per horsepower, inversly, it can also be defined
//         as horsepower per pound. The lower the number the better the performance of the vehicle. The power to weight ratio
//       </p>
//       <p>The scaling feature allows you to take the ratios of your engine, and increase them or decrease them.
//         for example: taking a 4 cylinder that produces 200 horsepower, i want to see what it makes with one cylinder, or 
//         what it makes if it had 6.2 litters of displacement. This feature allows for this function </p>

//       <p> The scaling feature is also useful for comparing two cars, 
//         if you have two cars that you want to compare, you can take the power to weight ratio of one car, and scale it to the other car.
//         This will give you a better understanding of the performance of the two cars. </p>

//         <p>Note: factors like drag coefficient, tire size, gear ratios, all affect a vehciles speed and acceleration.
//           two identical vehciles with different gear ratios will have different acceleration times.
//           two identical vehciles with different tire sizes will have different top speeds.
//           two identical vehciles with different drag coefficients will have different top speeds.
//         </p>




function Interface() {
  const [power, setPower] = useState("");
  const [weight, setWeight] = useState("");
  const [cylinder, setCylinder] = useState("");
  const [displacement, setDisplacement] = useState("");
  const [showGeneralResults, setShowGeneralResults] = useState(false);

  const [scaleCylinders, setScaleCylinders] = useState("");
  const [scaleDisplacement, setScaleDisplacement] = useState("");
  const [scaleWeight, setScaleWeight] = useState("");
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

  const GeneralDisplay = (power, weight, cylinder, displacement) => {
    return (
      <div>
        <div>Power to Weight Ratio: {powerToWeight(power, weight)}</div>
        <div>Power to Cylinder Ratio: {powerToCylinder(power, cylinder)}</div>
        <div>Power to Displacement Ratio: {powerToDisplacement(power, displacement)}</div>
      </div>
    );
  };

  const scalePowerPerLiter = (power, displacement, newDisplacement) => {
    return ((power / displacement) * newDisplacement).toFixed(2);
  };

  const scalePowerPerCylinder = (power, cylinder, newCylinders) => {
    return ((power / cylinder) * newCylinders).toFixed(2);
  };

  const scalePowerWeight = (power, weight, newWeight) => {
    return ((newWeight / power).toFixed(2));
  };

  const ScaleDisplay = (power, weight, cylinder, displacement, scaleCylinders, scaleDisplacement, scaleWeight) => {
    const scaledPowerByCylinders = scalePowerPerCylinder(power, cylinder, scaleCylinders);
    const scaledPowerByDisplacement = scalePowerPerLiter(power, displacement, scaleDisplacement);
    const scaledPowerByWeight = scalePowerWeight(power, weight, scaleWeight);

    return (
      <div>
        <div>Scaled Power by Cylinders: {scaledPowerByCylinders} HP</div>
        <div>Scaled Power by Displacement: {scaledPowerByDisplacement} HP</div>
        <div>Scaled Power by Weight: {scaledPowerByWeight} Ratio</div>
      </div>
    );
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    setShowGeneralResults(false); // Hide the general results when input changes
  };

  return (
    <div>
      <form>
        <div>Enter Power</div>
        <input type="text" value={power} placeholder="Set power" onChange={handleInputChange(setPower)} />

        <div>Enter Weight</div>
        <input type="text" value={weight} placeholder="Set weight" onChange={handleInputChange(setWeight)} />

        <div>Enter Cylinder</div>
        <input type="text" value={cylinder} placeholder="Set cylinder" onChange={handleInputChange(setCylinder)} />

        <div>Enter Displacement</div>
        <input type="text" value={displacement} placeholder="Set displacement" onChange={handleInputChange(setDisplacement)} />
      </form>
      <button onClick={() => setShowGeneralResults(true)}>Show General Results</button>

      {showGeneralResults && GeneralDisplay(power, weight, cylinder, displacement)}

      {/* Scaling Inputs */}
      <form>
        <div>Scale to Number of Cylinders</div>
        <input type="text" value={scaleCylinders} placeholder="Scale cylinders" onChange={(e) => setScaleCylinders(e.target.value)} />

        <div>Scale to Displacement</div>
        <input type="text" value={scaleDisplacement} placeholder="Scale displacement" onChange={(e) => setScaleDisplacement(e.target.value)} />

        <div>Scale to Weight</div>
        <input type="text" value={scaleWeight} placeholder="Scale weight" onChange={(e) => setScaleWeight(e.target.value)} />
      </form>
      <button onClick={() => setShowScaleResults(true)}>Show Scale Results</button>

      {showScaleResults && ScaleDisplay(power, weight, cylinder, displacement, scaleCylinders, scaleDisplacement, scaleWeight)}
    </div>
  );
}

function App() {
  return (
    <Interface />
  );
}

export default App;

