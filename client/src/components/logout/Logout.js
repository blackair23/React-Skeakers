import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authService";
import { AuthContext } from "../../context/authContext";
import swal from "sweetalert";

const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(()=> {
        logout(user.accessToken).then(() => {
            userLogout();
            navigate('/');
        })
        .catch(() => {
            swal({
                icon: "error",
                text: "Logout failed!",
             });
        })
    });

    return null;
}

export default Logout;