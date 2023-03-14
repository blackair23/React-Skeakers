import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getHomeProducts = async () => {
    try {
        let result = get(`${baseUrl}/data/catalog/six`);
        return result; 
    } catch (error) {
        alert(error);
    }
}

export const create = async (productData) => {
    console.log('we go thrue here')
    try {
        const result =  await post(`${baseUrl}/data/catalog`, productData)
        return result;
    } catch (error) {
        alert(error);
    }
}

export const getProdById = async (id) => {
    try {
        const result = await get(`${baseUrl}/data/catalog/${id}`);
        return result;
    } catch (error) {
        console.log(error);
    }
}

