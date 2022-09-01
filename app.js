const express = require('express');
const app = express();

app.use(express.static('public')); //Attach middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(require('cors')());
//Dynamic Routing
app.use('/', require('./routes/user'));

const server = app.listen(1222, (err) => {
    if(err){
        console.log('Server Crash ', err);
    }else{
        console.log('Server Start ', server.address);
    }
})