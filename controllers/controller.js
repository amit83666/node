
const db = require('../models');

//create main model
const User = db.user;

//create user
const addUser = async(req, res)=>{
    let info = {
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        balance:req.body.balance,
        amit:req.body.amit   
    }
    const user = await User.create(info);
    res.status(200).send(user);
    console.log(user);
}

module.exports={
    addUser,
}