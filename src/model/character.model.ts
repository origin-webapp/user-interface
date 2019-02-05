import { IMyCharactersState } from "../reducers";
import { Power } from "./power.model";

export default class Character {

  public id: number;
  public name: string;
  public creator: string; // email of the person who this character belongs to
  public stats: IMyCharactersState;
  public powers: Power[];

}