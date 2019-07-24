const 
   express = require('express'),
   app = express(),
   quotes = require('./db/mongoose'),
   port = 5000;



app.use(express.json());
var id =2;




app.get('/', (req, res) =>{
    res.json({'success':true});
})

app.get('/quotes', (req, res) => {
    res.json({'sucess': true, quotes});
})

app.get('/quotes/:id', (req, res) => {
    let quote = quotes.find(x => x.id == req.params.id);
    res.json({'sucess': true, quotes});
})

app.post('/quotes', (req, res) =>{
    quotes.push({...req.body, id});
    id++;
    res.json({'success': true, quotes});
})

app.patch('/quotes/:id' , (req, res) => {
    let quotes = find(x => x.id == req.params.id);
    quote.quote.quote = req.body.quote;
    res.json({'success': true, quote});

});


   app.listen(port, err => {
    console.log(err || `skellator ${port}`);

   })