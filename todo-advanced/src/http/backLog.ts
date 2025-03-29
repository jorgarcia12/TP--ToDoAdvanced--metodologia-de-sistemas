import axios from "axios";
import { ITarea } from "../types/ITarea";
import { IBacklog } from "../types/IBacklog";
import { API_URL } from "../utils/constantes";

export const putBacklog = async(tareas: ITarea[]) => {
    try{
        const response = await axios.put<IBacklog[]>(API_URL, {tareas: tareas})

        return response.data
    }catch(error){
        console.log("Algo salio mal al editar las tareas del backlog, " + error)
    }
}