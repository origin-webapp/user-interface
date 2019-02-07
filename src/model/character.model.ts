import { Power } from "./power.model";
import CharacterStats from "./character-stats.model";

export default class Character {

  public id: number;
  public name: string;
  public creator: string; // email of the person who this character belongs to
  public stats: CharacterStats;
  public powers: Power[];

}