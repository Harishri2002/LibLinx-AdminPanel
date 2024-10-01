const mongoose=require("mongoose");

const SignupAuth = mongoose.Schema({
    Reg: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})



module.exports=mongoose.model("admin",SignupAuth);



