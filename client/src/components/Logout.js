import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import { AuthContext } from "../context/authContext";

const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);

    useEffect(()=> {
        logout(user.accessToken).then(() => {
            userLogout();
            navigate('/');
        })
        .catch(() => {
            alert('Logout FAILED!')
        })
    });

    return null;
}

export default Logout;