const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http= require('http');

const publicpath=path.join(__dirname , '../public');
const port= process.env.PORT||3000;

var app = express();
var server=http.createServer(app);
var io= socketIO(server);

io.on('connection',(socket)=>{
    console.log('A user is connected');
    socket.on('disconnect',()=>{
        console.log('User is disconneted');
    });
});


app.use(express.static(publicpath));

server.listen(port,()=>{
    console.log(`Server on port ${port}`);
});