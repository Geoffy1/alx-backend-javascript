export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(val) {
    this._brand = val;
  }

  get motor() {
    return this._motor;
  }

  set motor(val) {
    this._motor = val;
  }

  get color() {
    return this._color;
  }

  set color(val) {
    this._color = val;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this._brand, this._motor, this._color);
  }
  
  [Symbol.species]() {
    return this.constructor;
  }
}
