const express = require('express');
const cors = require("cors");

const app = express();

var corsOptions = {
    origin:'https://localhost:8081'
}


//middlewarerouter
app.use(cors(corsOptions))

app.use(express.json());

app.use(express.urlencoded({extended:true}));


//routers
const router = require('./routers/router');
app.use('/', router);

//testing app
app.get('/',(req, res)=>{
    res.json({message:"hello from api"})
})

const PORT = process.env.PORT ||8080;

//server 

app.listen(PORT, ()=>{
    console.log(`server is running on port no. ${PORT}`);
})