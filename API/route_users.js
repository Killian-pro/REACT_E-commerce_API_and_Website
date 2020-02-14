let express = require('express')
let router = express.Router()
let users = require ('./users.js');
const retrieveIp = require('retrieve-ip');


router.get('/', function (req,res)  {
    users.find({} , (error , results) => {
        res.json(results)
    }  )
})  

router.post('/', function(req,res)  {
    console.log(req.body)
    let body = req.body
    body.ip = retrieveIp(req)
    let newusers = new users(body)
    newusers.save((error) => {
        if(error)
        res.send(400 , error)
        else
        res.json(newusers)
    })

})





module.exports = router;