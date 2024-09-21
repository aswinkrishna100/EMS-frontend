import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"

export const addUserAPI = async (user,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/adduser`,user,reqHeader)
}

export const getUserAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/getuser`,"",reqHeader)
}

export const editUserAPI = async(user,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/edituser`,user,reqHeader)
}

export const deleteUserAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/delete-user/${id}`,{},reqHeader)
}

export const addAdminAPI = async(admin)=>{
    return await commonAPI("POST",`${BASE_URL}/addadmin`,admin,"")
}

export const getAdminAPI = async(admin)=>{
    return await commonAPI("POST",`${BASE_URL}/admin/login`,admin,"")
}
