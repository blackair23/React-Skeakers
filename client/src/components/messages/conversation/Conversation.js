export const Conversation = ({conversation, user}) => {
    // console.log(conversation)
    // console.log(conversation.conversation)

    const friend = conversation.members.find((m) => m._id !== user._id);
    console.log(friend)

    return (    
        <div className="current-conv">
            <img src={friend.profileImg} alt={friend.username}/>
            <p>{friend.username}</p>
        </div>
    )
}