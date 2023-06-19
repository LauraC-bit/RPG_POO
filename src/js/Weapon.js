class Weapon {
  constructor(power, durability, weaponName) {
    this._power = power;
    this._durability = durability;
    this._weaponName = weaponName;
  }
  get power() {
    return this._power;
  }
  set power(in_power) {
    this._power = in_power;
  }

  get durability() {
    return this._durability;
  }
  set durability(in_durability) {
    this._durability = in_durability;
  }

  get weaponName() {
    return this._weaponName;
  }
  set weaponName(in_weaponName) {
    this._weaponName = in_weaponName;
  }

  repair(durability) {
    this.durability = durability;
  }
}
export default Weapon;
