import { Link } from 'react-router-dom';
import { login } from '../services/authService';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; 

export const Login = ({onClose}) => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));
        console.log(email, password);
        
        try {
            const data = await login(email, password);
            // console.log('datata', data);
            userLogin(data);
            onClose();
            navigate('/');
            
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <>
        <div id="overlay">
        <div className="backdrop" onClick={onClose}></div>
            <div className="form-popup login">
                <img src="/removed-Background.png" alt=""/>
                <div className="form-part">
                    {/* <Link to="/"><div className="close-btn"><i className="fa-solid fa-xmark"></i></div></Link>  */}
                    {/* <div  ></div> */}
                    <button onClick={onClose} className="close-btn"><i className="fa-solid fa-xmark"></i></button>
                    <form onSubmit={onSubmit}>
                        <h2>Log in</h2>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter password"/>
                        </div>
                        <input className="btn primary-btn" type="submit" value="Log in"/>
                    </form>
                    <span>Don't have an acount? <Link href="/register">Sign up</Link></span> 
                </div>
            </div>
        </div>
        </>
    );
};