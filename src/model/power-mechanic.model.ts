export class PowerMechanic {
  public id: number;
  public name: string;
  public description: string;
  public wellCostMultiplier: number;
  public healthCostMultiplier: number;
  public costScalesWithMaxAbility: boolean;

  constructor(id = 0, name = '', description = '', wellCostMultiplier = 0, healthCostMultiplier = 0, costScalesWithMaxAbility = false) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.wellCostMultiplier = wellCostMultiplier;
    this.healthCostMultiplier = healthCostMultiplier;
    this.costScalesWithMaxAbility = costScalesWithMaxAbility;
  }

}