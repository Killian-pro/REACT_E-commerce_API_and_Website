let mongoose = require('mongoose')


const ParrainageSchema = new mongoose.Schema({
  ip:{
    type: String,
    required: true
},

   
    deja_client:{
      type: Boolean,
      required:true
    },
    parrain:{
      type:String, 
      required: true     
    },
    code_parrainage :{
        type:String, 
        required: true     
      },
 
    

})
var ParrainageModel = mongoose.model('parrainage', ParrainageSchema)

module.exports = ParrainageModel
