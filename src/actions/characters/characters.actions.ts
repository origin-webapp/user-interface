import { toast } from "react-toastify";
import { charactersStatsClient } from "../../axios/origin-client/character-stats.client";
import { powersClient } from "../../axios/origin-client/powers.client";
import CharacterStats from "../../model/character-stats.model";
import { Power } from "../../model/power.model";

export const characterTypes = {
  UPDATE_STATS: '[CHARACTERS] UPDATE_STATS',
  UPDATE_POWER: '[CHARACTERS] UPDATE_POWER',
  SAVE_POWER: '[CHARACTERS] SAVE_POWER',
  DELETE_POWER: '[CHARACTERS] DELETE_POWER'
}

export const updateStats = (stats: CharacterStats) =>  async (dispatch) => {
  try {
    const res = await charactersStatsClient.update(stats);
    dispatch({
      payload: {
        stats: res.data
      },
      type: characterTypes.UPDATE_STATS
    })
  } catch (err) {
    toast.error("Stats may not be successfully updated.");
  }
}

export const updatePower = (power: Power) =>  async (dispatch) => {
  try {
    const res = await powersClient.patch(power);
    dispatch({
      payload: {
        power: res.data
      },
      type: characterTypes.UPDATE_POWER
    })
  } catch (err) {
    toast.error("Failed to update power");
  }
}


export const addPower = (power: Power) =>  async (dispatch) => {
  try {
    const res = await powersClient.save(power);
    dispatch({
      payload: {
        power: res.data
      },
      type: characterTypes.SAVE_POWER
    })
  } catch (err) {
    toast.error("Failed to create a new power");
  }
}

export const deletePower = (powerId: number) =>  async (dispatch) => {
  try {
    const res = await powersClient.delete(powerId);
    dispatch({
      payload: {
        powerId
      },
      type: characterTypes.DELETE_POWER
    })
  } catch (err) {
    toast.error("Failed to delete power");
  }
}