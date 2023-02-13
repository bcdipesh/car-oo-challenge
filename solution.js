'use strict';

// part one
// create a class for vehicle with the following properties:
// make, model and year
class Vehicle {
	constructor(make, model, year) {
		this.make = make;
		this.model = model;
		this.year = year;
	}

	// each vehicle instance should have access to a method called honk,
	// that returns the string "Beep"
	honk() {
		return 'Beep';
	}

	// each vehicle instance should have a method called toString, which
	// returns the string containing the make, model and year
	toString() {
		const { make, model, year } = this;

		return `The vehicle is a ${make} ${model} from ${year}.`;
	}
}

// part two
// create a class for a car that inherits from Vehicle
// and has the following property and value:
// numWheels: 4
class Car extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 4;
	}
}

// part three
// create a class for MotorCycle that inherits from vehicle
// and has the following property and value:
// numWheels: 2
// it should also contain a method named revEngine that returns "VROOM!!!"
class Motorcycle extends Vehicle {
	constructor(make, model, year) {
		super(make, model, year);
		this.numWheels = 2;
	}

	revEngine() {
		return 'VROOM!!!';
	}
}

// part four
// create a class for Garage
class Garage {
	constructor(capacity) {
		// represents the number of vehicles that will fit in the garage
		this.capacity = capacity;
		// represents array of vehicles present in the garage
		this.vehicles = [];
	}

	// method to add vehicle to the garage
	add(vehicle) {
		// check and proceed only if the passed value is of type Vehicle
		if (vehicle instanceof Vehicle) {
			// check and proceed only if the capacity is not full
			if (this.vehicles.length !== this.capacity) {
				this.vehicles.push(vehicle);
			} else {
				return "Sorry, we're full";
			}
		} else {
			return 'Only Vehicle are allowed in here!';
		}
	}
}
