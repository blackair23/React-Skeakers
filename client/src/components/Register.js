import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/authContext';
import { registration } from '../services/authService';
import swal from 'sweetalert';
import { useMinLenght, useEmailValidator } from '../hooks/useValidation';

export const Register = ({onClose}) => {
    const {userLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const [emailError, setEmailError] = useEmailValidator({});
    const [lengthError, setLengthError] = useMinLenght({});
    const [values, setValues] = useState({
        email: '',
        username: '',
        password: '',
        repass: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}));
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();


        // const {
        //     email,
        //     username,
        //     password,
        //     repass,
        // } = Object.fromEntries(new FormData(e.target));

        if(values.password !== values.repass) {
            swal({
                icon: "warning",
                text: "Paswords don't match",
             });
            return;
        }
        
        registration(values.username, values.email, values.password)
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
                            {emailError.email && 
                            <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Enter valid email!</p>
                            }
                            <input type="text" id="email" name="email" placeholder="Enter email" value={values.email} onChange={onChangeHandler} onBlur={(e) => setEmailError(e, values)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            {lengthError.username && 
                            <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Username must be atleast 3 charter!</p>
                            }
                            <input type="text" id="username" name="username" placeholder="Enter username" value={values.username} onChange={onChangeHandler} onBlur={(e) => setLengthError(e, 2, values)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="password">Password</label>
                            {lengthError.password && 
                            <p className="form-error"><i className="fa-solid fa-circle-exclamation fa-bounce"></i> Password must be atleast 3 charter!</p>
                            }
                            <input type="password" id="password" name="password" placeholder="Enter password" value={values.password} onChange={onChangeHandler} onBlur={(e) => setLengthError(e, 2, values)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="repass">Repeat password</label>
                            <input type="password" id="repass" name="repass" placeholder="Repeat password" value={values.repass} onChange={onChangeHandler} />
                        </div>
                        <input className="btn primary-btn" type="submit" value="Sign up"/>
                    </form>
                    <span>Already have an acount? <Link href="/login">Sign in</Link></span> 
                </div>
            </div>
        </div>
    );
};