const express=require("express")
const { addStd,getStudent } = require('../controllers/Students');

const route = express.Router();

route.post("/", addStd);
route.get("/get", getStudent);

module.exports  = route