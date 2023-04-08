import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/authContext"
import { Outlet, useNavigate } from "react-router-dom";


export const Guard = () => {
    const navigate = useNavigate();
    const { user } =  useContext(AuthContext);
    useEffect(() => {
        if(!user.username){
            navigate('/')
        }
    }, [user, navigate])

    return (user.username ? <Outlet></Outlet> :  null)
}

