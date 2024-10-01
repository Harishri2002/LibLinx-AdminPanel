const Sign = require('../models/SignupAuth');
const bcrypt = require('bcrypt');
require("dotenv").config();

// async function comparee(userPass,hashPass){
//   const res = await bcrypt.compare(userPass,hashPass);
//   console.log(res)
//   return res;
// }

async function SignUp(req,res){
    try{
        
    const body = req.body;
    const { Reg, email, password } = body;
    if (!Reg || !email || !password) {
           res.status(400);
           throw new Error("please enter value for required fields");
       }
    const userAvailability = await Sign.findOne({ email });

    if (userAvailability) {
        res.status(400);
        throw new Error("User already exists");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await Sign.create({
          Reg,
          email,
          password: hashedPassword,
        });
  
        if (newUser) {
          res.status(201).json({ _id: newUser.id, Reg, email });
        } else {
          res.status(400);
          throw new Error("use data not valid");
        }
      }
    console.log(body);
    }
    catch{
        return res.status(400).json({msg: "user not created"});
    }
}

async function Login(req,res){
  try{
    const { email, password } = req.body;

    const check = await Sign.findOne({ email });
    const passCheck = await bcrypt.compare(password,check.password);
    if(passCheck){
      // res.render("home",{name:req.body.name})
      res.json("Logged")
    }
    else{
      res.json("wrong details")
    }
  }
  catch{
    res.json("wrong details")
  }
}

module.exports = { SignUp,Login };