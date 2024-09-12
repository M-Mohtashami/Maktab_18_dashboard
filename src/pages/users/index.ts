import { getUsers } from "../../api/text-axios"

export type QueryParamsType ={
    page:string,
    limit:string,
    search:string,
    brands:string
}

// type QuerySliceType = "page" | "limit" | "search" | "brands"
type QuerySliceType = keyof QueryParamsType

export default function usersPage(){
    const params:string = window.location.href?.split('?')[1]
    const query:string[] = params?.split('&')
    
    const queryParams : Partial<QueryParamsType> = {}
    query.map((item:string)=>{
        const [key,value] =<[QuerySliceType,string]> item.split('=') // [string,string]
        queryParams[key] = value 
    })
    
    const container = document.createElement('div');

    getUsers('/user',queryParams).then((users)=>{
       if(users) container.append(JSON.stringify(users.data,null,2))
    })

    return container
}