import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/authContext';
import { CartConstext } from '../../context/cartContext';
import { Login } from '../login/Login';
import { Register } from '../register/Register';

import './header.css';

export const Header = () => {
    const { user } = useContext(AuthContext);
    const { cart } = useContext(CartConstext);

    // TODO close dropdown on outside click  
    const [openModal, setModal] = useState({modal: null, state: false});
    const onAuthClick = (modal) => {
        setModal({modal, state: true});
    }
    const onClose = () => {
        setModal({modal: null, state: false});
    }

    return (
        <>
        <header>
            {openModal.modal === "login" && <Login onAuthClick={onAuthClick} onClose={onClose}></Login> }
            {openModal.modal === "register" && <Register onAuthClick={onAuthClick} onClose={onClose}></Register> }
            <nav>
                <h1><Link to='/'>SNEAK.IN</Link></h1>
                {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                <ul role="list" className="nav-links"> 
                    <li><Link to='/create'>Sell</Link></li>
                    <li><Link to='/catalog'>Catalog</Link></li>
                    <li><Link to='/about'>About us</Link></li>
                </ul> 
                <div className='with-dropdown'>
                    <Link className="cart-link" to="/cart"><div className="header-cart"><i className="fa-solid fa-cart-shopping"></i> {cart.length > 0 ? <span className="cart-badge">{cart.reduce((a, c) => a + c.quantity, 0)}</span> : ''}</div></Link>
                    <button onClick={openModal.modal === "menu" ? () => onClose() : () => onAuthClick("menu")} className={user.profileImg? "btn-img": "btn-menu"}>{user.profileImg ? <img src={user.profileImg} alt="profile-img" /> : <i class="fa-solid fa-caret-down"></i>}</button>
                    {openModal.modal === 'menu' && 
                        <div className='dropdown' onBlur={onClose}>
                            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                        <ul role="list" > 
                            {user.username
                                ?
                                <>
                                <li><Link to={`/message`} onClick={onClose}>Messages</Link></li>
                                <li><Link to={`/profile/${user._id}`} onClick={onClose}>Profile</Link></li>
                                <li><Link to='/logout' onClick={onClose}>Logout</Link></li>
                                </>
                                :
                                <>
                                <li><button onClick={() => onAuthClick("login")} className="dropdown-elemets" >Sign In</button></li>
                                <li><button onClick={() => onAuthClick("register")} className="dropdown-elemets">Sign Up</button></li>
                                </>
                            }
                        </ul> 
                        </div>
                        }
                <button className="btn burger-menu"><i className="fa-solid fa-bars"></i></button>
                </div>
               
            </nav>
         
        </header>
        
    </>
    );
};
