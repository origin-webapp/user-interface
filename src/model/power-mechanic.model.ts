export class PowerMechanic {
  public id: number;
  public name: string;
  public description: string;
  public wellCost: number;
  public healthCost: number;

  constructor(id?: number, name?: string, description?: string, wellCost?: number, healthCost?: number) {
    this.id = id ? id : 0;
    this.name = name ? name : '';
    this.description = description ? description : '';
    this.wellCost = wellCost ? wellCost : 0;
    this.healthCost = healthCost ? healthCost : 0;
  }

}