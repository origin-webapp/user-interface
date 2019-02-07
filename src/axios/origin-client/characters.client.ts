import { originClient } from ".";
import Character from "src/model/character.model";

const charactersContext = '/characters'
const urls = {
  findByCreator: (creator: string) => 
        charactersContext + `/creator/${creator}`,
  findById: (id: number) => 
        charactersContext + `/${id}`,
  save: charactersContext
}

export const charactersClient = {
  findByCreator(creator: string) {
    return originClient.get<Character[]>(urls.findByCreator(creator));
  },
  findById(id: number) {
    return originClient.get<Character[]>(urls.findById(id));
  },
  save(character: Character) {
    return originClient.post<Character>(urls.save, character);
  } 

}