import { Power } from "./power.model";
import CharacterStats from "./character-stats.model";

export default class Character {

  id: number = 0;
  name: string = '';
  creator: string = ''; // email of the person who this character belongs to
  stats: CharacterStats = new CharacterStats();
  powers: Power[] = [];

}