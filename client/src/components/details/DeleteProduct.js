import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { deleteProduct } from "../../services/productService";
import './deleteProduct.css';
import swal from "sweetalert";

export const DeleteProduct = ({onClose}) => {
    const { id } = useParams();
    const { user } = useContext(AuthContext); 
    const navigate = useNavigate();

    const prodDelete = async (id, user) => {
        console.log('deleted')
        try {
            let respons = await  deleteProduct(id, user);
            console.log(respons);
            navigate('/');
            onClose();
            // return respons;
        } catch (error) {
            swal({
                icon: "error",
                text: error.message,
             }); 
        }
    }

    return (
        <div id="overlay">
        <div className="backdrop" onClick={onClose}></div>
            <div className="form-popup delete">
                <h2>Are you sure you want to delete this listing ?</h2>
                <div className="buttons-in-del">
                    <button onClick={() => prodDelete(id, user)} className="delete-buton">Delete</button>
                    <button onClick={onClose} className="primary-btn btn">Cancel</button>
                </div>
            </div>
        </div>
    )
}