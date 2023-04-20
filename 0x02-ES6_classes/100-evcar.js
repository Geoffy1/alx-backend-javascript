import { Car } from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(val) {
    this._range = val;
  }

  cloneCar() {
    const car = super.cloneCar();
    const newCar = new Car(car.brand, car.motor, car.color);
    return newCar;
  }
}
