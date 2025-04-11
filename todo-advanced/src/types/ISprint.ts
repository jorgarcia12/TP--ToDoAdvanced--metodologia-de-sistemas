import { ITarea } from "./ITarea";

export interface ISprint{
    id?: string,
    fechaInicio: string,
    fechaCierre: string,
    nombre: string,
    tareas?: ITarea[]
}