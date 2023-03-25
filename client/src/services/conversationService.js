import swal from "sweetalert";
import { get } from "./requester";

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