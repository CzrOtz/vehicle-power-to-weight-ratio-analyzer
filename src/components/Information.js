function Information() {
    return (
      <div>
        <h1>Information</h1>
        <p>
          This program is designed to provide a general understanding of the power-to-weight ratio in vehicles.
        </p>
        <p>
          The power-to-weight ratio is expressed as pounds per horsepower, or inversely as horsepower per pound.
          This program expresses the power-to-weight ratio as pounds per horsepower for readability.
          For example, every horsepower in your vehicle carries x ammount of pounds.
          Note: Leter Versions will include the option to change between pounds per horsepower and horsepower per pound.
        </p>
        <p>
          The scaling feature allows you to adjust the engine ratios of your vehicle.
          For example, you can simulate the performance of a 2.0 litter 4-cylinder engine producing 200 horsepower with only one cylinder.
          You can also see how the same 2.0 litter 4-cylinder would perform if it was a 6.2 litter 8 cylinder and everything in beteen.

        </p>
        <p>
          Note: Factors such as drag coefficient, tire size, and gear ratios significantly affect a vehicle's speed and acceleration.
          Two identical vehicles with different gear ratios will have different acceleration times.
          Similarly, vehicles with different tire sizes or drag coefficients will exhibit variations in top speeds.
        </p>

        <p>
            Later releases will include the option to compare two vehciles side by side based on these factors.
        </p>

        <p>This program was develped for educational purpuces.</p>
      </div>
    );
  }

export default Information;