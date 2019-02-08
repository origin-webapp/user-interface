import Character from './character.model';

export default class CharacterStats {

  id: number = 0;

  fighting = 0;

  agility = 0;

  dexterity = 0;

  endurance = 0;

  strength = 0;

  reason = 0;

  intuition = 0;

  psyche = 0;

  character?: Character;

  characterId = 0;

  // constructor(id = 0, name = '', rank = 0, mechanic?: PowerMechanic) {
  //   super();
  //   this.id = id;
  //   this.name = name;
  //   this.rank = rank;
  //   this.mechanic = mechanic ? mechanic : new PowerMechanic();
  // }
}