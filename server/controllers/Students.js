const std = require('../models/Student');

async function addStd(req,res){
    try{
    const body = req.body;
    const { Name, Reg, course, semister } = body;
    if (!Name || !Reg || !course || !semister) {
           res.status(400);
           throw new Error("please enter value for required fields");
       }
    const userAvailability = await std.findOne({ Reg });

    if (userAvailability) {
        res.status(400);
        throw new Error("User already exists");
      } else {
        const newUser = await std.create({
          Name,
          Reg,
          course,
          semister
        });
  
        if (newUser) {
          res.status(201).json({ _id: newUser.id, Name, Reg });
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

async function getStudent(req,res){
  try{
      const GetStd = await std.find();
      console.log(GetStd);
      res.status(200).json(GetStd);
  }
  catch(error){
      res.status(404).json({ Message: error.Message } );
  }
}


module.exports = { addStd,getStudent };