import { originClient } from ".";
import Character from "../../model/character.model";

const charactersContext = '/characters'

export const charactersClient = {
  findByCreator(creator: string) {
    return originClient.get<Character>(charactersContext + `/creator/${creator}`);
  },
  findById(id: number) {
    return originClient.get<Character[]>(charactersContext + `/${id}`,);
  },
  save(character: Character) {
    return originClient.post<Character>(charactersContext, character);
  },
  update(character: Partial<Character>) {
    return originClient.patch<Character>(charactersContext, character);
  },
  delete(characterId: number) {
    return originClient.delete(charactersContext + `/${characterId}`);
  }
}