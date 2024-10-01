const express = require("express");
const cors=require("cors")
const app=express();
require("dotenv").config()
const bodyParser = require("body-parser");


app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.use(bodyParser.json({  limit: "30mb" , extended: true  }));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true}));
app.use(cors());

const { connectDb } = require("./Config/DbConfig");

app.use("/admin",require("./routes/admin"));
connectDb()

app.use("/books",require("./routes/BooksRoute"));


app.use("/students",require("./routes/students"));

app.use("/qrscan",require("./routes/QRscan"));

app.use("/Records",require("./routes/Records"));

app.use("/Holder",require("./routes/Holder"));
app.use("/Dash",require("./routes/Dash"));

// app.use("/qrscan",require("./routes/QRscan"));

const port = process.env.PORT;

app.listen(process.env.PORT,()=> {
    console.log("server Started "+port)
})
// mongoose.connect(CONNECTION_URL)
//     .then( () => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
//     .catch( (error) => console.log(error.message));
