import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../context/authContext';
import { getConversation } from '../../services/conversationService';
import { getMessages, sendMessage } from '../../services/messageService';
import { Chat } from './chat/Chat';
import { Conversation } from './conversation/Conversation';
import './Message.css';
import {io} from "socket.io-client";
// import { getProfileInfo } from '../../services/profileService';

export const MessageComponent = () => {
    const { user } = useContext(AuthContext);
    const [conversations, setConversation] = useState([])
    const [currectChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
    const [newMessage, setNewMessages] = useState("");
    const [arivalMessage, setArivalMessages] = useState(null);
    const scrollRef = useRef();

    useEffect(() => {
        setSocket(io("ws://localhost:8900"));
   
    }, []);

    useEffect(() => {
        socket?.on("getMessage", data => {
            console.log(data);
            // getProfileInfo(data.senderId)
            // .then(prof => {
            //     // console.log(prof);
            //     setArivalMessages({
            //         senderId: prof,
            //         text: data.text,
            //     });
            // })
            // .catch(err =>{
            //     console.log(err);
            // })
            setArivalMessages({
                senderId: data.senderId,
                text: data.text,
                // cretedAt: Date.now(),
            });
        });
    }, [socket]);

    useEffect(() => {
        arivalMessage && currectChat?.members.some(e => e._id === arivalMessage.senderId) &&
        setMessages((e) => [...e, arivalMessage]);
        console.log('---------------=',arivalMessage);
        console.log('---------------=', currectChat?.members);
        // console.log('---------------=', arivalMessage.senderId._id);
    }, [arivalMessage, currectChat])

    useEffect(() => {
        socket?.emit("addUser", user._id);
        socket?.on("getUsers", users => {
            console.log('->>>>',users); 
            // console.log(users); 
        })

        
    }, [socket, user]);
    
    // useEffect(() => {
    //     socket?.on("getMessage", message => {
    //         console.log(message)
    //     })
    // }, [])

    useEffect(() => {
        getConversation(user._id)
            .then((conv) => {
                console.log(conv);
                setConversation(conv);
            })
            .catch((error) => {
                swal({
                    icon: "error",
                    text: error.message,
                 });
            })
    }, [user])


    useEffect(() => {
        getMessages(currectChat?._id)
            .then((res)=> {
                setMessages(res);
            })
            .catch((error) => {
                swal({
                    icon: "error",
                    text: error.message,
                 });
            })
    }, [currectChat]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    const onSubmit = async (e) => {
        e.preventDefault();
        const message = {
            conevrsationId: currectChat._id,
            senderId: user._id,
            text: newMessage,
        }

        const reciverId = currectChat.members.find(m => m._id !== user._id);
        console.log(reciverId);
        socket.emit("sendMessage", {
            senderId: user._id,
            reciverId: reciverId._id,
            text: newMessage,
        })
        if(newMessage === "") {
            swal({
                icon: "warning",
                text: "Can not send empty text",  
            })
            return
        }
        try {
            let send = await sendMessage(message);
            setMessages([...messages, send]) 
            setNewMessages('');
        } catch (error) {
            swal({
                icon: "error",
                text: error.message,
            }); 
        }
    }

    return (
        <section id="chat">
            <div className='convesation-window'>
                {conversations.length > 0 && conversations.map((c) => 
                    <div onClick={() => setCurrentChat(c)}>
                        <Conversation key={c._id} conversation={c} user={user}/> 
                    </div>
                )}
            </div>
            <div className="chat-window" >
                <div className="window" id="style-7">
                    {
                        currectChat ?
                        messages?.map( m => (
                                <div ref={scrollRef}>
                                    <Chat key={m._id} message={m} conversation={currectChat} user={user}/>
                                </div>
                            ))
                        :
                        <h3>No conversations!</h3>
                    }
                </div>
                <form>
                    <input 
                    type="text" 
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessage}
                    />
                    <button onClick={onSubmit}><i className="fa-regular fa-paper-plane"></i>Send</button>
                </form>
            </div>
        </section>
    )
}