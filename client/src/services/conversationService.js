import swal from "sweetalert";
import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030';

export const getConversation = async (userId) => {
    try {
        const result = await get(`${baseUrl}/conversation/${userId}`);
        return result;
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
         });
    }
}

export const makeConversation = async(senderId, receiverId) => {
    try {
        let result = await post(`${baseUrl}/conversation`, {senderId, receiverId});
        return result;
    } catch (error) {
        swal({
            icon: "error",
            text: error.message,
        });
    }
}