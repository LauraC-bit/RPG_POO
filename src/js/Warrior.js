import Caracter from "./Caracter.js";

class Warrior extends Caracter {
  constructor() {
    super();
    this._rage = 80;
    this._weapon = null;
  }
  get weapon() {
    return this._weapon;
  }
  set weapon(in_weapon) {
    this._weapon = in_weapon;
  }
  get rage() {
    return this._rage;
  }
  set rage(in_rage) {
    this._rage = in_rage;
  }
}
export default Warrior;
