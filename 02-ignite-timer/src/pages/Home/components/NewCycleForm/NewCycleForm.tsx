import { FormContainer, MinutesAmountInput, TaskInput } from "./style";

import { useContext } from "react";
import { CyclesContext } from "../..";
import { useFormContext } from "react-hook-form";

export function NewCicleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();
  return (
    <FormContainer>
      <label htmlFor="">Vou trabalhar em</label>

      <TaskInput
        id="task"
        list="task-sugestions"
        placeholder="Dê um nome para o projeto"
        disabled={!!activeCycle}
        {...register("task")}
      />
      <datalist id="task-sugestions">
        <option value="B1" />
        <option value="B2" />
      </datalist>

      <label htmlFor="">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        disabled={!!activeCycle}
        step={5}
        min={1}
        // max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />

      <span>Minutos</span>
    </FormContainer>
  );
}
