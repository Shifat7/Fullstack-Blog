const express = require("express");
const app = express();
const mongoose = require("mongoose");
const comModel = require("./models/comments.js");

const cors = require("cors");

app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://shifat:shifat321@cluster0.pxkek.mongodb.net/blog?retryWrites=true&w=majority'); 

app.get('/getComments', (req, res) => {
    comModel.find({}, (err, result) => {
        if (err){
            res.json(err)
        } else {
            res.json(result)
        }
    })
});



app.listen(3001, () => {


    console.log("Running")
})