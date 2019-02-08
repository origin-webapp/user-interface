import { originClient } from ".";
import Character from "../../model/character.model";
import CharacterStats from "../../model/character-stats.model";

const charactersContext = '/character-stats'

export const charactersStatsClient = {
  update(characterStats: CharacterStats) {
    return originClient.patch<CharacterStats>(charactersContext, characterStats);
  }
}