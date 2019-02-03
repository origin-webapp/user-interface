import { PowerMechanic } from "./power-mechanic.model";

export class Power {
  public id: number;
  public name: string;
  public level: number;
  public mechanic: PowerMechanic;

  constructor(id?: number, name?: string, level?: number, mechanic?: PowerMechanic) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.level = level ? level : 0;
    this.mechanic = mechanic ? mechanic : new PowerMechanic();
  }
}