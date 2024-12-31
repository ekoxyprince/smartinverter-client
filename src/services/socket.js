import {io} from 'socket.io-client'

const socket = io("https://smartinverter-server.onrender.com",{
    transports:["websocket"],
    auth:{
        token:localStorage.getItem("token")
    }
})

export default socket