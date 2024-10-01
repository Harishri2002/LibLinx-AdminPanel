const Student = require("../models/Student");
const Books = require('../models/Books');
const Hold = require('../models/Holder')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function Holder(req, res) {
  try{
  const body = req.body;
  const { BookName,Reg,Event,ReturnAt } = body;
  console.log(BookName,Reg,Event)
  if (!Reg || !BookName ||!Event) {
    res.status(400);
    throw new Error("please enter value for required fields");
  }

  const student = await Student.findOne({ Reg });
  const book = await Books.findOne({BookName})

  if(!book){
    res.status(201).json("Book does Not Exists");
  }
  else if(!student){
    res.status(201).json("Student does not exists");
  }
  else if (student && book && Event === "Taking") {
    let UpdatedBook = await Books.findByIdAndUpdate(book._id, { $set: { Tag: 1 }});
    console.log(UpdatedBook)
    //Puting data into Records Database
    console.log(BookName,Reg,Event,ReturnAt)
    const newData = {
    BookName : BookName,
    Reg : Reg,
    Event: Event,
    BorrowAt: new Date(),
    ReturnAt: ReturnAt,
    process:"pending"
    };
    console.log(newData);

    let newRec = await Hold.create(newData);
    res.status(201).json({ str:"Book Updated Sucessfully"});
  } 
  else {
    let UpdatedBook = await Books.findByIdAndUpdate(book._id, { $set: { Tag: 0 }});
    let date =new Date();
    const query = { BookName: BookName, Reg: Reg, Event:'Taking' };
    console.log(query)
    let holder = await Hold.findOne(query); 
    console.log(holder)
    if(holder===null){
      res.status(201).json("Already Updated");
    }
    else{
    const UpdatedHolder = await Hold.findByIdAndUpdate(holder._id, { $set: { ReturnAt:date,Event:"Returning",process:"Done"}});
      res.status(201).json("Book Return Details Updated");
    }
  }
}
catch{
    return res.status(400).json({msg: "Inernal Error"});
  }
}

module.exports = { Holder };
