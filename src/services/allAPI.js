import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const addUserAPI = async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/adduser`,user,"")
}
