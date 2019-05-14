import { PowerMechanic } from './power-mechanic.model';
import Character from './character.model';

export class Power {

  constructor(
    public id = 0,
    public name = '',
    public rank = 0,
    public characterId = 0,
    public character?: Character,
    public mechanic?: PowerMechanic
  ) { }
}