import { originClient } from ".";
import Character from "../../model/character.model";
import { Power } from "../../model/power.model";

const powersContext = '/powers'

export const powersClient = {
  save(power: Power) {
    return originClient.post<Character>(powersContext, power);
  },
  patch(power: Partial<Power>) {
    return originClient.patch<Character>(powersContext, power);
  } 
}