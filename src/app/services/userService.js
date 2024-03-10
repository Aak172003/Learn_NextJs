import { httpAxios } from "@/helper/axiosHelper";


export async function addUser(user) {
    const result = await httpAxios.post("/api/users", user).then((response) => response.data)
    // response has 4 important things config , header , data , request , status , statusText
    console.log("from User service", result);

    return result

}