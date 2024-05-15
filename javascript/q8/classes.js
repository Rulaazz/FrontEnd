//1.1
class Trip {
  #destination;
  #duration;
  #distance;
  constructor(destination, duration, distance) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
  }
  get destination() {
    return this.#destination;
  }
  get duration() {
    return this.#duration;
  }
  get distance() {
    return this.#distance;
  }
  set destination(x) {
    this.#destination = `${x}`;
  }
  set duration(x) {
    this.#duration = `${x}`;
  }
  set distance(x) {
    this.#distance = `${x}`;
  }

  AddActivity(activity) {
    Trip.push(activity);
  }
  get calc() {
    return this.calculate();
  }
  // Method
  calculate() {
    return this.#distance * this.#duration;
  }
  DisplayDetails() {}
}

//3
class Traveler {
  #name;

  constructor(name) {
    this.#name = name;
  }

  get name() {
    if (#name in Traveler) return this.#name;
    return 'error name';
  }

  set name(newValue) {
    this.#name = newValue;
  }

  static create() {
    const plannerTrip = [];
    return plannerTrip;
  }
}
