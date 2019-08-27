const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http= require('http');
const {generateMessage}=require('./utils/message');

const publicpath=path.join(__dirname , '../public');
const port= process.env.PORT||3000;

var app = express();
var server=http.createServer(app);
var io= socketIO(server);

io.on('connection',(socket)=>{
    console.log('A user is connected');
    socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));
    socket.broadcast.emit('newMessage',generateMessage('Admin','New User Arrived'));
    
    
    socket.on('disconnect',()=>{
        console.log('User is disconneted');
    });
    

    socket.on('createMessage',(message,callback)=>{
        console.log('create Message',message);
        io.emit('newMessage',generateMessage(message.from,message.text));
        callback('\'From Server\'');    
        // socket.broadcast.emit('newMessage',{
        //     from :  message.from,
        //     text : message.text,
        //     createAt : new Date().getTime()
        // });
    });
});


app.use(express.static(publicpath));

server.listen(port,()=>{
    console.log(`Server on port ${port}`);
});