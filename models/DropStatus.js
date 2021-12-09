const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
const DropStatus = new Schema({
     
    created_by:{
         type:Schema.Types.ObjectId,
            ref:"user"
 }, 
    message:{
        type:String,  
    }, 
    sendername:{
        type:String,  
    }, 
},{timestamps: true}
)
mongoose.model('DropStatus',DropStatus);
