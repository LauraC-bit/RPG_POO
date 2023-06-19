import Caracter from "./Caracter.js";

class Mage extends Caracter {
  constructor() {
    super();
    this._mana = 100;
    this._weapon = null;
  }

  get weapon() {
    return this._weapon;
  }
  set weapon(in_weapon) {
    this._weapon = in_weapon;
  }

  get mana() {
    return this._mana;
  }
  set mana(in_mana) {
    this._mana = in_mana;
  }
}
export default Mage;
