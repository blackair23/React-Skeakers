import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { updateProfile } from "../../services/authService";

export const EditProfile = ({setProfile, onClose}) => {
    const { user, userLogin } = useContext(AuthContext);
    const onSubmit = async (e) => {
        e.preventDefault();
        
        const formData = Object.fromEntries( new FormData(e.target));
        try {
            const data = await updateProfile(user, formData);
            userLogin(data);
            setProfile(data);
            onClose();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <div id="overlay">
        <div className="backdrop" onClick={onClose}></div>
            <div className="form-popup profile-edit">
                <div className="form-part">
                    <button onClick={onClose} className="close-btn"><i className="fa-solid fa-xmark"></i></button>
                    <form onSubmit={onSubmit}>
                        <h2>Edit profile</h2>
                        <div className="form-element">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Enter username" defaultValue={user.username}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" name="email" placeholder="Enter email" defaultValue={user.email}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" placeholder="Enter city" defaultValue={user.city}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="profileImg">Profile Img</label>
                            <input type="text" id="profileImg" name="profileImg" placeholder="Chose Img" defaultValue={user.profileImg}/>
                        </div>
                        <input className="btn primary-btn" type="submit" value="Edit"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
} 