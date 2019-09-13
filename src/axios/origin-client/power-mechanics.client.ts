import { originClient } from ".";
import Character from "../../model/character.model";
import { Power } from "../../model/power.model";
import { PowerMechanic } from "../../model/power-mechanic.model";

const powerMechanicsContext = '/power-mechanics'

export const powerMechanicsClient = {
  getAll() {
    return originClient.get<PowerMechanic[]>(powerMechanicsContext);
  }
}