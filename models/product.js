const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecomercedb')

let productSchema=mongoose.Schema({
    image:String,
    company: String,
    item_name: String,
    original_price: Number,
    current_price: Number,
    discount_percentage: Number,
    return_period: Number,
    delivery_date: {
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Product',productSchema
)