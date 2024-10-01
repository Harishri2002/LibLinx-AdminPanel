const express=require("express")
const {getDetails} = require('../controllers/Dashboard');

const route = express.Router();

route.get("/", getDetails);


module.exports  = route