import axios from "axios";
import { QueryParamsType } from "../pages/users";

const BASE_URL = 'https://reqres.in/api'

type UserDataType = {
    username: string,
    id:string,
}

export async function getUsers(endpoint:string,params:Partial<QueryParamsType>){
    try {
        // const response = await axios(`${BASE_URL}${endpoint}?${params.page ? 'page='+ params.page +'&':''}${params.per_page ? 'per_page='+ params.per_page +'&':''}`)
        const response  = await axios<{data:UserDataType[]}>({
            baseURL:BASE_URL,
            url:endpoint,
            params:params
        })
        // const response = await fetch(`${BASE_URL}${endpoint}?${params.page ? 'page='+ params.page +'&':''}${params.per_page ? 'per_page='+ params.per_page +'&':''}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}