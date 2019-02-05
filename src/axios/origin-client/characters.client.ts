import { originClient } from ".";
import Character from "src/model/character.model";

const charactersContext = '/characters'
const urls = {
  findByCreator: (creator: string) => `${charactersContext}/creator/${creator}`
}

export const charactersClient = {
  findByCreator(creator: string) {
    return originClient.get<Character[]>(urls.findByCreator(creator));
  }
}