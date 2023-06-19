import Caracter from "./Caracter.js";

class Rogue extends Caracter {
  constructor() {
    super();
    this._energy = 150;
    this._weapon = null;
  }
  get weapon() {
    return this._weapon;
  }
  set weapon(in_weapon) {
    this._weapon = in_weapon;
  }
  get energy() {
    return this._energy;
  }
  set energy(in_energy) {
    this._energy = in_energy;
  }
}
export default Rogue;
