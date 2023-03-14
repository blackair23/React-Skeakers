import { get } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getProfileInfo = async (id) => {
    try {
        let profile = get(`${baseUrl}/users/${id}`);
        return profile; 
    } catch (error) {
        alert(error);
    }
}

export const getListedItems = async (ownerId) => {
    try {
        let listedItems = get(`${baseUrl}/data/catalog/profile/${ownerId}`);
        return listedItems;
    } catch (error) {
        alert(error);
    }
};