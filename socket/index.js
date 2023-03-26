const io = require("socket.io")(8900, {
    cors: {
        origin: ["http://localhost:3000","http://localhost:3030"]
    },
});

let users = [];

const getUser = (userId) => {
    return users.find(user => user.userId === userId)
}

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

io.on("connection", (socket) => {

    //On connection
    console.log("a user connected.");
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    })

    //On message send/get
    socket.on("sendMessage", ({senderId, reciverId, text}) => {
        const user = getUser(reciverId);
        // console.log('get',user.socketId);
        if(user){
            io.to(user.socketId).emit("getMessage", {
                senderId, 
                text
            })
        }else{
            console.log("user not active")
        }
    })  

    //On disconect
    socket.on("disconnect", () => {
        console.log('User disconnected!')
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
})