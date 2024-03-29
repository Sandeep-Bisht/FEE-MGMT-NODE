const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const userSchema = new Schema({
    username:{
        type:String,        
        required:true,
        unique:true
    },
    password:{
        type:String,        
        required:true
    },
    role:{
        type:String,    
    },
},{timestamps: true} 
)

mongoose.model('user',userSchema);
