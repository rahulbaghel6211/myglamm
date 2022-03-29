const mongoose=require("mongoose");

module.exports=()=>{
    return mongoose.connect("mongodb+srv://Rahulbaghel:rahul123@cluster0.vm86t.mongodb.net/myglamm?retryWrites=true&w=majority")
};