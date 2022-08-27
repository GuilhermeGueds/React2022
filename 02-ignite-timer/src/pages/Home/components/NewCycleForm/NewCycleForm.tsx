import { FormContainer, MinutesAmountInput, TaskInput } from "./style";
import * as zod from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string } from "zod";

// const newCycleFormValidationSchema = zod.object({
//   task: zod.string().min(1, "Informe a tarefa"),
//   minutesAmount: zod
//   .number()
//   .min(1, 'O ciclo precisa ser de no minimo 1 minuto')
//   .max(60), ' O ciclo preciza ser de no maximo 60 minutos',
// });

// type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

// export function NewCicleForm() {

//   const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
//     resolver: zodResolver(newCycleFormValidationSchema),
//     defaultValues: {
//       task: "",
//       minutesAmount: 0,
//     },
//   });

//   return (
//     <FormContainer>
//       <label htmlFor="">Vou trabalhar em</label>

//       <TaskInput
//         id="task"
//         list="task-sugestions"
//         placeholder="Dê um nome para o projeto"
//         disabled={!!activeCycle}
//         {...register("task")}
//       />
//       <datalist id="task-sugestions">
//         <option value="B1" />
//         <option value="B2" />
//       </datalist>

//       <label htmlFor="">durante</label>
//       <MinutesAmountInput
//         type="number"
//         id="minutesAmount"
//         placeholder="00"
//         disabled={!!activeCycle}
//         step={5}
//         min={1}
//         // max={60}
//         {...register("minutesAmount", { valueAsNumber: true })}
//       />

//       <span>Minutos</span>
//     </FormContainer>
//   );
// }
