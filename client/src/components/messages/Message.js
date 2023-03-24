import { useState } from 'react';
import './Message.css';

export const MessageComponent = () => {

    const [message, setMessage] = useState({})

    return (
        <section id="chat">
            <div className="chat-window" >
                <div className="window" id="style-7">
                    <div className="sender">
                        <p>Lorem ipsum</p>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                    </div>
                    <div className="reciver">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="sender">
                        <p>Lorem ipsum, dolor sit amet consectetur a</p>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                    </div>
                    <div className="sender">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta esse eius non ex? Odit doloremque commodi ea soluta aut totam porro laboriosam. Nisi, dolorum quisquam!</p>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                    </div>
                    <div className="reciver">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta esse eius non ex? Odit doloremque commodi ea soluta aut totam porro laboriosam. Nisi, dolorum quisquam! Adipisci qui ipsa id temporibus.</p>
                    </div>
                    <div className="reciver">
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="sender">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta esse eius non ex? Odit doloremque commodi ea soluta aut totam porro laboriosam. Nisi, dolorum quisquam!</p>
                        <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                    </div>
                </div>
                <form>
                    <input type="text" />
                    <button><i className="fa-regular fa-paper-plane"></i>Send</button>
                </form>
            </div>
        </section>
    )
}