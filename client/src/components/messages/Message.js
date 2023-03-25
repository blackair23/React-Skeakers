import { useEffect, useState } from 'react';
import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../context/authContext';
import { getConversation } from '../../services/conversationService';
import { getMessages, sendMessage } from '../../services/messageService';
import { Chat } from './chat/Chat';
import { Conversation } from './conversation/Conversation';
import './Message.css';

export const MessageComponent = () => {
    const { user } = useContext(AuthContext);
    const [conversations, setConversation] = useState({})
    const [currectChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState({});
    const [newMessage, setNewMessages] = useState("");

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
    }, [currectChat])

    const onSubmit = async (e) => {
        e.preventDefault();
        const message = {
            conevrsationId: currectChat._id,
            senderId: user._id,
            text: newMessage,
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
                                <Chat key={m._id} message={m} conversation={currectChat} user={user}/>
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