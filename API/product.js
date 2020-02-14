let mongoose = require('mongoose')
let token = require('rand-token')



const productSchema = new mongoose.Schema({
    ip:{
        type: String,
        required: true
    },

    activation_token: {
        type: String,
        default: function() {
            return token.generate(64);
        }
    },
    
    nom:{
      type:String, 
      required: true     
    },
    prix:{
        type:Number, 
        required: true     
      }
    

})
var productModel = mongoose.model('Product', productSchema)

module.exports = productModel
