const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:String,required:true},
    mobile:{type:Number,required:true},
    work:{type:String,required:true},
    add:{type:String,required:true},
    desc:{type:String,required:true},
    listen:{type:String,required:true},
    read:{type:String,required:true},
    write:{type:String,required:true},
    speak:{type:String,required:true},
    Overall:{type:String,required:true}
});
const users = new mongoose.model("users",userSchema)
module.exports = users;