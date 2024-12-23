const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecomercedb')

let userSchema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    cart:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
})

module.exports=mongoose.model('User',userSchema)