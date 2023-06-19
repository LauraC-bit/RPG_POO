class Caracter {
  constructor() {
    this._hp = 100;
    this._lvl = 1;
  }
  get hp() {
    return this._hp;
  }
  set hp(in_hp) {
    this._hp = in_hp;
  }

  get lvl() {
    return this._lvl;
  }
  set lvl(in_lvl) {
    this._lvl = in_lvl;
  }

  attack(firstName) {
    console.log(`${firstName} attacks`);
  }
}
export default Caracter;
