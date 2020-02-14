let mongoose = require('mongoose')
let token = require('rand-token')



 


const RemiseSchema = new mongoose.Schema({

    nom:{
      type:String,
      required:true
    },
    pourcentage:{
      type:Number, 
      required: true     
    },
 
    

})
var RemiseModel = mongoose.model('Remise', RemiseSchema)

module.exports = RemiseModel
