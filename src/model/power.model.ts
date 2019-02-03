import { PowerMechanic } from "./power-mechanic.model";

export class Power {
  public id: number;
  public name: string;
  public rank: number;
  public mechanic: PowerMechanic;

  constructor(id = 0, name = '', rank = 0, mechanic?: PowerMechanic) {
    this.id = id;
    this.name = name;
    this.rank = rank;
    this.mechanic = mechanic ? mechanic : new PowerMechanic();
  }
}