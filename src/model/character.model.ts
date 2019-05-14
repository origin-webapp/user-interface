import CharacterStats from "./character-stats.model";
import { Power } from "./power.model";

export default class Character {

  constructor(
    public id: number = 0,
    public name: string = '',
    public creator: string = '', // email of the person who this character belongs to
    public stats: CharacterStats = new CharacterStats(),
    public powers: Power[] = []) { }

}