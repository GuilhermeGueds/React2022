import { Cycle } from "./reducer";

export enum ActinsType {
  ADD_NEW_CYCLE = "ADD_NEW_CYCLE",
  INTERRUPT_CURRENT_CYCLE = "INTERRUPT_CURRENT_CYCLE",
  MARK_CURRENT_AS_CYCLE_FINISH = "MARK_CURRENT_AS_CYCLE_FINISH",
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActinsType.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  };
}

export function interrupteCurrentCycleAction() {
  return {
    type: ActinsType.INTERRUPT_CURRENT_CYCLE,
  };
}

export function markCurrentNewCycleFinishedAction() {
  return {
    type: ActinsType.MARK_CURRENT_AS_CYCLE_FINISH,
  };
}
