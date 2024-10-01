const Books = require('../models/Books');
const Student = require("../models/Student");
const qrscan = require("../models/qrscan");
const Hold = require('../models/Holder')

async function getDetails(req,res){
    try{
        const BookNo = await Books.countDocuments();
        const stdNo = await Student.countDocuments();
        const HoldNo = await Hold.countDocuments();
        const qrNo = await qrscan.countDocuments();

        const details = {
           BookNo : BookNo,
           stdNo : stdNo,
           Hold : HoldNo,
           qrNo : qrNo,
        };
        console.log(qrNo);
        console.log(details);
        res.status(200).json(details);
    }
    catch(error){
        res.status(404).json({ Message: error.Message } );
    }
}

module.exports = { getDetails };