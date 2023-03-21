import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { registration } from '../services/authService';
import swal from 'sweetalert';


export const Register = ({onClose}) => {
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();


        const {
            email,
            username,
            password,
            repass,
        } = Object.fromEntries(new FormData(e.target));

        if(password !== repass) {
            swal({
                icon: "warning",
                text: "Paswords don't match",
             });
            return;
        }
        
        registration(username, email, password)
            .then(authData => {
                console.log(authData);
                userLogin(authData);
                onClose();
                navigate('/');
            })
            .catch(() => {
                swal({
                    icon: "error",
                    text: "Unsuccesful register!",
                });
            })
    }
    return (
        <div id="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="form-popup register">
                <img src="/removed-Background.png" alt=""/>
                <div className="form-part">
                    {/* <Link to="/"><div className="close-btn"><i className="fa-solid fa-xmark"></i></div></Link>  */}
                    <button onClick={onClose} className="close-btn"><i className="fa-solid fa-xmark"></i></button>
                    <form onSubmit={onSubmit}>
                        <h2>Register</h2>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter username"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter password"/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="repass">Repeat password</label>
                            <input type="password" id="repass" name="repass" placeholder="Repeat password"/>
                        </div>
                        <input className="btn primary-btn" type="submit" value="Sign up"/>
                    </form>
                    <span>Already have an acount? <Link href="/login">Sign in</Link></span> 
                </div>
            </div>
        </div>
    );
};