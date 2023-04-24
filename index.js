const express=require('express');

const server= express();

//request handling methods
const handleAllTypesOfRequests=(req,res)=>{
    res.send('Response from Server.Use')
}

const handleLogin=(req,res)=>{
    res.send('This is a get request from the Server')
}
const handleProfile=(req,res)=>{
    res.send('This is a post request from the Server')
}
const handleServices=(req,res)=>{
    res.send('This is a put request from the Server')
}
const handleContact=(req,res)=>{
    res.send('This is a delete request from the Server')
}



server.post('/profile', handleProfile);
server.get('/login', handleLogin);
server.put('/services', handleServices);
server.delete('/contact', handleContact);
server.listen(3000, ()=>console.log('Server is ready'));