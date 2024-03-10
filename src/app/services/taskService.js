import { httpAxios } from "@/helper/axiosHelper";

export async function addTask(task) {
    const result = await httpAxios.post("/api/tasks", task).then((response) => response.data)
    // response has 4 important things config , header , data , request , status , statusText
    console.log("from service", result);

    return result

}