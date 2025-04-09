const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h2>hello world</h2><h3>Hello world!!<b>after edinting</b></h3>`)
})

app.listen(8080);
