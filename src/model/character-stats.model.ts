import Character from './character.model';

export default class CharacterStats {

  public id: number;

  public fighting: number;

  public agility: number;

  public dexterity: number;

  public endurance: number;

  public strength: number;

  public reason: number;

  public intuition: number;

  public psyche: number;

  public character?: Character;

  public characterId: number;

  // constructor(id = 0, name = '', rank = 0, mechanic?: PowerMechanic) {
  //   super();
  //   this.id = id;
  //   this.name = name;
  //   this.rank = rank;
  //   this.mechanic = mechanic ? mechanic : new PowerMechanic();
  // }
}