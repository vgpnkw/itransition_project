import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createCountry = async (country) => {
    const {data} = await $authHost.post('api/country', country)
    return data
}

export const fetchCountries = async () => {
    const {data} = await $host.get('api/country' )
    return data
}

export const createCompany = async (company) => {
    const {data} = await $authHost.post('api/company', company)
    return data
}

// export const fetchCompanies = async (typeId, brandId, page, limit= 5) => {
//     const {data} = await $host.get('api/company', {params: {
//             typeId, brandId, page, limit
//         }})
//     return data
// }

export const fetchCompanies = async (typeId, brandId) => {
    const {data} = await $host.get('api/company', {params: {
            typeId, brandId
        }})
    return data
}

export const fetchOneCompany = async (id) => {
    const {data} = await $host.get('api/company/' + id)
    return data
}
