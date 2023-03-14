import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030';

export const createOrder = async (order) => {
    try {
        const result =  await post(`${baseUrl}/order`, order)
        return result;
    } catch (error) {
        alert(error);
    }
}

export const getOrders = async (id) => {
    try {
        let result = await get(`${baseUrl}/order/${id}`)
        console.log(result);
        return result; 
    } catch (error) {
        console.log(error)
    }
}

export const getCustomerOrders = async (id) => {
    try {
        let result = await get(`${baseUrl}/order/seller/${id}`)
        console.log(result);
        return result; 
    } catch (error) {
        console.log(error)
    }
}