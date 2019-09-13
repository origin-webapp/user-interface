import { toast } from "react-toastify";
import { powerMechanicsClient } from "../../axios/origin-client/power-mechanics.client";

export const powerMechanicsTypes = {
  loadAll: '[Power Mechanics] Load All',
}

export const loadAllPowerMechanics = () => async (dispatch) => {
  try {
    const res = await powerMechanicsClient.getAll();
    dispatch({
      payload: {
        powerMechanics: res.data
      },
      type: powerMechanicsTypes.loadAll
    })
  } catch (err) {
    toast.error("Failed to load power mechanics");
  }
}