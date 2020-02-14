let express = require('express')
let router = express.Router()
let Customer = require('./users.js')
let sha256 = require('sha256')
var jwt = require('jsonwebtoken')



router.get('/', function (req,res)  {
    Customer.findOne({Email : req.query.email} , (error , results) => {
        let passwords=results.Password
        let challenge = sha256(results._id + results.Password + Date.now())
        res.json({challenge, passwords})
    }  )
})

router.post('/', function(req,res) {
    let clientResponse =req.body.response
    let email = req.body.email  
    let challenge = req.body.challenge
    Customer.findOne({Email : email}, (error, results) => {
    let serverResponse = sha256(challenge+results.Password+"isitech")
    if (clientResponse === serverResponse){
       let token = jwt.sign({
            id: results._id,
            name : results.Email
            } , "KIKI")
            res.json({token})}
        else
        {
            res.status(401).send({message : "Unauthorized"})
        }
    
})

})

module.exports = router;