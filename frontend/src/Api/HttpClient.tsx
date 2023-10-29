import { APIResponse } from "../interfaces/API"
import { reqResApi } from "./config"

export const HttpClient = {
    get: async function <T>(url: string): Promise<APIResponse<T>> {
        const response = await reqResApi().get<APIResponse<T>>(url)
        const data = response.data
        return data
    },
    post: async function name<T,K>(url: string, body: K): Promise<APIResponse<T>> {
        const response = await reqResApi().post<APIResponse<T>>(url, body)
        const data = response.data
        return data
    },
    put: async function name<T,K>(url: string, body: K): Promise<APIResponse<T>> {
        const response = await reqResApi().put<APIResponse<T>>(url, body)
        const data = response.data
        return data
    }
}