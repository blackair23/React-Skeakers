import { Link } from 'react-router-dom';
import { login } from '../services/authService';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext'; 
import { useEmailValidator, useMinLenght } from '../hooks/useValidation';
import swal from 'sweetalert';

export const Login = ({onClose}) => {
    const { userLogin } = useContext(AuthContext);
    const [emailErr, setEmailErr] = useEmailValidator({});
    const [lengthErr, setLengthErr] = useMinLenght({});
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await login(values.email, values.password);
            userLogin(data);
            onClose();
            navigate('/');
            
        } catch (error) {
            swal({
                icon: "error",
                text: error.message,
             });
        }
    }
    return (
        <>
        <div id="overlay">
        <div className="backdrop" onClick={onClose}></div>
            <div className="form-popup login">
                <img src="/removed-Background.png" alt=""/>
                <div className="form-part">
                    <button onClick={onClose} className="close-btn"><i className="fa-solid fa-xmark"></i></button>
                    <form onSubmit={onSubmit}>
                        <h2>Log in</h2>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            {emailErr.email && 
                            <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Enter valid email!</p>
                            } 
                            <input type="text" id="email" name="email" placeholder="Enter email" value={values.email} onChange={onChangeHandler}  onBlur={(e) => setEmailErr(e, values)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            {lengthErr.password && 
                            <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Password must be atleast 3 charter!</p>
                            }
                            <input type="password" id="password" name="password" placeholder="Enter password" value={values.password} onChange={onChangeHandler} onBlur={(e) => setLengthErr(e, 2, values)}/>
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