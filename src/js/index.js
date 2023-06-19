import Mage from "./Mage.js";
import Weapon from "./Weapon.js";
import Warrior from "./Warrior.js";
import Rogue from "./Rogue.js";
import { chopped_dura, dagger_dura, stick_dura } from "./constants.js";

const main = () => {
  const mage = new Mage();
  const warrior = new Warrior();
  const rogue = new Rogue();
  const magicweapon = new Weapon(150, stick_dura, "MagicStick");
  const strongweapon = new Weapon(250, chopped_dura, "Chopped");
  const stealthweapon = new Weapon(200, dagger_dura, "Dagger");

  mage.weapon = magicweapon;
  warrior.weapon = strongweapon;
  rogue.weapon = stealthweapon;

  mage.weapon.repair(stick_dura);

  console.log(mage, warrior, rogue);
  mage.attack("Mage");
  warrior.attack("Warrior");
  rogue.attack("Rogue");
};

window.addEventListener("load", main);
