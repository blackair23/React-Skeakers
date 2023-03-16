import { del, get, post, put } from "./requester";
import swal from 'sweetalert';

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


export const editProduct = async (id, user, editData) => {

    try {
        const response = await put(`${baseUrl}/data/catalog/${id}`, {
            headers: {
                'X-Authorization': user.accessToken,
            },
            body: editData,
        });
        return response;

    } catch (error) {
        swal({
           icon: "error",
           text: error.message,
        });
    }
};

export const deleteProduct = async (id, user) => {
    try {
        let response = await del(`${baseUrl}/data/catalog/${id}`, {
            headers: {
                'X-Authorization': user.accessToken,
            }
        });
        return response;
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
         }); 
    }
}