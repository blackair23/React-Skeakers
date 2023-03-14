import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getCommentById = async (id) => {
    try {
        const result = await get(`${baseUrl}/data/comment/${id}`)
        return result; 
    } catch (error) {
        console.log(error);
    }
}
export const createComment = async (comment) => {
    try {
        const result = await post(`${baseUrl}/data/comment`, comment)
        return result; 
    } catch (error) {
        console.log(error);
    }
}