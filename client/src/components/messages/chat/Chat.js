export const Chat = ({conversation, message, user }) => {
    let owner = message.senderId === user._id;
    let friend = conversation.members.find(c => c._id !== user._id);
    return(
        <div className={owner ? "sender" : "reciver"}>
            <p>{message.text}</p>
            <img src={owner ? user.profileImg : friend.profileImg} alt=""/>
        </div>
    )
}