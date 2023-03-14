import { post, put } from "./requester";

const baseUrl = 'http://localhost:3030';

export const registration = async (username, email, password) => {
    console.log('neshto ama register')
    try {
        const result = await post(`${baseUrl}/users/register`,{ username, email, password });
        return result;
    } catch (error) {
        alert(error)
    }
}

export const login = async (email, password) => {
    console.log('neshto')
    try {
        const result = await post(`${baseUrl}/users/login`, { email, password });
        return result;
    } catch (error) {
        alert(error)
    }
}

export const logout = async (accessToken) => {
    // get(`${baseUrl}/users/logout`)
    try {
        const respons = await fetch(`${baseUrl}/users/logout`, {
            headers: {
                'X-Authorization': accessToken,
            }
        });

        return respons;
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile = async (user, editData) => {
    try {
        const respons = await put(`${baseUrl}/users/${user._id}`, {
            headers: {
                'X-Authorization': user.accessToken,
            },
            body: editData,
        }); 
        return respons;
    } catch (error) {
        console.log(error);
    }
}