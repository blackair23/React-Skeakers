import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../context/authContext";
import { getProfileInfo } from "../../services/profileService";
import { Published } from "./Published";
import './profile.css';
import { EditProfile } from "./EditProfile";
import { MyOrders } from "./MyOrders";
import { CustomerOrders } from "./CustomerOrders";
import { makeConversation } from "../../services/conversationService";
import swal from "sweetalert";

export const Profile = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [profile, setProfile] = useState({});

    const [openModal, setModal] = useState({modal: null, state: false});

    const navigate = useNavigate();

    const modalHandler = (modal) => {
        setModal({modal, state: true});
    }
    const closeModal = () => {
        setModal({modal: null, state: false});
    }

    useEffect(() => {
        getProfileInfo(id)
            .then(prof => {
                console.log(prof);
                setProfile(prof);
            })
            .catch(err =>{
                console.log(err);
            })
    }, [id]);

    const messageHandler = () => {
        makeConversation(user._id, profile._id)
            .then((conv) => {
                console.log(conv);
                navigate('/message');
            })
            .catch((error)=>{
                swal({
                    icon: "error",
                    text: error.message,
                 });
            })

    }

    return (
        <>
        {profile.username ? 
        <>  
        <section id="profile">
            <div className="profile-info">
                <div className="color"></div>
                <img className="profile-img" src={profile.profileImg} alt="" />
                <h2 className="profile-name">{profile.username}</h2>
                <p>Email: <strong>{profile.email}</strong></p>
                <p>City: {profile.city}</p>
            {user._id === profile._id ?
                <>
                    <button className="btn primary-btn" onClick={() => modalHandler('edit')}>Edit</button>
                    {openModal.modal === 'edit' &&<EditProfile setProfile={setProfile} onClose={closeModal}></EditProfile>}    
                </>
                :
                <button onClick={messageHandler} className="btn primary-btn">Message</button>
            } 
            </div>
        </section> 
        <Published></Published>
        <MyOrders></MyOrders>
        <CustomerOrders></CustomerOrders>
        </>
        :
            <h2>Loading...</h2>
        }
        </>
    )
}