const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('<h1>Hello</h1> Express')
})

app.get('/me', (req,res) => {
    res.send("@AgarSaurabh")
})

app.get( '/who/:name?', (req,res) =>{
    var name = req.params.name;
    res.send(name + " is here")
})

app.get( '/who/:name?/:title?', (req,res)=>{
    var name=req.params.name;
    var title=req.params.title;
    res.send('<p>name: '+name + '<br>title :' +title+'</p>')
})

app.get('*' , (req,res)=>{
    res.send('Bad Route')
})

app.listen(3002,function(){
    console.log('Server started on http://localhost:3002');
})