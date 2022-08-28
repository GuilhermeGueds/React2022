import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addNewCycleAction,
  interrupteCurrentCycleAction,
  markCurrentNewCycleFinishedAction,
} from "../reducers/cycles/actions";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  setSecondsPassed: (seconds: number) => void;
  markCurrentCycleAsFinished: () => void;
  interruptCurrentCycle: () => void;
  createNewCycle: (data: CreateCycleData) => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProvideProps {
  children: ReactNode;
}

export function CyclesContextProvider({ children }: CyclesContextProvideProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,

    {
      cycles: [],
      activeCycleId: null,
    }
  );

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { cycles, activeCycleId } = cyclesState;

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState);

    localStorage.setItem("@ignite-timer: cycles-state-1.0.0", stateJSON);
  }, [cyclesState]);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentNewCycleFinishedAction());
  }
  function interruptCurrentCycle() {
    dispatch(interrupteCurrentCycleAction());
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch(addNewCycleAction(newCycle));

    setAmountSecondsPassed(0);
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}
