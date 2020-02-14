let mongoose = require('mongoose')
let token = require('rand-token')


 


const UsersSchema = new mongoose.Schema({
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
    Nom:{
      type: String,
      required:true
    },
    Prenom:{
      type:String, 
      required: true     
    },
    Password:{
      type:String,
      required :true
    },
    Email:{
      type:String,
      required:true
    } 
    

})
var UsersModel = mongoose.model('Users', UsersSchema)

module.exports = UsersModel
