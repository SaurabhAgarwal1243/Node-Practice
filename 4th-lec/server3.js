const express = require('express');
const routes = require('./routes')
const app = express();

app.set('View engine','ejs');

app.get('/', routes.index);
app.get('/about', routes.about);

app.get('*' , (req,res)=>{
    res.send('Bad Route')
})

app.listen(3003,function(){
    console.log('Server started on http://localhost:3003');
})