import swal from "sweetalert"
import { get, post } from "./requester";
const baseUrl = 'http://localhost:3030';

export const getMessages =  async (conversationId) => {
    try {
        let result = await get(`${baseUrl}/message/${conversationId}`);
        return result;
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
         });
    }
}

export const sendMessage = async (message) => {
    try {
        let result = await post(`${baseUrl}/message`, message);
        return result;
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
        });  
    }
}