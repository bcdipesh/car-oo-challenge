describe('Car OO Challenge Solution test', () => {
	beforeEach(() => {
		// initialization logic
		testVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
		testCar = new Car('Toyota', 'Corolla', 2005);
		testMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);
		testGarage = new Garage(2);
	});

	it('Vehicle Object should have property called make, model and year', () => {
		expect(testVehicle.hasOwnProperty('make')).toBe(true);
		expect(testVehicle.hasOwnProperty('model')).toBe(true);
		expect(testVehicle.hasOwnProperty('year')).toBe(true);
	});

	it("Vehicle Object should return 'Beep' when method honk is called", () =>
		expect(testVehicle.honk()).toBe('Beep'));

	it('Vehicle Object should return string containing make, model and year when method toString is called', () =>
		expect(testVehicle.toString()).toBe(
			'The vehicle is a Honda Monster Truck from 1999.'
		));

	it('Car Object should inherit from Vehicle', () =>
		expect(testCar instanceof Vehicle).toBe(true));

	it('Car Object should have property numWheels set to 4', () =>
		expect(testCar.numWheels).toBe(4));

	it("Car Object should return 'Beep' when method honk is called", () =>
		expect(testCar.honk()).toBe('Beep'));

	it('Motorcycle Object should inherit from Vehicle', () =>
		expect(testMotorcycle instanceof Vehicle).toBe(true));

	it('Motorcycle Object should have property numWheels set to 2', () =>
		expect(testMotorcycle.numWheels).toBe(2));

	it("Motorcycle Object should have method revEngine that returns 'VROOM!!!' when called", () =>
		expect(testMotorcycle.revEngine()).toBe('VROOM!!!'));

	it("Motorcycle Object should return 'Beep' when method honk is called", () =>
		expect(testMotorcycle.honk()).toBe('Beep'));

	it('Garage Object should have property vehicles of type array', () => {
		expect(testGarage.hasOwnProperty('vehicles')).toBe(true);
		expect(Array.isArray(testGarage.vehicles)).toBe(true);
	});

	it('Garage Object should have property called capacity', () => {
		expect(testGarage.hasOwnProperty('capacity')).toBe(true);
		expect(testGarage.capacity).toBe(2);
	});

	it('Garage Object should have method called add that adds vehicles to the vehicles array', () => {
		testGarage.add(new Car('Hyundai', 'Elantra', 2015));

		expect(testGarage.vehicles.length).toBe(1);
	});

	it('Garage Object should only allow Vehicle types to be added when add method is called', () => {
		expect(testGarage.add('Taco')).toBe(
			'Only Vehicle are allowed in here!'
		);
		expect(testGarage.vehicles.length).toBe(0);
	});

	it('Garage Object should not add vehicles more than its capacity', () => {
		expect(testGarage.capacity).toBe(2);

		testGarage.add(new Motorcycle('Honda', 'Nighthawk', 2001));
		testGarage.add(new Car('Hyundai', 'Elantra', 2015));

		expect(testGarage.vehicles.length).toBe(2);

		expect(testGarage.add(new Motorcycle('Honda', 'Nighthawk', 2001))).toBe(
			"Sorry, we're full"
		);
		expect(testGarage.vehicles.length).toBe(2);
	});
});
