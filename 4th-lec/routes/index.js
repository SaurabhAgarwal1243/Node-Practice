exports.index= (req,res)=>{
    res.render('index.ejs', {
        title:'home',
        className: 'home',
        users: ['saurabh', 'sachin', 'maddy']
    })
}
 exports.about= (req,res) => {
    res.render('index.ejs', {
        title:'about us',
        className: 'about'
    })
}

// app.get( '/who/:name?', (req,res) =>{
//     var name = req.params.name;
//     res.send(name + " is here")
// })
//
// app.get( '/who/:name?/:title?', (req,res)=>{
//     var name=req.params.name;
//     var title=req.params.title;
//     res.send('<p>name: '+name + '<br>title :' +title+'</p>')
// })

